import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "./components/ui/SmoothScroll";
import Index from "./pages/Index";
import Venues from "./pages/Venues";
import VenueDetail from "./pages/VenueDetail";
import MenuPage from "./pages/MenuPage";
import Packages from "./pages/Packages";
import Decorations from "./pages/Decorations";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/ui/CustomCursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CustomCursor />
      <SmoothScroll>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/venues/:venueId" element={<VenueDetail />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/decorations" element={<Decorations />} />
            <Route path="/book" element={<Book />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SmoothScroll>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
