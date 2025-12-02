"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

export default function CheckoutPage() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const router = useRouter();
  const { toast } = useToast();

  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return acc + (isNaN(price) ? 0 : price);
  }, 0);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });

      const { url } = await response.json();

      if (url) {
        router.push(url);
      } else {
        toast({
          title: "Error",
          description: "Could not redirect to payment page.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  if (cart.length === 0) {
    return (
      <section className="container py-12 md:py-24">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Add some services to your cart to proceed with checkout.
          </p>
          <Button onClick={() => router.push("/services")}>
            Browse Services
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-12 md:py-24">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Checkout</CardTitle>
            <CardDescription>
              Complete your purchase by clicking the button below.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleCheckout}>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Order Summary</h3>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <span className="text-muted-foreground">{item.title}</span>
                    <span>{item.price}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between items-center font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Proceed to Payment
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </section>
  );
}
