"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer as Printer3d, Hammer, Crown, Star, Shield, Users } from "lucide-react";

const services = [
  {
    icon: Printer3d,
    title: "3D Scanning & Modeling",
    description: "High-precision 3D scanning and digital modeling for perfect replicas.",
    price: "Starting from $2,999"
  },
  {
    icon: Hammer,
    title: "Custom Statue Creation",
    description: "Bespoke statue design and creation using premium materials.",
    price: "Starting from $4,999"
  },
  {
    icon: Crown,
    title: "Royal Commissions",
    description: "Exclusive commissions for royal families and prestigious institutions.",
    price: "By consultation"
  },
  {
    icon: Shield,
    title: "Heritage Restoration",
    description: "Expert restoration of historical statues and monuments.",
    price: "Custom quote"
  }
];

const features = [
  {
    icon: Star,
    title: "Premium Materials",
    description: "Only the finest marble, bronze, and precious metals."
  },
  {
    icon: Users,
    title: "Expert Artisans",
    description: "Master craftsmen with decades of experience."
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6">Our Divine Services</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience unparalleled craftsmanship in statue creation, where ancient artistry meets cutting-edge technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 h-full glass-divine hover-lift">
              <service.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-lg font-semibold text-primary">{service.price}</span>
                <Button>Learn More</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="bg-card rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Consultation", description: "In-depth discussion of your vision" },
            { step: "2", title: "Design", description: "3D modeling and material selection" },
            { step: "3", title: "Creation", description: "Expert crafting of your masterpiece" },
            { step: "4", title: "Delivery", description: "White-glove delivery service" }
          ].map((phase, index) => (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">{phase.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
              <p className="text-muted-foreground">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center bg-card rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let us transform your vision into a timeless masterpiece. Our expert artisans are ready to bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="min-w-[200px]">
            Schedule Consultation
          </Button>
          <Button size="lg" variant="outline" className="min-w-[200px]">
            View Portfolio
          </Button>
        </div>
      </motion.div>
    </div>
  );
}