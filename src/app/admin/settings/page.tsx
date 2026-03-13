"use client";

import React, { useState, useEffect } from 'react';
import { 
  Save, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Smartphone,
  ShieldAlert,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDoc, useFirestore, useUser, useMemoFirebase, setDocumentNonBlocking } from '@/firebase';
import { doc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function SiteSettings() {
  const firestore = useFirestore();
  const { user } = useUser();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const docRef = useMemoFirebase(() => (firestore ? doc(firestore, 'siteSettings', 'global') : null), [firestore]);
  const { data: settings, isLoading: isFetching } = useDoc(docRef);
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    if (settings) {
      setFormData(settings);
    }
  }, [settings]);

  const handleSave = async () => {
    if (!firestore || !user || !formData || !docRef) return;
    setLoading(true);
    try {
      setDocumentNonBlocking(docRef, {
        ...formData,
        updatedAt: new Date().toISOString(),
        updatedBy: user.uid
      }, { merge: true });
      toast({ title: "Settings Updated", description: "Global agency profile saved." });
    } catch (error) {
      toast({ variant: "destructive", title: "Update Failed", description: "Check permissions." });
    } finally {
      setLoading(false);
    }
  };

  if (isFetching || !formData) return <div className="p-12 text-center text-muted-foreground uppercase tracking-widest font-bold text-[9px] animate-pulse">Syncing Registry...</div>;

  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">Site Settings</h1>
          <p className="text-muted-foreground mt-1 text-[9px] font-bold uppercase tracking-widest">Global Agency Configuration</p>
        </div>
        <Button onClick={handleSave} disabled={loading} className="gap-2 rounded-xl h-11 px-6 shadow-lg font-bold uppercase tracking-widest text-[9px]">
          {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
          Sync Registry
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-none shadow-sm rounded-[1.5rem] bg-white">
          <CardHeader className="p-6 pb-2">
            <CardTitle className="text-base font-headline font-bold flex items-center gap-2 uppercase tracking-tight"><Smartphone className="w-4 h-4 text-primary" /> Contact Channels</CardTitle>
            <CardDescription className="text-[9px] font-bold uppercase tracking-widest">Communication Registry</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-5">
            <div className="space-y-2">
              <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">WhatsApp Hub</Label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <Input 
                  value={formData.whatsappNumber || ''} 
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  placeholder="+49..." 
                  className="pl-10 h-11 rounded-lg bg-muted/20 border-none font-bold text-[11px]"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Email Official</Label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <Input 
                  value={formData.contactEmail || ''} 
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="pl-10 h-11 rounded-lg bg-muted/20 border-none font-bold text-[11px]"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-[1.5rem] bg-white">
          <CardHeader className="p-6 pb-2">
            <CardTitle className="text-base font-headline font-bold flex items-center gap-2 uppercase tracking-tight"><MapPin className="w-4 h-4 text-primary" /> Headquarters</CardTitle>
            <CardDescription className="text-[9px] font-bold uppercase tracking-widest">Physical Operations</CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-5">
            <div className="space-y-2">
              <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Office Address</Label>
              <Input 
                value={formData.officeLocation || ''} 
                onChange={(e) => setFormData({ ...formData, officeLocation: e.target.value })}
                className="h-11 rounded-lg bg-muted/20 border-none font-bold text-[11px]"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Duty Hours</Label>
              <div className="relative">
                <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                <Input 
                  value={formData.officeHours || ''} 
                  onChange={(e) => setFormData({ ...formData, officeHours: e.target.value })}
                  className="pl-10 h-11 rounded-lg bg-muted/20 border-none font-bold text-[11px]"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 border-none shadow-sm rounded-[1.5rem] bg-secondary text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <CardHeader className="p-8 pb-2 relative z-10">
            <CardTitle className="text-lg font-headline font-bold flex items-center gap-2 uppercase text-white"><Globe className="w-5 h-5 text-primary" /> Brand Identity</CardTitle>
            <CardDescription className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">Market Presence Strategy</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-4 relative z-10">
            <div className="space-y-2">
              <Label className="text-[9px] font-bold uppercase tracking-widest text-white/60 ml-1">Expedition Tagline</Label>
              <Input 
                value={formData.heroTagline || ''} 
                onChange={(e) => setFormData({ ...formData, heroTagline: e.target.value })}
                className="h-14 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/20 text-base font-bold uppercase tracking-tight"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
