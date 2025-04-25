import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/providers/auth-provider';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Zeeks Homes',
  description: 'Administrative dashboard for Zeeks Homes',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <div className="flex min-h-screen">
            <AdminSidebar />
            <div className="flex-1 md:pl-64">
              <AdminHeader />
              <main className="p-4 md:p-8 bg-gray-100">{children}</main>
            </div>
          </div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
