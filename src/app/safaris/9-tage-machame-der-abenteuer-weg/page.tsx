
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '9-tage-machame-der-abenteuer-weg',
  title: '9 Tage Machame: Der Abenteuer-Weg',
  slug: '9-tage-machame-der-abenteuer-weg',
  category: 'Expedition',
  durationDays: 9,
  startingPrice: 2499,
  heroDescription: 'Erleben Sie die spektakulärste Route zum Uhuru Peak. Die Machame Route bietet atemberaubende Landschaften und optimale Akklimatisierung.',
  imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920',
  highlights: [
    'Spektakuläre Barranco Wall',
    'Optimale Akklimatisierung',
    'Abwechslungsreiche Klimazonen',
    'Übernachtung in Zeltcamps',
    'Legendäre "Whiskey-Route"'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Willkommen am Berg', 
      desc: 'Ankunft am Kilimanjaro Airport und Transfer zu Ihrer Lodge. Erstes Kennenlernen Ihres Teams und ausführliche Besprechung der Route.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Machame Gate', 
      title: 'Durch den Urwald', 
      desc: 'Start am Machame Gate. Der Aufstieg führt durch dichten Regenwald zum Machame Camp. Achten Sie auf die exotische Flora und Fauna am Wegesrand.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Shira Camp', 
      title: 'Über den Wolken', 
      desc: 'Wir verlassen den Wald und steigen über Felsen zum Shira Plateau auf. Von hier genießen wir einen grandiosen Blick auf den Kibo-Gipfel.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Lava Tower', 
      title: 'Alpine Wüste', 
      desc: 'Wir steigen zum Lava Tower (4.600m) auf, um uns optimal zu akklimatisieren, bevor wir zum Barranco Camp wieder absteigen.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Barranco Wall', 
      title: 'Die Barranco Wand', 
      desc: 'Ein echtes Highlight: Wir erklimmen die berühmte Barranco Wall. Keine technische Kletterei, aber ein spannendes Abenteuer mit grandioser Aussicht.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Barafu Camp', 
      title: 'Das Base Camp', 
      desc: 'Aufstieg zum Barafu Camp auf 4.673m. Wir bereiten uns auf den nächtlichen Gipfelsturm vor und genießen die Ruhe vor dem Sturm.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Uhuru Peak', 
      title: 'Gipfelglück', 
      desc: 'Gegen Mitternacht brechen wir auf. Bei Sonnenaufgang stehen wir am Uhuru Peak (5.895m). Der höchste Punkt Afrikas gehört Ihnen!', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Arusha Region', 
      title: 'Rückkehr ins Grüne', 
      desc: 'Wir steigen zum Mweka Gate ab und erhalten unsere Urkunden. Ein privater Transfer bringt Sie zurück in den Luxus Ihrer Lodge in Arusha.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 9, 
      location: 'Abreise', 
      title: 'Auf Wiedersehen', 
      desc: 'Transfer zum Flughafen. Sie reisen mit der Erfahrung Ihres Lebens und dem Gefühl, etwas Großartiges erreicht zu haben, nach Hause.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
