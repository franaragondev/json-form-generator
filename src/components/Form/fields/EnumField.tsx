import React from "react";
import type { Field } from "@/utils/schema";

type Props = {
  field: Extract<Field, { type: "enum" }>;
  value: string;
  onChange: (value: string) => void;
};

export function EnumField({ field, value, onChange }: Props) {
  return (
    <div>
      <label
        htmlFor={field.name}
        className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200"
      >
        {field.label}
      </label>
      <div className="border p-2 rounded bg-gray-50 dark:bg-zinc-800">
        <div className="flex flex-col gap-1">
          {field.options.map((option) => (
            <label
              key={option}
              className="inline-flex items-center space-x-2 text-gray-800 dark:text-gray-200"
            >
              <input
                type="radio"
                name={field.name}
                value={option}
                checked={value === option}
                onChange={() => onChange(option)}
                className="form-radio text-indigo-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
