import React from 'react';
import { Plane, Compass, Clock, ShieldCheck, MapPin, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FlyWithUsPage() {
  return (
    <div className="pt-24 pb-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
            Air Logistics
          </div>
          <h1 className="font-headline text-4xl md:text-7xl font-bold mb-6">Fly With <span className="text-primary italic">Us</span></h1>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            From direct Cairo-Dar connections to internal bush flights, we curate the most efficient air travel for your safari.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="p-8 bg-muted/30 rounded-[2.5rem] relative overflow-hidden">
              <h3 className="font-bold text-xl mb-4">International Connections</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                Most our guests fly from Cairo directly into Dar Es Salaam or Kilimanjaro International Airport. We partner with EgyptAir and Ethiopian Airlines for the smoothest trans-continental experience.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 border border-muted-foreground/20 rounded-full text-[10px] font-bold uppercase">EgyptAir</div>
                <div className="px-4 py-2 border border-muted-foreground/20 rounded-full text-[10px] font-bold uppercase">Ethiopian</div>
              </div>
            </div>

            <div className="p-8 bg-secondary text-white rounded-[2.5rem]">
              <h3 className="font-headline text-xl font-bold mb-4">Internal Bush Flights</h3>
              <p className="text-sm text-white/60 leading-relaxed font-light mb-6">
                Avoid long dusty drives. We use specialized charter carriers like Coastal Aviation and Flightlink to drop you directly at your camp's private airstrip.
              </p>
              <ul className="space-y-3">
                {["Private Safari Link", "Zanzibar Air Shuttle", "Serengeti Direct"].map((line, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold">
                    <Ticket className="w-4 h-4 text-primary" /> {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=1200&auto=format&fit=crop" 
              alt="Safari Plane" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-primary">Signature Service</p>
              <h4 className="text-2xl font-headline font-bold">Airstrip Transfers</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
