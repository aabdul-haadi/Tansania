import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: 'safari-sansibar-13-tage',
  title: '13 Tage Safari & Sansibar Luxury Combo',
  slug: 'safari-sansibar-13-tage',
  category: 'Erlebnisreise',
  durationDays: 13,
  startingPrice: 3699,
  heroDescription: 'Die perfekte Balance aus intensiven Wildtierbeobachtungen und exklusiver Entspannung am Indischen Ozean.',
  imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1920',
  highlights: [
    'Tarangire Elefantenherden',
    'Ngorongoro Kraterboden Tour',
    'Zentral-Serengeti Safaris',
    'Stone Town Kulturerbe',
    'Beach Resort Entspannung'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Herzlich Willkommen', 
      desc: 'Ankunft am Kilimanjaro Airport. Wir empfangen Sie persönlich und bringen Sie in Ihre Boutique-Lodge am Stadtrand von Arusha.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Tarangire', 
      title: 'Im Reich der Riesen', 
      desc: 'Wir starten unsere Safari im Tarangire Nationalpark. Riesige Baobab-Bäume und hunderte Elefanten am Flussufer prägen diesen Tag.', 
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Manyara See', 
      title: 'Flamingos & Aussicht', 
      desc: 'Besuch des Manyara Nationalparks am Afrikanischen Grabenbruch. Wir beobachten Flamingos und suchen nach baumkletternden Löwen.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Ngorongoro Krater', 
      title: 'Das Weltwunder', 
      desc: 'Abstieg in das riesige Vulkankraterbecken. Hier erleben Sie die höchste Raubtierdichte Afrikas hautnah in einem geschlossenen Ökosystem.', 
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Serengeti', 
      title: 'Endlose Weite', 
      desc: 'Fahrt in die legendäre Serengeti. Wir genießen ein Picknick auf dem Weg und erste Pirschfahrten bei Sonnenuntergang.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Serengeti', 
      title: 'Wildnis Pur', 
      desc: 'Ein voller Tag zur Erkundung der Serengeti. Wir folgen den großen Gnu- und Zebraherden der Migration über die goldenen Ebenen.', 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Sansibar', 
      title: 'Flug ins Paradies', 
      desc: 'Vom Busch direkt an den Strand. Ein Inlandsflug bringt Sie nach Sansibar, wo Sie Ihr exklusives Strandresort an der Ostküste beziehen.', 
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Stone Town', 
      title: 'Gewürze & Geschichte', 
      desc: 'Geführter Rundgang durch Stone Town (UNESCO Welterbe) und Besuch der Gewürzplantagen. Ein Tag für alle Sinne.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 9, 
      location: 'Sansibar', 
      title: 'Tropische Ruhe', 
      desc: 'Entspannen Sie an den weißen Sandstränden. Das türkisfarbene Wasser des Indischen Ozeans lädt zum Schwimmen ein.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 10, 
      location: 'Sansibar', 
      title: 'Ozean Abenteuer', 
      desc: 'Tag zur freien Verfügung. Optional können Sie schnorcheln, tauchen oder einen Ausflug in den Jozani Forest machen.', 
      img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800' 
    },
    { 
      day: 11, 
      location: 'Sansibar', 
      title: 'Insel Brise', 
      desc: 'Genießen Sie den Luxus Ihres Resorts. Ein weiterer Tag für Wellness und Entspannung unter Palmen.', 
      img: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800' 
    },
    { 
      day: 12, 
      location: 'Sansibar', 
      title: 'Abschiedsabend', 
      desc: 'Letzter voller Tag im Paradies. Wir arrangieren ein privates Dinner am Strand zum krönenden Abschluss.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 13, 
      location: 'Abreise', 
      title: 'Kwaheri!', 
      desc: 'Transfer zum Flughafen Sansibar. Wir sagen Auf Wiedersehen mit unvergesslichen Geschichten im Gepäck.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
