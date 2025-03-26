
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area
} from "recharts";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TrendingDown, Clock } from "lucide-react";
import { MetricsCard } from "@/components/dashboard/MetricsCard";

export function ChurnMetrics() {
  const [openModals, setOpenModals] = useState<Record<string, boolean>>({});

  const toggleModal = (id: string) => {
    setOpenModals(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Sample data for the metrics
  const monthlyChurnData = [
    { month: 'Jan', target: 2.0, actual: 2.1 },
    { month: 'Feb', target: 2.0, actual: 1.8 },
    { month: 'Mar', target: 1.9, actual: 2.0 },
    { month: 'Apr', target: 1.9, actual: 1.9 },
    { month: 'May', target: 1.8, actual: 1.7 },
    { month: 'Jun', target: 1.8, actual: 1.5 },
  ];

  const retentionData = [
    { month: 'Jan', value: 104 },
    { month: 'Feb', value: 105 },
    { month: 'Mar', value: 103 },
    { month: 'Apr', value: 106 },
    { month: 'May', value: 107 },
    { month: 'Jun', value: 108 },
  ];

  const ftvData = [
    { cohort: 'Q1 Signups', target: 30, actual: 28 },
    { cohort: 'Q2 Signups', target: 30, actual: 25 },
    { cohort: 'Enterprise', target: 45, actual: 40 },
    { cohort: 'Mid-Market', target: 30, actual: 26 },
    { cohort: 'SMB', target: 20, actual: 18 },
  ];

  const churnReasonData = [
    { name: 'Product Fit', value: 35 },
    { name: 'Competitor', value: 25 },
    { name: 'Budget/Cost', value: 20 },
    { name: 'Poor Support', value: 12 },
    { name: 'Other', value: 8 },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Churn Metrics</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Dialog open={openModals['churn-target']} onOpenChange={() => toggleModal('churn-target')}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <MetricsCard
                title="Churn Monthly Target"
                value="1.5%"
                goal="1.8%"
                progress={120}
                description="0.3% below target (better)"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Churn Monthly Target</DialogTitle>
              <DialogDescription>
                The percentage of customers that cancel their subscription each month.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your monthly churn rate is 1.5%, which is below the target of 1.8% - this is excellent. The churn rate has been steadily decreasing over the past 6 months.</p>
              <div className="h-[200px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyChurnData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[1.0, 2.5]} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Churn Rate']} />
                    <Line type="monotone" dataKey="actual" stroke="#8884d8" name="Actual" />
                    <Line type="monotone" dataKey="target" stroke="#82ca9d" name="Target" strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm">Churn by customer segment:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Enterprise: 0.8%</li>
                <li>Mid-Market: 1.4%</li>
                <li>SMB: 2.5%</li>
              </ul>
              <Button className="w-full" variant="outline">View Churn Analysis</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={openModals['net-retention']} onOpenChange={() => toggleModal('net-retention')}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <MetricsCard
                title="Annual Net Retention"
                value="108%"
                goal="105%"
                progress={103}
                description="3% above target retention"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Annual Net Retention</DialogTitle>
              <DialogDescription>
                The percentage of revenue retained from existing customers over a 12-month period, including expansions and contractions.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your net retention rate is 108%, which means your existing customers are growing their spend with you over time - this is excellent and 3% above target.</p>
              <div className="h-[200px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={retentionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[100, 110]} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Net Retention']} />
                    <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm">Net retention drivers:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Expansion revenue: +12%</li>
                <li>Contraction: -2%</li>
                <li>Churn: -2%</li>
                <li>Net effect: +8%</li>
              </ul>
              <Button className="w-full" variant="outline">View Retention Details</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={openModals['ftv']} onOpenChange={() => toggleModal('ftv')}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <MetricsCard
                title="FTV in Days"
                value="25"
                goal="30"
                progress={117}
                description="5 days faster than target"
                className="relative"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>First Time to Value (FTV)</DialogTitle>
              <DialogDescription>
                The average number of days it takes for a new customer to realize value from your product.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your average FTV is 25 days, which is 5 days faster than the target of 30 days. This indicates your onboarding process is effective and customers are able to realize value quickly.</p>
              <div className="h-[200px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ftvData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="cohort" />
                    <YAxis domain={[0, 50]} />
                    <Tooltip formatter={(value) => [`${value} days`, 'FTV']} />
                    <Bar dataKey="actual" fill="#8884d8" name="Actual FTV" />
                    <Bar dataKey="target" fill="#82ca9d" name="Target FTV" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm">FTV improvement initiatives:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Improved onboarding checklist</li>
                <li>Dedicated CSM assignment</li>
                <li>New user training webinars</li>
                <li>Feature adoption tracking</li>
              </ul>
              <Button className="w-full" variant="outline">View FTV Analysis</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Churn Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="trends">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="trends">Churn Trends</TabsTrigger>
                <TabsTrigger value="reasons">Churn Reasons</TabsTrigger>
              </TabsList>
              <TabsContent value="trends" className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyChurnData.map((item, index) => ({
                        month: item.month,
                        churn: item.actual,
                        retention: retentionData[index].value,
                      }))}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" domain={[1.0, 2.5]} />
                      <YAxis yAxisId="right" orientation="right" domain={[100, 110]} />
                      <Tooltip formatter={(value, name) => {
                        if (name === 'churn') return [`${value}%`, 'Churn Rate'];
                        if (name === 'retention') return [`${value}%`, 'Net Retention'];
                        return [value, name];
                      }} />
                      <Line yAxisId="left" type="monotone" dataKey="churn" stroke="#ff7300" name="Churn" />
                      <Line yAxisId="right" type="monotone" dataKey="retention" stroke="#82ca9d" name="Retention" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              <TabsContent value="reasons" className="pt-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      layout="vertical"
                      data={churnReasonData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 40]} />
                      <YAxis dataKey="name" type="category" />
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>First Time to Value (FTV)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-muted-foreground mr-2" />
              <span className="text-sm text-muted-foreground">Average time for customers to realize value</span>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ftvData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="cohort" />
                  <YAxis domain={[0, 50]} />
                  <Tooltip formatter={(value) => [`${value} days`, 'FTV']} />
                  <Bar dataKey="actual" fill="#8884d8" name="Actual FTV" />
                  <Bar dataKey="target" fill="#82ca9d" name="Target FTV" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <Card className="bg-muted/50 border-dashed">
                <CardContent className="p-3">
                  <div className="text-xs text-muted-foreground">Onboarding</div>
                  <div className="text-xl font-bold">7 days</div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-dashed">
                <CardContent className="p-3">
                  <div className="text-xs text-muted-foreground">Implementation</div>
                  <div className="text-xl font-bold">12 days</div>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-dashed">
                <CardContent className="p-3">
                  <div className="text-xs text-muted-foreground">Training</div>
                  <div className="text-xl font-bold">6 days</div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
