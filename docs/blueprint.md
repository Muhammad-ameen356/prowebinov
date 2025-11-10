# **App Name**: ProwebInov Agency

## Core Features:

- Service Package Display: Display service packages as interactive item cards with details, price, and CTA buttons.
- Shopping Cart & Checkout: Enable users to add service packages to a shopping cart and complete the checkout process with contact details and billing information.
- Payment Integration: Integrate Stripe (with Klarna) and PayPal for secure online payments using Next.js API routes, including webhook handling for payment confirmation.
- Invoice Generation and Email: Automatically generate signed PDF invoices upon successful payment and send them to customers via email using Nodemailer.
- Customer Panel with OTP Login: Implement an email-based OTP login system to provide customers access to a secure panel where they can view invoices and project statuses, accessible via /dashboard/login and /dashboard.
- Admin Dashboard: Create a protected admin dashboard with functionalities to manage service packages, orders, customers, and project statuses, accessible via /admin for login and /admin/dashboard after successful login.
- Quote Request Management: Process and manage quote requests submitted through the request quote form, integrating data validation, database storage, and email notifications to the sales team. An LLM might be used as a tool to improve lead prioritization based on project description.
- State Management with Redux Toolkit: Implement Redux Toolkit for efficient and scalable state management throughout the application.
- Request Quote Form: Create a request quote form with email, phone, name, message input
- Email Notifications: Use Nodemailer / SendGrid Templates: OTP email Order confirmation Payment confirmation + Invoice Quote received (to admin) Project status update
- Achievement Page: Add achievement page with past projects

## Style Guidelines:

- Primary color: #2A8BEB (a versatile blue that suggests reliability). This primary color provides a calming, corporate feel while remaining bright enough to be interesting.
- Background color: #F5F7FB (very light desaturated blue, from the brand's provided neutral color scheme).
- Accent color: #48C9EC (an analogous hue to the primary, a lighter blue).
- Headings and body: 'Inter' sans-serif for headings (weight 700) and body text (weight 400), as per the user's request. Note: currently only Google Fonts are supported.
- Consistent usage of icons from shadcn/ui to improve visual communication and highlight key features in service packages and throughout the site.
- Employ a mobile-first responsive design with breakpoints at sm (640px), md (768px), lg (1024px), and xl (1280px) to ensure optimal viewing experience across all devices.
- Subtle animations for button hovers, carousel transitions, and loading states to enhance user engagement.