
import { useState } from "react";
import { MainNav } from "@/components/layout/MainNav";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCheck, PlusCircle, Calendar as CalendarIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Completed projects data from the Index page
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

// Available RevOps project templates
const revOpsProjects = [
  {
    id: "crm-implementation",
    name: "CRM Implementation",
    description: "Set up and configure a new CRM system tailored to your business needs",
    duration: "8-12 weeks",
    complexity: "High"
  },
  {
    id: "sales-process-optimization",
    name: "Sales Process Optimization",
    description: "Streamline and enhance your sales process for improved efficiency and conversion rates",
    duration: "4-6 weeks",
    complexity: "Medium"
  },
  {
    id: "marketing-attribution",
    name: "Marketing Attribution Model",
    description: "Implement multi-touch attribution to better understand marketing ROI",
    duration: "6-8 weeks",
    complexity: "Medium"
  },
  {
    id: "lead-scoring",
    name: "Lead Scoring Implementation",
    description: "Develop and implement a lead scoring system to prioritize high-value prospects",
    duration: "3-4 weeks",
    complexity: "Medium"
  },
  {
    id: "revenue-forecasting",
    name: "Revenue Forecasting System",
    description: "Build a robust revenue forecasting system for more accurate financial planning",
    duration: "4-5 weeks",
    complexity: "High"
  },
  {
    id: "sales-enablement",
    name: "Sales Enablement Platform",
    description: "Create a comprehensive sales enablement platform with content management",
    duration: "6-10 weeks",
    complexity: "High"
  }
];

export default function Projects() {
  const { toast } = useToast();
  const [selectedProject, setSelectedProject] = useState<(typeof completedProjects)[0] | null>(null);
  const [projectRequestDialogOpen, setProjectRequestDialogOpen] = useState(false);
  const [selectedRevOpsProject, setSelectedRevOpsProject] = useState<(typeof revOpsProjects)[0] | null>(null);
  const [requestDetails, setRequestDetails] = useState("");
  const [requestPriority, setRequestPriority] = useState("Medium");

  const handleProjectSelect = (project: (typeof completedProjects)[0]) => {
    setSelectedProject(project);
  };

  const handleRevOpsProjectSelect = (project: (typeof revOpsProjects)[0]) => {
    setSelectedRevOpsProject(project);
    setProjectRequestDialogOpen(true);
  };

  const handleProjectRequest = () => {
    if (!selectedRevOpsProject) return;
    
    toast({
      title: "Project Request Submitted",
      description: `Your request for ${selectedRevOpsProject.name} has been submitted successfully.`,
    });
    
    setProjectRequestDialogOpen(false);
    setSelectedRevOpsProject(null);
    setRequestDetails("");
    setRequestPriority("Medium");
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
        
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Projects</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Request New Epic
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {revOpsProjects.map((project) => (
                <DropdownMenuItem 
                  key={project.id}
                  onClick={() => handleRevOpsProjectSelect(project)}
                >
                  {project.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Projects Request Dialog */}
        <Dialog open={projectRequestDialogOpen} onOpenChange={setProjectRequestDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Request New Epic</DialogTitle>
              <DialogDescription>
                Fill in the details to request the selected RevOps project.
              </DialogDescription>
            </DialogHeader>
            
            {selectedRevOpsProject && (
              <div className="space-y-6 py-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg">{selectedRevOpsProject.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{selectedRevOpsProject.description}</p>
                  
                  <div className="grid grid-cols-2 gap-x-4 mt-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Estimated Duration:</span>
                      <span className="ml-2 font-medium">{selectedRevOpsProject.duration}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Complexity:</span>
                      <span className="ml-2 font-medium">{selectedRevOpsProject.complexity}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium mb-1">
                      Priority
                    </label>
                    <select
                      id="priority"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      value={requestPriority}
                      onChange={(e) => setRequestPriority(e.target.value)}
                    >
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Critical</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="details" className="block text-sm font-medium mb-1">
                      Additional Details
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      placeholder="Any specific requirements or context for this project..."
                      value={requestDetails}
                      onChange={(e) => setRequestDetails(e.target.value)}
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Estimated Start: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setProjectRequestDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleProjectRequest}>
                Submit Request
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

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

        {/* Active Projects Section - Placeholder for future implementation */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Active Projects</h2>
          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <p className="text-muted-foreground">No active projects at the moment.</p>
            <Button className="mt-4" variant="outline" onClick={() => document.querySelector('[role="combobox"]')?.click()}>
              Request Your First Project
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
