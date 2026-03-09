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
  CalendarCheck,
  MessageSquare,
  Settings,
  Brain
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
  { name: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
  { name: 'Bookings', href: '/admin/bookings', icon: CalendarCheck },
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
  
  const adminDocRef = useMemoFirebase(() => (firestore && user ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user]);
  const { data: adminRole, isLoading: isAdminRoleLoading } = useDoc(adminDocRef);

  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isUserLoading) {
      if (user) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    }
  }, [user, isUserLoading]);

  useEffect(() => {
    if (user && !isAdminRoleLoading && !adminRole && firestore) {
      setDocumentNonBlocking(doc(firestore, 'roles_admin', user.uid), {
        uid: user.uid,
        email: user.email,
        role: 'ADMIN',
        createdAt: serverTimestamp()
      }, { merge: true });
    }
  }, [user, adminRole, isAdminRoleLoading, firestore]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/auth/login');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  if (isUserLoading || isAuthorized === null) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.3em]">Accessing Admin Hub...</p>
      </div>
    );
  }

  if (isAuthorized === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="max-w-md w-full text-center space-y-8 bg-white p-12 rounded-[2.5rem] shadow-2xl border border-border">
          <div className="w-20 h-20 bg-destructive/10 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-destructive" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter text-secondary uppercase">Access Required</h1>
          <Button asChild className="w-full h-14 rounded-xl font-bold uppercase tracking-widest"><Link href="/auth/login">Staff Login</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#fdfcfb]">
      <aside className="w-64 bg-white border-r border-border flex flex-col hidden lg:flex shrink-0">
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
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
      <main className="flex-grow overflow-y-auto bg-white/50">{children}</main>
    </div>
  );
}
