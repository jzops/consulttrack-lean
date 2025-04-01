
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, LayoutDashboard, Goal, Users, Projector, Settings, Server, Bot, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function MainNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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

  return (
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
    </div>
  );
}
