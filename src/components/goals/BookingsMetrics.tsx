
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Legend,
  ResponsiveContainer
} from 'recharts';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

interface BookingsMetricsProps {
  className?: string;
}

export function BookingsMetrics({ className }: BookingsMetricsProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate()),
    to: new Date(),
  })
  const [bookingsData, setBookingsData] = useState([
    { name: 'Q1', value: 400 },
    { name: 'Q2', value: 300 },
    { name: 'Q3', value: 200 },
    { name: 'Q4', value: 278 },
  ]);
  const [pipelineData, setPipelineData] = useState([
    { name: 'Q1', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Q2', uv: 300, pv: 1398, amt: 2210 },
    { name: 'Q3', uv: 200, pv: 9800, amt: 2290 },
    { name: 'Q4', uv: 278, pv: 3908, amt: 2000 },
  ]);
  const [salesCycleData, setSalesCycleData] = useState([
    { name: 'Discovery', value: 400 },
    { name: 'Demo', value: 300 },
    { name: 'Negotiation', value: 200 },
    { name: 'Closed Won', value: 278 },
  ]);
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  useEffect(() => {
    // Mock API call to fetch bookings data
    const fetchBookingsData = async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      setBookingsData([
        { name: 'Q1', value: 450 },
        { name: 'Q2', value: 350 },
        { name: 'Q3', value: 250 },
        { name: 'Q4', value: 300 },
      ]);
    };

    // Mock API call to fetch pipeline data
    const fetchPipelineData = async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      setPipelineData([
        { name: 'Q1', uv: 450, pv: 2500, amt: 2500 },
        { name: 'Q2', uv: 350, pv: 1500, amt: 2300 },
        { name: 'Q3', uv: 250, pv: 10000, amt: 2300 },
        { name: 'Q4', uv: 300, pv: 4000, amt: 2100 },
      ]);
    };

    // Mock API call to fetch sales cycle data
    const fetchSalesCycleData = async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSalesCycleData([
        { name: 'Discovery', value: 450 },
        { name: 'Demo', value: 350 },
        { name: 'Negotiation', value: 250 },
        { name: 'Closed Won', value: 300 },
      ]);
    };

    fetchBookingsData();
    fetchPipelineData();
    fetchSalesCycleData();
  }, []);

  return (
    <div className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}>
      <Card className="bg-white/30 backdrop-blur-sm border border-accent/20">
        <CardContent>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Bookings by Quarter</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="p-3 pointer-events-auto"
                />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-white/30 backdrop-blur-sm border border-accent/20">
        <CardContent>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Pipeline by Quarter</h3>
            <DateRangePicker date={range} onDateChange={setRange} />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={pipelineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#82ca9d" />
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-white/30 backdrop-blur-sm border border-accent/20">
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Sales Cycle Stages</h3>
          
          <ResponsiveContainer width="100%" height={300}>
            <PieChart width={400} height={300}>
              <Pie
                data={salesCycleData}
                cx={200}
                cy={150}
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(Number(percent) * 100).toFixed(0)}%`}
              >
                {salesCycleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
