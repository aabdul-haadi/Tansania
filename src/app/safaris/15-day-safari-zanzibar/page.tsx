
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '15-day-safari-zanzibar',
  title: '15 Tage Safari in Tansania und Sansibar',
  slug: '15-day-safari-zanzibar',
  category: 'Erlebnisreise',
  durationDays: 15,
  startingPrice: 5399,
  heroDescription: 'Ihre private Safari-Expedition durch Tansania und exklusive Erholung auf Sansibar.',
  imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920',
  itineraryDays: [
    { day: 1, location: 'Arusha', title: 'Ankommen & Eintauchen', desc: 'Fliegen Sie mit uns in den tieferen Süden unserer Erdkugel. Ihre Safari ruft!' },
    { day: 2, location: 'Arusha', title: 'Ankunft in Tanzania', desc: 'Empfang am Kilimanjaro Airport und Transfer zur Lodge. Erholen Sie sich von der Reise.' },
    { day: 3, location: 'Arusha NP', title: 'Arusha Nationalpark', desc: 'Malerische Aussichten auf die Momella-Seen und den Ngurdoto Krater.' },
    { day: 4, location: 'Tarangire', title: 'Tarangire Nationalpark', desc: 'Erleben Sie die höchste Elefantendichte Tansanias entlang des Tarangire River.' },
    { day: 5, location: 'Ngorongoro', title: 'Maasai Kultur & Schulen', desc: 'Einblick in die Bräuche der Maasai auf dem Weg zur Serengeti.' },
    { day: 6, location: 'Serengeti', title: 'Endlose Weiten', desc: 'Pirschfahrten im Herz der Serengeti – Heimat der Big Five.' },
    { day: 7, location: 'Serengeti', title: 'Wildlife Monitoring', desc: 'Folgen Sie den Spuren der Großen Tierwanderung.' },
    { day: 8, location: 'Serengeti', title: 'Sunset Safari', desc: 'Unvergessliche Momente im goldenen Licht der Savanne.' },
    { day: 9, location: 'Ngorongoro', title: 'Vulkankrater Safari', desc: 'Abstieg in den Krater für Tierbeobachtungen auf engstem Raum.' },
    { day: 10, location: 'Manyara', title: 'Lake Manyara', desc: 'Flamingos und baumkletternde Löwen am Ufer des Rift Valley.' },
    { day: 11, location: 'Sansibar', title: 'Flug ins Paradies', desc: 'Vom Busch an den Strand. Transfer zum Indischen Ozean.' },
    { day: 12, location: 'Sansibar', title: 'Beach & Relax', desc: 'Entspannung an den schneeweißen Stränden von Nungwi.' },
    { day: 13, location: 'Sansibar', title: 'Stone Town Explorer', desc: 'Entdecken Sie die historischen Gassen und Gewürzmärkte.' },
    { day: 14, location: 'Sansibar', title: 'Sunset Dhow Cruise', desc: 'Den letzten Abend auf dem traditionellen Segelboot genießen.' },
    { day: 15, location: 'Abreise', title: 'Heimreise', desc: 'Transfer zum Flughafen und Rückflug mit vollem Koffer voller Erinnerungen.' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
