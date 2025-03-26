
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  calendarLink: string;
  imageUrl: string;
}

export function TeamMemberCard({ name, role, bio, calendarLink, imageUrl }: TeamMemberCardProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  // Extended bio details for the modal
  const extendedBio = {
    "Whitney Yvette": {
      expertise: ["Enterprise Architecture", "Cloud Migration", "Scalable Systems"],
      achievements: ["Led architecture for Fortune 500 companies", "Reduced infrastructure costs by 35%", "Scaled systems to handle 10M+ daily users"],
      education: "MS Computer Science, Stanford University",
      funFact: "Climbs mountains in her spare time - has conquered 4 of the 7 summits."
    },
    "Christopher Mardian": {
      expertise: ["Revenue Operations", "Marketing Automation", "Sales Tech Stacks"],
      achievements: ["Implemented GTM strategy that increased pipeline by 200%", "Built custom HubSpot integrations for enterprise clients", "Speaker at RevOps conferences"],
      education: "MBA, Harvard Business School",
      funFact: "Certified sommelier who hosts virtual wine tastings for tech leaders."
    },
    "Izzy Navin": {
      expertise: ["Marketing Automation", "Lead Scoring", "Attribution Modeling"],
      achievements: ["Reduced CAC by 40% through optimized attribution", "Implemented lead scoring that improved MQL-to-SQL by 65%", "Built custom Marketo integrations"],
      education: "BA Marketing, NYU",
      funFact: "Former professional gamer who competed in eSports tournaments."
    },
    "Cameron Legge": {
      expertise: ["Go-to-Market Strategy", "Revenue Optimization", "Sales Leadership"],
      achievements: ["Scaled startup from $1M to $50M ARR in 3 years", "Built and led sales teams of 100+ people", "Advisor to SaaS startups"],
      education: "BS Business, Wharton School",
      funFact: "Hosts a podcast on scaling B2B SaaS companies."
    }
  }[name] || {
    expertise: ["Professional Development", "Team Leadership", "Strategic Planning"],
    achievements: ["Consistent top performer", "Mentored junior team members", "Driven company initiatives"],
    education: "Bachelor's Degree",
    funFact: "Enjoys outdoor activities on weekends."
  };

  const handleScheduleCall = () => {
    // We'll simulate opening the calendar link and show a toast
    window.open(calendarLink, '_blank');
    setOpen(false);
    toast({
      title: "Call Scheduled",
      description: `You're being redirected to ${name}'s calendar`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="overflow-hidden transition-transform hover:scale-[1.02] animate-fade-in border-accent/20 cursor-pointer">
          <CardHeader className="p-0">
            <div className="relative h-80 w-full bg-muted/50">
              <img
                src={imageUrl}
                alt={name}
                className="object-cover w-full h-full object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="mb-2 text-xl">{name}</CardTitle>
            <p className="text-sm font-medium text-accent mb-4">{role}</p>
            <p className="text-sm text-muted-foreground mb-4">{bio}</p>
            <div
              className="inline-flex items-center text-sm text-accent hover:text-accent/80"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule a call
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl flex items-center gap-3">
            {name}
            <span className="text-sm text-accent font-normal">{role}</span>
          </DialogTitle>
          <DialogDescription className="pt-4">
            {bio}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <h4 className="text-sm font-medium mb-2">Areas of Expertise</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {extendedBio.expertise.map((skill, i) => (
              <span key={i} className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs">
                {skill}
              </span>
            ))}
          </div>
          
          <h4 className="text-sm font-medium mb-2">Key Achievements</h4>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-sm">
            {extendedBio.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
          
          <div className="text-sm mb-2">
            <span className="font-medium">Education:</span> {extendedBio.education}
          </div>
          
          <div className="bg-muted/30 p-3 rounded-md text-sm italic mt-4">
            <span className="font-medium">Fun fact:</span> {extendedBio.funFact}
          </div>
        </div>
        
        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button onClick={handleScheduleCall}>
            <Calendar className="mr-2 h-4 w-4" />
            Schedule a Call
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
