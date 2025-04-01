
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GoalAttainment from "./pages/GoalAttainment";
import TeamPage from "./pages/TeamPage";
import Projects from "./pages/Projects";
import Controls from "./pages/Controls";
import Systems from "./pages/Systems";
import AIAgents from "./pages/AIAgents";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/goals" element={<GoalAttainment />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/controls" element={<Controls />} />
          <Route path="/systems" element={<Systems />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/resources" element={<Resources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
