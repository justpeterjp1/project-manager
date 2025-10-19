import React from "react";
import { CalendarDays } from "lucide-react";

/**
 * UpcomingDeadlines component
 * - Displays a title with an icon
 * - Renders a simple list of upcoming deadline items
 * - Accepts an optional `items` prop (array) if you want to pass real data later
 */
export default function UpcomingDeadlines({ items = null }) {
  const defaults = [
    { title: "Design System Update", project: "Website Redesign", due: "Oct 20" },
    { title: "API Integration Review", project: "Inventory App", due: "Oct 24" },
    { title: "Testing & QA", project: "Task Manager", due: "Oct 30" },
  ];

  const deadlines = items ?? defaults;

  return (
    <div
      className="
        bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]
        rounded-lg p-4
        border-[var(--border-light)] dark:border-[var(--border-dark)]
        shadow-sm
        w-full md:w-1/2
      "
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="flex items-center text-lg font-semibold text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]">
          <CalendarDays className="w-5 h-5 mr-2 text-[var(--primary)]" />
          Upcoming Deadlines
        </h2>
        <button className="text-sm text-[var(--primary)] hover:underline">View all</button>
      </div>

      <ul className="space-y-3">
        {deadlines.map((d, i) => (
          <li
            key={i}
            className="flex items-center justify-between gap-3 p-2 rounded-md hover:bg-[var(--surface-hover-light)] dark:hover:bg-[var(--surface-hover-dark)] transition"
          >
            <div className="flex flex-col min-w-0">
              <span className="font-medium truncate text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]">
                {d.title}
              </span>
              <span className="text-xs text-[var(--text-secondary-light)] dark:text-[var(--text-secondary-dark)] truncate">
                {d.project}
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-xs font-semibold text-[var(--primary)]">{d.due}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
