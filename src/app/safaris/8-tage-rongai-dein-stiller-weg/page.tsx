
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '8-tage-rongai-dein-stiller-weg',
  title: '8 Tage Rongai: Dein stiller Weg',
  slug: '8-tage-rongai-dein-stiller-weg',
  category: 'Expedition',
  durationDays: 8,
  startingPrice: 2999,
  heroDescription: 'Entdecken Sie die wilde Nordseite des Kilimandscharo. Eine abgelegene Route mit weiten Panoramablicken und unberührter Natur.',
  imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920',
  highlights: [
    'Start an der Nordseite',
    'Abgeschiedene, ruhige Pfade',
    'Panoramablick auf Kenia',
    'Einzigartige Bergvegetation',
    'Privater Expeditions-Standard'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Ankunft am Kilimandscharo', 
      desc: 'Herzlich willkommen in Tansania. Wir empfangen Sie am Flughafen und bringen Sie in Ihre Lodge. Hier erfolgt die finale Vorbereitung und der Ausrüstungs-Check.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Simba Camp', 
      title: 'Start im Norden', 
      desc: 'Fahrt zum Rongai Gate. Der Aufstieg beginnt durch Pinienwälder und Maisfelder, bevor wir das Simba Camp am Rande der Moorland-Zone erreichen.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Second Cave', 
      title: 'Weite Aussichten', 
      desc: 'Wir wandern stetig bergauf mit fantastischen Blicken auf den Kibo und die weiten Ebenen Kenias im Norden. Übernachtung im Second Cave Camp.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Kikelewa Camp', 
      title: 'Abseits der Pfade', 
      desc: 'Der Weg führt uns durch unberührtes Gelände abseits der Hauptrouten zum Kikelewa Camp. Die Stille der Nordflanke ist hier besonders spürbar.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Mawenzi Tarn', 
      title: 'Unter den Zinnen', 
      desc: 'Ein steilerer Aufstieg bringt uns zum Mawenzi Tarn Camp, das direkt unter den zerklüfteten Zinnen des Mawenzi liegt. Ein spektakulärer Lagerplatz.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'School Hut', 
      title: 'Vorbereitung auf den Gipfel', 
      desc: 'Wir durchqueren die Steinwüste des Sattels und erreichen die School Hut (4.800m). Der Nachmittag dient der Ruhe vor dem nächtlichen Aufstieg.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Uhuru Peak', 
      title: 'Der Gipfel Afrikas', 
      desc: 'Gegen Mitternacht beginnt das große Finale. Wir erreichen den Kraterrand am Gilman\'s Point und schließlich den Uhuru Peak auf 5.895m. Abstieg zum Horombo Camp.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Abreise', 
      title: 'Rückkehr ins Tal', 
      desc: 'Der letzte Abstieg führt uns über Horombo zurück zum Marangu Gate. Nach der Zertifikatsübergabe bringen wir Sie zum Flughafen für Ihren Heimflug.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
