"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Crown, Clock, MapPin, Phone } from "lucide-react";
import { CONSULTATION_CONFIG } from "@/lib/constants/config";

export default function ConsultationPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6">Private Consultation</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Begin your journey to creating a timeless masterpiece with a private consultation with our master artisans.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Book Your Session</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input placeholder="Enter your phone number" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Consultation Type</label>
                <Select>
                  {CONSULTATION_CONFIG.types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <Select>
                  {CONSULTATION_CONFIG.locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Description</label>
                <Textarea 
                  placeholder="Tell us about your vision"
                  rows={4}
                />
              </div>

              <Button className="w-full">Schedule Consultation</Button>
            </form>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">What to Expect</h2>
            <div className="space-y-6">
              {[
                {
                  icon: Crown,
                  title: "Expert Guidance",
                  description: "One-on-one session with our master artisans"
                },
                {
                  icon: Clock,
                  title: "Duration",
                  description: `${CONSULTATION_CONFIG.duration} minutes of dedicated attention`
                },
                {
                  icon: MapPin,
                  title: "Location Options",
                  description: "Choose from our prestigious locations or opt for virtual meeting"
                },
                {
                  icon: Phone,
                  title: "Follow-up",
                  description: "Detailed proposal and next steps within 48 hours"
                }
              ].map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Available Dates</h2>
            <Calendar
              mode="single"
              className="rounded-md border"
            />
          </Card>

          <Card className="p-6 bg-primary/5 border-primary/10">
            <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
            <p className="text-muted-foreground mb-4">
              Our concierge team is available 24/7 to answer your questions and schedule urgent consultations.
            </p>
            <Button variant="outline" className="w-full">
              Contact Concierge
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}