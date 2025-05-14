"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModelViewer } from "@/components/model-viewer";
import { Upload } from "lucide-react";

export default function CustomOrderPage() {
  const [size, setSize] = useState(100);
  const [material, setMaterial] = useState("marble");
  const [detailLevel, setDetailLevel] = useState(50);

  const calculatePrice = () => {
    const basePrice = 1000;
    const sizeMultiplier = size / 100;
    const materialMultiplier = material === "marble" ? 1.5 : 1;
    const detailMultiplier = 1 + (detailLevel / 100);
    
    return (basePrice * sizeMultiplier * materialMultiplier * detailMultiplier).toFixed(2);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-8">Custom Order</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Upload Your Design</h2>
            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-2">
                Drag and drop your 3D model file here, or click to select
              </p>
              <p className="text-sm text-muted-foreground">
                Supported formats: .obj, .stl, .gltf
              </p>
              <Button className="mt-4">Select File</Button>
            </div>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Customize Your Statue</h2>
            
            <div className="space-y-4">
              <div>
                <Label>Size (cm)</Label>
                <Slider
                  value={[size]}
                  onValueChange={(value) => setSize(value[0])}
                  min={50}
                  max={300}
                  step={10}
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground mt-1">{size}cm</p>
              </div>

              <div>
                <Label>Material</Label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <Button
                    variant={material === "marble" ? "default" : "outline"}
                    onClick={() => setMaterial("marble")}
                  >
                    Marble
                  </Button>
                  <Button
                    variant={material === "bronze" ? "default" : "outline"}
                    onClick={() => setMaterial("bronze")}
                  >
                    Bronze
                  </Button>
                </div>
              </div>

              <div>
                <Label>Detail Level</Label>
                <Slider
                  value={[detailLevel]}
                  onValueChange={(value) => setDetailLevel(value[0])}
                  min={0}
                  max={100}
                  step={1}
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground mt-1">{detailLevel}%</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Price Estimate</h2>
            <p className="text-4xl font-bold">${calculatePrice()}</p>
            <Button className="w-full mt-4">Place Order</Button>
          </div>
        </div>

        <div className="h-[800px] bg-card rounded-lg shadow-lg overflow-hidden">
          <ModelViewer />
        </div>
      </div>
    </div>
  );
}