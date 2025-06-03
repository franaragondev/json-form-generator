import { z } from "zod";

// Define a discriminated union for different field types based on the "type" property
export const fieldSchema = z.discriminatedUnion("type", [
  // Text field
  z.object({
    type: z.literal("string"),
    label: z.string(),
    name: z.string(), // (used as key)
    placeholder: z.string().optional(), // Optional placeholder
  }),
  // Numeric field
  z.object({
    type: z.literal("number"),
    label: z.string(),
    name: z.string(),
    placeholder: z.string().optional(),
  }),
  // Boolean field (checkbox)
  z.object({
    type: z.literal("boolean"),
    label: z.string(),
    name: z.string(),
  }),
  // Multi-line text field (textarea)
  z.object({
    type: z.literal("multi-line"),
    label: z.string(),
    name: z.string(),
    placeholder: z.string().optional(),
  }),
  // Date picker
  z.object({
    type: z.literal("date"),
    label: z.string(),
    name: z.string(),
  }),
  // Enum (radio buttons)
  z.object({
    type: z.literal("enum"),
    label: z.string(),
    name: z.string(),
    options: z.array(z.string()), // Available options
  }),
]);

// Main schema for the form, including title, buttons, and fields
export const formSchema = z.object({
  title: z.string(),
  buttons: z.array(
    z.object({
      text: z.string(),
      action: z.enum(["submit", "reset", "cancel"]).optional(), // Añadido action opcional
    })
  ),
  fields: z.array(fieldSchema), // Array de campos como definido arriba
});

// TypeScript helper to infer the validated form structure
export type Field = z.infer<typeof fieldSchema>;

export type FormSchema = z.infer<typeof formSchema>;
