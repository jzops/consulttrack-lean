
import { Card } from "@/components/ui/card";
import { Clock, Users, TrendingUp } from "lucide-react";

export function TeamMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-3 mb-6">
      <Card className="p-4 flex items-center space-x-4">
        <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full">
          <Clock className="h-5 w-5 text-accent" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Total Hours remaining this month</p>
          <h3 className="text-xl font-semibold">100</h3>
        </div>
      </Card>
      
      <Card className="p-4 flex items-center space-x-4">
        <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full">
          <Users className="h-5 w-5 text-accent" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">FTEs Saved</p>
          <h3 className="text-xl font-semibold">3</h3>
        </div>
      </Card>
      
      <Card className="p-4 flex items-center space-x-4">
        <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full">
          <TrendingUp className="h-5 w-5 text-accent" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">FTE per ARR Savings</p>
          <h3 className="text-xl font-semibold">50%</h3>
        </div>
      </Card>
    </div>
  );
}
