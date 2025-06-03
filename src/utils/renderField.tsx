import React from "react";
import type { FormSchema } from "./schema";

type Field = FormSchema["fields"][number];

export function renderField(field: Field, key: number) {
  switch (field.type) {
    case "string":
    case "number":
      return (
        <div key={key}>
          <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
            {field.label}
          </label>
          <input
            type={field.type === "number" ? "number" : "text"}
            name={field.name}
            placeholder={field.placeholder}
            className="w-full p-2 border rounded bg-gray-50 dark:bg-zinc-800 dark:text-white"
          />
        </div>
      );

    case "multi-line":
      return (
        <div key={key}>
          <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
            {field.label}
          </label>
          <textarea
            name={field.name}
            placeholder={field.placeholder}
            className="w-full p-2 border rounded bg-gray-50 dark:bg-zinc-800 dark:text-white"
          />
        </div>
      );

    case "boolean":
      return (
        <div key={key} className="flex items-center space-x-2">
          <input type="checkbox" name={field.name} className="rounded" />
          <label className="text-sm text-gray-800 dark:text-gray-200">
            {field.label}
          </label>
        </div>
      );

    case "enum":
      return (
        <div key={key}>
          <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
            {field.label}
          </label>
          {field.options.map((opt, i) => (
            <div key={i} className="flex items-center space-x-2">
              <input
                type="radio"
                id={`${field.name}-${opt}`}
                name={field.name}
                value={opt}
                className="rounded"
              />
              <label
                htmlFor={`${field.name}-${opt}`}
                className="text-sm text-gray-800 dark:text-gray-200"
              >
                {opt}
              </label>
            </div>
          ))}
        </div>
      );

    case "date":
      return (
        <div key={key}>
          <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
            {field.label}
          </label>
          <input
            type="date"
            name={field.name}
            className="w-full p-2 border rounded bg-gray-50 dark:bg-zinc-800 dark:text-white"
          />
        </div>
      );

    default:
      return (
        <p key={key} className="text-red-500">
          Unsupported field type: {(field as Field).type}
        </p>
      );
  }
}
