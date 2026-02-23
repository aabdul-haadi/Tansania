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
          description: "Diese 15-tägige Pauschalreise vereint Abenteuer und Erholung in perfekter Weise: Nach der Landung am Kilimanjaro International Airport werden Sie herzlich empfangen und fahren nach Arusha, wo Sie das wahre Tansania in Ihrem eigenen Tempo erleben können. Die Safari im Norden beginnt im Arusha-Nationalpark, wo Sie beeindruckende Ausblicke auf die Momella-Seen und den Ngurdoto-Krater genießen, gefolgt von einem Besuch in Tarangire, wo Sie Elefantenherden zwischen den mächtigen Baobabs beobachten können. Erleben Sie authentische Begegnungen mit der lokalen Kultur der Massai, bevor Sie die weite Savanne der Serengeti entdecken. Der Höhepunkt der Safari ist der Ngorongoro-Krater, ein Naturwunder mit einer hohen Wilddichte. Nach der Safari fliegen Sie nach Sansibar für unvergessliche Erholung am weißen Sandstrand.",
          highlights: ['Atemberaubende Tierbeobachtungen', 'Exklusive Lodge & Tented Camp', 'Abenteuer & Erholung', 'Alles gut organisiert', 'Inklusive Intl. Flug'], 
          imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
          itineraryDays: [
            { 
              day: 1, 
              title: 'Ankommen & Eintauchen', 
              location: 'Arusha', 
              stats: 'Distanz: 50km | 60 Min', 
              desc: 'Ihre Traumreise beginnt jetzt! Fliegen Sie mit uns in den schönen tieferen Süden unserer Erdkugel und zwar nach Tanzania. Die Safari ruft... Machen Sie es sich bequem während des Flugs, schliessen Sie gelegentlich Ihre Augen und träumen etwas vor sich hin, was Ihnen so erwarten könnte... schöne Flora & Fauna, schöne und anspruchsvolle Jeepfahrten in den verschiedenen Nationalparks, angenehme und gemütliche Lodges nach einer Safari und Zeit für Entspannung... Nach der Ankunft am Kilimandscharo International Airport werden Sie von unserem Reiseleiter empfangen und mit dem Auto in Ihre Unterkunft gebracht.', 
              img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' 
            },
            { 
              day: 2, 
              title: 'Ankunft in Tanzania', 
              location: 'Arusha', 
              stats: 'Kultur & Markt', 
              desc: 'In Arusha können Sie das turbulente Stadtleben hautnah miterleben. Besuchen Sie Märkte mit frischem Obst, Street Food und traditioneller Kleidung. Eine Fahrt mit dem Daladala bringt Ihnen das tansanische Leben näher. Der Reiseleiter empfängt Sie für eine unvergessliche Safari.', 
              img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800' 
            },
            { 
              day: 3, 
              title: 'Arusha Nationalpark', 
              location: 'Arusha Region', 
              stats: '400 Vogelarten', 
              desc: 'Der Arusha Nationalpark belohnt mit einer malerischen Aussicht auf die sieben Momella-Seen und den Ngurdoto Krater. Die Umgebung ist vielfältig und wechselt stetig zwischen Steppen, Dschungel und Hochgebirge. Im Osten des Parks ist ein dichter hoher Wald zu finden, welcher einen optimalen Lebensraum für verschiedenste Affen darstellt. An den Momella Seen besteht die perfekte Möglichkeit, die reiche Vogelwelt, mehr als 400 Arten, zu beobachten. Darunter befinden sich Flamingos, die man in großen Schwärmen antrifft.', 
              img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
            },
            { 
              day: 4, 
              title: 'Tarangire Nationalpark', 
              location: 'Babati Rural', 
              stats: 'Land der Giganten', 
              desc: 'Morgendliche Pirschfahrt im Park der Elefanten und Baobabs. Der Fluss zieht in der Trockenzeit Wildtiere wie ein Magnet an. Highlights sind Herden von bis zu 300 Elefanten, Gnus, Zebras und Gazellen. Genießen Sie ein entspanntes Picknick mit Blick auf das Flussbett.', 
              img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' 
            },
            { 
              day: 5, 
              title: 'Besuch einer tansanischen Schule', 
              location: 'Maasai Manyatta', 
              stats: 'Kulturelle Begegnung', 
              desc: 'Auf dem Weg zum Serengeti Nationalpark durchqueren Sie das Naturschutzgebiet Ngorongoro und machen Ihren ersten Zwischenstopp in einem Massai-Dorf. Lernen Sie Bräuche und den Alltag in den Bomas kennen. Die Massai erkennen Sie an ihrer traditionellen Kleidung und ihrem bunten Schmuck.', 
              img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200' 
            },
            { 
              day: 6, 
              title: 'Serengeti Nationalpark', 
              location: 'Serengeti Weiten', 
              stats: 'Große Migration', 
              desc: 'Freuen Sie sich auf die Erkundung des berühmten Serengeti Nationalparks. Je nach Jahreszeit fahren wir zu den Orten, an denen sich große Gruppen von Gnus befinden. Es ist die Migration, für die die Serengeti am berühmtesten ist - über eine Million Gnus auf ihrer ewigen Suche nach Nahrung.', 
              img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800' 
            },
            { 
              day: 7, 
              title: 'Ngorongoro-Krater', 
              location: 'UNESCO Welterbe', 
              stats: 'Big Five Spot', 
              desc: 'Abfahrt 600 Meter hinab in den Krater. Eines der am dichtesten besiedelten Wildtiergebiete Afrikas mit 30.000 Tieren, darunter die seltenen Spitzmaulnashörner. Picknick im Krater vor der Rückkehr zur Lodge mit tansanischen Köstlichkeiten.', 
              img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' 
            },
            { 
              day: 8, 
              title: 'Inlandsflug nach Sansibar', 
              location: 'Zanzibar Shores', 
              stats: 'Flug: 1h', 
              desc: 'So, die schönen und abenteuerlichen Safari Tage haben ein Ende und es geht ab in den zweiten Teil Ihrer Traumreise. Sansibar und ihre schönen Strände, klares Wasser, schöne Ecken und freundliche Einheimische sind bereit Sie zu begrüßen! Heute geht es für Sie vom tansanischen Festland auf die berühmte und wunderschöne Insel Sansibar. Ihr Fahrer bringt Sie rechtzeitig zum Flughafen, damit Sie Ihren Flug pünktlich antreten können.', 
              img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' 
            },
            { 
              day: 9, 
              title: 'Empfehlung: Freizeit', 
              location: 'Strand & Sonne', 
              stats: 'Erholung pur', 
              desc: 'Genießen Sie die wunderschönen, sauberen, weißen Strände von Sansibar und schwimmen, schnorcheln oder tauchen Sie im kristallklaren, indischen Ozean. Genießen Sie hier und da einen erfrischenden Cocktail und bestaunen Sie am Abend den goldenen Sonnenuntergang.', 
              img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
            },
            { 
              day: 10, 
              title: 'Empfehlung: blaue Safari', 
              location: 'Sandbank Tour', 
              stats: 'Schnorcheln', 
              desc: 'Optionaler Bootsausflug zu unbewohnten Inseln. Schnorcheln in flachen Riffen und Mittagessen auf einer Sandbank mit gegrilltem Fisch, Reis und Linsen. Segeln auf einem traditionellen Kanu aus einem Mangobaum.', 
              img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
            },
            { 
              day: 11, 
              title: 'Empfehlung: Gewürztour', 
              location: 'Spice Farm', 
              stats: 'Düfte Afrikas', 
              desc: 'Optional können Sie heute ins Inselinnere von Sansibar reisen, um sich die duftenden Gewürzplantagen der Insel anzusehen. Sie lernen wie Vanille, Kakao, Pfeffer und viele andere Gewürze und Früchte wachsen und geerntet werden. Die berauschenden Aromen von frischem Kardamom, Zimt, Nelken und Muskat werden ihre Sinne erfreuen.', 
              img: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800' 
            },
            { 
              day: 12, 
              title: 'Empfehlung: Strand und Tauchen', 
              location: 'Unterwasserwelt', 
              stats: 'Nungwi Coast', 
              desc: 'Fragen Sie gerne in Ihrem Hotel nach einem geführten Tauchgang. Die Ausrüstung und ein Lehrer werden Ihnen gestellt. Sie können die Tage aber auch nutzen, um erneut Sansibar zu erkunden oder den Rest des Tages auf Ihrem Balkon oder dem Strand Ihres schönen Hotels zu genießen.', 
              img: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800' 
            },
            { 
              day: 13, 
              title: 'Empfehlung: Freizeit', 
              location: 'Stone Town', 
              stats: 'Kultur & Geschichte', 
              desc: 'Genießen Sie die wunderschönen, sauberen, weißen Strände von Sansibar und schwimmen, schnorcheln oder tauchen Sie im kristallklaren, indischen Ozean. Letzte Chance für Souvenirs oder einen Spaziergang durch die historischen Gassen.', 
              img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
            },
            { 
              day: 14, 
              title: 'Abreise & Transfer', 
              location: 'Flughafen ZNZ', 
              stats: 'Abschied', 
              desc: 'Am letzten Tag Ihrer Reise bringen wir Sie nach einem reichhaltigen Frühstück sicher zurück zum Flughafen, von wo aus Sie Ihren Rückflug nach Hause antreten. Genießen Sie noch einmal die Eindrücke Tansanias und lassen Sie sich von unserem Reiseleiter noch einige besondere Geschichten erzählen. We turn wishes into memories!', 
              img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' 
            },
            { 
              day: 15, 
              title: 'Landung in der Heimat', 
              location: 'Home', 
              stats: 'Ende der Reise', 
              desc: 'Leider ist die Traumreise jetzt eine schöne Erinnerung! Nach dem sicheren Flug, wünschen wir Ihnen einen guten und sicheren Heimweg. Passen Sie auf sich auf und bleiben Sie gesund. Wir würden uns freuen mehr von Ihren Erfahrungen zu hören. Ihr Tansania Reiseabenteuer Team.', 
              img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200' 
            }
          ]
        },
        { id: '13-day-safari-zanzibar', title: '13 Tage Safari & Sansibar', slug: '13-day-safari-zanzibar', category: 'SAFARI & SANSIBAR', durationDays: 13, startingPrice: 3699, highlights: ['Big Five Pirschfahrten', 'Massai Dorfbesuch', 'Ngorongoro UNESCO Krater', 'Sansibar Strände & Tauchen', 'Stone Town Stadttour'], isPublished: true, rating: 4.8 },
        { id: '11-day-safari-zanzibar', title: '11 Tage Safari & Sansibar', slug: '11-day-safari-zanzibar', category: 'SAFARI & SANSIBAR', durationDays: 11, startingPrice: 2999, highlights: ['Elefanten im Tarangire', 'Massai Kultur erleben', 'Serengeti Tiermigration', 'Ngorongoro Kraterfahrt', 'Sansibar Strände & Touren'], isPublished: true, rating: 4.7 },
        { id: '12-day-family-safari', title: '12 Tage Familien-Safari', slug: '12-day-family-safari', category: 'FAMILIENSAFARI', durationDays: 12, startingPrice: 3499, highlights: ['Big Five Pirschfahrten', 'Massai Dorfbesuch', 'Schulbesuch in Karatu', 'Lake Manyara Safari', 'Kinderfreundliche Lodges'], isPublished: true, rating: 4.9 },
        { id: '13-day-honeymoon', title: '13 Tage Flitterwochen', slug: '13-day-honeymoon', tag: 'Romantik', category: 'FLITTERWOHEN', durationDays: 13, startingPrice: 3899, highlights: ['Champagner bei Sonnenuntergang', 'Private Pirschfahrten', 'Luxuslodges & Villen', 'Sansibar Stranddinner', 'Heißluftballon Serengeti'], isPublished: true, rating: 5.0 },
        { id: '7-day-zanzibar', title: '7 Tage Sansibar', slug: '7-day-zanzibar', category: 'SANSIBAR', durationDays: 7, startingPrice: 2699, highlights: ['Stone Town Stadttour', 'Gewürzplantagen erkunden', 'Bootstour & Schnorcheln', 'Strand & Sonnenuntergang', 'Geführtes Taucherlebnis'], isPublished: true, rating: 4.6 },
        { id: '12-day-camping', title: '12 Tage Camping Safari', slug: '12-day-camping', tag: 'Budget', category: 'CAMPING SAFARI', durationDays: 12, startingPrice: 2799, highlights: ['Zelten in der Serengeti', 'Lagerfeuer unterm Sternenhimmel', 'Massai Dorfbesuch', 'Sansibar Traumstrände', 'Gewürz & Bootstour'], isPublished: true, rating: 4.5 },
        { id: '13-day-kili-kombi', title: '13 Tage Kilimandscharo Kombi', slug: '13-day-kili-kombi', tag: 'Kombi', category: 'KILIMANDSCHARO SAFARI', durationDays: 13, startingPrice: 4699, highlights: ['Safari in Top-Nationalparks', 'Kilimandscharo hautnah', 'Big Five & Natur', 'Sansibar: Strand & Kultur', 'Perfekt für Abenteuer'], isPublished: true, rating: 4.8 }
      ];

      for (const pkg of allPackages) {
        await setDoc(doc(firestore, 'packages', pkg.slug), {
          ...pkg,
          isPublished: true,
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
