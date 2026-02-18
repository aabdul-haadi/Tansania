
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  CalendarCheck, 
  MessageSquare, 
  FileText, 
  Settings, 
  Brain,
  LogOut,
  ChevronRight,
  Globe,
  Lock,
  Loader2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUser, useDoc, useFirestore } from '@/firebase';
import { doc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';

const adminLinks = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Page Registry', href: '/admin/pages', icon: Globe },
  { name: 'Blog Posts', href: '/admin/blog', icon: FileText },
  { name: 'AI Planner', href: '/admin/ai-planner', icon: Brain },
  { name: 'Safari Packages', href: '/admin/packages', icon: Package },
  { name: 'Bookings', href: '/admin/bookings', icon: CalendarCheck },
  { name: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
  { name: 'Site Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  
  // Check for admin role in Firestore
  const adminDocRef = React.useMemo(() => (firestore && user ? doc(firestore, 'roles_admin', user.uid) : null), [firestore, user]);
  const { data: adminRole, isLoading: isAdminRoleLoading } = useDoc(adminDocRef);

  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isUserLoading && !isAdminRoleLoading) {
      if (user && adminRole) {
        setIsAuthorized(true);
      } else if (user && !adminRole && pathname === '/admin') {
        // Allow the dashboard for the "Initialize" flow
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    }
  }, [user, isUserLoading, adminRole, isAdminRoleLoading, pathname]);

  if (isUserLoading || isAdminRoleLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-muted/10 gap-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <p className="text-muted-foreground font-bold text-xs uppercase tracking-widest">Verifying Credentials...</p>
      </div>
    );
  }

  // If not authorized, show a restricted access screen
  if (isAuthorized === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-6">
        <div className="max-w-md w-full text-center space-y-8 bg-card p-12 rounded-[3rem] shadow-2xl border border-white/5">
          <div className="w-20 h-20 bg-destructive/10 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-destructive" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white">Restricted Access</h1>
            <p className="text-muted-foreground">This area is reserved for authorized Serengeti Dreams personnel.</p>
          </div>
          <div className="pt-6 space-y-3">
            <Button asChild className="w-full rounded-2xl h-12" variant="secondary">
              <Link href="/auth/login">Administrator Login</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full rounded-2xl h-12 text-muted-foreground">
              <Link href="/">Return to Site</Link>
            </Button>
          </div>
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] pt-8">Security Protocol Active</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-background border-r flex flex-col hidden lg:flex">
        <div className="p-8 border-b">
          <Link href="/" className="flex items-center gap-2">
            <h2 className="font-headline text-2xl font-bold tracking-tight">
              Admin<span className="text-secondary">Hub</span>
            </h2>
          </Link>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-1">Serengeti Dreams CMS</p>
        </div>
        
        <nav className="flex-grow p-6 space-y-1">
          {adminLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center justify-between p-3.5 rounded-2xl transition-all duration-300 group",
                  isActive 
                    ? "bg-secondary text-white shadow-lg shadow-secondary/20" 
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground/60")} />
                  <span className="font-bold text-sm">{link.name}</span>
                </div>
                {isActive && <ChevronRight className="w-4 h-4" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t">
          <button className="flex items-center gap-3 w-full p-4 text-destructive hover:bg-destructive/5 rounded-2xl transition-colors font-bold text-sm">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-grow overflow-y-auto">
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b px-8 py-4 flex items-center justify-between lg:hidden">
           <h2 className="font-headline text-lg font-bold">Admin Hub</h2>
           <button className="p-2 bg-muted rounded-lg">
             <LayoutDashboard className="w-5 h-5" />
           </button>
        </header>
        <div className="min-h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
