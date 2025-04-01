
import { MainNav } from "@/components/layout/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, Link, ExternalLink } from "lucide-react";

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
  
  const videoCategories = [
    {
      category: "Marketing",
      videos: [
        {
          title: "Marketing Campaign Strategy",
          thumbnail: "/lovable-uploads/3db03203-c377-41e1-a0aa-dce49df7c27c.png",
          duration: "14:22",
          views: "1.2K"
        },
        {
          title: "Content Marketing Best Practices",
          thumbnail: "/lovable-uploads/debb96d6-08f9-4d02-a740-91b7f6e71e93.png",
          duration: "8:45",
          views: "876"
        },
        {
          title: "Lead Generation Techniques",
          thumbnail: "/lovable-uploads/79532bf8-1e6b-4925-be95-5d51e27c470d.png",
          duration: "11:30",
          views: "1.5K"
        }
      ]
    },
    {
      category: "Sales",
      videos: [
        {
          title: "Outbound Sales Strategy",
          thumbnail: "/lovable-uploads/668f6cf8-d746-4bc0-8de9-24a39b33fbe4.png",
          duration: "12:18",
          views: "2.3K"
        },
        {
          title: "Closing Techniques for Enterprise",
          thumbnail: "/lovable-uploads/ac3649b7-b722-4042-86c6-4855958c197f.png",
          duration: "15:42",
          views: "1.8K"
        },
        {
          title: "Negotiation Skills Masterclass",
          thumbnail: "/lovable-uploads/079cde83-3408-4b24-8f28-1d9309adb81a.png",
          duration: "18:05",
          views: "3.4K"
        }
      ]
    },
    {
      category: "Customer Success",
      videos: [
        {
          title: "Customer Onboarding Excellence",
          thumbnail: "/lovable-uploads/3db6ee0b-bf34-4a76-9860-36bfe70aad62.png",
          duration: "10:55",
          views: "945"
        },
        {
          title: "Reducing Churn with Proactive CS",
          thumbnail: "/lovable-uploads/668f6cf8-d746-4bc0-8de9-24a39b33fbe4.png",
          duration: "13:27",
          views: "1.1K"
        },
        {
          title: "Customer Health Score Framework",
          thumbnail: "/lovable-uploads/ac3649b7-b722-4042-86c6-4855958c197f.png",
          duration: "9:36",
          views: "780"
        }
      ]
    },
    {
      category: "Partnerships",
      videos: [
        {
          title: "Building Strategic Partnerships",
          thumbnail: "/lovable-uploads/079cde83-3408-4b24-8f28-1d9309adb81a.png",
          duration: "16:20",
          views: "1.7K"
        },
        {
          title: "Partner Enablement Programs",
          thumbnail: "/lovable-uploads/3db03203-c377-41e1-a0aa-dce49df7c27c.png",
          duration: "11:48",
          views: "925"
        },
        {
          title: "Co-selling with Partners",
          thumbnail: "/lovable-uploads/debb96d6-08f9-4d02-a740-91b7f6e71e93.png",
          duration: "14:10",
          views: "1.3K"
        }
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
        
        <div className="mt-12">
          <div className="flex items-center mb-6">
            <Video className="h-6 w-6 mr-2" />
            <h2 className="text-2xl font-bold">LeanScale Video Library</h2>
          </div>
          
          <Tabs defaultValue="marketing" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="cs">Customer Success</TabsTrigger>
              <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
            </TabsList>
            
            {videoCategories.map((category) => (
              <TabsContent 
                key={category.category.toLowerCase()} 
                value={category.category.toLowerCase() === "customer success" ? "cs" : category.category.toLowerCase()}
              >
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.videos.map((video, index) => (
                    <div key={index} className="group overflow-hidden rounded-lg border bg-card shadow-sm hover:shadow-md transition-all">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full object-cover aspect-video"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium group-hover:text-primary transition-colors">{video.title}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-muted-foreground">{video.views} views</span>
                          <a href="#" className="text-xs text-primary flex items-center">
                            Watch
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
