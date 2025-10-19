export default function ButtonOutline({ label, icon: Icon, onClick = () => console.log('Default click action') }) {
  return (
    <button
    onClick={onClick}
      className="
        flex items-center justify-center gap-1 sm:gap-2
        border border-[var(--primary)]
        text-[var(--primary)]
        bg-transparent
        hover:bg-[var(--primary)] hover:text-white
        rounded-lg
        px-3 sm:px-4 py-2 text-sm
        transition duration-200
        shrink-0
      "
    >
      <span className="truncate">{label}</span>
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
