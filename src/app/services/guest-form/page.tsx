import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { User, Mail, Hash, Calendar, Heart, ShieldAlert } from 'lucide-react';

export default function GuestFormPage() {
  return (
    <div className="pt-24 pb-12 luxury-gradient min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <header className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">Guest Information <span className="text-primary italic">Form</span></h1>
          <p className="text-muted-foreground text-base font-light">Please complete this form for every traveler in your party to finalize logistics.</p>
        </header>

        <form className="space-y-6">
          <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white">
            <CardContent className="p-8 space-y-8">
              <section className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2 border-b pb-2"><User className="w-4 h-4 text-primary" /> Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name (as per Passport)</Label>
                    <Input placeholder="John Doe" className="rounded-xl h-12 bg-muted/20 border-none" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input type="email" placeholder="john@example.com" className="rounded-xl h-12 bg-muted/20 border-none" />
                  </div>
                  <div className="space-y-2">
                    <Label>Passport Number</Label>
                    <Input placeholder="A1234567" className="rounded-xl h-12 bg-muted/20 border-none" />
                  </div>
                  <div className="space-y-2">
                    <Label>Date of Birth</Label>
                    <Input type="date" className="rounded-xl h-12 bg-muted/20 border-none" />
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2 border-b pb-2"><Heart className="w-4 h-4 text-primary" /> Health & Dietary</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Dietary Requirements</Label>
                    <Input placeholder="Vegan, Nut-free, etc." className="rounded-xl h-12 bg-muted/20 border-none" />
                  </div>
                  <div className="space-y-2">
                    <Label>Medical Conditions / Allergies</Label>
                    <Textarea placeholder="Please list any conditions we should be aware of for safety..." className="rounded-2xl bg-muted/20 border-none min-h-[100px]" />
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2 border-b pb-2"><ShieldAlert className="w-4 h-4 text-primary" /> Emergency Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Contact Name</Label>
                    <Input placeholder="Jane Doe" className="rounded-xl h-12 bg-muted/20 border-none" />
                  </div>
                  <div className="space-y-2">
                    <Label>Emergency Phone</Label>
                    <Input placeholder="+20 123 456 789" className="rounded-xl h-12 bg-muted/20 border-none" />
                  </div>
                </div>
              </section>

              <Button className="w-full h-14 rounded-2xl text-lg font-bold bg-secondary text-white shadow-lg">Submit Information</Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}
