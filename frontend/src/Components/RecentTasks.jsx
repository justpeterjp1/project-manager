
export default function RecentTasks() {
  // Mock data (replace with MongoDB fetch later)
  const recentTasks = [
    { title: "Design login page", project: "Website Redesign", status: "Completed", due: "Oct 10" },
    { title: "Connect MongoDB backend", project: "Inventory App", status: "In Progress", due: "Oct 18" },
    { title: "Fix dark mode bug", project: "Task Manager", status: "Pending", due: "Oct 22" },
    { title: "Add analytics dashboard", project: "Task Manager", status: "In Progress", due: "Oct 25" },
  ];

  // Status color helper
  const statusColors = {
    Completed: "text-green-500 bg-green-100 dark:bg-green-900/30",
    "In Progress": "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30",
    Pending: "text-red-500 bg-red-100 dark:bg-red-900/30",
  };

  return (
    <div
      className="
        bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]
        rounded-lg p-4 
         border-[var(--border-light)] dark:border-[var(--border-dark)]
        shadow-sm
      "
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]">
          Recent Tasks
        </h2>
        <button className="text-sm text-[var(--primary)] hover:underline">View all</button>
      </div>

      <ul className="divide-y divide-[var(--border-light)] dark:divide-[var(--border-dark)]">
        {recentTasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center py-2">
            <div className="flex flex-col">
              <span className="font-medium text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]">
                {task.title}
              </span>
              <span className="text-sm text-[var(--text-secondary-light)] dark:text-[var(--text-secondary-dark)]">
                {task.project}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">{task.due}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[task.status]}`}
              >
                {task.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
