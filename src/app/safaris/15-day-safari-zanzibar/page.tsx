
import React from 'react';
import { PackageDetailClient } from '@/components/packages/PackageDetailClient';

const pkgData = {
  id: '15-day-safari-zanzibar',
  title: '15 Tage Safari in Tansania und Sansibar',
  slug: '15-day-safari-zanzibar',
  category: 'Signature',
  durationDays: 15,
  startingPrice: 5399,
  heroDescription: 'Unsere umfassendste Expedition: Vom Herzen der Serengeti bis zu den Palmen Sansibars – eine Reise, die das Leben verändert.',
  imageUrl: '/assets/images/home/pkg-01.webp',
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
      title: 'Ankunft am Kilimanjaro', 
      desc: 'Ihr Abenteuer beginnt mit der Landung am Fuße des Kilimandscharo. Wir bringen Sie in Ihre erste Boutique-Lodge, wo Sie sich vom Flug erholen können.',
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800'
    },
    { 
      day: 2, 
      location: 'Arusha City', 
      title: 'Märkte & Kaffee-Kultur', 
      desc: 'Tauchen Sie ein in das pulsierende Leben Arushas. Wir besuchen lokale Märkte und eine traditionelle Kaffeeplantage am fruchtbaren Hang des Mount Meru.',
      img: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800'
    },
    { 
      day: 3, 
      location: 'Arusha Nationalpark', 
      title: 'Die Momella-Seen', 
      desc: 'Entdecken Sie Giraffen und seltene Stummelaffen im dichten Regenwald. Die Spiegelungen des Mount Meru im stillen See sind ein Traum für Fotografen.',
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
    },
    { 
      day: 4, 
      location: 'Tarangire Nationalpark', 
      title: 'Das Reich der Elefanten', 
      desc: 'Hunderte Elefanten versammeln sich am Tarangire Fluss. Wir beobachten die sanften Riesen unter den riesigen, uralten Affenbrotbäumen.',
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
    },
    { 
      day: 5, 
      location: 'Ngorongoro Region', 
      title: 'Kultur & Kraterrand', 
      desc: 'Besuch eines authentischen Maasai-Dorfes. Erfahren Sie mehr über die Bräuche dieses stolzen Volkes, bevor wir den Kraterrand für den Sonnenuntergang erreichen.',
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
    },
    { 
      day: 6, 
      location: 'Zentral-Serengeti', 
      title: 'Seronera Pirschfahrten', 
      desc: 'Wir erreichen das Herz der Serengeti. Die weiten Ebenen sind berühmt für ihre hohe Dichte an Raubkatzen – Löwen, Leoparden und Geparden erwarten uns.',
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800'
    },
    { 
      day: 7, 
      location: 'Nord-Serengeti', 
      title: 'Spuren der Migration', 
      desc: 'Wir folgen den riesigen Gnuherden auf ihrem Weg nach Norden. Ein Naturschauspiel von unvergleichlicher Dimension unter dem endlosen afrikanischen Himmel.',
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
    },
    { 
      day: 8, 
      location: 'Mara Region', 
      title: 'Drama am Mara River', 
      desc: 'Spannung pur: Mit etwas Glück beobachten wir eines der dramatischen Crossings, bei denen die Herden den krokodilreichen Fluss bezwingen müssen.',
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
    },
    { 
      day: 9, 
      location: 'Ngorongoro Krater', 
      title: 'Afrikas Garten Eden', 
      desc: 'Abstieg in den Vulkankrater. Höchste Raubtierdichte weltweit und die seltene Chance, das schwarze Nashorn in seiner natürlichen Umgebung zu sehen.',
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800'
    },
    { 
      day: 10, 
      location: 'Lake Manyara', 
      title: 'Baumkletternde Löwen', 
      desc: 'Flamingos am Seeufer und die berühmten baumkletternden Löwen machen diesen kompakten Park zu einem faszinierenden Abschluss Ihrer Safari.',
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
    },
    { 
      day: 11, 
      location: 'Sansibar', 
      title: 'Vom Busch zum Strand', 
      desc: 'Ein privater Charterflug bringt Sie direkt nach Sansibar. Ein kühler Drink am weißen Sandstrand markiert den Beginn Ihrer Erholungsphase.',
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800'
    },
    { 
      day: 12, 
      location: 'Sansibar Strände', 
      title: 'Purer Tropenluxus', 
      desc: 'Tag zur freien Verfügung. Genießen Sie den erstklassigen Service Ihres Resorts oder tauchen Sie in das kristallklare Wasser des Indischen Ozeans ein.',
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800'
    },
    { 
      day: 13, 
      location: 'Stone Town', 
      title: 'Gewürze & Geschichte', 
      desc: 'Entdecken Sie die UNESCO-geschützte Altstadt Stone Town. Wir besuchen Gewürzplantagen und lernen die reiche Swahili-Kultur kennen.',
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800'
    },
    { 
      day: 14, 
      location: 'Sansibar', 
      title: 'Sunset Dhow Cruise', 
      desc: 'Ein letzter magischer Abend auf einer traditionellen Segeldhow. Wir gleiten dem Sonnenuntergang entgegen und genießen die Meeresbrise.',
      img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800'
    },
    { 
      day: 15, 
      location: 'Abreise', 
      title: 'Abschied von Afrika', 
      desc: 'Nach einem letzten Frühstück am Meer bringen wir Sie zum Flughafen. Sie kehren mit wertvollen Erinnerungen und neuer Energie nach Hause zurück.',
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800'
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
