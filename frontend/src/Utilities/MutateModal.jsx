// MutateModal.jsx
import { ArrowLeft } from "lucide-react";

const MutateModal = ({
  showMutateModal,
  selectedTask,
  setShowMutateModal,
  setSelectedTask,
  confirmDelete,
  setConfirmDelete,
  handleUpdateTask,
  handleDeleteTask,
}) => {
  if (!showMutateModal || !selectedTask) return null; // safety guard

  return (
    <div
      className="fixed inset-0 bg-[var(--background)] bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setShowMutateModal(false)}
    >
      <div
        className="bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <section className="mt-4 p-4 bg-[var(--secondary)] rounded-lg border shadow-md">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setShowMutateModal(false)}
              className="flex items-center gap-1 text-sm text-[var(--primary)] hover:underline"
            >
              <ArrowLeft size={16} /> Back
            </button>
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Edit Task
            </h2>
          </div>

          <div className="flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300">
            <input
              type="text"
              defaultValue={selectedTask.title}
              onChange={(e) =>
                setSelectedTask({ ...selectedTask, title: e.target.value })
              }
              className="p-2 border rounded-md bg-transparent"
            />
            <input
              type="text"
              defaultValue={selectedTask.description}
              onChange={(e) =>
                setSelectedTask({ ...selectedTask, description: e.target.value })
              }
              className="p-2 border rounded-md bg-transparent"
            />
            <select
              defaultValue={selectedTask.status}
              onChange={(e) =>
                setSelectedTask({ ...selectedTask, status: e.target.value })
              }
              className="p-2 border rounded-md bg-transparent"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
            </select>

            <div className="flex flex-col gap-3 mt-2">
              {!confirmDelete ? (
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      handleUpdateTask(selectedTask._id, {
                        title: selectedTask.title,
                        description: selectedTask.description,
                        status: selectedTask.status,
                      })
                    }
                    className="flex-1 py-2 bg-[var(--primary)] text-white rounded-md hover:bg-[var(--primary-dark)] transition"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => setConfirmDelete(true)}
                    className="flex-1 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <div className="text-center text-sm text-gray-300">
                  <p className="mb-2">Are you sure you want to delete this task?</p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => handleDeleteTask(selectedTask._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                    >
                      Yes, Delete
                    </button>
                    <button
                      onClick={() => setConfirmDelete(false)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MutateModal;
