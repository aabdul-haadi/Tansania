"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Save, ArrowLeft, Image as ImageIcon, Sparkles, Globe, Layout, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BlogEditorProps {
  initialData?: any;
  onSave: (data: any) => Promise<void>;
}

export function BlogEditor({ initialData, onSave }: BlogEditorProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    excerpt: initialData?.excerpt || '',
    contentMarkdown: initialData?.contentMarkdown || '',
    category: initialData?.category || 'Planning',
    status: initialData?.status || 'DRAFT',
    authorName: initialData?.authorName || 'Serengeti Dreams Team',
    coverImage: initialData?.coverImage || '',
    seo: initialData?.seo || { title: '', description: '' },
  });

  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('content');

  const handleTitleChange = (val: string) => {
    setFormData({
      ...formData,
      title: val,
      slug: initialData ? formData.slug : val.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    });
  };

  const handleSave = async (statusOverride?: string) => {
    setSaving(true);
    await onSave({ ...formData, status: statusOverride || formData.status });
    setSaving(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white sticky top-0 z-30 py-6 border-b border-border">
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="rounded-xl h-11 px-4 font-bold uppercase tracking-widest text-[10px]">
            <Link href="/admin/blog"><ArrowLeft className="w-4 h-4 mr-2" /> Library</Link>
          </Button>
          <div className="h-6 w-px bg-border hidden md:block" />
          <div className="min-w-0">
            <h1 className="font-headline font-bold text-lg text-secondary uppercase truncate max-w-[250px] leading-none">{formData.title || 'Draft Article'}</h1>
            <p className="text-[8px] text-muted-foreground font-bold uppercase tracking-widest mt-1">/blog/{formData.slug || '...'}</p>
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" onClick={() => handleSave('DRAFT')} disabled={saving} className="flex-grow md:flex-grow-0 rounded-xl h-12 px-6 font-bold uppercase tracking-widest text-[10px] border-muted">
            Save Draft
          </Button>
          <Button onClick={() => handleSave('PUBLISHED')} disabled={saving} className="flex-grow md:flex-grow-0 gap-2 rounded-xl h-12 px-8 shadow-xl font-bold uppercase tracking-widest text-[10px]">
            <Save className="w-4 h-4" /> Publish Now
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3 space-y-4">
          <Card className="border-none shadow-sm rounded-[2rem] bg-white p-4">
            <div className="space-y-1">
              {[
                { id: 'content', label: 'Article Body', icon: Layout },
                { id: 'media', label: 'Visual Media', icon: ImageIcon },
                { id: 'seo', label: 'SEO & Metadata', icon: Search },
                { id: 'settings', label: 'Post Settings', icon: Globe },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full flex items-center gap-3 p-3.5 rounded-xl transition-all font-bold text-[10px] uppercase tracking-widest",
                    activeTab === tab.id 
                      ? "bg-secondary text-white shadow-lg" 
                      : "text-muted-foreground hover:bg-muted hover:text-secondary"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </Card>

          <Card className="border-none shadow-sm rounded-[2rem] bg-primary/5 p-6 border border-primary/10">
            <div className="flex items-center gap-2 text-primary font-bold text-[9px] mb-3 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> AI Writer Assist
            </div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest leading-relaxed mb-4">
              Our specialists can help refine your safari story or generate high-impact meta tags.
            </p>
            <Button size="sm" variant="outline" className="w-full rounded-lg h-9 border-primary/20 text-primary font-bold uppercase tracking-widest text-[8px]">
              Magic Draft
            </Button>
          </Card>
        </div>

        <div className="lg:col-span-9">
          {activeTab === 'content' && (
            <Card className="border-none shadow-sm rounded-[2.5rem] bg-white p-8 md:p-12 space-y-8">
              <div className="space-y-8">
                <div className="space-y-3">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Headline</Label>
                  <Input 
                    value={formData.title} 
                    onChange={(e) => handleTitleChange(e.target.value)} 
                    placeholder="The Great Migration: A Visual Journal..."
                    className="text-2xl font-bold h-16 rounded-2xl border-none bg-muted/20 px-6 uppercase focus:ring-primary/20 tracking-tighter"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Excerpt (Summary)</Label>
                  <Textarea 
                    value={formData.excerpt} 
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Describe the journey in two sentences..."
                    className="min-h-[120px] rounded-2xl p-6 bg-muted/20 border-none text-base font-bold leading-relaxed uppercase tracking-tight"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Body Markdown</Label>
                    <Badge variant="outline" className="text-[8px] font-bold uppercase tracking-widest border-muted">Draft Mode</Badge>
                  </div>
                  <Textarea 
                    className="min-h-[600px] font-bold text-sm leading-relaxed rounded-2xl p-10 bg-muted/20 border-none focus:ring-primary/20"
                    value={formData.contentMarkdown} 
                    onChange={(e) => setFormData({ ...formData, contentMarkdown: e.target.value })}
                    placeholder="# Start your expedition log..."
                  />
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'media' && (
            <Card className="border-none shadow-sm rounded-[2.5rem] bg-white p-8 md:p-12 space-y-8">
              <div className="space-y-8">
                <div className="space-y-3">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Cover Image Source</Label>
                  <div className="flex gap-3">
                    <Input 
                      value={formData.coverImage} 
                      onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })} 
                      placeholder="Paste Unsplash or local image URL..."
                      className="h-14 rounded-xl bg-muted/20 border-none font-bold text-xs"
                    />
                    <Button size="icon" className="rounded-xl h-14 w-14 shrink-0 shadow-lg"><ImageIcon className="w-5 h-5" /></Button>
                  </div>
                </div>

                {formData.coverImage ? (
                  <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group border-8 border-muted/20">
                    <img src={formData.coverImage} alt="Cover Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white font-bold text-xs uppercase tracking-[0.4em]">Visual Registry Active</p>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video rounded-[3rem] bg-muted/20 border-2 border-dashed border-muted flex flex-col items-center justify-center text-muted-foreground p-12">
                    <ImageIcon className="w-12 h-12 mb-4 opacity-5" />
                    <p className="font-bold text-[10px] uppercase tracking-widest">No visual registered</p>
                  </div>
                )}
              </div>
            </Card>
          )}

          {activeTab === 'seo' && (
            <Card className="border-none shadow-sm rounded-[2.5rem] bg-white p-8 md:p-12 space-y-8">
              <div className="space-y-10">
                <div className="space-y-3">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Meta Title</Label>
                  <Input 
                    value={formData.seo.title} 
                    onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, title: e.target.value } })}
                    placeholder={formData.title}
                    className="h-14 rounded-xl bg-muted/20 border-none font-bold uppercase tracking-widest text-xs"
                  />
                </div>
                
                <div className="space-y-3">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Meta Description</Label>
                  <Textarea 
                    value={formData.seo.description} 
                    onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, description: e.target.value } })}
                    placeholder={formData.excerpt}
                    className="min-h-[120px] rounded-2xl bg-muted/20 border-none text-xs font-bold p-6 uppercase tracking-widest leading-relaxed"
                  />
                </div>

                <div className="p-8 bg-secondary/5 rounded-[2rem] border border-secondary/10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">Search Engine Simulation</span>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-[#1a0dab] text-lg font-bold hover:underline cursor-pointer uppercase truncate">
                      {formData.seo.title || formData.title || 'Untitled Journal Entry'}
                    </p>
                    <p className="text-[#006621] text-xs truncate font-bold lowercase">serengetidreams.com/blog/{formData.slug}</p>
                    <p className="text-muted-foreground text-xs line-clamp-2 font-bold uppercase tracking-widest mt-2 leading-relaxed">
                      {formData.seo.description || formData.excerpt || 'Add metadata to optimize for discovery...'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'settings' && (
            <Card className="border-none shadow-sm rounded-[2.5rem] bg-white p-8 md:p-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Category</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(val) => setFormData({ ...formData, category: val })}
                  >
                    <SelectTrigger className="h-14 rounded-xl bg-muted/20 border-none font-bold uppercase tracking-widest text-xs px-6">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Planning">Planning</SelectItem>
                      <SelectItem value="Guides">Guides</SelectItem>
                      <SelectItem value="Tips">Tips</SelectItem>
                      <SelectItem value="Culture">Culture</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Author</Label>
                  <Input 
                    value={formData.authorName} 
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })} 
                    className="h-14 rounded-xl bg-muted/20 border-none font-bold uppercase tracking-widest text-xs px-6"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">URL Segment (Slug)</Label>
                  <Input 
                    value={formData.slug} 
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="h-14 rounded-xl bg-muted/20 border-none font-bold text-xs px-6 lowercase"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Publishing Status</Label>
                  <Select 
                    value={formData.status} 
                    onValueChange={(val) => setFormData({ ...formData, status: val })}
                  >
                    <SelectTrigger className="h-14 rounded-xl bg-muted/20 border-none font-bold uppercase tracking-widest text-xs px-6">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DRAFT">Draft</SelectItem>
                      <SelectItem value="PUBLISHED">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
