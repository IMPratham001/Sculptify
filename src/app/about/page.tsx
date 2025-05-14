"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer as Printer3d, Hammer, Sparkles, Users } from "lucide-react";

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

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Crafting Tomorrow's Masterpieces</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We combine cutting-edge technology with traditional craftsmanship to create
          stunning, large-scale statues that stand the test of time.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 text-center">
              <feature.icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Timeline Section */}
      <Card className="p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="relative">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-center gap-8 mb-8"
            >
              <div className="text-2xl font-bold w-24 text-right">{item.year}</div>
              <div className="flex-1 bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Create Your Masterpiece?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's work together to bring your vision to life with our cutting-edge
          technology and expert craftsmanship.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">Start Custom Order</Button>
          <Button size="lg" variant="outline">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}