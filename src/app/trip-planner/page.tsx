
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
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { submitInquiry } from '@/lib/actions/bookings';
import { useToast } from '@/hooks/use-toast';

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

  const destinations = watch('destinations');

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
    const current = destinations;
    const next = current.includes(id) 
      ? current.filter(d => d !== id) 
      : [...current, id];
    setValue('destinations', next, { shouldValidate: true });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 pb-20 luxury-gradient">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12 bg-white rounded-3xl shadow-2xl max-w-xl mx-4"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4">Journey Requested!</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Thank you for choosing Serengeti Dreams. Our Egypt-based Tanzania experts are reviewing your preferences and will craft a bespoke proposal for you soon.
          </p>
          <Button asChild className="rounded-full px-10 bg-secondary text-white">
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
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Design Your Perfect Safari</h1>
          <p className="text-muted-foreground text-lg">Tell us your dreams, and we'll handle the logistics from Cairo to Kilimanjaro.</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors",
                  step >= i ? "bg-secondary text-white shadow-lg" : "bg-muted text-muted-foreground"
                )}>
                  {i}
                </div>
                {i < 3 && <div className={cn("w-12 h-1 bg-muted mx-2", step > i && "bg-secondary")} />}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="rounded-3xl border-none shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Compass className="w-6 h-6 text-secondary" />
                      <h3 className="text-2xl font-bold">Where would you like to go?</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Serengeti Plains', 'Zanzibar Archipelago', 'Ngorongoro Crater', 'Tarangire National Park'].map(dest => (
                        <div 
                          key={dest} 
                          onClick={() => toggleDestination(dest)}
                          className={cn(
                            "p-6 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between group",
                            destinations.includes(dest) ? "border-secondary bg-secondary/5 shadow-md" : "border-muted hover:border-secondary/50"
                          )}
                        >
                          <span className="font-medium">{dest}</span>
                          <div className={cn(
                            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                            destinations.includes(dest) ? "bg-secondary border-secondary text-white" : "border-muted"
                          )}>
                            {destinations.includes(dest) && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.destinations && <p className="text-destructive text-sm mt-2">{errors.destinations.message}</p>}
                    <div className="flex justify-end pt-8">
                      <Button type="button" onClick={nextStep} disabled={destinations.length === 0} className="rounded-full px-8 bg-secondary">
                        Next Step <ArrowRight className="w-4 h-4 ml-2" />
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
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-bold mb-6">Details & Logistics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label className="flex items-center gap-2"><Users className="w-4 h-4" /> Number of Travelers</Label>
                        <select 
                          {...register('travelers')} 
                          className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-secondary transition-all"
                        >
                          <option value="1">Solo Traveler</option>
                          <option value="2">Couple / 2 People</option>
                          <option value="4">Small Group (3-5)</option>
                          <option value="6">Large Group (6+)</option>
                        </select>
                      </div>

                      <div className="space-y-3">
                        <Label className="flex items-center gap-2"><Wallet className="w-4 h-4" /> Comfort Tier / Budget</Label>
                        <select 
                          {...register('budget')} 
                          className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-secondary transition-all"
                        >
                          <option value="budget">Value / Comfort</option>
                          <option value="mid-range">Mid-Range Premium</option>
                          <option value="luxury">Ultra Luxury / Bespoke</option>
                        </select>
                      </div>

                      <div className="space-y-3 md:col-span-2">
                        <Label className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Estimated Dates or Month</Label>
                        <Input 
                          placeholder="e.g., September 2024 or Dec 15th - Jan 5th" 
                          {...register('dates')}
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between pt-8">
                      <Button type="button" variant="ghost" onClick={prevStep} className="rounded-full px-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                      <Button type="button" onClick={nextStep} className="rounded-full px-8 bg-secondary">
                        Next Step <ArrowRight className="w-4 h-4 ml-2" />
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
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label>Your Full Name</Label>
                        <Input placeholder="John Doe" {...register('name')} className="h-12 rounded-xl" />
                        {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-3">
                        <Label>Email Address</Label>
                        <Input placeholder="john@example.com" {...register('email')} className="h-12 rounded-xl" />
                        {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-3 md:col-span-2">
                        <Label>Any special requests or preferences?</Label>
                        <Textarea 
                          placeholder="Dietary requirements, physical limitations, specific animals you want to see..." 
                          className="min-h-[120px] rounded-2xl p-4"
                          {...register('message')}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between pt-8">
                      <Button type="button" variant="ghost" onClick={prevStep} className="rounded-full px-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                      </Button>
                      <Button type="submit" className="rounded-full px-12 bg-secondary h-14 text-lg">
                        Submit Inquiry <Send className="w-4 h-4 ml-2" />
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
