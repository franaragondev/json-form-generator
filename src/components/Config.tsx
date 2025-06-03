"use client";

type ConfigProps = {
  value: string;
  onChange: (value: string) => void;
  error: string | null;
};

export function Config({ value, onChange, error }: ConfigProps) {
  return (
    <section className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Configuration
      </h2>

      {/* Textarea for JSON input */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your form JSON here..."
        className="w-full h-64 p-2 border rounded bg-gray-50 dark:bg-zinc-800 dark:text-white font-mono text-sm"
      />

      {/* Display validation error or success */}
      {error ? (
        <pre className="mt-4 text-red-600 whitespace-pre-wrap">{error}</pre>
      ) : value.trim() ? (
        <pre className="mt-4 text-green-600 whitespace-pre-wrap">
          ✅ JSON is valid!
        </pre>
      ) : null}
    </section>
  );
}
