"use client";

import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Save, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Smartphone,
  ShieldCheck,
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
      toast({ title: "Settings Updated", description: "Global agency configuration saved." });
    } catch (error) {
      toast({ variant: "destructive", title: "Update Failed", description: "Check permissions." });
    } finally {
      setLoading(false);
    }
  };

  if (isFetching || !formData) return <div className="p-12 text-center text-muted-foreground uppercase tracking-widest font-bold text-xs animate-pulse">Syncing Agency Profile...</div>;

  return (
    <div className="p-10 max-w-5xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Site Settings</h1>
          <p className="text-muted-foreground mt-2 text-lg">Manage global agency contact and brand configurations.</p>
        </div>
        <Button onClick={handleSave} disabled={loading} className="gap-2 rounded-2xl h-12 px-8 shadow-lg shadow-primary/20">
          {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save Configuration
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-none shadow-sm rounded-[2.5rem] p-4">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2"><Smartphone className="w-5 h-5 text-primary" /> Contact Channels</CardTitle>
            <CardDescription>Primary communication methods for travelers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">WhatsApp Number</Label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  value={formData.whatsappNumber || ''} 
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  placeholder="+20 123 456 7890" 
                  className="pl-12 h-12 rounded-xl bg-muted/20 border-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Contact Email</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  value={formData.contactEmail || ''} 
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  placeholder="concierge@serengetidreams.com" 
                  className="pl-12 h-12 rounded-xl bg-muted/20 border-none"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-[2.5rem] p-4">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" /> Office Location</CardTitle>
            <CardDescription>Egypt-based headquarters information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Office Address</Label>
              <Input 
                value={formData.officeLocation || ''} 
                onChange={(e) => setFormData({ ...formData, officeLocation: e.target.value })}
                placeholder="123 Zamalek St, Cairo, Egypt" 
                className="h-12 rounded-xl bg-muted/20 border-none"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Operating Hours</Label>
              <Input 
                value={formData.officeHours || ''} 
                onChange={(e) => setFormData({ ...formData, officeHours: e.target.value })}
                placeholder="Mon - Fri: 9am - 6pm (EET)" 
                className="h-12 rounded-xl bg-muted/20 border-none"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 border-none shadow-sm rounded-[2.5rem] p-4 bg-secondary text-white">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-primary"><Globe className="w-5 h-5" /> Brand Identity</CardTitle>
            <CardDescription className="text-white/40">Manage global marketing copy.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-widest text-white/60">Hero Tagline</Label>
              <Input 
                value={formData.heroTagline || ''} 
                onChange={(e) => setFormData({ ...formData, heroTagline: e.target.value })}
                placeholder="The Soul of the Serengeti" 
                className="h-14 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/20 text-lg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
