
"use client";

import React from 'react';
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
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/packages/PackageCard';

const testimonials = [
  { name: "Johanna K.", quote: "Perfekte Safari! Die Lodges waren luxuriös und das Personal sehr freundlich. Besonders beeindruckend war die Begegnung mit den Löwen in der Serengeti." },
  { name: "Martin L.", quote: "Tansania Reiseabenteuer hat unsere Erwartungen übertroffen. Unsere maßgeschneiderte Safari war perfekt organisiert." },
  { name: "Sarah und Max B.", quote: "Tansania war magisch! Die Tierwelt und Landschaften sind einzigartig. Die Lodges waren komfortabel und das Essen gut." },
  { name: "Michael T.", quote: "Unvergessliche Safari! Die Tiere und Landschaften waren überwältigend. Besonders die Gnu-Migration war ein Highlight." },
  { name: "Clara P.", quote: "Tolle Safari! Die Unterkünfte waren luxuriös, insgesamt aber eine großartige Erfahrung." },
  { name: "David und Elena R.", quote: "Wunderbare Familien-Safari! Die Guides waren informativ, und die Lodges waren fantastisch. Wir kommen wieder!" }
];

export default function SafarisPage() {
  const firestore = useFirestore();
  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  return (
    <div className="bg-[#fdfcfb] min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
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
            <Badge className="bg-primary text-white border-none px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-xl">
              Dein Abenteuer im Herzen Afrikas
            </Badge>
            <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Erlebe das ultimative <br />
              <span className="text-primary italic">Safari-Abenteuer</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-xl text-white/80 font-light leading-relaxed px-4">
              Tansania Safari Buchen – wo wilde Natur, beeindruckende Tierbeobachtungen und atemberaubende Landschaften auf dich warten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Listing */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Expeditions-Katalog</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Wählen Sie Ihre <br /><span className="text-primary italic">Afrikanische Odyssee</span></h2>
          </div>
          <p className="text-[10px] text-muted-foreground font-light max-w-[200px] border-l-2 border-primary/20 pl-4">
            Ob auf einer Solo-Safari, Familienreise oder romantischen Flitterwochen – Tansania bietet die perfekte Gelegenheit.
          </p>
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground font-bold text-xs uppercase tracking-widest animate-pulse">Synchronizing Expeditions...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {packages?.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.4em]">
                <ShieldCheck className="w-4 h-4" /> Lokale Expertise
              </div>
              <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-white">
                Tansania Safari <br /><span className="text-primary italic">Deutschsprachig</span>
              </h2>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Mit jahrelanger Erfahrung, einem eigenen Büro in Tansania und einem mehrsprachigen Team vor Ort garantiert Tansania Reiseabenteuer, dass dein Aufenthalt reibungslos wird.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-sm text-white">Große Migration</p>
                    <p className="text-xs text-white/40 font-light mt-1">Spüre das Zittern des Bodens, wenn Millionen Tiere ziehen.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur">
                  <Star className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-sm text-white">Bestbewertet</p>
                    <p className="text-xs text-white/40 font-light mt-1">Über 10 Jahre Erfahrung in maßgeschneiderten Safaris.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1731355775887-e6b2484f494c?q=80&w=1200" alt="Safari Jeep" fill className="object-cover" data-ai-hint="safari jeep" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 p-8 bg-white text-secondary rounded-[2.5rem] shadow-2xl max-w-xs hidden md:block">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Signature Experience</p>
                <h4 className="text-2xl font-headline font-bold">Das ultimative Abenteuer</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Time Grid */}
      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20 space-y-4">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Planungshilfe</span>
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary">Beste <span className="text-primary italic">Reisezeit</span></h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Wähle den perfekten Zeitraum für dein Erlebnis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Große Migration", time: "Juli - Oktober", icon: Leaf, desc: "Millionen Gnus ziehen durch die Serengeti – dramatische Flussüberquerungen." },
            { title: "Tierbeobachtungen", time: "Juni - Oktober", icon: MapPin, desc: "Trockenzeit sorgt für weniger Vegetation und Tiere sammeln sich an Wasserlöchern." },
            { title: "Fotografie", time: "Dezember - März", icon: Camera, desc: "Grüne Landschaften nach kurzem Regen und unzählige neugeborene Tiere." },
            { title: "Vogelbeobachtungen", time: "November - April", icon: Bird, desc: "Zugvögel aus Europa und Asien, darunter tausende Flamingos." },
            { title: "Ruhige Safari", time: "März - Mai", icon: Coffee, desc: "Regenzeit bietet üppige Natur und ein exklusives, ruhiges Erlebnis ohne Massen." },
            { title: "Familien-Safari", time: "Juni - September", icon: Heart, desc: "Mildes Wetter und beste Sichtbarkeit für unvergessliche Erlebnisse mit Kindern." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-white" />
              </div>
              <h4 className="font-headline text-xl font-bold mb-1 text-secondary">{item.title}</h4>
              <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-4">{item.time}</p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Experience Slider */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Erfahrungsberichte</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-white">Was unsere <span className="text-primary italic">Gäste sagen</span></h2>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-xl h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex gap-1 text-primary">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-lg md:text-xl font-light italic leading-relaxed text-white/80">
                        "{t.quote}"
                      </p>
                    </div>
                    <div className="pt-8 border-t border-white/10 mt-8 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                        {t.name[0]}
                      </div>
                      <p className="font-bold text-sm uppercase tracking-widest text-white">{t.name}</p>
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

      {/* FAQ Section */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 text-secondary">Häufig gestellte <span className="text-primary italic">Fragen</span></h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Tansania Safari Urlaub – Wissenswertes</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            { q: "Was sollte ich bei einem Tansania Safari Urlaub beachten?", a: "Einreisevisum, Gesundheitsvorsorge (Gelbfieber-Nachweis bei Einreise aus Risikogebieten) und passende Kleidung sind essenziell." },
            { q: "Wie viel kostet ein Tansania Safari Urlaub?", a: "Die Kosten hängen stark von Reisedauer und Komfort ab. Unsere Pakete starten ab ca. 2.999 € pro Person inkl. Flügen." },
            { q: "Was sollte ich für meinen Tansania Safari Urlaub einpacken?", a: "Leichte Kleidung in Naturfarben, ein warmes Fleece für kühle Morgenstunden, festes Schuhwerk und Sonnenschutz." },
            { q: "Wie kann ich eine Tansania Safari günstig buchen?", a: "Frühbucherrabatte und Reisen in der Nebensaison (März-Mai) bieten oft deutliche Preisvorteile." }
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

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-[#0a0a0a] text-white relative overflow-hidden mx-4 md:mx-10 rounded-[3rem] md:rounded-[5rem] mb-12 shadow-2xl text-center">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="max-w-3xl mx-auto relative z-10 px-4">
          <h2 className="font-headline text-4xl md:text-8xl font-bold mb-8 leading-tight text-white">
            Bereit für dein <br /><span className="text-primary italic">Abenteuer?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-2xl font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Kontaktiere unsere Experten und lass uns gemeinsam deine Traumreise gestalten.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/trip-planner">
              <Button size="lg" className="rounded-full px-12 h-16 text-lg font-bold">
                Jetzt Anfragen <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact" className="text-xs font-bold uppercase tracking-[0.3em] hover:text-primary transition-colors text-white/80">
              Beratungsgespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
