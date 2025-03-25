
import { MainNav } from "@/components/layout/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Video, Link } from "lucide-react";

export default function Resources() {
  const resourceCategories = [
    {
      title: "Documentation",
      icon: FileText,
      resources: [
        { name: "Getting Started Guide", link: "#" },
        { name: "API Reference", link: "#" },
        { name: "Implementation Playbook", link: "#" }
      ]
    },
    {
      title: "Videos",
      icon: Video,
      resources: [
        { name: "Platform Overview", link: "#" },
        { name: "Advanced Analytics Tutorial", link: "#" },
        { name: "Automation Workflows", link: "#" }
      ]
    },
    {
      title: "External Links",
      icon: Link,
      resources: [
        { name: "Partner Resources", link: "#" },
        { name: "Community Forum", link: "#" },
        { name: "Knowledge Base", link: "#" }
      ]
    }
  ];

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
        
        <div className="flex items-center mb-6">
          <BookOpen className="h-6 w-6 mr-2" />
          <h1 className="text-3xl font-bold">Resources</h1>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {resourceCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader className="flex flex-row items-center gap-2">
                <category.icon className="h-5 w-5 text-accent" />
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.resources.map((resource) => (
                    <li key={resource.name}>
                      <a 
                        href={resource.link} 
                        className="text-sm hover:underline hover:text-accent flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block"></span>
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
