"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/frontend/components/ui/card";
import { Button } from "@/frontend/components/ui/button";
import { Input } from "@/frontend/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/frontend/components/ui/tabs";
import dynamic from "next/dynamic";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/frontend/components/ui/dialog";

const StatueViewer = dynamic(() => import("@/frontend/components/statue-viewer").then(mod => mod.StatueViewer), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] flex items-center justify-center bg-card">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
});

const categories = ["All", "Religious", "Historical", "Custom", "Modern"];

const statues = [
  {
    id: 1,
    name: "Zeus Statue",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1588771930296-88c2cb03f386?w=800&auto=format&fit=crop&q=60",
    description: "Majestic statue of Zeus, king of the Greek gods",
    price: 2999,
  },
  {
    id: 2,
    name: "Buddha Statue",
    category: "Religious",
    image: "https://images.unsplash.com/photo-1558000959-d0c8d338e54c?w=800&auto=format&fit=crop&q=60",
    description: "Serene Buddha statue with intricate details",
    price: 1999,
  },
  {
    id: 3,
    name: "Modern Abstract Victory",
    category: "Modern",
    image: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?w=800&auto=format&fit=crop&q=60",
    description: "Contemporary interpretation of classical victory statue",
    price: 3499,
  },
  {
    id: 4,
    name: "Historical Figure Monument",
    category: "Historical",
    image: "https://images.unsplash.com/photo-1578301978069-45264734cddc?w=800&auto=format&fit=crop&q=60",
    description: "Bronze monument of a significant historical figure",
    price: 4999,
  }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatue, setSelectedStatue] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStatues = statues.filter(statue => 
    (selectedCategory === "All" || statue.category === selectedCategory) &&
    (statue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     statue.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Our Gallery</h1>
        <Input
          type="search"
          placeholder="Search statues..."
          className="max-w-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="grid" className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="3d">3D Gallery</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <TabsContent value="grid">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStatues.map((statue) => (
              <motion.div
                key={statue.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                      <img
                        src={statue.image}
                        alt={statue.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{statue.name}</h3>
                        <p className="text-muted-foreground mb-2">{statue.description}</p>
                        <p className="font-bold">${statue.price.toLocaleString()}</p>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>{statue.name}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <StatueViewer />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="3d">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {filteredStatues.map((statue) => (
                <Card
                  key={statue.id}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedStatue?.id === statue.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedStatue(statue)}
                >
                  <h3 className="text-lg font-semibold">{statue.name}</h3>
                  <p className="text-muted-foreground">{statue.description}</p>
                </Card>
              ))}
            </div>
            <div className="sticky top-24">
              {selectedStatue ? (
                <StatueViewer />
              ) : (
                <Card className="h-[600px] flex items-center justify-center text-muted-foreground">
                  Select a statue to view in 3D
                </Card>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}