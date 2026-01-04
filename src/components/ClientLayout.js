'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ChatBotLauncher from '@/components/ChatBotLauncher';
import Loader from '@/components/Loader/Loader';
import MainLoader from '@/components/MainLoader';
import { BlogProvider } from '@/context/BlogContext';
import { ProjectProvider } from '@/context/projectContext';
import { Toaster } from 'sonner';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideLayoutRoutes = ['/page-not-found'];
  const isAuthLayout = pathname.startsWith('/auth');
  const isHideLayout = hideLayoutRoutes.includes(pathname) || isAuthLayout;

  return (
    <>
      <Toaster
        position="top-center"
        richColors
        expand
        className="z-[9999]"
        toastOptions={{
          classNames: {
            toast: 'rounded-xl shadow-xl border bg-white dark:bg-zinc-900 text-black dark:text-white p-4',
          },
        }}
      />
      {!isHideLayout && <Header />}
      {!isHideLayout && <ChatBotLauncher />}
      <MainLoader />
      <Loader />
      <BlogProvider>
        <ProjectProvider>
        <main>{children}</main>
        </ProjectProvider>
      </BlogProvider>
      {!isHideLayout && <Footer />}
    </>
  );
}
