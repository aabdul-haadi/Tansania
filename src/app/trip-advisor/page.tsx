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
  Globe,
  AlertCircle,
  Phone,
  LayoutGrid,
  CloudSun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { askTripAdvisor } from '@/ai/flows/trip-advisor-flow';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

interface Message {
  role: 'user' | 'model' | 'error';
  content: string;
  action?: string;
  route?: string;
}

const suggestions = [
  { text: "Beste Reisezeit Migration?", icon: Zap },
  { text: "Empfiehl mir ein Paket", icon: LayoutGrid },
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

  // STABILIZED VIEWPORT: Precision scroll target prevents page jumping
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
      setMessages([...newMessages, { 
        role: 'error', 
        content: 'In der Savanne gibt es gerade Funkstille. Wir konnten Ihre Nachricht nicht verarbeiten. Bitte prüfen Sie Ihre Verbindung.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-[#fdfcfb] pt-20 flex flex-col font-bold overflow-hidden">
      {/* COMPACTED HEADER: Prestige Density Protocol */}
      <section className="bg-white border-b py-2 md:py-3 relative overflow-hidden shrink-0">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
            alt="Savannah" 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex justify-between items-center">
            <div className="space-y-0">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-2.5 py-0.5 mb-0.5 text-[7px] font-black uppercase tracking-[0.4em] text-primary bg-primary/5 rounded-full border border-primary/20"
              >
                <Sparkles className="w-2 h-2" /> Intelligent Concierge
              </motion.div>
              <h1 className="font-headline text-lg md:text-xl font-bold text-secondary uppercase leading-none tracking-tighter">
                AI Trip <span className="text-primary">Advisor</span>
              </h1>
            </div>
            <div className="hidden md:block">
              <Badge variant="outline" className="text-[7px] font-black uppercase tracking-widest border-primary/20 text-primary bg-primary/5 px-2 py-0.5">RAG LIVE SYNC</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-3 flex-grow flex flex-col min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-grow min-h-0">
          
          <div className="lg:col-span-8 flex flex-col bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-border/50 overflow-hidden relative">
            <div className="p-2.5 border-b flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/10">
                  <Globe className="w-3 h-3 text-primary" />
                </div>
                <p className="text-[7px] font-black uppercase tracking-widest text-secondary">Registry Sync Active</p>
              </div>
            </div>

            {/* INTERNAL SCROLL: Prevents page jumping by targeting the viewport directly */}
            <ScrollArea className="flex-grow bg-[#fdfcfb]">
              <div className="p-4 md:p-6 space-y-5">
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-3 max-w-[95%] md:max-w-[85%]",
                      m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-lg border",
                      m.role === 'user' ? "bg-primary text-white border-primary/20" : m.role === 'error' ? "bg-destructive text-white" : "bg-secondary text-white border-white/5"
                    )}>
                      {m.role === 'user' ? <User className="w-3.5 h-3.5" /> : m.role === 'error' ? <AlertCircle className="w-3.5 h-3.5" /> : <Compass className="w-3.5 h-3.5" />}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className={cn(
                        "p-4 rounded-[1.25rem] md:rounded-[1.5rem] text-[10px] md:text-sm leading-relaxed font-bold shadow-sm",
                        m.role === 'user' 
                          ? "bg-primary text-white rounded-tr-none shadow-primary/10" 
                          : m.role === 'error'
                          ? "bg-destructive/10 text-destructive border border-destructive/20 rounded-tl-none"
                          : "bg-white text-secondary rounded-tl-none border border-muted/50"
                      )}>
                        {m.content}
                      </div>
                      {m.action && m.route && (
                        <Button asChild size="sm" variant="outline" className="rounded-full h-7 px-3 text-[7px] font-black uppercase tracking-[0.2em] border-primary/30 text-primary hover:bg-primary/5 group w-fit" suppressHydrationWarning>
                          <Link href={m.route}>
                            {m.action} <ArrowRight className="w-2.5 h-2.5 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center shrink-0 shadow-lg border border-white/5">
                      <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
                    </div>
                    <div className="p-3 bg-white rounded-[1.25rem] rounded-tl-none border border-muted/50 flex items-center gap-1 shadow-sm">
                      <span className="w-1 h-1 bg-primary rounded-full animate-bounce" />
                      <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                <div ref={scrollRef} className="h-1" />
              </div>
            </ScrollArea>

            <div className="p-3 md:p-4 border-t bg-white shrink-0 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
              <div className="flex flex-wrap gap-1.5 mb-3 overflow-x-auto no-scrollbar pb-1">
                {suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(s.text)}
                    className="px-2.5 py-1 rounded-full bg-muted/30 border border-border hover:border-primary hover:bg-primary/5 transition-all text-[7px] font-black uppercase tracking-widest flex items-center gap-1.5 group whitespace-nowrap"
                    suppressHydrationWarning
                  >
                    <s.icon className="w-2.5 h-2.5 text-primary group-hover:scale-110 transition-transform" />
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
                    placeholder="Frag mich nach Safaris..."
                    className="h-10 md:h-12 pl-4 rounded-lg border-muted bg-[#fdfcfb] shadow-inner focus:ring-primary/20 text-[10px] md:text-xs font-bold uppercase tracking-tight"
                    suppressHydrationWarning
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={!input.trim() || loading}
                  className="h-10 md:h-12 px-4 md:px-6 rounded-lg shadow-xl shadow-primary/30 group shrink-0 border-none transition-all hover:scale-[1.02]"
                  suppressHydrationWarning
                >
                  <Send className="w-3.5 h-3.5 md:mr-1.5 group-hover:translate-x-1 transition-transform" />
                  <span className="hidden md:inline text-[8px] uppercase tracking-widest">Senden</span>
                </Button>
              </form>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-4 hidden lg:flex flex-col overflow-hidden">
            <Card className="rounded-[1.5rem] border-none shadow-xl overflow-hidden bg-white shrink-0">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shadow-inner">
                    <CloudSun className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-[10px] font-bold text-secondary uppercase tracking-tight leading-none">Live Conditions</h3>
                    <p className="text-[6px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">Registry Data</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 bg-muted/20 rounded-lg border border-muted/50 text-center space-y-0.5">
                    <p className="text-[6px] font-black uppercase text-muted-foreground tracking-[0.2em]">Serengeti</p>
                    <p className="font-headline text-lg font-bold text-secondary">28°C</p>
                    <span className="text-[6px] text-green-600 font-black uppercase tracking-widest">Perfect</span>
                  </div>
                  <div className="p-3 bg-muted/20 rounded-lg border border-muted/50 text-center space-y-0.5">
                    <p className="text-[6px] font-black uppercase text-muted-foreground tracking-[0.2em]">Sansibar</p>
                    <p className="font-headline text-lg font-bold text-secondary">31°C</p>
                    <span className="text-[6px] text-blue-600 font-black uppercase tracking-widest">Clear</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary text-white p-5 rounded-[1.5rem] shadow-2xl relative overflow-hidden group flex-grow flex flex-col justify-center">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/80">Expert Help</span>
                </div>
                <h3 className="font-headline text-lg md:text-xl font-bold leading-tight text-white uppercase tracking-tight">Persönliche <br />Planung</h3>
                <p className="text-[8px] text-white/40 font-bold uppercase tracking-widest leading-relaxed">Unsere Spezialisten in Berlin stehen bereit, um Ihre Traumreise zu finalisieren.</p>
                <div className="pt-1 flex flex-col gap-2">
                  <Button asChild className="w-full h-10 rounded-lg bg-primary text-white font-black text-[8px] uppercase tracking-[0.2em] shadow-xl border-none" suppressHydrationWarning>
                    <Link href="/contact">JETZT ANFRAGEN <ArrowRight className="w-3 h-3 ml-1" /></Link>
                  </Button>
                  <a href="tel:+493022608080" className="flex items-center justify-center gap-1.5 text-[7px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                    <Phone className="w-2.5 h-2.5" /> +49 30 22608080
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
