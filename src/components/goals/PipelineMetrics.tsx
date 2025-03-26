
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart, Line
} from "recharts";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { MetricsCard } from "@/components/dashboard/MetricsCard";

export function PipelineMetrics() {
  const [openModals, setOpenModals] = useState<Record<string, boolean>>({});

  const toggleModal = (id: string) => {
    setOpenModals(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Sample data for the metrics
  const monthlyData = [
    { month: 'Jan', target: 100, actual: 95 },
    { month: 'Feb', target: 120, actual: 115 },
    { month: 'Mar', target: 130, actual: 140 },
    { month: 'Apr', target: 140, actual: 138 },
    { month: 'May', target: 150, actual: 155 },
    { month: 'Jun', target: 160, actual: 162 },
  ];

  const conversionData = [
    { name: 'MQL → SQL', value: 35, target: 40 },
    { name: 'SQL → SQO', value: 60, target: 65 },
  ];

  const costData = [
    { month: 'Jan', value: 125 },
    { month: 'Feb', value: 118 },
    { month: 'Mar', value: 110 },
    { month: 'Apr', value: 105 },
    { month: 'May', value: 112 },
    { month: 'Jun', value: 102 },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Pipeline Metrics</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Dialog open={openModals['mql-targets']} onOpenChange={() => toggleModal('mql-targets')}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <MetricsCard
                title="MQL Monthly Target"
                value="150"
                goal="180"
                progress={83}
                description="83% of monthly target achieved"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>MQL Monthly Targets</DialogTitle>
              <DialogDescription>
                Marketing Qualified Lead generation performance against targets.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your team is currently generating 83% of the target MQL volume. Focus on these top performing channels:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Content marketing (32% of MQLs)</li>
                <li>Paid search (28% of MQLs)</li>
                <li>Social media (18% of MQLs)</li>
                <li>Referrals (12% of MQLs)</li>
              </ul>
              <div className="h-[200px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="actual" fill="#8884d8" name="Actual MQLs" />
                    <Bar dataKey="target" fill="#82ca9d" name="Target MQLs" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <Button className="w-full" variant="outline">View Full MQL Report</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={openModals['mql-sql']} onOpenChange={() => toggleModal('mql-sql')}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <MetricsCard
                title="MQL to SQL Conversion"
                value="35%"
                goal="40%"
                progress={88}
                description="5% below target conversion rate"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>MQL to SQL Conversion</DialogTitle>
              <DialogDescription>
                Conversion effectiveness from Marketing Qualified to Sales Qualified Leads.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your MQL to SQL conversion rate is slightly below target. Here are some insights:</p>
              <div className="bg-muted p-4 rounded-lg space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Current Rate</span>
                    <span className="text-sm font-medium">35%</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Target Rate</span>
                    <span className="text-sm font-medium">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </div>
              <p className="text-sm">Top reasons for MQL rejection:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Budget constraints (42%)</li>
                <li>Poor fit with product (27%)</li>
                <li>Timeline too long (18%)</li>
                <li>Other (13%)</li>
              </ul>
              <Button className="w-full" variant="outline">View Conversion Details</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={openModals['sql-sqo']} onOpenChange={() => toggleModal('sql-sqo')}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <MetricsCard
                title="SQL to SQO Conversion"
                value="60%"
                goal="65%"
                progress={92}
                description="5% below target conversion rate"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>SQL to SQO Conversion</DialogTitle>
              <DialogDescription>
                Conversion effectiveness from Sales Qualified Leads to Sales Qualified Opportunities.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your SQL to SQO conversion is slightly below target but showing improvement. Here's the breakdown:</p>
              <div className="h-[200px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Rate']} />
                    <Bar dataKey="value" fill="#8884d8" name="Actual" />
                    <Bar dataKey="target" fill="#82ca9d" name="Target" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm">Conversion by rep experience level:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Junior reps: 52% conversion</li>
                <li>Mid-level reps: 61% conversion</li>
                <li>Senior reps: 68% conversion</li>
              </ul>
              <Button className="w-full" variant="outline">View SQL Analysis</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={openModals['cost-sql']} onOpenChange={() => toggleModal('cost-sql')}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <MetricsCard
                title="Cost per SQL"
                value="$102"
                goal="$120"
                progress={115}
                description="15% below target cost"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Cost per SQL</DialogTitle>
              <DialogDescription>
                Average cost to acquire a Sales Qualified Lead.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your cost per SQL is 15% below target, which is excellent. Cost has been trending down over the past 6 months.</p>
              <div className="h-[200px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={costData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[90, 130]} />
                    <Tooltip formatter={(value) => [`$${value}`, 'Cost per SQL']} />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm">Cost per SQL by channel:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Content marketing: $85</li>
                <li>Paid search: $110</li>
                <li>Social media: $95</li>
                <li>Events: $142</li>
              </ul>
              <Button className="w-full" variant="outline">View Cost Analysis</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pipeline Metrics Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="mql">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mql">MQL Targets</TabsTrigger>
              <TabsTrigger value="conversion">Conversion Rates</TabsTrigger>
              <TabsTrigger value="cost">Cost per SQL</TabsTrigger>
            </TabsList>
            <TabsContent value="mql" className="pt-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="actual" fill="#8884d8" name="Actual MQLs" />
                    <Bar dataKey="target" fill="#82ca9d" name="Target MQLs" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="conversion" className="pt-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Rate']} />
                    <Bar dataKey="value" fill="#8884d8" name="Actual" />
                    <Bar dataKey="target" fill="#82ca9d" name="Target" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="cost" className="pt-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={costData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[90, 130]} />
                    <Tooltip formatter={(value) => [`$${value}`, 'Cost per SQL']} />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
