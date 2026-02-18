import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Plane, HeartPulse, BadgeAlert, Anchor, CheckCircle2 } from 'lucide-react';

export default function GuestProtectionPage() {
  const coverage = [
    { icon: Plane, title: "Travel Cancellation", text: "100% reimbursement for covered cancellations, including medical emergencies." },
    { icon: HeartPulse, title: "Emergency Rescue", text: "AMREF Flying Doctors coverage for immediate evacuation from the bush." },
    { icon: BadgeAlert, title: "Health & Safety", text: "24/7 access to international SOS medical networks and advice." },
    { icon: Anchor, title: "Zanzibar Marine", text: "Specialized coverage for coastal activities and dhow expeditions." },
  ];

  return (
    <div className="pt-24 pb-12 luxury-gradient min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">Guest <span className="text-primary italic">Protection</span></h1>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Our comprehensive program ensures peace of mind from the moment you leave Cairo until your safe return.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coverage.map((c, i) => (
            <Card key={i} className="border-none shadow-sm rounded-3xl overflow-hidden bg-white/80 backdrop-blur">
              <CardHeader className="p-8 pb-0 flex flex-row items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold">{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">{c.text}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                  <CheckCircle2 className="w-4 h-4" /> Full Coverage Included
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-secondary rounded-[2.5rem] text-center text-white">
          <h3 className="font-headline text-2xl font-bold mb-2">Automated Enrollment</h3>
          <p className="text-white/60 text-sm font-light mb-0">Every booking through Serengeti Dreams automatically includes basic Flying Doctors coverage at no extra cost.</p>
        </div>
      </div>
    </div>
  );
}
