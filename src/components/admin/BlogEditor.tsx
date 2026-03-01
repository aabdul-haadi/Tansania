"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Save, ArrowLeft, Image as ImageIcon, Sparkles, Globe, Layout, Search } from 'lucide-react';
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
      {/* Dynamic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-background/80 backdrop-blur sticky top-0 z-30 py-6 border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="rounded-xl h-11 px-4 hover:bg-muted font-bold uppercase tracking-widest">
            <Link href="/admin/blog"><ArrowLeft className="w-4 h-4 mr-2" /> All Posts</Link>
          </Button>
          <div className="h-6 w-px bg-border hidden md:block" />
          <div>
            <h1 className="font-bold text-xl truncate max-w-[300px] uppercase">{formData.title || 'New Article'}</h1>
            <p className="text-xs text-muted-foreground font-mono">/blog/{formData.slug || '...'}</p>
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="outline" onClick={() => handleSave('DRAFT')} disabled={saving} className="flex-grow md:flex-grow-0 rounded-xl h-11 px-6 font-bold uppercase tracking-widest">
            Save Draft
          </Button>
          <Button onClick={() => handleSave('PUBLISHED')} disabled={saving} className="flex-grow md:flex-grow-0 gap-2 rounded-xl h-11 px-8 shadow-lg shadow-primary/20 font-bold uppercase tracking-widest">
            <Save className="w-4 h-4" /> Publish Post
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-4">
          <Card className="border-none shadow-sm rounded-[2rem] p-4">
            <div className="space-y-1">
              {[
                { id: 'content', label: 'Article Content', icon: Layout },
                { id: 'media', label: 'Media & Hero', icon: ImageIcon },
                { id: 'seo', label: 'SEO & Meta', icon: Search },
                { id: 'settings', label: 'Publication Settings', icon: Globe },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full flex items-center gap-3 p-3.5 rounded-xl transition-all font-bold text-sm uppercase tracking-widest",
                    activeTab === tab.id 
                      ? "bg-secondary text-white shadow-md" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </Card>

          <Card className="border-none shadow-sm rounded-[2rem] bg-primary/5 p-6 border border-primary/10">
            <div className="flex items-center gap-2 text-primary font-bold text-xs mb-3 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> AI WRITER ASSIST
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4 font-bold">
              Need help with the excerpt or meta description? Our AI can generate compelling safari copy.
            </p>
            <Button size="sm" variant="outline" className="w-full rounded-lg h-9 border-primary/20 hover:bg-primary/10 text-primary font-bold uppercase tracking-widest">
              Magic Draft
            </Button>
          </Card>
        </div>

        {/* Editor Main Area */}
        <div className="lg:col-span-9">
          {activeTab === 'content' && (
            <Card className="border-none shadow-sm rounded-[2.5rem] p-8 space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-bold ml-1 uppercase tracking-widest">Article Title</Label>
                  <Input 
                    value={formData.title} 
                    onChange={(e) => handleTitleChange(e.target.value)} 
                    placeholder="Enter a captivating safari title..."
                    className="text-2xl font-bold h-16 rounded-2xl border-none bg-muted/30 px-6 focus:bg-background transition-all uppercase"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-bold ml-1 uppercase tracking-widest">Short Excerpt</Label>
                  <Textarea 
                    value={formData.excerpt} 
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="A brief summary for cards and search results..."
                    className="min-h-[100px] rounded-2xl p-6 bg-muted/30 border-none focus:bg-background transition-all text-lg font-bold leading-relaxed"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-sm font-bold ml-1 uppercase tracking-widest">Body Content (Markdown)</Label>
                    <Badge variant="outline" className="text-[9px] uppercase tracking-widest font-bold border-muted">Format: MD</Badge>
                  </div>
                  <Textarea 
                    className="min-h-[500px] font-mono text-sm leading-relaxed rounded-2xl p-8 bg-muted/30 border-none focus:bg-background transition-all font-bold"
                    value={formData.contentMarkdown} 
                    onChange={(e) => setFormData({ ...formData, contentMarkdown: e.target.value })}
                    placeholder="# Start your story with a level 1 heading..."
                  />
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'media' && (
            <Card className="border-none shadow-sm rounded-[2.5rem] p-8 space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-bold ml-1 uppercase tracking-widest">Cover Image URL</Label>
                  <div className="flex gap-3">
                    <Input 
                      value={formData.coverImage} 
                      onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })} 
                      placeholder="https://images.unsplash.com/..."
                      className="h-12 rounded-xl bg-muted/30 border-none focus:bg-background font-bold"
                    />
                    <Button size="icon" variant="outline" className="rounded-xl h-12 w-12 shrink-0"><ImageIcon className="w-5 h-5" /></Button>
                  </div>
                </div>

                {formData.coverImage ? (
                  <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl group">
                    <img src={formData.coverImage} alt="Cover Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white font-bold text-sm uppercase tracking-widest">Cover Preview</p>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video rounded-[2rem] bg-muted/30 border-2 border-dashed flex flex-col items-center justify-center text-muted-foreground p-12">
                    <ImageIcon className="w-12 h-12 mb-4 opacity-10" />
                    <p className="font-bold text-sm uppercase tracking-widest">No cover image set</p>
                    <p className="text-xs font-bold uppercase tracking-widest">Paste a URL above to see the preview</p>
                  </div>
                )}
              </div>
            </Card>
          )}

          {activeTab === 'seo' && (
            <Card className="border-none shadow-sm rounded-[2.5rem] p-8 space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-sm font-bold ml-1 uppercase tracking-widest">SEO Meta Title</Label>
                  <Input 
                    value={formData.seo.title} 
                    onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, title: e.target.value } })}
                    placeholder={formData.title}
                    className="h-12 rounded-xl bg-muted/30 border-none font-bold"
                  />
                  <p className="text-[10px] text-muted-foreground font-bold px-1 uppercase tracking-widest">Recommended: 50-60 characters.</p>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-bold ml-1 uppercase tracking-widest">SEO Meta Description</Label>
                  <Textarea 
                    value={formData.seo.description} 
                    onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, description: e.target.value } })}
                    placeholder={formData.excerpt}
                    className="min-h-[120px] rounded-xl bg-muted/30 border-none text-sm p-4 font-bold"
                  />
                  <p className="text-[10px] text-muted-foreground font-bold px-1 uppercase tracking-widest">Recommended: 150-160 characters.</p>
                </div>

                <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">Google Preview</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[#1a0dab] text-xl font-bold hover:underline cursor-pointer truncate">
                      {formData.seo.title || formData.title || 'Untitled Post'}
                    </p>
                    <p className="text-[#006621] text-sm truncate font-bold">serengetidreams.com/blog/{formData.slug}</p>
                    <p className="text-[#545454] text-sm line-clamp-2 font-bold">
                      {formData.seo.description || formData.excerpt || 'Write a meta description to see how your article appears in search results...'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'settings' && (
            <Card className="border-none shadow-sm rounded-[2.5rem] p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label className="text-sm font-bold uppercase tracking-widest">Category</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(val) => setFormData({ ...formData, category: val })}
                  >
                    <SelectTrigger className="h-12 rounded-xl bg-muted/30 border-none font-bold uppercase tracking-widest">
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

                <div className="space-y-2">
                  <Label className="text-sm font-bold uppercase tracking-widest">Author Name</Label>
                  <Input 
                    value={formData.authorName} 
                    onChange={(e) => setFormData({ ...formData, authorName: e.target.value })} 
                    className="h-12 rounded-xl bg-muted/30 border-none font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-bold uppercase tracking-widest">URL Slug</Label>
                  <Input 
                    value={formData.slug} 
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="h-12 rounded-xl bg-muted/30 border-none font-mono text-xs font-bold"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-bold uppercase tracking-widest">Initial Status</Label>
                  <Select 
                    value={formData.status} 
                    onValueChange={(val) => setFormData({ ...formData, status: val })}
                  >
                    <SelectTrigger className="h-12 rounded-xl bg-muted/30 border-none font-bold uppercase tracking-widest">
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
