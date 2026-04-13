
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '7-tage-sansibar',
  title: '7 Tage Sansibar: Kultur & Ozean',
  slug: '7-tage-sansibar',
  category: 'Signature',
  durationDays: 7,
  startingPrice: 2699,
  heroDescription: 'Tauchen Sie ein in die Magie der Gewürzinsel. Erleben Sie die historische Altstadt Stone Town und traumhafte Strände.',
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
      desc: 'Willkommen auf Sansibar! Wir bringen Sie in Ihr historisches Boutique-Hotel im Herzen der magischen Altstadt Stone Town.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Stone Town', 
      title: 'Kultur & Geschichte', 
      desc: 'Ein geführter Stadtrundgang zeigt Ihnen die Highlights: den ehemaligen Sklavenmarkt und die prächtigen geschnitzten Holztüren.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Spice Farms', 
      title: 'Insel der Gewürze', 
      desc: 'Besuch einer Bio-Gewürzfarm. Riechen und schmecken Sie Vanille und Zimt direkt vom Baum, bevor wir an die Nordküste fahren.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Nungwi', 
      title: 'Türkisfarbene Träume', 
      desc: 'Entspannter Tag am Strand von Nungwi. Genießen Sie das kristallklare Wasser und den puderweißen Sand unter Palmen.', 
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Mnemba Atoll', 
      title: 'Unterwasser-Safari', 
      desc: 'Bootstour zum Mnemba Atoll. Hier erwartet Sie eines der besten Schnorchelgebiete der Insel mit bunten Korallen.', 
      img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Nungwi', 
      title: 'Sonne & Segeln', 
      desc: 'Zum krönenden Abschluss genießen wir am späten Nachmittag eine Sunset Dhow Cruise entlang der Küste bei Musik.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Abreise', 
      title: 'Abschied vom Paradies', 
      desc: 'Nach dem Frühstück am Meer bringen wir Sie zurück zum Flughafen. Sie reisen mit der Wärme der Insel im Herzen heim.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
