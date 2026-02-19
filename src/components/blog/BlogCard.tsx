
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    authorName: string;
    createdAt: string;
    coverImage?: string;
  };
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group relative bg-background rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl",
        featured ? "md:flex md:min-h-[500px]" : "h-full"
      )}
    >
      <div className={cn(
        "relative overflow-hidden",
        featured ? "md:w-[55%] aspect-video md:aspect-auto" : "aspect-[16/10]"
      )}>
        <Image
          src={post.coverImage || `https://picsum.photos/seed/${post.slug}/800/600`}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          data-ai-hint="safari travel"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-black/20" />
        <div className="absolute top-6 left-6">
          <Badge className="bg-primary text-secondary border-none px-4 py-1 text-[10px] font-bold uppercase tracking-widest shadow-xl">
            {post.category}
          </Badge>
        </div>
      </div>

      <div className={cn(
        "p-8 md:p-10 flex flex-col justify-center",
        featured ? "md:w-[45%]" : ""
      )}>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" /> {new Date(post.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
          <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-primary" /> {post.authorName}</span>
        </div>

        <h3 className={cn(
          "font-headline font-bold leading-tight mb-4 group-hover:text-primary transition-colors",
          featured ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"
        )}>
          {post.title}
        </h3>

        <p className="text-muted-foreground font-light leading-relaxed mb-8 line-clamp-3 text-sm md:text-base">
          {post.excerpt}
        </p>

        <Link href={`/blog/${post.slug}`} className="mt-auto">
          <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-secondary group-hover:text-primary transition-all">
            Read Journal <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
