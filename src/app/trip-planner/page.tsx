"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Calendar, 
  Users, 
  Wallet, 
  MapPin, 
  Compass, 
  Send, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Leaf,
  Sparkles,
  Mountain,
  Palmtree
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { submitInquiry } from '@/lib/actions/bookings';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  destinations: z.array(z.string()).min(1, "Select at least one destination"),
  travelers: z.string(),
  budget: z.string(),
  dates: z.string(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const destinationOptions = [
  { id: 'Serengeti', name: 'Serengeti Plains', icon: Leaf, desc: 'Great Migration wildlife' },
  { id: 'Zanzibar', name: 'Zanzibar Shores', icon: Palmtree, desc: 'White sands & spice islands' },
  { id: 'Ngorongoro', name: 'Ngorongoro Crater', icon: Sparkles, desc: 'Natural volcanic amphitheater' },
  { id: 'Kilimanjaro', name: 'Mount Kilimanjaro', icon: Mountain, desc: 'The Roof of Africa' },
];

const budgetOptions = [
  { id: 'budget', name: 'Value / Comfort', desc: 'Standard lodges, high-end experience' },
  { id: 'mid-range', name: 'Premium / Mid-Range', desc: 'Luxury tented camps & superior stays' },
  { id: 'luxury', name: 'Bespoke / Ultra-Luxury', desc: 'Private estates & world-class exclusive lodging' },
];

export default function TripPlanner() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

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
  const selectedBudget = watch('budget');

  const onSubmit = async (data: FormData) => {
    try {
      await submitInquiry({
        ...data,
        type: 'TRIP_PLANNER',
        preferences: {
          dates: data.dates,
          budget: data.budget,
          travelers: parseInt(data.travelers),
          destinations: data.destinations
        }
      });
      setSubmitted(true);
      toast({
        title: "Inquiry Sent",
        description: "One of our experts will contact you within 24 hours.",
      });
    } catch (error) {
       toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const toggleDestination = (id: string) => {
    const next = selectedDestinations.includes(id) 
      ? selectedDestinations.filter(d => d !== id) 
      : [...selectedDestinations, id];
    setValue('destinations', next, { shouldValidate: true });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 pb-20 luxury-gradient px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12 bg-white rounded-3xl shadow-2xl max-w-xl w-full"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4">Journey Requested!</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Thank you for choosing Serengeti Dreams. Our experts are reviewing your preferences and will craft a bespoke proposal for you soon.
          </p>
          <Button asChild className="rounded-full px-10 h-14">
            <a href="/">Back to Home</a>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 luxury-gradient">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">Configurator</span>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">Design Your <span className="text-primary">Expedition</span></h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-light">Tell us your dreams, and we'll handle the logistics from Cairo to the Savannah.</p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map(i => (
              <React.Fragment key={i}>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all text-xs border-2",
                  step === i ? "bg-primary text-white border-primary scale-110 shadow-lg" : 
                  step > i ? "bg-green-500 text-white border-green-500" : "bg-white text-muted-foreground border-border"
                )}>
                  {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
                </div>
                {i < 3 && <div className={cn("w-12 h-0.5 transition-colors", step > i ? "bg-green-500" : "bg-border")} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="rounded-[2.5rem] border-none shadow-2xl overflow-hidden bg-white/80 backdrop-blur-xl">
            <CardContent className="p-8 md:p-16">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">Where would you like to go?</h3>
                      <p className="text-muted-foreground text-sm font-light">Select one or more regions for your handcrafted itinerary.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {destinationOptions.map((dest) => (
                        <div 
                          key={dest.id} 
                          onClick={() => toggleDestination(dest.id)}
                          className={cn(
                            "p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-4 group",
                            selectedDestinations.includes(dest.id) ? "border-primary bg-primary/5 shadow-md scale-[1.02]" : "border-border hover:border-primary/30 bg-white"
                          )}
                        >
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                            selectedDestinations.includes(dest.id) ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                          )}>
                            <dest.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-bold text-sm block mb-1">{dest.name}</span>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{dest.desc}</p>
                          </div>
                          <div className="ml-auto">
                            <div className={cn(
                              "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                              selectedDestinations.includes(dest.id) ? "bg-primary border-primary text-white" : "border-border"
                            )}>
                              {selectedDestinations.includes(dest.id) && <CheckCircle2 className="w-3" />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.destinations && <p className="text-destructive text-xs text-center mt-2">{errors.destinations.message}</p>}
                    <div className="flex justify-center pt-8">
                      <Button type="button" onClick={nextStep} disabled={selectedDestinations.length === 0} className="rounded-full px-12 h-14 text-base font-bold shadow-lg transition-transform hover:scale-105">
                        Next: Logistics <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">Vibe & Logistics</h3>
                      <p className="text-muted-foreground text-sm font-light">Tailoring the comfort level and timing of your journey.</p>
                    </div>
                    
                    <div className="space-y-6">
                      <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Select Comfort Tier</Label>
                      <div className="grid grid-cols-1 gap-3">
                        {budgetOptions.map((opt) => (
                          <div 
                            key={opt.id}
                            onClick={() => setValue('budget', opt.id)}
                            className={cn(
                              "p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between",
                              selectedBudget === opt.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/20"
                            )}
                          >
                            <div>
                              <p className="font-bold text-sm">{opt.name}</p>
                              <p className="text-xs text-muted-foreground font-light">{opt.desc}</p>
                            </div>
                            <div className={cn(
                              "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                              selectedBudget === opt.id ? "bg-primary border-primary text-white" : "border-border"
                            )}>
                              {selectedBudget === opt.id && <CheckCircle2 className="w-3 h-3" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          <Users className="w-3 h-3 text-primary" /> Travelers
                        </Label>
                        <select 
                          {...register('travelers')} 
                          className="w-full h-12 rounded-xl border border-border bg-white px-4 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        >
                          <option value="1">Solo Traveler</option>
                          <option value="2">Couple / 2 People</option>
                          <option value="4">Small Group (3-5)</option>
                          <option value="6">Large Group (6+)</option>
                        </select>
                      </div>

                      <div className="space-y-3">
                        <Label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          <Calendar className="w-3 h-3 text-primary" /> Estimated Dates
                        </Label>
                        <Input 
                          placeholder="e.g., September 2025" 
                          {...register('dates')}
                          className="h-12 rounded-xl bg-white border-border"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between pt-8">
                      <Button type="button" variant="ghost" onClick={prevStep} className="rounded-full px-8 h-12 text-muted-foreground">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                      <Button type="button" onClick={nextStep} className="rounded-full px-12 h-14 text-base font-bold shadow-lg">
                        Final Step <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">Final Touches</h3>
                      <p className="text-muted-foreground text-sm font-light">Where should we send your handcrafted proposal?</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</Label>
                        <Input placeholder="John Doe" {...register('name')} className="h-14 rounded-2xl bg-white border-border text-base" />
                        {errors.name && <p className="text-destructive text-[10px] uppercase font-bold tracking-wider">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</Label>
                        <Input placeholder="john@example.com" {...register('email')} className="h-14 rounded-2xl bg-white border-border text-base" />
                        {errors.email && <p className="text-destructive text-[10px] uppercase font-bold tracking-wider">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-3 md:col-span-2">
                        <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Special Requests</Label>
                        <Textarea 
                          placeholder="Dietary requirements, specific animals you want to see, or physical limitations..." 
                          className="min-h-[120px] rounded-3xl p-6 bg-white border-border text-base"
                          {...register('message')}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between pt-8">
                      <Button type="button" variant="ghost" onClick={prevStep} className="rounded-full px-8 h-12 text-muted-foreground">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                      <Button type="submit" className="rounded-full px-16 h-16 text-lg font-bold shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                        Begin My Journey <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
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
