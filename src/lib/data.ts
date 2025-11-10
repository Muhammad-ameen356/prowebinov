import type { Service, Project } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom websites tailored to your business needs.',
    price: '$1,500+',
    icon: 'Code',
    features: ['Responsive Design', 'CMS Integration', 'SEO Optimized', 'Fast Loading Speed'],
  },
  {
    id: 'e-commerce',
    title: 'E-commerce Solutions',
    description: 'Build your online store and start selling products.',
    price: '$3,000+',
    icon: 'ShoppingCart',
    features: ['Secure Payments', 'Product Management', 'Order Tracking', 'Customer Accounts'],
  },
  {
    id: 'cloud-hosting',
    title: 'Cloud & Hosting',
    description: 'Reliable and scalable hosting solutions.',
    price: '$50/mo',
    icon: 'Cloud',
    features: ['99.9% Uptime', 'Daily Backups', '24/7 Support', 'Scalable Resources'],
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'Engage your audience with effective email campaigns.',
    price: '$500/mo',
    icon: 'Mail',
    features: ['Campaign Strategy', 'Template Design', 'List Management', 'Performance Analytics'],
  },
];

const projectImages = {
  'project-1': PlaceHolderImages.find(p => p.id === 'project-1')!,
  'project-2': PlaceHolderImages.find(p => p.id === 'project-2')!,
  'project-3': PlaceHolderImages.find(p => p.id === 'project-3')!,
  'project-4': PlaceHolderImages.find(p => p.id === 'project-4')!,
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'E-commerce Platform for "InnovateX"',
    description: 'A complete e-commerce solution with custom features, boosting their sales by 40%.',
    imageUrl: projectImages['project-1'].imageUrl,
    imageHint: projectImages['project-1'].imageHint,
  },
  {
    id: 'proj-2',
    title: 'Mobile App for "ConnectSphere"',
    description: 'A cross-platform mobile application to enhance user engagement and connectivity.',
    imageUrl: projectImages['project-2'].imageUrl,
    imageHint: projectImages['project-2'].imageHint,
  },
  {
    id: 'proj-3',
    title: 'BI Dashboard for "DataDriven Inc."',
    description: 'An intuitive and powerful business intelligence dashboard for real-time data analysis.',
    imageUrl: projectImages['project-3'].imageUrl,
    imageHint: projectImages['project-3'].imageHint,
  },
  {
    id: 'proj-4',
    title: 'Corporate Rebranding for "Prestige Corp"',
    description: 'A full rebranding project, including a new website, logo, and marketing materials.',
    imageUrl: projectImages['project-4'].imageUrl,
    imageHint: projectImages['project-4'].imageHint,
  },
];
