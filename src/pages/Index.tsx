import { useState } from "react";
import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { TeamMemberCard } from "@/components/dashboard/TeamMemberCard";
import { TeamMetrics } from "@/components/dashboard/TeamMetrics";
import { MainNav } from "@/components/layout/MainNav";
import { Card } from "@/components/ui/card";
import { UserPlus, Info, Calendar, CheckCheck, AlertTriangle, ArrowDown, ArrowUp } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

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
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <MainNav />
            <img 
              src="/lovable-uploads/79532bf8-1e6b-4925-be95-5d51e27c470d.png" 
              alt="LeanScale Logo" 
              className="h-4"
            />
          </div>
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
            onClick={() => setAuditModalOpen(true)}
          >
            Request an Audit
          </Button>
        </div>
        
        {/* Metrics Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Popover>
            <PopoverTrigger asChild>
              <div className="cursor-pointer">
                <MetricsCard
                  title="Bookings to Goal"
                  value="$124,000"
                  goal="$150,000"
                  progress={82}
                  description="82% of quarterly target"
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h3 className="font-medium">Bookings Breakdown</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>New business:</span>
                    <span className="font-medium">$75,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Expansion:</span>
                    <span className="font-medium">$42,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Renewal:</span>
                    <span className="font-medium">$7,000</span>
                  </div>
                  <div className="h-px bg-border my-2" />
                  <div className="flex items-center justify-between">
                    <span>Total:</span>
                    <span className="font-medium">$124,000</span>
                  </div>
                </div>
                <div className="flex items-center text-xs text-muted-foreground mt-2">
                  <span className="flex items-center text-emerald-500 mr-4">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    12% vs last quarter
                  </span>
                  <span className="flex items-center text-red-500">
                    <ArrowDown className="h-3 w-3 mr-1" />
                    5% vs forecasted
                  </span>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <div className="cursor-pointer">
                <MetricsCard
                  title="Pipeline to Goal"
                  value="$1.2M"
                  goal="$1.5M"
                  progress={80}
                  description="80% of required pipeline"
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h3 className="font-medium">Pipeline Health</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Early stage:</span>
                    <span className="font-medium">$500,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Mid stage:</span>
                    <span className="font-medium">$450,000</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Late stage:</span>
                    <span className="font-medium">$250,000</span>
                  </div>
                  <div className="h-px bg-border my-2" />
                  <div className="flex items-center justify-between">
                    <span>Total Pipeline:</span>
                    <span className="font-medium">$1,200,000</span>
                  </div>
                </div>
                <div className="flex items-center bg-amber-50 p-2 rounded text-xs text-amber-800 mt-2">
                  <AlertTriangle className="h-3 w-3 mr-2" />
                  <span>Need $300K more pipeline to meet forecast</span>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <div className="cursor-pointer">
                <MetricsCard
                  title="Churn to Goal"
                  value="4.2%"
                  goal="<5%"
                  progress={90}
                  description="0.8% below target threshold"
                />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h3 className="font-medium">Churn Analysis</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span>Product issues:</span>
                      <span>35%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-red-400 h-full" style={{ width: "35%" }} />
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span>Pricing concerns:</span>
                      <span>28%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-orange-400 h-full" style={{ width: "28%" }} />
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span>Competitor switch:</span>
                      <span>22%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-yellow-400 h-full" style={{ width: "22%" }} />
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span>Other reasons:</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-blue-400 h-full" style={{ width: "15%" }} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center bg-emerald-50 p-2 rounded text-xs text-emerald-800 mt-2">
                  <CheckCheck className="h-3 w-3 mr-2" />
                  <span>Churn rate trending down 0.3% month-over-month</span>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="cursor-pointer">
                <MetricsCard
                  title="Control Completion"
                  value="76%"
                  goal="100%"
                  progress={76}
                  description="Across all departments"
                />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h3 className="font-medium text-sm">Department Breakdown</h3>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex items-center justify-between">
                    <span>Marketing:</span>
                    <span className="font-medium">{controlCompletion.marketing}%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Sales:</span>
                    <span className="font-medium">{controlCompletion.sales}%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Customer Success:</span>
                    <span className="font-medium">{controlCompletion["customer success"]}%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Partnerships:</span>
                    <span className="font-medium">{controlCompletion.partnerships}%</span>
                  </li>
                </ul>
                <div className="text-xs text-muted-foreground mt-2">
                  Hover over each department in the Control Completion section for more details.
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Your Team</h2>
          
          {/* Team Metrics */}
          <TeamMetrics />
          
          <div className="grid gap-6 md:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
          
          {/* Bring in Other Teams */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Bring in Other Teams</h3>
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
          </div>
        </section>

        {/* Completed Epics Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Completed Epics</h2>
          <div className="space-y-6">
            {completedProjects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow">
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
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl">{project.name}</DialogTitle>
                    <DialogDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded">
                          {project.type}
                        </span>
                        <span className="text-sm">{project.completedDate}</span>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="py-4">
                    <div className="text-sm mb-6">{project.description}</div>
                    
                    <h4 className="text-sm font-medium mb-3">Key Milestones</h4>
                    <ul className="space-y-3 mb-6">
                      {project.milestones.map((milestone, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center mr-2 mt-0.5">
                            <CheckCheck className="w-3 h-3 text-accent" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{milestone}</p>
                            <p className="text-xs text-muted-foreground">
                              {["Completed on time", "Delivered ahead of schedule", "Completed with team effort"][idx % 3]}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-muted/30 p-3 rounded-md text-sm">
                      <h5 className="font-medium text-sm mb-2">Impact:</h5>
                      <p>
                        {index === 0 && "Improved marketing attribution resulted in 24% more efficient ad spend and better ROI tracking."}
                        {index === 1 && "Migrating to Salesforce increased sales team productivity by 32% and improved forecasting accuracy."}
                        {index === 2 && "Faster lead response times increased conversion rates by 15% and improved customer satisfaction scores."}
                      </p>
                    </div>
                  </div>
                  
                  <DialogFooter>
                    <Button variant="outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      View Timeline
                    </Button>
                    <Button>See Related Projects</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Control Completion */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Control Completion</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(controlCompletion).map(([department, completion]) => (
              <Popover key={department}>
                <PopoverTrigger asChild>
                  <div
                    className="bg-white/30 backdrop-blur-sm rounded-lg p-6 border border-white/20 cursor-pointer hover:shadow-md transition-shadow"
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
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h3 className="font-medium capitalize">
                      {department} Control Details
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="text-sm flex items-center justify-between">
                        <span>Critical controls:</span>
                        <span className="font-medium">
                          {Math.round(completion * 0.6)}% of {Math.round(completion * 0.6 / (completion * 0.01))}
                        </span>
                      </div>
                      <div className="text-sm flex items-center justify-between">
                        <span>High-priority controls:</span>
                        <span className="font-medium">
                          {Math.round(completion * 0.3)}% of {Math.round(completion * 0.3 / (completion * 0.01))}
                        </span>
                      </div>
                      <div className="text-sm flex items-center justify-between">
                        <span>Medium-priority controls:</span>
                        <span className="font-medium">
                          {Math.round(completion * 0.1)}% of {Math.round(completion * 0.1 / (completion * 0.01))}
                        </span>
                      </div>
                    </div>
                    
                    <div className={`rounded p-2 text-xs ${
                      completion >= 85 ? "bg-green-50 text-green-800" : 
                      completion >= 70 ? "bg-yellow-50 text-yellow-800" : 
                      "bg-red-50 text-red-800"
                    }`}>
                      {completion >= 85 ? (
                        <span className="flex items-center"><CheckCheck className="w-3 h-3 mr-1" /> On track to complete all controls</span>
                      ) : completion >= 70 ? (
                        <span className="flex items-center"><Info className="w-3 h-3 mr-1" /> Making good progress, but needs attention</span>
                      ) : (
                        <span className="flex items-center"><AlertTriangle className="w-3 h-3 mr-1" /> Needs immediate attention</span>
                      )}
                    </div>
                    
                    <Button size="sm" className="w-full">View All Controls</Button>
                  </div>
                </PopoverContent>
              </Popover>
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

      {/* Audit Request Modal */}
      <Dialog open={auditModalOpen} onOpenChange={setAuditModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request a GTM Audit</DialogTitle>
            <DialogDescription>
              Tell us about your needs and our team will get back to you with a customized audit plan.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleAuditRequest} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency</Label>
              <Select name="urgency" defaultValue="medium">
                <SelectTrigger>
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - Within 2 weeks</SelectItem>
                  <SelectItem value="medium">Medium - Within 1 week</SelectItem>
                  <SelectItem value="high">High - Within 2-3 days</SelectItem>
                  <SelectItem value="urgent">Urgent - ASAP</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="comments">Comments</Label>
              <Textarea
                id="comments"
                name="comments"
                placeholder="Tell us about your specific audit needs..."
                className="min-h-[100px]"
              />
            </div>
            
            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={() => setAuditModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Submit Request</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
