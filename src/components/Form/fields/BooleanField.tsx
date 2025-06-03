import React from "react";
import type { Field } from "@/utils/schema";

type Props = {
  field: Extract<Field, { type: "boolean" }>;
  value: boolean;
  onChange: (value: boolean) => void;
};

export function BooleanField({ field, value, onChange }: Props) {
  return (
    <label
      htmlFor={field.name}
      className="inline-flex items-center space-x-2 text-gray-800 dark:text-gray-200"
    >
      <input
        id={field.name}
        type="checkbox"
        name={field.name}
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="form-checkbox"
      />
      <span>{field.label}</span>
    </label>
  );
}
