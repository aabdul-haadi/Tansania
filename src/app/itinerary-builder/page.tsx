"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  Map as MapIcon, 
  Leaf, 
  Sun, 
  Plane, 
  ChevronRight, 
  ArrowRight,
  Loader2,
  Calendar,
  Users,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buildCustomItinerary } from '@/ai/flows/itinerary-builder-flow';
import { cn } from '@/lib/utils';

const regions = [
  { id: 'serengeti', name: 'Serengeti', icon: Leaf },
  { id: 'ngorongoro', name: 'Ngorongoro', icon: Sun },
  { id: 'zanzibar', name: 'Zanzibar', icon: MapIcon },
  { id: 'kilimanjaro', name: 'Kilimanjaro', icon: Plane }
];

const animals = ['The Big Five', 'Great Migration', 'Primate Trekking', 'Rare Birds', 'Marine Life'];

export default function ItineraryBuilderPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selections, setSelections] = useState({
    regions: [] as string[],
    wildlife: [] as string[],
    duration: 10,
    travelers: 2,
    tier: 'Premium'
  });
  const [result, setResult] = useState<any>(null);

  const toggle = (list: string[], item: string, key: string) => {
    const next = list.includes(item) ? list.filter(i => i !== item) : [...list, item];
    setSelections({ ...selections, [key]: next });
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const it = await buildCustomItinerary(selections);
      setResult(it);
      setStep(3);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfcfb] pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] border border-primary/20">
            <Sparkles className="w-3.5 h-3.5" /> AI Expediton Architect
          </div>
          <h1 className="font-headline text-4xl md:text-7xl font-bold text-secondary uppercase">
            Design Your <span className="text-primary">Safari</span>
          </h1>
          <p className="text-muted-foreground text-sm font-light uppercase tracking-[0.2em] max-w-xl mx-auto">
            Our AI uses real-time logistics to build your perfect Tanzanian journey
          </p>
        </header>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="font-headline text-2xl font-bold flex items-center gap-3">
                    <MapIcon className="w-6 h-6 text-primary" /> Regions to Explore
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {regions.map(r => (
                      <button 
                        key={r.id} 
                        onClick={() => toggle(selections.regions, r.name, 'regions')}
                        className={cn(
                          "p-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-3 group",
                          selections.regions.includes(r.name) ? "border-primary bg-primary/5 shadow-xl scale-[1.02]" : "border-border bg-white hover:border-primary/20"
                        )}
                      >
                        <r.icon className={cn("w-8 h-8 transition-colors", selections.regions.includes(r.name) ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                        <span className="font-bold text-[10px] uppercase tracking-widest">{r.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-headline text-2xl font-bold flex items-center gap-3">
                    <Leaf className="w-6 h-6 text-primary" /> Wildlife Priorities
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {animals.map(a => (
                      <button 
                        key={a} 
                        onClick={() => toggle(selections.wildlife, a, 'wildlife')}
                        className={cn(
                          "px-6 py-3 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all",
                          selections.wildlife.includes(a) ? "bg-secondary text-white border-secondary shadow-lg" : "bg-white text-muted-foreground hover:border-primary/30"
                        )}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <Button onClick={() => setStep(2)} disabled={selections.regions.length === 0} className="rounded-full px-12 h-16 text-sm font-bold shadow-2xl group">
                  Next: Preferences <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
              <Card className="rounded-[3rem] border-none shadow-2xl bg-white/80 backdrop-blur-xl p-8 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <Label className="text-[10px] font-bold uppercase tracking-widest text-primary">Travel Duration</Label>
                      <div className="flex items-center gap-6">
                        <input type="range" min="5" max="21" value={selections.duration} onChange={(e) => setSelections({ ...selections, duration: parseInt(e.target.value) })} className="w-full h-2 bg-muted rounded-full accent-primary" />
                        <span className="font-headline text-3xl font-bold w-20 text-secondary">{selections.duration} Tage</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Label className="text-[10px] font-bold uppercase tracking-widest text-primary">Comfort Tier</Label>
                      <div className="grid grid-cols-1 gap-3">
                        {['Value', 'Premium', 'Ultra-Luxury'].map(t => (
                          <button key={t} onClick={() => setSelections({ ...selections, tier: t })} className={cn("p-4 rounded-2xl border-2 text-left transition-all", selections.tier === t ? "border-primary bg-primary/5" : "border-border")}>
                            <p className="font-bold text-xs uppercase tracking-widest">{t}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center text-center p-8 bg-muted/20 rounded-[2.5rem] space-y-6">
                    <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">Group Size</h4>
                      <div className="flex gap-4">
                        {[1, 2, 4, 6].map(n => (
                          <button key={n} onClick={() => setSelections({ ...selections, travelers: n })} className={cn("w-10 h-10 rounded-full border-2 font-bold text-xs", selections.travelers === n ? "bg-primary text-white border-primary" : "border-border hover:border-primary/20")}>
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex justify-between gap-4">
                  <Button variant="ghost" onClick={() => setStep(1)} className="rounded-full px-8 h-12 text-muted-foreground font-bold text-[10px] uppercase tracking-widest">Back</Button>
                  <Button onClick={handleGenerate} disabled={loading} className="rounded-full px-16 h-16 text-sm font-bold shadow-2xl bg-secondary text-white">
                    {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Sparkles className="w-5 h-5 mr-2" />}
                    Build My Itinerary
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}

          {step === 3 && result && (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-12 pb-20">
              <div className="text-center space-y-4">
                <Badge className="bg-green-500 text-white border-none px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">Architect Result Ready</Badge>
                <h2 className="font-headline text-4xl md:text-6xl font-bold text-secondary uppercase">{result.title}</h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto italic">"{result.summary}"</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-8">
                  {result.days.map((day: any) => (
                    <Card key={day.day} className="rounded-[2.5rem] border-none shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-500">
                      <CardContent className="p-0 flex flex-col md:flex-row">
                        <div className="w-full md:w-48 bg-secondary p-8 flex flex-col items-center justify-center text-white shrink-0 group-hover:bg-primary transition-colors">
                          <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">Day</span>
                          <span className="text-5xl font-bold font-headline leading-none">{day.day}</span>
                        </div>
                        <div className="p-8 md:p-10 flex-grow space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-primary font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                              <MapIcon className="w-3.5 h-3.5" /> {day.location}
                            </span>
                            <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">{day.accommodation}</span>
                          </div>
                          <h4 className="text-2xl font-bold font-headline text-secondary leading-tight">{day.title}</h4>
                          <p className="text-sm text-muted-foreground font-light leading-relaxed">{day.activity}</p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {day.highlights.map((h: string, i: number) => (
                              <Badge key={i} variant="outline" className="text-[8px] font-bold uppercase tracking-widest border-muted text-muted-foreground px-2 py-0.5">{h}</Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="lg:col-span-4 space-y-8">
                  <div className="sticky top-32 space-y-8">
                    <Card className="rounded-[3rem] border-none bg-secondary text-white p-10 shadow-2xl overflow-hidden relative">
                      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                      <div className="relative z-10 space-y-8">
                        <div className="text-center">
                          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Expedition Value</span>
                          <div className="flex items-baseline justify-center gap-2">
                            <h2 className="text-6xl font-bold font-headline text-white">€{result.estimatedPrice.toLocaleString()}</h2>
                            <span className="text-white/40 text-sm">/ total</span>
                          </div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                          <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" /> Expert Tip</h5>
                          <p className="text-xs text-white/60 font-light leading-relaxed italic">{result.expertTip}</p>
                        </div>
                        <Button className="w-full h-16 rounded-2xl bg-primary text-white font-bold text-xs uppercase tracking-widest shadow-xl">Book This Itinerary</Button>
                      </div>
                    </Card>
                    <Button variant="outline" onClick={() => setStep(1)} className="w-full h-12 rounded-xl border-dashed text-[10px] font-bold uppercase tracking-widest">Start New Plan</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Label({ children, className }: any) {
  return <label className={cn("block text-sm font-medium text-foreground mb-2", className)}>{children}</label>;
}
