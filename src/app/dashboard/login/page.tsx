
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons';
import { KeyRound, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function CustomerLoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState('');

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem('isCustomerLoggedIn') === 'true') {
      router.push('/dashboard');
    }
  }, [router]);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically call an API to send the OTP
    setOtpSent(true);
    toast({
        title: 'Magic Link Sent',
        description: `A login link has been sent to ${email}.`,
    });
  };

  const handleLogin = () => {
    // In a real app, you'd verify the OTP here.
    localStorage.setItem('isCustomerLoggedIn', 'true');
    router.push('/dashboard');
  };

  const handleUseDifferentEmail = () => {
    setOtpSent(false);
    setEmail('');
  };

  return (
    <div className="flex min-h-[calc(100vh-14rem)] items-center justify-center bg-muted/40 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Logo className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl">Customer Login</CardTitle>
          <CardDescription>
            {otpSent
              ? `An OTP has been sent to ${email}`
              : 'Access your dashboard with a secure link sent to your email.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                    />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Send Magic Link
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                  <Label htmlFor="otp" className="sr-only">One-Time Password</Label>
                  <div className="relative">
                      <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input id="otp" type="text" placeholder="  –  –  –  –  –  –" required className="pl-10 text-center tracking-[.5em]" />
                  </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                  <Button onClick={handleLogin} type="submit" className="w-full">
                      Login with Magic Link
                  </Button>
                  <Button variant="link" size="sm" onClick={handleUseDifferentEmail}>
                      Use a different email
                  </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
