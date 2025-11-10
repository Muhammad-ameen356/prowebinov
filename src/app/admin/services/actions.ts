
'use server';

import { z } from 'zod';
import { services } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { Service } from '@/lib/types';


const serviceSchema = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
  price: z.string().min(1, { message: 'Price is required.' }),
  icon: z.string().min(1, { message: 'Icon is required.' }),
  features: z.string().min(1, { message: 'At least one feature is required.' }),
});

export type ServiceFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function createService(prevState: ServiceFormState, data: FormData) {
  const formData = Object.fromEntries(data);
  const parsed = serviceSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }
  
  const newService: Service = {
      id: `service-${Date.now()}`,
      ...parsed.data,
      features: parsed.data.features.split(',').map(f => f.trim()),
      icon: parsed.data.icon as any,
  }

  // In a real app, you would save this to a database
  console.log('Creating new service:', newService);
  services.push(newService);

  revalidatePath('/admin/services');
  redirect('/admin/services');
}


export async function updateService(id: string, prevState: ServiceFormState, data: FormData) {
  const formData = Object.fromEntries(data);
  const parsed = serviceSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  const serviceIndex = services.findIndex(s => s.id === id);
  if (serviceIndex === -1) {
    return {
      message: "Service not found."
    }
  }

  const updatedService: Service = {
    id,
    ...parsed.data,
    features: parsed.data.features.split(',').map(f => f.trim()),
    icon: parsed.data.icon as any,
  }

  // In a real app, you would update this in a database
  console.log('Updating service:', updatedService);
  services[serviceIndex] = updatedService;

  revalidatePath('/admin/services');
  revalidatePath(`/admin/services/${id}/edit`);
  redirect('/admin/services');
}


export async function deleteService(id: string) {
    const serviceIndex = services.findIndex(s => s.id === id);
    if (serviceIndex > -1) {
        // In a real app, you would delete this from a database
        console.log('Deleting service with ID:', id);
        services.splice(serviceIndex, 1);
        revalidatePath('/admin/services');
    }
}
