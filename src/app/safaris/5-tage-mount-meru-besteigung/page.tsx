import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '5-tage-mount-meru-besteigung',
  title: '5 Tage Mount Meru Besteigung',
  slug: '5-tage-mount-meru-besteigung',
  category: 'Expedition',
  durationDays: 5,
  startingPrice: 2699,
  heroDescription: 'Erklimmen Sie Afrikas zweithöchsten Gipfel. Eine technisch anspruchsvolle und landschaftlich reizvolle Expedition im Herzen des Arusha Nationalparks.',
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
      title: 'Ankunft & Vorbereitung', 
      desc: 'Nach Ihrer Ankunft am Kilimanjaro Airport bringen wir Sie in Ihre Lodge. Hier erfolgt der Ausrüstungs-Check und ein ausführliches Briefing mit Ihrem Guide über die bevorstehende Besteigung des Mount Meru.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Miriakamba Hut', 
      title: 'Start am Momella Gate', 
      desc: 'Die Wanderung beginnt am Momella Gate. Wir durchqueren offenes Grasland, wo wir oft Büffel, Giraffen und Warzenschweine sehen, bevor wir den dichten Bergregenwald erreichen und zur Miriakamba Hut aufsteigen.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Saddle Hut', 
      title: 'Aufstieg zum Sattel', 
      desc: 'Ein steiler Aufstieg führt uns durch die Heidemoor-Zone zur Saddle Hut. Am Nachmittag unternehmen wir eine Akklimatisierungswanderung zum Little Meru, von wo aus wir einen atemberaubenden Blick auf den Kilimandscharo genießen.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Socialist Peak', 
      title: 'Gipfelsturm & Abstieg', 
      desc: 'Gegen Mitternacht beginnt der finale Aufstieg zum Socialist Peak (4.566m). Zum Sonnenaufgang stehen wir am Gipfel. Der anschließende Abstieg führt uns zurück zur Saddle Hut und weiter hinunter zur Miriakamba Hut.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Abreise', 
      title: 'Rückkehr nach Arusha', 
      desc: 'Die letzte Etappe führt uns zurück zum Momella Gate. Hier verabschieden wir uns von unserem Berg-Team und fahren zurück nach Arusha, wo Sie sich in Ihrer Lodge von der Expedition erholen können.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
