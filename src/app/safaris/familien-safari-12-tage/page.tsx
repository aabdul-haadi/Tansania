
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
  itineraryDays: [
    { day: 1, location: 'Arusha', title: 'Willkommen Familie', desc: 'Entspannter Start in einer familienfreundlichen Lodge.' },
    { day: 2, location: 'Arusha NP', title: 'Kleine Entdecker', desc: 'Leichte Wanderung und erste Tierbeobachtungen.' },
    { day: 3, location: 'Tarangire', title: 'Elefanten-Zählung', desc: 'Spannende Pirschfahrten für Groß und Klein.' },
    { day: 4, location: 'Manyara', title: 'Naturerlebnis See', desc: 'Aktive Erkundung der Umgebung am Rift Valley.' },
    { day: 5, location: 'Karatu', title: 'Kultur & Alltag', desc: 'Einblicke in das Leben vor Ort.' },
    { day: 6, location: 'Ngorongoro', title: 'Abstieg ins Abenteuer', desc: 'Picknick im weltberühmten Vulkankrater.' },
    { day: 7, location: 'Serengeti', title: 'Safari-Helden', desc: 'Die weiten Ebenen der Serengeti entdecken.' },
    { day: 8, location: 'Serengeti', title: 'Löwen-Suche', desc: 'Auf den Spuren der Raubkatzen.' },
    { day: 9, location: 'Sansibar', title: 'Flug an den Strand', desc: 'Vom Busch direkt ins kühle Nass.' },
    { day: 10, location: 'Sansibar', title: 'Pool & Meer', desc: 'Spaß und Erholung für die ganze Familie.' },
    { day: 11, location: 'Sansibar', title: 'Schildkröten-Tour', desc: 'Besuch der Riesenschildkröten auf Prison Island.' },
    { day: 12, location: 'Abreise', title: 'Heimflug', desc: 'Rückreise mit Erinnerungen für ein ganzes Leben.' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
