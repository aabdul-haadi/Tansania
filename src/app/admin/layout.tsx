"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Globe,
  LogOut,
  Lock,
  Loader2,
  Database,
  Settings,
  Brain,
  Compass
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUser, useDoc, useFirestore, useAuth, useMemoFirebase, setDocumentNonBlocking } from '@/firebase';
import { doc, serverTimestamp } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { signOut } from 'firebase/auth';

const adminLinks = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Site Registry', href: '/admin/pages', icon: Globe },
  { name: 'Expedition Journal', href: '/admin/blog', icon: FileText },
  { name: 'Safari Catalog', href: '/admin/packages', icon: Database },
  { name: 'AI Planner', href: '/admin/ai-planner', icon: Brain },
  { name: 'Site Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const auth = useAuth();
  const [mounted, setMounted] = useState(false);
  const [isPromoting, setIsPromoting] = useState(false);
  
  const adminDocRef = useMemoFirebase(() => (firestore && user ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user]);
  const { data: adminRole, isLoading: isAdminRoleLoading } = useDoc(adminDocRef);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Auto-promotion: If user is logged in but has no role record yet, create it.
    if (mounted && user && firestore && !isAdminRoleLoading && !adminRole && !isPromoting) {
      setIsPromoting(true);
      
      // Register admin status in the primary registry
      setDocumentNonBlocking(doc(firestore, 'roles_admin', user.uid), {
        uid: user.uid,
        email: user.email || 'unknown@tansania-reiseabenteuer.de',
        role: 'ADMIN',
        createdAt: serverTimestamp(),
        lastActive: serverTimestamp()
      }, { merge: true });

      // Ensure the user profile also reflects the administrative role
      setDocumentNonBlocking(doc(firestore, 'users', user.uid), {
        id: user.uid,
        email: user.email,
        name: user.displayName || 'Staff Member',
        role: 'ADMIN',
        updatedAt: serverTimestamp()
      }, { merge: true });

      // Registry Handshake: Wait 5 seconds for the server-side rules engine to synchronize 
      // the new admin record before rendering children that trigger protected collection fetches.
      setTimeout(() => {
        setIsPromoting(false);
      }, 5000);
    }
  }, [user, adminRole, isAdminRoleLoading, firestore, mounted, isPromoting]);

  const handleSignOut = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
      router.push('/auth/login');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  // Guard 1: Basic App & Auth Loading
  if (!mounted || isUserLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em]">Accessing Admin Hub...</p>
      </div>
    );
  }

  // Guard 2: Not Logged In
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="max-w-md w-full text-center space-y-8 bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-border">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-destructive/10 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 md:w-10 md:h-10 text-destructive" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter text-secondary uppercase">Access Required</h1>
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Official Entry Only</p>
          <Button asChild className="w-full h-12 md:h-14 rounded-xl font-bold uppercase tracking-widest text-[10px]"><Link href="/auth/login">Staff Login</Link></Button>
        </div>
      </div>
    );
  }

  // Guard 3: Authenticated but waiting for Role Verification or Promotion Handshake
  if (isAdminRoleLoading || !adminRole || isPromoting) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em]">
          {isPromoting ? 'Synchronizing Registry Promotion...' : 'Verifying Administrative Identity...'}
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white">
      <aside className="w-64 bg-white border-r border-border flex flex-col hidden lg:flex shrink-0 relative z-20">
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-bold text-xs text-secondary leading-none uppercase tracking-tighter">Tansania</span>
              <span className="font-headline font-bold text-xs text-primary leading-none uppercase tracking-tighter">SDL Admin</span>
            </div>
          </Link>
        </div>
        <nav className="flex-grow p-4 space-y-1">
          {adminLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-xl transition-all duration-300 font-bold text-[10px] uppercase tracking-widest",
                  isActive 
                    ? "bg-secondary text-white shadow-lg" 
                    : "text-muted-foreground hover:bg-muted hover:text-secondary"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground/60")} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border">
          <button onClick={handleSignOut} className="flex items-center gap-3 w-full p-3 text-destructive hover:bg-destructive/5 rounded-xl font-bold text-[10px] uppercase tracking-widest">
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <main className="flex-grow overflow-y-auto bg-white relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-fixed" />
        <div className="relative z-10 min-h-full">
          {children}
        </div>
      </main>
    </div>
  );
}