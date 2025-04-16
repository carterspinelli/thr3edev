import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
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
