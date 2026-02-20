"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  MessageSquare, 
  CalendarCheck, 
  Database,
  RefreshCw,
  Globe,
  Eye,
  Sparkles
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useFirestore, useUser, useCollection, useMemoFirebase } from '@/firebase';
import { doc, setDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboard() {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const canFetch = !!firestore && !!user;

  const pagesQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'pages') : null, [canFetch, firestore]);
  const blogsQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'blogPosts') : null, [canFetch, firestore]);
  const bookingsQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'bookings') : null, [canFetch, firestore]);
  const inquiriesQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'inquiries') : null, [canFetch, firestore]);
  const packagesQuery = useMemoFirebase(() => canFetch ? collection(firestore!, 'packages') : null, [canFetch, firestore]);

  const { data: pages } = useCollection(pagesQuery);
  const { data: blogs } = useCollection(blogsQuery);
  const { data: bookings } = useCollection(bookingsQuery);
  const { data: inquiries } = useCollection(inquiriesQuery);
  const { data: packages } = useCollection(packagesQuery);

  const stats = [
    { label: 'Site Registry', value: pages?.length || 0, icon: Globe, trend: 'Managed routes' },
    { label: 'Safari Catalog', value: packages?.length || 0, icon: Database, trend: 'Synced packages' },
    { label: 'Inquiries', value: inquiries?.length || 0, icon: MessageSquare, trend: 'New leads' },
    { label: 'Bookings', value: bookings?.length || 0, icon: CalendarCheck, trend: 'Confirmed trips' },
  ];

  const handleSeedData = async () => {
    if (!firestore || !user) return;
    setLoading(true);
    try {
      const allPackages = [
        { 
          id: '15-day-safari-zanzibar', 
          title: '15 Tage Safari in Tansania und Sansibar', 
          slug: '15-day-safari-zanzibar', 
          subtitle: 'Traumabenteuer in Afrika!',
          category: 'SAFARI & SANSIBAR', 
          tag: 'Meistverkauft', 
          durationDays: 15, 
          startingPrice: 5399, 
          description: "Diese 15-tägige Pauschalreise vereint Abenteuer und Erholung in perfekter Weise: Nach der Landung am Kilimanjaro International Airport werden Sie herzlich empfangen und fahren nach Arusha, wo Sie das wahre Tansania in Ihrem eigenen Tempo erleben können. Die Safari im Norden beginnt im Arusha-Nationalpark, gefolgt von Tarangire, den Weiten der Serengeti und dem Ngorongoro-Krater. Den krönenden Abschluss bilden die weißen Sandstrände Sansibars.",
          highlights: ['Atemberaubende Tierbeobachtungen', 'Exklusive Lodge & Tented Camp', 'Abenteuer & Erholung', 'Alles gut organisiert', 'Inklusive Intl. Flug'], 
          imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
          itineraryDays: [
            { day: 1, title: 'Ankommen & Eintauchen', location: 'Arusha', stats: 'Distanz: 50km | 60 Min', desc: 'Ihre Traumreise beginnt jetzt! Fliegen Sie mit uns in den schönen tieferen Süden unserer Erdkugel. Nach der Ankunft am Kilimandscharo Airport werden Sie von unserem Reiseleiter empfangen. In Arusha können Sie sich von der Anreise erholen oder erste Eindrücke der Stadt sammeln.', img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' },
            { day: 2, title: 'Ankunft in Tanzania', location: 'Arusha', stats: 'Kultur & Markt', desc: 'Erkunden Sie Arusha mit einem lokalen Guide. Besuchen Sie pulsierende Märkte mit frischem Obst, Street Food und traditioneller Kleidung. Eine Fahrt mit dem Daladala (Bus) bringt Ihnen das authentische Leben näher.', img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800' },
            { day: 3, title: 'Arusha Nationalpark', location: 'Momella Lakes', stats: '400 Vogelarten', desc: 'Malerische Aussicht auf die Momella-Seen und den Ngurdoto Krater. Dichter Wald bietet Lebensraum für Affen, während die Seen von Tausenden Flamingos bevölkert werden. Optional: Ranger-geführte Wanderung.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' },
            { day: 4, title: 'Tarangire Nationalpark', location: 'Tarangire River', stats: 'Park der Giganten', desc: 'Pirschfahrt im Land der Elefanten und Baobabs. Hunderte Elefanten sammeln sich am Flussbett. Genießen Sie ein entspanntes Picknick mit Blick auf die Wildnis.', img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' },
            { day: 5, title: 'Besuch einer tansanischen Schule', location: 'Manyatta', stats: 'Massai Kultur', desc: 'Auf dem Weg zur Serengeti besuchen Sie ein Massai-Dorf. Lernen Sie Bräuche und Alltag in den Bomas kennen. Am Abend erreichen Sie Ihre Unterkunft inmitten der Serengeti.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
            { day: 6, title: 'Serengeti Nationalpark', location: 'Serengeti Plains', stats: 'Migration Spot', desc: 'Ganztägige Erkundung der weltberühmten Savanne. Je nach Saison folgen wir der Großen Migration – ein intensives Naturerlebnis, das nur Afrika bieten kann.', img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800' },
            { day: 7, title: 'Ngorongoro-Krater', location: 'UNESCO Welterbe', stats: 'Big Five Spot', desc: 'Abfahrt fast 600 Meter hinab in den Krater. 30.000 Tiere auf engstem Raum, darunter die seltenen Spitzmaulnashörner. Picknick im Krater vor der Rückkehr zur Lodge.', img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' },
            { day: 8, title: 'Inlandsflug nach Sansibar', location: 'Zanzibar Shores', stats: 'Flug: 1h', desc: 'Vom Festland ins Inselparadies. Transfer zum Flughafen und Flug auf die Gewürzinsel. Ihr Strandhotel in Jambiani oder Nungwi erwartet Sie.', img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' },
            { day: 9, title: 'Empfehlung: Freizeit', location: 'Strand & Sonne', stats: 'Entspannung', desc: 'Weiße Sandstrände und türkisfarbenes Meer. Genießen Sie erfrischende Cocktails und den goldenen Sonnenuntergang am Ozean.', img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' },
            { day: 10, title: 'Empfehlung: blaue Safari', location: 'Sandbank', stats: 'Schnorcheln', desc: 'Optionaler Bootsausflug mit traditionellen Schiffen. Schnorcheln in flachen Riffen und Mittagessen mit gegrilltem Fisch auf einer einsamen Sandbank.', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' },
            { day: 11, title: 'Empfehlung: Gewürztour', location: 'Spice Farm', stats: 'Düfte Afrikas', desc: 'Reise ins Inselinnere. Erfahren Sie, wie Vanille, Pfeffer und Muskat wachsen. Eine sensorische Reise durch Sansibars Geschichte.', img: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800' },
            { day: 12, title: 'Empfehlung: Strand und Tauchen', location: 'Nungwi Coast', stats: 'Unterwasserwelt', desc: 'Letzte Chance für einen geführten Tauchgang oder einfach pure Entspannung auf Ihrem Balkon mit Blick auf das Meer.', img: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800' },
            { day: 13, title: 'Empfehlung: Freizeit', location: 'Stone Town', stats: 'Historie', desc: 'Erkunden Sie die Gassen der historischen Altstadt oder verbringen Sie einen letzten ruhigen Tag am Strand.', img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' },
            { day: 14, title: 'Abreise & Transfer', location: 'Flughafen ZNZ', stats: 'Abschied', desc: 'Nach dem Frühstück Transfer zum Flughafen. Wir hoffen, wir konnten Ihre Wünsche in bleibende Erinnerungen verwandeln.', img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' },
            { day: 15, title: 'Landung in der Heimat', location: 'Home', stats: 'Ende der Reise', desc: 'Ankunft in der Heimat. Leider ist die Traumreise nun eine schöne Erinnerung. Bleiben Sie gesund und bis bald!', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200' }
          ]
        }
      ];

      for (const pkg of allPackages) {
        await setDoc(doc(firestore, 'packages', pkg.id), {
          ...pkg,
          isPublished: true,
          rating: 4.9,
          updatedAt: new Date().toISOString()
        }, { merge: true });
      }

      toast({ title: "CMS Synchronized", description: "Flagship packages updated with full narrative data." });
    } catch (error: any) {
      toast({ variant: "destructive", title: "Setup Failed", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-secondary">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2 text-lg">Digital operations for Serengeti Dreams.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleSeedData} disabled={loading} variant="secondary" className="gap-2 rounded-2xl h-12 px-6">
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Initialize CMS Data
          </Button>
          <Button asChild variant="outline" className="gap-2 rounded-2xl h-12 px-6">
            <Link href="/" target="_blank"><Eye className="w-4 h-4" /> View Site</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm rounded-[2rem] overflow-hidden bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</CardTitle>
              <stat.icon className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{stat.value}</div>
              <p className="text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-wider">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
