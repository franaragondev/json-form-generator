import React from "react";
import type { FormSchema } from "./schema";

type Button = FormSchema["buttons"][number];

export function RenderButtons({
  buttons,
  onReset,
}: {
  buttons: Button[];
  onReset: () => void;
}) {
  return (
    <div className="pt-4 flex space-x-2">
      {buttons.map((btn, i) => {
        const type =
          btn.action === "reset"
            ? "button"
            : btn.action === "submit"
            ? "submit"
            : "button";

        return (
          <button
            key={i}
            type={type}
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition"
            onClick={() => {
              if (btn.action === "reset") {
                onReset();
              } else if (!btn.action) {
                alert(`Button clicked: ${btn.text}`);
              }
            }}
          >
            {btn.text}
          </button>
        );
      })}
    </div>
  );
}
