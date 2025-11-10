
'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { removeFromCart, clearCart } from '@/lib/redux/slices/cart-slice';
import { SheetHeader, SheetTitle, SheetFooter, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as icons from 'lucide-react';


interface CartSheetProps {
    closeSheet: () => void;
}

export function CartSheet({ closeSheet }: CartSheetProps) {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();


  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
    return acc + (isNaN(price) ? 0 : price);
  }, 0);

  const handleBrowseServices = () => {
    closeSheet();
    router.push('/services');
  }
  
  const handleCheckout = () => {
    closeSheet();
    router.push('/checkout');
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <SheetHeader className="pr-6">
        <SheetTitle>Shopping Cart</SheetTitle>
        <SheetDescription>
          You have {cart.length} item(s) in your cart.
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col h-full">
        {cart.length > 0 ? (
          <>
            <ScrollArea className="flex-1 my-4 pr-6">
              <div className="space-y-4">
                {cart.map((item) => {
                    const Icon = icons[item.icon] as icons.LucideIcon;
                    return (
                        <div key={item.id} className="flex items-center justify-between gap-4 p-4 border rounded-lg">
                            <div className="flex items-center gap-4">
                                {Icon && <Icon className="h-8 w-8 text-primary" />}
                                <div>
                                    <p className="font-semibold">{item.title}</p>
                                    <p className="text-sm text-muted-foreground">{item.price}</p>
                                </div>
                            </div>
                            <Button variant="outline" size="icon" onClick={() => dispatch(removeFromCart(item.id))}>
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Remove item</span>
                            </Button>
                        </div>
                    )
                })}
              </div>
            </ScrollArea>
            <Separator className="my-4" />
            <SheetFooter className="p-6 pt-0 flex-col sm:flex-col items-start space-y-4">
                <div className="flex justify-between w-full font-bold text-lg">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                 <Button className="w-full" size="lg" onClick={handleCheckout}>
                   Proceed to Checkout
                 </Button>
                 <Button variant="outline" className="w-full" onClick={handleClearCart}>
                    Clear Cart
                </Button>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center space-y-4">
            <p className="text-muted-foreground">Your cart is empty.</p>
            <Button variant="outline" onClick={handleBrowseServices}>
                Browse Services
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
