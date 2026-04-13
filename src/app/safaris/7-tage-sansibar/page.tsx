import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '7-tage-sansibar',
  title: '7 Tage Sansibar: Kultur & Ozean',
  slug: '7-tage-sansibar',
  category: 'Sansibar',
  durationDays: 7,
  startingPrice: 2699,
  heroDescription: 'Tauchen Sie ein in die Magie der Gewürzinsel. Erleben Sie die historische Altstadt Stone Town und die traumhaften weißen Strände des Indischen Ozeans.',
  imageUrl: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=1920',
  highlights: [
    'Stone Town UNESCO Welterbe',
    'Gewürzplantagen Tour',
    'Bootstour & Schnorcheln',
    'Traumstrände in Nungwi',
    'Sunset Dhow Cruise'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Stone Town', 
      title: 'Ankunft im Orient', 
      desc: 'Willkommen auf Sansibar! Wir empfangen Sie am Flughafen und bringen Sie in Ihr historisches Boutique-Hotel im Herzen von Stone Town. Genießen Sie den ersten Abend in den verwinkelten Gassen.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Stone Town', 
      title: 'Kultur & Geschichte', 
      desc: 'Ein geführter Stadtrundgang zeigt Ihnen die Highlights von Stone Town: den ehemaligen Sklavenmarkt, das House of Wonders und die prächtigen geschnitzten Holztüren der Altstadt.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Spice Farms', 
      title: 'Insel der Gewürze', 
      desc: 'Wir verlassen die Stadt und besuchen eine Bio-Gewürzfarm. Riechen, tasten und schmecken Sie Nelken, Vanille und Zimt direkt vom Baum, bevor wir an die Nordküste weiterfahren.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Nungwi', 
      title: 'Türkisfarbene Träume', 
      desc: 'Ein entspannter Tag am Strand von Nungwi. Genießen Sie das kristallklare Wasser und den puderweißen Sand. Zeit für Wellness oder ein gutes Buch unter Palmen.', 
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Mnemba Atoll', 
      title: 'Unterwasser-Safari', 
      desc: 'Wir fahren mit einem traditionellen Boot zum Mnemba Atoll. Hier erwartet Sie eines der besten Schnorchelgebiete der Insel mit bunten Korallen und einer unglaublichen Fischvielfalt.', 
      img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Nungwi', 
      title: 'Sonne & Segeln', 
      desc: 'Der Vormittag steht zur freien Verfügung. Zum krönenden Abschluss genießen wir am späten Nachmittag eine Sunset Dhow Cruise entlang der Küste bei traditioneller Musik.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Abreise', 
      title: 'Abschied vom Paradies', 
      desc: 'Nach einem letzten Frühstück am Meer bringen wir Sie zurück zum Flughafen. Sie reisen mit der Wärme der Insel und unvergesslichen Erinnerungen im Gepäck zurück nach Hause.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
