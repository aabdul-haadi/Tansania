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
    { day: 1, location: 'Arusha', title: 'Willkommen in Afrika', desc: 'Empfang am Flughafen und Transfer zu Ihrer ersten Unterkunft in Arusha.' },
    { day: 2, location: 'Tarangire', title: 'Elefanten-Paradies', desc: 'Ganztägige Pirschfahrten im Tarangire Nationalpark, bekannt für seine Riesen.' },
    { day: 3, location: 'Ngorongoro', title: 'Die Krater-Safari', desc: 'Abstieg in den weltberühmten Vulkankrater für Beobachtungen der Big Five.' },
    { day: 4, location: 'Serengeti', title: 'Endlose Savanne', desc: 'Fahrt in das Herz der Serengeti und erste Pirschfahrten in der weiten Ebene.' },
    { day: 5, location: 'Serengeti', title: 'Auf Spurensuche', desc: 'Ganzjährige Wildtierbeobachtung und Verfolgung der Großen Tierwanderung.' },
    { day: 6, location: 'Sansibar', title: 'Flug ins Paradies', desc: 'Transfer zum Airstrip und Inlandsflug an die tropische Küste Sansibars.' },
    { day: 7, location: 'Nungwi', title: 'Sonne & Meer', desc: 'Entspannung an den weißen Sandstränden und Baden im türkisfarbenen Wasser.' },
    { day: 8, location: 'Nungwi', title: 'Ozean-Abenteuer', desc: 'Zeit für Wassersport, Schnorcheln oder einfach die Seele baumeln lassen.' },
    { day: 9, location: 'Stone Town', title: 'Kultur & Gewürze', desc: 'Entdeckung der historischen Altstadt und Besuch der berühmten Gewürzmärkte.' },
    { day: 10, location: 'Sansibar', title: 'Insel-Brise', desc: 'Letzter voller Tag am Indischen Ozean – genießen Sie den Sonnenuntergang.' },
    { day: 11, location: 'Abreise', title: 'Heimflug', desc: 'Transfer zum Flughafen Sansibar und individuelle Rückreise.' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}