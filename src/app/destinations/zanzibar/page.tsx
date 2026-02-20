"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/packages/PackageCard';
import { ContactSection } from '@/components/sections/ContactSection';

const zanzibarGallery = [
  { src: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800", alt: "Sansibar Strand 1", hint: "zanzibar beach" },
  { src: "https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800", alt: "Sansibar Strand 2", hint: "zanzibar coast" },
  { src: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800", alt: "Sansibar Strand 3", hint: "stone town" },
  { src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800", alt: "Sansibar Strand 4", hint: "dhow cruise" },
  { src: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800", alt: "Sansibar Strand 5", hint: "safari lodge" },
  { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800", alt: "Sansibar Strand 6", hint: "serengeti safari" },
];

export default function ZanzibarPage() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const zanzibarPackages = packages?.filter(p => 
    ['SAFARI & SANSIBAR', 'FLITTERWOCHEN', 'FAMILIENSAFARI', 'SANSIBAR', 'CAMPING SAFARI', 'KILIMANDSCHARO SAFARI'].includes(p.category)
  ) || [];

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Immersive Header */}
      <section className="relative h-[65vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=1920" 
          alt="Sansibar Inselparadies" 
          fill 
          className="object-cover"
          priority
          data-ai-hint="zanzibar coast"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fdfcfb]" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-white border-none px-5 py-2 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-2xl">
              Das tropische Juwel Tansanias
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Erleben Sie das Beste <br />
              <span className="text-primary italic">aus zwei Welten</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/90 font-light leading-relaxed px-4">
              Entspannen Sie an Sansibars Traumstränden und entdecken Sie Tansanias spektakuläre Safaris – perfekt kombiniert in unseren maßgeschneiderten Reisepaketen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Tropische Expeditionen</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-secondary">Unsere Sansibar & <br /><span className="text-primary italic">Safari Abenteuer</span></h2>
          </div>
          <p className="text-[10px] text-muted-foreground font-light max-w-[200px] border-l-2 border-primary/20 pl-4 lg:mb-2">
            Entdecken Sie unsere sorgfältig zusammengestellten Reisepakete für Ihren Sansibar Urlaub und Tansania Safari.
          </p>
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground font-bold text-xs uppercase tracking-widest animate-pulse">Syncing Island Escapes...</div>
        ) : zanzibarPackages.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground border border-dashed rounded-[3rem]">
            <LayoutGrid className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <p className="font-bold text-sm">Keine Pakete gefunden.</p>
            <Link href="/admin" className="text-xs text-primary font-bold hover:underline">Initialisieren Sie die Daten im Admin-Panel.</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {zanzibarPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* Why Zanzibar Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
                <Sparkles className="w-4 h-4" /> Ein Lebenstraum
              </div>
              <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-white">
                Warum Sansibar perfekt für <br /><span className="text-primary italic">Ihren Traumurlaub ist?</span>
              </h2>
              <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
                <p>
                  Ein Sansibar Urlaub ist für viele die Erfüllung eines echten Lebenstraums. Die Inselgruppe vor der Küste Tansanias begeistert mit weißen Sandstränden, türkisblauem Wasser und einer faszinierenden Mischung aus afrikanischer, arabischer und indischer Kultur.
                </p>
                <p>
                  Ob Sie nach der aufregenden Safari in der Serengeti entspannen möchten oder ein exklusives Flitterwochen-Ziel suchen – Sansibar bietet für jeden Reisenden das passende Paradies. Von der historischen Stone Town bis zu den abgelegenen Resorts im Süden.
                </p>
              </div>
              <Button variant="outline" className="rounded-2xl px-8 h-12 text-xs border-white/20 text-white hover:bg-white/10">Mehr lesen</Button>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5"
            >
              <Image src="https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800" alt="Zanzibar Vibe" fill className="object-cover" data-ai-hint="stone town" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 p-8 bg-white text-secondary rounded-[2.5rem] shadow-2xl max-w-xs hidden md:block">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Kulturelles Erbe</p>
                <h4 className="text-2xl font-headline font-bold text-secondary">Stone Town Entdecken</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Gallery Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Visual Experience</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary">Sansibar in Bildern: <br /><span className="text-primary italic">Einfach traumhaft!</span></h2>
            <p className="text-muted-foreground text-sm font-light max-w-2xl mx-auto">Entdecken Sie die vielfältigen Facetten Sansibars in unserer Bildergalerie – von Traumstränden bis zur historischen Stone Town.</p>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {zanzibarGallery.map((img, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-xl group">
                    <Image 
                      src={img.src} 
                      alt={img.alt} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                      data-ai-hint={img.hint}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-muted/20 border-none hover:bg-primary hover:text-white transition-all rounded-full" />
              <CarouselNext className="static translate-y-0 h-12 w-12 bg-muted/20 border-none hover:bg-primary hover:text-white transition-all rounded-full" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Beach Explorer Section */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Küstenguide</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-secondary">Welche sind die <span className="text-primary italic">schönsten Strände?</span></h2>
            </div>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Sansibar bietet einige der schönsten Strände der Welt – feiner, weißer Sand, farbenfrohe Korallenriffe und das kristallklare Wasser des Indischen Ozeans. Lockt mit mehr als 25 einzigartigen Stränden, gesäumt von kleinen Fischerdörfern.
            </p>
            <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
              <h4 className="font-bold text-secondary mb-3">Tipp der Experten</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">Wählen Sie die Nordküste für gezeitenunabhängiges Baden oder den Osten für exklusives Schnorcheln & Kitesurfen.</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            {[
              { 
                title: "Nordküste", 
                text: "An der Nordküste liegen die bekanntesten Sansibar Strände, wie Nungwi und Kendwa. Sie sind besonders beliebt, da hier Ebbe und Flut kaum spürbar sind – ideal zum Baden zu jeder Tageszeit. Die Atmosphäre ist entspannt, aber lebendig.", 
                img: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800",
                hint: "nungwi beach"
              },
              { 
                title: "Ostküste", 
                text: "Die Ostküste begeistert mit den idyllischsten Stränden Sansibars. Ein beeindruckendes Korallenriff macht diesen Teil zu einem der besten Spots weltweit für Schnorcheln und Tauchen. Bei Ebbe können Sie kilometerweit über den freiliegenden Meeresboden spazieren.", 
                img: "https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800",
                hint: "matemwe beach"
              },
              { 
                title: "Südostküste", 
                text: "Hier finden Sie lange, feinsandige Strände und perfekte Bedingungen zum Kitesurfen. Charmante Fischerdörfer wie Jambiani, Paje und Bwejuu versprühen eine authentische, zeitlose Stimmung mit herzlichen Einheimischen.", 
                img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800",
                hint: "paje beach"
              },
              { 
                title: "Südwestküste", 
                text: "Die Südwestküste ist abgelegen und ideal für alle, die Ruhe und leere Strände suchen. Ein Highlight ist das Menai Bay Conservation Area, ein Paradies für Taucher. Hier liegt zudem die historische Stone Town.", 
                img: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800",
                hint: "menai bay"
              }
            ].map((beach, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[3rem] bg-white border border-border/50 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/3 aspect-square md:aspect-auto relative overflow-hidden">
                    <Image src={beach.img} alt={beach.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint={beach.hint} />
                  </div>
                  <div className="p-8 md:w-2/3 flex flex-col justify-center">
                    <h3 className="font-headline text-2xl font-bold text-secondary mb-4">{beach.title}</h3>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{beach.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Cinema Section */}
      <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <div className="mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Romantik & Abenteuer</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Spüren Sie die <span className="text-primary italic">Magie Afrikas</span></h2>
            <p className="text-white/40 text-lg font-light mt-6 max-w-2xl mx-auto">Ein Abenteuer, das Sie nie vergessen werden: Eine Safari in Tansania kombiniert mit Sansibars Ruhe. Lassen Sie sich inspirieren.</p>
          </div>
          
          <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white/5 bg-muted group">
            <iframe
              src="https://www.youtube.com/embed/ZeJO684dC4M"
              title="Sansibar Erlebnisse"
              className="absolute inset-0 w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
              <div className="w-20 h-20 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
                <Video className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time Grid */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Wann ist die Reisezeit?</span>
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary">Beste <span className="text-primary italic">Reisezeit Sansibar</span></h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Wann für Sonne, Strand und Meer?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "Sonne & Wärme", d: "Juni bis Oktober", icon: Sun, desc: "Die trockenste Zeit. Tagsüber angenehme 25–30 °C, klarer Himmel und niedrige Luftfeuchtigkeit." },
            { t: "Strand & Baden", d: "Juni bis Oktober / Dez bis Feb", icon: Waves, desc: "Ruhiges Wasser, beste Sicht beim Schnorcheln. Ideal für Wasserratten." },
            { t: "Unterwasserfans", d: "Juli bis Oktober", icon: Anchor, desc: "Optimale Bedingungen zum Schnorcheln & Tauchen. Klares, ruhiges Meer." },
            { t: "Kitesurfen", d: "Juni-Sept / Dez-Jan", icon: Wind, desc: "Konstante Winde, vor allem an der Ostküste wie Paje. Perfekt für Profis & Anfänger." },
            { t: "Ruhe & Preise", d: "März bis Mai", icon: Palmtree, desc: "Nebensaison. Kurze Schauer, dafür viel Privatsphäre an den Stränden und bessere Preise." },
            { t: "Kultur & Feste", d: "Juli bis August", icon: LayoutGrid, desc: "Erleben Sie das Film Festival oder Mwaka Kogwa. Lebendige Events in Stone Town." }
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

      {/* Testimonials */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Gäste Feedback</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold text-white">So haben andere <span className="text-primary italic">Sansibar erlebt</span></h2>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {[
                { n: "Lea M., München", q: "Absolut traumhaft! Die Safari war spektakulär, wir haben Löwen, Elefanten und sogar Geparden gesehen. Danach die Ruhe und die Strände auf Sansibar – einfach perfekt." },
                { n: "Tobias H., Frankfurt", q: "Organisation war top. Unsere Guides kannten jedes Detail. Sansibar war dann purer Genuss – Gewürztour, Sonnenuntergang am Strand, Schnorcheln." },
                { n: "Fatma K., Berlin", q: "Die 12-Tage-Tour war eine unglaubliche Erfahrung. Serengeti und Ngorongoro waren faszinierend. Die Bilder werde ich nie vergessen." },
                { n: "Jonas W., Hamburg", q: "Wow! Die Safari war das schönste Abenteuer meines Lebens. Sansibar danach war wie ein Traum. Genau das, was ich gesucht habe." }
              ].map((t, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-10 bg-white/5 rounded-[3.5rem] border border-white/10 backdrop-blur-xl h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex gap-1 text-primary">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-lg md:text-xl font-light italic leading-relaxed text-white/80 italic">"{t.q}"</p>
                    </div>
                    <div className="pt-8 border-t border-white/10 mt-8 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">{t.n[0]}</div>
                      <p className="font-bold text-sm uppercase tracking-widest text-white">{t.n}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-white/10 border-white/10 text-white rounded-full hover:bg-primary transition-colors" />
              <CarouselNext className="static translate-y-0 h-12 w-12 bg-white/10 border-white/10 text-white rounded-full hover:bg-primary transition-colors" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 text-secondary">Häufig gestellte <span className="text-primary italic">Fragen zu Sansibar</span></h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Wissenswertes für Ihren Inselurlaub</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            { q: "Wie ist das Internet und die Mobilfunkabdeckung?", a: "In den meisten Hotels und Resorts gibt es WLAN. In Stone Town ist die Abdeckung gut, in abgelegeneren Regionen kann sie schwankend sein. Wir empfehlen lokale SIM-Karten für mobiles Internet." },
            { q: "Gibt es besondere Verhaltensregeln auf Sansibar?", a: "Sansibar ist muslimisch geprägt. Bitte kleiden Sie sich außerhalb der Strände (z.B. in Stone Town) respektvoll und bedecken Sie Schultern und Knie." },
            { q: "Brauche ich für Sansibar besondere Impfungen?", a: "Es gelten die gleichen Empfehlungen wie für Tansania Festland. Gelbfieber-Impfung ist bei Einreise aus Endemiegebieten Pflicht." },
            { q: "Ist Sansibar auch für Flitterwochen geeignet?", a: "Absolut! Sansibar gilt als eines der romantischsten Ziele weltweit mit exklusiven Honeymoon-Resorts und privaten Dinner-Optionen." },
            { q: "Wie sicher ist ein Urlaub auf Sansibar?", a: "Sansibar ist ein sehr sicheres Reiseziel. Wie überall sollten Sie Wertsachen im Hotelsafe lassen und nachts keine einsamen Strandabschnitte aufsuchen." },
            { q: "Warum mit Tansania Reiseabenteuer buchen?", a: "Wir bieten lokale Expertise, handverlesene Unterkünfte und eine nahtlose Organisation zwischen Safari-Festland und Inselparadies." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-[2rem] px-8 shadow-sm hover:shadow-md transition-all group">
              <AccordionTrigger className="font-bold text-lg py-6 hover:no-underline hover:text-primary text-left text-secondary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base font-light leading-relaxed pb-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact Form Section */}
      <ContactSection />
    </div>
  );
}