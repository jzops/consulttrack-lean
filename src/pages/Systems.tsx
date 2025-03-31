
import { useState } from "react";
import { MainNav } from "@/components/layout/MainNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Server, Plus, Search, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Systems() {
  const [showBrowseModal, setShowBrowseModal] = useState(false);
  const { toast } = useToast();
  
  const systemCategories = [
    {
      category: "Marketing",
      systems: [
        { name: "HubSpot", description: "Marketing automation platform", users: 12 },
        { name: "Mailchimp", description: "Email marketing platform", users: 8 }
      ]
    },
    {
      category: "Sales",
      systems: [
        { name: "Salesforce", description: "CRM platform", users: 25 },
        { name: "Outreach", description: "Sales engagement platform", users: 15 }
      ]
    },
    {
      category: "Customer Success",
      systems: [
        { name: "Gainsight", description: "Customer success platform", users: 10 },
        { name: "ChurnZero", description: "Customer retention platform", users: 7 }
      ]
    }
  ];
  
  const otherSystems = [
    { name: "Marketo", category: "Marketing", description: "Marketing automation software for account-based marketing", logo: "https://via.placeholder.com/50" },
    { name: "Pardot", category: "Marketing", description: "B2B marketing automation by Salesforce", logo: "https://via.placeholder.com/50" },
    { name: "Gong", category: "Sales", description: "Revenue intelligence platform", logo: "https://via.placeholder.com/50" },
    { name: "Chorus", category: "Sales", description: "Conversation intelligence platform", logo: "https://via.placeholder.com/50" },
    { name: "Vitally", category: "Customer Success", description: "Customer success platform", logo: "https://via.placeholder.com/50" },
    { name: "ClientSuccess", category: "Customer Success", description: "Customer success software", logo: "https://via.placeholder.com/50" }
  ];
  
  const handleAddSystem = (event) => {
    event.preventDefault();
    toast({
      title: "System Added",
      description: "Your new system has been added successfully."
    });
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
            <Server className="h-6 w-6" />
            <h1 className="text-3xl font-bold">Systems</h1>
          </div>
          <div className="flex gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New System
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New GTM System</DialogTitle>
                  <DialogDescription>
                    Add details about the new system your team is using.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddSystem} className="space-y-4">
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="name" className="text-right">Name</label>
                      <Input id="name" className="col-span-3" placeholder="System name" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="category" className="text-right">Category</label>
                      <Input id="category" className="col-span-3" placeholder="Marketing, Sales, Customer Success, etc." />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="description" className="text-right">Description</label>
                      <Input id="description" className="col-span-3" placeholder="Brief description of the system" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="users" className="text-right">Users</label>
                      <Input id="users" className="col-span-3" placeholder="Number of users" type="number" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save System</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" onClick={() => setShowBrowseModal(true)}>
              <Search className="h-4 w-4 mr-2" />
              Browse Other Systems
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {systemCategories.map((categoryGroup) => (
            <Card key={categoryGroup.category} className="overflow-hidden">
              <CardHeader className="bg-muted/50">
                <CardTitle>{categoryGroup.category}</CardTitle>
                <CardDescription>
                  {categoryGroup.systems.length} systems in use
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {categoryGroup.systems.map((system) => (
                    <div key={system.name} className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{system.name}</h4>
                        <p className="text-sm text-muted-foreground">{system.description}</p>
                      </div>
                      <div className="bg-primary/10 text-xs rounded-full px-2 py-1">
                        {system.users} users
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-muted/20 flex justify-end">
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={showBrowseModal} onOpenChange={setShowBrowseModal}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Browse Other GTM Systems</DialogTitle>
            <DialogDescription>
              Explore other systems used by companies like yours
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4">
            <div className="flex items-center mb-4">
              <Input placeholder="Search systems..." className="mr-4" />
              <Button variant="outline">Search</Button>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              {otherSystems.map((system) => (
                <div key={system.name} className="border rounded-md p-4 flex items-start gap-4">
                  <div className="h-12 w-12 bg-muted rounded-md flex items-center justify-center">
                    <Server className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{system.name}</h4>
                      <span className="text-xs bg-muted rounded-full px-2 py-1">{system.category}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{system.description}</p>
                    <div className="mt-2">
                      <a href="#" className="text-xs text-primary flex items-center">
                        Learn more 
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowBrowseModal(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
