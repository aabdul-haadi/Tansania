"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Share2, 
  ChevronRight,
  Sparkles,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  CheckCircle2,
  Zap,
  Bookmark
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { BlogContactForm } from '@/components/blog/BlogContactForm';

// EXTENDED REGISTRY FOR BLOG POSTS
const posts = [
  {
    id: 'luxus-safari-tansania-15-tage',
    slug: 'luxus-safari-tansania-15-tage',
    title: 'Luxus-Safari in Tansania: 15 Tage Abenteuer & Sansibar-Luxus ab 5.399 €',
    excerpt: 'Safari und Strand in einem – erlebe das Beste aus zwei Welten! Atemberaubende Tierbegegnungen, luxuriöse Lodges und tropische Strände erwarten dich.',
    contentMarkdown: `Safari und Strand in einem – erlebe das Beste aus zwei Welten! Atemberaubende Tierbegegnungen, luxuriöse Lodges und tropische Strände erwarten dich auf dieser 15-tägigen All-Inclusive-Reise durch Tansania und Sansibar.

In einem Moment folgst du einem Löwenrudel im goldenen Licht der Serengeti, im nächsten stehst du barfuß am weißen Sandstrand Sansibars mit einem Cocktail in der Hand.

### Reise-Highlights im Überblick
- **Dauer:** 15 Tage (10 Tage Safari + 5 Tage Sansibar)
- **Preis:** Ab 5.399€ pro Person inkl. Flug
- **Gruppengröße:** Maximal 6 Personen für persönliches Erlebnis
- **Safari-Parks:** Serengeti, Ngorongoro, Tarangire, Lake Manyara
- **Sansibar:** 5 Nächte All-Inclusive in Strandvilla

### Das Safari-Abenteuer
Diese 15-tägige Luxusreise bietet alles, was du dir für eine perfekte Afrika-Erfahrung wünschst – ohne versteckte Kosten oder Überraschungen vor Ort. Alle Pirschfahrten finden in offenen 4x4-Jeeps mit erfahrenen, deutschsprachigen Guides statt.

### Sansibar – Inselparadies zum Entspannen
Nach intensiven Safari-Tagen wartet Sansibar auf dich. Ein kurzer Flug bringt dich direkt ans türkisfarbene Meer, wo du in einer exklusiven Strandvilla begrüßt wirst. Die All-Inclusive-Verpflegung lässt keine Wünsche offen – fangfrischer Fisch, tropische Früchte und die berühmten Gewürze der Insel verwöhnen deinen Gaumen.

### Was diese Luxusreise auszeichnet
1. **Kombination Safari & Strand:** Perfekte Balance aus Abenteuer und Entspannung.
2. **Echte All-Inclusive:** Keine versteckten Kosten, komplett sorgenfrei.
3. **Kleingruppe:** Intim statt Massentourismus (max. 6 Personen).
4. **Handverlesene Unterkünfte:** Luxus in der Wildnis.`,
    category: 'Planung',
    authorName: 'Samson Kyashama',
    createdAt: '2024-08-30T09:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920'
  },
  {
    id: 'wildebeest-migration-insights',
    slug: 'wildebeest-migration-insights',
    title: 'Wildebeest Migration Insights: Tipps für deine Safari',
    excerpt: 'Erleben Sie das größte Naturschauspiel der Welt. Wir teilen exklusive Einblicke in die Routen und besten Beobachtungszeiten der Großen Tierwanderung.',
    contentMarkdown: `Die Große Tierwanderung in der Serengeti ist kein einmaliges Ereignis, sondern ein fortlaufender Zyklus, der die gesamte Landschaft Tansanias prägt. Wer dieses Spektakel hautnah erleben möchte, muss die Dynamik der Herden verstehen.

### Der Rhythmus der Herden
Die Migration folgt dem Regen. Von Januar bis März sammeln sich die Herden in der südlichen Serengeti und in Ndutu zur Kalbungszeit. Dies ist eine Phase intensiver Aktivität, da tausende neugeborene Gnus die Aufmerksamkeit von Löwen, Leoparden und Hyänen auf sich ziehen.

### Die dramatischen Flussüberquerungen
Zwischen Juli und September erreichen die Herden den Norden. Hier spielen sich die legendären Szenen am Mara River ab. Der Überlebenskampf im Krokodil-verseuchten Wasser ist eine der emotionalsten Erfahrungen, die eine Safari bieten kann.

### Tipps für Ihre Planung
1. **Buchen Sie frühzeitig:** Die besten mobilen Camps, die mit den Herden mitziehen, sind oft ein Jahr im Voraus ausgebucht.
2. **Setzen Sie auf Fachwissen:** Ein erfahrener Guide, der das Verhalten der Tiere lesen kann, macht den entscheidenden Unterschied.
3. **Geduld ist der Schlüssel:** Natur lässt sich nicht erzwingen. Manchmal wartet man Stunden am Flussufer, bis das erste Tier den Sprung wagt.`,
    category: 'Planung',
    authorName: 'Samson Kyashama',
    createdAt: '2024-08-26T10:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1920'
  },
  {
    id: 'kalbung-in-ndutu',
    slug: 'kalbung-in-ndutu',
    title: 'Kalbung in Ndutu: Einmaliges Naturerlebnis',
    excerpt: 'Wenn tausende Jungtiere gleichzeitig das Licht der Welt erblicken, erwacht die Serengeti zu neuem Leben. Erfahren Sie mehr über die grüne Saison.',
    category: 'Wildnis',
    authorName: 'Maria Schmidt',
    createdAt: '2024-08-20T14:30:00Z',
    coverImage: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200'
  }
];

export default function BlogPostDetail() {
  const { slug } = useParams();
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-[#fdfcfb]">
        <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 uppercase tracking-tighter">Story Nicht Gefunden</h2>
        <p className="text-muted-foreground mb-8 font-bold uppercase tracking-widest text-xs">Dieser Teil der Savanne scheint noch unerforscht zu sein.</p>
        <Button asChild className="rounded-full px-10 h-14 font-black uppercase tracking-widest shadow-xl border-none">
          <Link href="/blog">Zurück zum Journal</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-bold">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[110] origin-left" style={{ scaleX }} />

      {/* Cinematic Editorial Header */}
      <header className="relative h-[65vh] md:h-[85vh] w-full overflow-hidden flex items-end pb-12 md:pb-24 bg-secondary">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover brightness-75 scale-105"
          data-ai-hint="safari travel"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-black/20 to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-10"
          >
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="icon" className="rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary border border-white/10 transition-all cursor-pointer">
                <Link href="/blog"><ArrowLeft className="w-5 h-5" /></Link>
              </Button>
              <Badge className="bg-primary text-white border-none px-6 py-2 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl">
                {post.category}
              </Badge>
            </div>
            
            <h1 className="font-headline text-3xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-[0.9] drop-shadow-2xl uppercase tracking-tighter max-w-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 md:gap-12 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white/90">
              <span className="flex items-center gap-3"><User className="w-4 h-4 text-primary" /> {post.authorName}</span>
              <span className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" /> 
                {isMounted ? new Date(post.createdAt).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' }) : '...'}
              </span>
              <div className="hidden md:flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <Zap className="w-4 h-4 text-primary fill-primary" />
                <span>Signature Insight</span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Journal Layout */}
      <div className="container mx-auto px-4 max-w-7xl pt-16 md:pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <main className="lg:col-span-8">
            <article className="bg-white rounded-[3rem] p-8 md:p-20 shadow-sm border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-16 opacity-[0.02] pointer-events-none">
                <Sparkles className="w-80 h-80 text-secondary" />
              </div>

              <div className="relative mb-16 md:mb-24">
                <p className="text-xl md:text-4xl font-bold text-secondary leading-tight uppercase tracking-tighter border-l-8 border-primary pl-10">
                  {post.excerpt}
                </p>
              </div>

              <div className="prose prose-xl max-w-none space-y-12">
                <div className="whitespace-pre-wrap leading-[1.8] text-sm md:text-xl font-bold text-muted-foreground uppercase tracking-tight text-justify">
                  {post.contentMarkdown}
                </div>
              </div>

              {/* Author Recognition */}
              <div className="mt-20 pt-12 border-t border-muted flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-primary/10 flex items-center justify-center font-headline font-black text-3xl text-primary shadow-inner">
                    {post.authorName?.[0]}
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-1">Lead Strategist</p>
                    <p className="font-headline font-bold text-xl md:text-3xl text-secondary uppercase tracking-tighter">{post.authorName}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                    <button key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-muted/30 flex items-center justify-center hover:bg-primary transition-all group">
                      <Icon className="w-5 h-5 text-secondary group-hover:text-white" />
                    </button>
                  ))}
                </div>
              </div>
            </article>

            {/* Narrative Expansion */}
            <div className="mt-32">
              <div className="flex items-end justify-between mb-12 md:mb-16">
                <div className="space-y-3">
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-primary">Weiterlesen</span>
                  <h3 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase tracking-tighter">Mehr aus der Wildnis</h3>
                </div>
                <Link href="/blog" className="hidden md:flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-primary hover:translate-x-3 transition-transform">
                  Gesamtes Journal <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {posts.filter(p => p.slug !== slug).map((rp) => (
                  <Link key={rp.id} href={`/blog/${rp.slug}`} className="group block">
                    <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 bg-muted relative shadow-xl">
                      <Image 
                        src={rp.coverImage} 
                        alt={rp.title} 
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                      />
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-white/95 backdrop-blur-md text-secondary border-none px-4 py-1.5 text-[9px] font-black uppercase tracking-widest shadow-xl">{rp.category}</Badge>
                      </div>
                    </div>
                    <h4 className="font-headline text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors uppercase tracking-tight line-clamp-2">{rp.title}</h4>
                    <p className="mt-4 text-[10px] md:text-xs text-muted-foreground line-clamp-2 font-bold leading-relaxed uppercase tracking-widest opacity-60">{rp.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </main>

          <aside className="lg:col-span-4 relative">
            <BlogSidebar recentPosts={posts.slice(0, 5)} />
          </aside>
        </div>
      </div>

      {/* Strategic Integration: Requested Contact Form */}
      <BlogContactForm />
    </div>
  );
}
