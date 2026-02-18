
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  CalendarCheck, 
  MessageSquare, 
  FileText, 
  Settings, 
  Brain,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const adminLinks = [
  { name: 'Overview', href: '/admin', icon: LayoutDashboard },
  { name: 'Packages', href: '/admin/packages', icon: Package },
  { name: 'Bookings', href: '/admin/bookings', icon: CalendarCheck },
  { name: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
  { name: 'Blog', href: '/admin/blog', icon: FileText },
  { name: 'AI Planner', href: '/admin/ai-planner', icon: Brain },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-background border-r flex flex-col hidden lg:flex">
        <div className="p-6 border-b">
          <h2 className="font-headline text-xl font-bold flex items-center gap-2">
            Admin <span className="text-secondary">Panel</span>
          </h2>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          {adminLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center justify-between p-3 rounded-xl transition-colors group",
                  isActive 
                    ? "bg-secondary text-white" 
                    : "hover:bg-muted text-muted-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                </div>
                {isActive && <ChevronRight className="w-4 h-4" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t">
          <button className="flex items-center gap-3 w-full p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow overflow-y-auto">
        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b p-4 lg:hidden">
          {/* Mobile Admin Header Placeholder */}
           <h2 className="font-headline text-lg font-bold">Admin Panel</h2>
        </div>
        {children}
      </main>
    </div>
  );
}
