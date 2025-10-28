import { useEffect, useState } from "react";
import { X } from "lucide-react";

const SearchModal = ({ searchQuery, onClose, setSelectedProject, }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!searchQuery.trim()) return;

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
      .catch((err) => console.error("Error fetching:", err));
  }, [searchQuery]);

  const handleSelect = (project) => {
    setSelectedProject(project);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24 z-50"
      onClick={onClose}
    >
      <div
        className="bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] 
                   w-[90%] max-w-2xl rounded-2xl p-5 shadow-xl border 
                   border-[var(--border-light)] dark:border-[var(--border-dark)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            Search Results for “{searchQuery}”
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] transition"
          >
            <X size={18} />
          </button>
        </div>

        {results.length > 0 ? (
          <ul className="space-y-2 max-h-[400px] overflow-y-auto">
            {results.map((task) => (
              <li key={task._id}>
                <button
                  onClick={() => handleSelect(task.project)}
                  className="w-full text-left p-3 bg-[var(--secondary)] rounded-lg 
                             hover:bg-[var(--primary)] hover:text-white transition flex flex-col"
                >
                  <span className="font-medium">{task.title}</span>
                  <span className="text-xs opacity-75">
                    from project: {task.projectName}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 italic">
            No matching tasks found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
