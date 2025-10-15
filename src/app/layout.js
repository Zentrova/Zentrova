"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

// import '@wordpress/block-library/build-style/style.css';
import ChatBotLauncher from "@/components/ChatBotLauncher";
import Loader from "@/components/Loader/Loader";
import MainLoader from "@/components/MainLoader";
import { BlogProvider } from '@/context/BlogContext';
import { Toaster } from 'sonner';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideLayoutRoutes = ["/page-not-found"];
  const isAuthLayout = pathname.startsWith("/auth");
  const isHideLayout = hideLayoutRoutes.includes(pathname) || isAuthLayout;
  return (

    <html lang="en">
      <head>
        <title>Xentrova</title>
        <meta name="description" content="A powerful web development team portfolio" />
        <meta name="theme-color" content="#ffffff" />

        {/* Favicon icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-6GEEZ3WVKH"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-6GEEZ3WVKH');
        </script> */}
      </head>

      <body className="min-h-screen flex flex-col">
        {/* <OfflineBanner /> */}
        <Toaster
          position="top-center" // ⬅️ Center position
          richColors
          expand
          className="z-[9999]"
          toastOptions={{
            classNames: {
              toast: "rounded-xl shadow-xl border bg-white dark:bg-zinc-900 text-black dark:text-white p-4",
            },
          }}
        />
        {!isHideLayout && <Header />}
        {!isHideLayout && <ChatBotLauncher />}
        <MainLoader />

        {/* <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-zinc-900"> */}
        <Loader />
        {/* </div> */}
        <BlogProvider>
          <main>
            {children}</main>
        </BlogProvider>
        {!isHideLayout && <Footer />}
      </body>
    </html>
  );
}
