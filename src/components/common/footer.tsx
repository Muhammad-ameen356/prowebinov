import Link from 'next/link';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/quote', label: 'Request a Quote' },
];

const socialLinks = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Twitter, label: 'Twitter' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            <p className="text-muted-foreground max-w-xs text-center md:text-left">
              Innovative web solutions for your modern business.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-semibold tracking-wider uppercase">Navigation</h3>
            <nav className="flex flex-col items-center md:items-start gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
             <h3 className="font-semibold tracking-wider uppercase">Follow Us</h3>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button key={link.label} variant="ghost" size="icon" asChild>
                    <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ProwebInov Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
