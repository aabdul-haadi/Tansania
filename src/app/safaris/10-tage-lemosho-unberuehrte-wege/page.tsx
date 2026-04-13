
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '10-tage-lemosho-unberuehrte-wege',
  title: '10 Tage Lemosho: Unberührte Wege',
  slug: '10-tage-lemosho-unberuehrte-wege',
  category: 'Expedition',
  durationDays: 10,
  startingPrice: 3599,
  heroDescription: 'Die exklusivste Route zum Uhuru Peak. Erleben Sie maximale Erfolgschancen und unberührte Natur auf Ihrem Weg zum Dach Afrikas.',
  imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920',
  highlights: [
    'Panoramablick auf das Shira-Plateau',
    'Höchste Erfolgsquote durch Zeit',
    'Professionelle Expeditions-Ausrüstung',
    'Zertifizierte Berg-Guides',
    'Vollständige Logistik-Betreuung'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Ankunft in Tansania', 
      desc: 'Willkommen am Fuße des Mount Meru. Wir empfangen Sie am Kilimanjaro International Airport und bringen Sie in Ihre erste Lodge.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Londorossi Gate', 
      title: 'Start am Berg', 
      desc: 'Die Expedition beginnt am Londorossi Gate. Der Aufstieg führt durch den dichten, unberührten Regenwald der Westflanke des Kilimandscharo.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Shira Plateau', 
      title: 'Über den Wolken', 
      desc: 'Die Landschaft wandelt sich zur Heidemoor-Zone. Wir erreichen das Shira Plateau und genießen einen fantastischen Ausblick auf den Kibo.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Moir Hut', 
      title: 'Akklimatisierung', 
      desc: 'Ein wichtiger Tag für die Höhenanpassung. Wir wandern in höhere Lagen und lagern am Fuße der spektakulären Lent Hills.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Barranco Wall', 
      title: 'Die Barranco Wand', 
      desc: 'Wir meistern die berühmte Wand. Ein spannender Aufstieg, der mit einem grandiosen Blick auf das Barranco-Tal belohnt wird.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Karanga Camp', 
      title: 'Tal der Kontraste', 
      desc: 'Eine kürzere Etappe zur Erholung. Wir queren mehrere Täler und erreichen das Karanga Camp vor dem finalen Gipfelsturm.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Barafu Camp', 
      title: 'Das Base Camp', 
      desc: 'Aufstieg zum Barafu Camp auf 4.600m. Hier bereiten wir uns auf den nächtlichen Aufstieg zum höchsten Punkt Afrikas vor.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Uhuru Peak', 
      title: 'Der Gipfel Afrikas', 
      desc: 'Gegen Mitternacht brechen wir auf. Bei Sonnenaufgang stehen wir am Uhuru Peak auf 5.895m. Ein Moment purer Gänsehaut.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 9, 
      location: 'Mweka Gate', 
      title: 'Abstieg ins Grüne', 
      desc: 'Rückkehr in den Regenwald. Am Mweka Gate erhalten Sie Ihr Zertifikat, bevor wir Sie zurück in den Komfort Ihrer Lodge bringen.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 10, 
      location: 'Abreise', 
      title: 'Abschied von Tansania', 
      desc: 'Nach dem Frühstück transferieren wir Sie zum Flughafen. Sie reisen mit lebenslangen Erinnerungen und einer großen Leistung heim.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
