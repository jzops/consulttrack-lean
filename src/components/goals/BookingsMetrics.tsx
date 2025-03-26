
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell
} from "recharts";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MetricsCard } from "@/components/dashboard/MetricsCard";

export function BookingsMetrics() {
  const [openModals, setOpenModals] = useState<Record<string, boolean>>({});

  const toggleModal = (id: string) => {
    setOpenModals(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Sample data for the metrics
  const closeRateData = [
    { month: 'Jan', value: 22 },
    { month: 'Feb', value: 24 },
    { month: 'Mar', value: 25 },
    { month: 'Apr', value: 27 },
    { month: 'May', value: 26 },
    { month: 'Jun', value: 28 },
  ];

  const acvData = [
    { month: 'Jan', value: 20000 },
    { month: 'Feb', value: 21000 },
    { month: 'Mar', value: 22500 },
    { month: 'Apr', value: 23000 },
    { month: 'May', value: 24000 },
    { month: 'Jun', value: 25000 },
  ];

  const salesCycleData = [
    { name: '0-30 days', value: 15 },
    { name: '31-60 days', value: 35 },
    { name: '61-90 days', value: 30 },
    { name: '90+ days', value: 20 },
  ];

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const salesQuotaData = [
    { name: 'Rep 1', quota: 100000, actual: 112000 },
    { name: 'Rep 2', quota: 100000, actual: 95000 },
    { name: 'Rep 3', quota: 100000, actual: 105000 },
    { name: 'Rep 4', quota: 100000, actual: 87000 },
    { name: 'Rep 5', quota: 100000, actual: 118000 },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Bookings Metrics</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <Dialog open={openModals['close-rate']} onOpenChange={() => toggleModal('close-rate')}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <MetricsCard
                title="SQL to Close Rate"
                value="28%"
                goal="25%"
                progress={112}
                description="3% above target rate"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>SQL to Close Rate</DialogTitle>
              <DialogDescription>
                The percentage of Sales Qualified Leads that convert to closed deals.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your SQL to Close Rate is exceeding target by 3 percentage points, which is excellent. The rate has improved consistently over the last 6 months.</p>
              <div className="h-[200px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={closeRateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[20, 30]} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Close Rate']} />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm">Close rate by deal size:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Small (&lt;$10k): 32%</li>
                <li>Medium ($10k-$25k): 29%</li>
                <li>Large ($25k-$50k): 24%</li>
                <li>Enterprise (&gt;$50k): 18%</li>
              </ul>
              <Button className="w-full" variant="outline">View Close Rate Analysis</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={openModals['acv']} onOpenChange={() => toggleModal('acv')}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <MetricsCard
                title="Average Contract Value"
                value="$25,000"
                goal="$22,000"
                progress={114}
                description="14% above target ACV"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Average Contract Value</DialogTitle>
              <DialogDescription>
                The average annual value of new customer contracts.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your Average Contract Value (ACV) is $25,000, which is 14% above the target of $22,000. The ACV has been steadily increasing over the past 6 months.</p>
              <div className="h-[200px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={acvData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'ACV']} />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm">ACV by customer segment:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Enterprise: $42,000</li>
                <li>Mid-Market: $28,000</li>
                <li>SMB: $16,000</li>
              </ul>
              <Button className="w-full" variant="outline">View ACV Details</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={openModals['sales-cycle']} onOpenChange={() => toggleModal('sales-cycle')}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <MetricsCard
                title="Sales Cycle Length"
                value="54 days"
                goal="60 days"
                progress={110}
                description="10% below target length"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Sales Cycle Length</DialogTitle>
              <DialogDescription>
                The average time from lead creation to closed-won deal.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your average sales cycle is 54 days, which is 10% faster than the target of 60 days. This indicates your sales process efficiency is strong.</p>
              <div className="h-[200px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={salesCycleData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {salesCycleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Deals']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm">Sales cycle by deal size:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Small (&lt;$10k): 35 days</li>
                <li>Medium ($10k-$25k): 48 days</li>
                <li>Large ($25k-$50k): 67 days</li>
                <li>Enterprise (&gt;$50k): 85 days</li>
              </ul>
              <Button className="w-full" variant="outline">View Sales Cycle Analysis</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={openModals['quota']} onOpenChange={() => toggleModal('quota')}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <MetricsCard
                title="Sales Quota Attainment"
                value="103%"
                goal="100%"
                progress={103}
                description="3% above target attainment"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Sales Quota Attainment</DialogTitle>
              <DialogDescription>
                The percentage of sales reps meeting or exceeding their quotas.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your team's overall quota attainment is 103%, which is excellent. 60% of the sales team is meeting or exceeding their individual quotas.</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sales Rep</TableHead>
                    <TableHead>Quota</TableHead>
                    <TableHead>Actual</TableHead>
                    <TableHead className="text-right">Attainment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salesQuotaData.map((rep) => (
                    <TableRow key={rep.name}>
                      <TableCell>{rep.name}</TableCell>
                      <TableCell>${rep.quota.toLocaleString()}</TableCell>
                      <TableCell>${rep.actual.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{Math.round((rep.actual / rep.quota) * 100)}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button className="w-full" variant="outline">View Quota Details</Button>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={openModals['ramp']} onOpenChange={() => toggleModal('ramp')}>
          <DialogTrigger asChild>
            <div className="cursor-pointer">
              <MetricsCard
                title="Sales Ramp Time"
                value="3.2 months"
                goal="4 months"
                progress={120}
                description="20% below target time"
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Sales Ramp Time</DialogTitle>
              <DialogDescription>
                The time it takes for new sales reps to reach full productivity.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your sales ramp time is 3.2 months, which is 20% faster than the target of 4 months. This indicates your onboarding and training process is very effective.</p>
              <div className="bg-muted p-4 rounded-lg space-y-3">
                <div>
                  <div className="text-sm font-medium">Ramp Time by Experience Level</div>
                  <div className="mt-2 space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>New to sales</span>
                        <span>4.5 months</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Experienced, new to industry</span>
                        <span>3.2 months</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Experienced in industry</span>
                        <span>2.1 months</span>
                      </div>
                      <Progress value={125} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm">Key factors reducing ramp time:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Improved onboarding program</li>
                <li>Shadow selling opportunities</li>
                <li>Sales playbook documentation</li>
                <li>Structured coaching program</li>
              </ul>
              <Button className="w-full" variant="outline">View Ramp Time Analysis</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Bookings Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="close-rate">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="close-rate">Close Rate & ACV</TabsTrigger>
              <TabsTrigger value="sales-cycle">Sales Cycle</TabsTrigger>
              <TabsTrigger value="quota">Quota Attainment</TabsTrigger>
            </TabsList>
            <TabsContent value="close-rate" className="pt-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={closeRateData.map((item, index) => ({
                      month: item.month,
                      closeRate: item.value,
                      acv: acvData[index].value / 1000, // Scaled for display
                    }))}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" domain={[20, 30]} />
                    <YAxis yAxisId="right" orientation="right" domain={[15, 30]} />
                    <Tooltip formatter={(value, name) => {
                      if (name === 'closeRate') return [`${value}%`, 'Close Rate'];
                      if (name === 'acv') return [`$${(value * 1000).toLocaleString()}`, 'ACV'];
                      return [value, name];
                    }} />
                    <Line yAxisId="left" type="monotone" dataKey="closeRate" stroke="#8884d8" name="Close Rate" />
                    <Line yAxisId="right" type="monotone" dataKey="acv" stroke="#82ca9d" name="ACV ($K)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="sales-cycle" className="pt-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={salesCycleData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {salesCycleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Deals']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="quota" className="pt-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesQuotaData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                    <Bar dataKey="quota" fill="#82ca9d" name="Quota" />
                    <Bar dataKey="actual" fill="#8884d8" name="Actual" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
