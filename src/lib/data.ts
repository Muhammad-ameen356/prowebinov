import type { Service, Project } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";

/* ===========================
   SERVICES
=========================== */

export const services: Service[] = [
  {
    id: "start-website",
    titleKey: "startWebsite.title",
    descriptionKey: "startWebsite.description",
    price: "€400",
    icon: "Globe",
    featureKeys: [
      "startWebsite.features.design",
      "startWebsite.features.pages",
      "startWebsite.features.contact",
      "startWebsite.features.legal",
      "startWebsite.features.hosting",
      "startWebsite.features.speed",
      "startWebsite.features.domain",
      "startWebsite.features.updates",
      "startWebsite.features.payment",
    ],
  },

  {
    id: "showcase-website",
    titleKey: "showcaseWebsite.title",
    descriptionKey: "showcaseWebsite.description",
    price: "From €850",
    icon: "Layout",
    featureKeys: [
      "showcaseWebsite.features.design",
      "showcaseWebsite.features.pages",
      "showcaseWebsite.features.contact",
      "showcaseWebsite.features.legal",
      "showcaseWebsite.features.performance",
      "showcaseWebsite.features.hosting",
    ],
  },

  {
    id: "dynamic-website",
    titleKey: "dynamicWebsite.title",
    descriptionKey: "dynamicWebsite.description",
    price: "From €1500",
    icon: "Server",
    featureKeys: [
      "dynamicWebsite.features.stack",
      "dynamicWebsite.features.pages",
      "dynamicWebsite.features.admin",
      "dynamicWebsite.features.api",
      "dynamicWebsite.features.security",
      "dynamicWebsite.features.hosting",
    ],
  },

  {
    id: "advanced-webapp",
    titleKey: "advancedWebapp.title",
    descriptionKey: "advancedWebapp.description",
    price: "From €2500",
    icon: "Code",
    featureKeys: [
      "advancedWebapp.features.stack",
      "advancedWebapp.features.design",
      "advancedWebapp.features.api",
      "advancedWebapp.features.systems",
      "advancedWebapp.features.performance",
      "advancedWebapp.features.deployment",
    ],
  },

  {
    id: "react-ecommerce",
    titleKey: "reactEcommerce.title",
    descriptionKey: "reactEcommerce.description",
    price: "From €3000",
    icon: "ShoppingCart",
    featureKeys: [
      "reactEcommerce.features.stack",
      "reactEcommerce.features.design",
      "reactEcommerce.features.pages",
      "reactEcommerce.features.products",
      "reactEcommerce.features.payment",
      "reactEcommerce.features.management",
      "reactEcommerce.features.admin",
      "reactEcommerce.features.hosting",
    ],
  },

  {
    id: "starter-app",
    titleKey: "starterApp.title",
    descriptionKey: "starterApp.description",
    price: "€550",
    icon: "Smartphone",
    featureKeys: [
      "starterApp.features.screens",
      "starterApp.features.navigation",
      "starterApp.features.android",
      "starterApp.features.framework",
      "starterApp.features.ios",
    ],
  },

  {
    id: "standard-app",
    titleKey: "standardApp.title",
    descriptionKey: "standardApp.description",
    price: "€1300",
    icon: "Layers",
    featureKeys: [
      "standardApp.features.ui",
      "standardApp.features.screens",
      "standardApp.features.api",
      "standardApp.features.auth",
      "standardApp.features.platforms",
    ],
  },

  {
    id: "advanced-app",
    titleKey: "advancedApp.title",
    descriptionKey: "advancedApp.description",
    price: "€2800",
    icon: "Shield",
    featureKeys: [
      "advancedApp.features.stack",
      "advancedApp.features.screens",
      "advancedApp.features.auth",
      "advancedApp.features.push",
      "advancedApp.features.storage",
      "advancedApp.features.admin",
      "advancedApp.features.platforms",
    ],
  },

  {
    id: "enterprise-app",
    titleKey: "enterpriseApp.title",
    descriptionKey: "enterpriseApp.description",
    price: "€3500",
    icon: "Cloud",
    featureKeys: [
      "enterpriseApp.features.design",
      "enterpriseApp.features.realtime",
      "enterpriseApp.features.cloud",
      "enterpriseApp.features.admin",
      "enterpriseApp.features.cicd",
      "enterpriseApp.features.security",
    ],
  },

  {
    id: "ecommerce-mobile-app",
    titleKey: "ecommerceMobileApp.title",
    descriptionKey: "ecommerceMobileApp.description",
    price: "€4000",
    icon: "ShoppingBag",
    featureKeys: [
      "ecommerceMobileApp.features.stack",
      "ecommerceMobileApp.features.ui",
      "ecommerceMobileApp.features.payment",
      "ecommerceMobileApp.features.catalog",
      "ecommerceMobileApp.features.orders",
      "ecommerceMobileApp.features.push",
      "ecommerceMobileApp.features.platforms",
    ],
  },

  {
    id: "app-publishing",
    titleKey: "appPublishing.title",
    descriptionKey: "appPublishing.description",
    price: "€1000",
    icon: "Upload",
    featureKeys: [
      "appPublishing.features.build",
      "appPublishing.features.signing",
      "appPublishing.features.accounts",
      "appPublishing.features.listing",
      "appPublishing.features.submission",
      "appPublishing.features.approval",
    ],
  },
];

/* ===========================
   PROJECTS
=========================== */

const projectImages = {
  "project-1": PlaceHolderImages.find((p) => p.id === "project-1")!,
  "project-2": PlaceHolderImages.find((p) => p.id === "project-2")!,
  "project-3": PlaceHolderImages.find((p) => p.id === "project-3")!,
  "project-4": PlaceHolderImages.find((p) => p.id === "project-4")!,
};

export const projects: Project[] = [
  {
    id: "proj-1",
    titleKey: "innovatex.title",
    descriptionKey: "innovatex.description",
    imageUrl: projectImages["project-1"].imageUrl,
    imageHint: projectImages["project-1"].imageHint,
  },
  {
    id: "proj-2",
    titleKey: "connectsphere.title",
    descriptionKey: "connectsphere.description",
    imageUrl: projectImages["project-2"].imageUrl,
    imageHint: projectImages["project-2"].imageHint,
  },
  {
    id: "proj-3",
    titleKey: "datadriven.title",
    descriptionKey: "datadriven.description",
    imageUrl: projectImages["project-3"].imageUrl,
    imageHint: projectImages["project-3"].imageHint,
  },
  {
    id: "proj-4",
    titleKey: "prestige.title",
    descriptionKey: "prestige.description",
    imageUrl: projectImages["project-4"].imageUrl,
    imageHint: projectImages["project-4"].imageHint,
  },
];
