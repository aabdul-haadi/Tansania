
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '13-tage-kombi-safari-komplett',
  title: '13 Tage Kombi Safari Komplett',
  slug: '13-tage-kombi-safari-komplett',
  category: 'Signature',
  durationDays: 13,
  startingPrice: 4699,
  heroDescription: 'Vom ewigen Eis des Kilimandscharo bis zum Korallenriff Sansibars. Erleben Sie Tansania in seiner vollen, beeindruckenden Bandbreite.',
  imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920',
  highlights: [
    'Kili hautnah erleben',
    'Big Five Safari Abenteuer',
    'Sansibar Strand Erholung',
    'Flug vom Busch an die Küste',
    'Premium Lodge Kollektion'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Ankunft im Safari-Hub', 
      desc: 'Empfang am Flughafen und Transfer in Ihre stilvolle Lodge. Wir bereiten uns gemeinsam auf die kommenden 13 Tage voller Kontraste vor.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Kilimandscharo', 
      title: 'Berg-Impressionen', 
      desc: 'Ein Tagesausflug zum Fuße des Kilimandscharo. Wir wandern durch Bergregenwälder und genießen die imposante Kulisse des höchsten Berges Afrikas.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Tarangire', 
      title: 'Elefanten-Paradies', 
      desc: 'Wir starten unsere Safari im Tarangire Nationalpark. Die Begegnungen mit den riesigen Elefantenherden sind hier besonders nah und intensiv.', 
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Ngorongoro', 
      title: 'Das Wunder des Kraters', 
      desc: 'Frühmorgendlicher Abstieg in den Ngorongoro Krater. Einzigartige Tiervielfalt in einer Landschaft, die weltweit ihresgleichen sucht.', 
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Serengeti', 
      title: 'In die endlose Weite', 
      desc: 'Wir erreichen die Serengeti. Die Fahrt über den Kraterrand hinunter in die weiten Grasebenen markiert den Beginn eines neuen Safari-Kapitels.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Serengeti', 
      title: 'Jagd am Morgen', 
      desc: 'Eine Pirschfahrt zum Sonnenaufgang bietet die besten Chancen, Löwen und Leoparden in Aktion zu erleben. Später folgen wir den Herden der Migration.', 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Sansibar', 
      title: 'Vom Busch zum Strand', 
      desc: 'Ein Inlandsflug bringt Sie direkt von der Serengeti auf die Insel Sansibar. Check-in in Ihrem exklusiven Resort direkt am Meer.', 
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Sansibar', 
      title: 'Tropische Träume', 
      desc: 'Ein ganzer Tag zur freien Verfügung. Lassen Sie die Seele baumeln, genießen Sie den weißen Sand und das warme Wasser des Indischen Ozeans.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 9, 
      location: 'Sansibar', 
      title: 'Azurblaue Ruhe', 
      desc: 'Entspannen Sie am Pool oder erkunden Sie das nahegelegene Korallenriff. Es ist Ihre Zeit für absolute Regeneration nach der Safari.', 
      img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800' 
    },
    { 
      day: 10, 
      location: 'Stone Town', 
      title: 'Swahili Kulturerbe', 
      desc: 'Ausflug in die historische Altstadt Stone Town. Wir erkunden die verwinkelten Gassen und lernen die reiche Geschichte der Gewürzinsel kennen.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 11, 
      location: 'Spice Farm', 
      title: 'Insel der Gewürze', 
      desc: 'Geführte Tour über eine Gewürzplantage. Erfahren Sie, warum Sansibar seit Jahrhunderten als das Zentrum des Gewürzhandels gilt.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 12, 
      location: 'Sansibar', 
      title: 'Sunset Dhow Cruise', 
      desc: 'Ein letzter magischer Abend auf einem traditionellen Segelschiff. Wir gleiten dem Sonnenuntergang entgegen und genießen die Stille.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 13, 
      location: 'Abreise', 
      title: 'Rückreise', 
      desc: 'Transfer zum Flughafen Sansibar. Sie treten die Heimreise mit vielen Geschichten und neuer Energie aus dem Herzen Afrikas an.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
