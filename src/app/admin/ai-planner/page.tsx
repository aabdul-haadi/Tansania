"use client";

import React, { useState } from 'react';
import { 
  Brain, 
  Map as MapIcon, 
  Link as LinkIcon, 
  CheckCircle, 
  RefreshCw, 
  Sparkles, 
  Zap, 
  Globe, 
  FileText, 
  AlertCircle, 
  Plus,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { adminNavigationSitemapSuggestions } from '@/ai/flows/admin-navigation-sitemap-suggestions';
import { adminSeoAndLinkingSuggestions } from '@/ai/flows/admin-seo-and-linking-suggestions';
import { generateAdminContentChecklist } from '@/ai/flows/admin-content-checklist-generation';
import { cn } from '@/lib/utils';

export default function AIPlannerPage() {
  const firestore = useFirestore();
  const [loading, setLoading] = useState<Record<string, boolean>>({ seo: false, nav: false, content: false });
  const [activeTab, setActiveTab] = useState('seo');
  
  // Real Data Streams
  const blogsQuery = useMemoFirebase(() => firestore ? collection(firestore, 'blogPosts') : null, [firestore]);
  const packagesQuery = useMemoFirebase(() => firestore ? collection(firestore, 'packages') : null, [firestore]);
  const pagesQuery = useMemoFirebase(() => firestore ? collection(firestore, 'pages') : null, [firestore]);

  const { data: blogs } = useCollection(blogsQuery);
  const { data: packages } = useCollection(packagesQuery);
  const { data: pages } = useCollection(pagesQuery);

  const [seoResult, setSeoResult] = useState<any>(null);
  const [navResult, setNavResult] = useState<any>(null);
  const [checklistResult, setChecklistResult] = useState<any>(null);

  // Content Checklist State
  const [checklistInput, setChecklistInput] = useState({ type: 'package' as any, title: '', context: '' });

  const runSeoAudit = async () => {
    if (!blogs || !packages) return;
    setLoading(prev => ({ ...prev, seo: true }));
    try {
      const result = await adminSeoAndLinkingSuggestions({
        blogPosts: blogs.map(b => ({
          slug: b.slug,
          title: b.title,
          content: b.contentMarkdown?.substring(0, 1000) || '',
          excerpt: b.excerpt || '',
          keywords: b.tags || []
        })),
        packages: packages.map(p => ({
          slug: p.slug,
          title: p.title,
          description: p.description || '',
          highlights: p.highlights || [],
          destinationRefs: p.destinationIds || [],
          categories: p.categories || []
        }))
      });
      setSeoResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(prev => ({ ...prev, seo: false }));
    }
  };

  const runNavAudit = async () => {
    if (!pages) return;
    setLoading(prev => ({ ...prev, nav: true }));
    try {
      const result = await adminNavigationSitemapSuggestions({
        existingPages: pages.map(p => ({
          path: p.path,
          title: p.title,
          isPublished: p.status === 'PUBLISHED'
        })),
        newOrUpdatedPages: blogs?.slice(0, 3).map(b => ({
          path: `/blog/${b.slug}`,
          title: b.title,
          isPublished: b.status === 'PUBLISHED'
        })) || []
      });
      setNavResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(prev => ({ ...prev, nav: false }));
    }
  };

  const runContentChecklist = async () => {
    setLoading(prev => ({ ...prev, content: true }));
    try {
      const result = await generateAdminContentChecklist({
        pageType: checklistInput.type,
        pageTitle: checklistInput.title,
        additionalContext: checklistInput.context
      });
      setChecklistResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(prev => ({ ...prev, content: false }));
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-secondary uppercase leading-none">AI Site Planner</h1>
          </div>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em] pl-1">
            Dynamic Intelligence • SEO Audit • Content Strategy
          </p>
        </div>
        <div className="flex items-center gap-3 px-6 h-14 bg-muted/10 rounded-2xl border border-border">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Protocol Sync Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Knowledge Stats */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="border-none shadow-sm rounded-[2.5rem] bg-white border border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Globe className="w-3.5 h-3.5" /> Site Knowledge Graph
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex justify-between items-center p-3 bg-muted/20 rounded-xl">
                  <span className="text-[10px] font-bold uppercase">Mapped Routes</span>
                  <Badge variant="outline" className="text-[9px] font-bold border-none">{pages?.length || 0}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/20 rounded-xl">
                  <span className="text-[10px] font-bold uppercase">Expeditions</span>
                  <Badge variant="outline" className="text-[9px] font-bold border-none">{packages?.length || 0}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/20 rounded-xl">
                  <span className="text-[10px] font-bold uppercase">Journal Entries</span>
                  <Badge variant="outline" className="text-[9px] font-bold border-none">{blogs?.length || 0}</Badge>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-[8px] font-bold text-muted-foreground uppercase leading-relaxed">
                  The AI Planner continuously indexes internal entities to maintain structural health and content quality.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="p-8 bg-secondary rounded-[2.5rem] text-white space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="relative z-10">
              <Sparkles className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-headline text-xl font-bold uppercase mb-2">Protocol 2026</h4>
              <p className="text-white/40 text-[9px] font-bold uppercase leading-relaxed tracking-widest">
                Our AI models are optimized for high-conversion travel narratives and luxury SEO patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Intelligence Tabs */}
        <div className="lg:col-span-8">
          <Tabs defaultValue="seo" onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-muted/30 p-1.5 h-14 rounded-2xl grid grid-cols-3 w-full border border-border">
              <TabsTrigger value="seo" className="rounded-xl font-bold text-[9px] uppercase tracking-widest data-[state=active]:shadow-lg"><LinkIcon className="w-3.5 h-3.5 mr-2" /> SEO Audit</TabsTrigger>
              <TabsTrigger value="nav" className="rounded-xl font-bold text-[9px] uppercase tracking-widest data-[state=active]:shadow-lg"><MapIcon className="w-3.5 h-3.5 mr-2" /> Nav Arch</TabsTrigger>
              <TabsTrigger value="content" className="rounded-xl font-bold text-[9px] uppercase tracking-widest data-[state=active]:shadow-lg"><CheckCircle className="w-3.5 h-3.5 mr-2" /> Checklists</TabsTrigger>
            </TabsList>

            <TabsContent value="seo" className="space-y-6 outline-none">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-headline text-lg font-bold text-secondary uppercase tracking-tight">Internal Linking Intelligence</h3>
                <Button onClick={runSeoAudit} disabled={loading.seo || !blogs} size="sm" className="h-10 rounded-xl px-6 text-[9px] font-bold uppercase tracking-widest">
                  {loading.seo ? <RefreshCw className="w-3.5 h-3.5 animate-spin mr-2" /> : <Zap className="w-3.5 h-3.5 mr-2" />}
                  Generate Matrix
                </Button>
              </div>

              {seoResult ? (
                <div className="space-y-3">
                  {seoResult.internalLinkSuggestions?.map((s: any, idx: number) => (
                    <Card key={idx} className="border-none shadow-sm rounded-2xl bg-white border border-border/50 group overflow-hidden">
                      <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <LinkIcon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[8px] font-bold text-primary uppercase">Strategy</span>
                            <h4 className="font-bold text-xs uppercase text-secondary truncate">Connect "{s.sourcePageSlug}" → "{s.targetPageSlug}"</h4>
                          </div>
                          <p className="text-[10px] text-muted-foreground font-bold leading-relaxed uppercase tracking-tight">{s.suggestion}</p>
                        </div>
                        <div className="flex gap-2 shrink-0">
                          <Button size="sm" variant="outline" className="h-9 px-4 rounded-lg text-[8px] font-bold uppercase tracking-widest">Apply</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="py-32 text-center bg-muted/10 rounded-[3rem] border-2 border-dashed border-muted flex flex-col items-center justify-center">
                  <Search className="w-12 h-12 text-muted-foreground opacity-5 mb-4" />
                  <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Run SEO audit to map content clusters</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="nav" className="space-y-6 outline-none">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-headline text-lg font-bold text-secondary uppercase tracking-tight">Sitemap Protocol Suggestions</h3>
                <Button onClick={runNavAudit} disabled={loading.nav || !pages} size="sm" className="h-10 rounded-xl px-6 text-[9px] font-bold uppercase tracking-widest">
                  {loading.nav ? <RefreshCw className="w-3.5 h-3.5 animate-spin mr-2" /> : <MapIcon className="w-3.5 h-3.5 mr-2" />}
                  Analyze Topology
                </Button>
              </div>

              {navResult ? (
                <div className="space-y-3">
                  {navResult.navigationSuggestions?.map((s: any, idx: number) => (
                    <Card key={idx} className="border-none shadow-sm rounded-2xl bg-white border border-border/50 group overflow-hidden">
                      <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-center">
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                          s.action === 'add' ? "bg-green-500/10 text-green-600" : "bg-primary/10 text-primary"
                        )}>
                          {s.action === 'add' ? <Plus className="w-5 h-5" /> : <RefreshCw className="w-5 h-5" />}
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[8px] font-bold uppercase">{s.action} protocol</span>
                            <h4 className="font-bold text-xs uppercase text-secondary truncate">{s.title || s.path}</h4>
                          </div>
                          <p className="text-[10px] text-muted-foreground font-bold leading-relaxed uppercase tracking-tight">{s.reason}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="py-32 text-center bg-muted/10 rounded-[3rem] border-2 border-dashed border-muted flex flex-col items-center justify-center">
                  <MapIcon className="w-12 h-12 text-muted-foreground opacity-5 mb-4" />
                  <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Audit route registry for navigation updates</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="content" className="space-y-6 outline-none">
              <Card className="border-none shadow-sm rounded-[2.5rem] bg-white border border-border/50 overflow-hidden">
                <CardHeader className="border-b bg-muted/5">
                  <CardTitle className="text-sm font-bold uppercase tracking-widest text-secondary">Checklist Generator</CardTitle>
                  <CardDescription className="text-[9px] font-bold uppercase tracking-widest">Structural quality assurance for new pages.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Entity Type</Label>
                      <Select value={checklistInput.type} onValueChange={(val) => setChecklistInput(prev => ({ ...prev, type: val }))}>
                        <SelectTrigger className="h-12 rounded-xl bg-muted/20 border-none font-bold text-[10px] uppercase">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="package">Safari Package</SelectItem>
                          <SelectItem value="destination">Destination Hub</SelectItem>
                          <SelectItem value="blogPost">Journal Entry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Proposed Title</Label>
                      <Input 
                        value={checklistInput.title} 
                        onChange={(e) => setChecklistInput(prev => ({ ...prev, title: e.target.value }))}
                        className="h-12 rounded-xl bg-muted/20 border-none font-bold text-[10px] uppercase" 
                        placeholder="E.G. LUXURY SERENGETI 2026..."
                      />
                    </div>
                  </div>
                  <Button onClick={runContentChecklist} disabled={loading.content || !checklistInput.title} className="w-full h-14 rounded-2xl font-bold uppercase tracking-widest text-[10px] shadow-xl">
                    {loading.content ? <RefreshCw className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
                    Generate Strategy Guide
                  </Button>

                  {checklistResult && (
                    <div className="pt-8 mt-8 border-t border-border space-y-8">
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Required Content Sections</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {checklistResult.suggestedSections?.map((s: any, idx: number) => (
                            <div key={idx} className="p-4 bg-muted/20 rounded-xl border border-border/50 flex gap-4">
                              <div className="w-6 h-6 rounded-lg bg-secondary text-white flex items-center justify-center shrink-0">
                                <CheckCircle className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <p className="font-bold text-xs uppercase text-secondary mb-1">{s.title}</p>
                                <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-tight">{s.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
