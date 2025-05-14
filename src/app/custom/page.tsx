"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDropzone } from "react-dropzone";
import { Button } from "@/frontend/components/ui/button";
import { Input } from "@/frontend/components/ui/input";
import { Label } from "@/frontend/components/ui/label";
import { Slider } from "@/frontend/components/ui/slider";
import { Textarea } from "@/frontend/components/ui/textarea";
import { Select } from "@/frontend/components/ui/select";
import { Card } from "@/frontend/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/frontend/components/ui/radio-group";
import dynamic from "next/dynamic";
import { Upload, Crown, Clock, Ruler, Palette, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/frontend/components/ui/tooltip";

const StatueViewer = dynamic(() => import("@/frontend/components/statue-viewer").then(mod => mod.StatueViewer), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] flex items-center justify-center bg-card">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
});

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
  description: z.string().min(50, "Please provide a detailed description of your vision"),
  size: z.number().min(50).max(300),
  material: z.enum(["marble", "bronze", "gold", "silver"]),
  budget: z.enum(["100-500", "501-1000", "1001-2000", "2000+"]),
  timeline: z.string().min(1, "Please select a timeline"),
  finish: z.string().min(1, "Please select a finish type"),
  requirements: z.string().min(10, "Please provide more details"),
});

const timelineOptions = [
  { value: "1-2-months", label: "1-2 Months" },
  { value: "3-4-months", label: "3-4 Months" },
  { value: "5-6-months", label: "5-6 Months" },
  { value: "6-plus-months", label: "6+ Months" },
];

const finishTypes = [
  { value: "polished", label: "Polished" },
  { value: "matte", label: "Matte" },
  { value: "patinated", label: "Patinated" },
  { value: "textured", label: "Textured" },
];

export default function CustomOrderPage() {
  const [size, setSize] = useState(100);
  const [material, setMaterial] = useState("marble");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema)
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 5,
    maxSize: 10485760, // 10MB
    onDrop: acceptedFiles => {
      setUploadedFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const calculatePrice = () => {
    const basePrice = 1000;
    const sizeMultiplier = size / 100;
    const materialMultiplier = {
      marble: 1.5,
      bronze: 2,
      gold: 5,
      silver: 3
    }[material];
    
    return (basePrice * sizeMultiplier * materialMultiplier).toFixed(2);
  };

  const onSubmit = (data) => {
    console.log({
      ...data,
      size,
      material,
      referenceImages: uploadedFiles.map(file => file.name)
    });
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6">Create Your Masterpiece</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Begin your journey to owning a unique piece of divine artistry. Our master craftsmen will bring your vision to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="p-6 glass-divine">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <Input {...register("name")} />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" {...register("email")} />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label>Phone</Label>
                <Input {...register("phone")} />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <Label>Detailed Description</Label>
                <Textarea
                  {...register("description")}
                  rows={6}
                  placeholder="Describe your vision in detail. Include the subject matter, pose, style, and any specific features or elements you want to incorporate..."
                />
                {errors.description && (
                  <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>
                )}
              </div>

              <div>
                <Label className="flex items-center gap-2">
                  Size (cm)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Slide to adjust the height of your statue
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
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
                <Select
                  value={material}
                  onValueChange={setMaterial}
                >
                  <option value="marble">Marble</option>
                  <option value="bronze">Bronze</option>
                  <option value="gold">Gold</option>
                  <option value="silver">Silver</option>
                </Select>
              </div>

              <div>
                <Label>Surface Finish</Label>
                <Select {...register("finish")}>
                  {finishTypes.map(finish => (
                    <option key={finish.value} value={finish.value}>
                      {finish.label}
                    </option>
                  ))}
                </Select>
                {errors.finish && (
                  <p className="text-sm text-red-500 mt-1">{errors.finish.message}</p>
                )}
              </div>

              <div>
                <Label>Budget Range</Label>
                <RadioGroup className="grid grid-cols-2 gap-4 mt-2" {...register("budget")}>
                  <div>
                    <RadioGroupItem value="100-500" id="budget-1" />
                    <Label htmlFor="budget-1" className="ml-2">$100-$500</Label>
                  </div>
                  <div>
                    <RadioGroupItem value="501-1000" id="budget-2" />
                    <Label htmlFor="budget-2" className="ml-2">$501-$1000</Label>
                  </div>
                  <div>
                    <RadioGroupItem value="1001-2000" id="budget-3" />
                    <Label htmlFor="budget-3" className="ml-2">$1001-$2000</Label>
                  </div>
                  <div>
                    <RadioGroupItem value="2000+" id="budget-4" />
                    <Label htmlFor="budget-4" className="ml-2">$2000+</Label>
                  </div>
                </RadioGroup>
                {errors.budget && (
                  <p className="text-sm text-red-500 mt-1">{errors.budget.message}</p>
                )}
              </div>

              <div>
                <Label>Timeline</Label>
                <Select {...register("timeline")}>
                  {timelineOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                {errors.timeline && (
                  <p className="text-sm text-red-500 mt-1">{errors.timeline.message}</p>
                )}
              </div>

              <div>
                <Label>Additional Requirements</Label>
                <Textarea
                  {...register("requirements")}
                  rows={4}
                  placeholder="Any specific requirements, preferences, or special considerations..."
                />
                {errors.requirements && (
                  <p className="text-sm text-red-500 mt-1">{errors.requirements.message}</p>
                )}
              </div>

              <div>
                <Label>Reference Images</Label>
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                >
                  <input {...getInputProps()} />
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Drag and drop your reference images here, or click to select
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Supported formats: JPG, PNG (max 5 files, 10MB each)
                  </p>
                </div>
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {uploadedFiles.map((file) => (
                      <img
                        key={file.name}
                        src={file.preview}
                        alt={file.name}
                        className="rounded-lg object-cover aspect-square"
                      />
                    ))}
                  </div>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Order Request
              </Button>
            </form>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6 glass-divine">
            <h2 className="text-2xl font-semibold mb-6">Preview</h2>
            <div className="h-[400px] mb-6">
              <StatueViewer />
            </div>
          </Card>

          <Card className="p-6 glass-divine">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Ruler className="w-5 h-5 text-primary" />
                  <span>Size</span>
                </div>
                <span>{size}cm</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  <span>Material</span>
                </div>
                <span className="capitalize">{material}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Estimated Time</span>
                </div>
                <span>4-6 weeks</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-primary" />
                  <span>Estimated Price</span>
                </div>
                <span className="text-xl font-bold">${calculatePrice()}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-primary/5 border-primary/10">
            <h3 className="text-xl font-semibold mb-4">Need Assistance?</h3>
            <p className="text-muted-foreground mb-4">
              Our luxury concierge team is available 24/7 to answer your questions and provide guidance.
            </p>
            <Button variant="outline" className="w-full">
              Contact Concierge
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}