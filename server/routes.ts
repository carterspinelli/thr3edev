import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import * as nodemailer from "nodemailer";

// Configuración del transporte para enviar correos
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // O cualquier otro proveedor SMTP
  port: 587,
  secure: false, // true para 465, false para otros puertos
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
  app.use('/images', express.static('public/images'));
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Intentar enviar email (no bloqueamos la respuesta en caso de error)
      try {
        const mailOptions = {
          from: '"thr3e.dev Notificaciones" <notifications@thr3e.dev>',
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
        
        transporter.sendMail(mailOptions).catch(e => 
          console.error("Error enviando email de notificación:", e)
        );
      } catch (emailError) {
        console.error("Error preparando email:", emailError);
        // No fallamos la solicitud principal si el email falla
      }
      
      return res.status(201).json({
        message: "Formulario enviado con éxito",
        submission
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Error de validación", 
          errors: validationError.details 
        });
      }
      
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
