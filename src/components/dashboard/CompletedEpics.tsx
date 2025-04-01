
import { Card } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCheck } from "lucide-react";

interface Epic {
  type: string;
  name: string;
  completedDate: string;
  description: string;
  milestones: string[];
}

interface CompletedEpicsProps {
  completedProjects: Epic[];
}

export function CompletedEpics({ completedProjects }: CompletedEpicsProps) {
  return (
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
  );
}
