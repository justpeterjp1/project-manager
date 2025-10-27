// AddTaskModal.jsx
import { X } from "lucide-react";

const AddTaskModal = ({
  showAddModal,
  setShowAddModal,
  formData,
  handleChange,
  handleAddTask,
}) => {
  if (!showAddModal) return null;

  return (
    <div
      className="fixed inset-0 bg-[var(--background)] bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setShowAddModal(false)} // close when backdrop clicked
    >
      <div
        className="bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
      >
        <section className="mt-4 p-4 bg-[var(--secondary)] rounded-lg border shadow-md">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setShowAddModal(false)}
              className="flex items-center gap-1 text-sm text-[var(--primary)] hover:underline"
            >
              <X size={16} />
            </button>
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Add New Task
            </h2>
          </div>

          <form
            onSubmit={handleAddTask}
            className="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-300"
          >
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Task name"
              className="p-2 border rounded-md bg-transparent"
              required
            />
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Task description"
              className="p-2 border rounded-md bg-transparent"
              required
            />
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="p-2 border rounded-md bg-transparent"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>         
            </select>

            <button
              type="submit"
              className="mt-2 bg-[var(--primary)] text-white py-2 rounded-md hover:bg-[var(--accent)] transition"
            >
              Confirm
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddTaskModal;
