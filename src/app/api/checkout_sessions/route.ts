import { NextRequest, NextResponse } from "next/server";
import StripeNode from "stripe";

const stripe = new StripeNode(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { cart } = await req.json();

    const lineItems = cart.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.title,
        },
        unit_amount: parseFloat(item.price.replace(/[^0-9.-]+/g, "")) * 100,
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "klarna"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.nextUrl.origin}/payment/success`,
      cancel_url: `${req.nextUrl.origin}/payment/failure`,
    });

    if (session.url) {
      return NextResponse.json({ url: session.url });
    } else {
      return NextResponse.json(
        { error: "Error creating Stripe session" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return NextResponse.json(
      { error: "Error creating Stripe session" },
      { status: 500 }
    );
  }
}
