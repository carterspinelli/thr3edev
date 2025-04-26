import React from 'react';
import { Button } from "@/components/ui/button";
import useEmailJSConfig from "@/hooks/use-emailjs-config";
import EmailJSConfig from "@/components/EmailJSConfig";

export function EmailJSConfigPanel() {
  const [showConfig, setShowConfig] = React.useState(false);
  const { config, setConfig, resetConfig } = useEmailJSConfig();

  const handleSaveConfig = (newConfig: { serviceId: string; templateId: string; publicKey: string }) => {
    setConfig({
      serviceId: newConfig.serviceId,
      templateId: newConfig.templateId,
      publicKey: newConfig.publicKey
    });
    setShowConfig(false);
  };

  return (
    <div className="fixed right-4 bottom-4 z-40">
      <Button
        variant="outline"
        className="bg-white dark:bg-zinc-800 shadow-md"
        onClick={() => setShowConfig(true)}
      >
        {config.configured ? "⚙️ Editar EmailJS" : "⚙️ Configurar EmailJS"}
      </Button>

      {showConfig && (
        <EmailJSConfig
          onSave={handleSaveConfig}
          onCancel={() => setShowConfig(false)}
        />
      )}
    </div>
  );
}

export default EmailJSConfigPanel;