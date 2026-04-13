import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '11-tage-safari-sansibar',
  title: '11 Tage Safari & Sansibar Highlights',
  slug: '11-tage-safari-sansibar',
  category: 'Erlebnisreise',
  durationDays: 11,
  startingPrice: 2999,
  heroDescription: 'Kompakt und eindrucksvoll: Erleben Sie die Highlights Tansanias in einer perfekt abgestimmten 11-tägigen Reise.',
  imageUrl: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=1920',
  highlights: [
    'Big Five im Ngorongoro Krater',
    'Serengeti Safari Highlights',
    'Massai Dorf Begegnung',
    'Zanzibar Beach Relax',
    'Private 4x4 Expedition'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Willkommen in Afrika', 
      desc: 'Ihr Abenteuer beginnt mit der Ankunft am Kilimanjaro Airport. Wir bringen Sie in Ihre komfortable Lodge in Arusha, dem Tor zu den Nationalparks.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Tarangire', 
      title: 'Elefanten-Paradies', 
      desc: 'Ganztägige Pirschfahrten im Tarangire Nationalpark. Bestaunen Sie riesige Elefantenherden und die markanten Affenbrotbäume.', 
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Ngorongoro', 
      title: 'Die Krater-Safari', 
      desc: 'Wir steigen in den Krater hinab. In diesem "Garten Eden" beobachten wir Löwen, Nashörner und Büffel auf engstem Raum.', 
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Serengeti', 
      title: 'Fahrt in die Savanne', 
      desc: 'Wir erreichen die legendäre Serengeti. Die weiten Grasebenen scheinen endlos und sind die Heimat der größten Raubtierpopulationen.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Serengeti', 
      title: 'Pure Wildnis', 
      desc: 'Ein ganzer Tag voller Entdeckungen. Wir folgen den Spuren der Migration und suchen nach Geparden und Leoparden auf den Kopjes.', 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Sansibar', 
      title: 'Insel-Transfer', 
      desc: 'Vom Busch an den Strand. Ein Inlandsflug bringt Sie direkt nach Sansibar, wo Sie Ihr exklusives Resort an der Ostküste beziehen.', 
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Nungwi', 
      title: 'Sonne & Meer', 
      desc: 'Entspannung am weißen Puderzuckerstrand. Tauchen Sie in das kristallklare Wasser des Indischen Ozeans ein.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Nungwi', 
      title: 'Tropische Brisen', 
      desc: 'Genießen Sie die Vorzüge Ihres Resorts oder erkunden Sie das nahegelegene Riff bei einer Schnorcheltour.', 
      img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800' 
    },
    { 
      day: 9, 
      location: 'Stone Town', 
      title: 'Kultur & Gewürze', 
      desc: 'Ein Ausflug in die historische Altstadt Stone Town. Entdecken Sie verwinkelte Gassen und den Duft der Gewürzplantagen.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 10, 
      location: 'Sansibar', 
      title: 'Letzter Traumtag', 
      desc: 'Lassen Sie Ihre Reise bei einem Sunset-Drink Revue passieren. Ein letzter Tag im Paradies steht Ihnen zur freien Verfügung.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 11, 
      location: 'Abreise', 
      title: 'Heimkehr', 
      desc: 'Transfer zum Flughafen Sansibar. Mit viel afrikanischer Sonne im Herzen treten Sie Ihre individuelle Rückreise an.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
