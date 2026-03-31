"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Calendar, 
  Users, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Leaf,
  Sparkles,
  Mountain,
  Palmtree,
  Send,
  Compass,
  Globe,
  ShieldCheck,
  Clock,
  ChevronRight,
  RefreshCw,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useFirestore, addDocumentNonBlocking } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ContactSection } from '@/components/shared/ContactSection';

const formSchema = z.object({
  name: z.string().min(2, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  destinations: z.array(z.string()).min(1, "Wählen Sie mindestens ein Ziel"),
  travelers: z.string(),
  budget: z.string(),
  dates: z.string(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const destinationOptions = [
  { id: 'Serengeti', name: 'Serengeti Plains', icon: Leaf, desc: 'Great Migration wildlife' },
  { id: 'Zanzibar', name: 'Zanzibar Shores', icon: Palmtree, desc: 'Tropical relaxation' },
  { id: 'Ngorongoro', name: 'Ngorongoro Crater', icon: Sparkles, desc: 'Volcanic wonders' },
  { id: 'Kilimanjaro', name: 'Mount Kilimanjaro', icon: Mountain, desc: 'The roof of Africa' },
];

export default function TripPlanner() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const firestore = useFirestore();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destinations: [],
      travelers: '2',
      budget: 'Premium',
      dates: '',
    }
  });

  const selectedDestinations = watch('destinations');

  const onSubmit = (data: FormData) => {
    if (!firestore) return;
    
    addDocumentNonBlocking(collection(firestore, 'inquiries'), {
      ...data,
      type: 'TRIP_PLANNER',
      status: 'NEW',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    setSubmitted(true);
    toast({ title: "Anfrage gesendet", description: "Unsere Experten werden Sie in Kürze kontaktieren." });
  };

  const handleReset = () => {
    reset();
    setStep(1);
    setSubmitted(false);
  };

  const toggleDestination = (id: string) => {
    const next = selectedDestinations.includes(id) 
      ? selectedDestinations.filter(d => d !== id) 
      : [...selectedDestinations, id];
    setValue('destinations', next, { shouldValidate: true });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdfcfb] px-4 font-bold">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="text-center p-8 md:p-16 bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-2xl max-w-2xl w-full border border-border/50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <Compass className="w-32 h-32 text-secondary" />
          </div>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-10 border border-green-500/20 shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            
            <div className="space-y-4 mb-12">
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter text-secondary leading-none">Anfrage <br /><span className="text-primary">Erfolgreich</span></h2>
              <p className="text-muted-foreground text-xs md:text-sm font-bold uppercase tracking-[0.2em] leading-relaxed max-w-md mx-auto">
                Vielen Dank. Unsere Spezialisten in Berlin prüfen Ihren Plan und melden sich innerhalb von 24 Stunden bei Ihnen.
              </p>
            </div>

            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <Button onClick={handleReset} variant="outline" className="w-full rounded-xl h-14 gap-3 border-primary/20 text-primary hover:bg-primary/5 font-black text-[10px] uppercase tracking-widest">
                <RefreshCw className="w-4 h-4" /> Neue Planung Starten
              </Button>
              <Button asChild className="w-full rounded-xl h-14 gap-3 shadow-lg shadow-primary/20 font-black text-[10px] uppercase tracking-widest border-none">
                <Link href="/"><Home className="w-4 h-4" /> Zur Startseite</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfcfb] pt-24 pb-12 font-bold overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Cinematic Header Protocol */}
        <header className="flex flex-col items-center text-center mb-12 md:mb-16 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] border border-primary/20"
          >
            <Sparkles className="w-3.5 h-3.5" /> AI Expedition Architect
          </motion.div>
          
          <div className="space-y-2">
            <h1 className="font-headline text-3xl md:text-7xl lg:text-8xl font-black text-secondary uppercase tracking-tighter leading-none">
              DESIGN YOUR <br /><span className="text-primary">SAFARI</span>
            </h1>
            <p className="text-muted-foreground text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-60">
              Personalized Inquiry Protocol • Official Registry 2026/27
            </p>
          </div>

          {/* Technical Progress Protocol */}
          <div className="flex items-center gap-3 pt-6 md:pt-10">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center font-black text-[10px] border-2 transition-all duration-500",
                  step === i ? "bg-secondary text-white border-secondary shadow-lg scale-110" : step > i ? "bg-primary text-white border-primary" : "bg-white text-muted-foreground border-border"
                )}>
                  {step > i ? <CheckCircle2 className="w-4 h-4" /> : i}
                </div>
                {i < 3 && <div className={cn("w-12 h-0.5 mx-2 rounded-full transition-colors duration-500", step > i ? "bg-primary" : "bg-border")} />}
              </div>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Architect Frame */}
          <div className="lg:col-span-8">
            <Card className="rounded-[2.5rem] md:rounded-[4rem] border border-border/50 shadow-2xl bg-white overflow-hidden">
              <CardContent className="p-8 md:p-16">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div 
                        key="s1" 
                        initial={{ opacity: 0, x: 20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -20 }} 
                        className="space-y-10"
                      >
                        <div className="space-y-6">
                          <h3 className="font-headline text-xl md:text-3xl font-black text-secondary uppercase tracking-tight flex items-center gap-3">
                            <MapPin className="w-6 h-6 text-primary" /> Regionen Wählen
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {destinationOptions.map((dest) => (
                              <button
                                key={dest.id}
                                type="button"
                                onClick={() => toggleDestination(dest.id)}
                                className={cn(
                                  "p-6 rounded-2xl border-2 text-left transition-all duration-300 flex items-start gap-5 group",
                                  selectedDestinations.includes(dest.id) 
                                    ? "border-primary bg-primary/5 shadow-xl scale-[1.02]" 
                                    : "border-border bg-white hover:border-primary/20"
                                )}
                              >
                                <div className={cn(
                                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                                  selectedDestinations.includes(dest.id) ? "bg-primary text-white" : "bg-muted group-hover:bg-primary/10 group-hover:text-primary"
                                )}>
                                  <dest.icon className="w-6 h-6" />
                                </div>
                                <div className="min-w-0">
                                  <p className="font-black text-sm uppercase tracking-tight text-secondary leading-none mb-1">{dest.name}</p>
                                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest truncate">{dest.desc}</p>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                        <Button 
                          type="button" 
                          onClick={() => setStep(2)} 
                          disabled={selectedDestinations.length === 0} 
                          className="w-full h-16 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] shadow-xl border-none"
                        >
                          Nächster Schritt: Details <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div 
                        key="s2" 
                        initial={{ opacity: 0, x: 20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -20 }} 
                        className="space-y-10"
                      >
                        <div className="space-y-8">
                          <h3 className="font-headline text-xl md:text-3xl font-black text-secondary uppercase tracking-tight flex items-center gap-3">
                            <Clock className="w-6 h-6 text-primary" /> Expeditions-Parameter
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                              <Label className="font-black uppercase tracking-[0.2em] text-[10px] text-primary ml-1">Anzahl der Reisenden</Label>
                              <div className="relative">
                                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input {...register('travelers')} placeholder="E.G. 2 Erwachsene" className="h-14 pl-12 rounded-xl bg-muted/20 border-none font-black text-xs uppercase" />
                              </div>
                            </div>
                            <div className="space-y-3">
                              <Label className="font-black uppercase tracking-[0.2em] text-[10px] text-primary ml-1">Gewünschter Zeitraum</Label>
                              <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input {...register('dates')} placeholder="E.G. Herbst 2026" className="h-14 pl-12 rounded-xl bg-muted/20 border-none font-black text-xs uppercase" />
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <Label className="font-black uppercase tracking-[0.2em] text-[10px] text-primary ml-1">Komfort-Klasse</Label>
                            <div className="flex flex-wrap gap-2">
                              {['Value', 'Premium', 'Ultra-Luxury'].map((t) => (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => setValue('budget', t)}
                                  className={cn(
                                    "px-6 py-3 rounded-full border-2 text-[10px] font-black uppercase tracking-widest transition-all",
                                    watch('budget') === t ? "bg-secondary text-white border-secondary shadow-lg scale-105" : "bg-white border-border hover:border-primary/30"
                                  )}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button type="button" variant="ghost" onClick={() => setStep(1)} className="flex-1 font-black uppercase text-[10px] tracking-widest h-14">Zurück</Button>
                          <Button type="button" onClick={() => setStep(3)} className="flex-[2] h-16 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] shadow-xl border-none">Fast Fertig <ChevronRight className="w-4 h-4 ml-2" /></Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div 
                        key="s3" 
                        initial={{ opacity: 0, x: 20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: -20 }} 
                        className="space-y-10"
                      >
                        <div className="space-y-8">
                          <h3 className="font-headline text-xl md:text-3xl font-black text-secondary uppercase tracking-tight flex items-center gap-3">
                            <Globe className="w-6 h-6 text-primary" /> Personal Protocol
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                              <Label className="font-black uppercase tracking-[0.2em] text-[10px] text-primary ml-1">Vollständiger Name</Label>
                              <Input {...register('name')} className="h-14 rounded-xl bg-muted/20 border-none font-black text-xs uppercase px-6" />
                            </div>
                            <div className="space-y-3">
                              <Label className="font-black uppercase tracking-[0.2em] text-[10px] text-primary ml-1">E-Mail Adresse</Label>
                              <Input {...register('email')} className="h-14 rounded-xl bg-muted/20 border-none font-black text-xs uppercase px-6" />
                            </div>
                          </div>
                          <div className="space-y-3">
                            <Label className="font-black uppercase tracking-[0.2em] text-[10px] text-primary ml-1">Besondere Wünsche (Optional)</Label>
                            <Textarea {...register('message')} placeholder="Haben Sie spezielle Wildlife-Interessen oder Anlässe?" className="rounded-2xl bg-muted/20 border-none font-black text-xs uppercase min-h-[120px] p-6 leading-relaxed" />
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button type="button" variant="ghost" onClick={() => setStep(2)} className="flex-1 font-black uppercase text-[10px] tracking-widest h-14">Zurück</Button>
                          <Button type="submit" className="flex-[3] h-16 rounded-2xl font-black uppercase text-[12px] tracking-[0.3em] shadow-2xl border-none">
                            Expedition Anfragen <Send className="w-4 h-4 ml-3" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Expert Sidebar Protocol */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="p-10 bg-secondary text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-8">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center rotate-3 shadow-xl">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-black uppercase leading-none mb-4">Sicher <br /><span className="text-primary">Planen</span></h4>
                  <p className="text-[10px] text-white/40 font-black uppercase tracking-widest leading-relaxed">
                    Ihre Anfrage ist unverbindlich. Jede Reise ist durch den Deutschen Reisesicherungsfonds (DRSF) vollumfänglich abgesichert.
                  </p>
                </div>
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Berlin Office Active</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">Local Guides Ready</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-[2.5rem] border border-border/50 shadow-sm space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Experten-Insight</h4>
              <p className="text-xs font-bold leading-relaxed text-secondary uppercase tracking-tight">
                „Wir empfehlen eine Kombination aus Serengeti und Sansibar für das ultimative Gleichgewicht zwischen Abenteuer und Entspannung.“
              </p>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                  <Image src="https://picsum.photos/seed/samson/100/100" alt="Expert" width={40} height={40} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase leading-none">Samson Kyashama</p>
                  <p className="text-[7px] font-bold text-muted-foreground uppercase mt-1">Founder & Lead Expert</p>
                </div>
              </div>
            </div>
          </aside>

        </div>

        {/* Support Section Registry */}
        <ContactSection />
      </div>
    </div>
  );
}
