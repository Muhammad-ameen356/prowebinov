"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { ReactNode } from "react";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Toaster } from "@/components/ui/toaster";

interface RootLayoutContentProps {
  children: ReactNode;
}

export default function RootLayoutContent({
  children,
}: RootLayoutContentProps) {
  const pathname = usePathname();

  // Extract locale (first segment)
  const segments = pathname.split("/");
  const locale = segments[1];

  // Detect locale-aware admin path
  const isAdminRoute = pathname.startsWith(`/${locale}/admin`);

  return (
    <>
      <div className="relative flex min-h-dvh flex-col">
        {!isAdminRoute && <Header />}
        <main className={cn("flex-1", isAdminRoute && "min-h-screen")}>
          {children}
        </main>
        {!isAdminRoute && <Footer />}
      </div>

      <Toaster />
    </>
  );
}
