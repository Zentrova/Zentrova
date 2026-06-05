import { Inter } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'


import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

/* -------------------- METADATA -------------------- */
export const metadata = {
  title: "Xentrova | Custom Software, Web & App Development agency",
  description:
    "Xentrova is a full-stack software development company building scalable web apps, mobile applications, SaaS platforms, and custom management systems for startups and enterprises worldwide.",
  keywords: [
    "web development",
    "web design",
    "software development company",
    "custom software development",
    "SaaS platform development",
    "AI automation",
    "artificial intelligence solutions", // ADD
    "business automation software",     // ADD
    "custom web application development", // ADD
    "CRM development",                
    "startup software development",
    "iOS app development",              // ADD
    "Android app development",
    "enterprise software development",
    "appointment booking systems",
    "full stack development team",
    "web app development",
    "mobile app development",
    "UI/UX",
    "app development",
    "Shopify",
    "e-commerce",
    "portfolio",
    "Xentrova",
  ],
  authors: [{ name: "Xentrova" }],
  creator: "Xentrova",
  publisher: "Xentrova",
  metadataBase: new URL("https://www.xentrova.in"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://www.xentrova.in",
    title: "Xentrova | AI Automation, Custom Software & App Development",
    description:
      "Xentrova builds AI-powered automation systems, custom websites, mobile apps, SaaS platforms and CRM solutions for startups and businesses worldwide.",
    siteName: "Xentrova",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xentrova | Scalable Software, SaaS & App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@xentrova",
    creator: "@xentrova",
    title: "Xentrova | Scalable Software, SaaS & App Development",
    description:
      "Xentrova is a digital technology agency helping startups and businesses build scalable, secure, and high-performance web & mobile products.",
    images: ["https://www.xentrova.in/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

/* -------------------- VIEWPORT (themeColor MOVED HERE) -------------------- */
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

/* -------------------- ROOT LAYOUT -------------------- */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning   data-scroll-behavior="smooth">
      <GoogleTagManager gtmId={process.env.NEXT_GOOGLE_TAG_MANGER} />
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var theme = localStorage.getItem('theme');

                if (!theme) {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light';
                }

                document.documentElement.classList.toggle(
                  'dark',
                  theme === 'dark'
                );
              } catch (e) {}
            })();
          `}
        </Script>
        <Script
          src="https://cdn.ywxi.net/js/1.js"
          strategy="lazyOnload"
        />
      </head>

      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
