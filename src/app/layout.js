import { Inter } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

/* -------------------- METADATA -------------------- */
export const metadata = {
  title: "Xentrova - Web Design & Development Agency",
  description:
    "Xentrova is a leading web design and development agency specializing in creating powerful, custom websites. We offer web development, UI/UX design, app development, Shopify stores, and ongoing maintenance.",
  keywords: [
    "web development",
    "web design",
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
  alternates: {
    canonical: "https://www.xentrova.in",
  },
  openGraph: {
    type: "website",
    url: "https://www.xentrova.in",
    title: "Xentrova - Web Design & Development Agency",
    description:
      "Xentrova is a leading web design and development agency specializing in creating powerful, custom websites.",
    siteName: "Xentrova",
    images: [
      {
        url: "https://www.xentrova.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xentrova - Web Design & Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@xentrova",
    creator: "@xentrova",
    title: "Xentrova - Web Design & Development Agency",
    description:
      "Xentrova is a leading web design and development agency specializing in creating powerful, custom websites.",
    images: ["https://www.xentrova.in/twitter-image.png"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
         <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="text/javascript"
          src="https://cdn.ywxi.net/js/1.js"
          async
        ></script>
      </head>

      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
