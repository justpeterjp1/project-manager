
export default function SideButton ({ icon: Icon, label, active, onClick }) {
    return (
    <button
    onClick={onClick}
    className={`flex items-center gap-4 w-full px-4 py-2 my-1 rounded-lg transition
      ${active 
        ? "bg-[var(--primary)] text-white" 
        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}
    `}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
    )
      };
