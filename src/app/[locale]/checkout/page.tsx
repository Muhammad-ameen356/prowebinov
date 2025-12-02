
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { clearCart } from '@/lib/redux/slices/cart-slice';


export default function CheckoutPage() {
    const cart = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const router = useRouter();
    const { toast } = useToast();


    const total = cart.reduce((acc, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
        return acc + (isNaN(price) ? 0 : price);
    }, 0);

    const handleCheckout = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would process the payment here.
        console.log("Processing payment...");
        
        toast({
            title: "Purchase Successful!",
            description: "Thank you for your order. You will receive a confirmation email shortly.",
        });

        dispatch(clearCart());
        router.push('/dashboard');
    }

    if (cart.length === 0) {
        return (
            <section className="container py-12 md:py-24">
                 <div className="flex flex-col items-center justify-center h-full text-center">
                    <h1 className="text-2xl font-semibold mb-4">Your Cart is Empty</h1>
                    <p className="text-muted-foreground mb-8">Add some services to your cart to proceed with checkout.</p>
                    <Button onClick={() => router.push('/services')}>Browse Services</Button>
                </div>
            </section>
        )
    }

  return (
    <section className="container py-12 md:py-24">
        <div className="max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Checkout</CardTitle>
                    <CardDescription>Complete your purchase by providing your payment details.</CardDescription>
                </CardHeader>
                <form onSubmit={handleCheckout}>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="font-semibold">Order Summary</h3>
                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between items-center">
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

                         <div className="space-y-4">
                            <h3 className="font-semibold">Payment Information</h3>
                            <div className="space-y-2">
                                <Label htmlFor="name">Name on Card</Label>
                                <Input id="name" placeholder="John Doe" required />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="cardNumber">Card Number</Label>
                                <Input id="cardNumber" placeholder="1234 5678 9101 1121" required />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="expiry">Expiry</Label>
                                    <Input id="expiry" placeholder="MM/YY" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cvc">CVC</Label>
                                    <Input id="cvc" placeholder="123" required />
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="zip">ZIP</Label>
                                    <Input id="zip" placeholder="12345" required />
                                </div>
                            </div>
                        </div>

                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">
                            Complete Purchase
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    </section>
  );
}
