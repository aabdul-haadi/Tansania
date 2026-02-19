
"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Clock, 
  Users, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Plane, 
  Camera, 
  Waves, 
  Heart,
  MessageSquare,
  Download,
  Phone,
  Mail,
  X,
  Compass,
  Star,
  Zap,
  Mountain
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';

// Mock data based on the user's provided content for immediate visualization
const PACKAGE_CONTENT = {
  id: '15-day-safari-zanzibar',
  title: '15 Tage Safari in Tansania und Sansibar',
  subtitle: 'Erlebnisreise - Safari im Norden und Badeurlaub auf Sansibar',
  price: '5.399',
  duration: '15 Tage',
  highlights: [
    'Atemberaubende Tierbeobachtungen',
    'Exklusive Lodge & Tented Camp',
    'Abenteuer & Erholung',
    'Alles gut organisiert',
    'Inklusive Intl. Flug'
  ],
  description: 'Diese 15-tägige Pauschalreise vereint Abenteuer und Erholung in perfekter Weise: Nach der Landung am Kilimanjaro International Airport werden Sie herzlich empfangen und fahren nach Arusha, wo Sie das wahre Tansania in Ihrem eigenen Tempo erleben können.',
  itinerary: [
    { day: 1, title: 'Ankommen & Eintauchen', desc: 'Fliegen Sie mit uns in den schönen tieferen Süden unserer Erdkugel. Nach der Ankunft am Kilimandscharo International Airport werden Sie von unserem Reiseleiter empfangen.', img: 'https://picsum.photos/seed/safari1/800/600', location: 'Arusha' },
    { day: 2, title: 'Ankunft in Tanzania', desc: 'Erholen Sie sich von der Anreise oder erkunden Sie die Stadt mithilfe eines lokalen Reiseleiters. Erleben Sie das turbulente afrikanische Stadtleben.', img: 'https://picsum.photos/seed/safari2/800/600', location: 'Arusha' },
    { day: 3, title: 'Arusha Nationalpark', desc: 'Malerische Aussicht auf die sieben Momella-Seen und den Ngurdoto Krater. Beobachten Sie Flamingos und Affen im dichten Wald.', img: 'https://picsum.photos/seed/safari3/800/600', location: 'Arusha NP' },
    { day: 4, title: 'Tarangire Nationalpark', desc: 'Hohe Populationsdichte an Elefanten. Herden von bis zu 300 Elefanten suchen täglich im trockenen Flussbett nach Wasser.', img: 'https://picsum.photos/seed/safari4/800/600', location: 'Tarangire' },
    { day: 5, title: 'Besuch einer tansanischen Schule', desc: 'Authentische Begegnungen mit der lokalen Kultur der Massai, bevor Sie die weite Savanne der Serengeti entdecken.', img: 'https://picsum.photos/seed/safari5/800/600', location: 'Maasai Village' },
    { day: 6, title: 'Serengeti Nationalpark', desc: 'Ganztägige Safari in der Serengeti. Chancen auf die große Migration, je nach Saison.', img: 'https://picsum.photos/seed/safari6/800/600', location: 'Serengeti' },
    { day: 7, title: 'Ngorongoro-Krater', desc: 'Ein Naturwunder mit einer hohen Wilddichte. Außergewöhnliche Möglichkeiten, die „Big Five“ zu erleben.', img: 'https://picsum.photos/seed/safari7/800/600', location: 'Ngorongoro' },
    { day: 8, title: 'Inlandsflug nach Sansibar', desc: 'Vom Festland auf die wunderschöne Insel Sansibar. Ihr Fahrer bringt Sie rechtzeitig zum Flughafen.', img: 'https://picsum.photos/seed/safari8/800/600', location: 'Zanzibar' },
    { day: 9, title: 'Empfehlung: Freizeit', desc: 'Genießen Sie die wunderschönen, sauberen, weißen Strände von Sansibar. Schwimmen, schnorcheln oder tauchen.', img: 'https://picsum.photos/seed/safari9/800/600', location: 'Beach' },
    { day: 10, title: 'Empfehlung: blaue Safari', desc: 'Bootstour zu unbewohnten Inseln und Sandbänken. Schnorcheln in flachen, türkisfarbenen Gewässern.', img: 'https://picsum.photos/seed/safari10/800/600', location: 'Indian Ocean' },
    { day: 11, title: 'Empfehlung: Gewürztour', desc: 'Reisen Sie ins Inselinnere zu den duftenden Gewürzplantagen. Vanille, Kakao, Pfeffer und mehr.', img: 'https://picsum.photos/seed/safari11/800/600', location: 'Spice Farm' },
    { day: 12, title: 'Empfehlung: Strand und Tauchen', desc: 'Erkunden Sie die farbenfrohe Unterwasserwelt oder entspannen Sie auf Ihrem Balkon.', img: 'https://picsum.photos/seed/safari12/800/600', location: 'Coastal' },
    { day: 13, title: 'Empfehlung: Freizeit', desc: 'Savor a refreshing cocktail and admire the golden sunset in the evening.', img: 'https://picsum.photos/seed/safari13/800/600', location: 'Zanzibar' },
    { day: 14, title: 'Abreise & Transfer', desc: 'Sicherer Transfer zum Flughafen. Wir hoffen, wir konnten Ihre Wünsche in Erinnerungen verwandeln.', img: 'https://picsum.photos/seed/safari14/800/600', location: 'Airport' },
    { day: 15, title: 'Landung in der Heimat', desc: 'Willkommen zu Hause mit unvergesslichen Erinnerungen an Tansania.', img: 'https://picsum.photos/seed/safari15/800/600', location: 'Home' },
  ],
  faqs: [
    { q: 'Was ist in dieser 15 tage safari enthalten?', a: 'Inklusive internationalem Flug, Inlandsflügen, Safaris in Arusha, Tarangire, Serengeti und Ngorongoro, Unterkünfte und Strandhotel auf Sansibar.' },
    { q: 'Welche Nationalparks werden besucht?', a: 'Arusha NP, Tarangire NP, Serengeti und der Ngorongoro-Krater.' },
    { q: 'Ist die Reise für Familien geeignet?', a: 'Ja, diese Pauschalreise ist perfekt für Familien konzipiert, die Abenteuer und Erholung suchen.' }
  ]
};

export default function PackageDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const firestore = useFirestore();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // In a real app, we fetch the actual slug. For now, we use the 15-day content as a template.
  const packageData = PACKAGE_CONTENT; 

  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="bg-[#fdfcfb] min-h-screen pb-32 overflow-x-hidden">
      {/* Reading Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left" style={{ scaleX }} />

      {/* Modern Immersive Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
        <Image 
          src={packageData.itinerary[5].img} 
          alt={packageData.title} 
          fill 
          priority
          className="object-cover"
          data-ai-hint="serengeti migration"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fdfcfb] via-black/20 to-black/10" />
        
        <div className="container relative z-10 mx-auto px-4 pb-12 md:pb-24">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-primary text-secondary border-none px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-xl">
                {packageData.subtitle}
              </Badge>
              <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] drop-shadow-sm">
                Traumabenteuer <br />
                <span className="text-primary italic">in Afrika</span>
              </h1>
              
              <div className="flex flex-wrap gap-4 md:gap-8 text-white/90">
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold">{packageData.duration} Expedition</span>
                </div>
                <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
                  <Plane className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold">Inkl. Internationaler Flug</span>
                </div>
                <div className="flex items-center gap-2 bg-white text-secondary px-4 py-2 rounded-2xl shadow-2xl">
                  <span className="text-[10px] font-bold uppercase tracking-widest mr-1 opacity-60">Ab</span>
                  <span className="text-xl font-bold">{packageData.price} €</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary Section - Compact & Informative */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight">
                Ein Abenteuer, das <br />
                <span className="text-primary italic">alle Sinne weckt</span>
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                {packageData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packageData.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-3xl shadow-sm border border-border/50 group hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-sm text-secondary">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-secondary text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-3">
                  <Compass className="w-8 h-8 text-primary" />
                  <h3 className="font-headline text-2xl font-bold">Ihre Route im Blick</h3>
                </div>
                <div className="space-y-6">
                  {['Arusha', 'Tarangire', 'Serengeti', 'Ngorongoro', 'Zanzibar'].map((loc, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-default">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold group-hover:bg-primary group-hover:text-secondary transition-all">
                        {i + 1}
                      </div>
                      <span className="text-sm font-bold tracking-wide uppercase">{loc}</span>
                      {i < 4 && <ChevronRight className="w-4 h-4 ml-auto text-white/20" />}
                    </div>
                  ))}
                </div>
                <Button className="w-full h-14 rounded-2xl bg-primary text-secondary font-bold text-base shadow-xl hover:scale-[1.02] transition-transform">
                  <Download className="w-4 h-4 mr-2" /> Reiseroute PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section - Creative Timeline Design */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Tag für Tag</span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold">Ihre Reise <span className="text-primary italic">Schritt für Schritt</span></h2>
          </div>

          <div className="space-y-24 relative">
            {/* Background Line for Desktop */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-muted hidden lg:block" />

            {packageData.itinerary.map((day, idx) => (
              <motion.div 
                key={day.day}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
                    <Image 
                      src={day.img} 
                      alt={day.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full shadow-lg">
                      <span className="text-primary font-bold text-[10px] uppercase tracking-widest">Tag {day.day}</span>
                    </div>
                    <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur px-4 py-1.5 rounded-full text-white">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{day.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-4 px-4">
                  <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                    <div className="w-8 h-px bg-primary" />
                    <span>Tag {day.day} Expedition</span>
                  </div>
                  <h3 className="font-headline text-3xl md:text-4xl font-bold text-secondary leading-tight">{day.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-lg italic">
                    "{day.desc}"
                  </p>
                  <div className="flex gap-4 pt-4">
                    <div className="px-4 py-2 bg-muted/50 rounded-xl text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Inkl. Vollpension</div>
                    <div className="px-4 py-2 bg-muted/50 rounded-xl text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Privatguide</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Showcase - Focused on Quality */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Sanctuaries in the Wild</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold">Wohnen wie <br /><span className="text-primary italic">im Paradies</span></h2>
            </div>
            <p className="text-white/40 text-xs font-light max-w-[200px]">Handverlesene Lodges und Strandresorts für höchste Ansprüche.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Ashura Planet Hotel', tag: 'Boutique', img: 'https://picsum.photos/seed/h1/600/800' },
              { name: 'Funbeach Hotel', tag: 'Lifestyle', img: 'https://picsum.photos/seed/h2/600/800' },
              { name: 'Nugiwi Hotel', tag: 'Luxury', img: 'https://picsum.photos/seed/h3/600/800' }
            ].map((hotel, i) => (
              <div key={i} className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image src={hotel.img} alt={hotel.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <Badge className="bg-primary text-secondary mb-2 uppercase tracking-widest font-bold text-[8px]">{hotel.tag}</Badge>
                  <h4 className="text-xl font-bold font-headline">{hotel.name}</h4>
                  <Link href="#" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold text-white/60 group-hover:text-primary transition-colors mt-2">
                    Details ansehen <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Support Section */}
      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Häufig gestellte <span className="text-primary italic">Fragen</span></h2>
          <p className="text-muted-foreground font-light">Alles, was Sie für Ihre 15-tägige Reise wissen müssen.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {packageData.faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none bg-white rounded-[2rem] px-8 py-2 shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="font-bold text-lg hover:no-underline hover:text-primary text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 italic">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-muted/30 border border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-headline text-3xl font-bold mb-2">Haben Sie <br />weitere Fragen?</h3>
            <p className="text-muted-foreground text-sm font-light">Unsere Experten in Kairo und Arusha beraten Sie persönlich.</p>
          </div>
          <div className="flex gap-4">
            <Button size="icon" className="w-14 h-14 rounded-2xl bg-white border border-border shadow-sm text-secondary hover:bg-secondary hover:text-white">
              <Phone className="w-6 h-6" />
            </Button>
            <Button size="icon" className="w-14 h-14 rounded-2xl bg-white border border-border shadow-sm text-secondary hover:bg-secondary hover:text-white">
              <Mail className="w-6 h-6" />
            </Button>
            <Button size="lg" className="rounded-2xl px-8 h-14 font-bold bg-primary text-secondary">
              Rückruf anfordern
            </Button>
          </div>
        </div>
      </section>

      {/* MOBILE OPTIMIZED STICKY BOOKING BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden pointer-events-none">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="pointer-events-auto bg-secondary/95 backdrop-blur-xl rounded-[2rem] p-4 flex items-center justify-between shadow-2xl border border-white/10"
        >
          <div className="flex flex-col pl-4">
            <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest leading-none mb-1">Ab Preis</p>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-white">{packageData.price} €</span>
              <span className="text-[8px] text-white/40 font-light">/ person</span>
            </div>
          </div>
          <Button asChild size="lg" className="rounded-2xl h-12 px-8 bg-primary text-secondary font-bold shadow-xl">
            <Link href="/trip-planner?package=15-day-safari-zanzibar">
              Anfragen <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* DESKTOP SIDEBAR ACTION (OPTIONAL OVERLAY) */}
      <div className="hidden lg:block fixed right-8 top-[50%] -translate-y-[50%] z-40">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-white p-2 rounded-full shadow-2xl border border-border/50 flex flex-col gap-2"
        >
          {[Phone, MessageSquare, Mail, Download].map((Icon, i) => (
            <Button key={i} size="icon" variant="ghost" className="w-12 h-12 rounded-full hover:bg-primary/10 hover:text-primary transition-all">
              <Icon className="w-5 h-5" />
            </Button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
