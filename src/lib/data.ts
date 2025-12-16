import type { Service, Project } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const services: Service[] = [
  // 🌐 WEBSITE DEVELOPMENT
  // //! 1
  {
    id: "start-website",
    title: "Start Website",
    description:
      "A modern, mobile-friendly starter website built with HTML & JavaScript. Ideal for small businesses.",
    price: "€400",
    icon: "Globe",
    features: [
      "Predefined responsive design",
      "2 content pages",
      "Contact form",
      "1 Legal notice page",
      "Free hosting (.web.app subdomain)",
      "Speed & device optimized",
      "🌐 Optional custom domain — 10€/month",
      " ⚠️ Updates managed by us (no client panel)",
      " 💳 One-time payment — no subscription",
    ],
  },
  // //! 2
  {
    id: "showcase-website",
    title: "Showcase Website",
    description:
      "SEO-optimized static website for startups or personal brands with a clean professional presence.",
    price: "From €850",
    icon: "Layout",
    features: [
      "Custom UI design",
      "3 content pages",
      "1 Contact form",
      "1 Legal notice page",
      "Fast loading & responsive",
      "Optional hosting",
      "Optional hosting available from 15€/month",
    ],
  },
  // //! 3
  {
    id: "dynamic-website",
    title: "Dynamic Website / Blog",
    description:
      "Full-stack dynamic website with admin panel using React & Node.js.",
    price: "From €1500",
    icon: "Server",
    features: [
      "React frontend + Node.js backend",
      "4 pages (3 content + 1 contact)",
      "Admin panel for content updates",
      "API-driven architecture",
      "Scalable & secure",
      "Hosting not included",
    ],
  },
  // //! 4
  {
    id: "advanced-webapp",
    title: "Advanced Website / Web App",
    description:
      "Custom web applications built with React, Next.js, and Node.js for complex business needs.",
    price: "From €2500",
    icon: "Code",
    features: [
      "Full-stack JS setup (React + Node/Express)",
      "Custom design and admin panel",
      "Scalable backend APIs",
      "E-commerce / Booking / Community systems / Real state or product catalog",
      "High-performance architecture",
      "Deployment support",
    ],
  },
  // //! 5
  {
    id: "react-ecommerce",
    title: "React E-Commerce Website",
    description:
      "High-performance MERN-stack e-commerce platform with secure payments and admin dashboard.",
    price: "From €3000",
    icon: "ShoppingCart",
    features: [
      "MERN stack (MongoDB, Express, React, Node)",
      "Custom e-commerce design",
      "3 content pages + 1 contact page",
      "20 product listings",
      "Secure payment integration",
      "Order & product management",
      "Admin dashboard",
      "Optional hosting from 15€/month",
    ],
  },

  // 📱 MOBILE APP DEVELOPMENT
  // //! 1
  {
    id: "starter-app",
    title: "Starter Mobile App",
    description:
      "Simple and fast mobile app for Android built using React Native or Flutter.",
    price: "€550",
    icon: "Smartphone",
    features: [
      "Up to 3 screens",
      "Basic navigation",
      "Android build included",
      "React Native + Expo based framework",
      "Optional iOS build",
    ],
  },
  // //! 2
  {
    id: "standard-app",
    title: "Standard Mobile App",
    description:
      "Professionally designed mobile app with authentication and API integration.",
    price: "€1300",
    icon: "Layers",
    features: [
      "Custom UI/UX",
      "Up to 6 screens",
      "API integration",
      "Authentication (Email / Google login)",
      "Android + iOS builds",
    ],
  },
  // //! 3
  {
    id: "advanced-app",
    title: "Advanced Mobile App",
    description:
      "Scalable full-stack mobile app with custom backend and admin panel.",
    price: "€2800",
    icon: "Shield",
    features: [
      "Full stack (React Native + Node.js backend)",
      "Up to 10 screens",
      "Advanced authentication (Email, Google, Facebook etc.)",
      "Push notifications",
      "File upload & data storage",
      "Admin panel (Web based)",
      "Android & iOS builds",
    ],
  },
  // //! 4
  {
    id: "enterprise-app",
    title: "Enterprise App / SaaS",
    description:
      "Production-grade SaaS or enterprise mobile solution with cloud & real-time features.",
    price: "€3500",
    icon: "Cloud",
    features: [
      "Custom designed cross platform app",
      "Real-time chat & notifications live updates",
      "Cloud integration (AWS, Firebase, GCP)",
      "Admin dashboard",
      "CI/CD & deployment",
      "Enterprise-level security",
    ],
  },
  // //! 5
  {
    id: "ecommerce-mobile-app",
    title: "E-Commerce Mobile App",
    description:
      "Complete mobile shopping app with secure checkout and admin analytics.",
    price: "€4000",
    icon: "ShoppingBag",
    features: [
      "React Native + Node.js/MongoDB or Java/SQL setup",
      "Modern e-commerce UI/UX",
      "Secure payment gateways",
      "Product catalog, cart & checkout",
      "Order management dashboard",
      "Push notifications",
      "Android & iOS store-ready builds",
    ],
  },
  // //! 6
  {
    id: "app-publishing",
    title: "App Build & Publishing",
    description:
      "End-to-end Play Store & App Store publishing and compliance handling.",
    price: "€1000",
    icon: "Upload",
    features: [
      "Final build preparation for Android (Play Store) and iOS (App Store)",
      "Configuration of app signing, versioning, and assets (icons, splash screens, etc.)",
      "Creation or setup of your Google Play Console and Apple Developer Account (client",
      "Store listing setup (description, screenshots, privacy policy, etc.)",
      "Submission to both stores (Android & iOS)",
      "Submission & approval handling",
      "Handling of first approval and re-submission (if required)",
    ],
  },
];

const projectImages = {
  "project-1": PlaceHolderImages.find((p) => p.id === "project-1")!,
  "project-2": PlaceHolderImages.find((p) => p.id === "project-2")!,
  "project-3": PlaceHolderImages.find((p) => p.id === "project-3")!,
  "project-4": PlaceHolderImages.find((p) => p.id === "project-4")!,
};

export const projects: Project[] = [
  {
    id: "proj-1",
    title: 'E-commerce Platform for "InnovateX"',
    description:
      "A complete e-commerce solution with custom features, boosting their sales by 40%.",
    imageUrl: projectImages["project-1"].imageUrl,
    imageHint: projectImages["project-1"].imageHint,
  },
  {
    id: "proj-2",
    title: 'Mobile App for "ConnectSphere"',
    description:
      "A cross-platform mobile application to enhance user engagement and connectivity.",
    imageUrl: projectImages["project-2"].imageUrl,
    imageHint: projectImages["project-2"].imageHint,
  },
  {
    id: "proj-3",
    title: 'BI Dashboard for "DataDriven Inc."',
    description:
      "An intuitive and powerful business intelligence dashboard for real-time data analysis.",
    imageUrl: projectImages["project-3"].imageUrl,
    imageHint: projectImages["project-3"].imageHint,
  },
  {
    id: "proj-4",
    title: 'Corporate Rebranding for "Prestige Corp"',
    description:
      "A full rebranding project, including a new website, logo, and marketing materials.",
    imageUrl: projectImages["project-4"].imageUrl,
    imageHint: projectImages["project-4"].imageHint,
  },
];
