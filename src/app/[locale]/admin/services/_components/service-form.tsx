
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { createService, updateService, type ServiceFormState } from '@/app/[locale]/admin/services/actions';
import type { Service } from '@/lib/types';
import * as icons from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from 'next/link';

const initialState: ServiceFormState = {
  message: '',
};

function SubmitButton({ isEditing }: { isEditing: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {isEditing ? 'Update Service' : 'Create Service'}
    </Button>
  );
}

const lucideIconNames = Object.keys(icons).filter(key => key !== 'createLucideIcon' && key !== 'LucideIcon' && key !== 'icons');


export function ServiceForm({ service }: { service?: Service }) {
  const action = service ? updateService.bind(null, service.id) : createService;
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();

  const defaultValues = service || state.fields;

  useEffect(() => {
    if (state.message) {
      if (state.issues) {
        toast({
          title: 'Error',
          description: state.message + ': ' + state.issues.join(', '),
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);


  return (
    <Card>
      <form action={formAction}>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" placeholder="e.g., Web Development" required defaultValue={defaultValues?.title} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="e.g., Custom websites tailored to your business needs."
              required
              defaultValue={defaultValues?.description}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" name="price" placeholder="e.g., $1,500+" required defaultValue={defaultValues?.price} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="icon">Icon</Label>
            <Select name="icon" required defaultValue={defaultValues?.icon}>
                <SelectTrigger>
                    <SelectValue placeholder="Select an icon" />
                </SelectTrigger>
                <SelectContent>
                    {lucideIconNames.map(iconName => (
                        <SelectItem key={iconName} value={iconName}>{iconName}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="features">Features (comma-separated)</Label>
            <Input id="features" name="features" placeholder="e.g., Responsive Design, CMS Integration" required defaultValue={Array.isArray(defaultValues?.features) ? defaultValues.features.join(', ') : ''} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button asChild variant="outline">
            <Link href="/admin/services">Cancel</Link>
          </Button>
          <SubmitButton isEditing={!!service} />
        </CardFooter>
      </form>
    </Card>
  );
}
