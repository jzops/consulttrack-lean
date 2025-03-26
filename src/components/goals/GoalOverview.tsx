
import { useState } from "react";
import { 
  PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line 
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { InfoIcon, TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export function GoalOverview() {
  const [openModals, setOpenModals] = useState<Record<string, boolean>>({});

  const toggleModal = (id: string) => {
    setOpenModals(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Sample data for the overview charts
  const pipelineData = [
    { name: 'MQLs', value: 125, target: 150, color: '#8884d8' },
    { name: 'SQLs', value: 75, target: 80, color: '#82ca9d' },
    { name: 'SQOs', value: 40, target: 50, color: '#ffc658' }
  ];

  const bookingsData = [
    { month: 'Jan', value: 120, target: 100 },
    { month: 'Feb', value: 130, target: 110 },
    { month: 'Mar', value: 115, target: 120 },
    { month: 'Apr', value: 140, target: 130 },
    { month: 'May', value: 160, target: 140 },
    { month: 'Jun', value: 170, target: 150 },
  ];

  const churnData = [
    { month: 'Jan', value: 2.1 },
    { month: 'Feb', value: 1.8 },
    { month: 'Mar', value: 2.0 },
    { month: 'Apr', value: 1.9 },
    { month: 'May', value: 1.7 },
    { month: 'Jun', value: 1.5 },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Goal Overview</h2>
      
      <div className="grid gap-6 md:grid-cols-3">
        {/* Pipeline Overview Card */}
        <Dialog open={openModals['pipeline']} onOpenChange={() => toggleModal('pipeline')}>
          <DialogTrigger asChild>
            <Card className="cursor-pointer hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-medium">Pipeline</CardTitle>
                <InfoIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pipelineData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pipelineData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}`, 'Count']} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Conversion Goals</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Pipeline Performance</DialogTitle>
              <DialogDescription>
                Current pipeline health and conversion metrics compared to targets.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your pipeline is showing strong MQL generation but conversion to SQL and SQO stages needs improvement. Focus on quality of MQLs and strengthening your qualification process.</p>
              <div className="grid grid-cols-3 gap-4">
                {pipelineData.map((item) => (
                  <div key={item.name} className="bg-muted p-3 rounded-lg">
                    <div className="text-sm text-muted-foreground">{item.name}</div>
                    <div className="text-xl font-bold">{item.value}</div>
                    <div className="text-xs text-muted-foreground">Target: {item.target}</div>
                    <Progress 
                      value={(item.value / item.target) * 100} 
                      className="h-1 mt-2" 
                    />
                  </div>
                ))}
              </div>
              <Button className="w-full" variant="outline">View Pipeline Details</Button>
            </div>
          </DialogContent>
        </Dialog>
        
        {/* Bookings Overview Card */}
        <Dialog open={openModals['bookings']} onOpenChange={() => toggleModal('bookings')}>
          <DialogTrigger asChild>
            <Card className="cursor-pointer hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-medium">Bookings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bookingsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8" name="Actual" />
                      <Bar dataKey="target" fill="#82ca9d" name="Target" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-green-500">13.3% above target</span>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Bookings Performance</DialogTitle>
              <DialogDescription>
                Monthly booking trends compared to targets.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your bookings performance is exceeding targets consistently in the last quarter. The sales team has maintained strong momentum, with particularly good results in enterprise deals.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">YTD Bookings</div>
                  <div className="text-xl font-bold">$835,000</div>
                  <div className="text-xs text-muted-foreground">Target: $750,000</div>
                  <Progress value={111} className="h-1 mt-2" />
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Avg. Deal Size</div>
                  <div className="text-xl font-bold">$24,500</div>
                  <div className="text-xs text-muted-foreground">Target: $20,000</div>
                  <Progress value={122} className="h-1 mt-2" />
                </div>
              </div>
              <Button className="w-full" variant="outline">View Booking Details</Button>
            </div>
          </DialogContent>
        </Dialog>
        
        {/* Churn Overview Card */}
        <Dialog open={openModals['churn']} onOpenChange={() => toggleModal('churn')}>
          <DialogTrigger asChild>
            <Card className="cursor-pointer hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-medium">Churn</CardTitle>
                <TrendingDown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={churnData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`${value}%`, 'Churn Rate']} />
                      <Line type="monotone" dataKey="value" stroke="#ff7300" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 flex items-center">
                  <TrendingDown className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-green-500">0.2% reduction month-over-month</span>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Churn Analysis</DialogTitle>
              <DialogDescription>
                Monthly churn trends and customer retention metrics.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <p>Your churn rate shows a positive downward trend over the past six months. Customer success initiatives and product improvements have contributed to better retention.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Current Churn</div>
                  <div className="text-xl font-bold">1.5%</div>
                  <div className="text-xs text-muted-foreground">Target: &lt;2.0%</div>
                  <Progress value={125} className="h-1 mt-2" />
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="text-sm text-muted-foreground">Net Retention</div>
                  <div className="text-xl font-bold">108%</div>
                  <div className="text-xs text-muted-foreground">Target: &gt;105%</div>
                  <Progress value={103} className="h-1 mt-2" />
                </div>
              </div>
              <Button className="w-full" variant="outline">View Churn Details</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
