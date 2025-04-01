
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Dashboard components
import { Header } from "@/components/dashboard/Header";
import { MetricsOverview } from "@/components/dashboard/MetricsOverview";
import { TeamSection } from "@/components/dashboard/TeamSection";
import { CompletedEpics } from "@/components/dashboard/CompletedEpics";
import { ControlCompletionSection } from "@/components/dashboard/ControlCompletionSection";
import { TeamPopupDialog } from "@/components/dashboard/TeamPopupDialog";
import { AuditRequestDialog } from "@/components/dashboard/AuditRequestDialog";

const teamMembers = [
  {
    name: "Whitney Yvette",
    role: "Solution Architect",
    bio: "15+ years architecting scalable solutions. Previously led architecture at Datadog.",
    calendarLink: "https://calendly.com/whitney",
    imageUrl: "/lovable-uploads/668f6cf8-d746-4bc0-8de9-24a39b33fbe4.png",
  },
  {
    name: "Christopher Mardian",
    role: "Sr. GTM Engineer",
    bio: "Expert in RevOps and GTM tech stacks. Previously at HubSpot.",
    calendarLink: "https://calendly.com/christopher",
    imageUrl: "/lovable-uploads/079cde83-3408-4b24-8f28-1d9309adb81a.png",
  },
  {
    name: "Izzy Navin",
    role: "GTM Engineer",
    bio: "Specialist in marketing automation and sales enablement tools.",
    calendarLink: "https://calendly.com/izzy",
    imageUrl: "/lovable-uploads/ac3649b7-b722-4042-86c6-4855958c197f.png",
  },
  {
    name: "Cameron Legge",
    role: "Partner",
    bio: "Former CRO, helping startups scale go-to-market operations.",
    calendarLink: "https://calendly.com/cameron",
    imageUrl: "/lovable-uploads/3db6ee0b-bf34-4a76-9860-36bfe70aad62.png",
  }
];

const otherTeams = [
  "Revenue Operations",
  "Pipeline Operations"
];

const completedProjects = [
  {
    type: "Epic",
    name: "Lead Attribution Taxonomy v2",
    completedDate: "March 2024",
    description: "Improved lead tracking and attribution for better marketing ROI analysis",
    milestones: [
      "Multi-touch Attribution Model",
      "Campaign Source Tracking Implementation",
      "Reporting Dashboard Integration"
    ]
  },
  {
    type: "Epic",
    name: "Hubspot to Salesforce Migration",
    completedDate: "February 2024",
    description: "Successfully migrated from Hubspot to Salesforce with zero data loss",
    milestones: [
      "Data Mapping & Cleansing",
      "Custom Field Configuration",
      "User Training & Adoption"
    ]
  },
  {
    type: "Epic",
    name: "Reduce Speed to Lead from 72h to 30min",
    completedDate: "January 2024",
    description: "Dramatically reduced lead response time to improve conversion rates",
    milestones: [
      "Lead Routing Automation",
      "Real-time Notifications",
      "SLA Monitoring Dashboard"
    ]
  }
];

const controlCompletion = {
  marketing: 76,
  sales: 50,
  "customer success": 85,
  partnerships: 92,
};

export default function Index() {
  const { toast } = useToast();
  
  const [showTeamPopup, setShowTeamPopup] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const handleTeamClick = (team: string) => {
    setSelectedTeam(team);
    setShowTeamPopup(true);
  };

  const handleBringInTeam = () => {
    toast({
      title: "Team Added",
      description: `${selectedTeam} team has been added to your workspace`,
    });
    setShowTeamPopup(false);
  };

  const handleAuditRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const urgency = formData.get("urgency");
    const comments = formData.get("comments");
    
    // In a real application, you would send this data to your backend
    console.log({ email, urgency, comments });
    
    // Show success message
    toast({
      title: "Audit Request Submitted",
      description: "We'll be in touch with you shortly.",
    });
    
    // Close the modal
    setAuditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        <Header onAuditRequestClick={() => setAuditModalOpen(true)} />
        
        {/* Metrics Overview */}
        <MetricsOverview controlCompletion={controlCompletion} />

        {/* Team Section */}
        <TeamSection 
          teamMembers={teamMembers} 
          otherTeams={otherTeams}
          onTeamClick={handleTeamClick}
        />

        {/* Completed Epics Section */}
        <CompletedEpics completedProjects={completedProjects} />

        {/* Control Completion */}
        <ControlCompletionSection controlCompletion={controlCompletion} />
      </div>

      {/* Team Selection Dialog */}
      <TeamPopupDialog 
        open={showTeamPopup}
        onOpenChange={setShowTeamPopup}
        selectedTeam={selectedTeam}
        onBringInTeam={handleBringInTeam}
      />

      {/* Audit Request Dialog */}
      <AuditRequestDialog
        open={auditModalOpen}
        onOpenChange={setAuditModalOpen}
        onSubmit={handleAuditRequest}
      />
    </div>
  );
}
