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
  Timer,
  AlertCircle
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
  role: 'user' | 'model' | 'error';
  content: string;
}

const suggestions = [
  { text: "Beste Reisezeit Migration?", icon: Zap },
  { text: "Empfiehl mir ein Paket", icon: MapIcon },
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
    return query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(10));
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
        history: messages.filter(m => m.role !== 'error').map(m => ({ role: m.role as any, content: m.content })),
        packagesContext: packages?.map(p => ({
          title: p.title,
          description: p.description,
          price: p.startingPrice,
          duration: p.durationDays,
          slug: p.slug
        }))
      });
      setMessages([...newMessages, { role: 'model', content: result.response }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'error', content: 'In der Savanne gibt es gerade Funkstille. Wir konnten Ihre Nachricht nicht verarbeiten. Bitte prüfen Sie Ihre Verbindung.' }]);
    } finally {
      setLoading(false);
    }
  };

  const selectPackage = (title: string) => {
    handleSend(`Erzählen Sie mir mehr über: ${title}`);
  };

  return (
    <div className="min-h-screen bg-[#fdfcfb] pt-20 flex flex-col font-bold">
      <section className="bg-white border-b py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-2 text-[8px] font-black uppercase tracking-[0.3em] text-primary bg-primary/5 rounded-full border border-primary/10"
              >
                <Sparkles className="w-3 h-3" /> Intelligent Concierge
              </motion.div>
              <h1 className="font-headline text-2xl md:text-4xl font-bold text-secondary uppercase leading-none">
                AI Trip <span className="text-primary">Advisor</span>
              </h1>
              <p className="text-muted-foreground text-[8px] font-black uppercase tracking-widest mt-1.5">
                Echtzeit-Planung für Ihr Tansania-Abenteuer
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="flex items-center gap-2 justify-end mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-secondary">System Online</span>
                </div>
                <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Syncing Catalog...</p>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
                <Compass className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-4 md:py-8 flex-grow flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 flex-grow">
          
          <div className="lg:col-span-8 flex flex-col h-[550px] md:h-[650px] bg-white rounded-[2rem] shadow-xl border border-border/50 overflow-hidden relative">
            <div className="p-4 border-b flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                </div>
                <h4 className="font-black text-[9px] uppercase tracking-widest text-secondary">Live Chat Beratung</h4>
              </div>
              <Badge variant="outline" className="text-[7px] font-black uppercase tracking-widest border-primary/20 text-primary">Prestige Context</Badge>
            </div>

            <ScrollArea className="flex-grow p-4 md:p-8 bg-[#fdfcfb]">
              <div className="space-y-6 pb-4">
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-3 md:gap-4 max-w-[92%] md:max-w-[85%]",
                      m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-md",
                      m.role === 'user' ? "bg-primary text-white" : m.role === 'error' ? "bg-destructive text-white" : "bg-secondary text-white"
                    )}>
                      {m.role === 'user' ? <User className="w-4 h-4" /> : m.role === 'error' ? <AlertCircle className="w-4 h-4" /> : <Compass className="w-4 h-4" />}
                    </div>
                    <div className={cn(
                      "p-4 rounded-[1.5rem] text-[11px] md:text-sm leading-relaxed font-bold",
                      m.role === 'user' 
                        ? "bg-primary text-white rounded-tr-none shadow-primary/10" 
                        : m.role === 'error'
                        ? "bg-destructive/10 text-destructive border border-destructive/20 rounded-tl-none"
                        : "bg-white text-secondary rounded-tl-none border border-muted/50 shadow-sm"
                    )}>
                      {m.content}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <div className="flex gap-3 md:gap-4">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                    </div>
                    <div className="p-4 bg-white rounded-[1.5rem] rounded-tl-none border border-muted/50 flex items-center gap-1.5 shadow-sm">
                      <span className="w-1 h-1 bg-primary rounded-full animate-bounce" />
                      <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            <div className="p-4 md:p-6 border-t bg-white sticky bottom-0">
              <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto no-scrollbar pb-1">
                {suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(s.text)}
                    className="px-3 py-1.5 rounded-full bg-muted/30 border border-border hover:border-primary hover:bg-primary/5 transition-all text-[8px] font-black uppercase tracking-widest flex items-center gap-2 group whitespace-nowrap"
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
                    placeholder="Frag mich nach Paketen oder Preisen..."
                    className="h-12 md:h-14 pl-5 pr-10 rounded-xl border-muted bg-[#fdfcfb] shadow-inner focus:ring-primary/20 text-xs font-bold"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={!input.trim() || loading}
                  className="h-12 md:h-14 px-5 md:px-6 rounded-xl shadow-xl shadow-primary/20 group shrink-0 border-none"
                >
                  <Send className="w-4 h-4 md:mr-2 group-hover:translate-x-1 transition-transform" />
                  <span className="hidden md:inline text-[9px] uppercase">Senden</span>
                </Button>
              </form>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <Card className="rounded-[2rem] border-none shadow-lg overflow-hidden bg-white">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CloudSun className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-headline text-sm font-bold text-secondary uppercase tracking-tight">Live Bedingungen</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-muted/20 rounded-xl border border-muted/50 text-center">
                    <p className="text-[7px] font-black uppercase text-muted-foreground mb-0.5">Serengeti</p>
                    <p className="font-bold text-sm text-secondary">28°C</p>
                    <p className="text-[7px] text-green-600 font-black uppercase mt-0.5 tracking-widest">Ideal</p>
                  </div>
                  <div className="p-3 bg-muted/20 rounded-xl border border-muted/50 text-center">
                    <p className="text-[7px] font-black uppercase text-muted-foreground mb-0.5">Sansibar</p>
                    <p className="font-bold text-sm text-secondary">31°C</p>
                    <p className="text-[7px] text-blue-600 font-black uppercase mt-0.5 tracking-widest">Sonnig</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-none shadow-lg overflow-hidden bg-white">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline text-sm font-bold text-secondary uppercase tracking-tight">Expeditionen</h3>
                  <Link href="/safaris" className="text-[7px] font-black uppercase text-primary hover:underline">Alle</Link>
                </div>
                <div className="space-y-2.5">
                  {pkgsLoading ? (
                    <div className="py-4 text-center"><Loader2 className="w-4 h-4 animate-spin mx-auto text-primary" /></div>
                  ) : (
                    packages?.map((pkg) => (
                      <button 
                        key={pkg.id} 
                        onClick={() => selectPackage(pkg.title)}
                        className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all text-left group"
                      >
                        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-muted relative border border-muted">
                          <img src={pkg.imageUrl || 'https://picsum.photos/seed/pkg/100/100'} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="font-bold text-[10px] text-secondary truncate group-hover:text-primary transition-colors leading-tight">{pkg.title}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[7px] font-black text-muted-foreground uppercase flex items-center gap-1"><Timer className="w-2.5 h-2.5" /> {pkg.durationDays}d</span>
                            <span className="text-[7px] font-black text-primary uppercase">€{pkg.startingPrice.toLocaleString()}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-all" />
                      </button>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary text-white p-6 md:p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[7px] font-black uppercase tracking-widest text-white/80">Staff Support</span>
                </div>
                <h3 className="font-headline text-lg font-bold leading-tight text-white uppercase">Persönliche Beratung</h3>
                <p className="text-white/60 text-[9px] font-bold leading-relaxed uppercase">
                  Unser Team in Berlin hilft Ihnen gerne telefonisch weiter.
                </p>
                <Link href="/contact" className="block pt-1">
                  <Button className="w-full h-11 rounded-xl font-black text-[9px] uppercase tracking-widest group-hover:scale-[1.02] transition-transform border-none">
                    Experten Sprechen <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
