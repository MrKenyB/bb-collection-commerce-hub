
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Boutique from "./pages/Boutique";
import AdminDashboard from "./pages/AdminDashboard";
import MonCompte from "./pages/MonCompte";
import APropos from "./pages/APropos";
import Panier from "./pages/Panier";
import VetementsHommes from "./pages/VetementsHommes";
import VetementsFemmes from "./pages/VetementsFemmes";
import ChaussuresHommes from "./pages/ChaussuresHommes";
import SacsFemmes from "./pages/SacsFemmes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/mon-compte" element={<MonCompte />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/vetements-hommes" element={<VetementsHommes />} />
          <Route path="/vetements-femmes" element={<VetementsFemmes />} />
          <Route path="/chaussures-hommes" element={<ChaussuresHommes />} />
          <Route path="/sacs-femmes" element={<SacsFemmes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
