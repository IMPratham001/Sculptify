"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatueViewer } from "@/components/statue-viewer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const projects = [
  {
    title: "Royal Palace Commission",
    description: "A majestic 20-foot bronze statue for the Royal Palace entrance",
    image: "https://images.unsplash.com/photo-1588771930296-88c2cb03f386?w=800&auto=format&fit=crop&q=60",
    category: "Royal Commission",
    material: "Bronze",
    dimensions: "20ft × 8ft × 8ft"
  },
  {
    title: "Divine Temple Guardian",
    description: "Traditional temple guardian statue with modern interpretation",
    image: "https://images.unsplash.com/photo-1558000959-d0c8d338e54c?w=800&auto=format&fit=crop&q=60",
    category: "Religious",
    material: "Marble",
    dimensions: "12ft × 4ft × 4ft"
  },
  {
    title: "Modern Abstract Victory",
    description: "Contemporary interpretation of classical victory statue",
    image: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?w=800&auto=format&fit=crop&q=60",
    category: "Modern",
    material: "Mixed Media",
    dimensions: "15ft × 6ft × 6ft"
  },
  {
    title: "Historical Figure Monument",
    description: "Bronze monument of a significant historical figure",
    image: "https://images.unsplash.com/photo-1578301978069-45264734cddc?w=800&auto=format&fit=crop&q=60",
    category: "Historical",
    material: "Bronze",
    dimensions: "18ft × 7ft × 7ft"
  }
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6">Our Masterpieces</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of divine creations, each piece a testament to unparalleled craftsmanship and artistic vision.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover-lift">
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-sm rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{project.material}</span>
                      <span className="text-sm text-muted-foreground">{project.dimensions}</span>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="h-[600px]">
                  <StatueViewer />
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { label: "Projects Completed", value: "200+" },
          { label: "Countries Served", value: "25+" },
          { label: "Years of Excellence", value: "15+" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-6 bg-card rounded-lg"
          >
            <div className="text-4xl font-bold mb-2 text-primary">{stat.value}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center bg-card rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Create Your Masterpiece?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let us bring your vision to life with our unparalleled craftsmanship and attention to detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="min-w-[200px]">
            Start Your Project
          </Button>
          <Button size="lg" variant="outline" className="min-w-[200px]">
            View Process
          </Button>
        </div>
      </motion.div>
    </div>
  );
}