
"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Layout, 
  Plus, 
  GripVertical,
  Trash2,
  Image as ImageIcon,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useDoc, useFirestore, useMemoFirebase, updateDocumentNonBlocking } from '@/firebase';
import { doc, serverTimestamp } from 'firebase/firestore';
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
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

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
      updatedAt: serverTimestamp(),
    });
    setDirty(false);
    toast({ title: "Content Sync Complete", description: `Successfully published changes to ${localPage.path}.` });
  };

  const updateSectionData = (id: string, data: any) => {
    const newSections = { ...localPage.sections };
    newSections[id] = { ...newSections[id], data: { ...newSections[id].data, ...data } };
    setLocalPage({ ...localPage, sections: newSections });
    setDirty(true);
  };

  if (isLoading || !localPage) return <div className="p-12 text-center text-muted-foreground animate-pulse uppercase tracking-widest font-bold text-xs">Accessing Page Manifest...</div>;

  const sectionIds = Object.keys(localPage.sections || {});

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
              <p className="text-xs text-muted-foreground font-mono">{localPage.path}</p>
            </div>
            {dirty && <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full animate-pulse">Unsaved Changes</div>}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2 rounded-xl" asChild>
              <a href={localPage.path} target="_blank"><Eye className="w-4 h-4" /> View Site</a>
            </Button>
            <Button onClick={() => handleSave('PUBLISHED')} className="gap-2 rounded-xl px-8 shadow-lg shadow-primary/20">
              <Save className="w-4 h-4" /> Save & Sync
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Sections List */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="border-none shadow-sm rounded-3xl">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Editable Sections</CardTitle>
              <CardDescription>Regions detected in page code.</CardDescription>
            </CardHeader>
            <CardContent className="p-2 space-y-2">
              {sectionIds.map((id) => (
                <div 
                  key={id}
                  onClick={() => setActiveSectionId(id)}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-2xl cursor-pointer transition-all border group",
                    activeSectionId === id 
                      ? "bg-secondary text-white border-secondary shadow-lg" 
                      : "border-transparent hover:bg-muted"
                  )}
                >
                  <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", activeSectionId === id ? "bg-white/10" : "bg-primary/10")}>
                    <Layout className={cn("w-4 h-4", activeSectionId === id ? "text-white" : "text-primary")} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-bold capitalize">{id}</p>
                    <p className={cn("text-[10px] uppercase font-bold tracking-widest", activeSectionId === id ? "text-white/60" : "text-muted-foreground")}>
                      Type: {localPage.sections[id].type}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm rounded-3xl bg-secondary text-white overflow-hidden">
            <CardContent className="p-8">
              <Globe className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-2">Live Content Sync</h4>
              <p className="text-white/60 text-xs leading-relaxed font-light">
                Changes made here are restricted to pure content. Your site's core layout and performance remain preserved in the source code.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right: Section Editor Panel */}
        <div className="lg:col-span-8">
          {activeSectionId !== null ? (
            <Card className="border-none shadow-sm min-h-[500px] rounded-[2.5rem]">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="capitalize">Edit Section: {activeSectionId}</CardTitle>
                    <CardDescription>Update text and media for this registered region.</CardDescription>
                  </div>
                  <Badge variant="outline" className="px-3 py-1 font-bold uppercase tracking-widest text-[9px]">
                    Region: {localPage.sections[activeSectionId].type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                {localPage.sections[activeSectionId].type === 'hero' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Hero Heading</Label>
                        <Input 
                          className="h-14 rounded-xl bg-muted/30 border-none text-lg font-bold px-6"
                          value={localPage.sections[activeSectionId].data.heading || ''} 
                          onChange={(e) => updateSectionData(activeSectionId, { heading: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subheading / Description</Label>
                        <Textarea 
                          className="min-h-[120px] rounded-2xl bg-muted/30 border-none p-6 text-base italic font-light leading-relaxed"
                          value={localPage.sections[activeSectionId].data.subheading || ''} 
                          onChange={(e) => updateSectionData(activeSectionId, { subheading: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {localPage.sections[activeSectionId].type === 'text' && (
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Simple Text Content</Label>
                    <Input 
                      className="h-12 rounded-xl bg-muted/30 border-none"
                      value={localPage.sections[activeSectionId].data || ''} 
                      onChange={(e) => {
                        const newSections = { ...localPage.sections };
                        newSections[activeSectionId].data = e.target.value;
                        setLocalPage({ ...localPage, sections: newSections });
                        setDirty(true);
                      }}
                    />
                  </div>
                )}

                {localPage.sections[activeSectionId].type === 'markdown' && (
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Body (Markdown)</Label>
                    <Textarea 
                      className="min-h-[400px] font-mono text-sm leading-relaxed rounded-2xl p-8 bg-muted/30 border-none"
                      value={localPage.sections[activeSectionId].data.bodyMarkdown || ''} 
                      onChange={(e) => updateSectionData(activeSectionId, { bodyMarkdown: e.target.value })}
                    />
                  </div>
                )}

                {!['hero', 'text', 'markdown'].includes(localPage.sections[activeSectionId].type) && (
                  <div className="py-20 text-center text-muted-foreground border border-dashed rounded-[3rem]">
                    Custom editor for "{localPage.sections[activeSectionId].type}" detected. Please specify data schema.
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-12 bg-muted/30 border-2 border-dashed rounded-[3rem] text-muted-foreground">
              <div className="w-20 h-20 bg-background rounded-3xl flex items-center justify-center shadow-xl mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary opacity-20" />
              </div>
              <p className="text-xl font-bold">Select a section to edit</p>
              <p className="text-sm font-light">Only content regions registered in your code are available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
