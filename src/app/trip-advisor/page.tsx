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
  Map as MapIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
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
  }, [messages]);

  const handleSend = async (text: string) => {
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
    <div className="min-h-screen bg-[#fdfcfb] pt-32 pb-12 flex flex-col">
      <div className="container mx-auto px-4 max-w-4xl flex-grow flex flex-col">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-secondary text-white shadow-2xl mb-6 relative"
          >
            <Compass className="w-8 h-8" />
            <div className="absolute -top-1 -right-1">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white"></span>
              </span>
            </div>
          </motion.div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4 text-secondary uppercase">AI Trip <span className="text-primary">Advisor</span></h1>
          <p className="text-muted-foreground text-sm font-light uppercase tracking-[0.2em]">Ihr digitaler Experte für Tansania & Sansibar</p>
        </div>

        {/* Chat Area */}
        <div className="flex-grow bg-white rounded-[2.5rem] shadow-2xl border border-border/50 overflow-hidden flex flex-col mb-8 relative">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          
          <ScrollArea className="flex-grow p-6 md:p-10">
            <div className="space-y-8">
              {messages.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-4 max-w-[85%]",
                    m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm",
                    m.role === 'user' ? "bg-primary text-white" : "bg-secondary text-white"
                  )}>
                    {m.role === 'user' ? <User className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
                  </div>
                  <div className={cn(
                    "p-5 md:p-7 rounded-[2rem] text-sm md:text-base leading-relaxed font-light shadow-sm",
                    m.role === 'user' 
                      ? "bg-primary text-white rounded-tr-none" 
                      : "bg-muted/30 text-secondary rounded-tl-none border border-muted"
                  )}>
                    {m.content}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex gap-4 max-w-[85%]">
                  <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                  </div>
                  <div className="p-6 bg-muted/30 rounded-[2rem] rounded-tl-none border border-muted flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-6 border-t bg-white/50 backdrop-blur-md">
            <div className="flex flex-wrap gap-2 mb-6">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(s.text)}
                  className="px-4 py-2 rounded-full bg-white border border-border hover:border-primary hover:text-primary transition-all text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group shadow-sm"
                >
                  <s.icon className="w-3 h-3 text-primary group-hover:scale-110 transition-transform" />
                  {s.text}
                </button>
              ))}
            </div>
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              className="relative"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Fragen Sie nach Routen, Preisen oder Visum..."
                className="h-16 pl-6 pr-20 rounded-2xl border-muted bg-white shadow-inner focus:ring-primary/20 text-base"
              />
              <Button 
                type="submit" 
                disabled={!input.trim() || loading}
                size="icon" 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl"
              >
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/trip-planner">
            <div className="p-6 rounded-[2rem] bg-secondary text-white flex items-center justify-between hover:bg-secondary/90 transition-all shadow-xl group border-none">
              <div>
                <h4 className="font-bold text-lg leading-tight text-white uppercase">Konfigurator</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Maßgeschneiderte Reise planen</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
          <Link href="/contact">
            <div className="p-6 rounded-[2rem] bg-white border border-border flex items-center justify-between hover:border-primary/30 transition-all shadow-sm group">
              <div>
                <h4 className="font-bold text-lg leading-tight text-secondary uppercase">Experten sprechen</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Direkter Kontakt nach Kairo</p>
              </div>
              <MessageSquare className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
