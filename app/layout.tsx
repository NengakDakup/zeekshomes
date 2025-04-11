import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Zeeks Homes | Premium Real Estate Developer',
  description: 'Zeeks Homes is a leading real estate developer in Nigeria, specializing in residential and commercial properties.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-segma">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}