
import { useState } from "react";
import { MainNav } from "@/components/layout/MainNav";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, AlertCircle, FileCheck } from "lucide-react";

export default function Controls() {
  const [activeTab, setActiveTab] = useState("marketing");
  
  const controlCategories = {
    marketing: [
      { name: "Content Calendar Approval", status: "complete", date: "2023-05-10" },
      { name: "Campaign ROI Tracking", status: "complete", date: "2023-06-15" },
      { name: "Lead Scoring Model", status: "complete", date: "2023-06-22" },
      { name: "Social Media Guidelines", status: "incomplete", date: "-" },
      { name: "SEO Optimization Checklist", status: "complete", date: "2023-07-03" },
      { name: "Email Marketing Compliance", status: "complete", date: "2023-07-12" },
      { name: "Brand Style Guide", status: "complete", date: "2023-07-18" },
      { name: "Marketing Budget Review", status: "incomplete", date: "-" },
      { name: "Competitive Analysis Protocol", status: "complete", date: "2023-08-05" },
      { name: "Website Analytics Setup", status: "complete", date: "2023-08-14" }
    ],
    sales: [
      { name: "Sales Pipeline Review Process", status: "complete", date: "2023-05-05" },
      { name: "Discount Approval Workflow", status: "complete", date: "2023-05-18" },
      { name: "Opportunity Scoring System", status: "incomplete", date: "-" },
      { name: "Sales Territory Mapping", status: "complete", date: "2023-06-10" },
      { name: "Quote Generation Process", status: "complete", date: "2023-06-27" },
      { name: "Sales Activity Tracking", status: "complete", date: "2023-07-08" },
      { name: "Contract Review Checklist", status: "complete", date: "2023-07-22" },
      { name: "Commission Calculation", status: "complete", date: "2023-08-03" },
      { name: "Deal Desk Operation", status: "incomplete", date: "-" },
      { name: "Sales Training Compliance", status: "complete", date: "2023-08-21" }
    ],
    customerSuccess: [
      { name: "Customer Onboarding Protocol", status: "complete", date: "2023-05-12" },
      { name: "Health Score Calculation", status: "complete", date: "2023-05-22" },
      { name: "QBR Process Template", status: "complete", date: "2023-06-08" },
      { name: "NPS Survey Cadence", status: "complete", date: "2023-06-18" },
      { name: "Escalation Management", status: "complete", date: "2023-07-01" },
      { name: "Customer Feedback Loop", status: "incomplete", date: "-" },
      { name: "Renewal Playbook", status: "complete", date: "2023-07-25" },
      { name: "Expansion Opportunity Identification", status: "complete", date: "2023-08-07" },
      { name: "Success Plan Template", status: "incomplete", date: "-" },
      { name: "Customer Advisory Board", status: "complete", date: "2023-08-28" }
    ],
    partnerships: [
      { name: "Partner Qualification Framework", status: "complete", date: "2023-05-08" },
      { name: "Revenue Share Agreement", status: "complete", date: "2023-05-24" },
      { name: "Partner Portal Setup", status: "complete", date: "2023-06-12" },
      { name: "Co-marketing Guidelines", status: "incomplete", date: "-" },
      { name: "Partner Training Program", status: "complete", date: "2023-06-30" },
      { name: "Deal Registration Process", status: "complete", date: "2023-07-14" },
      { name: "Channel Conflict Resolution", status: "complete", date: "2023-07-28" },
      { name: "Partner Performance Metrics", status: "incomplete", date: "-" },
      { name: "MDF Management Process", status: "complete", date: "2023-08-16" },
      { name: "Partner Tier Classification", status: "complete", date: "2023-08-30" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline">Export Controls</Button>
            <Button>Add New Control</Button>
          </div>
        </header>
        
        <main className="flex-1 p-6 sm:p-8">
          <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                  <FileCheck className="h-8 w-8" />
                  Controls
                </h1>
                <p className="text-muted-foreground">
                  Track and manage GTM controls across your organization
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Check className="h-4 w-4 mr-1" />
                  35 Complete
                </div>
                <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  7 Pending
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Control Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="marketing" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="marketing">Marketing</TabsTrigger>
                    <TabsTrigger value="sales">Sales</TabsTrigger>
                    <TabsTrigger value="customerSuccess">Customer Success</TabsTrigger>
                    <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
                  </TabsList>
                  
                  {Object.keys(controlCategories).map((category) => (
                    <TabsContent key={category} value={category} className="space-y-4">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Control Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Completion Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {controlCategories[category].map((control) => (
                            <TableRow key={control.name}>
                              <TableCell>{control.name}</TableCell>
                              <TableCell>
                                {control.status === "complete" ? (
                                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                    <Check className="mr-1 h-3 w-3" />
                                    Complete
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                                    <AlertCircle className="mr-1 h-3 w-3" />
                                    Pending
                                  </span>
                                )}
                              </TableCell>
                              <TableCell>{control.date}</TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm">View Details</Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
