
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricsCardProps {
  title: string;
  value: string | number;
  goal?: string | number;
  progress?: number;
  description?: string;
  className?: string;
}

export function MetricsCard({ 
  title, 
  value, 
  goal, 
  progress, 
  description, 
  className 
}: MetricsCardProps) {
  return (
    <Card className={cn("backdrop-blur-sm bg-white/30 border border-accent/20", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {goal && (
          <div className="mt-3">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Progress</span>
              <span>{progress || 0}%</span>
            </div>
            <div className="relative w-full h-2 bg-secondary rounded">
              <div
                className="absolute top-0 left-0 h-full bg-accent rounded"
                style={{ width: `${progress || 0}%` }}
              />
            </div>
          </div>
        )}
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
