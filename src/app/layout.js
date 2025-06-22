"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobileNav";
import ChatBotLauncher from "@/components/ChatBotLauncher";
import OfflineBanner from "@/components/offlineBanner";
import { BlogProvider } from '@/context/BlogContext';
import { Toaster, toast } from 'sonner';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = ["/page-not-found"].includes(pathname);


  return (
    <html lang="en">
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

        {!hideLayout && <Header />}
        <div className="fixed bottom-0 z-10 w-full sm:hidden">
          <MobileNav />
        </div>
        <BlogProvider>
          <main className="flex-grow">{children}</main>
        </BlogProvider>
        {!hideLayout && <Footer />}
        {!hideLayout && <ChatBotLauncher />}
      </body>
    </html>
  );
}
