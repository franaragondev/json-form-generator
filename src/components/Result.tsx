"use client";

import { FormSchema } from "@/utils/schema";
import { Form } from "./Form";

type ResultProps = {
  config: FormSchema | null;
};

export function Result({ config }: ResultProps) {
  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        {config?.title}
      </h2>

      {config ? (
        <Form config={config} />
      ) : (
        <p className="text-gray-700 dark:text-gray-300">No valid config yet</p>
      )}
    </section>
  );
}
