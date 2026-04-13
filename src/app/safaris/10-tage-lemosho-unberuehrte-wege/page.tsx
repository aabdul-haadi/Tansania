import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '10-tage-lemosho-unberuehrte-wege',
  title: '10 Tage Lemosho: Unberührte Wege',
  slug: '10-tage-lemosho-unberuehrte-wege',
  category: 'Expedition',
  durationDays: 10,
  startingPrice: 3599,
  heroDescription: 'Die exklusivste Route zum Uhuru Peak. Erleben Sie maximale Erfolgschancen und unberührte Natur auf dem Weg zum Gipfel des Kilimandscharo.',
  imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920',
  highlights: ['Höchste Erfolgsquote', 'Wenig begangene Route', 'Premium Ausrüstung'],
  itineraryDays: [
    { day: 1, location: 'Arusha', title: 'Ankunft in Tansania', desc: 'Willkommen am Fuße des Meru. Transfer zu Ihrer Lodge.' },
    { day: 2, location: 'Londorossi Gate', title: 'Start der Expedition', desc: 'Beginn des Aufstiegs durch den Regenwald.' },
    { day: 3, location: 'Shira Plateau', title: 'Über den Wolken', desc: 'Wanderung zum Shira Plateau mit fantastischen Aussichten.' },
    { day: 4, location: 'Moir Hut', title: 'Die Weite der Berge', desc: 'Akklimatisierungswanderung in höhere Lagen.' },
    { day: 5, location: 'Barranco Wall', title: 'Die Barranco Wand', desc: 'Meisterung der berühmten Wand und Lager im Tal.' },
    { day: 6, location: 'Karanga Camp', title: 'Tal der Kontraste', desc: 'Kurzer Aufstieg zur optimalen Akklimatisierung.' },
    { day: 7, location: 'Barafu Camp', title: 'Base Camp', desc: 'Vorbereitung auf den finalen Gipfelsturm.' },
    { day: 8, location: 'Uhuru Peak', title: 'Der Gipfel Afrikas', desc: 'Sonnenaufgang am höchsten Punkt des Kontinents.' },
    { day: 9, location: 'Mweka Gate', title: 'Abstieg ins Grüne', desc: 'Rückkehr in den Regenwald und Zertifikat-Übergabe.' },
    { day: 10, location: 'Abreise', title: 'Abschied vom Kilimandscharo', desc: 'Transfer zum Flughafen und Heimreise.' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
