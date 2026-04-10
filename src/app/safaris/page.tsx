
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
  CheckCircle2
} from 'lucide-react';
import { Input } from '@/components/ui/input';
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

const zanzibarGallery = [
  { src: "https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800", hint: "zanzibar beach" },
  { src: "https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800", hint: "zanzibar coast" },
  { src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800", hint: "dhow cruise" },
  { src: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800", hint: "safari lodge" },
  { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800", hint: "serengeti safari" },
  { src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800", hint: "migration herds" },
];

const bestTimeData = [
  { icon: Zap, title: "Große Migration", time: "Juli – Oktober", desc: "Beste Zeit für dramatische Flussüberquerungen und Millionen Gnus in Aktion." },
  { icon: Sun, title: "Tierbeobachtungen", time: "Juni – Oktober", desc: "Trockenzeit. Weniger Vegetation macht Tiere an Wasserlöchern leichter sichtbar." },
  { icon: Camera, title: "Fotografie", time: "Dezember – März", desc: "Grüne Landschaften und viele neugeborene Tiere bieten perfekte Lichtverhältnisse." },
  { icon: Bird, title: "Vogelbeobachtungen", time: "November – April", desc: "Paradies für Beobachter durch Zugvögel aus Europa und Tausende von Flamingos." },
  { icon: Leaf, title: "Ruhige Safari", time: "März – Mai", desc: "Regenzeit bietet üppige Natur, weniger Touristen und ein exklusives Privaterlebnis." },
  { icon: Users, title: "Familien-Safari", time: "Juni – September", desc: "Mildes Wetter und exzellente Sichtbarkeit sorgen für unvergessliche Erlebnisse." },
];

const reviews = [
  { name: "Johanna K.", text: "Perfekte Safari! Die Lodges waren luxuriös und das Personal sehr freundlich. Besonders beeindruckend war die Begegnung mit den Löwen in der Serengeti. Wir fühlten uns rundum gut betreut." },
  { name: "Martin L.", text: "Tansania Reiseabenteuer hat unsere Erwartungen übertroffen. Unsere maßgeschneiderte Safari war perfekt organisiert, mit fantastischen Guides und luxuriösen Lodges. Die Tiere waren beeindruckend." },
  { name: "Sarah und Max B.", text: "Tansania war magisch! Die Tierwelt und Landschaften sind einzigartig. Die Lodges waren komfortabel und das Essen gut. Einzig längere Fahrtzeiten waren anstrengend, aber das Erlebnis entschädigte dafür." },
  { name: "Michael T.", text: "Unvergessliche Safari! Die Tiere und Landschaften waren überwältigend. Besonders die Gnu-Migration war ein Highlight. Sehr empfehlenswert." },
  { name: "Clara P.", text: "Tolle Safari! Die Unterkünfte waren luxuriös, aber ein wenig mehr Vielfalt bei den Mahlzeiten hätte es noch besser gemacht. Insgesamt aber eine großartige Erfahrung." },
  { name: "David und Elena R.", text: "Wunderbare Familien-Safari! Die Guides waren informativ, und die Lodges waren fantastisch. Unsere Kinder liebten es. Wir kommen wieder!" },
];

const faqData = [
  { q: "Was sollte ich bei einem Tansania Safari Urlaub beachten?", a: "Wichtig sind die Wahl der richtigen Reisezeit für Ihre Interessen (z.B. Migration), die Gesundheitsvorsorge (Impfungen) und die Buchung bei einem erfahrenen Spezialisten für Sicherheit und Qualität." },
  { q: "Wie viel kostet ein Tansania Safari Urlaub?", a: "Eine hochwertige Safari inkl. handverlesener Lodges und privatem Guide startet in der Regel ab ca. 5.000 € pro Person für eine 10-14 tägige Kombinationsreise." },
  { q: "Was sollte ich für meinen Tansania Safari Urlaub einpacken?", a: "Leichte, helle Kleidung (Zwiebelprinzip), gute Wanderschuhe, ein Fernglas, Sonnenschutz und Insektenschutz sind essenziell." },
  { q: "Wie kann ich eine Tansania Safari günstig buchen?", a: "Günstigere Optionen bieten sich in der 'Green Season' (Nebensaison) an. Wir beraten Sie gerne zu Paketen, die ein exzellentes Preis-Leistungs-Verhältnis bieten." },
  { q: "Welche Ausrüstung benötige ich für eine Tansania Safari?", a: "Neben einer guten Kamera empfehlen wir ein Fernglas für jeden Reisenden und einen Tagesrucksack für Pirschfahrten." },
];

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
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const categories = ['All', 'Signature', 'Expedition', 'Wildlife', 'Honeymoon'];

  if (!mounted) return null;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-normal">
      {/* HERO */}
      <section className="relative h-[45vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920" 
            alt="Savannah Collection" 
            fill 
            priority 
            className="object-cover brightness-[0.35] scale-105"
            data-ai-hint="serengeti safari"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-secondary/20" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center space-y-6 pt-24 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-white uppercase leading-none tracking-tighter text-3xl md:text-6xl lg:text-7xl">
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

      {/* 01: UNIQUE MODERN EXPERTISE MANIFEST */}
      <section className="py-12 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative">
            
            {/* Visual Anchor Column: Layered Narrative */}
            <div className="w-full lg:w-[45%] relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200" 
                  alt="Tansania Experten im Einsatz" 
                  fill 
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-[2.5rem] overflow-hidden shadow-xl z-0 opacity-20 hidden lg:block bg-primary/10">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <Globe className="w-full h-full text-primary" />
                </div>
              </div>

              {/* Floating Status Stamp */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 md:p-8 rounded-[2rem] shadow-2xl z-20 border border-white/5 hidden md:block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/60">Registry Active</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">
                  Berlin - Arusha Axis <br /><span className="text-primary">Official SDL Hub</span>
                </p>
              </motion.div>
            </div>

            {/* Content Column: The Manifest Card */}
            <div className="flex-1 space-y-10 lg:pt-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Unsere Expertise</span>
                  <div className="h-px w-12 bg-primary/30" />
                </div>
                <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-normal text-secondary leading-tight tracking-wide">
                  Tansania Safari Deutschsprachig – Deine Experten für Safaris
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
                {/* Visual Connector */}
                <div className="absolute top-0 left-0 bottom-0 w-px bg-border/60 hidden md:block" />
                
                <div className="space-y-6 md:pl-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-[14px] leading-[20px] font-normal text-muted-foreground tracking-normal uppercase">
                    Mit jahrelanger Erfahrung, einem eigenen Büro in Tansania und einem mehrsprachigen Team vor Ort garantiert Tansania Reiseabenteuer, dass dein Aufenthalt ein reibungsloses Erlebnis wird.
                  </p>
                </div>

                <div className="space-y-6 md:pl-8">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Compass className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-[14px] leading-[20px] font-normal text-muted-foreground tracking-normal uppercase">
                    Auf einer Safari in Tansania erlebst du die beeindruckendste Tierwelt hautnah. Spüre das Zittern des Bodens, wenn Millionen von Tieren gleichzeitig durch die Serengeti ziehen.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/trip-planner">
                  <Button className="rounded-xl px-10 h-14 font-black text-[10px] uppercase tracking-[0.3em] shadow-xl border-none group">
                    EXPERTEN-BERATUNG ANFRAGEN <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ultimative Safari & Video */}
      <section className="py-12 md:py-16 bg-[#FDF7F2] border-y border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Expeditions Registry</span>
            <h2 className="font-headline text-2xl md:text-4xl lg:text-5xl font-normal text-secondary leading-tight tracking-wide">
              Das ultimative Safari Abenteuer in Tansania
            </h2>
            <p className="text-[14px] leading-[20px] font-normal text-muted-foreground tracking-normal max-w-3xl">
              Stell dir vor, wie ein Löwenrudel in der goldenen Sonne döst, bunte Flamingos den See bei Sonnenaufgang schmücken, endlose Herden von Gnus über weite Ebenen ziehen und der majestätische Kilimandscharo den Horizont dominiert.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-video w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl bg-black group border-8 border-white">
                <iframe src="https://www.youtube.com/embed/pSiHhC4dzPk" title="Serengeti Jeep" className="absolute inset-0 w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity" allowFullScreen />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="p-8 bg-white rounded-[2rem] border border-border/50 shadow-sm space-y-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-headline text-xl font-medium text-secondary">Nationalparks Fokus</h4>
                </div>
                <p className="text-[14px] leading-[20px] font-normal text-muted-foreground">
                  Mit fast 35% des Landes als Nationalparks und Wildschutzgebieten, darunter der weltberühmte Serengeti-Nationalpark und der Ngorongoro-Krater, gehört Tansania zu den besten Safari-Destinationen weltweit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02: LUXUS UNTERKÜNFTE */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Premium Lodging</span>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary leading-tight tracking-wide">
                  Luxuriöse Safari Unterkünfte
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-[14px] leading-[20px] font-normal text-muted-foreground tracking-normal uppercase">
                  Mit Tansania Reiseabenteuer übernachtest du in luxuriösen Lodges mit Vollpension, die höchsten Komfort und exklusive Ausstattung bieten. Jede Unterkunft wird regelmäßig von unserem erfahrenen Team überprüft.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-xl border border-border">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">5-Sterne Standard</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/20 rounded-xl border border-border">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Authentic Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
              <iframe src="https://www.youtube.com/embed/IMucYRze3vs" title="Luxus Lodges" className="absolute inset-0 w-full h-full border-none opacity-90 group-hover:opacity-100 transition-opacity" allowFullScreen />
            </div>
          </div>
        </div>
      </section>

      {/* 03: SAFARI & ERHOLUNG */}
      <section className="py-12 md:py-16 bg-[#FDFCFB] border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
            <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-border/50">
                <Image src="https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1000" alt="Zanzibar Beach" fill className="object-cover" />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                <Waves className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] block">Bush & Beach</span>
                <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary uppercase tracking-tighter">Safari & Erholung</h2>
              </div>
              <p className="text-[14px] leading-[20px] font-normal text-muted-foreground uppercase tracking-widest leading-relaxed opacity-80">
                Beginne dein Abenteuer mit einer aufregenden Safari durch die Nationalparks Tansanias, wie die Serengeti oder den Ngorongoro-Krater, und beobachte die beeindruckende Tierwelt in ihrem natürlichen Lebensraum. Anschließend kannst du dich auf der Insel Sansibar entspannen.
              </p>
              <div className="pt-4">
                <Link href="/destinations/zanzibar">
                  <Button variant="outline" className="rounded-xl px-8 h-12 font-bold text-[10px] uppercase tracking-widest border-muted">Sansibar Guide ansehen</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sansibar Gallery Section */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Inselparadies</span>
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tight">
              Sansibar Highlights Galerie
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {zanzibarGallery.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-lg border border-border/50"
              >
                <Image src={img.src} alt={`Sansibar ${idx + 1}`} fill className="object-cover" data-ai-hint={img.hint} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beste Reisezeit Grid */}
      <section className="py-12 md:py-16 bg-[#FDF7F2] border-y border-border/40 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Planungs-Navigator</span>
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tight">
              Tansania Safari Beste Reisezeit – Dein perfektes Safari-Erlebnis
            </h2>
            <p className="text-[14px] leading-[20px] text-muted-foreground max-w-3xl mx-auto">
              Die Wahl der richtigen Tansania Safari Reisezeit ist entscheidend. Unsere Experten helfen dir, die beste Zeit für Tierbeobachtungen und perfektes Wetter auszuwählen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {bestTimeData.map((item, idx) => (
              <Card key={idx} className="border-none shadow-sm rounded-[2rem] bg-white group hover:shadow-xl transition-all duration-500">
                <CardContent className="p-8 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-headline text-xl md:text-2xl font-medium text-secondary">{item.title}</h4>
                    <p className="text-primary font-bold text-[10px] uppercase tracking-widest">{item.time}</p>
                    <p className="text-[14px] leading-[20px] text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Erfahrungsberichte</span>
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tight">
              Tansania Safari Anbieter Erfahrungen
            </h2>
            <p className="text-[14px] leading-[20px] text-muted-foreground max-w-2xl mx-auto">
              Unsere Kunden schätzen den exzellenten Service und die atemberaubende Tierwelt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="p-8 bg-[#fdfcfb] rounded-[2rem] border border-border/50 shadow-sm space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-primary text-primary" />)}
                  </div>
                  <p className="text-[14px] leading-[20px] text-secondary font-medium tracking-tight uppercase">"{r.text}"</p>
                </div>
                <div className="pt-4 border-t border-border/40 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-xs text-primary">{r.name[0]}</div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Segment */}
      <section className="py-12 md:py-16 bg-[#fdfcfb] border-t border-border/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Wissensdatenbank</span>
            <h2 className="font-headline text-3xl md:text-5xl font-normal text-secondary tracking-tight">
              Tansania Safari Urlaub – Häufig gestellte Fragen
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqData.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-none bg-white rounded-xl px-6 md:px-10 shadow-sm border border-transparent hover:border-border transition-all">
                <AccordionTrigger className="font-normal text-[14px] leading-[20px] md:text-base py-5 hover:no-underline text-left text-secondary transition-colors tracking-tight [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4">
                    <span className="leading-snug">{faq.q}</span>
                    <Plus className="w-4 h-4 text-primary shrink-0 transition-transform group-data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[14px] leading-[20px] font-normal pb-6">
                  {faq.a}
                </AccordionContent>
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
