import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: 'familien-safari-12-tage',
  title: '12 Tage Familien Safari',
  slug: 'familien-safari-12-tage',
  category: 'Erlebnisreise',
  durationDays: 12,
  startingPrice: 3499,
  heroDescription: 'Speziell für Familien konzipiert: Unvergessliche Abenteuer und kindgerechte Lodges in Tansanias Wildnis.',
  imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920',
  highlights: [
    'Kid-Friendly Lodges',
    'Gemäßigtes Reisetempo',
    'Pool & Strand Kombination',
    'Bildungs-Momente in der Natur',
    'Sichere 4x4 Privat-Safari'
  ],
  itineraryDays: [
    { day: 1, location: 'Arusha', title: 'Willkommen Familie', desc: 'Entspannter Start in einer familienfreundlichen Lodge mit Pool und tropischem Garten.', img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' },
    { day: 2, location: 'Arusha NP', title: 'Kleine Entdecker', desc: 'Leichte Wanderung und Beobachtung von Stummelaffen und Giraffen am Mount Meru.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' },
    { day: 3, location: 'Tarangire', title: 'Elefanten-Zählung', desc: 'Spannende Pirschfahrten zu den riesigen Herden unter den Affenbrotbäumen.', img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' },
    { day: 4, location: 'Manyara', title: 'Naturerlebnis See', desc: 'Beobachtung von Flamingos und baumkletternden Löwen in einem kompakten Park.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' },
    { day: 5, location: 'Karatu', title: 'Kultur & Alltag', desc: 'Einblicke in das Leben vor Ort und Besuch eines lokalen Projekts für Kinder.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
    { day: 6, location: 'Ngorongoro', title: 'Abstieg ins Abenteuer', desc: 'Picknick im weltberühmten Vulkankrater mit Sicht auf Löwen, Zebras und Gnus.', img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' },
    { day: 7, location: 'Serengeti', title: 'Safari-Helden', desc: 'Fahrt in die weiten Ebenen der Serengeti. Erste Sichtungen von großen Raubkatzen.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
    { day: 8, location: 'Serengeti', title: 'Löwen-Suche', desc: 'Einen ganzen Tag lang den Geheimnissen der Wildnis auf der Spur.', img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' },
    { day: 9, location: 'Sansibar', title: 'Flug an den Strand', desc: 'Vom Busch direkt ins kühle Nass. Flug auf die Insel für pure Familienentspannung.', img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' },
    { day: 10, location: 'Sansibar', title: 'Pool & Meer', desc: 'Spaß und Erholung für die ganze Familie an einem der schönsten Strände weltweit.', img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' },
    { day: 11, location: 'Sansibar', title: 'Schildkröten-Tour', desc: 'Besuch der Riesenschildkröten auf Prison Island und Zeit für Schnorcheln.', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' },
    { day: 12, location: 'Abreise', title: 'Heimflug', desc: 'Transfer zum Flughafen Sansibar und Rückreise mit tollen Familien-Erinnerungen.', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
