
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: 'safari-sansibar-11-tage',
  title: '11 Tage Safari & Sansibar Kompakt',
  slug: 'safari-sansibar-11-tage',
  category: 'Signature',
  durationDays: 11,
  startingPrice: 2999,
  heroDescription: 'Kompakt und eindrucksvoll: Erleben Sie die Highlights Tansanias in einer perfekt abgestimmten 11-tägigen Reise.',
  imageUrl: '/assets/images/home/pkg-03.webp',
  highlights: [
    'Tarangire Elefantenherden',
    'Ngorongoro Krater Safari',
    'Zentral-Serengeti Highlights',
    'Zanzibar Beach Relax',
    'Beste Logistik-Effizienz'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Ankunft am Kilimanjaro', 
      desc: 'Wir holen Sie am Flughafen ab und bringen Sie in Ihre erste Lodge. Der Abend dient der Erholung und Vorbereitung auf das Abenteuer.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Tarangire', 
      title: 'Safari-Auftakt', 
      desc: 'Erste Pirschfahrten im Tarangire Nationalpark. Die Landschaft ist geprägt von mächtigen Baobabs und hunderten Elefanten am Fluss.', 
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Ngorongoro', 
      title: 'Der Krater-Boden', 
      desc: 'Abstieg in den weltberühmten Krater. Hier begegnen Ihnen Löwen, Zebras und mit etwas Glück das seltene schwarze Nashorn.', 
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Serengeti', 
      title: 'Zentrum der Wildnis', 
      desc: 'Wir erreichen die Serengeti. Erste Safari in der Seronera-Region, dem Herzen des Parks mit einer extrem hohen Raubtierdichte.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Serengeti', 
      title: 'Unendliche Savanne', 
      desc: 'Ein voller Tag in der Serengeti. Wir erkunden die endlosen Ebenen und folgen dem Ruf der Wildnis auf der Suche nach Geparden.', 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Sansibar', 
      title: 'Insel-Hopping', 
      desc: 'Wir fliegen vom Busch direkt an die Küste. Ein privater Transfer bringt Sie in Ihr Beach Resort an der wunderschönen Nordostküste.', 
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Nungwi', 
      title: 'Weiße Strände', 
      desc: 'Ankommen und einfach nur entspannen. Genießen Sie den weichen Sand und die warme Brise des Indischen Ozeans.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Nungwi', 
      title: 'Azurblaues Glück', 
      desc: 'Zeit für Schnorcheln, Stand-up Paddling oder einfach nur ein gutes Buch am Pool. Es ist Ihre Zeit im Paradies.', 
      img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800' 
    },
    { 
      day: 9, 
      location: 'Nungwi', 
      title: 'Insel-Entdeckungen', 
      desc: 'Optionaler Ausflug nach Stone Town oder eine geführte Gewürztour. Entdecken Sie die reiche Geschichte der Insel.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 10, 
      location: 'Sansibar', 
      title: 'Sonnenuntergang am Meer', 
      desc: 'Genießen Sie einen letzten Sonnenuntergang am Indischen Ozean. Ein perfekter Abschiedsabend in den Tropen.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 11, 
      location: 'Abreise', 
      title: 'Gute Heimreise', 
      desc: 'Transfer zum Flughafen Sansibar. Wir verabschieden Sie mit unvergesslichen Erinnerungen an das echte Tansania.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
