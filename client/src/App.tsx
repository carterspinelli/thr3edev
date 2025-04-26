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
import EmailJSConfig, { EmailJSConfig as EmailJSConfigType } from "@/components/EmailJSConfig";
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
  const [showConfig, setShowConfig] = useState(true);
  const { config, setConfig } = useEmailJSConfig();

  // Inicializar EmailJS cuando tenemos la configuración guardada
  useEffect(() => {
    if (config.configured && config.publicKey) {
      initializeEmailJS(config.publicKey);
      setShowConfig(false);
    }
  }, [config]);

  const handleSaveConfig = (emailjsConfig: EmailJSConfigType) => {
    setConfig({
      serviceId: emailjsConfig.serviceId,
      templateId: emailjsConfig.templateId,
      publicKey: emailjsConfig.publicKey,
    });
    setShowConfig(false);
  };

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
        
        {/* Formulario de configuración de EmailJS */}
        {showConfig && (
          <EmailJSConfig 
            onSave={handleSaveConfig} 
            onCancel={() => setShowConfig(false)} 
          />
        )}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
