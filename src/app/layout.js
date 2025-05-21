
import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobileNav";

export const metadata = {
  title: "Zentrova",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col dark">
        {/* add "dark" class to body to change theme to Dark theme */}
      <Header/>
      <div className="fixed bottom-0 w-full sm:hidden">
        <MobileNav/>
      </div>
      <main className="flex-grow">
        {children}
      </main>
        <Footer/>
      </body>
    </html>
  );
}
