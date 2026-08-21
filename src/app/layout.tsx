import type { Metadata } from 'next';
import SiteHeader from '@/components/SiteHeader';
import FooterSitemap from '@/components/FooterSitemap';
import { SITE } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: `${SITE.title} — spot lattice`,
  description: SITE.landingNote,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="spot-lattice flex min-h-screen flex-col">
        <SiteHeader />
        <main className="w-full flex-1">{children}</main>
        <FooterSitemap />
      </body>
    </html>
  );
}
