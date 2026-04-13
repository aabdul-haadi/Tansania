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
  Search,
  LayoutGrid,
  TrendingUp,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCollection, useFirestore, useMemoFirebase, useUser, useDoc } from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import { generateAdminContentChecklist } from '@/ai/flows/admin-content-checklist-generation';
import { adminSeoAndLinkingSuggestions } from '@/ai/flows/admin-seo-and-linking-suggestions';
import { adminNavigationSitemapSuggestions } from '@/ai/flows/admin-navigation-sitemap-suggestions';
import { cn } from '@/lib/utils';

export default function AIPlannerPage() {
  const { user } = useUser();
  const firestore = useFirestore();
  const [loading, setLoading] = useState<Record<string, boolean>>({ seo: false, nav: false, content: false });
  const [activeTab, setActiveTab] = useState('content');
  
  const canFetch = !!firestore && !!user;

  // CRITICAL: Load admin role before attempting protected collection group listing
  const adminDocRef = useMemoFirebase(() => (canFetch ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user, canFetch]);
  const { data: adminRole } = useDoc(adminDocRef);

  // Protected Data Streams - Only fire once admin status is confirmed
  const packagesQuery = useMemoFirebase(() => (canFetch && adminRole) ? collection(firestore, 'packages') : null, [canFetch, firestore, adminRole]);
  const pagesQuery = useMemoFirebase(() => (canFetch && adminRole) ? collection(firestore, 'pages') : null, [canFetch, firestore, adminRole]);
  const blogsQuery = useMemoFirebase(() => (canFetch && adminRole) ? collection(firestore, 'blogPosts') : null, [canFetch, firestore, adminRole]);

  const { data: packages } = useCollection(packagesQuery);
  const { data: pages } = useCollection(pagesQuery);
  const { data: blogs } = useCollection(blogsQuery);

  const [checklistResult, setChecklistResult] = useState<any>(null);
  const [seoResult, setSeoResult] = useState<any>(null);
  const [navResult, setNavResult] = useState<any>(null);
  const [checklistInput, setChecklistInput] = useState({ type: 'package' as any, title: '', context: '' });

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

  const runSeoAudit = async () => {
    if (!blogs || !packages) return;
    setLoading(prev => ({ ...prev, seo: true }));
    try {
      // CRITICAL: Defensive mapping ensures Zod schema requirements are met
      const result = await adminSeoAndLinkingSuggestions({
        blogPosts: blogs.map(b => ({
          slug: b.slug || '',
          title: b.title || 'Untitled Post',
          content: b.contentMarkdown?.slice(0, 500) || '',
          excerpt: b.excerpt || '',
          keywords: b.tags || []
        })),
        packages: packages.map(p => ({
          slug: p.slug || '',
          title: p.title || 'Untitled Package',
          description: p.description || p.heroDescription || '',
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
            Autonomous Intelligence • SEO Audit • Structural Strategy
          </p>
        </div>
        <div className="flex items-center gap-3 px-6 h-14 bg-muted/10 rounded-2xl border border-border">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Autonomous Sync Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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
                  <span className="text-[10px] font-bold uppercase">Infrastructure Paths</span>
                  <Badge variant="outline" className="text-[9px] font-bold border-none">{pages?.length || 0}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/20 rounded-xl">
                  <span className="text-[10px] font-bold uppercase">Journal Archive</span>
                  <Badge variant="outline" className="text-[9px] font-bold border-none">{blogs?.length || 0}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/20 rounded-xl">
                  <span className="text-[10px] font-bold uppercase">Safari Catalog</span>
                  <Badge variant="outline" className="text-[9px] font-bold border-none">{packages?.length || 0}</Badge>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-[8px] font-bold text-muted-foreground uppercase leading-relaxed">
                  The AI Advisor autonomously indexes these entities every time it is called, ensuring up-to-the-minute site intelligence.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="p-8 bg-secondary rounded-[2.5rem] text-white space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="relative z-10">
              <Sparkles className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-headline text-xl font-bold uppercase mb-2">Registry Intelligence</h4>
              <p className="text-white/40 text-[9px] font-bold uppercase leading-relaxed tracking-widest">
                Our models leverage the full site registry to generate bespoke internal linking strategies and navigation suggestions.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <Tabs defaultValue="content" onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="bg-muted/30 p-1.5 h-14 rounded-2xl grid grid-cols-3 w-full border border-border">
              <TabsTrigger value="content" className="rounded-xl font-bold text-[9px] uppercase tracking-widest data-[state=active]:shadow-lg"><CheckCircle className="w-3.5 h-3.5 mr-2" /> Checklists</TabsTrigger>
              <TabsTrigger value="seo" className="rounded-xl font-bold text-[9px] uppercase tracking-widest data-[state=active]:shadow-lg"><TrendingUp className="w-3.5 h-3.5 mr-2" /> SEO Audit</TabsTrigger>
              <TabsTrigger value="nav" className="rounded-xl font-bold text-[9px] uppercase tracking-widest data-[state=active]:shadow-lg"><MapIcon className="w-3.5 h-3.5 mr-2" /> Navigation</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-6 outline-none">
              <Card className="border-none shadow-sm rounded-[2.5rem] bg-white border border-border/50 overflow-hidden">
                <CardHeader className="border-b bg-muted/5">
                  <CardTitle className="text-sm font-bold uppercase tracking-widest text-secondary">Strategy Guide Generator</CardTitle>
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
                  <Button onClick={runContentChecklist} disabled={loading.content || !checklistInput.title} className="w-full h-14 rounded-2xl font-bold uppercase tracking-widest text-[10px] shadow-xl border-none">
                    {loading.content ? <RefreshCw className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
                    Analyze & Draft Strategy
                  </Button>

                  {checklistResult && (
                    <div className="pt-8 mt-8 border-t border-border space-y-8">
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Required Content Regions</h4>
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

            <TabsContent value="seo" className="space-y-6 outline-none">
              <Card className="border-none shadow-sm rounded-[2.5rem] bg-white border border-border/50">
                <CardHeader>
                  <CardTitle className="text-sm font-bold uppercase tracking-widest">Internal Linking & Metadata Audit</CardTitle>
                  <CardDescription className="text-[9px] font-bold uppercase tracking-widest">AI analysis of connectivity between your 500+ pages.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <Button onClick={runSeoAudit} disabled={loading.seo} className="w-full h-14 rounded-2xl font-bold uppercase tracking-widest text-[10px] shadow-xl border-none bg-secondary text-white">
                    {loading.seo ? <RefreshCw className="w-4 h-4 animate-spin mr-2" /> : <Zap className="w-4 h-4 mr-2" />}
                    Run Connectivity Audit
                  </Button>

                  {seoResult && (
                    <div className="space-y-10 pt-8 border-t border-border">
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Recommended Inter-Links</h4>
                        <div className="grid grid-cols-1 gap-4">
                          {seoResult.internalLinkSuggestions?.map((link: any, idx: number) => (
                            <div key={idx} className="p-5 bg-muted/10 rounded-2xl border border-border/50 space-y-3">
                              <div className="flex items-center justify-between">
                                <Badge variant="outline" className="text-[7px] font-black">{link.sourcePageSlug} → {link.targetPageSlug}</Badge>
                                <span className="text-[8px] font-bold uppercase text-primary">Anchor: "{link.anchorText}"</span>
                              </div>
                              <p className="text-[9px] font-bold uppercase leading-relaxed text-secondary">{link.suggestion}</p>
                              <div className="flex items-center gap-2 text-[7px] font-bold text-muted-foreground">
                                <ShieldCheck className="w-3 h-3 text-green-500" />
                                <span>SEO IMPACT: {link.reason}</span>
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

            <TabsContent value="nav" className="space-y-6">
              <div className="py-20 text-center bg-muted/5 rounded-[3rem] border-2 border-dashed border-muted/50">
                <MapIcon className="w-12 h-12 mx-auto mb-4 opacity-10" />
                <h3 className="text-xl font-bold text-secondary uppercase tracking-tight">Sitemap Intelligence Ready</h3>
                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mt-2 max-w-xs mx-auto">
                  Automatically suggests navigation updates as your country hubs and journal entries increase.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}