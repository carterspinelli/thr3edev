import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import * as nodemailer from "nodemailer";

// Configuración del transporte para enviar correos
const transporter = nodemailer.createTransport({
  service: "Gmail", // Usamos el servicio predefinido para Gmail
  auth: {
    user: process.env.EMAIL_USER || "notifications@thr3e.dev", // Fallback para desarrollo
    pass: process.env.EMAIL_PASSWORD || "password", // Fallback para desarrollo
  },
  tls: {
    rejectUnauthorized: false // Para desarrollo en entornos locales
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Ruta para servir archivos estáticos desde la carpeta public
  app.use('/images', express.static('public/images', { 
    setHeaders: (res, path) => {
      if (path.endsWith('.svg')) {
        res.setHeader('Content-Type', 'image/svg+xml');
      }
    }
  }));
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Configuramos el email y lo enviamos inmediatamente
      const mailOptions = {
        from: `"thr3e.dev Notificaciones" <${process.env.EMAIL_USER}>`,
        to: "contacto@thr3e.dev",
        subject: `Nuevo formulario de contacto: ${validatedData.business_name}`,
        text: `
          Nombre de empresa: ${validatedData.business_name}
          Email: ${validatedData.email}
          Referido por: ${validatedData.referral_source}
          
          Mensaje:
          ${validatedData.message}
        `,
        html: `
          <h2>Nuevo formulario de contacto</h2>
          <p><strong>Empresa:</strong> ${validatedData.business_name}</p>
          <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
          <p><strong>Referido por:</strong> ${validatedData.referral_source}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-line;">${validatedData.message}</p>
        `
      };
      
      // En cualquier entorno de producción, intentamos enviar el email
      let emailSent = false;
      try {
        // Esperamos a que el email se envíe correctamente
        if (process.env.NODE_ENV === 'production') {
          await transporter.sendMail(mailOptions);
          emailSent = true;
          console.log(`Email enviado exitosamente a contacto@thr3e.dev desde ${validatedData.business_name}`);
        } else {
          // En desarrollo, solo simulamos el envío para evitar errores de credenciales
          console.log("Modo desarrollo: simulando envío de email con estos datos:", {
            to: mailOptions.to,
            subject: mailOptions.subject,
            businessName: validatedData.business_name,
            email: validatedData.email
          });
          // Consideramos exitoso en desarrollo para mejor experiencia
          emailSent = true;
        }
      } catch (emailError) {
        console.error("Error enviando email:", emailError);
        emailSent = false;
      }
      
      // Siempre respondemos con éxito porque los datos se guardaron correctamente
      return res.status(201).json({
        message: emailSent 
          ? "Formulario enviado con éxito" 
          : "Formulario guardado pero hubo un problema al enviar la notificación por email",
        submission,
        emailSent: emailSent
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Error de validación", 
          errors: validationError.details 
        });
      }
      
      console.error("Error en la API de contacto:", error);
      return res.status(500).json({ 
        message: "Error al procesar la solicitud"
      });
    }
  });

  // Get all contact submissions (could be used for an admin panel)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      return res.status(200).json(submissions);
    } catch (error) {
      return res.status(500).json({ 
        message: "Error al recuperar las solicitudes"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
