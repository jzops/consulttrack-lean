
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

interface PartnerCardProps {
  name: string;
  role: string;
  expertise: string;
  background: string;
  imageUrl: string;
  calendarLink: string;
}

export function PartnerCard({ 
  name, 
  role, 
  expertise, 
  background, 
  imageUrl, 
  calendarLink 
}: PartnerCardProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  
  // Get the initials for the avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  };

  // Experience areas based on expertise
  const getExperienceAreas = (expertise: string) => {
    const experienceMapping: Record<string, string[]> = {
      "Go-to-Market Strategy": ["GTM Strategy Development", "Market Entry Planning", "Revenue Growth", "Competitive Positioning", "Market Segmentation"],
      "Go-to-Market Operations": ["Revenue Operations", "Process Optimization", "Tech Stack Integration", "Sales & Marketing Alignment", "Revenue Forecasting"],
      "Marketing Operations": ["Marketing Automation", "Campaign Management", "Lead Generation", "Attribution Modeling", "Demand Generation"],
      "System Architecture": ["Tech Stack Design", "Systems Integration", "Data Architecture", "Scalable Infrastructure", "Technology Roadmapping"],
      "Sales Operations": ["Sales Process Optimization", "Pipeline Management", "Territory Planning", "Sales Analytics", "CRM Administration"],
      "CS Operations": ["Customer Journey Mapping", "Retention Strategies", "Success Metrics", "Customer Health Scoring", "Onboarding Optimization"],
      "Data Engineering": ["Data Pipeline Development", "Business Intelligence", "ETL Processes", "Data Warehousing", "Analytics Implementation"]
    };
    
    return experienceMapping[expertise] || [
      "Strategic Planning", 
      "Team Leadership", 
      "Process Optimization", 
      "Technology Implementation", 
      "Performance Analysis"
    ];
  };
  
  // Mock company experience based on expertise
  const getCompanyExperience = (expertise: string) => {
    const companyExperienceMapping: Record<string, string[]> = {
      "Go-to-Market Strategy": ["Salesforce", "HubSpot", "Zoom", "Drift", "Segment"],
      "Go-to-Market Operations": ["Workday", "Atlassian", "DocuSign", "Monday.com", "Asana"],
      "Marketing Operations": ["Adobe", "Marketo", "Mailchimp", "Hubspot", "Pardot"],
      "System Architecture": ["AWS", "Microsoft", "Google Cloud", "Snowflake", "MongoDB"],
      "Sales Operations": ["Oracle", "Salesforce", "Outreach", "Gong", "ZoomInfo"],
      "CS Operations": ["Zendesk", "Gainsight", "Intercom", "Totango", "ChurnZero"],
      "Data Engineering": ["Databricks", "Fivetran", "dbt", "Snowflake", "Looker"]
    };
    
    return companyExperienceMapping[expertise] || [
      "Microsoft", 
      "Salesforce", 
      "Oracle", 
      "Adobe", 
      "IBM"
    ];
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

  const experienceAreas = getExperienceAreas(expertise);
  const companyExperience = getCompanyExperience(expertise);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="overflow-hidden transition-transform hover:scale-[1.02] animate-fade-in border-accent/20 cursor-pointer h-full">
          <CardHeader className="p-4 flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={imageUrl} alt={name} className="object-cover" />
              <AvatarFallback>{getInitials(name)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-accent">{expertise}</p>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{background}</p>
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
            <span className="text-sm text-accent font-normal">{expertise}</span>
          </DialogTitle>
          <DialogDescription className="pt-4">
            {background}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <h4 className="text-sm font-medium mb-2">Areas of Expertise</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {experienceAreas.map((skill, i) => (
              <span key={i} className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs">
                {skill}
              </span>
            ))}
          </div>
          
          <h4 className="text-sm font-medium mb-2">Company Experience</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {companyExperience.map((company, i) => (
              <span key={i} className="bg-primary/5 text-primary px-2 py-1 rounded-full text-xs">
                {company}
              </span>
            ))}
          </div>
          
          <div className="bg-muted/30 p-3 rounded-md text-sm mt-4">
            <span className="font-medium">Availability:</span> Typically responds within 24 hours
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
