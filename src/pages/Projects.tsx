
import { useState } from "react";
import { MainNav } from "@/components/layout/MainNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Projector, Plus, Calendar, Check, AlertCircle } from "lucide-react";

export default function Projects() {
  const { toast } = useToast();
  const [selectedProject, setSelectedProject] = useState<string | undefined>(undefined);

  const completedEpics = [
    {
      id: "epic1",
      name: "Sales Pipeline Automation",
      status: "Completed",
      completion: "100%",
      date: "2023-09-15",
      team: "Sales Operations"
    },
    {
      id: "epic2",
      name: "Marketing Campaign Analytics",
      status: "Completed",
      completion: "100%",
      date: "2023-10-22",
      team: "Marketing"
    },
    {
      id: "epic3",
      name: "Customer Health Scoring",
      status: "Completed",
      completion: "100%",
      date: "2023-11-08",
      team: "Customer Success"
    }
  ];

  const revOpsProjects = [
    {
      id: "revops1",
      name: "Quote-to-Cash Automation",
      description: "Streamline the quote-to-cash process to reduce manual effort and increase accuracy.",
      duration: "4-6 weeks",
      complexity: "Medium"
    },
    {
      id: "revops2",
      name: "Lead Routing Optimization",
      description: "Improve lead assignment process to ensure faster follow-up and better conversion rates.",
      duration: "2-3 weeks",
      complexity: "Low"
    },
    {
      id: "revops3",
      name: "Customer Journey Mapping",
      description: "Map the customer journey to identify friction points and improvement opportunities.",
      duration: "3-4 weeks",
      complexity: "Medium"
    },
    {
      id: "revops4",
      name: "Sales Territory Planning",
      description: "Develop a data-driven approach to territory planning and assignment.",
      duration: "5-7 weeks",
      complexity: "High"
    },
    {
      id: "revops5",
      name: "Revenue Forecasting Model",
      description: "Create a predictive model for more accurate revenue forecasting.",
      duration: "4-5 weeks",
      complexity: "High"
    }
  ];

  const handleRequestEpic = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedProject) {
      toast({
        variant: "destructive",
        title: "Project selection required",
        description: "Please select a project before submitting your request."
      });
      return;
    }

    toast({
      title: "Epic Requested Successfully",
      description: `Your request for "${revOpsProjects.find(p => p.id === selectedProject)?.name}" has been submitted.`,
    });

    // Reset form
    setSelectedProject(undefined);
    
    // Close the dialog by using data attribute instead of DOM element reference
    const closeButton = document.querySelector("[data-dismiss-dialog]") as HTMLButtonElement;
    if (closeButton) {
      closeButton.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Request New Epic
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Request New Epic</DialogTitle>
                  <DialogDescription>
                    Select from our list of pre-configured RevOps projects to request a new epic.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleRequestEpic} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="project-select" className="text-sm font-medium">
                      Select Project Type
                    </label>
                    <Select value={selectedProject} onValueChange={setSelectedProject}>
                      <SelectTrigger id="project-select">
                        <SelectValue placeholder="Select a project" />
                      </SelectTrigger>
                      <SelectContent>
                        {revOpsProjects.map((project) => (
                          <SelectItem key={project.id} value={project.id}>
                            {project.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedProject && (
                    <div className="rounded-md border p-4 bg-muted/50">
                      <h4 className="font-medium mb-1">
                        {revOpsProjects.find(p => p.id === selectedProject)?.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {revOpsProjects.find(p => p.id === selectedProject)?.description}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{revOpsProjects.find(p => p.id === selectedProject)?.duration}</span>
                        </div>
                        <span className="bg-primary/10 px-2 py-1 rounded-full">
                          {revOpsProjects.find(p => p.id === selectedProject)?.complexity} Complexity
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="notes" className="text-sm font-medium">
                      Additional Notes
                    </label>
                    <Input id="notes" placeholder="Any specific requirements or context" />
                  </div>

                  <DialogFooter>
                    <Button type="button" variant="outline" data-dismiss-dialog>
                      Cancel
                    </Button>
                    <Button type="submit">Submit Request</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </header>

        <main className="flex-1 p-6 sm:p-8">
          <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
            <div className="flex items-center mb-6">
              <Projector className="h-6 w-6 mr-2" />
              <h1 className="text-3xl font-bold">Projects</h1>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Completed Epics</CardTitle>
                <CardDescription>Recently completed epics across teams</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Epic Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Completion</TableHead>
                      <TableHead>Completion Date</TableHead>
                      <TableHead>Team</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {completedEpics.map((epic) => (
                      <TableRow key={epic.id}>
                        <TableCell className="font-medium">{epic.name}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Check className="h-4 w-4 mr-1 text-green-500" />
                            <span>{epic.status}</span>
                          </div>
                        </TableCell>
                        <TableCell>{epic.completion}</TableCell>
                        <TableCell>{epic.date}</TableCell>
                        <TableCell>{epic.team}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Available RevOps Projects</CardTitle>
                <CardDescription>Pre-configured projects that you can request</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {revOpsProjects.map((project) => (
                    <Card key={project.id} className="border border-muted">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{project.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm">{project.description}</p>
                        <div className="flex items-center justify-between mt-4 text-xs">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{project.duration}</span>
                          </div>
                          <span className="bg-primary/10 px-2 py-1 rounded-full">
                            {project.complexity} Complexity
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm">Request Epic</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Request {project.name}</DialogTitle>
                              <DialogDescription>
                                Submit your request for this RevOps project
                              </DialogDescription>
                            </DialogHeader>
                            <form className="space-y-4">
                              <div className="space-y-2">
                                <label className="text-sm font-medium">Additional Notes</label>
                                <Input placeholder="Any specific requirements or context" />
                              </div>
                              <DialogFooter>
                                <Button type="button" variant="outline">
                                  Cancel
                                </Button>
                                <Button 
                                  type="button" 
                                  onClick={() => {
                                    toast({
                                      title: "Epic Requested",
                                      description: `Your request for "${project.name}" has been submitted.`
                                    });
                                  }}
                                >
                                  Submit Request
                                </Button>
                              </DialogFooter>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
