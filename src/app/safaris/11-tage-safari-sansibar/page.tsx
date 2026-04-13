import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '11-tage-safari-sansibar',
  title: '11 Tage Safari & Sansibar',
  slug: '11-tage-safari-sansibar',
  category: 'Erlebnisreise',
  durationDays: 11,
  startingPrice: 2999,
  heroDescription: 'Kompakt und eindrucksvoll: Erleben Sie die Highlights Tansanias in einer perfekt abgestimmten 11-tägigen Reise.',
  imageUrl: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1920',
  highlights: ['Elefanten im Tarangire', 'Massai Kultur erleben', 'Serengeti Tiermigration'],
  itineraryDays: [
    { day: 1, location: 'Arusha', title: 'Willkommen in Afrika', desc: 'Empfang und erste Nacht in Arusha.' },
    { day: 2, location: 'Tarangire', title: 'Elefanten-Paradies', desc: 'Pirschfahrten im Tarangire Nationalpark.' },
    { day: 3, location: 'Ngorongoro', title: 'Krater-Safari', desc: 'Abstieg in den weltberühmten Vulkankrater.' },
    { day: 4, location: 'Serengeti', title: 'Endlose Savanne', desc: 'Fahrt in das Herz der Serengeti.' },
    { day: 5, location: 'Serengeti', title: 'Auf Spurensuche', desc: 'Ganzjährige Wildtierbeobachtung in der Serengeti.' },
    { day: 6, location: 'Sansibar', title: 'Flug ins Paradies', desc: 'Inlandsflug an die tropische Küste.' },
    { day: 7, location: 'Nungwi', title: 'Sonne & Meer', desc: 'Entspannung am weißen Sandstrand.' },
    { day: 8, location: 'Nungwi', title: 'Ozean-Abenteuer', desc: 'Zeit für Wassersport oder Erholung.' },
    { day: 9, location: 'Stone Town', title: 'Kultur & Gewürze', desc: 'Entdeckung der historischen Altstadt.' },
    { day: 10, location: 'Sansibar', title: 'Insel-Brise', desc: 'Letzter voller Tag am Indischen Ozean.' },
    { day: 11, location: 'Abreise', title: 'Heimflug', desc: 'Transfer und Rückreise.' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
