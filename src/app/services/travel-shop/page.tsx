import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, Camera, Sun, Wind, Umbrella } from 'lucide-react';

export default function TravelShopPage() {
  const products = [
    { name: "Savannah Field Jacket", price: "$185", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop", category: "Apparel" },
    { name: "Pro Safari Binoculars", price: "$450", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop", category: "Gear" },
    { name: "Stone Town Linen Shirt", price: "$95", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop", category: "Beachwear" },
    { name: "Wide-Brim Expedition Hat", price: "$65", img: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?q=80&w=600&auto=format&fit=crop", category: "Accessories" },
    { name: "Leather Travel Duffel", price: "$290", img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=600&auto=format&fit=crop", category: "Luggage" },
    { name: "Anti-UV Desert Scarf", price: "$45", img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=600&auto=format&fit=crop", category: "Accessories" },
  ];

  return (
    <div className="pt-24 pb-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2 block">Curated Collection</span>
            <h1 className="font-headline text-4xl md:text-6xl font-bold">The Travel <span className="text-primary italic">Shop</span></h1>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-full gap-2">
              <ShoppingBag className="w-4 h-4" /> Cart (0)
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Sun, label: "Sun Proof" },
            { icon: Wind, label: "Ventilated" },
            { icon: Camera, label: "Pro Gear" },
            { icon: Umbrella, label: "All Weather" }
          ].map((feat, idx) => (
            <div key={idx} className="p-4 bg-muted/20 rounded-2xl flex items-center gap-3">
              <feat.icon className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest">{feat.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/80 backdrop-blur text-[8px] font-bold text-white uppercase tracking-widest">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{p.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-2.5 h-2.5 fill-primary text-primary" />)}
                  </div>
                </div>
                <p className="font-bold text-secondary">{p.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-secondary rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Pack Like a Pro</h2>
          <p className="text-white/60 text-lg font-light mb-8 max-w-xl mx-auto">Download our comprehensive safari packing list designed specifically for the Serengeti and Zanzibar climates.</p>
          <Button size="lg" className="rounded-full px-10 h-14 font-bold">Download Free Checklist</Button>
        </div>
      </div>
    </div>
  );
}
