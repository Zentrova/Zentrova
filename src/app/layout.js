"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobileNav";
import ChatBotLauncher from "@/components/ChatBotLauncher";
import OfflineBanner from "@/components/offlineBanner";
import { BlogProvider } from '@/context/BlogContext';
import { Toaster, toast } from 'sonner';
import Loader from "@/components/Loader/Loader"; 

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    },500); // Adjust duration as needed

    return () => clearTimeout(timeout);
  }, [pathname]);
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
        <div className="fixed bottom-0 z-10 w-full sm:hidden">
          <MobileNav />
        </div>
        {!isHideLayout && <ChatBotLauncher />}

        {loading && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-zinc-900">
            <Loader />
          </div>
        )}
        <BlogProvider>
          <main className={`flex-grow transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          {children}</main>
        </BlogProvider>
        {!isHideLayout && <Footer />}
      </body>
    </html>
  );
}
