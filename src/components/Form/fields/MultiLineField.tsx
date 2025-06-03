import React from "react";
import type { Field } from "@/utils/schema";

type Props = {
  field: Extract<Field, { type: "multi-line" }>;
  value: string;
  onChange: (value: string) => void;
};

export function MultiLineField({ field, value, onChange }: Props) {
  return (
    <div>
      <label
        htmlFor={field.name}
        className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200"
      >
        {field.label}
      </label>
      <textarea
        id={field.name}
        name={field.name}
        placeholder={field.placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded bg-gray-50 dark:bg-zinc-800 dark:text-white"
      />
    </div>
  );
}
