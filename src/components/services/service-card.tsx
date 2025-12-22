"use client";

import type { Service } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import * as icons from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/redux/slices/cart-slice";
import { useTranslations } from "next-intl";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const t = useTranslations("services");
  const tCart = useTranslations("cart");

  const Icon = icons[service.icon] as icons.LucideIcon;
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleAddToCart = () => {
    dispatch(addToCart(service));

    toast({
      title: tCart("addedTitle"),
      description: tCart("addedDescription", {
        service: t(service.titleKey),
      }),
      action: (
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
        </div>
      ),
    });
  };

  return (
    <Card className="flex flex-col bg-card transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="items-center text-center">
        <div className="bg-primary/10 p-3 rounded-full">
          {Icon && <Icon className="w-8 h-8 text-primary" />}
        </div>

        <CardTitle className="pt-4">{t(service.titleKey)}</CardTitle>

        <CardDescription>{t(service.descriptionKey)}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-4">
          <p className="text-3xl font-bold text-center">{service.price}</p>

          <ul className="space-y-2 text-sm text-muted-foreground">
            {service.featureKeys.map((featureKey) => (
              <li key={featureKey} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{t(featureKey)}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" onClick={handleAddToCart}>
          {tCart("addToCart")}
        </Button>
      </CardFooter>
    </Card>
  );
}
