import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '10-tage-lemosho-unberuehrte-wege',
  title: '10 Tage Lemosho: Unberührte Wege',
  slug: '10-tage-lemosho-unberuehrte-wege',
  category: 'Expedition',
  durationDays: 10,
  startingPrice: 3599,
  heroDescription: 'Die exklusivste Route zum Uhuru Peak. Erleben Sie maximale Erfolgschancen und unberührte Natur.',
  imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920',
  highlights: [
    'Panoramablick auf das Shira-Plateau',
    'Hohe Erfolgsquote durch Zeit',
    'Professionelle Expeditions-Ausrüstung',
    'Zertifizierte Berg-Guides',
    'Vollständige Logistik-Betreuung'
  ],
  itineraryDays: [
    { day: 1, location: 'Arusha', title: 'Ankunft in Tansania', desc: 'Willkommen am Fuße des Meru. Transfer zu Ihrer Lodge und Vorbereitung.', img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' },
    { day: 2, location: 'Londorossi Gate', title: 'Start der Expedition', desc: 'Fahrt zum Gate und Beginn des Aufstiegs durch dichten Bergregenwald.', img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' },
    { day: 3, location: 'Shira Plateau', title: 'Über den Wolken', desc: 'Wanderung zum Plateau mit fantastischen Aussichten auf das weite Umland.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
    { day: 4, location: 'Moir Hut', title: 'Die Weite der Berge', desc: 'Akklimatisierungswanderung in höhere Lagen und Lager am Fuße der Lent Hills.', img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' },
    { day: 5, location: 'Barranco Wall', title: 'Die Barranco Wand', desc: 'Meisterung der berühmten Wand und Abstieg in das malerische Barranco Tal.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
    { day: 6, location: 'Karanga Camp', title: 'Tal der Kontraste', desc: 'Ein kürzerer Aufstieg zur optimalen Akklimatisierung vor dem Gipfelsturm.', img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' },
    { day: 7, location: 'Barafu Camp', title: 'Das Base Camp', desc: 'Vorbereitung auf den finalen Aufstieg zum Gipfel bei eisigen Temperaturen.', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' },
    { day: 8, location: 'Uhuru Peak', title: 'Der Gipfel Afrikas', desc: 'Sonnenaufgang am höchsten Punkt des Kontinents – ein unbeschreibliches Gefühl.', img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' },
    { day: 9, location: 'Mweka Gate', title: 'Abstieg ins Grüne', desc: 'Rückkehr in den Regenwald, Zertifikatsübergabe und Transfer nach Arusha.', img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' },
    { day: 10, location: 'Abreise', title: 'Abschied', desc: 'Transfer zum Flughafen und Heimreise mit lebenslangen Erinnerungen.', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
