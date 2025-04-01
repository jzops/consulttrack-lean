
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, LayoutDashboard, Goal, Users, Projector, Settings, Server, Bot, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
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
import { useToast } from "@/hooks/use-toast";

export function MainNav() {
  const [open, setOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const navItems = [
    { name: "Overview", icon: LayoutDashboard, path: "/" },
    { name: "Goal Attainment", icon: Goal, path: "/goals" },
    { name: "My Team", icon: Users, path: "/team" },
    { name: "Projects", icon: Projector, path: "/projects" },
    { name: "Controls", icon: Settings, path: "/controls" },
    { name: "Systems", icon: Server, path: "/systems" },
    { name: "AI Agents", icon: Bot, path: "/ai-agents" },
    { name: "Resources", icon: BookOpen, path: "/resources" }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setOpen(false);
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
    <>
      <div className="flex justify-between items-center w-full">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <div className="flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/79532bf8-1e6b-4925-be95-5d51e27c470d.png" 
                    alt="LeanScale Logo" 
                    className="h-8"
                  />
                </div>
              </div>
              <nav className="flex-1 py-4">
                <ul className="space-y-1 px-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => handleNavigation(item.path)}
                      >
                        <item.icon className="mr-2 h-5 w-5" />
                        {item.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <Button 
          variant="default" 
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
          onClick={() => setAuditModalOpen(true)}
        >
          Request an Audit
        </Button>
      </div>
      
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
    </>
  );
}
