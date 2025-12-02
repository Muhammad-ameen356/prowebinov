import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ReduxProvider } from "@/lib/redux/provider";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import RootLayoutContent from "./root-layout-content";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "ProwebInov Agency",
  description: "Innovative web solutions for your business.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  // if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ReduxProvider>
            <RootLayoutContent>{children}</RootLayoutContent>
          </ReduxProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
