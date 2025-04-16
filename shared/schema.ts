import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submission
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  nombre: text("nombre").notNull(),
  empresa: text("empresa"),
  email: text("email").notNull(),
  telefono: text("telefono"),
  tipoProyecto: text("tipo_proyecto"),
  mensaje: text("mensaje").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export const contactFormSchema = insertContactSchema.extend({
  email: z.string().email({ message: "Email inválido" }),
  nombre: z.string().min(2, { message: "Nombre es requerido" }),
  mensaje: z.string().min(5, { message: "Mensaje es requerido" }),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactSubmissions.$inferSelect;
