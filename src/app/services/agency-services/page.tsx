import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Calendar, Map, Users, Sparkles, Globe } from 'lucide-react';

export default function AgencyServicesPage() {
  const features = [
    { icon: Calendar, title: "Bespoke Planning", desc: "Every itinerary is handcrafted by specialists who know the Serengeti and Zanzibar like home." },
    { icon: ShieldCheck, title: "Cairo Support", desc: "Local office support in Cairo ensures your payments and logistics are handled securely." },
    { icon: Map, title: "Expert Guides", desc: "Our professional guides are local experts with decades of wildlife and landscape experience." },
    { icon: Users, title: "Private Expeditions", desc: "No shared vehicles. Every safari is a private, intimate journey for you and your group." },
    { icon: Sparkles, title: "Luxury Lodging", desc: "We partner with the finest boutique camps and oceanfront villas across Tanzania." },
    { icon: Globe, title: "End-to-End Care", desc: "From visa assistance to post-travel support, we handle every detail of your journey." },
  ];

  return (
    <div className="pt-24 pb-12 luxury-gradient min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2 block">Our Expertise</span>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">Agency <span className="text-primary italic">Services</span></h1>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Comprehensive travel management bridging the Nile and the Savannah.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <Card key={i} className="border-none shadow-sm rounded-3xl overflow-hidden hover:shadow-md transition-all group">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{f.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
