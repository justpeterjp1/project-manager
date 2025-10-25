import { AlarmClock } from "lucide-react";
import CalendarWidget from "../Utilities/CalendarWidget";

export default function CalendarSection() {
  return (
    <div
      className="
        flex flex-col lg:flex-row
        gap-4 p-4
      "
    >
      {/* Calendar Card */}
      <div
        className="
          flex-1
          p-4 rounded-xl
          bg-[var(--surface)] 

          shadow-sm  border-[var(--border)] 
          flex flex-col
        "
      >
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]">
          🗓️ Project Calendar
        </h2>
        <div className="flex-1 min-h-[350px]">
          <CalendarWidget />
        </div>
      </div>

      {/* Deadlines Card */}
      <div
        className="
         bg-[var(--surface)] 
          flex-1
          p-4 rounded-xl
          bg-[var(--card-bg)] 
          shadow-sm border-[var(--border-light)] 
          flex flex-col
        "
      >
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]">
          <AlarmClock className="w-5 h-5 text-[var(--primary)]" />
          Upcoming Deadlines
        </h2>
        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <li><strong>Oct 20:</strong> Finalize Mobile App UI</li>
          <li><strong>Oct 25:</strong> Backend API Integration</li>
          <li><strong>Oct 28:</strong> Website Redesign Review</li>
        </ul>
        <button className="mt-4 text-[var(--primary)] text-xs hover:underline self-end">
          View all deadlines
        </button>
      </div>
    </div>
  );
}
