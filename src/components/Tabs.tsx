"use client";

import { useState } from "react";

export type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Render the tab headers. The active tab is styled differently. */}
      <div className="flex space-x-2 bg-gray-100 dark:bg-zinc-800 p-1 rounded-xl">
        {tabs.map((tab, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all cursor-pointer
                ${
                  isActive
                    ? "bg-white dark:bg-zinc-900 text-blue-600 shadow"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
                }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Render the currently selected tab's content */}
      <div className="mt-6">{tabs[activeTab].content}</div>
    </div>
  );
}
