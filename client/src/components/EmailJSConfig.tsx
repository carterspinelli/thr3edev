import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { initializeEmailJS } from "@/lib/emailjs";

interface EmailJSConfigProps {
  onSave: (config: EmailJSConfig) => void;
  onCancel: () => void;
}

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export function EmailJSConfig({ onSave, onCancel }: EmailJSConfigProps) {
  const [config, setConfig] = useState<EmailJSConfig>({
    serviceId: '',
    templateId: '',
    publicKey: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Validar que todos los campos estén completos
    if (!config.serviceId || !config.templateId || !config.publicKey) {
      toast({
        title: "Configuración incompleta",
        description: "Por favor completa todos los campos de EmailJS.",
        variant: "destructive"
      });
      return;
    }

    // Inicializar EmailJS con la clave pública
    initializeEmailJS(config.publicKey);

    // Guardar la configuración
    onSave(config);

    toast({
      title: "Configuración guardada",
      description: "La configuración de EmailJS ha sido guardada correctamente."
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Configuración de EmailJS</CardTitle>
          <CardDescription>
            Ingresa la información de tu cuenta de EmailJS para habilitar el envío de correos desde el formulario de contacto.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="serviceId">ID del Servicio (Service ID)</Label>
            <Input
              id="serviceId"
              name="serviceId"
              placeholder="ej. service_abc123"
              value={config.serviceId}
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500">
              Encontrado en la sección "Email Services" de tu cuenta de EmailJS.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="templateId">ID de la Plantilla (Template ID)</Label>
            <Input
              id="templateId"
              name="templateId"
              placeholder="ej. template_xyz789"
              value={config.templateId}
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500">
              Encontrado en la sección "Email Templates" de tu cuenta de EmailJS.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="publicKey">Clave Pública (Public Key)</Label>
            <Input
              id="publicKey"
              name="publicKey"
              placeholder="ej. ABC123XYZ_your_public_key"
              value={config.publicKey}
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500">
              Encontrado en la sección "Account" - "API Keys" de tu cuenta de EmailJS.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>
            Guardar Configuración
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default EmailJSConfig;