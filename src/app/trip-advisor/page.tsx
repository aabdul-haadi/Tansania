"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Send, 
  Sparkles, 
  User, 
  ArrowRight, 
  Loader2, 
  MessageSquare,
  Mountain,
  Palmtree,
  Zap,
  Map as MapIcon,
  CloudSun,
  ShieldCheck,
  Globe,
  Mic,
  ChevronRight,
  Search,
  Timer,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { askTripAdvisor } from '@/ai/flows/trip-advisor-flow';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const suggestions = [
  { text: "Beste Reisezeit Migration?", icon: Zap },
  { text: "15-Tage-Paket Details", icon: MapIcon },
  { text: "Kili & Safari Kombi?", icon: Mountain },
  { text: "Sansibar für Familien?", icon: Palmtree },
];

export default function TripAdvisorPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Jambo! Ich bin Ihr persönlicher Serengeti Dreams Berater. Wie kann ich Ihnen heute helfen, Ihr afrikanisches Abenteuer zu planen?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const firestore = useFirestore();

  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(4));
  }, [firestore]);
  const { data: packages, isLoading: pkgsLoading } = useCollection(pkgQuery);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleSend = async (text?: string) => {
    const userText = text || input;
    if (!userText.trim() || loading) return;

    const newMessages = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const result = await askTripAdvisor({
        message: userText,
        history: messages
      });
      setMessages([...newMessages, { role: 'model', content: result.response }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'model', content: 'Entschuldigung, ich habe gerade eine technische Störung in der Savanne. Bitte versuchen Sie es gleich noch einmal.' }]);
    } finally {
      setLoading(false);
    }
  };

  const selectPackage = (title: string) => {
    handleSend(`Erzählen Sie mir mehr über: ${title}`);
  };

  return (
    <div className="min-h-screen bg-[#fdfcfb] pt-20 flex flex-col">
      {/* Compacted Header - White Background for visibility with Navbar */}
      <section className="bg-white border-b py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-[9px] font-black uppercase tracking-[0.3em] text-primary bg-primary/5 rounded-full border border-primary/10"
              >
                <Sparkles className="w-3 h-3" /> Intelligent Concierge
              </motion.div>
              <h1 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase leading-none">
                AI Trip <span className="text-primary">Advisor</span>
              </h1>
              <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mt-2">
                Echtzeit-Planung für Ihr Tansania-Abenteuer
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="flex items-center gap-2 justify-end mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary">System Online</span>
                </div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Reaktion in &lt; 5s</p>
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary flex items-center justify-center shadow-lg">
                <Compass className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-6 md:py-10 flex-grow flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 flex-grow">
          
          {/* Main Chat Column */}
          <div className="lg:col-span-8 flex flex-col h-[600px] md:h-[700px] bg-white rounded-[2rem] shadow-xl border border-border/50 overflow-hidden relative">
            <div className="p-4 md:p-6 border-b flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-black text-[10px] uppercase tracking-widest text-secondary">Live Chat Beratung</h4>
              </div>
              <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-primary/20 text-primary">Live Sync</Badge>
            </div>

            <ScrollArea className="flex-grow p-4 md:p-10">
              <div className="space-y-8 pb-4">
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-3 md:gap-5 max-w-[90%] md:max-w-[80%]",
                      m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md",
                      m.role === 'user' ? "bg-primary text-white" : "bg-secondary text-white"
                    )}>
                      {m.role === 'user' ? <User className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
                    </div>
                    <div className={cn(
                      "p-4 md:p-6 rounded-[1.5rem] text-sm md:text-base leading-relaxed font-bold",
                      m.role === 'user' 
                        ? "bg-primary text-white rounded-tr-none shadow-primary/10" 
                        : "bg-muted/20 text-secondary rounded-tl-none border border-muted/50"
                    )}>
                      {m.content}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <div className="flex gap-3 md:gap-5">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                      <Loader2 className="w-5 h-5 text-white animate-spin" />
                    </div>
                    <div className="p-4 md:p-6 bg-muted/20 rounded-[1.5rem] rounded-tl-none border border-muted/50 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            <div className="p-4 md:p-8 border-t bg-white sticky bottom-0">
              <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto no-scrollbar pb-1">
                {suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(s.text)}
                    className="px-4 py-2 rounded-full bg-muted/30 border border-border hover:border-primary hover:bg-primary/5 transition-all text-[9px] font-black uppercase tracking-widest flex items-center gap-2 group whitespace-nowrap"
                  >
                    <s.icon className="w-3 h-3 text-primary group-hover:scale-110 transition-transform" />
                    {s.text}
                  </button>
                ))}
              </div>
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative flex items-center gap-2"
              >
                <div className="relative flex-grow">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Fragen Sie nach Routen, Preisen..."
                    className="h-14 md:h-16 pl-6 pr-12 rounded-2xl border-muted bg-[#fdfcfb] shadow-inner focus:ring-primary/20 text-sm md:text-base font-bold"
                  />
                  <Button type="button" size="icon" variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl text-muted-foreground hover:text-primary hidden md:flex">
                    <Mic className="w-5 h-5" />
                  </Button>
                </div>
                <Button 
                  type="submit" 
                  disabled={!input.trim() || loading}
                  className="h-14 md:h-16 px-6 md:px-8 rounded-2xl shadow-xl shadow-primary/20 group shrink-0"
                >
                  <Send className="w-5 h-5 md:mr-2 group-hover:translate-x-1 transition-transform" />
                  <span className="hidden md:inline">Senden</span>
                </Button>
              </form>
            </div>
          </div>

          {/* Compact Discovery Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Live Stats */}
            <Card className="rounded-[2rem] border-none shadow-lg overflow-hidden">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <CloudSun className="w-5 h-5 text-primary" />
                  <h3 className="font-headline text-lg font-bold text-secondary uppercase">Live Bedingungen</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-muted/20 rounded-2xl border border-muted/50">
                    <p className="text-[8px] font-black uppercase text-muted-foreground mb-1">Serengeti</p>
                    <p className="font-bold text-base text-secondary">28°C</p>
                    <p className="text-[8px] text-green-600 font-black uppercase mt-1 tracking-widest">Ideal</p>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-2xl border border-muted/50">
                    <p className="text-[8px] font-black uppercase text-muted-foreground mb-1">Sansibar</p>
                    <p className="font-bold text-base text-secondary">31°C</p>
                    <p className="text-[8px] text-blue-600 font-black uppercase mt-1 tracking-widest">Sonnig</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expedition Mini-Catalog */}
            <Card className="rounded-[2rem] border-none shadow-lg overflow-hidden">
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline text-lg font-bold text-secondary uppercase">Expeditionen</h3>
                  <Link href="/safaris" className="text-[8px] font-black uppercase text-primary hover:underline">Alle</Link>
                </div>
                <div className="space-y-3">
                  {pkgsLoading ? (
                    <div className="py-4 text-center"><Loader2 className="w-5 h-5 animate-spin mx-auto text-primary" /></div>
                  ) : (
                    packages?.map((pkg) => (
                      <button 
                        key={pkg.id} 
                        onClick={() => selectPackage(pkg.title)}
                        className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all text-left group"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-muted relative border border-muted">
                          <img src={pkg.imageUrl || 'https://picsum.photos/seed/pkg/100/100'} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="font-bold text-[11px] text-secondary truncate group-hover:text-primary transition-colors leading-tight">{pkg.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[8px] font-black text-muted-foreground uppercase flex items-center gap-1"><Timer className="w-2.5 h-2.5" /> {pkg.durationDays}d</span>
                            <span className="text-[8px] font-black text-primary uppercase">€{pkg.startingPrice.toLocaleString()}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5" />
                      </button>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Quick Support CTA */}
            <div className="bg-secondary text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/60">Expert Support</span>
                </div>
                <h3 className="font-headline text-xl font-bold leading-tight uppercase">Persönliche <br />Beratung</h3>
                <p className="text-white/40 text-[10px] font-bold leading-relaxed uppercase">
                  Unser Team in Berlin hilft Ihnen gerne telefonisch weiter.
                </p>
                <div className="pt-2">
                  <Link href="/contact">
                    <Button className="w-full h-12 rounded-xl font-black text-[10px] uppercase tracking-widest group-hover:scale-[1.02] transition-transform">
                      Experten Sprechen <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
