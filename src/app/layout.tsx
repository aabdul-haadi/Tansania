import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { ConditionalLayout } from '@/components/layout/ConditionalLayout';
import { siteConfig, getCanonicalUrl } from '@/lib/seo-config';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Luxury Tanzania Safaris & Zanzibar`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Tanzania Safari', 'Serengeti Expedition', 'Zanzibar Luxury', 'Egypt Travel Agency', 'African Safari Experts'],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.jpg', // Ensure this exists in /public
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
    creator: '@serengetidreams',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#e3510d',
  width: 'device-width',
  initialScale: 1,
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Global Structured Data */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/logo.png`,
            sameAs: Object.values(siteConfig.links),
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+49-30-22608080',
              contactType: 'customer service',
              areaServed: ['DE', 'EG', 'TZ'],
              availableLanguage: ['German', 'English', 'Arabic'],
            },
          }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen" suppressHydrationWarning>
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
