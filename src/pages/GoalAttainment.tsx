
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/layout/MainNav";
import { GoalOverview } from "@/components/goals/GoalOverview";
import { PipelineMetrics } from "@/components/goals/PipelineMetrics";
import { BookingsMetrics } from "@/components/goals/BookingsMetrics";
import { ChurnMetrics } from "@/components/goals/ChurnMetrics";

export default function GoalAttainment() {
  const [activeSection, setActiveSection] = useState<string>("overview");

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline">Export</Button>
            <Button>Update Goals</Button>
          </div>
        </header>
        <main className="flex-1 p-6 sm:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Goal Attainment</h1>
                <p className="text-muted-foreground">Track and manage your company's key business metrics and goals.</p>
              </div>
            </div>

            <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
                <TabsTrigger value="bookings">Bookings</TabsTrigger>
                <TabsTrigger value="churn">Churn</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <GoalOverview />
              </TabsContent>
              <TabsContent value="pipeline" className="mt-6">
                <PipelineMetrics />
              </TabsContent>
              <TabsContent value="bookings" className="mt-6">
                <BookingsMetrics />
              </TabsContent>
              <TabsContent value="churn" className="mt-6">
                <ChurnMetrics />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
