"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, ShoppingCart, User, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/lib/redux/store";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/icons";
import { CartSheet } from "@/components/cart/cart-sheet";
import { Badge } from "../ui/badge";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/achievements", label: "Achievements" },
  { href: "/quote", label: "Request a Quote" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart.items);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCartOpen(false);
  }, [pathname]);

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");

    // Replace locale segment
    segments[1] = newLocale;

    const newPath = segments.join("/");

    router.push(newPath);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <SheetHeader className="p-4">
                  <Link href="/" className="flex items-center space-x-2">
                    <Logo />
                  </Link>
                </SheetHeader>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "transition-colors hover:text-foreground/80",
                          pathname === link.href
                            ? "text-foreground"
                            : "text-foreground/60"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      href="/dashboard/login"
                      className={cn(
                        "transition-colors hover:text-foreground/80",
                        pathname === "/dashboard/login"
                          ? "text-foreground"
                          : "text-foreground/60"
                      )}
                    >
                      Customer Login
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center">
            <div className="flex items-center md:hidden">
              <Link href="/" className="flex items-center space-x-2">
                <Logo />
              </Link>
            </div>
          </div>

          <nav className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => switchLocale("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => switchLocale("fr")}>
                  French
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Shopping Cart"
                  className="relative"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {cart.length > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-1 -right-1 h-4 w-4 justify-center rounded-full p-0 text-xs"
                    >
                      {cart.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <CartSheet closeSheet={() => setIsCartOpen(false)} />
              </SheetContent>
            </Sheet>

            <Button
              asChild
              variant="ghost"
              size="icon"
              aria-label="Customer Login"
              className="hidden md:inline-flex"
            >
              <Link href="/dashboard/login">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
