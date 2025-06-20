import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Zeeks Homes | Premium Real Estate Developer',
  description: 'Zeeks Homes, a distinguished subsidiary of Zeeks Group of Companies, specializes in residential, commercial, and mixed-use developments with a focus on sustainability and innovation.',
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
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}