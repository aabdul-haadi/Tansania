
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const auth = useAuth();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Normalize "admin" username to a valid email format for Firebase Auth
    const loginEmail = email === 'admin' ? 'admin@serengetidreams.com' : email;

    try {
      await signInWithEmailAndPassword(auth, loginEmail, password);
      toast({ title: "Welcome Back", description: "Identity verified. Redirecting to command center..." });
      router.push('/admin');
    } catch (error: any) {
      // If user doesn't exist and it's the default credentials, try to create it for the prototype
      if (error.code === 'auth/user-not-found' && email === 'admin' && password === 'adminadmin') {
        try {
          await createUserWithEmailAndPassword(auth, loginEmail, password);
          toast({ title: "Admin Created", description: "Default admin account initialized. Welcome." });
          router.push('/admin');
          return;
        } catch (createError: any) {
           toast({ variant: "destructive", title: "Access Denied", description: createError.message });
        }
      } else {
        toast({ variant: "destructive", title: "Authentication Failed", description: "Invalid credentials or system error." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center luxury-gradient px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-secondary text-white shadow-2xl mb-6">
            <Compass className="w-10 h-10 animate-pulse" />
          </div>
          <h1 className="font-headline text-3xl font-bold tracking-tight">Staff Portal</h1>
          <p className="text-muted-foreground mt-2">Authorized Personnel Only</p>
        </div>

        <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-background/80 backdrop-blur-xl">
          <CardHeader className="p-8 pb-0">
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your credentials to manage the Savannah.</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Username or Email</Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="text" 
                    placeholder="admin" 
                    className="pl-12 h-14 rounded-2xl bg-muted/30 border-none focus:bg-background transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Security Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-12 h-14 rounded-2xl bg-muted/30 border-none focus:bg-background transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full h-14 rounded-2xl text-lg font-bold gap-2 shadow-lg shadow-primary/20"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Access Console <ArrowRight className="w-5 h-5" /></>}
                </Button>
              </div>

              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">Prototype Credentials</p>
                <p className="text-xs text-muted-foreground">User: <code className="text-foreground">admin</code> | Pass: <code className="text-foreground">adminadmin</code></p>
              </div>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-[10px] text-muted-foreground font-bold uppercase tracking-widest pt-4">
          Nile to Savannah Management Interface
        </p>
      </div>
    </div>
  );
}
