import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: 'familien-safari-12-tage',
  title: '12 Tage Familien Safari & Kids Adventure',
  slug: 'familien-safari-12-tage',
  category: 'Erlebnisreise',
  durationDays: 12,
  startingPrice: 3499,
  heroDescription: 'Speziell für Familien konzipiert: Unvergessliche Abenteuer, kindgerechte Lodges und ein Reisetempo, das alle glücklich macht.',
  imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920',
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
      desc: 'Ankunft in Arusha. Wir bringen Sie in Ihre Lodge mit großem Garten und Pool, damit sich die Kinder nach dem Flug austoben können.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Arusha Nationalpark', 
      title: 'Kleine Ranger', 
      desc: 'Erste Safari-Eindrücke. Wir beobachten Giraffen und die lustigen Stummelaffen. Eine leichte Wanderung ist auch für kleine Beine perfekt.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Tarangire', 
      title: 'Elefanten-Zählung', 
      desc: 'Im Tarangire Nationalpark gibt es so viele Elefanten wie nirgendwo sonst. Ein echtes Highlight für Kinder, die Dickhäuter aus der Nähe zu sehen.', 
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Manyara See', 
      title: 'Flamingos & Löwen', 
      desc: 'Wir suchen die baumkletternden Löwen und bestaunen das rosa Meer aus Flamingos. Der Park ist kompakt und kurzweilig.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Karatu Region', 
      title: 'Schule in Tansania', 
      desc: 'Wir besuchen eine lokale Grundschule. Ein wertvoller Austausch für Ihre Kinder, um zu sehen, wie Gleichaltrige in Afrika lernen und spielen.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Ngorongoro Krater', 
      title: 'Picknick im Vulkan', 
      desc: 'Abstieg in den Krater. Wir machen ein ausgiebiges Picknick mitten in der Wildnis, umgeben von Zebras und Gnus.', 
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Serengeti', 
      title: 'König der Löwen', 
      desc: 'Wir erreichen die echte Serengeti. Wir suchen nach "Simba" auf den Kopjes – genau wie im Film.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Serengeti', 
      title: 'Expeditions-Tag', 
      desc: 'Ein ganzer Tag Abenteuer. Wir folgen der Migration und lernen von unserem Guide alles über die Spurensuche im Busch.', 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' 
    },
    { 
      day: 9, 
      location: 'Sansibar', 
      title: 'Insel-Flug', 
      desc: 'Transfer zum Airstrip und kurzer Flug ins Paradies. Check-in in Ihrem familienfreundlichen Beach-Resort.', 
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' 
    },
    { 
      day: 10, 
      location: 'Sansibar', 
      title: 'Badespaß', 
      desc: 'Sonne, Sand und Meer. Das flache Wasser ist ideal für Kinder zum Planschen und Sandburgenbauen.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 11, 
      location: 'Prison Island', 
      title: 'Riesenschildkröten', 
      desc: 'Ein Bootsausflug zu den Riesenschildkröten. Die Kinder dürfen die jahrhundertealten Tiere füttern und streicheln.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 12, 
      location: 'Abreise', 
      title: 'Kwaheri!', 
      desc: 'Transfer zum Flughafen. Wir verabschieden uns von euch mit vielen neuen Geschichten im Gepäck. Gute Heimreise!', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
