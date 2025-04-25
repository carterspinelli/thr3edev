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
  business_name: text("business_name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  referral_source: text("referral_source").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export const contactFormSchema = insertContactSchema.extend({
  email: z.string().email({ message: "Email inválido" }),
  business_name: z.string().min(1, { message: "Nombre de empresa es requerido" }),
  message: z.string().min(10, { message: "La descripción del proyecto es requerida" }),
  referral_source: z.string().min(1, { message: "Indica cómo nos conociste" }),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactSubmissions.$inferSelect;
