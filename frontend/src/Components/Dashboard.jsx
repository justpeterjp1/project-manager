import OverviewCard from "../Utilities/OverviewCard";
import RecentTasks from "./RecentTasks";
import TaskToolbar from "./TaskToolbar";
import UpcomingDeadlines from "./UpcomingDeadlines";

function QuickNotesWidget() {
  return (
    <div className=" bg-[var(--secondary)]
         border-[var(--border)] text-[var(--text-primary)]  rounded-lg p-4 border-[var(--border-light)] dark:border-[var(--border-dark)] shadow-sm md:w-1/2">
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
    <div className=" bg-[var(--secondary)]
         border-[var(--border)] text-[var(--text-primary)]  rounded-lg p-2 border-[var(--border-light)] dark:border-[var(--border-dark)] shadow-sm md:w-1/2">
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

export default function Dashboard({ activeSection }) {
    // const Cards = 
  return (
    <div className="w-full h-full flex-1 p-1  bg-[var(--background)] ">

      <div className=" my-4 md:my-0 md:mt-0 flex flex-wrap md:flex-nowrap justify-around md:justify-between gap-4 md:gap-2 ">
        <OverviewCard
        increaseValue="5"
        comment="Increased from last month"
        value="12"  
        title="Total Projects"/>
        <OverviewCard
        increaseValue="8"
        comment="Increased from last month"
        value="22"  
        title="Tasks Created"
        />
        <OverviewCard
        increaseValue="4"
        comment="Increased from last month"
        value="10"  
        title="Running Tasks"/>
        <OverviewCard 
        increaseValue="18%"
        comment="Success"
        value="2"  
        title="Completed projects "/>
      </div>
      {/* Most recent task section connected to the sort button */}
     <div className="flex flex-col md:flex-row gap-2 ">
            <div className="">
              <RecentTasks />
            </div>
    
            {/* Right column — Deadlines + 2 widgets */}
            <div className="flex flex-col md:flex-row gap-2 ">
              <UpcomingDeadlines />
              <div className="flex flex-1 flex-col md:flex-row gap-2 w-full">
                <QuickNotesWidget />
                <ProgressWidget />
              </div>
            </div>
          </div>
    </div>
  );
}
