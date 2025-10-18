import React from "react";
import OverviewCard from "../components/OverviewCard";
import RecentTasks from "../components/RecentTasks";
import UpcomingDeadlines from "../components/UpcomingDeadlines";

function QuickNotesWidget() {
  return (
    <div className="bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] rounded-lg p-4 border border-[var(--border-light)] dark:border-[var(--border-dark)] shadow-sm">
      <h3 className="text-sm font-semibold text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)] mb-2">
        Quick Notes
      </h3>
      <p className="text-xs text-[var(--text-secondary-light)] dark:text-[var(--text-secondary-dark)]">
        Reminders and short notes for your projects.
      </p>
    </div>
  );
}

function ProgressWidget() {
  return (
    <div className="bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] rounded-lg p-4 border border-[var(--border-light)] dark:border-[var(--border-dark)] shadow-sm">
      <h3 className="text-sm font-semibold text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)] mb-3">
        Progress Summary
      </h3>
      <div className="text-xs text-[var(--text-secondary-light)] dark:text-[var(--text-secondary-dark)] mb-2">
        Tasks completed this week
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-[var(--primary)] h-2 rounded-full"
          style={{ width: "68%" }}
        ></div>
      </div>
      <div className="mt-2 text-sm font-medium text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]">
        68%
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Overview cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <OverviewCard increaseValue="5" comment="From last month" value="12" title="Total Projects" />
        <OverviewCard increaseValue="8" comment="From last month" value="22" title="Tasks Created" />
        <OverviewCard increaseValue="4" comment="From last month" value="10" title="Running Tasks" />
        <OverviewCard increaseValue="18%" comment="Success" value="2" title="Completed Projects" />
      </div>

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left column — Recent tasks */}
        <div className="lg:col-span-8">
          <RecentTasks />
        </div>

        {/* Right column — Deadlines + 2 widgets */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <UpcomingDeadlines />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <QuickNotesWidget />
            <ProgressWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
