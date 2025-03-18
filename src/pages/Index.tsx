import { useState } from "react";
import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { TeamMemberCard } from "@/components/dashboard/TeamMemberCard";
import { Card } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

const teamMembers = [
  {
    name: "David Thompson",
    role: "Solution Architect",
    bio: "15+ years architecting scalable solutions. Previously led architecture at Datadog.",
    calendarLink: "https://calendly.com/david",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    name: "Elena Rodriguez",
    role: "Sr. GTM Engineer",
    bio: "Expert in RevOps and GTM tech stacks. Previously at HubSpot.",
    calendarLink: "https://calendly.com/elena",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Alex Chen",
    role: "GTM Engineer",
    bio: "Specialist in marketing automation and sales enablement tools.",
    calendarLink: "https://calendly.com/alex",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
  },
  {
    name: "Sarah Williams",
    role: "Partner",
    bio: "Former CRO, helping startups scale go-to-market operations.",
    calendarLink: "https://calendly.com/sarah",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  }
];

const otherTeams = [
  "Core RevOps Team",
  "Sales Ops Team",
  "Marketing Ops Team",
  "CS Ops Team",
  "Partnerships Ops Team",
  "GTM Ops Team"
];

const completedProjects = [
  {
    type: "Epic",
    name: "GTM Tech Stack Implementation",
    completedDate: "March 2024",
    description: "Complete implementation of HubSpot, Salesforce, and Outreach.io",
    milestones: [
      "CRM Migration",
      "Sales Enablement Tools Setup",
      "Marketing Automation Integration"
    ]
  },
  {
    type: "Epic",
    name: "Revenue Operations Framework",
    completedDate: "February 2024",
    description: "Established core revenue operations processes and systems",
    milestones: [
      "Pipeline Management",
      "Forecasting System",
      "Analytics Dashboard"
    ]
  },
  {
    type: "Milestone",
    name: "SOC2 Type 1 Certification",
    completedDate: "January 2024",
    description: "Achieved SOC2 Type 1 compliance certification",
  }
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
        <div className="flex items-center gap-6 mb-6">
          <img 
            src="/lovable-uploads/79532bf8-1e6b-4925-be95-5d51e27c470d.png" 
            alt="LeanScale Logo" 
            className="h-4"
          />
          <img 
            src="/placeholder.svg" 
            alt="Mistral AI Logo" 
            className="h-4"
          />
        </div>
        
        {/* Metrics Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <MetricsCard
            title="Bookings to Goal"
            value="$124,000"
            goal="$150,000"
            progress={82}
            description="82% of quarterly target"
          />
          <MetricsCard
            title="Pipeline to Goal"
            value="$1.2M"
            goal="$1.5M"
            progress={80}
            description="80% of required pipeline"
          />
          <MetricsCard
            title="Churn to Goal"
            value="4.2%"
            goal="<5%"
            progress={90}
            description="0.8% below target threshold"
          />
          <MetricsCard
            title="Control Completion"
            value="76%"
            goal="100%"
            progress={76}
            description="Across all departments"
          />
        </div>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
          
          {/* Hire Other Teams */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Hire Other Teams</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {otherTeams.map((team) => (
                <Card key={team} className="p-6 hover:bg-accent/5 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <UserPlus className="w-6 h-6 text-accent" />
                    <div>
                      <h4 className="font-medium">{team}</h4>
                      <p className="text-sm text-muted-foreground">Click to learn more</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Completed Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Completed Projects</h2>
          <div className="space-y-6">
            {completedProjects.map((project, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded mb-2">
                      {project.type}
                    </span>
                    <h3 className="text-lg font-medium mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    {project.milestones && (
                      <div className="space-y-2">
                        {project.milestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                            {milestone}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">{project.completedDate}</span>
                </div>
              </Card>
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
                <div className="relative w-full h-2 bg-secondary rounded">
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
