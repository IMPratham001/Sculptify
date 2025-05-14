"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown, ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
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
            <ChevronDown className="w-10 h-10 text-primary" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}