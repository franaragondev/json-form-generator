import React from "react";
import type { Field } from "@/utils/schema";

type Props = {
  field: Extract<Field, { type: "number" }>;
  value: number | "";
  onChange: (value: number | "") => void;
};

export function NumberField({ field, value, onChange }: Props) {
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
        type="number"
        name={field.name}
        placeholder={field.placeholder}
        value={value}
        onChange={(e) => {
          const val = e.target.value;
          onChange(val === "" ? "" : Number(val));
        }}
        className="w-full p-2 border rounded bg-gray-50 dark:bg-zinc-800 dark:text-white"
      />
    </div>
  );
}
