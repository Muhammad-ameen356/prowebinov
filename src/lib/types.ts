import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  featureKeys: string[];
  price: string;
  icon: keyof typeof import("lucide-react");
};

export type Project = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  imageUrl: string;
  imageHint?: string;
};
