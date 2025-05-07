import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import * as nodemailer from "nodemailer";

// Configuración dinámica del transporte para enviar correos
function getTransporter() {
  // Para entorno de producción
  if (process.env.NODE_ENV === 'production') {
    console.log("Configurando transporter para producción (iCloud)");
    
    // Configuración para iCloud
    return nodemailer.createTransport({
      host: "smtp.mail.me.com",  // Servidor SMTP de iCloud
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || "notifications@thr3e.dev",
        pass: process.env.EMAIL_PASSWORD || ""
      },
      tls: {
        rejectUnauthorized: false,
        ciphers: "SSLv3"
      }
    });
  } 
  
  // Para entorno de desarrollo o pruebas, usamos un transporter de prueba
  console.log("Configurando transporter para desarrollo");
  return {
    sendMail: (mailOptions: any) => {
      console.log("SIMULACIÓN DE EMAIL EN DESARROLLO");
      console.log("================================");
      console.log("A: " + mailOptions.to);
      console.log("Asunto: " + mailOptions.subject);
      console.log("De: " + mailOptions.from);
      console.log("--------------------------------");
      console.log("Texto del mensaje:");
      console.log(mailOptions.text);
      console.log("================================");
      
      // Simulamos una promesa resuelta exitosamente
      return Promise.resolve({
        messageId: "simulado-" + Date.now(),
        response: "250 Simulación de envío exitoso"
      });
    }
  };
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Ruta para servir archivos estáticos desde la carpeta public
  app.use('/images', express.static('public/images', { 
    setHeaders: (res, path) => {
      if (path.endsWith('.svg')) {
        res.setHeader('Content-Type', 'image/svg+xml');
      }
      // Establecer cabeceras anti-caché específicamente para og-card.png
      if (path.includes('og-card.png')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
      }
    }
  }));
  
  // Ruta especial para og-image con un nombre único cada vez
  app.get('/og-image-:timestamp.png', (req: Request, res: Response) => {
    res.sendFile('og-card.png', { root: 'public/images' });
  });
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
      
      // Obtenemos el transporter adecuado para el entorno
      const transporter = getTransporter();
      
      // Intentamos enviar el email
      let emailSent = false;
      try {
        // Enviamos el email
        await transporter.sendMail(mailOptions);
        emailSent = true;
        console.log(`Email procesado para contacto@thr3e.dev desde ${validatedData.business_name}`);
      } catch (emailError) {
        console.error("Error procesando email:", emailError);
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
