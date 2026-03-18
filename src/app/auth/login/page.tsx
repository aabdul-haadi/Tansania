"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Compass, Lock, User, Loader2, ArrowRight, AlertCircle, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const auth = useAuth();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!auth) {
      toast({ 
        variant: "destructive", 
        title: "Registry Offline", 
        description: "Firebase initialization failed. Please check your Environment Variables." 
      });
      return;
    }

    setLoading(true);

    try {
      // Step 1: Attempt standard login
      await signInWithEmailAndPassword(auth, email, password);
      toast({ title: "Welcome Back", description: "Identity verified. Accessing Command Center..." });
      router.push('/admin');
    } catch (error: any) {
      console.error("Firebase Auth Error:", error.code, error.message);
      
      // Step 2: Handle specific error codes
      if (error.code === 'auth/operation-not-allowed') {
        toast({ 
          variant: "destructive", 
          title: "Provider Disabled", 
          description: "Please enable 'Email/Password' in your Firebase Console -> Authentication -> Sign-in method." 
        });
      } else if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        // Step 3: Development Mode - Try auto-registration if login fails due to user not existing
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          toast({ title: "Access Granted", description: "New admin profile initialized. Welcome aboard." });
          router.push('/admin');
        } catch (createError: any) {
           console.error("Auto-Registration Error:", createError.code, createError.message);
           
           if (createError.code === 'auth/operation-not-allowed') {
             toast({ 
               variant: "destructive", 
               title: "Sign-up Disabled", 
               description: "Email/Password provider is not enabled in Firebase Console." 
             });
           } else {
             toast({ 
               variant: "destructive", 
               title: "Access Denied", 
               description: createError.message || "Authentication failed. Check your inputs." 
             });
           }
        }
      } else {
        toast({ 
          variant: "destructive", 
          title: "Authentication Failed", 
          description: error.message || "An unexpected error occurred." 
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const isConfigMissing = !auth;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfcfb] px-4 font-bold">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary text-white shadow-xl mb-4">
            <Compass className="w-8 h-8" />
          </div>
          <h1 className="font-headline text-3xl font-bold tracking-tight uppercase">Staff Portal</h1>
          <p className="text-muted-foreground mt-2 text-[10px] uppercase tracking-widest font-bold">Secure Registry Login</p>
        </div>

        <Card className="border-none shadow-2xl rounded-[2rem] overflow-hidden bg-white border border-border/50">
          <CardHeader className="p-8 pb-0">
            <CardTitle className="text-xl font-bold uppercase tracking-tight text-secondary">Official Access</CardTitle>
            <CardDescription className="text-[10px] font-bold uppercase tracking-widest mt-1">Enter credentials to synchronize with the command center.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            {isConfigMissing && (
              <div className="mb-6 p-5 bg-destructive/10 rounded-2xl flex flex-col gap-3 border border-destructive/20 text-destructive animate-pulse">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <p className="text-[10px] font-black uppercase tracking-widest leading-tight">Registry Offline</p>
                </div>
                <p className="text-[8px] font-bold uppercase leading-relaxed opacity-80">
                  Firebase Environment Variables are missing. Authentication is currently unavailable.
                </p>
              </div>
            )}
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Official ID (Email)</Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="admin@tansania-reiseabenteuer.de" 
                    className="pl-12 h-14 rounded-xl bg-muted/20 border-none font-bold text-xs"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isConfigMissing}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" title="Access Key" className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground ml-1">Access Key</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-12 h-14 rounded-xl bg-muted/20 border-none font-bold text-xs"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isConfigMissing}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={loading || isConfigMissing} 
                className="w-full h-14 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] gap-2 shadow-xl shadow-primary/20 border-none"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Access Dashboard <ArrowRight className="w-4 h-4 /></>}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
