
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { 
  HoverCard, 
  HoverCardContent, 
  HoverCardTrigger 
} from "@/components/ui/hover-card";
import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { ArrowUp, ArrowDown, CheckCheck, AlertTriangle } from "lucide-react";

interface ControlCompletion {
  marketing: number;
  sales: number;
  "customer success": number;
  partnerships: number;
}

interface MetricsOverviewProps {
  controlCompletion: ControlCompletion;
}

export function MetricsOverview({ controlCompletion }: MetricsOverviewProps) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <Popover>
        <PopoverTrigger asChild>
          <div className="cursor-pointer">
            <MetricsCard
              title="Bookings to Goal"
              value="$124,000"
              goal="$150,000"
              progress={82}
              description="82% of quarterly target"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <h3 className="font-medium">Bookings Breakdown</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>New business:</span>
                <span className="font-medium">$75,000</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Expansion:</span>
                <span className="font-medium">$42,000</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Renewal:</span>
                <span className="font-medium">$7,000</span>
              </div>
              <div className="h-px bg-border my-2" />
              <div className="flex items-center justify-between">
                <span>Total:</span>
                <span className="font-medium">$124,000</span>
              </div>
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-2">
              <span className="flex items-center text-emerald-500 mr-4">
                <ArrowUp className="h-3 w-3 mr-1" />
                12% vs last quarter
              </span>
              <span className="flex items-center text-red-500">
                <ArrowDown className="h-3 w-3 mr-1" />
                5% vs forecasted
              </span>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <div className="cursor-pointer">
            <MetricsCard
              title="Pipeline to Goal"
              value="$1.2M"
              goal="$1.5M"
              progress={80}
              description="80% of required pipeline"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <h3 className="font-medium">Pipeline Health</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Early stage:</span>
                <span className="font-medium">$500,000</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Mid stage:</span>
                <span className="font-medium">$450,000</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Late stage:</span>
                <span className="font-medium">$250,000</span>
              </div>
              <div className="h-px bg-border my-2" />
              <div className="flex items-center justify-between">
                <span>Total Pipeline:</span>
                <span className="font-medium">$1,200,000</span>
              </div>
            </div>
            <div className="flex items-center bg-amber-50 p-2 rounded text-xs text-amber-800 mt-2">
              <AlertTriangle className="h-3 w-3 mr-2" />
              <span>Need $300K more pipeline to meet forecast</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <div className="cursor-pointer">
            <MetricsCard
              title="Churn to Goal"
              value="4.2%"
              goal="<5%"
              progress={90}
              description="0.8% below target threshold"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <h3 className="font-medium">Churn Analysis</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="flex justify-between mb-1">
                  <span>Product issues:</span>
                  <span>35%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-red-400 h-full" style={{ width: "35%" }} />
                </div>
              </div>
              <div className="text-sm">
                <div className="flex justify-between mb-1">
                  <span>Pricing concerns:</span>
                  <span>28%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-orange-400 h-full" style={{ width: "28%" }} />
                </div>
              </div>
              <div className="text-sm">
                <div className="flex justify-between mb-1">
                  <span>Competitor switch:</span>
                  <span>22%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-yellow-400 h-full" style={{ width: "22%" }} />
                </div>
              </div>
              <div className="text-sm">
                <div className="flex justify-between mb-1">
                  <span>Other reasons:</span>
                  <span>15%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-blue-400 h-full" style={{ width: "15%" }} />
                </div>
              </div>
            </div>
            <div className="flex items-center bg-emerald-50 p-2 rounded text-xs text-emerald-800 mt-2">
              <CheckCheck className="h-3 w-3 mr-2" />
              <span>Churn rate trending down 0.3% month-over-month</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="cursor-pointer">
            <MetricsCard
              title="Control Completion"
              value="76%"
              goal="100%"
              progress={76}
              description="Across all departments"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="space-y-2">
            <h3 className="font-medium text-sm">Department Breakdown</h3>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-center justify-between">
                <span>Marketing:</span>
                <span className="font-medium">{controlCompletion.marketing}%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sales:</span>
                <span className="font-medium">{controlCompletion.sales}%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Customer Success:</span>
                <span className="font-medium">{controlCompletion["customer success"]}%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Partnerships:</span>
                <span className="font-medium">{controlCompletion.partnerships}%</span>
              </li>
            </ul>
            <div className="text-xs text-muted-foreground mt-2">
              Hover over each department in the Control Completion section for more details.
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
