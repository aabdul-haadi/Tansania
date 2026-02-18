"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Layout, 
  Search as SearchIcon, 
  Plus, 
  GripVertical,
  Trash2,
  ChevronDown,
  Settings,
  Image as ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useDoc, useFirestore, useMemoFirebase, updateDocumentNonBlocking } from '@/firebase';
import { doc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function PageEditor() {
  const { key } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const firestore = useFirestore();
  const docRef = useMemoFirebase(() => (firestore && key ? doc(firestore, 'pages', key as string) : null), [firestore, key]);
  const { data: page, isLoading } = useDoc(docRef);

  const [localPage, setLocalPage] = useState<any>(null);
  const [dirty, setDirty] = useState(false);
  const [activeSectionIdx, setActiveSectionIdx] = useState<number | null>(null);

  useEffect(() => {
    if (page) {
      setLocalPage(page);
    }
  }, [page]);

  const handleSave = async (status: 'DRAFT' | 'PUBLISHED' = 'DRAFT') => {
    if (!docRef || !localPage) return;
    updateDocumentNonBlocking(docRef, {
      ...localPage,
      status,
      updatedAt: new Date().toISOString(),
    });
    setDirty(false);
    toast({ title: "Page Saved", description: `Successfully saved as ${status}.` });
  };

  const updateSection = (idx: number, data: any) => {
    const newSections = [...localPage.sections];
    newSections[idx] = { ...newSections[idx], data: { ...newSections[idx].data, ...data } };
    setLocalPage({ ...localPage, sections: newSections });
    setDirty(true);
  };

  const addSection = (type: string) => {
    const defaultData = type === 'hero' ? { heading: 'New Heading', subheading: 'New Subheading' } : {};
    const newSections = [...(localPage.sections || []), { type, data: defaultData }];
    setLocalPage({ ...localPage, sections: newSections });
    setDirty(true);
  };

  if (isLoading || !localPage) return <div className="p-12 text-center">Loading editor...</div>;

  return (
    <div className="min-h-screen bg-muted/10">
      {/* Editor Header */}
      <div className="sticky top-0 z-30 bg-background/80 backdrop-blur-md border-b p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="font-bold text-lg">{localPage.title}</h1>
              <p className="text-xs text-muted-foreground">{localPage.path}</p>
            </div>
            {dirty && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" title="Unsaved changes" />}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2" asChild>
              <a href={localPage.path} target="_blank"><Eye className="w-4 h-4" /> Preview</a>
            </Button>
            <Button variant="outline" onClick={() => handleSave('DRAFT')}>Save Draft</Button>
            <Button onClick={() => handleSave('PUBLISHED')} className="gap-2">
              <Save className="w-4 h-4" /> Publish
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Sections List */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Sections</CardTitle>
              <Button size="icon" variant="ghost" onClick={() => addSection('content')}>
                <Plus className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-2 space-y-2">
              {localPage.sections?.map((section: any, idx: number) => (
                <div 
                  key={idx}
                  onClick={() => setActiveSectionIdx(idx)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border group",
                    activeSectionIdx === idx 
                      ? "bg-primary/5 border-primary shadow-sm" 
                      : "border-transparent hover:bg-muted"
                  )}
                >
                  <GripVertical className="w-4 h-4 text-muted-foreground" />
                  <div className="flex-grow">
                    <p className="text-sm font-bold capitalize">{section.type}</p>
                    <p className="text-[10px] text-muted-foreground truncate max-w-[150px]">
                      {section.data.heading || section.data.title || 'No content'}
                    </p>
                  </div>
                  <Button size="icon" variant="ghost" className="opacity-0 group-hover:opacity-100 h-8 w-8 text-destructive">
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Page SEO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs">Meta Title</Label>
                <Input 
                  value={localPage.seo?.title || ''} 
                  onChange={(e) => {
                    setLocalPage({ ...localPage, seo: { ...localPage.seo, title: e.target.value } });
                    setDirty(true);
                  }}
                  className="rounded-lg h-9"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Meta Description</Label>
                <Textarea 
                  value={localPage.seo?.description || ''} 
                  onChange={(e) => {
                    setLocalPage({ ...localPage, seo: { ...localPage.seo, description: e.target.value } });
                    setDirty(true);
                  }}
                  className="rounded-lg text-xs"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Section Editor Panel */}
        <div className="lg:col-span-8">
          {activeSectionIdx !== null ? (
            <Card className="border-none shadow-sm min-h-[500px]">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="capitalize">{localPage.sections[activeSectionIdx].type} Section</CardTitle>
                    <CardDescription>Configure the content and layout for this block.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {localPage.sections[activeSectionIdx].type === 'hero' && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Heading</Label>
                        <Input 
                          value={localPage.sections[activeSectionIdx].data.heading || ''} 
                          onChange={(e) => updateSection(activeSectionIdx, { heading: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Subheading</Label>
                        <Input 
                          value={localPage.sections[activeSectionIdx].data.subheading || ''} 
                          onChange={(e) => updateSection(activeSectionIdx, { subheading: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Background Image URL</Label>
                      <div className="flex gap-2">
                        <Input 
                          value={localPage.sections[activeSectionIdx].data.backgroundImage || ''} 
                          onChange={(e) => updateSection(activeSectionIdx, { backgroundImage: e.target.value })}
                        />
                        <Button variant="outline" size="icon"><ImageIcon className="w-4 h-4" /></Button>
                      </div>
                    </div>
                  </>
                )}

                {localPage.sections[activeSectionIdx].type === 'content' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Section Heading (Optional)</Label>
                      <Input 
                        value={localPage.sections[activeSectionIdx].data.heading || ''} 
                        onChange={(e) => updateSection(activeSectionIdx, { heading: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Body (Markdown supported)</Label>
                      <Textarea 
                        className="min-h-[300px] font-mono text-sm"
                        value={localPage.sections[activeSectionIdx].data.bodyMarkdown || ''} 
                        onChange={(e) => updateSection(activeSectionIdx, { bodyMarkdown: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {/* Placeholder for other section types */}
                {!['hero', 'content'].includes(localPage.sections[activeSectionIdx].type) && (
                  <div className="py-20 text-center text-muted-foreground border border-dashed rounded-3xl">
                    Custom editor for "{localPage.sections[activeSectionIdx].type}" coming soon.
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-12 bg-muted/30 border border-dashed rounded-[3rem] text-muted-foreground">
              <Layout className="w-12 h-12 mb-4 opacity-20" />
              <p className="text-lg font-medium">Select a section to begin editing</p>
              <p className="text-sm">Changes will be saved to your draft.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
