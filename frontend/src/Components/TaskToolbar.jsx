import { ChevronDown } from "lucide-react";
import ButtonOutline from "../Utilities/ButtonOutline";

export default function TaskToolbar({activeSection}) {
  return (
    <div
      className="
        flex flex-wrap items-center justify-between
        bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]
        rounded-sm p-3
        border border-[var(--border-light)] dark:border-[var(--border-dark)]
        gap-2
      "
    >
      {/* Left — title and greeting */}
      <div className="flex flex-col min-w-[120px] sm:min-w-[160px]">
        <h1 className="font-semibold text-base sm:text-lg text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]">
          {activeSection}
        </h1>
        <p className="text-xs sm:text-sm text-[var(--text-secondary-light)] dark:text-[var(--text-secondary-dark)]">
          Hi, welcome back
        </p>
      </div>

      {/* Right — buttons */}
      <div
        className="
          flex items-center justify-end gap-1 sm:gap-3
          flex-wrap sm:flex-nowrap
        "
      >
        <button
          className="
            border border-[var(--primary)] bg-[var(--primary)] text-white
            rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm
            whitespace-nowrap hover:opacity-90 transition
          "
        >
          Add New Task
        </button>
        <ButtonOutline label="Sort by" icon={ChevronDown} />
        <ButtonOutline label="My Project" icon={ChevronDown} />
      </div>
    </div>
  );
}
