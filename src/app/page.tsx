"use client";

import { Tabs, Tab } from "@/components/Tabs";
import { Config } from "@/components/Config";
import { Result } from "@/components/Result";
import { useState } from "react";
import { formSchema, FormSchema } from "@/utils/schema";
import { z } from "zod";

export default function HomePage() {
  const [rawJson, setRawJson] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [parsedConfig, setParsedConfig] = useState<FormSchema | null>(null);

  // Handle JSON input changes from Config
  const handleChange = (value: string) => {
    setRawJson(value);

    try {
      const json = JSON.parse(value);
      const validated = formSchema.parse(json);
      setParsedConfig(validated);
      setError(null);
    } catch (err) {
      setParsedConfig(null);

      if (err instanceof SyntaxError) {
        setError("Invalid JSON syntax.");
      } else if (err instanceof z.ZodError) {
        setError(
          err.errors.map((e) => `${e.path.join(".")}: ${e.message}`).join("\n")
        );
      } else {
        setError("Unknown error.");
      }
    }
  };

  const tabs: Tab[] = [
    {
      label: "Config",
      content: <Config value={rawJson} onChange={handleChange} error={error} />,
    },
    {
      label: "Result",
      content: <Result config={parsedConfig} />,
    },
  ];

  return (
    <main className="max-w-4xl mx-auto p-4">
      <Tabs tabs={tabs} />
    </main>
  );
}
