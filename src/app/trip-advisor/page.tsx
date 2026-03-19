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
  AlertCircle,
  Phone,
  LayoutGrid
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
  action?: string;
  route?: string;
}

const suggestions = [
  { text: "Beste Reisezeit Migration?", icon: Zap },
  { text: "Empfiehl mir ein Paket", icon: MapIcon },
  { text: "Kili & Safari Kombi?", icon: Mountain },
  { text: "Sansibar für Familien?", icon: Palmtree },
];

export default function TripAdvisorPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Jambo! Ich bin Ihr persönlicher Serengeti Dreams Berater. Wie kann ich Ihnen heute helfen, Ihr afrikanisches Abenteuer zu planen? Ich habe Zugriff auf unseren gesamten Katalog und aktuelle Berichte aus dem Busch.' }
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
        history: messages.filter(m => m.role !== 'error').map(m => ({ role: m.role as any, content: m.content }))
      });
      setMessages([...newMessages, { 
        role: 'model', 
        content: result.response,
        action: result.suggestedAction,
        route: result.suggestedRoute
      }]);
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
    <div className="min-h-screen bg-[#fdfcfb] pt-24 flex flex-col font-bold">
      {/* Cinematic Header Overlay */}
      <section className="bg-white border-b py-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
          <Compass className="w-64 h-64 rotate-12 text-secondary" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left space-y-2">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-2 text-[10px] font-black uppercase tracking-[0.4em] text-primary bg-primary/5 rounded-full border border-primary/20 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" /> Intelligent Concierge
              </motion.div>
              <h1 className="font-headline text-3xl md:text-5xl font-bold text-secondary uppercase leading-none tracking-tighter">
                AI Trip <span className="text-primary">Advisor</span>
              </h1>
              <p className="text-muted-foreground text-[10px] font-black uppercase tracking-[0.3em] opacity-60">
                Echtzeit-Expeditionsplanung • Nile to Savannah Bridge
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <div className="flex items-center gap-2 justify-end mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Registry Sync Active</span>
                </div>
                <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-muted-foreground">Monitoring 500+ Paths</p>
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-secondary flex items-center justify-center shadow-2xl border border-white/5 group hover:bg-primary transition-colors duration-500">
                <Compass className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:rotate-45 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-6 md:py-10 flex-grow flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 flex-grow">
          
          {/* Main Chat Core */}
          <div className="lg:col-span-8 flex flex-col h-[600px] md:h-[750px] bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-border/50 overflow-hidden relative">
            <div className="p-5 border-b flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/10">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-secondary leading-none">Besprechungsprotokoll</h4>
                  <p className="text-[7px] font-black uppercase text-muted-foreground mt-1 tracking-widest">End-to-End Encryption Enabled</p>
                </div>
              </div>
              <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-primary/20 text-primary bg-primary/5 px-3 py-1">PRESTIGE CONTEXT</Badge>
            </div>

            <ScrollArea className="flex-grow p-6 md:p-10 bg-[#fdfcfb]">
              <div className="space-y-8 pb-6">
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-4 md:gap-6 max-w-[95%] md:max-w-[88%]",
                      m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xl border",
                      m.role === 'user' ? "bg-primary text-white border-primary/20" : m.role === 'error' ? "bg-destructive text-white" : "bg-secondary text-white border-white/5"
                    )}>
                      {m.role === 'user' ? <User className="w-5 h-5" /> : m.role === 'error' ? <AlertCircle className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className={cn(
                        "p-5 md:p-6 rounded-[2rem] text-xs md:text-base leading-relaxed font-bold shadow-sm",
                        m.role === 'user' 
                          ? "bg-primary text-white rounded-tr-none shadow-primary/10" 
                          : m.role === 'error'
                          ? "bg-destructive/10 text-destructive border border-destructive/20 rounded-tl-none"
                          : "bg-white text-secondary rounded-tl-none border border-muted/50"
                      )}>
                        {m.content}
                      </div>
                      {m.action && m.route && (
                        <Button asChild size="sm" variant="outline" className="rounded-full h-10 px-6 text-[9px] font-black uppercase tracking-[0.2em] border-primary/30 text-primary hover:bg-primary/5 group w-fit">
                          <Link href={m.route}>
                            {m.action} <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <div className="flex gap-4 md:gap-6">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 shadow-lg border border-white/5">
                      <Loader2 className="w-5 h-5 text-white animate-spin" />
                    </div>
                    <div className="p-5 bg-white rounded-[2rem] rounded-tl-none border border-muted/50 flex items-center gap-2 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            {/* Technical Input Surface */}
            <div className="p-6 md:p-8 border-t bg-white sticky bottom-0 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
              <div className="flex flex-wrap gap-2.5 mb-6 overflow-x-auto no-scrollbar pb-2">
                {suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(s.text)}
                    className="px-4 py-2 rounded-full bg-muted/30 border border-border hover:border-primary hover:bg-primary/5 transition-all text-[9px] font-black uppercase tracking-widest flex items-center gap-3 group whitespace-nowrap"
                  >
                    <s.icon className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                    {s.text}
                  </button>
                ))}
              </div>
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative flex items-center gap-3"
              >
                <div className="relative flex-grow">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Frag mich nach Migration, Sansibar oder Visa..."
                    className="h-14 md:h-16 pl-6 pr-14 rounded-2xl border-muted bg-[#fdfcfb] shadow-inner focus:ring-primary/20 text-sm font-bold uppercase tracking-tight"
                    suppressHydrationWarning
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground cursor-pointer hover:text-primary transition-colors">
                      <Mic className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  disabled={!input.trim() || loading}
                  className="h-14 md:h-16 px-8 md:px-10 rounded-2xl shadow-2xl shadow-primary/30 group shrink-0 border-none transition-all hover:scale-[1.02]"
                >
                  <Send className="w-5 h-5 md:mr-3 group-hover:translate-x-1 transition-transform" />
                  <span className="hidden md:inline text-[10px] uppercase tracking-widest">Absenden</span>
                </Button>
              </form>
            </div>
          </div>

          {/* Expert Context Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <Card className="rounded-[2.5rem] border-none shadow-xl overflow-hidden bg-white">
              <CardContent className="p-8 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shadow-inner">
                    <CloudSun className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-base font-bold text-secondary uppercase tracking-tight leading-none">Live Bedingungen</h3>
                    <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mt-1.5">Atmospheric Registry</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-muted/20 rounded-2xl border border-muted/50 text-center space-y-1">
                    <p className="text-[8px] font-black uppercase text-muted-foreground tracking-[0.2em]">Serengeti</p>
                    <p className="font-headline text-2xl font-bold text-secondary">28°C</p>
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-[8px] text-green-600 font-black uppercase tracking-widest">Ideal</span>
                    </div>
                  </div>
                  <div className="p-5 bg-muted/20 rounded-2xl border border-muted/50 text-center space-y-1">
                    <p className="text-[8px] font-black uppercase text-muted-foreground tracking-[0.2em]">Sansibar</p>
                    <p className="font-headline text-2xl font-bold text-secondary">31°C</p>
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-[8px] text-blue-600 font-black uppercase tracking-widest">Sonnig</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Catalog Discovery */}
            <Card className="rounded-[2.5rem] border-none shadow-xl overflow-hidden bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center">
                      <LayoutGrid className="w-5 h-5" />
                    </div>
                    <h3 className="font-headline text-base font-bold text-secondary uppercase tracking-tight">Expeditionen</h3>
                  </div>
                  <Link href="/safaris" className="text-[9px] font-black uppercase text-primary hover:underline tracking-widest">Alle</Link>
                </div>
                <div className="space-y-3">
                  {pkgsLoading ? (
                    <div className="py-10 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-primary opacity-20" /></div>
                  ) : (
                    packages?.slice(0, 5).map((pkg) => (
                      <button 
                        key={pkg.id} 
                        onClick={() => selectPackage(pkg.title)}
                        className="w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all text-left group"
                      >
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-muted relative border border-muted shadow-sm">
                          <img src={pkg.imageUrl || 'https://picsum.photos/seed/pkg/100/100'} alt="" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="font-bold text-[11px] text-secondary truncate group-hover:text-primary transition-colors uppercase leading-tight">{pkg.title}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-[8px] font-black text-muted-foreground uppercase flex items-center gap-1"><Timer className="w-3 h-3 text-primary" /> {pkg.durationDays}d</span>
                            <span className="text-[8px] font-black text-primary uppercase">€{pkg.startingPrice.toLocaleString()}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                      </button>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3 text-primary">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Support Registry</span>
                </div>
                <h3 className="font-headline text-2xl font-bold leading-tight text-white uppercase tracking-tight">Persönliche <br />Beratung</h3>
                <p className="text-white/40 text-[10px] font-bold leading-relaxed uppercase tracking-widest">
                  Unser Team in Berlin steht Ihnen für tiefergehende Fragen persönlich zur Verfügung.
                </p>
                <div className="pt-2 flex flex-col gap-3">
                  <Button asChild className="w-full h-14 rounded-2xl bg-primary text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:scale-[1.02] transition-transform border-none">
                    <Link href="/contact">EXPERTEN SPRECHEN <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <a href="tel:+493022608080" className="flex items-center justify-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" /> +49 30 22608080
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
