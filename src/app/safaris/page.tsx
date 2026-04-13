"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Search, 
  LayoutGrid, 
  Compass, 
  Zap, 
  ShieldCheck, 
  Waves, 
  Play, 
  ArrowRight,
  Sun,
  Camera,
  Bird,
  Leaf,
  Users,
  Star,
  Plus,
  Globe,
  CheckCircle2,
  MapPin,
  Calendar,
  Clock,
  Heart,
  Sparkles
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { PackageCard } from '@/components/shared/PackageCard';
import { ContactSection } from '@/components/shared/ContactSection';
import { AiCTA } from '@/components/sections/AiCTA';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const categories = ['All', 'Signature', 'Expedition', 'Wildlife', 'Honeymoon'];

export default function SafarisPage() {
  const firestore = useFirestore();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pkgQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'packages'), where('isPublished', '==', true));
  }, [firestore]);

  const { data: packages, isLoading } = useCollection(pkgQuery);

  const filteredPackages = (packages || []).filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = (p.title || '').toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* HERO: SUBTLE PROTECTIVE OVERLAY PROTOCOL */}
      <section className="relative h-[45vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
            alt="Savannah Collection" 
            fill 
            priority 
            className="object-cover brightness-[0.9] scale-105"
            data-ai-hint="serengeti safari"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-20" />
        </div>
        
        <div className="container relative z-30 mx-auto px-4 text-center space-y-6 pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-white uppercase leading-none tracking-normal text-3xl md:text-6xl lg:text-7xl">
              Savannen-Kollektion
            </h1>
            <p className="max-w-xl mx-auto text-white/60 font-bold text-[9px] md:text-sm uppercase tracking-widest leading-relaxed">
              Entdecken Sie handverlesene Safaris und exklusive Routen durch Tansanias unendliche Weite.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto relative group pt-4"
          >
            <Search className="absolute left-6 top-[calc(50%+8px)] -translate-y-1/2 w-4 h-4 text-white/40 transition-colors group-focus-within:text-primary" />
            <Input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Region oder Tierart suchen..." 
              className="h-12 md:h-14 pl-14 pr-6 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/20 font-bold text-[10px] md:text-xs uppercase tracking-widest backdrop-blur-md"
              suppressHydrationWarning
            />
          </motion.div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="pt-8 md:pt-16 pb-8 md:pb-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary mb-6">
            Tansania Safari Buchen – Dein Abenteuer im Herzen Afrikas
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
            Erlebe das unvergessliche Abenteuer einer Safari in Tansania, wo wilde Natur, beeindruckende Tierbeobachtungen und atemberaubende Landschaften auf dich warten. Ob auf einer Solo-Safari, einer Familienreise oder einer romantischen Flitterwochen-Safari, Tansania bietet dir die perfekte Gelegenheit, seine Schönheit zu entdecken. Tansania Safari buchen ist der erste Schritt, um das Abenteuer deines Lebens zu erleben!
          </p>
        </div>
      </section>

      {/* Filter Stripe */}
      <div className="bg-white border-b border-border/50">
        <div className="container mx-auto px-4 max-w-7xl h-14 md:h-16 flex items-center gap-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border",
                activeCategory === cat 
                  ? "bg-secondary text-white border-secondary shadow-lg" 
                  : "text-muted-foreground border-transparent hover:border-border hover:bg-muted/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      <section className="py-12 md:py-16 container mx-auto px-4 max-w-7xl">
        {isLoading ? (
          <div className="py-40 text-center space-y-4">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground animate-pulse">Syncing Catalog...</p>
          </div>
        ) : filteredPackages.length === 0 ? (
          <div className="py-40 text-center bg-white rounded-[2rem] md:rounded-[3rem] border-2 border-dashed border-border/50">
            <LayoutGrid className="w-12 h-12 mx-auto mb-4 opacity-10" />
            <h3 className="text-secondary uppercase">Keine Ergebnisse</h3>
            <p className="text-[10px] font-bold uppercase text-muted-foreground mt-2 tracking-widest">Versuchen Sie es mit einem anderen Suchbegriff.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </section>

      {/* Expertise Section */}
      <section className="py-12 md:py-24 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">Registry Authority</span>
                <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary leading-tight">
                  Tansania Safari Deutschsprachig – Deine Experten für Safaris und Touren in Tansania
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
                <p>
                  Mit jahrelanger Erfahrung, einem eigenen Büro in Tansania und einem mehrsprachigen Team vor Ort garantiert Tansania Reiseabenteuer, dass dein Aufenthalt in Tansania ein reibungsloses und unvergessliches Erlebnis wird. Als Tansania Safari Deutschsprachig Anbieter bieten wir dir die Möglichkeit, diese atemberaubende Reise in deiner Sprache zu genießen.
                </p>
                <p>
                  Auf einer Safari in Tansania erlebst du die beeindruckendste Tierwelt hautnah. Wenige Naturwunder sind so atemberaubend wie die Große Migration. Spüre das Zittern des Bodens, wenn Millionen von Tieren gleichzeitig durch die Serengeti ziehen. Tansania ist der einzige Ort der Welt, an dem du eine solche Vielzahl von wilden Tieren an einem Ort erleben kannst.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-[#fdf7f2] rounded-2xl border border-border/50">
                  <Globe className="w-6 h-6 text-primary mb-3" />
                  <p className="text-xs font-bold text-secondary uppercase">Eigenes Büro</p>
                  <p className="text-[10px] text-muted-foreground uppercase mt-1">Direkte Betreuung in Arusha</p>
                </div>
                <div className="p-6 bg-[#fdf7f2] rounded-2xl border border-border/50">
                  <Users className="w-6 h-6 text-primary mb-3" />
                  <p className="text-xs font-bold text-secondary uppercase">Top-Guides</p>
                  <p className="text-[10px] text-muted-foreground uppercase mt-1">Deutschsprachige Experten</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" alt="Safari Experience" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Tansania Reiseabenteuer Jeep</p>
                <h4 className="text-2xl font-headline font-bold">100% Privat & Individuell</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultimate Adventure Section with Video */}
      <section className="py-12 md:py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-12 md:mb-16 space-y-4">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary leading-tight">
              Das ultimative Safari Abenteuer in Tansania
            </h2>
            <p className="max-w-3xl text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
              Stell dir vor, wie ein Löwenrudel in der goldenen Sonne döst, bunte Flamingos den See bei Sonnenaufgang schmücken, endlose Herden von Gnus über weite Ebenen ziehen und der majestätische Kilimandscharo den Horizont dominiert. Das ist Tansania: das Herz Afrikas und das perfekte Ziel für unvergessliche Safaris.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-8 border-white group">
                <iframe
                  src="https://www.youtube.com/embed/pSiHhC4dzPk"
                  title="Safari Adventure Video"
                  className="absolute inset-0 w-full h-full border-none"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80 border-l-4 border-primary pl-6 py-2">
                Mit fast 35% des Landes als Nationalparks und Wildschutzgebieten, darunter der weltberühmte Serengeti-Nationalpark und der Ngorongoro-Krater, gehört Tansania zu den besten Safari-Destinationen. Die Große Migration der Gnus – das größte Wanderereignis der Erde – und der majestätische Kilimandscharo machen Tansania zum ultimativen Ziel für Safaris.
              </p>
              <div className="space-y-4">
                {[
                  "Große Migration der Gnus",
                  "Majestätischer Kilimandscharo",
                  "Höchste Raubtierdichte",
                  "UNESCO Weltnaturerbe"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-[11px] font-bold text-secondary uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REDESIGNED: Luxury Lodging Section */}
      <section className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Luxus Safari</Badge>
                <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary leading-tight">
                  Luxuriöse Safari Unterkünfte während deines Tansania-Abenteuers
                </h2>
                <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
                  Mit Tansania Reiseabenteuer übernachtest du in luxuriösen Lodges mit Vollpension, die höchsten Komfort und exklusive Ausstattung bieten. Jede Unterkunft wird regelmäßig von unserem erfahrenen Team überprüft, um dir ein unvergessliches, hochwertiges Safari-Erlebnis zu garantieren.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: Star, title: "5-Sterne Komfort", desc: "Handverlesene Premium-Camps mit erstklassiger Ausstattung." },
                  { icon: Users, title: "Private Butler", desc: "Exzellenter Service, der jeden Wunsch von den Augen abliest." },
                  { icon: Sun, title: "Signature Views", desc: "Atemberaubende Ausblicke direkt von Ihrer Terrasse." },
                  { icon: ShieldCheck, title: "Geprüfte Qualität", desc: "Regelmäßige Audits durch unser Team vor Ort." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-[#FDF7F2] border border-[#F0EBE0] flex items-center justify-center shrink-0 transition-all group-hover:bg-primary group-hover:border-primary shadow-sm">
                      <feature.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-secondary uppercase leading-none mb-1">{feature.title}</h4>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <p className="text-muted-foreground text-sm leading-relaxed font-normal opacity-80 italic">
                  "Genieße das Brüllen der Löwen und das Trompeten der Elefanten – alles aus dem Luxus deiner 5-Sterne-Lodge. Erlebe die ultimative Luxus Safari in Tansania!"
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -rotate-2" />
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-8 border-white group">
                  <iframe
                    src="https://www.youtube.com/embed/IMucYRze3vs"
                    title="Luxury Safari Lodges"
                    className="absolute inset-0 w-full h-full border-none"
                    allowFullScreen
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-4 py-2 bg-secondary/80 backdrop-blur-xl text-white rounded-lg border border-white/10 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-[8px] font-black uppercase tracking-[0.2em]">OFFICIAL PARTNER</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between px-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Signature Lodges & Camps Registry</p>
                  <Sparkles className="w-4 h-4 text-primary opacity-20" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Safari & Erholung Section */}
      <section className="py-12 md:py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[16/10] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl order-2 lg:order-1 border-8 border-white">
              <Image src="https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1200" alt="Zanzibar Beach" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">Safari & Erholung</p>
                <h4 className="text-3xl font-headline font-bold text-white uppercase tracking-tighter">Sansibar Highlights</h4>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary leading-tight">
                  Tansania Safari und Baden Sansibar – Abenteuer und Erholung vereint
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
                <p>
                  Erlebe das Beste aus beiden Welten mit einer Tansania Safari und Baden Sansibar. Beginne dein Abenteuer mit einer aufregenden Safari durch die Nationalparks Tansanias, wie die Serengeti oder den Ngorongoro-Krater, und beobachte die beeindruckende Tierwelt in ihrem natürlichen Lebensraum.
                </p>
                <p>
                  Anschließend kannst du dich auf der Insel Sansibar entspannen, bekannt für ihre weißen Sandstrände, kristallklaren Gewässer und die faszinierende Mischung aus Kulturen. Tauche ein in die Schönheit der Insel, schwimme im warmen Ozean oder erkunde die historische Altstadt von Stone Town. Die Kombination aus Tansania Safari und Baden Sansibar bietet dir die perfekte Mischung aus Abenteuer und Erholung für einen unvergesslichen Urlaub.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-xl px-10 h-14 font-bold shadow-xl border-none">
                <Link href="/destinations/zanzibar">Insel Entdecken</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Beste Reisezeit Section */}
      <section className="py-12 md:py-24 bg-white border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase tracking-tight">
              Tansania Safari Beste Reisezeit – Dein perfektes Safari-Erlebnis
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
              Die Tansania Safari Beste Reisezeit hängt von deinen Interessen ab. Ob du die Große Migration oder die Tierwelt im Ngorongoro-Krater erleben möchtest, die Wahl der richtigen Tansania Safari Reisezeit ist entscheidend. Unsere Experten helfen dir, die beste Zeit für Tierbeobachtungen und perfektes Wetter auszuwählen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Große Migration", time: "Juli bis Oktober", desc: "Millionen Gnus und Zebras ziehen durch die Serengeti. Hauptsaison für Flussüberquerungen.", icon: Leaf },
              { title: "Tierbeobachtungen", time: "Juni bis Oktober", desc: "Trockenzeit. Weniger Vegetation macht Tiere an Wasserquellen leichter auffindbar.", icon: Camera },
              { title: "Fotografie", time: "Dezember bis März", desc: "Grüne Landschaften nach dem Regen und viele neugeborene Tiere bieten perfekte Motive.", icon: Star },
              { title: "Vogelbeobachtungen", time: "November bis April", desc: "Paradies für Beobachter durch Zugvögel aus Europa und Tausende von Flamingos.", icon: Bird },
              { title: "Ruhige Safari", time: "März bis Mai", desc: "Regenzeit mit üppigen Landschaften und deutlich weniger Touristen für private Momente.", icon: Sun },
              { title: "Familien-Safari", time: "Juni bis September", desc: "Mildes Wetter und beste Sichtbarkeit für ein entspanntes Erlebnis mit Kindern.", icon: Heart }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#FDFCFB] p-8 rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h4 className="font-headline text-xl md:text-2xl font-bold text-secondary uppercase mb-2 tracking-tight">{item.title}</h4>
                <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-4">{item.time}</p>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium uppercase tracking-tight opacity-70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary uppercase tracking-tight">
              Tansania Safari Anbieter Erfahrungen
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-sm md:text-lg leading-relaxed font-normal opacity-80">
              Erlebe Tansania auf die bestmögliche Weise mit Tansania Reiseabenteuer, einem führenden Tansania Safari Anbieter. Unsere Kunden schätzen den exzellenten Service, die atemberaubende Tierwelt und die perfekte Organisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Johanna K.", quote: "Perfekte Safari! Die Lodges waren luxuriös und das Personal sehr freundlich. Besonders beeindruckend war die Begegnung mit den Löwen in der Serengeti. Wir fühlten uns rundum gut betreut." },
              { name: "Martin L.", quote: "Tansania Reiseabenteuer hat unsere Erwartungen übertroffen. Unsere maßgeschneiderte Safari war perfekt organisiert, mit fantastischen Guides und luxuriösen Lodges. Die Tiere waren beeindruckend." },
              { name: "Sarah und Max B.", quote: "Tansania war magisch! Die Tierwelt und Landschaften sind einzigartig. Die Lodges waren komfortabel und das Essen gut. Einzig längere Fahrtzeiten waren anstrengend, aber das Erlebnis entschädigte dafür." },
              { name: "Michael T.", quote: "Unvergessliche Safari! Die Tiere und Landschaften waren überwältigend. Besonders die Gnu-Migration war ein Highlight. Sehr empfehlenswert für alle, die eine echte Tansania Safari urlaub erleben wollen." },
              { name: "Clara P.", quote: "Tolle Safari! Die Unterkünfte waren luxuriös, aber ein wenig mehr Vielfalt bei den Mahlzeiten hätte es noch besser gemacht. Insgesamt aber eine großartige Erfahrung." },
              { name: "David und Elena R.", quote: "Wunderbare Familien-Safari! Die Guides waren informativ, und die Lodges waren fantastisch. Unsere Kinder liebten es. Wir kommen wieder!" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-border/40 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-sm md:text-base italic text-secondary leading-relaxed font-medium uppercase tracking-tight opacity-80">"{t.quote}"</p>
                </div>
                <p className="mt-6 font-bold text-primary uppercase text-[10px] tracking-widest">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari FAQ Section */}
      <section className="py-12 md:py-24 bg-white border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-2xl md:text-4xl font-normal text-secondary leading-tight">
              Tansania Safari Urlaub – Häufig gestellte Fragen
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Was sollte ich bei einem Tansania Safari Urlaub beachten?", a: "Planen Sie ausreichend Zeit ein, wählen Sie die richtige Kleidung (Zwiebelprinzip) und achten Sie auf die beste Reisezeit für Ihre Wildlife-Interessen." },
              { q: "Wie viel kostet ein Tansania Safari Urlaub?", a: "Die Kosten hängen vom Komfortlevel und der Dauer ab. Eine hochwertige Privat-Safari beginnt meist bei ca. 3.000 € pro Person." },
              { q: "Was kostet eine typische Tansania Safari?", a: "Für eine 7-tägige klassische Safari inklusive Inlandsflügen und Top-Lodges sollten Sie mit ca. 3.500 € bis 5.000 € kalkulieren." },
              { q: "Was sollte ich für meinen Tansania Safari Urlaub einpacken?", a: "Fernglas, Sonnenschutz, Insektenschutz, bequeme Schuhe und helle Kleidung in Naturfarben sind essenziell." },
              { q: "Welche Kleidung benötige ich für eine Tansania Safari?", a: "Leichte Stoffe wie Leinen oder Baumwolle in Beige oder Khaki. Für die kühlen Morgenstunden ist eine Fleecejacke wichtig." },
              { q: "Wie kann ich eine Tansania Safari günstig buchen?", a: "Frühbucherrabatte oder Reisen in der Nebensaison (Grüne Saison) bieten oft preiswertere Optionen ohne Qualitätseinbußen." },
              { q: "Gibt es günstige Optionen für einen Tansania Safari Urlaub?", a: "Camping-Safaris sind eine hervorragende und authentische Möglichkeit, die Serengeti budgetschonend zu erleben." },
              { q: "Welche Ausrüstung benötige ich für eine Tansania Safari?", a: "Eine gute Kamera mit Zoom-Objektiv (min. 300mm), Powerbank und ggf. eine Stirnlampe für Camping-Nächte." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-[#FDFCFB] rounded-2xl px-8 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-border">
                <AccordionTrigger className="font-bold text-base py-6 hover:no-underline text-left text-secondary [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4">
                    <span className="tracking-tight leading-snug">{faq.q}</span>
                    <Plus className="w-4 h-4 text-primary transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] pb-8 font-normal uppercase tracking-widest opacity-80">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <AiCTA />
      <ContactSection />
    </div>
  );
}
