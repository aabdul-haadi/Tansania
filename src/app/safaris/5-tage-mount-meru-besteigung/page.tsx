
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '5-tage-mount-meru-besteigung',
  title: '5 Tage Mount Meru Besteigung',
  slug: '5-tage-mount-meru-besteigung',
  category: 'Expedition',
  durationDays: 5,
  startingPrice: 2699,
  heroDescription: 'Erklimmen Sie Afrikas zweithöchsten Gipfel. Eine technisch anspruchsvolle und landschaftlich reizvolle Expedition.',
  imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920',
  highlights: [
    'Afrikas zweithöchster Gipfel',
    'Perfekte Kilimandscharo-Vorbereitung',
    'Wildtiere im Arusha Nationalpark',
    'Spektakulärer Blick auf den Kili',
    'Erfahrene Berg-Guides'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Briefing & Vorbereitung', 
      desc: 'Nach der Ankunft erfolgt der Ausrüstungs-Check und ein ausführliches Briefing mit Ihrem Experten-Guide über die Besteigung.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Miriakamba Hut', 
      title: 'Aufstieg durch den Wald', 
      desc: 'Start am Momella Gate. Wir durchqueren offenes Grasland mit Büffeln und Giraffen, bevor wir den Bergregenwald erreichen.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Saddle Hut', 
      title: 'Weg zum Sattel', 
      desc: 'Ein steiler Aufstieg führt uns durch die Heidemoor-Zone zur Saddle Hut mit fantastischem Blick auf den Kilimandscharo.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Socialist Peak', 
      title: 'Gipfelsturm & Abstieg', 
      desc: 'Gegen Mitternacht beginnt der finale Aufstieg zum Socialist Peak (4.566m). Sonnenaufgang am Gipfel genießen.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Abreise', 
      title: 'Rückkehr ins Tal', 
      desc: 'Die letzte Etappe führt uns zurück zum Momella Gate. Wir fahren zurück nach Arusha zur Erholung vor dem Heimflug.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
