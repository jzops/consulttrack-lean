
import { useState } from "react";
import { MainNav } from "@/components/layout/MainNav";
import { TeamMetrics } from "@/components/dashboard/TeamMetrics";
import { TeamMemberCard } from "@/components/dashboard/TeamMemberCard";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PartnerCard } from "@/components/dashboard/PartnerCard";

// Team members data from the Index page
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

// Other teams data from the Index page
const otherTeams = [
  "Revenue Operations",
  "Pipeline Operations"
];

// Partners data from the provided image
const partners = [
  {
    name: "Joe Zaghloul",
    role: "Partner",
    expertise: "Go-to-Market Strategy",
    background: "10+ years as a founder, and 1st employee at early stage companies.",
    imageUrl: "/lovable-uploads/debb96d6-08f9-4d02-a740-91b7f6e71e93.png",
    calendarLink: "https://calendly.com/joe-zaghloul"
  },
  {
    name: "Anthony Enrico",
    role: "Partner",
    expertise: "Go-to-Market Operations",
    background: "3 time VP of Revenue Operations, startup, scaleup, and Fortune 1,000 company",
    imageUrl: "/lovable-uploads/debb96d6-08f9-4d02-a740-91b7f6e71e93.png",
    calendarLink: "https://calendly.com/anthony-enrico"
  },
  {
    name: "Sean Kennedy",
    role: "Partner",
    expertise: "Marketing Operations",
    background: "9+ years at high-growth B2B SaaS at varying sizes (Seed Round, Series B/C/D, IPO-Ready)",
    imageUrl: "/lovable-uploads/debb96d6-08f9-4d02-a740-91b7f6e71e93.png",
    calendarLink: "https://calendly.com/sean-kennedy"
  },
  {
    name: "Henrique Sakai",
    role: "Partner",
    expertise: "System Architecture",
    background: "3x System Architect, startup, scaleup, and Fortune 1,000 company",
    imageUrl: "/lovable-uploads/debb96d6-08f9-4d02-a740-91b7f6e71e93.png",
    calendarLink: "https://calendly.com/henrique-sakai"
  },
  {
    name: "Bernardo Alves",
    role: "Partner",
    expertise: "Sales Operations",
    background: "8+ years in Operations, across Sales Ops, CS Ops, and RevOps",
    imageUrl: "/lovable-uploads/debb96d6-08f9-4d02-a740-91b7f6e71e93.png",
    calendarLink: "https://calendly.com/bernardo-alves"
  },
  {
    name: "Cam Legge",
    role: "Partner",
    expertise: "CS Operations",
    background: "4+ years of Customer Success Operations Experience",
    imageUrl: "/lovable-uploads/debb96d6-08f9-4d02-a740-91b7f6e71e93.png",
    calendarLink: "https://calendly.com/cam-legge"
  },
  {
    name: "Jake Toepel",
    role: "Partner",
    expertise: "Data Engineering",
    background: "10+ Years in Engineering and Engineering Leadership across B2B SaaS",
    imageUrl: "/lovable-uploads/debb96d6-08f9-4d02-a740-91b7f6e71e93.png",
    calendarLink: "https://calendly.com/jake-toepel"
  }
];

export default function TeamPage() {
  const { toast } = useToast();
  
  const [showTeamPopup, setShowTeamPopup] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState('');

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <MainNav />
            <img 
              src="/lovable-uploads/79532bf8-1e6b-4925-be95-5d51e27c470d.png" 
              alt="LeanScale Logo" 
              className="h-4"
            />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold">My Team</h1>

        {/* Team Metrics */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Team Overview</h2>
          <TeamMetrics />
        </section>
        
        {/* Team Members */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Your Team</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </section>

        {/* Bring in Other Teams */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Bring in Other Teams</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {otherTeams.map((team) => (
              <Card 
                key={team} 
                className="p-6 hover:bg-accent/5 transition-colors cursor-pointer"
                onClick={() => handleTeamClick(team)}
              >
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
        </section>

        {/* Book time with Partners */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Book Time with Partners</h2>
          
          {/* LeanScale Accelerator Partners Section - MOVED ABOVE PARTNER CARDS */}
          <div className="mb-6 p-6 rounded-lg border bg-card/50 backdrop-blur">
            <h3 className="text-xl font-semibold mb-3">LeanScale Accelerator Partners</h3>
            <p className="text-muted-foreground mb-4">
              Our partners bring decades of experience across various GTM functions and have 
              worked with companies ranging from early-stage startups to Fortune 1000 enterprises.
            </p>
            <div className="grid grid-cols-5 gap-4 mt-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="bg-white/10 rounded-md p-2 flex items-center justify-center h-10">
                  <div className="w-full h-full bg-accent/10 rounded-md"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Partner Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {partners.map((partner) => (
              <PartnerCard key={partner.name} {...partner} />
            ))}
          </div>
        </section>
      </div>

      {/* Team Selection Dialog */}
      <Dialog open={showTeamPopup} onOpenChange={setShowTeamPopup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add {selectedTeam} Team</DialogTitle>
            <DialogDescription>
              Bringing this team into your workspace will give you access to their expertise and resources.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <h4 className="text-sm font-medium mb-2">Team Expertise</h4>
            <div className="space-y-2 mb-4">
              {selectedTeam === "Revenue Operations" ? (
                <>
                  <p className="text-sm">The Revenue Operations team specializes in:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Sales and marketing alignment</li>
                    <li>Pipeline optimization</li>
                    <li>Revenue forecasting</li>
                    <li>GTM strategy implementation</li>
                    <li>Sales enablement</li>
                  </ul>
                </>
              ) : (
                <>
                  <p className="text-sm">The Pipeline Operations team specializes in:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Lead qualification and scoring</li>
                    <li>Opportunity management</li>
                    <li>Sales process optimization</li>
                    <li>Conversion rate improvements</li>
                    <li>Pipeline analytics</li>
                  </ul>
                </>
              )}
            </div>
            
            <div className="bg-muted/30 p-3 rounded-md text-sm mb-4">
              <h5 className="font-medium text-sm mb-2">Recent Team Achievements:</h5>
              {selectedTeam === "Revenue Operations" ? (
                <p>Implemented new attribution model that increased marketing ROI by 28% in the last quarter.</p>
              ) : (
                <p>Reduced sales cycle length by 35% through process optimization and automated qualification.</p>
              )}
            </div>
            
            <div className="text-sm">
              <span className="font-medium">Team Size:</span> {selectedTeam === "Revenue Operations" ? "7 members" : "5 members"}
            </div>
          </div>
          
          <DialogFooter className="sm:justify-between">
            <Button variant="outline" onClick={() => setShowTeamPopup(false)}>
              Cancel
            </Button>
            <Button onClick={handleBringInTeam}>
              <UserPlus className="mr-2 h-4 w-4" />
              Add {selectedTeam} Team
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
