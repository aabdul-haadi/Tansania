
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
import { collection, query, where, orderBy } from 'firebase/firestore';
import { PackageCard } from '@/components/packages/PackageCard';

const testimonials = [
  { name: "Johanna K.", quote: "Perfekte Safari! Die Lodges waren luxuriös und das Personal sehr freundlich. Besonders beeindruckend war die Begegnung mit den Löwen in der Serengeti. Wir fühlten uns rundum gut betreut." },
  { name: "Martin L.", quote: "Tansania Reiseabenteuer hat unsere Erwartungen übertroffen. Unsere maßgeschneiderte Safari war perfekt organisiert, mit fantastischen Guides und luxuriösen Lodges. Die Tiere waren beeindruckend." },
  { name: "Sarah und Max B.", quote: "Tansania war magisch! Die Tierwelt und Landschaften sind einzigartig. Die Lodges waren komfortabel und das Essen gut. Einzig längere Fahrtzeiten waren anstrengend, aber das Erlebnis entschädigte dafür." },
  { name: "Michael T.", quote: "Unvergessliche Safari! Die Tiere und Landschaften waren überwältigend. Besonders die Gnu-Migration war ein Highlight. Sehr empfehlenswert für alle, die eine echte Tansania Safari urlaub erleben wollen." },
  { name: "Clara P.", quote: "Tolle Safari! Die Unterkünfte waren luxuriös, aber ein wenig mehr Vielfalt bei den Mahlzeiten hätte es noch besser gemacht. Insgesamt aber eine großartige Erfahrung." },
  { name: "David und Elena R.", quote: "Wunderbare Familien-Safari! Die Guides waren informativ, und die Lodges waren fantastisch. Unsere Kinder liebten es. Wir kommen wieder!" }
];

const zanzibarGallery = [
  { src: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800", alt: "Sansibar Strand 1", hint: "zanzibar beach" },
  { src: "https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800", alt: "Sansibar Strand 2", hint: "zanzibar coast" },
  { src: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800", alt: "Sansibar Strand 3", hint: "stone town" },
  { src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800", alt: "Sansibar Strand 4", hint: "dhow cruise" },
  { src: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800", alt: "Sansibar Strand 5", hint: "safari lodge" },
  { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800", alt: "Sansibar Strand 6", hint: "serengeti safari" },
];

export default function SafarisPage() {
  const firestore = useFirestore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const safariPackages = packages?.filter(p => 
    ['SAFARI & SANSIBAR', 'FLITTERWOCHEN', 'FAMILIENSAFARI', 'KILIMANDSCHARO SAFARI'].includes(p.category)
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
              <span className="text-primary italic">Buchen</span>
            </h1>
            <p className="max-w-3xl mx-auto text-sm md:text-xl text-white/90 font-light leading-relaxed px-4">
              Erlebe das unvergessliche Abenteuer einer Safari in Tansania, wo wilde Natur, beeindruckende Tierbeobachtungen und atemberaubende Landschaften auf dich warten. Ob auf einer Solo-Safari, einer Familienreise oder einer romantischen Flitterwochen-Safari, Tansania bietet dir die perfekte Gelegenheit, seine Schönheit zu entdecken. Tansania Safari buchen ist der erste Schritt, um das Abenteuer deines Lebens zu erleben!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Listing Grid */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Expeditions-Katalog</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Wählen Sie Ihre <br /><span className="text-primary italic">Afrikanische Odyssee</span></h2>
          </div>
          <p className="text-[10px] text-muted-foreground font-light max-w-[200px] border-l-2 border-primary/20 pl-4">
            Sorgfältig kuratierte Reisen für jeden Reisetyp – von Familienabenteuern bis zu romantischen Eskapaden.
          </p>
        </div>

        {isLoading ? (
          <div className="py-20 text-center text-muted-foreground font-bold text-xs uppercase tracking-widest animate-pulse">Syncing Global Catalog...</div>
        ) : safariPackages.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground border border-dashed rounded-[3rem]">
            <LayoutGrid className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <p className="font-bold text-sm">Keine Pakete gefunden.</p>
            <Link href="/admin" className="text-xs text-primary font-bold hover:underline">Bitte initialisieren Sie die CMS-Daten im Admin-Panel.</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {safariPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* Deutschsprachig Expertise Section */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
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
              <div className="space-y-6 text-white/70 font-light leading-relaxed text-lg">
                <p>
                  Mit jahrelanger Erfahrung, einem eigenen Büro in Tansania und einem mehrsprachigen Team vor Ort garantiert Tansania Reiseabenteuer, dass dein Aufenthalt in Tansania ein reibungsloses und unvergessliches Erlebnis wird.
                </p>
                <p>
                  Als Tansania Safari Deutschsprachig Anbieter bieten wir dir die Möglichkeit, diese atemberaubende Reise in deiner Sprache zu genießen. Spüre das Zittern des Bodens, wenn Millionen von Tieren gleichzeitig durch die Serengeti ziehen.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-sm text-white">Große Migration</p>
                    <p className="text-xs text-white/40 font-light mt-1">Erlebe das größte Wanderereignis der Erde hautnah.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur">
                  <Star className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-sm text-white">Bestbewertet</p>
                    <p className="text-xs text-white/40 font-light mt-1">Über 10 Jahre Erfahrung in der Reiseplanung.</p>
                  </div>
                </div>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5"
            >
              <Image src="https://images.unsplash.com/photo-1731355775887-e6b2484f494c?q=80&w=1200" alt="Safari Jeep" fill className="object-cover" data-ai-hint="safari jeep" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 p-8 bg-white text-secondary rounded-[2.5rem] shadow-2xl max-w-xs hidden md:block">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Signature Journey</p>
                <h4 className="text-2xl font-headline font-bold">Das ultimative Safari Abenteuer</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ultimate Adventure Narration */}
      <section className="py-24 container mx-auto px-4 max-w-5xl text-center space-y-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary">Das Herz <span className="text-primary italic">Afrikas</span></h2>
          <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed italic">
            "Stell dir vor, wie ein Löwenrudel in der goldenen Sonne döst, bunte Flamingos den See bei Sonnenaufgang schmücken, endlose Herden von Gnus über weite Ebenen ziehen und der majestätische Kilimandscharo den Horizont dominiert."
          </p>
          <div className="w-20 h-1 bg-primary/20 mx-auto rounded-full" />
        </div>
        <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-4xl mx-auto">
          Mit fast 35% des Landes als Nationalparks und Wildschutzgebieten, darunter der weltberühmte Serengeti-Nationalpark und der Ngorongoro-Krater, gehört Tansania zu den besten Safari-Destinationen. Die Große Migration der Gnus – das größte Wanderereignis der Erde – und der majestätische Kilimandscharo machen Tansania zum ultimativen Ziel für Safaris.
        </p>
      </section>

      {/* Luxury Lodges Showcase */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1000" alt="Luxus Lodge" fill className="object-cover" data-ai-hint="safari lodge" />
              <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Accommodation</p>
                <h4 className="text-xl font-bold text-secondary">Luxus Lodges und Camps</h4>
              </div>
            </motion.div>
            <div className="space-y-8">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] block">Exklusive Refugien</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight">Luxuriöse <span className="text-primary italic">Safari Unterkünfte</span></h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                Mit Tansania Reiseabenteuer übernachtest du in luxuriösen Lodges mit Vollpension, die höchsten Komfort und exklusive Ausstattung bieten. Jede Unterkunft wird regelmäßig von unserem erfahrenen Team überprüft.
              </p>
              <p className="text-muted-foreground text-base font-light leading-relaxed">
                Unsere Premium-Lodges liegen in den bekanntesten Nationalparks Tansanias und bieten atemberaubende Ausblicke auf die Wildnis. Genieße das Brüllen der Löwen und das Trompeten der Elefanten – alles aus dem Luxus deiner 5-Sterne-Lodge.
              </p>
              <Button size="lg" className="rounded-2xl px-10 h-14 font-bold">Resort Portfolio ansehen</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bush & Beach Combination + Modern Gallery Slider */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Abenteuer & Erholung</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary">Safari & <span className="text-primary italic">Baden Sansibar</span></h2>
            <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Erlebe das Beste aus beiden Welten. Beginne dein Abenteuer in der Wildnis und beende es an den weißen Puderstränden des Indischen Ozeans.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
                <h3 className="font-headline text-2xl font-bold mb-4">Das Beste aus beiden Welten</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Tauche ein in die Schönheit der Insel, schwimme im warmen Ozean oder erkunde die historische Altstadt von Stone Town. Die Kombination aus Tansania Safari und Baden Sansibar bietet dir die perfekte Mischung für einen unvergesslichen Urlaub.
                </p>
              </div>
              <ul className="space-y-4">
                {['Serengeti Wildlife', 'Ngorongoro Krater Tour', 'Puderweiße Strände', 'Stone Town Kultur'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-7">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent className="-ml-4">
                  {zanzibarGallery.map((img, idx) => (
                    <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/2">
                      <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl group">
                        <Image 
                          src={img.src} 
                          alt={img.alt} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                          data-ai-hint={img.hint}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-4 mt-8">
                  <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-muted/50 border-none hover:bg-primary hover:text-white transition-all rounded-full" />
                  <CarouselNext className="static translate-y-0 h-12 w-12 bg-muted/50 border-none hover:bg-primary hover:text-white transition-all rounded-full" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Video Cinema Section */}
      <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10 text-center">
          <div className="mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Visual Journal</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight">Erlebe die <span className="text-primary italic">Magie Tansanias</span></h2>
          </div>
          
          <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5 bg-muted">
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
          <h2 className="font-headline text-3xl md:text-6xl font-bold text-secondary">Beste <span className="text-primary italic">Reisezeit</span></h2>
          <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Der Schlüssel zum perfekten Safari-Erlebnis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "Große Migration", d: "Juli bis Oktober", icon: Leaf, desc: "Millionen Gnus und Zebras ziehen durch die Serengeti. Hauptsaison für Flussüberquerungen." },
            { t: "Tierbeobachtungen", d: "Juni bis Oktober", icon: MapPin, desc: "Trockenzeit sorgt für weniger Vegetation. Tiere sammeln sich an knappen Wasserstellen." },
            { t: "Fotografie", d: "Dezember bis März", icon: Camera, desc: "Grüne Landschaften nach Regen und viele Jungtiere bieten perfekte Fotomotive." },
            { t: "Vogelbeobachtungen", d: "November bis April", icon: Bird, desc: "Zugvögel aus aller Welt und Tausende Flamingos bevölkern die Seen." },
            { t: "Ruhige Safari", d: "März bis Mai", icon: Coffee, desc: "Regenzeit bietet üppige Natur und exklusive, ruhige Erlebnisse abseits der Massen." },
            { t: "Familien-Safari", d: "Juni bis September", icon: Heart, desc: "Mildes Wetter und gute Sichtbarkeit sorgen für unvergessliche Erlebnisse mit Kindern." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-xl transition-all group">
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

      {/* Customer Experiences Carousel */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Gäste Feedback</span>
            <h2 className="font-headline text-3xl md:text-6xl font-bold leading-tight text-white">Was unsere <span className="text-primary italic">Reisenden sagen</span></h2>
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

      {/* FAQ Accordion */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4 text-secondary">Häufig gestellte <span className="text-primary italic">Fragen</span></h2>
          <p className="text-muted-foreground uppercase tracking-widest font-bold text-[10px]">Tansania Safari Urlaub – Gut zu wissen</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[
            { q: "Was sollte ich bei einem Tansania Safari Urlaub beachten?", a: "Wichtige Punkte sind das Visum (E-Visa), notwendige Impfungen (Gelbfieber bei Einreise aus Risikogebieten), Malariaprophylaxe und eine Auslandskrankenversicherung." },
            { q: "Wie viel kostet ein Tansania Safari Urlaub?", a: "Die Kosten hängen von der Dauer und dem gewünschten Komfort ab. Unsere Pakete inkl. Inlandsflügen und Top-Lodges starten ab ca. 2.999 € pro Person." },
            { q: "Was kostet eine typische Tansania Safari?", a: "Im Durchschnitt sollten Sie für eine 10-tägige Privatsafari mit Mittelklasse-Unterkünften ca. 3.500 € bis 4.500 € pro Person (ohne Langstreckenflug) einplanen." },
            { q: "Was sollte ich für meinen Tansania Safari Urlaub einpacken?", a: "Leichte Kleidung in Naturfarben (Beige, Khaki), eine warme Jacke für kühle Morgenstunden, festes Schuhwerk, Sonnenschutz, Insektenschutz und ein Fernglas." },
            { q: "Welche Kleidung benötige ich für eine Tansania Safari?", a: "Atmungsaktive Kleidung ist ideal. Vermeiden Sie knallige Farben sowie Dunkelblau und Schwarz (zieht Tsetse-Fliegen an). 'Zwiebelprinzip' ist morgens/abends am besten." },
            { q: "Wie kann ich eine Tansania Safari günstig buchen?", a: "Frühbucherrabatte und Reisen in der Nebensaison (März-Mai) bieten oft erhebliche Preisvorteile bei gleicher Servicequalität." },
            { q: "Gibt es günstige Optionen für einen Tansania Safari Urlaub?", a: "Ja, wir bieten auch Komfort-Camping-Safaris an, die das echte Wildnisgefühl vermitteln und deutlich preisgünstiger als Luxus-Lodges sind." },
            { q: "Welche Ausrüstung benötige ich für eine Tansania Safari?", a: "Neben einer guten Kamera mit Zoomobjektiv sind ein Fernglas, ein kleiner Tagesrucksack, eine Taschenlampe und eine Powerbank sehr nützlich." }
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
