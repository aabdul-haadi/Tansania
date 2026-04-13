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
  imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920',
  itineraryDays: [
    { day: 1, location: 'Arusha', title: 'Ankunft in Tansania', desc: 'Willkommen in Afrika! Ihr Guide erwartet Sie am Flughafen Kilimanjaro.' },
    { day: 2, location: 'Tarangire', title: 'Im Reich der Elefanten', desc: 'Erste Pirschfahrt im Tarangire Nationalpark.' },
    { day: 3, location: 'Lake Manyara', title: 'Vogelparadies & Löwen', desc: 'Entdecken Sie das Rift Valley und seine Tierwelt.' },
    { day: 4, location: 'Ngorongoro', title: 'Das achte Weltwunder', desc: 'Ganztägige Krater-Tour mit exklusivem Picknick.' },
    { day: 5, location: 'Serengeti', title: 'Endlose Weiten', desc: 'Fahrt in das Herz der zentralen Serengeti.' },
    { day: 6, location: 'Serengeti', title: 'Auf den Spuren der Migration', desc: 'Intensive Tierbeobachtungen in den Savannen.' },
    { day: 7, location: 'Sansibar', title: 'Flug ins Paradies', desc: 'Nach dem Busch wartet das Meer. Flug nach Sansibar.' },
    { day: 8, location: 'Stone Town', title: 'Gewürze & Geschichte', desc: 'Geführter Rundgang durch die historische Altstadt.' },
    { day: 9, location: 'Ostküste', title: 'Weiße Strände', desc: 'Entspannung pur in Ihrem Strand-Resort.' },
    { day: 10, location: 'Ostküste', title: 'Ozean-Abenteuer', desc: 'Optionale Bootstour oder Schnorcheln.' },
    { day: 11, location: 'Ostküste', title: 'Ruhe & Genuss', desc: 'Lassen Sie die Seele baumeln.' },
    { day: 12, location: 'Ostküste', title: 'Abschied vom Paradies', desc: 'Genießen Sie Ihren letzten vollen Tag.' },
    { day: 13, location: 'Abreise', title: 'Heimreise', desc: 'Transfer zum Flughafen und Rückflug.' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}