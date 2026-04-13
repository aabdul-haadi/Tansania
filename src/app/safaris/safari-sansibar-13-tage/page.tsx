import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: 'safari-sansibar-13-tage',
  title: '13 Tage Safari & Sansibar',
  slug: 'safari-sansibar-13-tage',
  category: 'Erlebnisreise',
  durationDays: 13,
  startingPrice: 3699,
  heroDescription: 'Die perfekte Balance aus intensiven Wildtierbeobachtungen und exklusiver Entspannung am Indischen Ozean.',
  imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1920',
  highlights: [
    'Tarangire Elefantenherden',
    'Ngorongoro Kraterboden Tour',
    'Zentral-Serengeti Safaris',
    'Stone Town Kulturerbe',
    'Beach Resort Entspannung'
  ],
  itineraryDays: [
    { day: 1, location: 'Arusha', title: 'Willkommen in Afrika', desc: 'Ankunft am Kilimanjaro Airport und Transfer zu Ihrer ersten Safari-Lodge.', img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' },
    { day: 2, location: 'Tarangire', title: 'Im Reich der Riesen', desc: 'Pirschfahrten im Park der Elefanten und Baobabs. Ein beeindruckender Start in die Wildnis.', img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' },
    { day: 3, location: 'Manyara', title: 'Vogelparadies & Löwen', desc: 'Entdeckung des Sodasees mit seinen Flamingos und der einzigartigen Flora am Grabenbruch.', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' },
    { day: 4, location: 'Ngorongoro', title: 'Das Naturwunder', desc: 'Ganztägige Tour im Vulkankrater. Begegnungen mit den Big Five auf engstem Raum.', img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' },
    { day: 5, location: 'Serengeti', title: 'Wildnis Pur', desc: 'Fahrt in die zentrale Serengeti. Erste Safari-Eindrücke in der unendlichen Ebene.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
    { day: 6, location: 'Serengeti', title: 'Auf Spurensuche', desc: 'Intensive Beobachtungen von Raubkatzen und den Herden der Migration im Herzen des Parks.', img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' },
    { day: 7, location: 'Sansibar', title: 'Insel-Transfer', desc: 'Inlandsflug an die tropische Küste. Ein privater Transfer bringt Sie in Ihr Beach Resort.', img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' },
    { day: 8, location: 'Stone Town', title: 'Kultur & Gewürze', desc: 'Historischer Rundgang durch die Swahili-Stadt und Besuch lokaler Märkte.', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' },
    { day: 9, location: 'Ostküste', title: 'Weiße Strände', desc: 'Genießen Sie das süße Nichtstun am Indischen Ozean in Ihrem exklusiven Retreat.', img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' },
    { day: 10, location: 'Ostküste', title: 'Ozean-Abenteuer', desc: 'Optionale Bootstouren zum Schnorcheln oder Tauchen am vorgelagerten Riff.', img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800' },
    { day: 11, location: 'Ostküste', title: 'Ruhe & Genuss', desc: 'Ein weiterer Tag zur freien Verfügung in der tropischen Brise Sansibars.', img: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800' },
    { day: 12, location: 'Ostküste', title: 'Abschiedsabend', desc: 'Letzter voller Tag im Paradies. Genießen Sie den Sonnenuntergang am Strand.', img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' },
    { day: 13, location: 'Abreise', title: 'Heimflug', desc: 'Transfer zum Flughafen Sansibar für Ihre individuelle Rückreise.', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
