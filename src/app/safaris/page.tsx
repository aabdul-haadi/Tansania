"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Camera,
  Bird,
  Leaf,
  Coffee,
  Heart,
  Sparkles,
  LayoutGrid,
  Video,
  Sun,
  Timer,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/packages/PackageCard';
import { ContactSection } from '@/components/sections/ContactSection';

export default function SafarisPage() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const safariPackages = packages?.filter(p => 
    ['SAFARI & SANSIBAR', 'FLITTERWOHEN', 'FAMILIENSAFARI', 'KILIMANDSCHARO SAFARI'].includes(p.category)
  ) || [];

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[65vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
          alt="Tansania Safari Hero" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="serengeti safari"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fdfcfb]" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-white border-none px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-2xl">
              Erlebe das ultimative Safari-Abenteuer im Herzen Afrikas
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Tansania Safari <br />
              <span className="text-primary">Buchen</span>
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-xl text-white/90 font-light leading-relaxed px-4">
              Erlebe das unvergessliche Abenteuer einer Safari in Tansania, wo wilde Natur, beeindruckende Tierbeobachtungen und atemberaubende Landschaften auf dich warten. Tansania Safari buchen ist der erste Schritt, um das Abenteuer deines Lebens zu erleben!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Catalog */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Expeditions-Katalog</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-secondary">Wählen Sie Ihre <br /><span className="text-primary">Afrikanische Odyssee</span></h2>
          </div>
          <p className="text-[10px] text-muted-foreground font-light max-w-[200px] border-l-2 border-primary/20 pl-4 lg:mb-2">
            Sorgfältig kuratierte Reisen für jeden Reisetyp – von Familienabenteuern bis zu romantischen Eskapaden.
          </p>
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground font-bold text-xs uppercase tracking-widest animate-pulse">Syncing Global Catalog...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {safariPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* Deutschsprachig Expertise */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden border-none">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
                <ShieldCheck className="w-4 h-4" /> Lokale Expertise
              </div>
              <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-white">
                Tansania Safari <br /><span className="text-primary">Deutschsprachig</span>
              </h2>
              <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
                <p>
                  Mit jahrelanger Erfahrung, einem eigenen Büro in Tansania und einem mehrsprachigen Team vor Ort garantiert Tansania Reiseabenteuer, dass dein Aufenthalt ein reibungsloses und unvergessliches Erlebnis wird.
                </p>
                <p>
                  Als Tansania Safari Deutschsprachig Anbieter bieten wir dir die Möglichkeit, diese atemberaubende Reise in deiner Sprache zu genießen. Spüre das Zittern des Bodens, wenn Millionen von Tieren gleichzeitig durch die Serengeti ziehen.
                </p>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5"
            >
              <Image src="https://images.unsplash.com/photo-1731355775887-e6b2484f494c?q=80&w=1200" alt="Safari Jeep" fill className="object-cover" />
              <div className="absolute bottom-10 left-10 p-8 bg-white text-secondary rounded-[2.5rem] shadow-2xl max-w-xs hidden md:block">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Signature Journey</p>
                <h4 className="text-2xl font-headline font-bold text-secondary">Das ultimative Safari Abenteuer</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Visual Journal */}
      <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden border-none">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <div className="mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Visual Journal</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-white">Erlebe die <span className="text-primary">Magie Tansanias</span></h2>
          </div>
          <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white/5 bg-muted">
            <iframe
              src="https://www.youtube.com/embed/IMucYRze3vs"
              title="Tansania Safari Video"
              className="absolute inset-0 w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Best Time Grid */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Planungshilfe</span>
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary">Beste <span className="text-primary">Reisezeit</span></h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Der Schlüssel zum perfekten Safari-Erlebnis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "Große Migration", d: "Juli bis Oktober", icon: Leaf, desc: "Millionen Gnus und Zebras ziehen durch die Serengeti. Hauptsaison für Flussüberquerungen." },
            { t: "Tierbeobachtungen", d: "Juni bis Oktober", icon: MapPin, desc: "Trockenzeit sorgt für weniger Vegetation. Tiere sammeln sich an knappen Wasserstellen." },
            { t: "Fotografie", d: "Dezember bis März", icon: Camera, desc: "Grüne Landschaften nach Regen und viele Jungtiere bieten perfekte Fotomotive." },
            { t: "Vogelbeobachtungen", d: "November bis April", icon: Bird, desc: "Zugvögel aus aller Welt und Tausende Flamingos bevölkern die Seen." },
            { t: "Ruhige Safari", d: "März bis Mai", icon: Coffee, desc: "Regenzeit bietet üppige Natur und exklusive, ruhige Erlebnisse abseits der Massen." },
            { t: "Familien-Safari", d: "Juni bis September", icon: Heart, desc: "Mildes Wetter and gute Sichtbarkeit sorgen für unvergessliche Erlebnisse." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white rounded-[3rem] shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-white" />
              </div>
              <h4 className="font-headline text-xl font-bold mb-1 text-secondary">{item.t}</h4>
              <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-4">{item.d}</p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 text-secondary">Häufig gestellte <span className="text-primary">Fragen</span></h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Tansania Safari Urlaub – Gut zu wissen</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            { q: "Was sollte ich beim Safari Urlaub beachten?", a: "Wichtige Punkte sind das Visum, notwendige Impfungen (Gelbfieber bei Risikogebieten) und Malariaprophylaxe." },
            { q: "Wie viel kostet ein Tansania Safari Urlaub?", a: "Die Kosten hängen von Dauer und Komfort ab. Unsere Pakete starten ab ca. 2.999 € pro Person." },
            { q: "Was sollte ich für die Safari einpacken?", a: "Leichte Kleidung in Naturfarben (Beige, Khaki), warme Jacke für kühle Morgenstunden, festes Schuhwerk." },
            { q: "Wie kann ich günstig buchen?", a: "Frühbucherrabatte und Reisen in der Nebensaison (März-Mai) bieten oft erhebliche Preisvorteile." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-[2rem] px-8 shadow-sm hover:shadow-md transition-all group">
              <AccordionTrigger className="font-bold text-lg py-6 hover:no-underline hover:text-primary text-left text-secondary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base font-light leading-relaxed pb-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
