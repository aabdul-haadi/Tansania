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
    { day: 1, location: 'Arusha', title: 'Ankunft in Tansania', desc: 'Willkommen am Fuße des Meru. Transfer zu Ihrer Lodge und erste Nacht in Afrika.' },
    { day: 2, location: 'Londorossi Gate', title: 'Start der Expedition', desc: 'Fahrt zum Londorossi Gate und Beginn des Aufstiegs durch den dichten Regenwald.' },
    { day: 3, location: 'Shira Plateau', title: 'Über den Wolken', desc: 'Wanderung zum Shira Plateau mit fantastischen Aussichten auf das weite Umland.' },
    { day: 4, location: 'Moir Hut', title: 'Die Weite der Berge', desc: 'Akklimatisierungswanderung in höhere Lagen und Lager unterhalb des Lent Hills.' },
    { day: 5, location: 'Barranco Wall', title: 'Die Barranco Wand', desc: 'Meisterung der berühmten Wand und Abstieg in das malerische Barranco Tal.' },
    { day: 6, location: 'Karanga Camp', title: 'Tal der Kontraste', desc: 'Ein kürzerer Aufstieg zur optimalen Akklimatisierung vor dem Gipfelsturm.' },
    { day: 7, location: 'Barafu Camp', title: 'Das Base Camp', desc: 'Vorbereitung auf den finalen Aufstieg zum Gipfel bei eisigen Temperaturen.' },
    { day: 8, location: 'Uhuru Peak', title: 'Der Gipfel Afrikas', desc: 'Sonnenaufgang am höchsten Punkt des Kontinents – ein unbeschreibliches Gefühl.' },
    { day: 9, location: 'Mweka Gate', title: 'Abstieg ins Grüne', desc: 'Rückkehr in den Regenwald, Übergabe der Zertifikate und Transfer nach Arusha.' },
    { day: 10, location: 'Abreise', title: 'Abschied vom Kilimandscharo', desc: 'Transfer zum Flughafen und Heimreise mit unvergesslichen Erinnerungen.' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}