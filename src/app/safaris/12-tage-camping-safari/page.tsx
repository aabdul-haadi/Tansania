import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '12-tage-camping-safari',
  title: '12 Tage Camping Safari',
  slug: '12-tage-camping-safari',
  category: 'Abenteuer',
  durationDays: 12,
  startingPrice: 2799,
  heroDescription: 'Das authentischste Safari-Erlebnis: Übernachten Sie unter dem funkelnden Sternenhimmel.',
  imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920',
  highlights: [
    'Zelten in der Serengeti',
    'Busch-Atmosphäre pur',
    'Lagerfeuer-Gespräche',
    'Große Migration hautnah',
    'Authentische Wildnis-Küche'
  ],
  itineraryDays: [
    { day: 1, location: 'Arusha', title: 'Ankunft & Briefing', desc: 'Vorbereitung auf Ihre Camping-Expedition und Check der Ausrüstung.', img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' },
    { day: 2, location: 'Tarangire', title: 'Zelten bei den Riesen', desc: 'Erste Nacht im Zelt inmitten der majestätischen Elefantenherden.', img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' },
    { day: 3, location: 'Lake Manyara', title: 'Vogelparadies', desc: 'Safari am See und Camping am Rand des Großen Afrikanischen Grabenbruchs.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' },
    { day: 4, location: 'Serengeti', title: 'Busch-Camp', desc: 'Fahrt in die zentrale Serengeti und Aufbau des mobilen Busch-Camps.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
    { day: 5, location: 'Serengeti', title: 'Lagerfeuer-Nacht', desc: 'Erleben Sie die faszinierenden Geräusche der Wildnis hautnah am Feuer.', img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' },
    { day: 6, location: 'Serengeti', title: 'Migration Tracking', desc: 'Den Herden folgen und dort campen, wo die Natur am intensivsten ist.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
    { day: 7, location: 'Ngorongoro', title: 'Kraterrand-Camp', desc: 'Atemberaubende Aussichten vom Zeltplatz direkt am Kraterrand.', img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' },
    { day: 8, location: 'Lake Eyasi', title: 'Hadza Begegnung', desc: 'Besuch bei den Buschmännern und Einblick in ihre ursprüngliche Lebensweise.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
    { day: 9, location: 'Karatu', title: 'Rückkehr zum Komfort', desc: 'Letzte Nacht in einer festen Unterkunft nach den Tagen im Busch.', img: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800' },
    { day: 10, location: 'Arusha', title: 'Märkte & Kultur', desc: 'Zeit für Souvenirs und den Besuch der lokalen Märkte von Arusha.', img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' },
    { day: 11, location: 'Meru Forest', title: 'Abschluss-Wanderung', desc: 'Kleine Wandertour am Fuße des Mount Meru zum Ausklang der Reise.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' },
    { day: 12, location: 'Abreise', title: 'Heimreise', desc: 'Transfer zum Flughafen für Ihren individuellen Rückflug nach Europa.', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
