"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Button } from "@/frontend/components/ui/button";
import { ChevronDownIcon, Crown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Scene = dynamic(() => import("@/frontend/components/scene"), { ssr: false });

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <main className="relative">
      {/* Hero Section with 3D Scene */}
      <motion.div 
        className="relative h-screen"
        style={{ opacity, scale, y }}
      >
        {/* 3D Scene Background */}
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-divine p-12 rounded-2xl max-w-5xl mx-auto border-divine"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mb-6"
            >
              <Crown className="w-16 h-16 text-primary" />
            </motion.div>
            <h1 className="heading-divine mb-6">
              Divine Artistry in Every Detail
            </h1>
            <p className="subheading-divine mb-8 max-w-3xl mx-auto">
              Experience unparalleled craftsmanship in our bespoke statues, where timeless elegance meets divine inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="btn-divine min-w-[200px] text-lg h-14">
                Explore Collection
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="min-w-[200px] text-lg h-14 border-2 glass-divine"
              >
                Private Consultation
              </Button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 animate-float"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <ChevronDownIcon className="w-10 h-10 text-primary" />
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}