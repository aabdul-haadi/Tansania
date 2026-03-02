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
  Send
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
  { id: 'Zanzibar', name: 'Zanzibar Shores', icon: Palmtree, desc: 'White sands' },
  { id: 'Ngorongoro', name: 'Ngorongoro Krater', icon: Sparkles, desc: 'Vulkanisches Wunder' },
  { id: 'Kilimanjaro', name: 'Mount Kilimanjaro', icon: Mountain, desc: 'Dach Afrikas' },
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
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destinations: [],
      travelers: '2',
      budget: 'mid-range',
      dates: '',
    }
  });

  const selectedDestinations = watch('destinations');

  const onSubmit = (data: FormData) => {
    if (!firestore) return;
    
    // Using required non-blocking mutation pattern
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

  const toggleDestination = (id: string) => {
    const next = selectedDestinations.includes(id) 
      ? selectedDestinations.filter(d => d !== id) 
      : [...selectedDestinations, id];
    setValue('destinations', next, { shouldValidate: true });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 pb-20 luxury-gradient px-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-12 bg-white rounded-3xl shadow-2xl max-w-xl w-full">
          <CheckCircle2 className="w-20 h-20 text-green-600 mx-auto mb-8" />
          <h2 className="font-headline text-3xl font-bold mb-4 uppercase">Anfrage Erhalten!</h2>
          <p className="text-muted-foreground text-lg mb-8 font-bold">Vielen Dank. Unsere Spezialisten in Berlin und Kairo prüfen Ihren Plan.</p>
          <Button asChild className="rounded-full px-10 h-14 font-bold uppercase tracking-widest"><Link href="/">Zurück zur Startseite</Link></Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 luxury-gradient bg-[#fdfcfb]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4 uppercase">Designen Sie Ihre <span className="text-primary">Expedition</span></h1>
        </div>

        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border-2 transition-colors", step === i ? "bg-primary text-white border-primary" : "bg-white text-muted-foreground")}>{i}</div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="rounded-[2.5rem] border-none shadow-2xl overflow-hidden bg-white/80 backdrop-blur-xl">
            <CardContent className="p-8 md:p-16">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {destinationOptions.map((dest) => (
                        <div key={dest.id} onClick={() => toggleDestination(dest.id)} className={cn("p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-4", selectedDestinations.includes(dest.id) ? "border-primary bg-primary/5" : "border-border bg-white hover:border-primary/20")}>
                          <dest.icon className="w-5 h-5 text-primary" />
                          <span className="font-bold text-sm uppercase tracking-tight">{dest.name}</span>
                        </div>
                      ))}
                    </div>
                    <Button type="button" onClick={() => setStep(2)} disabled={selectedDestinations.length === 0} className="w-full h-14 rounded-full font-bold uppercase tracking-widest">Nächster Schritt</Button>
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label className="font-bold uppercase tracking-widest text-[10px]">Anzahl der Reisenden</Label>
                        <Input {...register('travelers')} className="h-12 rounded-xl bg-muted/20 border-none font-bold" />
                      </div>
                      <div className="space-y-3">
                        <Label className="font-bold uppercase tracking-widest text-[10px]">Gewünschter Zeitraum</Label>
                        <Input {...register('dates')} className="h-12 rounded-xl bg-muted/20 border-none font-bold" />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button type="button" variant="ghost" onClick={() => setStep(1)} className="flex-1 font-bold uppercase text-[10px]">Zurück</Button>
                      <Button type="button" onClick={() => setStep(3)} className="flex-1 h-14 rounded-full font-bold uppercase tracking-widest">Abschluss</Button>
                    </div>
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label className="font-bold uppercase tracking-widest text-[10px]">Vollständiger Name</Label>
                        <Input {...register('name')} className="h-14 rounded-2xl bg-muted/20 border-none font-bold" />
                      </div>
                      <div className="space-y-3">
                        <Label className="font-bold uppercase tracking-widest text-[10px]">E-Mail Adresse</Label>
                        <Input {...register('email')} className="h-14 rounded-2xl bg-muted/20 border-none font-bold" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label className="font-bold uppercase tracking-widest text-[10px]">Nachricht (Optional)</Label>
                      <Textarea {...register('message')} className="rounded-2xl bg-muted/20 border-none font-bold min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full h-16 rounded-full font-bold text-lg uppercase tracking-widest">Anfrage senden <Send className="w-4 h-4 ml-2" /></Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}