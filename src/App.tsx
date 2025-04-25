import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TallyImplementationPage from "./pages/services/TallyImplementationPage";
import TallyIntegrationPage from "./pages/services/TallyIntegrationPage";
import TallyCustomizationPage from "./pages/services/TallyCustomizationPage";
import TallyWebPage from "./pages/services/TallyWebPage";
import WebApplicationsPage from "./pages/services/WebApplicationsPage";
import MobileAppPage from "./pages/MobileAppPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import QuotePage from "./pages/QuotePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/tally-implementation" element={<TallyImplementationPage />} />
          <Route path="/services/tally-integration" element={<TallyIntegrationPage />} />
          <Route path="/services/tally-customization" element={<TallyCustomizationPage />} />
          <Route path="/services/tally-web" element={<TallyWebPage />} />
          <Route path="/services/web-applications" element={<WebApplicationsPage />} />
          <Route path="/services/mobile-application" element={<MobileAppPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
