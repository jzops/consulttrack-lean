
import { TeamMemberCard } from "@/components/dashboard/TeamMemberCard";
import { TeamMetrics } from "@/components/dashboard/TeamMetrics";
import { Card } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  calendarLink: string;
  imageUrl: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
  otherTeams: string[];
  onTeamClick: (team: string) => void;
}

export function TeamSection({ teamMembers, otherTeams, onTeamClick }: TeamSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Your Team</h2>
      
      {/* Team Metrics */}
      <TeamMetrics />
      
      <div className="grid gap-6 md:grid-cols-4">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
      
      {/* Bring in Other Teams */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Bring in Other Teams</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {otherTeams.map((team) => (
            <Card 
              key={team} 
              className="p-6 hover:bg-accent/5 transition-colors cursor-pointer"
              onClick={() => onTeamClick(team)}
            >
              <div className="flex items-center space-x-4">
                <UserPlus className="w-6 h-6 text-accent" />
                <div>
                  <h4 className="font-medium">{team}</h4>
                  <p className="text-sm text-muted-foreground">Click to learn more</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
