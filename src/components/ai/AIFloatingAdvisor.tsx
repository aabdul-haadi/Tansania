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
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { askTripAdvisor } from '@/ai/flows/trip-advisor-flow';
import { cn } from '@/lib/utils';

export function AIFloatingAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMobileMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([
    { role: 'model', content: 'Jambo! Ich bin Ihr persönlicher Safari-Assistent. Wie kann ich Ihre Reise heute noch magischer machen?' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

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
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={cn(
              "bg-white rounded-[2.5rem] shadow-2xl border border-border/50 flex flex-col overflow-hidden mb-4",
              isMinimized ? "h-20 w-72" : "h-[600px] w-[380px] max-w-[calc(100vw-48px)]"
            )}
          >
            {/* Header */}
            <div className="bg-secondary p-5 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest leading-none">AI Advisor</h4>
                  <p className="text-[10px] text-white/40 uppercase font-bold mt-1">Immer für Sie da</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
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
                <ScrollArea className="flex-grow p-6">
                  <div className="space-y-6">
                    {messages.map((m, idx) => (
                      <div key={idx} className={cn("flex gap-3 max-w-[85%]", m.role === 'user' ? "ml-auto flex-row-reverse" : "")}>
                        <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center shrink-0", m.role === 'user' ? "bg-primary text-white" : "bg-muted text-secondary")}>
                          {m.role === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                        </div>
                        <div className={cn("p-4 rounded-2xl text-xs md:text-sm leading-relaxed font-light shadow-sm border", 
                          m.role === 'user' ? "bg-primary text-white border-transparent" : "bg-muted/30 text-secondary border-muted")}>
                          {m.content}
                        </div>
                      </div>
                    ))}
                    {loading && (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-xl bg-muted flex items-center justify-center shrink-0">
                          <Loader2 className="w-4 h-4 text-primary animate-spin" />
                        </div>
                        <div className="p-4 bg-muted/30 rounded-2xl rounded-tl-none border border-muted flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-primary rounded-full animate-bounce" />
                          <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                          <span className="w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      </div>
                    )}
                    <div ref={scrollRef} />
                  </div>
                </ScrollArea>

                {/* Input */}
                <div className="p-5 border-t bg-white/50 backdrop-blur-md">
                  <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Fragen Sie etwas..."
                      className="h-12 pl-4 pr-24 rounded-xl border-muted bg-white shadow-inner focus:ring-primary/20 text-xs font-bold"
                    />
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1">
                      <Button type="button" size="icon" variant="ghost" className="w-9 h-9 rounded-lg text-muted-foreground hover:text-primary">
                        <Mic className="w-4 h-4" />
                      </Button>
                      <Button type="submit" size="icon" className="w-9 h-9 rounded-lg shadow-lg" disabled={!input.trim() || loading}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
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
        onClick={() => setIsOpen(true)}
        className={cn(
          "w-16 h-16 rounded-[1.5rem] bg-secondary text-white shadow-2xl flex items-center justify-center relative overflow-hidden transition-all",
          isOpen && "scale-0 opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <MessageSquare className="w-7 h-7 relative z-10" />
        <div className="absolute -top-1 -right-1">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white"></span>
          </span>
        </div>
      </motion.button>
    </div>
  );
}
