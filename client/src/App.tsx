import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PortfolioPage from "@/pages/PortfolioPage";
import Privacidad from "@/pages/Privacidad";
import { ThemeProvider } from "@/hooks/use-theme";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/portafolio" component={PortfolioPage} />
      <Route path="/privacidad" component={Privacidad} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // No necesitamos inicializar EmailJS aquí, ya se inicializa directamente en el módulo

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
        {/* Panel de configuración removido - Configuración ya establecida por el administrador */}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
