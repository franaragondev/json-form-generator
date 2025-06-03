"use client";

import React, { useState } from "react";
import type { FormSchema, Field } from "@/utils/schema";
import { StringField } from "./fields/StringField";
import { NumberField } from "./fields/NumberField";
import { BooleanField } from "./fields/BooleanField";
import { MultiLineField } from "./fields/MultiLineField";
import { DateField } from "./fields/DateField";
import { EnumField } from "./fields/EnumField";
import { RenderButtons } from "@/utils/renderButtons";

type FormProps = {
  config: FormSchema;
};

function getInitialValue(field: Field): string | number | boolean | "" {
  switch (field.type) {
    case "boolean":
      return false;
    case "number":
      return "";
    case "string":
    case "multi-line":
    case "date":
    case "enum":
      return "";
    default:
      return "";
  }
}

export function Form({ config }: FormProps) {
  const [formData, setFormData] = useState<Record<string, unknown>>(() =>
    config.fields.reduce((acc, field) => {
      acc[field.name] = getInitialValue(field);
      return acc;
    }, {} as Record<string, unknown>)
  );

  // Función para resetear a valores iniciales
  const resetForm = () => {
    setFormData(
      config.fields.reduce((acc, field) => {
        acc[field.name] = getInitialValue(field);
        return acc;
      }, {} as Record<string, unknown>)
    );
  };

  const handleChange = (name: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form data:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {config.fields.map((field) => {
        switch (field.type) {
          case "string":
            return (
              <StringField
                key={field.name}
                field={field}
                value={formData[field.name] as string}
                onChange={(v) => handleChange(field.name, v)}
              />
            );
          case "number":
            return (
              <NumberField
                key={field.name}
                field={field}
                value={formData[field.name] as number | ""}
                onChange={(v) => handleChange(field.name, v)}
              />
            );
          case "boolean":
            return (
              <BooleanField
                key={field.name}
                field={field}
                value={formData[field.name] as boolean}
                onChange={(v) => handleChange(field.name, v)}
              />
            );
          case "multi-line":
            return (
              <MultiLineField
                key={field.name}
                field={field}
                value={formData[field.name] as string}
                onChange={(v) => handleChange(field.name, v)}
              />
            );
          case "date":
            return (
              <DateField
                key={field.name}
                field={field}
                value={formData[field.name] as string}
                onChange={(v) => handleChange(field.name, v)}
              />
            );
          case "enum":
            return (
              <EnumField
                key={field.name}
                field={field}
                value={formData[field.name] as string}
                onChange={(v) => handleChange(field.name, v)}
              />
            );
          default:
            const fallbackField = field as Field;
            return (
              <p key={fallbackField.name} className="text-red-600">
                Unsupported field type: {fallbackField.type}
              </p>
            );
        }
      })}

      {config.buttons && (
        <RenderButtons buttons={config.buttons} onReset={resetForm} />
      )}
    </form>
  );
}
