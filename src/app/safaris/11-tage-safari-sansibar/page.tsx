
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '11-tage-safari-sansibar',
  title: '11 Tage Safari & Sansibar Highlights',
  slug: '11-tage-safari-sansibar',
  category: 'Wildlife',
  durationDays: 11,
  startingPrice: 2999,
  heroDescription: 'Kompakt und eindrucksvoll: Erleben Sie die Highlights Tansanias in einer perfekt abgestimmten 11-tägigen Reise.',
  imageUrl: '/assets/images/home/pkg-03.webp',
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
      title: 'Willkommen am Nil', 
      desc: 'Ihr Abenteuer beginnt mit der Ankunft am Kilimanjaro Airport. Wir bringen Sie in Ihre komfortable Lodge in Arusha für den ersten Abend.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Tarangire', 
      title: 'Baobab & Elefanten', 
      desc: 'Ganztägige Pirschfahrten im Tarangire Nationalpark. Bestaunen Sie riesige Elefantenherden zwischen den markanten Affenbrotbäumen.', 
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Ngorongoro', 
      title: 'Der Krater-Eden', 
      desc: 'Wir steigen in den Krater hinab. In diesem abgeschlossenen Ökosystem beobachten wir Löwen, Nashörner und Büffel auf engstem Raum.', 
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Serengeti', 
      title: 'Weite Ebenen', 
      desc: 'Wir erreichen die legendäre Serengeti. Die weiten Grasebenen scheinen endlos und sind die Heimat der größten Raubtierpopulationen Afrikas.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Serengeti', 
      title: 'Auf der Spur der Herden', 
      desc: 'Ein voller Tag voller Entdeckungen. Wir folgen den Spuren der Migration und suchen nach Geparden auf den charakteristischen Kopjes.', 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Sansibar', 
      title: 'Insel-Transfer', 
      desc: 'Vom Busch direkt an den Strand. Ein Inlandsflug bringt Sie nach Sansibar, wo Sie Ihr exklusives Resort an der traumhaften Ostküste beziehen.', 
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Nungwi', 
      title: 'Ankommen & Genießen', 
      desc: 'Entspannung am weißen Puderzuckerstrand. Tauchen Sie in das warme, kristallklare Wasser des Indischen Ozeans ein.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Nungwi', 
      title: 'Tropische Brisen', 
      desc: 'Genießen Sie die Vorzüge Ihres Resorts oder erkunden Sie das nahegelegene Riff bei einer geführten Schnorcheltour.', 
      img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800' 
    },
    { 
      day: 9, 
      location: 'Stone Town', 
      title: 'Kultur-Exkursion', 
      desc: 'Ein Ausflug in die historische Altstadt Stone Town. Entdecken Sie verwinkelte Gassen und den Duft der berühmten Gewürzplantagen.', 
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
      title: 'Auf Wiedersehen!', 
      desc: 'Transfer zum Flughafen Sansibar. Mit viel afrikanischer Sonne im Herzen treten Sie Ihre individuelle Rückreise nach Hause an.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
