
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CheckCheck, Info, AlertTriangle } from "lucide-react";

interface ControlCompletionProps {
  controlCompletion: {
    [department: string]: number;
  };
}

export function ControlCompletionSection({ controlCompletion }: ControlCompletionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Control Completion</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(controlCompletion).map(([department, completion]) => (
          <Popover key={department}>
            <PopoverTrigger asChild>
              <div
                className="bg-white/30 backdrop-blur-sm rounded-lg p-6 border border-white/20 cursor-pointer hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium capitalize mb-2">
                  {department}
                </h3>
                <div className="relative w-full h-2 bg-secondary rounded">
                  <div
                    className="absolute top-0 left-0 h-full bg-accent rounded"
                    style={{ width: `${completion}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {completion}% complete
                </p>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <h3 className="font-medium capitalize">
                  {department} Control Details
                </h3>
                
                <div className="space-y-2">
                  <div className="text-sm flex items-center justify-between">
                    <span>Critical controls:</span>
                    <span className="font-medium">
                      {Math.round(completion * 0.6)}% of {Math.round(completion * 0.6 / (completion * 0.01))}
                    </span>
                  </div>
                  <div className="text-sm flex items-center justify-between">
                    <span>High-priority controls:</span>
                    <span className="font-medium">
                      {Math.round(completion * 0.3)}% of {Math.round(completion * 0.3 / (completion * 0.01))}
                    </span>
                  </div>
                  <div className="text-sm flex items-center justify-between">
                    <span>Medium-priority controls:</span>
                    <span className="font-medium">
                      {Math.round(completion * 0.1)}% of {Math.round(completion * 0.1 / (completion * 0.01))}
                    </span>
                  </div>
                </div>
                
                <div className={`rounded p-2 text-xs ${
                  completion >= 85 ? "bg-green-50 text-green-800" : 
                  completion >= 70 ? "bg-yellow-50 text-yellow-800" : 
                  "bg-red-50 text-red-800"
                }`}>
                  {completion >= 85 ? (
                    <span className="flex items-center"><CheckCheck className="w-3 h-3 mr-1" /> On track to complete all controls</span>
                  ) : completion >= 70 ? (
                    <span className="flex items-center"><Info className="w-3 h-3 mr-1" /> Making good progress, but needs attention</span>
                  ) : (
                    <span className="flex items-center"><AlertTriangle className="w-3 h-3 mr-1" /> Needs immediate attention</span>
                  )}
                </div>
                
                <Button size="sm" className="w-full">View All Controls</Button>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </section>
  );
}
