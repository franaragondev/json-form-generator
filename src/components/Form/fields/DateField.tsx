import React from "react";
import type { Field } from "@/utils/schema";

type Props = {
  field: Extract<Field, { type: "date" }>;
  value: string;
  onChange: (value: string) => void;
};

export function DateField({ field, value, onChange }: Props) {
  return (
    <div>
      <label
        htmlFor={field.name}
        className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200"
      >
        {field.label}
      </label>
      <input
        id={field.name}
        type="date"
        name={field.name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded bg-gray-50 dark:bg-zinc-800 dark:text-white"
      />
    </div>
  );
}
