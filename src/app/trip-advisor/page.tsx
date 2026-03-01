
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
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { askTripAdvisor } from '@/ai/flows/trip-advisor-flow';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const suggestions = [
  { text: "Beste Reisezeit für die Migration?", icon: Zap },
  { text: "Details zum 15-Tage-Paket", icon: MapIcon },
  { text: "Kilimandscharo & Safari Kombi?", icon: Mountain },
  { text: "Sansibar Strände für Familien?", icon: Palmtree },
];

export default function TripAdvisorPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Jambo! Ich bin Ihr persönlicher Serengeti Dreams Berater. Wie kann ich Ihnen heute helfen, Ihr afrikanisches Abenteuer zu planen?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleSend = async (text?: string) => {
    const userText = text || input;
    if (!userText.trim() || loading) return;

    const newMessages = [...messages, { role: 'user', content: userText } as Message];
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

  return (
    <div className="min-h-screen bg-[#fdfcfb] pt-24 pb-12 flex flex-col">
      {/* Immersive Header */}
      <section className="bg-secondary text-white pt-12 pb-24 relative overflow-hidden border-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-1.5 mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-primary bg-white/5 rounded-full border border-white/10"
              >
                <Sparkles className="w-3.5 h-3.5" /> Intelligent Concierge
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-headline text-4xl md:text-7xl font-bold leading-tight uppercase"
              >
                AI Trip <br /><span className="text-primary">Advisor</span>
              </motion.h1>
            </div>
            
            <div className="flex items-center gap-6 pb-2">
              <div className="text-right hidden md:block">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Status</p>
                <div className="flex items-center gap-2 justify-end">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest">Berater Online</span>
                </div>
              </div>
              <div className="w-16 h-16 rounded-3xl bg-primary flex items-center justify-center shadow-2xl">
                <Compass className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl -mt-16 relative z-20 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Chat Column */}
          <div className="lg:col-span-8 flex flex-col h-[700px] bg-white rounded-[3rem] shadow-2xl border border-border/50 overflow-hidden">
            <div className="p-6 border-b flex items-center justify-between bg-white/50 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest leading-none">Safari Beratung</h4>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold mt-1">Echtzeit-Expertise</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-widest border-primary/20 text-primary">Live Sync</Badge>
              </div>
            </div>

            <ScrollArea className="flex-grow p-8 md:p-12">
              <div className="space-y-10">
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-5 max-w-[85%]",
                      m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xl",
                      m.role === 'user' ? "bg-primary text-white" : "bg-secondary text-white"
                    )}>
                      {m.role === 'user' ? <User className="w-6 h-6" /> : <Compass className="w-6 h-6" />}
                    </div>
                    <div className={cn(
                      "p-6 md:p-8 rounded-[2.5rem] text-sm md:text-base leading-relaxed font-light shadow-sm",
                      m.role === 'user' 
                        ? "bg-primary text-white rounded-tr-none" 
                        : "bg-muted/30 text-secondary rounded-tl-none border border-muted"
                    )}>
                      {m.content}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                      <Loader2 className="w-6 h-6 text-white animate-spin" />
                    </div>
                    <div className="p-6 bg-muted/30 rounded-[2.5rem] rounded-tl-none border border-muted flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100" />
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                )}
                <div ref={scrollRef} />
              </div>
            </ScrollArea>

            <div className="p-8 border-t bg-white">
              <div className="flex flex-wrap gap-2 mb-8">
                {suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(s.text)}
                    className="px-5 py-2.5 rounded-full bg-muted/30 border border-border hover:border-primary hover:bg-primary/5 transition-all text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group"
                  >
                    <s.icon className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
                    {s.text}
                  </button>
                ))}
              </div>
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Fragen Sie nach Routen, Preisen oder Visum..."
                  className="h-16 pl-8 pr-32 rounded-2xl border-muted bg-[#fdfcfb] shadow-inner focus:ring-primary/20 text-base font-medium"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <Button type="button" size="icon" variant="ghost" className="w-12 h-12 rounded-xl text-muted-foreground hover:text-primary">
                    <Mic className="w-5 h-5" />
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={!input.trim() || loading}
                    className="h-12 px-6 rounded-xl shadow-lg"
                  >
                    <Send className="w-5 h-5 mr-2" /> Senden
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Contextual Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-border/50 space-y-8">
              <div className="flex items-center gap-3">
                <CloudSun className="w-6 h-6 text-primary" />
                <h3 className="font-headline text-xl font-bold text-secondary uppercase">Live aus Tansania</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/20 rounded-2xl">
                  <p className="text-[10px] font-bold uppercase text-muted-foreground mb-1">Serengeti</p>
                  <p className="font-bold text-lg">28°C</p>
                  <p className="text-[9px] text-green-600 font-bold uppercase mt-1">Hauptsaison</p>
                </div>
                <div className="p-4 bg-muted/20 rounded-2xl">
                  <p className="text-[10px] font-bold uppercase text-muted-foreground mb-1">Sansibar</p>
                  <p className="font-bold text-lg">31°C</p>
                  <p className="text-[9px] text-blue-600 font-bold uppercase mt-1">Perfektes Wasser</p>
                </div>
              </div>
              <div className="space-y-4 pt-4 border-t">
                <div className="flex gap-4">
                  <Zap className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-sm">Migration News</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">Herden bewegen sich aktuell in Richtung der zentralen Ebenen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-sm">Visa-Check</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">E-Visa Bearbeitungszeit aktuell ca. 48-72 Stunden.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-6">
                <h3 className="font-headline text-2xl font-bold leading-tight text-white uppercase">Keine Zeit <br />zu <span className="text-primary">Chatten?</span></h3>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Nutzen Sie unseren interaktiven Trip Planner für ein maßgeschneidertes Angebot in 2 Minuten.
                </p>
                <Link href="/trip-planner" className="block">
                  <Button className="w-full h-14 rounded-xl font-bold bg-primary text-white border-none shadow-xl transition-all group">
                    Trip Planner starten <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="p-8 border-2 border-dashed border-muted rounded-[3rem] text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mx-auto">
                <MessageSquare className="w-6 h-6 text-muted-foreground" />
              </div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-secondary">Echter Experte?</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Wünschen Sie ein persönliches Telefonat mit unserem Büro in Kairo oder Berlin?</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">
                Experten kontaktieren <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
