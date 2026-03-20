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
  Mic,
  ChevronRight,
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
  const scrollAnchorRef = useRef<HTMLDivElement>(null);

  // Focus scroll strictly on the internal message list anchor
  useEffect(() => {
    if (scrollAnchorRef.current) {
      scrollAnchorRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
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
    <div className="min-h-screen bg-[#fdfcfb] pt-24 flex flex-col font-bold">
      {/* Compacted Header Section */}
      <section className="bg-white border-b py-4 md:py-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-[0.02] pointer-events-none">
          <Compass className="w-48 h-48 rotate-12 text-secondary" />
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left space-y-1">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 mb-1 text-[8px] font-black uppercase tracking-[0.4em] text-primary bg-primary/5 rounded-full border border-primary/20"
              >
                <Sparkles className="w-3 h-3" /> Intelligent Concierge
              </motion.div>
              <h1 className="font-headline text-2xl md:text-4xl font-bold text-secondary uppercase leading-none tracking-tighter">
                AI Trip <span className="text-primary">Advisor</span>
              </h1>
              <p className="text-muted-foreground text-[8px] font-black uppercase tracking-[0.3em] opacity-60">
                Echtzeit-Expeditionsplanung • Nile to Savannah Bridge
              </p>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-xl border border-white/5">
                <Compass className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-4 md:py-8 flex-grow flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 flex-grow">
          
          <div className="lg:col-span-8 flex flex-col h-[550px] md:h-[700px] bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-border/50 overflow-hidden relative">
            <div className="p-4 border-b flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/10">
                  <Globe className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-black text-[9px] uppercase tracking-widest text-secondary leading-none">Dialog Registry</h4>
                  <p className="text-[6px] font-black uppercase text-muted-foreground mt-1 tracking-widest">End-to-End Encryption Enabled</p>
                </div>
              </div>
              <Badge variant="outline" className="text-[7px] font-black uppercase tracking-widest border-primary/20 text-primary bg-primary/5 px-2 py-0.5">PRESTIGE CONTEXT</Badge>
            </div>

            <ScrollArea className="flex-grow p-4 md:p-8 bg-[#fdfcfb]">
              <div className="space-y-6 pb-4">
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-3 md:gap-5 max-w-[95%] md:max-w-[85%]",
                      m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg border",
                      m.role === 'user' ? "bg-primary text-white border-primary/20" : m.role === 'error' ? "bg-destructive text-white" : "bg-secondary text-white border-white/5"
                    )}>
                      {m.role === 'user' ? <User className="w-4 h-4" /> : m.role === 'error' ? <AlertCircle className="w-4 h-4" /> : <Compass className="w-4 h-4" />}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className={cn(
                        "p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-[11px] md:text-base leading-relaxed font-bold shadow-sm",
                        m.role === 'user' 
                          ? "bg-primary text-white rounded-tr-none shadow-primary/10" 
                          : m.role === 'error'
                          ? "bg-destructive/10 text-destructive border border-destructive/20 rounded-tl-none"
                          : "bg-white text-secondary rounded-tl-none border border-muted/50"
                      )}>
                        {m.content}
                      </div>
                      {m.action && m.route && (
                        <Button asChild size="sm" variant="outline" className="rounded-full h-8 px-4 text-[8px] font-black uppercase tracking-[0.2em] border-primary/30 text-primary hover:bg-primary/5 group w-fit" suppressHydrationWarning>
                          <Link href={m.route}>
                            {m.action} <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <div className="flex gap-3 md:gap-5">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 shadow-lg border border-white/5">
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                    </div>
                    <div className="p-4 bg-white rounded-[1.5rem] rounded-tl-none border border-muted/50 flex items-center gap-1.5 shadow-sm">
                      <span className="w-1 h-1 bg-primary rounded-full animate-bounce" />
                      <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                {/* Scroll Anchor */}
                <div ref={scrollAnchorRef} className="h-4 w-full" />
              </div>
            </ScrollArea>

            <div className="p-4 md:p-6 border-t bg-white sticky bottom-0 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
              <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto no-scrollbar pb-1">
                {suggestions.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(s.text)}
                    className="px-3 py-1.5 rounded-full bg-muted/30 border border-border hover:border-primary hover:bg-primary/5 transition-all text-[8px] font-black uppercase tracking-widest flex items-center gap-2 group whitespace-nowrap"
                    suppressHydrationWarning
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
                    placeholder="Frag mich nach Migration, Sansibar oder Visa..."
                    className="h-12 md:h-14 pl-5 rounded-xl border-muted bg-[#fdfcfb] shadow-inner focus:ring-primary/20 text-[11px] md:text-sm font-bold uppercase tracking-tight"
                    suppressHydrationWarning
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={!input.trim() || loading}
                  className="h-12 md:h-14 px-6 md:px-8 rounded-xl shadow-2xl shadow-primary/30 group shrink-0 border-none transition-all hover:scale-[1.02]"
                  suppressHydrationWarning
                >
                  <Send className="w-4 h-4 md:mr-2 group-hover:translate-x-1 transition-transform" />
                  <span className="hidden md:inline text-[9px] uppercase tracking-widest">Absenden</span>
                </Button>
              </form>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <Card className="rounded-[2rem] border-none shadow-xl overflow-hidden bg-white">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shadow-inner">
                    <CloudSun className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-sm font-bold text-secondary uppercase tracking-tight leading-none">Live Status</h3>
                    <p className="text-[7px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Atmospheric Registry</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-muted/20 rounded-xl border border-muted/50 text-center space-y-1">
                    <p className="text-[7px] font-black uppercase text-muted-foreground tracking-[0.2em]">Serengeti</p>
                    <p className="font-headline text-xl font-bold text-secondary">28°C</p>
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-green-500" />
                      <span className="text-[7px] text-green-600 font-black uppercase tracking-widest">Ideal</span>
                    </div>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-xl border border-muted/50 text-center space-y-1">
                    <p className="text-[7px] font-black uppercase text-muted-foreground tracking-[0.2em]">Sansibar</p>
                    <p className="font-headline text-xl font-bold text-secondary">31°C</p>
                    <div className="flex items-center justify-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                      <span className="text-[7px] text-blue-600 font-black uppercase tracking-widest">Sonnig</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-secondary text-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-2 text-primary">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/80">Support Hub</span>
                </div>
                <h3 className="font-headline text-xl md:text-2xl font-bold leading-tight text-white uppercase tracking-tight">Persönliche <br />Beratung</h3>
                <div className="pt-1 flex flex-col gap-3">
                  <Button asChild className="w-full h-12 md:h-14 rounded-xl bg-primary text-white font-black text-[9px] uppercase tracking-[0.2em] shadow-xl border-none" suppressHydrationWarning>
                    <Link href="/contact">EXPERTEN SPRECHEN <ArrowRight className="w-3 h-3 ml-1.5" /></Link>
                  </Button>
                  <a href="tel:+493022608080" className="flex items-center justify-center gap-2 text-[8px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                    <Phone className="w-3 h-3" /> +49 30 22608080
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
