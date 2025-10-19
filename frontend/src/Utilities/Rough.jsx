// Dynamic Task tool bar rendering
export default function TaskToolbar({ activeSection }) {
  const renderButtons = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <>
           
            <ButtonOutline label="My Project" icon={ChevronDown} />
          </>
        );
      case "Tasks":
        return (
          <>
            <button className="border border-[var(--primary)] bg-[var(--primary)] text-white rounded-lg px-4 py-2">
              Add New Task
            </button>
            <ButtonOutline label="Sort by" icon={ChevronDown} />
            <ButtonOutline label="Filter" icon={ChevronDown} />
          </>
        );
      case "Settings":
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-between items-center bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] p-3 border-b border-[var(--border-light)] dark:border-[var(--border-dark)]">
      <div>
        <h1 className="font-semibold text-lg">{activeSection}</h1>
        <p className="text-sm text-gray-500">Hi, welcome back</p>
      </div>
      <div className="flex gap-2">{renderButtons()}</div>
    </div>
  );
}
