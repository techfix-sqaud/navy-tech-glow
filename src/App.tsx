import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import SmartHome from "./pages/SmartHome";
import Networking from "./pages/Networking";
import WebMobileDev from "./pages/WebMobileDev";
import Cybersecurity from "./pages/Cybersecurity";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import GetStarted from "./pages/GetStarted";
import Consultation from "./pages/Consultation";
import StartProject from "./pages/StartProject";
import NotFound from "./pages/NotFound";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/smart-home" element={<SmartHome />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/web-mobile-dev" element={<WebMobileDev />} />
            <Route path="/cybersecurity" element={<Cybersecurity />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/GetStarted" element={<GetStarted />} />
            <Route path="/GetConsultation" element={<Consultation />} />
            <Route path="/StartProject" element={<StartProject />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
