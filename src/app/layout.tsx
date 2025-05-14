"use client";

import '@/styles/globals.css';
import '@/styles/cursor.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { LoadingScreen } from '@/components/loading';
import { CustomCursor } from '@/components/custom-cursor';
import { useState, useEffect } from 'react';
import barba from '@barba/core';
import gsap from 'gsap';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Barba
    barba.init({
      transitions: [{
        name: 'opacity-transition',
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: "power2.inOut"
          });
        },
        enter(data) {
          return gsap.from(data.next.container, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.inOut"
          });
        }
      }],
      views: [{
        namespace: 'home',
        beforeEnter() {
          // Initialize page-specific animations
          gsap.to('.hero-content', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
          });
        }
      }]
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loader" />
            ) : (
              <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen bg-background"
                data-barba="wrapper"
              >
                <Navigation />
                <main className="container mx-auto px-4 pt-20" data-barba="container">
                  {children}
                </main>
              </motion.div>
            )}
          </AnimatePresence>
          <ProgressBar
            height="4px"
            color="hsl(var(--primary))"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </ThemeProvider>
      </body>
    </html>
  );
}