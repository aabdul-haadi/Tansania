
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Waves, 
  Palmtree, 
  Compass, 
  MapPin, 
  Sun, 
  Wind, 
  Star, 
  ChevronRight, 
  Anchor, 
  LayoutGrid, 
  Video, 
  Sparkles,
  Camera,
  Heart,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import { cn } from '@/lib/utils';

export default function ZanzibarPage() {
  const firestore = useFirestore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const zanzibarPackages = packages?.filter(p => 
    ['Safari & Sansibar', 'Flitterwochen', 'Familiensafari', 'Sansibar'].includes(p.category)
  ) || [];

  const displayPackages = zanzibarPackages.length > 0 ? zanzibarPackages : [
    { id: '15-day', title: '15 Tage Safari in Tansania und Sansibar', slug: '15-day-safari-zanzibar', durationDays: 15, startingPrice: 5399, category: 'Safari & Sansibar', highlights: ['Top Nationalparks', 'Massai Besuch', 'Sansibar Tauchen'], excerpt: 'Unsere umfassendste Expedition: Vom Herzen der Serengeti bis zu den Palmen Sansibars.' },
    { id: '13-day', title: '13 Tage Safari & Sansibar', slug: 'safari-sansibar-13-tage', durationDays: 13, startingPrice: 3699, category: 'Safari & Sansibar', highlights: ['Big Five', 'Ngorongoro Krater', 'Sansibar Strände'], excerpt: 'Die perfekte Balance aus intensiven Wildtierbeobachtungen und exklusiver Entspannung.' },
    { id: '11-day', title: '11 Tage Safari & Sansibar', slug: 'safari-sansibar-11-tage', durationDays: 11, startingPrice: 2999, category: 'Safari & Sansibar', highlights: ['Elefanten Tarangire', 'Serengeti Migration', 'Sansibar Touren'], excerpt: 'Kompakt und eindrucksvoll: Erleben Sie die Highlights Tansanias in 11 Tagen.' }
  ];

  const beachData = [
    { title: "Nordküste", desc: "An der Nordküste liegen die bekanntesten Sansibar Strände, wie Nungwi und Kendwa. Sie sind besonders beliebt, da hier Ebbe und Flut kaum spürbar sind – ideal zum Baden zu jeder Tageszeit.", img: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800", hint: "nungwi beach" },
    { title: "Ostküste", desc: "Die Ostküste begeistert mit den idyllischsten Stränden Sansibars. Ein beeindruckendes Korallenriff macht diesen Teil zu einem der besten Spots weltweit für Schnorcheln und Tauchen auf Sansibar.", img: "https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800", hint: "matemwe beach" },
    { title: "Südostküste", desc: "Hier finden Sie lange, feinsandige Strände und perfekte Bedingungen zum Kitesurfen und Segeln. Charmante Fischerdörfer wie Jambiani und Paje versprühen eine authentische, zeitlose Stimmung.", img: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800", hint: "jambiani village" },
    { title: "Südwestküste", desc: "Abgelegen und ideal für alle, die Ruhe und leere Strände suchen. Ein Highlight ist das Menai Bay Conservation Area, ein Paradies für Taucher und Naturliebhaber.", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800", hint: "menai bay" }
  ];

  const seasonGrid = [
    { title: "Sonne & warmes Wetter", time: "Juni bis Oktober", desc: "Die trockenste Zeit mit angenehmen Temperaturen um 25–30 °C. Perfekt für Sonnenanbeter.", icon: Sun },
    { title: "Strand & Baden", time: "Juni bis Oktober & Dez bis Feb", desc: "Ruhiges Wasser und klare Sicht. Ideal für die weißen Strände und das türkisfarbene Meer.", icon: Waves },
    { title: "Schnorcheln & Tauchen", time: "Juli bis Oktober", desc: "Die beste Sichtweite und ruhiges Meer für die Erkundung der bunten Unterwasserwelt.", icon: Camera },
    { title: "Kitesurfen", time: "Jun bis Sep & Dez bis Jan", desc: "Konstante Winde, besonders an der Ostküste wie in Paje, bieten ideale Bedingungen.", icon: Wind },
    { title: "Ruhe & wenig Touristen", time: "November & März bis Mai", desc: "Nebensaison mit kurzen Regenschauern, aber viel Privatsphäre und günstigeren Preisen.", icon: Heart },
    { title: "Kultur & Festivals", time: "Juli bis August", desc: "Erleben Sie Sansibars kulturelle Vielfalt während des International Film Festivals im Juli.", icon: Sparkles }
  ];

  const testimonials = [
    { name: "Lea M., München", quote: "Absolut traumhaft! Die Safari war spektakulär, wir haben Löwen, Elefanten und sogar Geparden gesehen. Danach die Ruhe und die Strände auf Sansibar – einfach perfekt." },
    { name: "Tobias H., Frankfurt", quote: "Vielen Dank für diese unvergessliche Reise. Unsere Guides kannten jedes Detail, auf Safari haben wir die Big Five gesehen. Sansibar war dann purer Genuss." },
    { name: "Fatma K., Berlin", quote: "Die 12-Tage-Tour war eine unglaubliche Erfahrung. Serengeti und Ngorongoro waren faszinierend. Auf Sansibar hätte ich gern noch länger gehabt." },
    { name: "Jonas W., Hamburg", quote: "Wow! Die Safari war das schönste Abenteuer meines Lebens. Sansibar danach war wie ein Traum. Weißer Strand, warmes Meer, alles stressfrei." },
    { name: "Clara S., Köln", quote: "Schöne Mischung aus Abenteuer und Entspannung. Safari gut organisiert, wir haben alle großen Tiere gesehen. Auf Sansibar habe ich das Schnorcheln geliebt." },
    { name: "Anna L., Stuttgart", quote: "Die Gewürztour und Stone Town waren kulturelle Highlights. Die Strände sind ein Paradies, und die Organisation war makellos." }
  ];

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* 01 Simple Cinema Hero */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-secondary">
        <Image 
          src="https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=1920" 
          alt="Sansibar Inselparadies" 
          fill 
          className="object-cover brightness-[0.6]"
          priority
          data-ai-hint="zanzibar coast"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="font-headline text-4xl md:text-7xl font-normal text-white leading-tight tracking-tighter">
              Sansibar: Inselparadies
            </h1>
            <p className="max-w-xl mx-auto text-sm md:text-xl text-white/90 font-light leading-relaxed">
              Die perfekte Symbiose aus unberührter Wildnis und tropischer Eleganz. Entdecken Sie maßgeschneiderte Safaris mit exklusivem Strandfinale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 Intro Narrative */}
      <section className="pt-8 md:pt-12 pb-12 container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary mb-6">
          Ihr Traumurlaub im Herzen des Indischen Ozeans
        </h2>
        <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80 mb-8">
          Ein Sansibar Urlaub ist die Erfüllung eines echten Lebenstraums. Die Inselgruppe vor der Küste Tansanias begeistert mit weißen Sandstränden, türkisblauem Wasser und einer faszinierenden Mischung aus afrikanischer, arabischer und indischer Kultur.
        </p>
      </section>

      {/* 03 Package Registry */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary">
            Sansibar & Safari Abenteuer
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg font-normal opacity-80">
            Sorgfältig zusammengestellte Reisepakete für Ihre individuelle Expedition.
          </p>
        </div>
        
        {isLoading ? (
          <div className="py-20 text-center animate-pulse font-bold text-xs uppercase tracking-widest text-muted-foreground">Synchronisiere Katalog...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
            {displayPackages.slice(0, 6).map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg as any} />
            ))}
          </div>
        )}
      </section>

      {/* 04 Video Cinematic Integration */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary leading-tight">
                Romantische Flitterwochen auf Sansibar
              </h2>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
                Ein Abenteuer, das Sie nie vergessen werden: Eine Safari in Tansania bringt Sie hautnah zu den Wundern der Natur. Lassen Sie sich von unserem Experten-Team beraten und planen Sie Ihre ganz persönliche Flucht aus dem Alltag.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-bold text-secondary">Individuelle Reiseplanung</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-bold text-secondary">Exklusive Strand-Resorts</span>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-8 border-white group">
              <iframe
                src="https://www.youtube.com/embed/wgudoNLoIXA"
                title="Zanzibar Romance"
                className="absolute inset-0 w-full h-full border-none"
                allowFullScreen
              />
              <div className="absolute top-4 right-4 z-20">
                <div className="px-4 py-2 bg-secondary/80 backdrop-blur-xl text-white rounded-lg border border-white/10 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[8px] font-bold text-white">Signature View</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Beach Navigator */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary">
              Die schönsten Strände auf Sansibar
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
              Von lebendigen Zentren im Norden bis zu unberührter Ruhe im Südwesten – finden Sie Ihre perfekte Küste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {beachData.map((beach, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-[2.5rem] border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-full md:w-1/3 relative aspect-square rounded-[1.5rem] overflow-hidden shrink-0">
                  <Image src={beach.img} alt={beach.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" data-ai-hint={beach.hint} />
                </div>
                <div className="flex-1 space-y-3">
                  <h4 className="font-headline text-xl md:text-2xl font-normal text-secondary">{beach.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-normal opacity-80">{beach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Secondary Video Context */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-8 border-white">
            <iframe
              src="https://www.youtube.com/embed/ZeJO684dC4M"
              title="Zanzibar Exploration"
              className="absolute inset-0 w-full h-full border-none"
              allowFullScreen
            />
          </div>
          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80 italic">
              "Erleben Sie die Magie Afrikas dort, wo der Ozean auf die Savanne trifft."
            </p>
          </div>
        </div>
      </section>

      {/* 07 Best Time to Visit - Modern UI/UX Design */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary">
              Die beste Reisezeit für Sansibar
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
              Wann ist die beste Zeit für Sonne, Strand und Meer? Planen Sie Ihre Reise basierend auf unseren Klimadaten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {seasonGrid.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 group flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center transition-all group-hover:bg-primary group-hover:border-primary shadow-sm">
                      <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] font-bold text-primary px-3 py-1 bg-primary/5 rounded-full border border-primary/10">Saison-Registry</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl md:text-2xl font-normal text-secondary mb-3">{item.title}</h4>
                    <p className="text-secondary font-bold text-sm mb-4 leading-tight">{item.time}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed font-normal opacity-70">{item.desc}</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-border/40 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Optimale Bedingungen</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 Experiences & Testimonials */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary mb-16">
            So haben andere Sansibar erlebt
          </h2>

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#fdfcfb] p-8 rounded-[2rem] border border-border/40 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-sm italic text-secondary leading-relaxed font-normal opacity-80">"{t.quote}"</p>
                </div>
                <p className="mt-6 font-bold text-primary text-[10px] tracking-widest">— {t.name}</p>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {testimonials.map((t, i) => (
                  <CarouselItem key={i} className="pl-4 basis-[85%]">
                    <div className="bg-[#fdfcfb] p-8 rounded-[2rem] border border-border/40 flex flex-col justify-between shadow-sm h-full text-left">
                      <div className="space-y-4">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                        </div>
                        <p className="text-xs italic text-secondary leading-relaxed">"{t.quote}"</p>
                      </div>
                      <p className="mt-6 font-bold text-primary text-[9px] tracking-widest">— {t.name}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>

      {/* 09 FAQ Registry */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary">
              Häufig gestellte Fragen
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Wie ist das Internet auf Sansibar?", a: "In den meisten Hotels und Resorts gibt es WLAN. In Stone Town ist die Abdeckung gut, in abgelegeneren Regionen kann sie schwankend sein." },
              { q: "Brauche ich für Sansibar besondere Impfungen?", a: "Standardimpfungen sowie Schutz gegen Hepatitis A werden empfohlen. Eine Gelbfieber-Impfung ist bei Einreise aus Endemiegebieten Pflicht." },
              { q: "Ist Sansibar für Flitterwochen geeignet?", a: "Absolut! Sansibar gilt als eines der romantischsten Ziele weltweit mit exklusiven Honeymoon-Resorts und privaten Dinner-Optionen am Strand." },
              { q: "Wie sicher ist ein Urlaub auf Sansibar?", a: "Sansibar ist ein sehr sicheres Reiseziel. Wie überall sollten Sie Wertsachen im Hotelsafe lassen und nachts keine einsamen Strandabschnitte aufsuchen." },
              { q: "Warum mit uns buchen?", a: "Wir bieten lokale Expertise, handverlesene Unterkünfte und eine nahtlose Organisation zwischen Safari-Festland und Inselparadies." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none bg-[#fdfcfb] rounded-2xl px-8 shadow-sm hover:shadow-md transition-all group">
                <AccordionTrigger className="font-bold text-base py-6 hover:no-underline text-left text-secondary [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4">
                    <span className="leading-snug">{faq.q}</span>
                    <Plus className="w-4 h-4 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] font-normal pb-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
