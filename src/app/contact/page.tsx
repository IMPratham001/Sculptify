"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="p-6">
                <Phone className="h-6 w-6 mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </Card>
              <Card className="p-6">
                <Mail className="h-6 w-6 mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">contact@sculptify.com</p>
              </Card>
              <Card className="p-6">
                <MapPin className="h-6 w-6 mb-4" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">123 Art Street, NY 10001</p>
              </Card>
              <Card className="p-6">
                <Clock className="h-6 w-6 mb-4" />
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-muted-foreground">Mon-Fri: 9AM-6PM</p>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea placeholder="Your message" rows={6} />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>

          <Card className="h-[600px] bg-muted">
            {/* Add your map component here */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Interactive Map Coming Soon
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}