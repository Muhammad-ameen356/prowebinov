
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const isCustomerLoggedIn = localStorage.getItem('isCustomerLoggedIn') === 'true';
      if (!isCustomerLoggedIn && pathname !== '/dashboard/login') {
        router.push('/dashboard/login');
      }
    }
  }, [pathname, router, isClient]);

  const handleLogout = () => {
    localStorage.removeItem('isCustomerLoggedIn');
    router.push('/dashboard/login');
  };

  if (pathname === '/dashboard/login' || !isClient) {
    return <>{children}</>;
  }

  const isCustomerLoggedIn = isClient ? localStorage.getItem('isCustomerLoggedIn') === 'true' : false;
  if (!isCustomerLoggedIn) {
      return null;
  }

  return (
    <div className="relative">
       <div className="absolute top-4 right-4">
            <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
            </Button>
       </div>
      {children}
    </div>
  );
}
