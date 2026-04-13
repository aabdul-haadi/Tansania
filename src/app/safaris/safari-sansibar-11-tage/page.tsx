import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: 'safari-sansibar-11-tage',
  title: 'Safari & Sansibar',
  slug: 'safari-sansibar-11-tage',
  category: 'Kompaktreise',
  durationDays: 11,
  startingPrice: 2999,
  heroDescription: 'Kompakt und eindrucksvoll: Erleben Sie die Highlights Tansanias in einer perfekt abgestimmten 11-tägigen Reise.',
  imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1920',
  itineraryDays: [
    { day: 1, location: 'Arusha', title: 'Ankunft', desc: 'Transfer in Ihre erste Lodge.' },
    { day: 2, location: 'Tarangire', title: 'Safari Start', desc: 'Pirschfahrten im Elefanten-Park.' },
    { day: 3, location: 'Ngorongoro', title: 'Der Krater', desc: 'Begegnung mit den Big Five auf engstem Raum.' },
    { day: 4, location: 'Serengeti', title: 'Wildnis Pur', desc: 'Fahrt in die weiten Ebenen.' },
    { day: 5, location: 'Serengeti', title: 'Pirschfahrten', desc: 'Die Magie der Savanne erleben.' },
    { day: 6, location: 'Sansibar', title: 'Insel-Transfer', desc: 'Flug an die traumhafte Küste.' },
    { day: 7, location: 'Nungwi', title: 'Strandtage', desc: 'Entspannung am weißen Sandstrand.' },
    { day: 8, location: 'Nungwi', title: 'Sonne & Meer', desc: 'Kristallklares Wasser genießen.' },
    { day: 9, location: 'Nungwi', title: 'Freizeit', desc: 'Optionale Aktivitäten nach Wahl.' },
    { day: 10, location: 'Nungwi', title: 'Letzte Brise', desc: 'Abschiedsabend am Meer.' },
    { day: 11, location: 'Abreise', title: 'Transfer & Rückflug', desc: 'Ende Ihrer Traumreise.' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}