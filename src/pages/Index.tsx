
import { useState } from "react";
import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { TeamMemberCard } from "@/components/dashboard/TeamMemberCard";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Solution Architect",
    bio: "10+ years experience in scaling startups. Previously at Stripe and Airbnb.",
    calendarLink: "https://calendly.com/sarah",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    name: "Michael Chen",
    role: "Senior Engineer",
    bio: "Full-stack developer specialized in cloud architecture and DevOps.",
    calendarLink: "https://calendly.com/michael",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    name: "Emma Davis",
    role: "Product Partner",
    bio: "Product strategy expert helping startups achieve product-market fit.",
    calendarLink: "https://calendly.com/emma",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
];

const controlCompletion = {
  marketing: 76,
  sales: 50,
  operations: 85,
  engineering: 92,
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight">LeanScale Dashboard</h1>
        
        {/* Metrics Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <MetricsCard
            title="Monthly Bookings"
            value="$124,000"
            description="+20.1% from last month"
          />
          <MetricsCard
            title="Pipeline Value"
            value="$1.2M"
            description="42 active opportunities"
          />
          <MetricsCard
            title="Team Cost Savings"
            value="$760K"
            description="vs. Internal Hiring"
          />
          <MetricsCard
            title="Control Completion"
            value="76%"
            description="Across all departments"
          />
        </div>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </section>

        {/* Control Completion */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Control Completion</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(controlCompletion).map(([department, completion]) => (
              <div
                key={department}
                className="bg-white/30 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <h3 className="text-lg font-medium capitalize mb-2">
                  {department}
                </h3>
                <div className="relative w-full h-2 bg-muted rounded">
                  <div
                    className="absolute top-0 left-0 h-full bg-accent rounded"
                    style={{ width: `${completion}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {completion}% complete
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
