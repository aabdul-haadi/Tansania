"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Send, 
  Sparkles, 
  User, 
  ArrowRight, 
  Loader2, 
  Globe,
  AlertCircle,
  CloudSun
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
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
  { text: "Beste Reisezeit Migration?", icon: Sparkles },
  { text: "Empfiehl mir ein Paket", icon: Globe },
  { text: "Kili & Safari Kombi?", icon: Compass },
  { text: "Sansibar für Familien?", icon: CloudSun },
];

export default function TripAdvisorPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Jambo! Ich bin Ihr persönlicher Serengeti Dreams Berater. Wie kann ich Ihnen heute helfen, Ihr afrikanisches Abenteuer zu planen?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      
      if (!result || !result.response) {
        throw new Error('No response from advisor');
      }

      setMessages([...newMessages, { 
        role: 'model', 
        content: result.response,
        action: result.suggestedAction,
        route: result.suggestedRoute
      }]);
    } catch (error) {
      console.error("Advisor Error:", error);
      setMessages([...newMessages, { 
        role: 'error', 
        content: 'In der Savanne herrscht gerade Funkstille. Die Verbindung zum Berliner Büro wird synchronisiert. Bitte versuchen Sie es in wenigen Augenblicken erneut.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="h-screen bg-[#fdfcfb] flex flex-col overflow-hidden font-bold">
      {/* Cinematic Prestige Hero Strip - Integrated behind navbar */}
      <section className="relative h-[45vh] md:h-[55vh] shrink-0 overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Serengeti Savannah" 
          fill 
          priority
          className="object-cover brightness-[0.4] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
        
        <div className="container relative z-10 mx-auto px-6 md:px-10 h-full flex flex-col justify-end pb-12 md:pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 text-white text-[8px] font-black uppercase tracking-[0.4em]">
                <Sparkles className="w-3 h-3 text-primary" /> Intelligent Concierge
              </div>
              <h1 className="font-headline text-4xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase">
                AI Trip <span className="text-primary">Advisor</span>
              </h1>
              <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed max-w-lg">
                Exklusive Beratung synchronisiert mit unserer 500+ Seiten Safari-Registry.
              </p>
            </motion.div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-[7px] font-black uppercase tracking-widest border-white/10 text-white/60 px-3 h-7 bg-white/5">RAG LIVE SYNC</Badge>
              <div className="flex items-center gap-2 px-3 h-7 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[7px] font-black uppercase text-green-500">Registry Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-grow flex flex-col min-h-0 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)] rounded-t-[3rem] -mt-8 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl h-full flex flex-col py-6 md:py-8 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow min-h-0">
            
            <div className="lg:col-span-8 flex flex-col bg-[#fdfcfb] rounded-[2.5rem] border border-border/50 overflow-hidden shadow-sm relative">
              <ScrollArea className="flex-grow">
                <div className="p-6 md:p-10 space-y-8">
                  {messages.map((m, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "flex gap-4 max-w-[90%] md:max-w-[80%]",
                        m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg border",
                        m.role === 'user' ? "bg-primary text-white border-primary/20" : m.role === 'error' ? "bg-destructive text-white" : "bg-secondary text-white border-white/5"
                      )}>
                        {m.role === 'user' ? <User className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className={cn(
                          "p-5 md:p-6 rounded-[1.5rem] text-sm md:text-base leading-relaxed font-bold shadow-sm",
                          m.role === 'user' 
                            ? "bg-primary text-white rounded-tr-none" 
                            : m.role === 'error'
                            ? "bg-destructive/10 text-destructive border border-destructive/20 rounded-tl-none"
                            : "bg-white text-secondary rounded-tl-none border border-border/50"
                        )}>
                          {m.content}
                        </div>
                        {m.action && m.route && (
                          <Button asChild size="sm" variant="outline" className="rounded-full h-9 px-5 text-[9px] font-black uppercase tracking-widest border-primary/30 text-primary hover:bg-primary/5 group w-fit">
                            <Link href={m.route}>
                              {m.action} <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  {loading && (
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 shadow-lg">
                        <Loader2 className="w-5 h-5 text-white animate-spin" />
                      </div>
                      <div className="p-5 bg-white rounded-[1.5rem] rounded-tl-none border border-border/50 flex items-center gap-2 shadow-sm">
                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  )}
                  <div ref={scrollRef} className="h-1" />
                </div>
              </ScrollArea>

              <div className="p-6 md:p-8 bg-white border-t border-border/50 shrink-0">
                <div className="flex gap-2.5 mb-6 overflow-x-auto no-scrollbar pb-1">
                  {suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(s.text)}
                      className="px-5 py-2.5 rounded-full bg-muted/30 border border-border hover:border-primary hover:bg-primary/5 transition-all text-[9px] font-black uppercase tracking-widest flex items-center gap-2.5 whitespace-nowrap"
                    >
                      <s.icon className="w-3.5 h-3.5 text-primary" />
                      {s.text}
                    </button>
                  ))}
                </div>
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                  className="flex items-center gap-4"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Frag mich nach Safaris..."
                    className="h-14 md:h-16 pl-8 rounded-2xl border-none bg-muted/20 shadow-inner focus:ring-2 focus:ring-primary/20 text-sm md:text-lg font-bold uppercase tracking-tight"
                  />
                  <Button 
                    type="submit" 
                    disabled={!input.trim() || loading}
                    className="h-14 md:h-16 px-8 md:px-12 rounded-2xl shadow-xl shadow-primary/20 group transition-all hover:scale-[1.02] border-none shrink-0"
                  >
                    <Send className="w-5 h-5 md:mr-3 group-hover:translate-x-1 transition-transform" />
                    <span className="hidden md:inline text-[11px] font-black uppercase tracking-widest">Absenden</span>
                  </Button>
                </form>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6 hidden lg:flex flex-col min-h-0">
              <Card className="rounded-[2.5rem] border-none shadow-sm overflow-hidden bg-[#fdfcfb]">
                <CardContent className="p-8 space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CloudSun className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-secondary">Registry Pulse</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-5 bg-white rounded-2xl border border-border/50 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-muted-foreground">Serengeti</span>
                      <span className="text-base font-black text-secondary uppercase">28°C • Trocken</span>
                    </div>
                    <div className="p-5 bg-white rounded-2xl border border-border/50 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-muted-foreground">Sansibar</span>
                      <span className="text-base font-black text-secondary uppercase">31°C • Heiter</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-secondary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden flex-grow flex flex-col justify-center">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="relative z-10 space-y-8">
                  <h3 className="font-headline text-3xl font-black uppercase leading-tight tracking-tighter">Bespoke <br />Planning</h3>
                  <p className="text-xs text-white/40 font-black uppercase tracking-widest leading-relaxed">
                    Sprechen Sie direkt mit unseren Experten in Berlin, um Ihre Reise zu finalisieren.
                  </p>
                  <div className="pt-4">
                    <Button asChild className="w-full h-14 rounded-xl bg-primary text-white font-black text-[11px] uppercase tracking-widest shadow-xl border-none">
                      <Link href="/contact">Anfrage Senden <ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
