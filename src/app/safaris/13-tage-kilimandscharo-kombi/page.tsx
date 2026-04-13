
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '13-tage-kilimandscharo-kombi',
  title: '13 Tage Kilimandscharo Kombi',
  slug: '13-tage-kilimandscharo-kombi',
  category: 'Expedition',
  durationDays: 13,
  startingPrice: 4699,
  heroDescription: 'Die ultimative Verbindung aus Berg-Epos und Safari-Abenteuer. Erleben Sie den Kilimandscharo aus nächster Nähe und die besten Parks Tansanias.',
  imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1920',
  highlights: [
    'Safari in Top-Nationalparks',
    'Kilimandscharo hautnah erleben',
    'Big Five Begegnungen',
    'Authentische Naturerlebnisse',
    'Privater Experten-Guide'
  ],
  itineraryDays: [
    { 
      day: 1, 
      location: 'Arusha Region', 
      title: 'Willkommen in Tansania', 
      desc: 'Ihre Reise beginnt mit der Ankunft am Kilimanjaro Airport. Wir bringen Sie in Ihre komfortable Lodge, wo Sie den ersten Abend mit Blick auf die umliegenden Berge genießen.', 
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800' 
    },
    { 
      day: 2, 
      location: 'Arusha Nationalpark', 
      title: 'Mount Meru & Wildlife', 
      desc: 'Ein entspannter Start im Arusha Nationalpark. Wir unternehmen eine erste Pirschfahrt und genießen spektakuläre Blicke auf den Mount Meru und den fernen Kilimandscharo.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 3, 
      location: 'Tarangire', 
      title: 'Im Reich der Elefanten', 
      desc: 'Fahrt zum Tarangire Nationalpark. Die riesigen Affenbrotbäume und massiven Elefantenherden prägen das Landschaftsbild dieses einzigartigen Parks.', 
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800' 
    },
    { 
      day: 4, 
      location: 'Tarangire', 
      title: 'Wildnis am Fluss', 
      desc: 'Ein zweiter Tag im Tarangire ermöglicht uns, tiefer in entlegenere Gebiete vorzudringen und das Verhalten der Tiere am Tarangire Fluss zu beobachten.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 5, 
      location: 'Lake Manyara', 
      title: 'Dschungel & Flamingos', 
      desc: 'Am Fuße des Grabenbruchs erkunden wir den Manyara See. Wir suchen die berühmten baumkletternden Löwen und bewundern die riesigen Flamingo-Schwärme.', 
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800' 
    },
    { 
      day: 6, 
      location: 'Serengeti', 
      title: 'Aufbruch in die Serengeti', 
      desc: 'Wir erreichen die legendäre Serengeti. Schon auf dem Weg zu unserem Camp erleben wir die erste intensive Safari in den endlosen Ebenen.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 7, 
      location: 'Serengeti', 
      title: 'Das Herz der Wildnis', 
      desc: 'Ein voller Tag im Seronera-Tal. Wir folgen den Spuren der großen Raubkatzen und erleben den unverfälschten Rhythmus der Natur.', 
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800' 
    },
    { 
      day: 8, 
      location: 'Serengeti', 
      title: 'Expedition Nord', 
      desc: 'Wir erkunden die nördlichen Regionen der Serengeti, wo die Landschaft hügeliger wird und wir oft spektakuläre Herdenbewegungen beobachten können.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 9, 
      location: 'Ngorongoro', 
      title: 'Der Garten Eden', 
      desc: 'Abstieg in den Ngorongoro Krater. In diesem geschützten Paradies begegnen wir den Big Five auf kleinstem Raum in einer atemberaubenden Kulisse.', 
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800' 
    },
    { 
      day: 10, 
      location: 'Karatu Region', 
      title: 'Kultur & Kaffee', 
      desc: 'Wir besuchen lokale Gemeinschaften und lernen die traditionelle Kaffeeverarbeitung kennen. Ein Tag voller menschlicher Begegnungen und Einblicke.', 
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800' 
    },
    { 
      day: 11, 
      location: 'Materuni', 
      title: 'Kilimandscharo Ausläufer', 
      desc: 'Wanderung zu den Materuni Wasserfällen am Fuße des Kilimandscharo. Wir spüren die kühle Bergluft und die Kraft des heiligen Berges.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 12, 
      location: 'Marangu', 
      title: 'Kilimandscharo Gate', 
      desc: 'Wir besuchen das Marangu Gate, den klassischen Startpunkt für Gipfelstürmer. Ein Tag voller Bergsteiger-Atmosphäre und Panoramablicke.', 
      img: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800' 
    },
    { 
      day: 13, 
      location: 'Abreise', 
      title: 'Abschied von Afrika', 
      desc: 'Nach einem letzten Frühstück bringen wir Sie zum Flughafen. Mit dem Bild des Kilimandscharo im Rücken treten Sie Ihre Heimreise an.', 
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800' 
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
