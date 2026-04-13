import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '11-tage-safari-sansibar',
  title: '11 Tage Safari & Sansibar',
  slug: '11-tage-safari-sansibar',
  category: 'Erlebnisreise',
  durationDays: 11,
  startingPrice: 2999,
  heroDescription: 'Kompakt und eindrucksvoll: Erleben Sie die Highlights Tansanias in einer perfekt abgestimmten Reise.',
  imageUrl: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1920',
  highlights: [
    'Big Five im Ngorongoro Krater',
    'Serengeti Safari Highlights',
    'Massai Dorf Begegnung',
    'Zanzibar Beach Relax',
    'Private 4x4 Expedition'
  ],
  itineraryDays: [
    { day: 1, location: 'Arusha', title: 'Willkommen in Afrika', desc: 'Empfang am Flughafen und Transfer zu Ihrer ersten Unterkunft in Arusha.', img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' },
    { day: 2, location: 'Tarangire', title: 'Elefanten-Paradies', desc: 'Ganztägige Pirschfahrten im Tarangire Nationalpark, bekannt für seine Riesen.', img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' },
    { day: 3, location: 'Ngorongoro', title: 'Die Krater-Safari', desc: 'Abstieg in den weltberühmten Vulkankrater für Beobachtungen der Big Five.', img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' },
    { day: 4, location: 'Serengeti', title: 'Endlose Savanne', desc: 'Fahrt in das Herz der Serengeti und erste Pirschfahrten in der weiten Ebene.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
    { day: 5, location: 'Serengeti', title: 'Auf Spurensuche', desc: 'Ganzjährige Wildtierbeobachtung und Verfolgung der Großen Tierwanderung.', img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' },
    { day: 6, location: 'Sansibar', title: 'Flug ins Paradies', desc: 'Transfer zum Airstrip und Inlandsflug an die tropische Küste Sansibars.', img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' },
    { day: 7, location: 'Nungwi', title: 'Sonne & Meer', desc: 'Entspannung an den weißen Sandstränden und Baden im türkisfarbenen Wasser.', img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' },
    { day: 8, location: 'Nungwi', title: 'Ozean-Abenteuer', desc: 'Zeit für Wassersport, Schnorcheln oder einfach die Seele baumeln lassen.', img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800' },
    { day: 9, location: 'Stone Town', title: 'Kultur & Gewürze', desc: 'Entdeckung der historischen Altstadt und Besuch der berühmten Gewürzmärkte.', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' },
    { day: 10, location: 'Sansibar', title: 'Insel-Brise', desc: 'Letzter voller Tag am Indischen Ozean – genießen Sie den Sonnenuntergang.', img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' },
    { day: 11, location: 'Abreise', title: 'Heimflug', desc: 'Transfer zum Flughafen Sansibar und individuelle Rückreise.', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
