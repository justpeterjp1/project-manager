export default function TeamActivity() {
  const updates = [
    { user: "Jane", action: "completed a task", time: "2h ago" },
    { user: "Peter", action: "created a new project", time: "5h ago" },
    { user: "Lara", action: "commented on a task", time: "1d ago" },
  ];

  return (
    <div
      className="
        bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]
        rounded-lg p-4
        border border-[var(--border-light)] dark:border-[var(--border-dark)]
        shadow-sm w-full
      "
    >
      <h2 className="font-semibold text-lg mb-3 text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]">
        Team Activity
      </h2>
      <ul className="space-y-3">
        {updates.map((update, i) => (
          <li key={i} className="flex flex-col">
            <span className="text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]">
              <strong>{update.user}</strong> {update.action}
            </span>
            <span className="text-xs text-[var(--text-secondary-light)] dark:text-[var(--text-secondary-dark)]">
              {update.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
