
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  calendarLink: string;
  imageUrl: string;
}

export function TeamMemberCard({ name, role, bio, calendarLink, imageUrl }: TeamMemberCardProps) {
  // Extract initials for the avatar fallback
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('');

  return (
    <Card className="overflow-hidden transition-transform hover:scale-[1.02] animate-fade-in border-accent/20">
      <CardHeader className="p-0">
        <div className="relative h-64 w-full bg-muted/50">
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
        <a
          href={calendarLink}
          className="inline-flex items-center text-sm text-accent hover:text-accent/80"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Schedule a call
        </a>
      </CardContent>
    </Card>
  );
}
