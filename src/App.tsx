import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Events from "./pages/Events";
import EventApplications from "./pages/EventApplications";
import Promoters from "./pages/Promoters";
import PromoterDetail from "./pages/PromoterDetail";
import Check from "./pages/Check";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import MyEvents from "./pages/MyEvents";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* basename совпадает с именем репозитория */}
        <BrowserRouter basename="/olimpbet-event-buddy">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Events />} />
              <Route path="/event/:eventId" element={<EventApplications />} />
              <Route path="/promoters" element={<Promoters />} />
              <Route path="/promoters/:promoterId" element={<PromoterDetail />} />
              <Route path="/check" element={<Check />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/my-events" element={<MyEvents />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
