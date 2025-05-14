"use client";

import { motion } from "framer-motion";
import { Card } from "@/frontend/components/ui/card";
import { Button } from "@/frontend/components/ui/button";
import { Printer as Printer3d, Hammer, Sparkles, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Printer3d,
    title: "Advanced 3D Printing",
    description: "State-of-the-art 3D printing technology for precise, detailed statues",
  },
  {
    icon: Hammer,
    title: "Traditional Craftsmanship",
    description: "Combining modern technology with time-honored sculpting techniques",
  },
  {
    icon: Sparkles,
    title: "Premium Materials",
    description: "Using only the finest marble and bronze materials for lasting beauty",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled artisans and technologists working together to create masterpieces",
  },
];

const timeline = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to revolutionize statue crafting",
  },
  {
    year: "2021",
    title: "Technology Integration",
    description: "Introduced advanced 3D printing and scanning capabilities",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Began serving clients worldwide with custom statue solutions",
  },
  {
    year: "2023",
    title: "Innovation Award",
    description: "Recognized for breakthrough achievements in 3D printing technology",
  },
  {
    year: "2024",
    title: "Sustainability Initiative",
    description: "Launched eco-friendly materials and sustainable practices",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
        >
          Crafting Tomorrow's Masterpieces
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          We combine cutting-edge technology with traditional craftsmanship to create
          stunning, large-scale statues that stand the test of time.
        </motion.p>
      </div>

      {/* Features Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={itemVariants}
            className="h-full"
          >
            <Card className="p-6 text-center h-full hover:shadow-lg transition-all duration-300">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Timeline Section */}
      <Card className="p-8 mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-border" />
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-8 mb-12 relative"
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'ml-auto pl-8'}`}>
                <div 
                  className="absolute top-1/2 -translate-y-1/2 left-[50%] -translate-x-1/2 w-4 h-4 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <div className={`bg-card p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center bg-card rounded-lg p-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Masterpiece?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's work together to bring your vision to life with our cutting-edge
          technology and expert craftsmanship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/custom">
            <Button size="lg" className="min-w-[200px] h-12">
              Start Custom Order
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="min-w-[200px] h-12">
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}