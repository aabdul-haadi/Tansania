import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { ConditionalLayout } from '@/components/layout/ConditionalLayout';

export const metadata: Metadata = {
  title: 'Serengeti Dreams | Luxury Tanzania Safaris from Egypt',
  description: 'Expert Egypt-based travel agency specializing in premium Tanzania safari packages including Serengeti adventure and Zanzibar relaxation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <FirebaseClientProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
