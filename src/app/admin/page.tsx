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

  // Real-time queries for dashboard stats
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
          description: "Diese 15-tägige Pauschalreise vereint Abenteuer und Erholung in perfekter Weise: Nach der Landung am Kilimanjaro International Airport werden Sie herzlich empfangen und fahren nach Arusha, wo Sie das wahre Tansania in Ihrem eigenen Tempo erleben können.",
          highlights: ['Atemberaubende Tierbeobachtungen', 'Exklusive Lodge & Tented Camp', 'Abenteuer & Erholung', 'Alles gut organisiert', 'Inklusive Intl. Flug'], 
          imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
          itinerary: [
            { day: 1, title: 'Ankommen & Eintauchen', location: 'Arusha', stats: 'Distanz: 50km | 60 Min', desc: 'Fliegen Sie mit uns in den schönen tieferen Süden unserer Erdkugel und zwar nach Tanzania. Die Safari ruft! Nach der Ankunft werden Sie von unserem Reiseleiter empfangen und mit dem Auto in Ihre Unterkunft gebracht. Dort angekommen, können Sie sich von der Anreise erholen. Besuchen Sie Märkte, auf denen Sie frisches Obst und Gemüse, traditionelles Street Food und vieles mehr kaufen können.', img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' },
            { day: 2, title: 'Ankunft in Tanzania', location: 'Arusha', stats: 'Kultur & Markt', desc: 'In der Stadt können Sie das turbulente afrikanische Stadtleben hautnah miterleben. Besuchen Sie Märkte, auf denen Sie frisches Obst und Gemüse, traditionelles Street Food, Kleidung und vieles mehr kaufen oder bestaunen können. Fahren Sie z.B. mit einem Daladala, einem traditionellen Bus, um das tansanische Leben hautnah zu erfahren.', img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800' },
            { day: 3, title: 'Arusha Nationalpark', location: 'Momella Lakes', stats: '400 Vogelarten', desc: 'Der Arusha Nationalpark belohnt mit einer malerischen Aussicht auf die sieben Momella-Seen und den Ngurdoto Krater. Die Umgebung wechselt stetig zwischen Steppen, Dschungel und Hochgebirge. Im Osten des Parks ist ein dichter hoher Wald zu finden, welcher einen optimalen Lebensraum für verschiedenste Affen darstellt.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' },
            { day: 4, title: 'Tarangire Nationalpark', location: 'Tarangire River', stats: 'Hohe Elefantendichte', desc: 'Pirschfahrt im Park der Giganten. Bis zu 300 Elefanten suchen täglich im trockenen Flussbett nach unterirdischen Flüssen, während wandernde Gnus, Zebras, Büffel, Impalas und Gazellen die schrumpfenden Wasserlöcher bevölkern. Mittagessen bei einem Picknick mit Blick auf den Fluss.', img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' },
            { day: 5, title: 'Besuch einer tansanischen Schule', location: 'Karatu Region', stats: 'Maasai Kultur', desc: 'Besuch eines Massai-Dorfs (Manyatta). Lernen Sie Bräuche und Alltag der Bomas kennen. Die Massai erkennen Sie an ihrer traditionellen Kleidung (rote und blaue Laken) und dem wunderschönen afrikanischen Schmuck. Fahrt zum Übernachten in Ihre Unterkunft inmitten der Serengeti.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
            { day: 6, title: 'Serengeti Nationalpark', location: 'Serengeti Plains', stats: 'Migration Spot', desc: 'Ganztägige Safari in der weltberühmten Serengeti. Mitten in Tausenden muhenden Gnus und schnaubenden Zebras. Wenn Sie mitten in Tausenden von Gnus stehen und abends das Brüllen der Löwen hören, ist dies ein so intensives Erlebnis, wie es nur das ursprüngliche Afrika bieten kann.', img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800' },
            { day: 7, title: 'Ngorongoro-Krater', location: 'UNESCO Welterbe', stats: 'Big Five Spot', desc: 'Abfahrt fast 600 Meter hinab in den Krater. 30.000 Tiere auf engstem Raum, darunter einige der letzten erhaltenen Spitzmaulnashörner Tansanias. Sie genießen ein Picknick im Krater und fahren am späten Nachmittag in Ihre Unterkunft.', img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' },
            { day: 8, title: 'Inlandsflug nach Sansibar', location: 'Zanzibar Shores', stats: '1h Flugzeit', desc: 'Vom Festland auf die berühmte Insel Sansibar. Transfer zum Flughafen und Flug auf die Gewürzinsel. Beziehen Sie Ihr Strandhotel und lassen Sie die Seele baumeln. Sie haben genug Zeit, um am Strand die Seele baumeln zu lassen.', img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' },
            { day: 9, title: 'Empfehlung: Freizeit', location: 'Paje / Jambiani', stats: 'Strand & Sonne', desc: 'Genießen Sie die wunderschönen, sauberen, weißen Strände von Sansibar und schwimmen, schnorcheln oder tauchen Sie im kristallklaren, indischen Ozean. Bestaunen Sie am Abend den goldenen Sonnenuntergang.', img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' },
            { day: 10, title: 'Empfehlung: blaue Safari', location: 'Sandbank', stats: 'Schnorcheln', desc: 'Optionale Bootstour mit lokal gebauten Schiffen. Mittagessen mit gegrilltem Fisch, Reis und Linsen auf einer Sandbank oder einsamen Insel. Segeln auf einem traditionellen Kanu oder einfach nur entspannen.', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' },
            { day: 11, title: 'Empfehlung: Gewürztour', location: 'Inselinneres', stats: 'Düfte Afrikas', desc: 'Reisen Sie ins Inselinnere und lernen Sie, wie Vanille, Kakao und Pfeffer wachsen. Die berauschenden Aromen von frischem Kardamom, Zimt und Nelken werden ihre Sinne erfreuen.', img: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800' },
            { day: 12, title: 'Empfehlung: Strand und Tauchen', location: 'Nungwi Coast', stats: 'Unterwasserwelt', desc: 'Geführter Tauchgang oder einfach pure Entspannung auf Ihrem Balkon oder dem Strand Ihres schönen Hotels. Letzte Chance für einen geführten Tauchgang.', img: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800' },
            { day: 13, title: 'Empfehlung: Freizeit', location: 'Stone Town', stats: 'Historie', desc: 'Genießen Sie die wunderschönen Strände oder erkunden Sie die Gassen der historischen Altstadt Stone Town. Ein letzter Tag zur freien Verfügung.', img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' },
            { day: 14, title: 'Abreise & Transfer', location: 'Flughafen ZNZ', stats: 'Rückreise', desc: 'Nach einem reichhaltigen Frühstück Transfer zum Flughafen. Genießen Sie noch einmal die Eindrücke Tansanias und hören Sie letzte Geschichten über das afrikanische Land. We turn wishes into memories.', img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' },
            { day: 15, title: 'Landung in der Heimat', location: 'Home', stats: 'Willkommen zurück', desc: 'Die Traumreise ist jetzt eine schöne Erinnerung. Kommen Sie sicher nach Hause und bleiben Sie gesund. Wir freuen uns, Sie bald wieder bei uns begrüßen zu dürfen.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200' }
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

      toast({ title: "Global Registry Updated", description: "All flagship packages have been synchronized." });
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
          <Button 
            onClick={handleSeedData} 
            disabled={loading} 
            variant="secondary" 
            className="gap-2 rounded-2xl h-12 px-6"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            Initialize CMS Data
          </Button>
          <Button asChild variant="outline" className="gap-2 rounded-2xl h-12 px-6">
            <Link href="/" target="_blank">
              <Eye className="w-4 h-4" /> View Site
            </Link>
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
              <p className="text-[10px] text-muted-foreground mt-2 font-bold uppercase tracking-wider">
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
