
'use client'

import { ServiceForm } from '../../_components/service-form';
import { services } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function EditServicePage({ params }: { params: { id: string } }) {
  const service = services.find(s => s.id === params.id);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Edit Service</h1>
      <ServiceForm service={service} />
    </div>
  );
}
