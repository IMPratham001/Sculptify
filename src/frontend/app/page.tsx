"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Button } from "@/frontend/components/ui/button";
import { ChevronDownIcon, Crown, Star, Shield } from "lucide-react";
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
            className="glass p-12 rounded-2xl max-w-5xl mx-auto border border-white/10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mb-6"
            >
              <Crown className="w-16 h-16 text-primary" />
            </motion.div>
            <h1 className="heading-luxury mb-6 gradient-text">
              Masterpieces of Royal Excellence
            </h1>
            <p className="subheading-luxury mb-8 max-w-3xl mx-auto">
              Experience unparalleled craftsmanship in our bespoke statues, where timeless elegance meets contemporary innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="btn-luxury min-w-[200px] text-lg h-14">
                Explore Collection
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px] text-lg h-14 border-2">
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
            <ChevronDownIcon className="w-10 h-10" />
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <section className="section-luxury bg-background">
        <div className="container mx-auto px-4">
          <h2 className="heading-luxury text-center mb-16 gradient-text">
            The Epitome of Luxury
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Crown,
                title: "Royal Craftsmanship",
                description: "Each piece is meticulously crafted by master artisans using the finest materials and time-honored techniques.",
              },
              {
                icon: Star,
                title: "Bespoke Excellence",
                description: "Experience personalized service with our exclusive custom design process and private consultations.",
              },
              {
                icon: Shield,
                title: "Legacy Guarantee",
                description: "Our lifetime warranty ensures your masterpiece remains an enduring symbol of prestige.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="premium-card text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-luxury bg-card">
        <div className="container mx-auto px-4">
          <h2 className="heading-luxury text-center mb-16 gradient-text">
            Esteemed Client Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "An unparalleled masterpiece that exceeds all expectations. Truly a mark of distinction.",
                author: "Duke of Wellington",
                title: "Art Collector",
              },
              {
                quote: "The attention to detail and level of customization is beyond compare. Exceptional service.",
                author: "Lady Victoria Pierce",
                title: "Interior Designer",
              },
              {
                quote: "A testament to timeless elegance and superior craftsmanship. Simply magnificent.",
                author: "Sir James Blackwood",
                title: "Royal Curator",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="premium-card"
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="inline-block w-5 h-5 text-primary mr-1" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-luxury bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="premium-card max-w-4xl mx-auto"
          >
            <h2 className="heading-luxury mb-6 gradient-text">
              Begin Your Legacy
            </h2>
            <p className="subheading-luxury mb-8 max-w-2xl mx-auto">
              Join the distinguished collectors who have chosen to immortalize their vision through our masterful creations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="btn-luxury min-w-[200px] text-lg h-14">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px] text-lg h-14 border-2">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}