import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '12-tage-camping-safari',
  title: '12 Tage Camping Safari',
  slug: '12-tage-camping-safari',
  category: 'Abenteuer',
  durationDays: 12,
  startingPrice: 2799,
  heroDescription: 'Das authentischste Safari-Erlebnis: Übernachten Sie mitten in der Wildnis unter dem funkelnden Sternenhimmel der Serengeti.',
  imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920',
  highlights: ['Zelten in der Serengeti', 'Lagerfeuer unterm Sternenhimmel', 'Massai Dorfbesuch'],
  itineraryDays: [
    { day: 1, location: 'Arusha', title: 'Ankunft & Vorbereitung', desc: 'Briefing für Ihre Camping-Expedition.' },
    { day: 2, location: 'Tarangire', title: 'Erstes Camp', desc: 'Zelten inmitten der Elefantenherden.' },
    { day: 3, location: 'Lake Manyara', title: 'Vogelparadies', desc: 'Safari am See und Camping am Rift Valley.' },
    { day: 4, location: 'Serengeti', title: 'Aufbruch in die Weite', desc: 'Fahrt in die zentrale Serengeti.' },
    { day: 5, location: 'Serengeti', title: 'Lagerfeuer-Nacht', desc: 'Geräusche der Wildnis hautnah erleben.' },
    { day: 6, location: 'Serengeti', title: 'Migration Tracking', desc: 'Den Herden folgen und im Busch campen.' },
    { day: 7, location: 'Ngorongoro', title: 'Kraterrand-Camp', desc: 'Atemberaubende Aussicht vom Zeltplatz.' },
    { day: 8, location: 'Lake Eyasi', title: 'Kulturelle Begegnung', desc: 'Besuch bei den Hadzabe Buschmännern.' },
    { day: 9, location: 'Karatu', title: 'Rückkehr in die Zivilisation', desc: 'Letzte Nacht in einer festen Unterkunft.' },
    { day: 10, location: 'Arusha', title: 'Souvenirs & Märkte', desc: 'Zeit für Einkäufe in Arusha.' },
    { day: 11, location: 'Meru Forest', title: 'Abschluss-Wanderung', desc: 'Kleine Tour am Fuße des Mount Meru.' },
    { day: 12, location: 'Abreise', title: 'Heimreise', desc: 'Transfer zum Kilimanjaro Airport.' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
