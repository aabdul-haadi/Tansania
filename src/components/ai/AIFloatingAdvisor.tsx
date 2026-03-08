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
  MicOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { askTripAdvisor } from '@/ai/flows/trip-advisor-flow';
import { cn } from '@/lib/utils';

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

  useEffect(() => {
    // Show teaser after 3 seconds
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

  // Voice Assistant Logic
  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'de-DE';

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
        console.error("Speech recognition already started");
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
      const result = await askTripAdvisor({ message: userMsg, history: messages });
      setMessages([...newMessages, { role: 'model', content: result.response }]);
    } catch (e) {
      setMessages([...newMessages, { role: 'model', content: 'In der Savanne gibt es gerade Funkstille. Bitte versuchen Sie es gleich noch einmal.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Click-Outside Overlay */}
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[90] cursor-pointer"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none">
        {/* Teaser Bubble */}
        <AnimatePresence>
          {showTeaser && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="bg-white px-6 py-4 rounded-[2rem] shadow-2xl border border-primary/20 relative max-w-[240px] hidden md:block cursor-pointer pointer-events-auto"
              onClick={() => { setIsOpen(true); setShowTeaser(false); }}
            >
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-primary/20 rotate-45" />
              <p className="text-[11px] font-bold text-secondary uppercase tracking-widest leading-relaxed">
                Haben Sie Fragen? <span className="text-primary">Ich helfe Ihnen gerne!</span>
              </p>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowTeaser(false); }}
                className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary shadow-md border border-border"
              >
                <X className="w-3 h-3" />
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
                "bg-white rounded-[2.5rem] shadow-2xl border border-border/50 flex flex-col overflow-hidden pointer-events-auto",
                isMinimized ? "h-20 w-72" : "h-[650px] w-[400px] max-w-[calc(100vw-48px)]"
              )}
            >
              {/* Header */}
              <div className="bg-secondary p-6 flex items-center justify-between text-white shrink-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <Compass className="w-24 h-24 rotate-12" />
                </div>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-xl border border-white/10">
                    <Compass className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest leading-none">AI Safari Advisor</h4>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className={cn("w-1.5 h-1.5 rounded-full bg-green-500", !loading && "animate-pulse")} />
                      <p className="text-[9px] text-white/40 uppercase font-black tracking-widest">Experten-Modus Aktiv</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 relative z-10">
                  <button onClick={() => setIsMobileMinimized(!isMinimized)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {!isMinimized && (
                <>
                  {/* Chat Area */}
                  <ScrollArea className="flex-grow p-6 bg-[#fdfcfb]">
                    <div className="space-y-8 pb-4">
                      {messages.map((m, idx) => (
                        <div key={idx} className={cn("flex gap-4 max-w-[90%]", m.role === 'user' ? "ml-auto flex-row-reverse" : "")}>
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg border",
                            m.role === 'user' ? "bg-primary text-white border-primary/20" : "bg-white text-secondary border-muted"
                          )}>
                            {m.role === 'user' ? <User className="w-5 h-5" /> : <Sparkles className="w-5 h-5 text-primary" />}
                          </div>
                          <div className={cn(
                            "p-5 rounded-[1.5rem] text-sm leading-relaxed font-bold shadow-sm", 
                            m.role === 'user' 
                              ? "bg-primary text-white rounded-tr-none" 
                              : "bg-white text-secondary border border-muted rounded-tl-none"
                          )}>
                            {m.content}
                          </div>
                        </div>
                      ))}
                      {loading && (
                        <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white border border-muted flex items-center justify-center shrink-0 shadow-sm">
                            <Loader2 className="w-5 h-5 text-primary animate-spin" />
                          </div>
                          <div className="p-5 bg-white rounded-[1.5rem] rounded-tl-none border border-muted flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                          </div>
                        </div>
                      )}
                      <div ref={scrollRef} />
                    </div>
                  </ScrollArea>

                  {/* Input Area */}
                  <div className="p-6 border-t bg-white relative">
                    <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto no-scrollbar pb-1">
                      {["Beste Reisezeit?", "Visum Info", "15 Tage Paket"].map((s) => (
                        <button
                          key={s}
                          onClick={() => { setInput(s); }}
                          className="px-3 py-1.5 rounded-full bg-muted/30 border border-border hover:border-primary hover:bg-primary/5 transition-all text-[9px] font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative flex items-center gap-2">
                      <div className="relative flex-grow">
                        <Input
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder={isListening ? "Ich höre zu..." : "Wie kann ich helfen?"}
                          className={cn(
                            "h-14 pl-5 pr-12 rounded-2xl border-muted bg-[#fdfcfb] shadow-inner focus:ring-primary/20 text-xs font-bold transition-all",
                            isListening && "ring-2 ring-primary bg-primary/5"
                          )}
                        />
                        <Button 
                          type="button" 
                          size="icon" 
                          variant="ghost" 
                          onClick={toggleListening}
                          className={cn(
                            "absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl transition-all",
                            isListening ? "text-primary bg-primary/10 animate-pulse" : "text-muted-foreground hover:text-primary"
                          )}
                        >
                          {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                        </Button>
                      </div>
                      <Button 
                        type="submit" 
                        size="icon" 
                        className="w-14 h-14 rounded-2xl shadow-xl shadow-primary/20 shrink-0" 
                        disabled={!input.trim() || loading}
                      >
                        <Send className="w-5 h-5" />
                      </Button>
                    </form>
                    <p className="mt-4 text-[8px] text-center text-muted-foreground font-black uppercase tracking-[0.2em] opacity-50">
                      Bespoke Planning powered by Serengeti Dreams AI
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Trigger Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setIsOpen(true); setShowTeaser(false); }}
          className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-[2rem] bg-secondary text-white shadow-2xl flex items-center justify-center relative overflow-hidden transition-all duration-500 pointer-events-auto",
            isOpen && "scale-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent opacity-50" />
          <MessageSquare className="w-8 h-8 md:w-10 md:h-10 relative z-10" />
          
          {/* Active Notification Badge */}
          <div className="absolute top-4 right-4 md:top-5 md:right-5 z-20">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-secondary"></span>
            </span>
          </div>

          {/* Pulse Ring */}
          <div className="absolute inset-0 border-4 border-primary/20 rounded-[2rem] animate-pulse" />
        </motion.button>
      </div>
    </>
  );
}
