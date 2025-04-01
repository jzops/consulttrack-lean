import { MainNav } from "@/components/layout/MainNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Bot, Plus, MessageSquare, Calendar, Search, Settings } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function AIAgents() {
  const { toast } = useToast();
  
  const [agents, setAgents] = useState([
    {
      id: 1,
      name: "Slack GTM Ops Bot",
      description: "Helps with daily GTM operations in Slack",
      platform: "Slack",
      interactions: 243,
      lastActive: "2 hours ago",
      icon: MessageSquare
    },
    {
      id: 2,
      name: "Meeting Scheduler Assistant",
      description: "Schedules and organizes meetings with prospects",
      platform: "Calendar",
      interactions: 187,
      lastActive: "1 day ago",
      icon: Calendar
    },
    {
      id: 3,
      name: "Lead Research Assistant",
      description: "Researches potential leads and provides insights",
      platform: "Web",
      interactions: 156,
      lastActive: "3 hours ago",
      icon: Search
    }
  ]);
  
  const handleAddAgent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newAgent = {
      id: agents.length + 1,
      name: String(formData.get("name") || ""),
      description: String(formData.get("description") || ""),
      platform: String(formData.get("platform") || ""),
      interactions: 0,
      lastActive: "Just now",
      icon: MessageSquare
    };
    
    setAgents([...agents, newAgent]);
    toast({
      title: "Agent Created",
      description: `${newAgent.name} has been successfully created.`,
    });
    
    // Close dialog by simulating click on close button
    const closeButton = document.querySelector("[data-close-dialog]") as HTMLButtonElement;
    if (closeButton && typeof closeButton.click === 'function') {
      closeButton.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MainNav />
            <img 
              src="/lovable-uploads/79532bf8-1e6b-4925-be95-5d51e27c470d.png" 
              alt="LeanScale Logo" 
              className="h-4"
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            <h1 className="text-3xl font-bold">AI Agents</h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add New Agent
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New AI Agent</DialogTitle>
                <DialogDescription>
                  Define a new AI agent to assist your team
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddAgent} className="space-y-4">
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="name" className="text-right">Name</label>
                    <Input name="name" id="name" className="col-span-3" placeholder="Agent name" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="platform" className="text-right">Platform</label>
                    <Input name="platform" id="platform" className="col-span-3" placeholder="Slack, Email, Web, etc." />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <label htmlFor="description" className="text-right">Description</label>
                    <Input name="description" id="description" className="col-span-3" placeholder="What does this agent do?" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" data-close-dialog variant="outline">Cancel</Button>
                  <Button type="submit">Create Agent</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Card key={agent.id}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="flex items-center">
                  <div className="mr-2 rounded-md bg-primary/10 p-2">
                    <agent.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{agent.name}</CardTitle>
                    <CardDescription className="text-xs">{agent.platform} Platform</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{agent.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <MessageSquare className="mr-1 h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{agent.interactions} interactions</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Last active: {agent.lastActive}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">View Details</Button>
                <Button size="sm">Chat</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
