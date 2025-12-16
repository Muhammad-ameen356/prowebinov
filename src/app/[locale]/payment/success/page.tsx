import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccessPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale;

  return (
    <div className="flex min-h-[calc(100vh-14rem)] items-center justify-center bg-muted/40 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="mt-4 text-2xl">Payment Successful!</CardTitle>
          <CardDescription>
            Thank you for your purchase. Your order is being processed and you
            will receive a confirmation email shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href={`/${locale}/dashboard`}>Go to Dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
