
"use client";

import React, { useState } from 'react';
import { Brain, Map as MapIcon, Link as LinkIcon, CheckCircle, Search, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { adminNavigationSitemapSuggestions } from '@/ai/flows/admin-navigation-sitemap-suggestions';
import { adminSeoAndLinkingSuggestions } from '@/ai/flows/admin-seo-and-linking-suggestions';
import { generateAdminContentChecklist } from '@/ai/flows/admin-content-checklist-generation';

export default function AIPlannerPage() {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('seo');
  const [suggestions, setSuggestions] = useState<any>(null);

  const runSeoAnalysis = async () => {
    setLoading(true);
    try {
      // Mocked data for the flow input
      const result = await adminSeoAndLinkingSuggestions({
        blogPosts: [
          { slug: 'best-time-serengeti', title: 'Best Time to Visit Serengeti', content: '...', excerpt: '...', keywords: ['serengeti', 'wildlife'] }
        ],
        packages: [
          { slug: 'luxury-migration', title: 'Luxury Great Migration Safari', description: '...', highlights: ['acacia', 'lion'], destinationRefs: ['serengeti'], categories: ['luxury'] }
        ]
      });
      setSuggestions(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Brain className="w-8 h-8 text-secondary" /> AI Site Planner
          </h1>
          <p className="text-muted-foreground mt-1">
            Dynamic site intelligence for SEO, navigation, and content quality.
          </p>
        </div>
        <Button onClick={runSeoAnalysis} disabled={loading} className="gap-2">
          {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
          Run Full Audit
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Site Knowledge Graph</CardTitle>
            <CardDescription>Visualizing 24 routes and 115 content blocks.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span>Total Pages</span>
                <Badge variant="outline">24</Badge>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Internal Links</span>
                <Badge variant="outline" className="text-green-500">Healthy</Badge>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>SEO Metadata</span>
                <Badge variant="outline" className="text-yellow-500">8 Missing</Badge>
              </div>
              <div className="h-40 bg-muted/50 rounded-xl flex items-center justify-center border border-dashed">
                <Search className="w-8 h-8 text-muted-foreground opacity-20" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2">
          <Tabs defaultValue="seo" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="seo" className="gap-2"><LinkIcon className="w-4 h-4" /> SEO & Links</TabsTrigger>
              <TabsTrigger value="nav" className="gap-2"><MapIcon className="w-4 h-4" /> Navigation</TabsTrigger>
              <TabsTrigger value="content" className="gap-2"><CheckCircle className="w-4 h-4" /> Checklists</TabsTrigger>
            </TabsList>

            <TabsContent value="seo" className="mt-6">
              {suggestions?.internalLinkSuggestions ? (
                <div className="space-y-4">
                  {suggestions.internalLinkSuggestions.map((s: any, idx: number) => (
                    <Card key={idx} className="overflow-hidden border-l-4 border-l-secondary">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-lg">Add link to "{s.targetPageSlug}"</h4>
                          <Badge>SEO Suggestion</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{s.suggestion}</p>
                        <div className="flex gap-2">
                          <Button size="sm">Approve</Button>
                          <Button size="sm" variant="outline">Dismiss</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed">
                  <p className="text-muted-foreground">Run an audit to see SEO suggestions.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="nav" className="mt-6">
               <div className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed">
                  <p className="text-muted-foreground">Navigation suggestions will appear here.</p>
                </div>
            </TabsContent>

            <TabsContent value="content" className="mt-6">
               <div className="text-center py-20 bg-muted/30 rounded-2xl border border-dashed">
                  <p className="text-muted-foreground">Content checklists for new pages.</p>
                </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
