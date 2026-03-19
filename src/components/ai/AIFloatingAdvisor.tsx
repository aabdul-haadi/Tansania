"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  X, 
  Send, 
  Compass, 
  Sparkles, 
  Loader2, 
  User, 
  Mic,
  Maximize2,
  ChevronDown,
  Info,
  MicOff,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { askTripAdvisor } from '@/ai/flows/trip-advisor-flow';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function AIFloatingAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMobileMinimized] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    { role: 'model', content: 'Jambo! Ich bin Ihr persönlicher Safari-Concierge. Wie kann ich Ihre Reise von Ägypten nach Tansania heute zu etwas ganz Besonderem machen?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const firestore = useFirestore();

  // Fetch package data for AI context
  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true), limit(8));
  }, [firestore]);
  const { data: packages } = useCollection(pkgQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTeaser(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      
      const browserLang = navigator.language.startsWith('en') ? 'en-US' : 'de-DE';
      recognitionRef.current.lang = browserLang;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(prev => prev + (prev ? ' ' : '') + transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) {
        console.error("Speech recognition error");
      }
    }
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    const newMessages = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const result = await askTripAdvisor({ 
        message: userMsg, 
        history: messages.filter(m => m.role !== 'error').map(m => ({ role: m.role, content: m.content })),
        packagesContext: packages?.map(p => ({
          title: p.title,
          description: p.description,
          price: p.startingPrice,
          duration: p.durationDays,
          slug: p.slug
        }))
      });
      setMessages([...newMessages, { 
        role: 'model', 
        content: result.response,
        action: result.suggestedAction,
        route: result.suggestedRoute
      }]);
    } catch (e) {
      setMessages([...newMessages, { role: 'error', content: 'Funkstille in der Savanne. Bitte versuchen Sie es gleich noch einmal.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/10 backdrop-blur-[1px] z-[90] cursor-pointer pointer-events-auto"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] flex flex-col items-end gap-3 md:gap-4 pointer-events-none font-bold">
        <AnimatePresence>
          {showTeaser && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="bg-white px-5 py-3 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-primary/20 relative max-w-[200px] md:max-w-[240px] hidden md:block cursor-pointer pointer-events-auto"
              onClick={() => { setIsOpen(true); setShowTeaser(false); }}
            >
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-primary/20 rotate-45" />
              <p className="text-[10px] md:text-[11px] font-bold text-secondary uppercase tracking-widest leading-tight">
                Haben Sie Fragen? <span className="text-primary">Ich helfe Ihnen gerne!</span>
              </p>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowTeaser(false); }}
                className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary shadow-md border border-border"
              >
                <X className="w-2.5 h-2.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className={cn(
                "bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-border/50 flex flex-col overflow-hidden pointer-events-auto transition-all duration-500",
                isMinimized ? "h-16 w-64 md:h-20 md:w-72" : "h-[500px] md:h-[600px] w-[340px] md:w-[380px] max-w-[calc(100vw-32px)]"
              )}
            >
              <div className="bg-secondary p-4 md:p-5 flex items-center justify-between text-white shrink-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <Compass className="w-16 h-16 md:w-20 md:h-20 rotate-12" />
                </div>
                
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary flex items-center justify-center shadow-xl border border-white/10">
                    <Compass className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[10px] md:text-xs uppercase tracking-widest leading-none">AI Advisor</h4>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className={cn("w-1 h-1 rounded-full bg-green-500", !loading && "animate-pulse")} />
                      <p className="text-[7px] text-white/40 uppercase font-black tracking-widest">Live Catalog Sync</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 relative z-10">
                  <button onClick={() => setIsMobileMinimized(!isMinimized)} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                    {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                  <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {!isMinimized && (
                <>
                  <ScrollArea className="flex-grow p-4 md:p-5 bg-[#fdfcfb]">
                    <div className="space-y-6 pb-4">
                      {messages.map((m, idx) => (
                        <div key={idx} className={cn("flex flex-col gap-2 max-w-[94%]", m.role === 'user' ? "ml-auto items-end" : "items-start")}>
                          <div className={cn("flex gap-3", m.role === 'user' ? "flex-row-reverse" : "")}>
                            <div className={cn(
                              "w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center shrink-0 shadow-lg border",
                              m.role === 'user' ? "bg-primary text-white border-primary/20" : m.role === 'error' ? "bg-destructive text-white" : "bg-white text-secondary border-muted"
                            )}>
                              {m.role === 'user' ? <User className="w-4 h-4" /> : m.role === 'error' ? <AlertCircle className="w-4 h-4" /> : <Sparkles className="w-4 h-4 text-primary" />}
                            </div>
                            <div className={cn(
                              "p-3.5 rounded-[1.25rem] text-[10px] md:text-xs leading-relaxed font-bold shadow-sm", 
                              m.role === 'user' 
                                ? "bg-primary text-white rounded-tr-none" 
                                : m.role === 'error'
                                ? "bg-destructive/10 text-destructive border border-destructive/20 rounded-tl-none"
                                : "bg-white text-secondary border border-muted rounded-tl-none"
                            )}>
                              {m.content}
                            </div>
                          </div>
                          {m.action && m.route && (
                            <Link href={m.route} className="ml-10">
                              <Button size="sm" variant="outline" className="rounded-full h-8 px-3 text-[7px] font-bold uppercase tracking-widest border-primary/20 text-primary hover:bg-primary/5 group" suppressHydrationWarning>
                                {m.action} <ArrowRight className="w-2.5 h-2.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          )}
                        </div>
                      ))}
                      {loading && (
                        <div className="flex gap-3">
                          <div className="w-7 h-7 rounded-lg bg-white border border-muted flex items-center justify-center shrink-0 shadow-sm">
                            <Loader2 className="w-4 h-4 text-primary animate-spin" />
                          </div>
                          <div className="p-3 bg-white rounded-[1.25rem] rounded-tl-none border border-muted flex items-center gap-1.5 shadow-sm">
                            <span className="w-1 h-1 bg-primary rounded-full animate-bounce" />
                            <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                          </div>
                        </div>
                      )}
                      <div ref={scrollRef} />
                    </div>
                  </ScrollArea>

                  <div className="p-4 border-t bg-white relative">
                    <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative flex items-center gap-2">
                      <div className="relative flex-grow">
                        <Input
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder={isListening ? "Ich höre zu..." : "Frag mich nach Safaris..."}
                          className={cn(
                            "h-11 rounded-xl border-muted bg-[#fdfcfb] shadow-inner focus:ring-primary/20 text-[10px] md:text-[11px] font-bold transition-all",
                            isListening && "ring-2 ring-primary bg-primary/5"
                          )}
                          suppressHydrationWarning
                        />
                        <Button 
                          type="button" 
                          size="icon" 
                          variant="ghost" 
                          onClick={toggleListening}
                          suppressHydrationWarning
                          className={cn(
                            "absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg transition-all",
                            isListening ? "text-primary bg-primary/10 animate-pulse" : "text-muted-foreground hover:text-primary"
                          )}
                        >
                          {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                        </Button>
                      </div>
                      <Button 
                        type="submit" 
                        size="icon" 
                        suppressHydrationWarning
                        className="w-11 h-11 rounded-xl shadow-xl shadow-primary/20 shrink-0 border-none" 
                        disabled={!input.trim() || loading}
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setIsOpen(true); setShowTeaser(false); }}
          suppressHydrationWarning
          className={cn(
            "w-14 h-14 md:w-16 md:h-16 rounded-[1.5rem] md:rounded-[2rem] bg-secondary text-white shadow-2xl flex items-center justify-center relative overflow-hidden transition-all duration-500 pointer-events-auto",
            isOpen && "scale-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent opacity-50" />
          <MessageSquare className="w-6 h-6 md:w-8 md:h-8 relative z-10" />
          <div className="absolute top-2.5 right-2.5 md:top-3 md:right-3 z-20">
            <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-primary border-2 border-secondary"></span>
            </span>
          </div>
          <div className="absolute inset-0 border-[3px] border-primary/20 rounded-[1.5rem] md:rounded-[2rem] animate-pulse" />
        </motion.button>
      </div>
    </>
  );
}