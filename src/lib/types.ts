import type { LucideIcon } from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: keyof typeof import('lucide-react');
  features: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};
