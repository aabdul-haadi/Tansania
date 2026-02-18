"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Save, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

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
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-background/80 backdrop-blur sticky top-0 z-20 py-4 border-b">
        <Button variant="ghost" asChild className="gap-2">
          <Link href="/admin/blog"><ArrowLeft className="w-4 h-4" /> Back to List</Link>
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleSave('DRAFT')} disabled={saving}>Save Draft</Button>
          <Button onClick={() => handleSave('PUBLISHED')} disabled={saving} className="gap-2">
            <Save className="w-4 h-4" /> Publish
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Article Title</Label>
                <Input 
                  id="title" 
                  value={formData.title} 
                  onChange={(e) => handleTitleChange(e.target.value)} 
                  className="text-lg font-bold h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL identifier)</Label>
                <Input 
                  id="slug" 
                  value={formData.slug} 
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt / Summary</Label>
                <Textarea 
                  id="excerpt" 
                  value={formData.excerpt} 
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="A brief summary for cards and search results..."
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="space-y-2">
                <Label htmlFor="content">Content (Markdown)</Label>
                <Textarea 
                  id="content" 
                  className="min-h-[400px] font-mono text-sm leading-relaxed"
                  value={formData.contentMarkdown} 
                  onChange={(e) => setFormData({ ...formData, contentMarkdown: e.target.value })}
                  placeholder="# Your amazing story starts here..."
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-sm">
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(val) => setFormData({ ...formData, category: val })}
                >
                  <SelectTrigger>
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
                <Label>Author Display Name</Label>
                <Input 
                  value={formData.authorName} 
                  onChange={(e) => setFormData({ ...formData, authorName: e.target.value })} 
                />
              </div>

              <div className="space-y-2">
                <Label>Cover Image URL</Label>
                <div className="flex gap-2">
                  <Input 
                    value={formData.coverImage} 
                    onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })} 
                    placeholder="https://..."
                  />
                  <Button size="icon" variant="outline"><ImageIcon className="w-4 h-4" /></Button>
                </div>
                {formData.coverImage && (
                  <div className="mt-2 aspect-video rounded-lg overflow-hidden bg-muted">
                    <img src={formData.coverImage} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">SEO Settings</h3>
              <div className="space-y-2">
                <Label className="text-xs">Meta Title</Label>
                <Input 
                  value={formData.seo.title} 
                  onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, title: e.target.value } })}
                  placeholder={formData.title}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Meta Description</Label>
                <Textarea 
                  value={formData.seo.description} 
                  onChange={(e) => setFormData({ ...formData, seo: { ...formData.seo, description: e.target.value } })}
                  placeholder={formData.excerpt}
                  className="text-xs"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
