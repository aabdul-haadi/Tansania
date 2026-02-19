"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Compass, Lock, User, Loader2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const auth = useAuth();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const email = username === 'admin' ? 'admin@serengetidreams.com' : username;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({ title: "Welcome Back", description: "Identity verified. Accessing CMS..." });
      router.push('/admin');
    } catch (error: any) {
      if (
        (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') && 
        username === 'admin' && 
        password === 'adminadmin'
      ) {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          toast({ title: "Admin Initialized", description: "Default credentials activated. Welcome." });
          router.push('/admin');
        } catch (createError: any) {
           toast({ variant: "destructive", title: "Access Denied", description: "Standard authentication failed." });
        }
      } else {
        toast({ variant: "destructive", title: "Authentication Failed", description: "Invalid credentials. Please use the default admin access." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center luxury-gradient px-4 bg-[#fdfcfb]">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary text-white shadow-xl mb-4">
            <Compass className="w-8 h-8" />
          </div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">Staff Portal</h1>
          <p className="text-muted-foreground mt-2 text-sm uppercase tracking-widest font-bold">Secure CMS Login</p>
        </div>

        <Card className="border-none shadow-2xl rounded-[2rem] overflow-hidden bg-white">
          <CardHeader className="p-8 pb-0">
            <CardTitle className="text-xl">Sign In</CardTitle>
            <CardDescription>Use your assigned credentials to manage Serengeti Dreams.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-6" suppressHydrationWarning>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="username" 
                    type="text" 
                    placeholder="admin" 
                    className="pl-12 h-12 rounded-xl bg-muted/20 border-none"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    suppressHydrationWarning
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-12 h-12 rounded-xl bg-muted/20 border-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={loading} 
                className="w-full h-12 rounded-xl text-base font-bold gap-2 shadow-lg shadow-primary/20"
                suppressHydrationWarning
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Login to Dashboard <ArrowRight className="w-4 h-4" /></>}
              </Button>

              <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mb-1">Developer Mode</p>
                <p className="text-xs text-muted-foreground">User: <code className="text-foreground font-bold">admin</code> | Pass: <code className="text-foreground font-bold">adminadmin</code></p>
              </div>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em]">
          Powered by Nile to Savannah CMS
        </p>
      </div>
    </div>
  );
}
