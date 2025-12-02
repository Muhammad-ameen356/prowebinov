"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Bell,
  Home,
  Package,
  ShoppingCart,
  Users,
  LineChart,
  LogOut,
  Menu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  const segments = pathname.split("/");
  const locale = segments[1];
  const adminRoot = `/${locale}/admin`;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const isAdminLoggedIn =
        localStorage.getItem("isAdminLoggedIn") === "true";
      if (!isAdminLoggedIn && pathname !== adminRoot) {
        router.push(adminRoot);
      }
    }
  }, [pathname, router, isClient]);

  const navLinks = [
    { href: `${adminRoot}/dashboard`, label: "Dashboard", icon: Home },
    {
      href: `${adminRoot}/orders`,
      label: "Orders",
      icon: ShoppingCart,
      badge: "6",
    },
    { href: `${adminRoot}/services`, label: "Services", icon: Package },
    { href: `${adminRoot}/customers`, label: "Customers", icon: Users },
    { href: "#", label: "Analytics", icon: LineChart },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    router.push(adminRoot);
  };

  if (pathname === adminRoot || !isClient) {
    return <>{children}</>;
  }

  const isAdminLoggedIn = isClient
    ? localStorage.getItem("isAdminLoggedIn") === "true"
    : false;
  if (!isAdminLoggedIn) {
    return null;
  }

  const NavContent = () => (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              isActive && "bg-muted text-primary"
            )}
          >
            <Icon className="h-4 w-4" />
            {link.label}
            {link.badge && (
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {link.badge}
              </Badge>
            )}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Logo />
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto">
            <NavContent />
          </div>
          <div className="mt-auto p-4">
            <Button
              variant="outline"
              className="w-full justify-start gap-3"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="flex h-[60px] items-center border-b px-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                >
                  <Logo />
                </Link>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <NavContent />
              </div>
              <div className="mt-auto p-4">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex-1 text-center">
            <Link
              href={`${adminRoot}/dashboard`}
              className="text-lg font-semibold"
            >
              Dashboard
            </Link>
          </div>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
