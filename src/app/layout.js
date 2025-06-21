"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobileNav";
import ChatBotLauncher from "@/components/ChatBotLauncher";
import OfflineBanner from "@/components/offlineBanner";

export default function RootLayout({ children }) {
  const pathname = usePathname();
 const hideLayout = ["/page-not-found"].includes(pathname);


  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {!hideLayout && <Header />}
        <div className="fixed bottom-0 z-10 w-full sm:hidden">
          <MobileNav />
        </div>
        <main className="flex-grow">{children}</main>
        {!hideLayout && <Footer />}

         {!hideLayout && <ChatBotLauncher />}

         <OfflineBanner />


      </body>
    </html>
  );
}
