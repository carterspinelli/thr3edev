import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PortfolioPage from "@/pages/PortfolioPage";
import Privacidad from "@/pages/Privacidad";
import { ThemeProvider } from "@/hooks/use-theme";
import EmailJSConfigPanel from "@/components/EmailJSConfigPanel";
import useEmailJSConfig from "@/hooks/use-emailjs-config";
import { initializeEmailJS } from "@/lib/emailjs";

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
  const { config } = useEmailJSConfig();

  // Inicializamos EmailJS con la clave pública cuando la aplicación carga
  useEffect(() => {
    if (config.configured && config.publicKey) {
      initializeEmailJS(config.publicKey);
    }
  }, [config.configured, config.publicKey]);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
        <EmailJSConfigPanel />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
