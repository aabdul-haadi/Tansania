
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: 'familien-safari-12-tage',
  title: '12 Tage Familien Safari & Kids Adventure',
  slug: 'familien-safari-12-tage',
  category: 'Signature',
  durationDays: 12,
  startingPrice: 3499,
  heroDescription: 'Speziell für Familien konzipiert: Unvergessliche Abenteuer, kindgerechte Lodges und ein Reisetempo, das alle glücklich macht.',
  imageUrl: '/assets/images/home/pkg-04.png',
  highlights: [
    'Kid-Friendly Lodges mit Pools',
    'Gemäßigtes Reisetempo',
    'Bildungs-Momente in der Natur',
    'Sichere 4x4 Privat-Safari',
    'Zanzibar Beach Finale'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Jambo Familie!', 
      desc: 'Ankunft in Arusha. Wir bringen Sie in Ihre Lodge mit großem tropischen Garten und Pool, damit sich die Kinder nach dem Flug richtig austoben können.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Arusha Nationalpark', 
      title: 'Kleine Ranger auf Tour', 
      desc: 'Erste Safari-Eindrücke. Wir beobachten Giraffen und die lustigen Stummelaffen. Eine leichte Wanderung im Wald ist auch für kleine Beine perfekt.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Tarangire', 
      title: 'Elefanten-Zählung', 
      desc: 'Im Tarangire gibt es hunderte Elefanten. Ein echtes Highlight für Kinder, die Dickhäuter aus nächster Nähe in ihrem natürlichen Lebensraum zu sehen.', 
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Manyara See', 
      title: 'Flamingos & Baumlöwen', 
      desc: 'Wir suchen die baumkletternden Löwen und bestaunen das rosa Meer aus Flamingos. Der Park ist kompakt und bietet ständig neue Entdeckungen.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Karatu Region', 
      title: 'Schulbesuch & Austausch', 
      desc: 'Wir besuchen eine lokale Grundschule. Ein wertvoller Austausch für Ihre Kinder, um zu sehen, wie Gleichaltrige in Tansania lernen und spielen.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Ngorongoro Krater', 
      title: 'Picknick im Vulkan', 
      desc: 'Abstieg in den Krater. Wir machen ein ausgiebiges Picknick mitten in der Wildnis, umgeben von Zebras, Gnus und Gazellen.', 
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Serengeti', 
      title: 'König der Löwen Live', 
      desc: 'Wir erreichen die echte Serengeti. Wir suchen nach Löwen auf den charakteristischen Kopjes – genau wie in den großen Naturfilmen.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Serengeti', 
      title: 'Der Ruf der Wildnis', 
      desc: 'Ein ganzer Tag Abenteuer. Wir folgen den Spuren der Migration und lernen von unserem Experten-Guide alles über das Überleben im Busch.', 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' 
    },
    { 
      day: 9, 
      location: 'Sansibar', 
      title: 'Flug ins Paradies', 
      desc: 'Transfer zum Airstrip und kurzer Flug an die Küste. Check-in in Ihrem familienfreundlichen Beach-Resort mit direktem Strandzugang.', 
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' 
    },
    { 
      day: 10, 
      location: 'Sansibar', 
      title: 'Badespaß & Sandburgen', 
      desc: 'Sonne, Sand und Meer. Das flache Wasser des Indischen Ozeans ist ideal für Kinder zum Planschen und für gemeinsame Familienzeit.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 11, 
      location: 'Prison Island', 
      title: 'Die Riesenschildkröten', 
      desc: 'Ein Bootsausflug zu den sanften Riesen. Die Kinder dürfen die jahrhundertealten Schildkröten füttern und aus nächster Nähe erleben.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 12, 
      location: 'Abreise', 
      title: 'Gute Heimreise!', 
      desc: 'Transfer zum Flughafen. Wir verabschieden uns von euch mit vielen neuen Geschichten und Fotos im Gepäck. Bis zum nächsten Mal!', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
