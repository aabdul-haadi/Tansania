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
      desc: 'Ihre Traumreise beginnt jetzt! Fliegen Sie mit uns in den schönen tieferen Süden unserer Erdkugel und zwar nach Tanzania. Die Safari ruft... Machen Sie es sich bequem während des Flugs, schliessen Sie gelegentlich Ihre Augen und träumen etwas vor sich hin, was Ihnen so erwarten könnte... schöne Flora & Fauna, schöne und anspruchsvolle Jeepfahrten in den verschiedenen Nationalparks, angenehme und gemütliche Lodges nach einer Safari und Zeit für Entspannung...',
      img: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800'
    },
    { 
      day: 2, 
      location: 'Arusha City', 
      title: 'Ankunft in Tanzania', 
      desc: 'Nach der Ankunft am Kilimandscharo International Airport werden Sie von unserem Reiseleiter empfangen und mit dem Auto in Ihre Unterkunft gebracht. Dort angekommen, können Sie sich von der Anreise erholen. In der Stadt können Sie das turbulente afrikanische Stadtleben hautnah miterleben. Besuchen Sie Märkte, auf denen Sie frisches Obst und Gemüse, traditionelles Street Food, Kleidung und vieles mehr kaufen oder bestaunen können. Fahren Sie z.B. mit einem Daladala, einem traditionellen Bus, um das tansanische Leben hautnah zu erfahren.',
      img: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=800'
    },
    { 
      day: 3, 
      location: 'Arusha Region', 
      title: 'Arusha Nationalpark', 
      desc: 'Der Arusha Nationalpark belohnt mit einer malerischen Aussicht auf die sieben Momella-Seen und den Ngurdoto Krater. Die Umgebung ist vielfältig und wechselt stetig zwischen Steppen, Dschungel und Hochgebirge. Im Osten des Parks ist ein dichter hoher Wald zu finden, welcher einen optimalen Lebensraum für verschiedenste Affen darstellt. An den Momella Seen besteht die perfekte Möglichkeit, die reiche Vogelwelt, mehr als 400 Arten, zu beobachten. Darunter befinden sich Flamingos, die man in großen Schwärmen antrifft.',
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
    },
    { 
      day: 4, 
      location: 'Babati Rural', 
      title: 'Tarangire Nationalpark', 
      desc: 'Nach dem Frühstück fahren Sie für eine morgendliche Pirschfahrt in den Tarangire Nationalpark. Der Park erstreckt sich entlang des Tarangire River und wird geprägt durch offene Baumsavannen, Hügel und Felskuppen, Graslandschaften und Affenbrotbäume. Eines der Highlights dieses Parks ist die hohe Populationsdichte an Elefanten. Herden von bis zu 300 Elefanten suchen täglich im trockenen Flussbett nach unterirdischen Flüssen, während wandernde Gnus, Zebras, Büffel, Impalas, Gazellen, Kuhantilopen und Elen die schrumpfenden Wasserlöcher bevölkern.',
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
    },
    { 
      day: 5, 
      location: 'Ngorongoro Region', 
      title: 'Besuch einer Schule & Maasai Kultur', 
      desc: 'Auf dem Weg zum Serengeti Nationalpark durchqueren Sie das Naturschutzgebiet Ngorongoro und machen Ihren ersten Zwischenstopp in einem Massai-Dorf, einem Manyatta. Dort haben Sie die Möglichkeit die Massai, eine ostafrikanische Volksgruppe, näher kennenzulernen und einen Einblick in ihre einzigartigen Bräuche und ihren Alltag zu erhalten. Die Massai erkennen Sie an ihrer traditionellen Kleidung. Sie tragen rote und blaue Laken, die geschickt um den Körper gewickelt werden.',
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
    },
    { 
      day: 6, 
      location: 'Zentral-Serengeti', 
      title: 'Endlose Savannen', 
      desc: 'Ankunft im Herzen der Serengeti. Der Park ist so groß wie Schleswig-Holstein und bietet die spektakulärsten Tierbeobachtungen der Welt. Heute suchen wir nach den großen Katzen – Löwen, Leoparden und Geparden – die sich gerne auf den Granitfelsen, den Kopjes, sonnen.',
      img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=800'
    },
    { 
      day: 7, 
      location: 'Nord-Serengeti', 
      title: 'Auf Spurensuche der Migration', 
      desc: 'Wir folgen den riesigen Gnuherden nach Norden. In dieser Region ist die Chance groß, die Tiere beim Grasen in den sanften Hügeln zu beobachten. Die Weite der Landschaft ist hier besonders eindrucksvoll und die Stille wird nur durch die Rufe der Wildnis unterbrochen.',
      img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800'
    },
    { 
      day: 8, 
      location: 'Mara Region', 
      title: 'Das Drama am Fluss', 
      desc: 'Ein Tag voller Spannung. Wir verbringen Zeit am Mara River, um eines der berühmten Crossings zu beobachten. Es ist ein Überlebenskampf, wenn tausende Tiere gleichzeitig den Fluss überqueren, in dem Krokodile lauern.',
      img: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?q=80&w=800'
    },
    { 
      day: 9, 
      location: 'Ngorongoro Krater', 
      title: 'Abstieg in das Paradies', 
      desc: 'Wir verlassen die Serengeti und fahren zum Ngorongoro Krater. Am frühen Morgen steigen wir 600 Meter tief in den Kraterboden ab. Hier leben etwa 25.000 große Säugetiere auf engstem Raum, darunter auch die seltenen schwarzen Nashörner.',
      img: 'https://images.unsplash.com/photo-1580502304784-8985b777da59?q=80&w=800'
    },
    { 
      day: 10, 
      location: 'Lake Manyara', 
      title: 'Flamingos & Baumkletternde Löwen', 
      desc: 'Besuch des Lake Manyara Nationalparks. Der Park ist bekannt für seine unglaubliche Vogelvielfalt an den Ufern des Sodasees und seine Löwen, die untypischerweise gerne auf den Ästen von Akazienbäumen ruhen.',
      img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800'
    },
    { 
      day: 11, 
      location: 'Sansibar', 
      title: 'Flug ins Inselglück', 
      desc: 'Nach der Safari folgt die Entspannung. Wir bringen Sie zum Airstrip für Ihren Flug direkt auf die Gewürzinsel Sansibar. Ein privater Transfer erwartet Sie und bringt Sie in Ihr exklusives Strandresort.',
      img: 'https://images.unsplash.com/photo-1646668072507-b2215b873c70?q=80&w=800'
    },
    { 
      day: 12, 
      location: 'Sansibar Ostküste', 
      title: 'Weiße Strände & Türkises Meer', 
      desc: 'Genießen Sie das süße Nichtstun. Spazieren Sie an den endlosen weißen Sandstränden, beobachten Sie die Gezeiten und lassen Sie sich kulinarisch in Ihrem Resort verwöhnen.',
      img: 'https://images.unsplash.com/photo-1590001158193-79013ac7fa77?q=80&w=800'
    },
    { 
      day: 13, 
      location: 'Stone Town', 
      title: 'Geschichte & Gewürze', 
      desc: 'Ein Ausflug in die historische Altstadt Stone Town (UNESCO Welterbe). Wir schlendern durch die verwinkelten Gassen, besuchen den Sklavenmarkt und tauchen ein in die Geschichte des Sultans.',
      img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800'
    },
    { 
      day: 14, 
      location: 'Sansibar', 
      title: 'Sunset Dhow Cruise', 
      desc: 'Der letzte volle Tag im Paradies. Am Abend unternehmen wir eine Segeltour auf einer traditionellen Dhow. Wir beobachten den Sonnenuntergang vom Wasser aus, während wir die letzten Momente der Reise genießen.',
      img: 'https://images.unsplash.com/photo-1683323935247-ac5105bcea4e?q=80&w=800'
    },
    { 
      day: 15, 
      location: 'Abreise', 
      title: 'Abschied von Afrika', 
      desc: 'Heute heißt es Abschied nehmen. Je nach Abflugzeit haben Sie noch Zeit für ein letztes Bad im Meer. Transfer zum Flughafen Sansibar und Rückflug nach Hause.',
      img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=800'
    }
  ]
};

export default function PackagePage() {
  return <PackageDetailClient pkg={pkgData} />;
}
