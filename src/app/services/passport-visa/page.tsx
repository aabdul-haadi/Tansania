import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, FileText, CheckCircle, Info, Clock, DollarSign } from 'lucide-react';

export default function PassportVisaPage() {
  return (
    <div className="pt-24 pb-12 bg-[#fdfcfb] min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2 block">Travel Readiness</span>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">Passport & <span className="text-primary italic">Visa Guide</span></h1>
          <p className="text-muted-foreground text-lg font-light">Essential information for your entry into the United Republic of Tanzania.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Clock, label: "Processing Time", val: "48 - 72 Hours" },
            { icon: DollarSign, label: "Visa Fee (Tourist)", val: "$50 - $100 USD" },
            { icon: CheckCircle, label: "Validity", val: "90 Days" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-3xl shadow-sm flex flex-col items-center text-center gap-2 border border-muted/50">
              <item.icon className="w-5 h-5 text-primary" />
              <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">{item.label}</p>
              <p className="font-bold text-lg">{item.val}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <Card className="border-none shadow-sm rounded-3xl bg-white overflow-hidden">
            <CardContent className="p-8">
              <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-secondary" /> Requirements
              </h3>
              <ul className="space-y-4">
                {[
                  "Passport valid for at least 6 months from date of arrival.",
                  "At least two empty pages in your passport.",
                  "Proof of Yellow Fever vaccination (if coming from an endemic zone).",
                  "Confirmed return flight tickets.",
                  "Digital passport-sized photograph (for E-Visa)."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start text-sm font-light text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
            <div className="flex gap-4 items-start">
              <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2">E-Visa Portal</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  We recommend applying via the official Tanzania Immigration Portal at least 2 weeks before departure. Our Cairo office can assist Egyptian residents with the specific requirements for visa approval.
                </p>
                <a href="https://visa.immigration.go.tz/" target="_blank" className="text-primary font-bold text-xs uppercase tracking-widest hover:underline">Official Portal →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
