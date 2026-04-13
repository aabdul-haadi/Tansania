
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: 'safari-sansibar-13-tage',
  title: '13 Tage Safari & Sansibar',
  slug: 'safari-sansibar-13-tage',
  category: 'Signature',
  durationDays: 13,
  startingPrice: 3699,
  heroDescription: 'Die perfekte Balance aus intensiven Wildtierbeobachtungen und exklusiver Entspannung am Indischen Ozean.',
  imageUrl: '/assets/images/home/pkg-02.webp',
  highlights: [
    'Big Five Pirschfahrten',
    'Massai Dorfbesuch',
    'Ngorongoro UNESCO Krater',
    'Zentral-Serengeti Safaris',
    'Premium Beach Resort'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Willkommen in Ostafrika', 
      desc: 'Ihre Safari beginnt in Arusha. Nach der Ankunft beziehen Sie Ihre Lodge und bereiten sich bei einem ersten Briefing auf die kommenden Tage vor.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Tarangire', 
      title: 'Die Welt der Giganten', 
      desc: 'Besuch des Tarangire Nationalparks. Wir beobachten riesige Elefantenherden unter den majestätischen Affenbrotbäumen am Tarangire Fluss.', 
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Manyara See', 
      title: 'Flamingos & Baumlöwen', 
      desc: 'Erkundung des Manyara Nationalparks. Wir suchen die berühmten baumkletternden Löwen und bestaunen das rosa Meer aus Flamingos am Seeufer.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Ngorongoro', 
      title: 'UNESCO Weltnaturerbe', 
      desc: 'Abstieg in den Ngorongoro Krater. Ein geschlossenes Ökosystem mit der höchsten Raubtierdichte Afrikas erwartet uns in einer grandiosen Kulisse.', 
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Karatu', 
      title: 'Massai Kultur Erleben', 
      desc: 'Besuch eines authentischen Massai Dorfes. Wir lernen die Lebensweise, Tänze und Traditionen dieses stolzen Hirtenvolkes persönlich kennen.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Serengeti', 
      title: 'Aufbruch in die Ebenen', 
      desc: 'Wir erreichen die zentrale Serengeti. Erste Pirschfahrten führen uns in das Herz des Parks, wo wir oft Löwenrudel auf den Kopjes entdecken.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Serengeti', 
      title: 'Safari Intensiv', 
      desc: 'Ein ganzer Tag im Wildtier-Paradies. Wir folgen der Migration und beobachten das faszinierende Zusammenspiel von Jägern und Gejagten.', 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Sansibar', 
      title: 'Flug ins Inselglück', 
      desc: 'Transfer zum Airstrip und kurzer Inlandsflug nach Sansibar. Ein privater Transfer bringt Sie direkt an den schneeweißen Sandstrand.', 
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800' 
    },
    { 
      day: 9, 
      location: 'Nungwi', 
      title: 'Ankommen & Genießen', 
      desc: 'Der erste Tag im Resort dient der totalen Entspannung. Genießen Sie den Ausblick auf das türkisblaue Wasser und den erstklassigen Service.', 
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800' 
    },
    { 
      day: 10, 
      location: 'Sansibar', 
      title: 'Ozean Abenteuer', 
      desc: 'Zeit für Schnorcheln oder Tauchen. Entdecken Sie die bunte Unterwasserwelt Sansibars oder entspannen Sie bei einer Massage.', 
      img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800' 
    },
    { 
      day: 11, 
      location: 'Stone Town', 
      title: 'Geschichte & Magie', 
      desc: 'Geführter Rundgang durch Stone Town. Wir tauchen ein in die Geschichte des Sultanats und den Duft der Gewürzmärkte.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 12, 
      location: 'Sansibar', 
      title: 'Sunset Dhow Fahrt', 
      desc: 'Zum Abschluss genießen wir eine Fahrt mit einer traditionellen Dhow bei Sonnenuntergang – ein unvergessliches Erlebnis am Indischen Ozean.', 
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800' 
    },
    { 
      day: 13, 
      location: 'Abreise', 
      title: 'Heimflug', 
      desc: 'Nach einem letzten Frühstück am Meer transferieren wir Sie zum Flughafen für Ihren individuellen Rückflug nach Hause.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
