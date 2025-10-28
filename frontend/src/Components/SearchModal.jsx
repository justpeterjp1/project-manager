import { useEffect, useState } from "react";
import { X, Folder, ListChecks } from "lucide-react";

const SearchModal = ({ searchQuery, onClose, setSelectedProject }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        const matches = data.flatMap((proj) =>
          proj.tasks
            .filter((task) =>
              task.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((task) => ({
              ...task,
              projectId: proj._id,
              projectName: proj.name,
              project: proj,
            }))
        );
        setResults(matches);
      })
      .catch((err) => console.error("Error fetching:", err))
      .finally(() => setLoading(false));
  }, [searchQuery]);

  const handleSelect = (project) => {
    setSelectedProject(project);
    onClose();
  };

  return (
    <div
      className="w-[90%] max-w-2xl bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]
                 rounded-2xl p-5 shadow-xl border border-[var(--border-light)]
                 dark:border-[var(--border-dark)] transition-all duration-300"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          {loading
            ? "Searching..."
            : results.length
            ? `Search results for “${searchQuery}”`
            : `No results for “${searchQuery}”`}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] transition"
        >
          <X size={18} />
        </button>
      </div>

      {/* Results */}
      {loading ? (
        <p className="text-center text-gray-500 italic py-10 animate-pulse">
          Fetching tasks...
        </p>
      ) : results.length > 0 ? (
        <ul className="space-y-2 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
          {results.map((task) => (
            <li key={task._id}>
              <button
                onClick={() => handleSelect(task.project)}
                className="w-full text-left p-3 bg-[var(--secondary)] 
                           rounded-lg hover:bg-[var(--primary)] 
                           hover:text-white transition flex justify-between items-center"
              >
                <div>
                  <span className="font-medium flex items-center gap-2">
                    <ListChecks className="w-4 h-4" /> {task.title}
                  </span>
                  <span className="text-xs opacity-75 flex items-center gap-1 mt-1">
                    <Folder className="w-3 h-3" /> {task.projectName}
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500 italic text-center py-8">
          No matching tasks found.
        </p>
      )}
    </div>
  );
};

export default SearchModal;
