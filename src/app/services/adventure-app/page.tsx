
import React from 'react';
import { Smartphone, MapPin, CloudOff, Info, Share2, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdventureAppPage() {
  return (
    <div className="pt-32 pb-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2 block">Digital Navigator</span>
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6 leading-tight uppercase">Your Safari <br /><span className="text-primary">In Your Pocket</span></h1>
            <p className="text-muted-foreground text-lg leading-relaxed font-bold mb-8 uppercase tracking-widest">
              The Serengeti Dreams app provides real-time tracking, offline maps, and detailed wildlife guides during your expedition.
            </p>
            
            <div className="space-y-6 mb-10">
              {[
                { icon: MapPin, title: "Live Itinerary", desc: "Access your daily schedule, flights, and camp details even without signal." },
                { icon: CloudOff, title: "Offline Maps", desc: "Detailed topographical maps of the Serengeti and Ngorongoro Crater." },
                { icon: Info, title: "Wildlife ID", desc: "Instant visual guide to over 200 species of birds and mammals." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base uppercase">{item.title}</h4>
                    <p className="text-sm text-muted-foreground font-bold uppercase tracking-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="rounded-xl px-10 h-14 font-bold uppercase tracking-widest">Download for iOS / Android</Button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[300px] aspect-[9/19] bg-[#0a0a0a] rounded-[3rem] p-3 shadow-2xl border-4 border-muted">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0a0a0a] rounded-b-2xl z-10" />
              <div className="w-full h-full bg-secondary rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                <div className="p-6 pt-10">
                  <div className="flex justify-between items-center mb-8">
                    <Compass className="w-8 h-8 text-primary" />
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                  </div>
                  <h3 className="text-white text-2xl font-headline font-bold mb-4 uppercase">Great <br />Migration</h3>
                  <div className="space-y-3">
                    <div className="h-20 w-full bg-white/5 rounded-2xl border border-white/10 p-4">
                      <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Next Stop</p>
                      <p className="text-white font-bold text-sm uppercase">Mara River Crossing</p>
                    </div>
                    <div className="h-32 w-full bg-primary/20 rounded-2xl border border-primary/20 p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] text-primary font-bold uppercase">Active Alert</span>
                        <Share2 className="w-3 h-3 text-primary" />
                      </div>
                      <p className="text-white text-[10px] font-bold leading-tight uppercase tracking-widest">Lion pride spotted 2km North of your current location. Track path updated.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
