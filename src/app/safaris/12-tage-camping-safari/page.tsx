import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '12-tage-camping-safari',
  title: '12 Tage Camping Safari: Bush & Stars',
  slug: '12-tage-camping-safari',
  category: 'Abenteuer',
  durationDays: 12,
  startingPrice: 2799,
  heroDescription: 'Das authentischste Safari-Erlebnis: Übernachten Sie in hochwertigen Zelten unter dem funkelnden Sternenhimmel der Serengeti.',
  imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1920',
  highlights: [
    'Zelten in der Serengeti',
    'Busch-Atmosphäre pur',
    'Lagerfeuer-Gespräche',
    'Große Migration hautnah',
    'Authentische Wildnis-Küche'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Ankunft & Briefing', 
      desc: 'Herzlich willkommen! Wir treffen uns in Ihrer ersten Lodge für ein ausführliches Briefing und den Check der Camping-Ausrüstung.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Tarangire', 
      title: 'Zelten bei den Riesen', 
      desc: 'Wir schlagen unser erstes Lager im Tarangire Nationalpark auf. Schlafen Sie ein mit den Geräuschen der Elefanten in unmittelbarer Nähe.', 
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Lake Manyara', 
      title: 'Vogelparadies', 
      desc: 'Beobachtung der Flamingos am Seeufer. Wir campen am Rande des Afrikanischen Grabenbruchs mit spektakulärem Ausblick.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Serengeti', 
      title: 'Das Herz der Wildnis', 
      desc: 'Fahrt in die zentrale Serengeti. Wir errichten unser mobiles Camp im Herzen des Parks – echter Busch-Vibe garantiert.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Serengeti', 
      title: 'Lagerfeuer-Nacht', 
      desc: 'Ganztägige Pirschfahrten. Am Abend genießen wir eine frisch zubereitete Mahlzeit am Lagerfeuer unter dem Kreuz des Südens.', 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Serengeti', 
      title: 'Spurensuche im Sonnenaufgang', 
      desc: 'Wir starten bei Tagesanbruch, um die Jäger bei ihrer Arbeit zu beobachten. Camping bedeutet, eins mit der Natur zu sein.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Ngorongoro', 
      title: 'Am Kraterrand', 
      desc: 'Wir verlassen die Serengeti und schlagen unsere Zelte direkt am Kraterrand des Ngorongoro auf. Die Kälte der Nacht macht das Feuer noch gemütlicher.', 
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Lake Eyasi', 
      title: 'Kulturelle Begegnung', 
      desc: 'Besuch bei den Hadzabe Buschmännern. Wir lernen ihre Jagdmethoden kennen und campen in dieser archaischen Landschaft.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 9, 
      location: 'Karatu Region', 
      title: 'Rückkehr zum Komfort', 
      desc: 'Nach den Tagen im Zelt genießen wir eine Nacht in einer festen Lodge. Eine heiße Dusche und ein weiches Bett warten auf Sie.', 
      img: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800' 
    },
    { 
      day: 10, 
      location: 'Arusha Region', 
      title: 'Märkte & Menschen', 
      desc: 'Wir kehren nach Arusha zurück. Besuchen Sie lokale Handwerksmärkte und erstehen Sie handgefertigte Souvenirs.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 11, 
      location: 'Meru Forest', 
      title: 'Wander-Finale', 
      desc: 'Ein entspannter Tag im Wald am Fuße des Mount Meru. Wir lassen die Erlebnisse der letzten 12 Tage gemeinsam ausklingen.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 12, 
      location: 'Abreise', 
      title: 'Abschied von der Wildnis', 
      desc: 'Transfer zum Kilimanjaro Airport. Sie nehmen den Staub der Savanne und die Sterne Afrikas in Ihren Träumen mit nach Hause.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
