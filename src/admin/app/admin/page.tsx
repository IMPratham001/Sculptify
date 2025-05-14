"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", orders: 4, revenue: 4000 },
  { name: "Feb", orders: 3, revenue: 3000 },
  { name: "Mar", orders: 5, revenue: 5000 },
  { name: "Apr", orders: 7, revenue: 7000 },
  { name: "May", orders: 6, revenue: 6000 },
  { name: "Jun", orders: 8, revenue: 8000 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">
            Total Orders
          </h3>
          <p className="text-3xl font-bold mt-2">156</p>
          <p className="text-sm text-green-500 mt-2">+12.5% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Revenue</h3>
          <p className="text-3xl font-bold mt-2">$45,231</p>
          <p className="text-sm text-green-500 mt-2">+8.2% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">
            Customers
          </h3>
          <p className="text-3xl font-bold mt-2">89</p>
          <p className="text-sm text-green-500 mt-2">+23.1% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground">
            Avg. Order Value
          </h3>
          <p className="text-3xl font-bold mt-2">$290</p>
          <p className="text-sm text-red-500 mt-2">-4.3% from last month</p>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}