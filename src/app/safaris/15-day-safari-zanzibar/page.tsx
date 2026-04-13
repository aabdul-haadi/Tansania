import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '15-day-safari-zanzibar',
  title: '15 Tage Safari in Tansania und Sansibar',
  slug: '15-day-safari-zanzibar',
  category: 'Erlebnisreise',
  durationDays: 15,
  startingPrice: 5399,
  heroDescription: 'Ihre private Safari-Expedition durch Tansania und exklusive Erholung auf Sansibar.',
  imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920',
  highlights: [
    'Große Tierwanderung erleben',
    'Private Nil-zu-Savanne Logistik',
    'Exklusive Lodge-Kollektion',
    'Deutschsprachige Expertenbegleitung',
    'Inselparadies Sansibar'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Ankommen & Eintauchen', 
      desc: 'Ihre Traumreise beginnt! Fliegen Sie mit uns in den schönen Süden unserer Erdkugel. Die Safari ruft... Machen Sie es sich bequem und träumen Sie von unberührter Natur.',
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800'
    },
    { 
      day: 2, 
      location: 'Arusha City', 
      title: 'Willkommen in Tansania', 
      desc: 'Empfang am Flughafen Kilimanjaro und Transfer zu Ihrer Lodge. Tauchen Sie ein in das pulsierende Leben Arushas und besuchen Sie lokale Märkte.',
      img: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800'
    },
    { 
      day: 3, 
      location: 'Arusha Nationalpark', 
      title: 'Die Momella-Seen', 
      desc: 'Entdecken Sie Giraffen und seltene Stummelaffen im dichten Regenwald am Fuße des Mount Meru. Ein Paradies für Naturfotografen.',
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
    },
    { 
      day: 4, 
      location: 'Tarangire Nationalpark', 
      title: 'Im Reich der Elefanten', 
      desc: 'Riesige Baobab-Bäume und hunderte Elefanten am Flussufer prägen diesen einzigartigen Park. Ein echtes Wildlife-Highlight.',
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
    },
    { 
      day: 5, 
      location: 'Ngorongoro Region', 
      title: 'Maasai Kultur', 
      desc: 'Besuch eines authentischen Maasai-Dorfes. Erfahren Sie mehr über die Bräuche und den Alltag dieses stolzen Volkes auf dem Weg in die Serengeti.',
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
    },
    { 
      day: 6, 
      location: 'Zentral-Serengeti', 
      title: 'Endlose Weiten', 
      desc: 'Pirschfahrten in der legendären Serengeti. Wir suchen nach Löwen, Leoparden und Geparden auf den charakteristischen Kopjes.',
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800'
    },
    { 
      day: 7, 
      location: 'Nord-Serengeti', 
      title: 'Migration Tracking', 
      desc: 'Wir folgen den riesigen Gnuherden auf ihrem Weg nach Norden. Ein Naturschauspiel von unvergleichlicher Dimension.',
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
    },
    { 
      day: 8, 
      location: 'Mara Region', 
      title: 'Flussüberquerung', 
      desc: 'Spannung am Mara River. Mit Glück beobachten wir eines der dramatischen Crossings, bei denen die Herden den Fluss bezwingen.',
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
    },
    { 
      day: 9, 
      location: 'Ngorongoro Krater', 
      title: 'Das Weltwunder', 
      desc: 'Abstieg in den Vulkankrater. Höchste Raubtierdichte und die Chance, das seltene schwarze Nashorn in freier Wildbahn zu sehen.',
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800'
    },
    { 
      day: 10, 
      location: 'Lake Manyara', 
      title: 'Vogelparadies', 
      desc: 'Flamingos am Ufer des Sodasees und baumkletternde Löwen machen diesen Park zu einem Juwel am Afrikanischen Grabenbruch.',
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
    },
    { 
      day: 11, 
      location: 'Sansibar', 
      title: 'Flug ins Inselglück', 
      desc: 'Vom Busch direkt an den Strand. Ein privater Transfer bringt Sie in Ihr exklusives Resort an der traumhaften Ostküste.',
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800'
    },
    { 
      day: 12, 
      location: 'Sansibar Strände', 
      title: 'Tropische Erholung', 
      desc: 'Weiße Sandstrände und türkisfarbenes Wasser laden zum Entspannen ein. Genießen Sie den erstklassigen Service Ihres Resorts.',
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800'
    },
    { 
      day: 13, 
      location: 'Stone Town', 
      title: 'Gewürze & Geschichte', 
      desc: 'Geführter Rundgang durch die historische Altstadt (UNESCO Welterbe) und Besuch der berühmten Gewürzplantagen.',
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800'
    },
    { 
      day: 14, 
      location: 'Sansibar', 
      title: 'Sunset Dhow Cruise', 
      desc: 'Ein letzter Abend im Paradies auf einer traditionellen Segeldhow. Erleben Sie den Sonnenuntergang vom Wasser aus.',
      img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800'
    },
    { 
      day: 15, 
      location: 'Abreise', 
      title: 'Abschied von Afrika', 
      desc: 'Transfer zum Flughafen Sansibar und Rückflug nach Hause mit unvergesslichen Erinnerungen im Gepäck.',
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800'
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
