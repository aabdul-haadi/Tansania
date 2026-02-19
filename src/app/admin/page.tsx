
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

  const { data: pages } = useCollection(pagesQuery);
  const { data: blogs } = useCollection(blogsQuery);
  const { data: bookings } = useCollection(bookingsQuery);
  const { data: inquiries } = useCollection(inquiriesQuery);

  const stats = [
    { label: 'Total Pages', value: pages?.length || 0, icon: Globe, trend: 'Managed routes' },
    { label: 'Blog Posts', value: blogs?.length || 0, icon: FileText, trend: 'Published stories' },
    { label: 'Inquiries', value: inquiries?.length || 0, icon: MessageSquare, trend: 'New leads' },
    { label: 'Bookings', value: bookings?.length || 0, icon: CalendarCheck, trend: 'Confirmed trips' },
  ];

  const handleSeedData = async () => {
    if (!firestore || !user) return;
    setLoading(true);
    try {
      // 1. SEED PACKAGE
      const pkgId = '15-day-safari-zanzibar';
      await setDoc(doc(firestore, 'packages', pkgId), {
        id: pkgId,
        title: '15 Tage Safari in Tansania und Sansibar',
        slug: pkgId,
        subtitle: 'Erlebnisreise - Safari im Norden und Badeurlaub auf Sansibar',
        durationDays: 15,
        startingPrice: 5399,
        isPublished: true,
        highlights: [
          'Atemberaubende Tierbeobachtungen',
          'Exklusive Lodge & Tented Camp',
          'Abenteuer & Erholung',
          'Alles gut organisiert',
          'Inklusive Intl. Flug'
        ],
        description: 'Diese 15-tägige Pauschalreise vereint Abenteuer und Erholung in perfekter Weise: Nach der Landung am Kilimanjaro International Airport werden Sie herzlich empfangen und fahren nach Arusha, wo Sie das wahre Tansania in Ihrem eigenen Tempo erleben können.',
        itinerary: [
          { day: 1, title: 'Ankommen & Eintauchen', location: 'Arusha', desc: 'Fliegen Sie mit uns in den schönen tieferen Süden unserer Erdkugel und zwar nach Tanzania. Ihre Traumreise beginnt jetzt!', img: 'https://picsum.photos/seed/arrival/800/600' },
          { day: 2, title: 'Ankunft in Tanzania', location: 'Arusha', desc: 'Nach der Ankunft am Kilimandscharo International Airport werden Sie von unserem Reiseleiter empfangen und mit dem Auto in Ihre Unterkunft gebracht.', img: 'https://picsum.photos/seed/city/800/600' },
          { day: 3, title: 'Arusha Nationalpark', location: 'Arusha NP', desc: 'Der Arusha Nationalpark belohnt mit einer malerischen Aussicht auf die sieben Momella-Seen und den Ngurdoto Krater.', img: 'https://picsum.photos/seed/lakes/800/600' },
          { day: 4, title: 'Tarangire Nationalpark', location: 'Tarangire', desc: 'Eines der Highlights dieses Parks ist die hohe Populationsdichte an Elefanten. Herden von bis zu 300 Elefanten.', img: 'https://picsum.photos/seed/elephants/800/600' },
          { day: 5, title: 'Kulturelle Begegnung', location: 'Maasai Village', desc: 'Besuch eines Massai-Dorfes, einem Manyatta. Erhalten Sie Einblick in Bräuche und Alltag.', img: 'https://picsum.photos/seed/culture/800/600' },
          { day: 6, title: 'Serengeti Expedition', location: 'Serengeti', desc: 'Ganztägige Safari in der Serengeti. Chancen auf die große Migration, je nach Saison.', img: 'https://picsum.photos/seed/migration/800/600' },
          { day: 7, title: 'Ngorongoro-Krater', location: 'Ngorongoro', desc: 'Ein Naturwunder mit einer hohen Wilddichte. Die Chance, die Big Five zu erleben.', img: 'https://picsum.photos/seed/rhino/800/600' },
          { day: 8, title: 'Insel-Transfer', location: 'Zanzibar', desc: 'Inlandsflug nach Sansibar. Beziehen Ihr Strandhotel und genießen unvergessliche Erholung.', img: 'https://picsum.photos/seed/plane/800/600' },
          { day: 9, title: 'Sansibar Auszeit', location: 'Beach', desc: 'Genießen Sie die wunderschönen, sauberen, weißen Strände von Sansibar.', img: 'https://picsum.photos/seed/whitebeach/800/600' },
          { day: 10, title: 'Blaue Safari', location: 'Indian Ocean', desc: 'Optionale Bootstour. Schnorcheln in flachen, türkisfarbenen Gewässern.', img: 'https://picsum.photos/seed/boat/800/600' },
          { day: 11, title: 'Gewürz-Tour', location: 'Stone Town', desc: 'Besuch der duftenden Gewürzplantagen. Vanille, Kakao, Pfeffer und mehr.', img: 'https://picsum.photos/seed/spices/800/600' },
          { day: 12, title: 'Strand & Tauchen', location: 'Nungwi', desc: 'Erkunden Sie die farbenfrohe Unterwasserwelt oder entspannen Sie am Strand.', img: 'https://picsum.photos/seed/dive/800/600' },
          { day: 13, title: 'Goldener Sonnenuntergang', location: 'Paje', desc: 'Savor a refreshing cocktail and admire the golden sunset in the evening.', img: 'https://picsum.photos/seed/sunset/800/600' },
          { day: 14, title: 'Abschied von Afrika', location: 'Airport', desc: 'Sicherer Transfer zum Flughafen. Wir hoffen, wir konnten Ihre Wünsche in Erinnerungen verwandeln.', img: 'https://picsum.photos/seed/airport/800/600' },
          { day: 15, title: 'Heimreise', location: 'Home', desc: 'Ankunft in der Heimat mit Koffern voller Erinnerungen an ein unvergleichliches Abenteuer.', img: 'https://picsum.photos/seed/memory/800/600' }
        ],
        faqs: [
          { q: 'Was ist in dieser 15 tage safari enthalten?', a: 'Internationale Flüge, Unterkünfte, alle Pirschfahrten, Inlandsflug nach Sansibar und Verpflegung laut Plan.' },
          { q: 'Ist die Reise für Familien geeignet?', a: 'Ja, diese Kombination aus Abenteuer und Strand ist ideal für Familien mit Kindern ab 6 Jahren.' }
        ],
        updatedAt: new Date().toISOString()
      }, { merge: true });

      // 2. SEED BLOG POST
      const blogId = 'packing-guide-savannah-to-shore';
      await setDoc(doc(firestore, 'blogPosts', blogId), {
        id: blogId,
        slug: blogId,
        title: 'The Ultimate Packing Guide: From Savannah to Shore',
        excerpt: 'Packing for a 15-day journey through the rugged Serengeti and the humid beaches of Zanzibar requires precision. Here is our expert checklist.',
        category: 'Planning',
        status: 'PUBLISHED',
        authorName: 'Sophie Williams',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        coverImage: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1200',
        contentMarkdown: `Packing for Tanzania is about balancing utility with comfort. You'll be traversing dust-blown plains in the morning and dining by the ocean at night. 

### The Safari Essentials
Lightweight, breathable fabrics in neutral tones (khaki, beige, olive) are your best friends. Avoid bright colors that attract tsetse flies.
- **Binoculars**: Don't rely on your guide's pair. Having your own makes every lion sighting personal.
- **Layers**: Savannah mornings are cold. Bring a high-quality fleece or windbreaker.
- **Sun Protection**: The equatorial sun is relentless. A wide-brimmed hat and SPF 50+ are mandatory.

### Transitioning to Zanzibar
When you fly from Arusha to Stone Town, the climate shifts from dry heat to tropical humidity. 
- **Linen Apparel**: Perfect for the island breeze.
- **Modest Wear**: Stone Town is culturally conservative. Ensure shoulders and knees are covered for city tours.
- **Water Shoes**: Essential for exploring the coral reefs of Paje.

### Technology & Gear
- **Power Banks**: Many camps run on solar.
- **Extra Memory Cards**: You will take more photos than you think.
- **Universal Adapter**: Type G (UK style) is standard in Tanzania.`
      }, { merge: true });

      toast({ title: "CMS Registry Updated", description: "Package and flagship blog post have been seeded." });
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
