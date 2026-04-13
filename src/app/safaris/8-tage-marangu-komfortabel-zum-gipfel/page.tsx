
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '8-tage-marangu-komfortabel-zum-gipfel',
  title: '8 Tage Marangu: Komfortabel zum Gipfel',
  slug: '8-tage-marangu-komfortabel-zum-gipfel',
  category: 'Expedition',
  durationDays: 8,
  startingPrice: 3199,
  heroDescription: 'Die klassische Route zum Uhuru Peak. Erleben Sie den Aufstieg auf der legendären "Coca-Cola Route" mit dem Komfort fester Berghütten.',
  imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920',
  highlights: [
    'Übernachtung in festen Hütten',
    'Klassische Coca-Cola Route',
    'Hohe Gipfelerfolgsquote',
    'Professionelle SDL-Begleitung',
    'Direkter Weg zum Uhuru Peak'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Ankunft am Kilimanjaro', 
      desc: 'Ihr Abenteuer beginnt mit der Abholung am Flughafen. Wir bringen Sie in Ihre erste Lodge, wo Sie sich ausruhen und Ihren Berg-Guide für ein ausführliches Briefing treffen.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Marangu Gate', 
      title: 'Durch den Regenwald', 
      desc: 'Start am Marangu Gate (1.860m). Der Weg führt durch dichten, tropischen Regenwald zur Mandara Hut. Beobachten Sie unterwegs Stummelaffen in den Baumwipfeln.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Horombo Hut', 
      title: 'Aufstieg in die Moorlandschaft', 
      desc: 'Wir verlassen den Wald und wandern durch offenes Heideland zur Horombo Hut (3.720m). Von hier aus haben Sie erste spektakuläre Ausblicke auf den Kibo und Mawenzi.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Zebra Rocks', 
      title: 'Akklimatisierungstag', 
      desc: 'Ein wichtiger Tag für die Höhenanpassung. Wir wandern zu den markant gestreiften Zebra Rocks und kehren zur Übernachtung wieder zur Horombo Hut zurück.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Kibo Hut', 
      title: 'Die Steinwüste', 
      desc: 'Wir durchqueren den "Sattel" zwischen Mawenzi und Kibo. Eine karge, mondähnliche Landschaft führt uns zur Kibo Hut (4.703m) am Fuße des Gipfelkegels.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Uhuru Peak', 
      title: 'Der finale Gipfelsturm', 
      desc: 'Gegen Mitternacht brechen wir auf. Über den Gilman\'s Point erreichen wir den Uhuru Peak (5.895m) bei Sonnenaufgang. Ein unbeschreiblicher Moment am höchsten Punkt Afrikas.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Marangu Gate', 
      title: 'Rückkehr ins Tal', 
      desc: 'Der Abstieg führt uns über Horombo zurück zum Marangu Gate. Hier erhalten Sie Ihr Gipfelzertifikat, bevor wir Sie zurück in den Komfort Ihrer Lodge nach Arusha bringen.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Abreise', 
      title: 'Abschied von Tansania', 
      desc: 'Nach einem letzten Frühstück in der Lodge transferieren wir Sie zum Flughafen. Sie reisen mit der stolzen Leistung einer Gipfelbesteigung und neuen Träumen heim.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
