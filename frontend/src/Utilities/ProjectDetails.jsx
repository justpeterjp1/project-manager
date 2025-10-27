import { useState } from "react";
import { ArrowLeft, ListChecks, Pencil, Plus, Check, X } from "lucide-react";
import { createTask, deleteTask, updateTask } from "../api/api.js";
import * as Icons from "lucide-react";
import MutateModal from "./MutateModal.jsx";
import AddTaskModal from "./AddTaskModal.jsx";


const ProjectDetails = ({ onBack, project }) => {
  if (!project) return null;

  const { name, description, progress, icon } = project;

  // ====== Dyanamic Icon Component ======
  const IconComponent = Icons[project.icon] || Icons.FolderIcon;


  // ===== States =====
  const [taskList, setTaskList] = useState(project.tasks || []);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showMutateModal, setShowMutateModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({ title: "", description: "", status: "pending" });
  const [confirmDelete, setConfirmDelete] = useState(false);

  


  // ===== Handlers =====
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Add Task
  async function handleAddTask(e) {
    e.preventDefault();
    try {
      const newTask = await createTask(project._id, formData);
      const updatedTasks = [...taskList, newTask.data];
      setTaskList(updatedTasks);
      setSuccessMessage(`✅ Task "${formData.title}" added successfully!`);

      setTimeout(() => {
        setSuccessMessage("");
        setShowAddModal(false);
        setFormData({ title: "", description: "", status: "pending" });
      }, 2000);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }

  // ✅ Update Task
  async function handleUpdateTask(taskId, updatedData) {
    try {
      const updatedTask = await updateTask(taskId, updatedData);
      const updatedTasks = taskList.map((task) =>
        task._id === taskId ? updatedTask.data : task
      );
      setTaskList(updatedTasks);
      setSuccessMessage("✅ Task updated successfully!");
      setTimeout(() => {
        setSuccessMessage("");
        setShowMutateModal(false);
      }, 2000);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }

  // ✅ Delete Task
  async function handleDeleteTask(taskId) {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;
    try {
      await deleteTask(taskId);
      const updatedTasks = taskList.filter((task) => task._id !== taskId);
      setTaskList(updatedTasks);
      setSuccessMessage("🗑️ Task deleted successfully!");
      setTimeout(() => {
        setSuccessMessage("");
        setShowMutateModal(false);
      }, 2000);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  }

  // ===== Modal Triggers =====
  const openAddModal = () => setShowAddModal(true);
  const openMutateModal = (task) => {
    setSelectedTask(task);
    setShowMutateModal(true);
  };

  return (
    <div
      className="flex flex-col w-full max-w-3xl mx-auto p-6 
      bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]
      rounded-2xl shadow-md border-[var(--border-light)] 
      dark:border-[var(--border-dark)] transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-[var(--primary)] hover:underline"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex items-center gap-2">
          <IconComponent className="text-[var(--primary)]" />
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {name}
          </h1>
        </div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="text-center mb-3 text-green-600 dark:text-green-400 text-sm font-medium animate-pulse">
          {successMessage}
        </div>
      )}

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>

      {/* Progress Bar */}
      <div className="mb-5">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
          <div
            className="bg-[var(--primary)] h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Progress: {progress}%
        </p>
      </div>

      {/* Tasks */}
      <div className="flex justify-between mb-2">
        <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200">
          Tasks
        </h2>
        <div className="flex gap-2">
          <button
            onClick={openAddModal}
            className="px-2 py-1 bg-[var(--primary)] text-white rounded-lg text-xs hover:bg-[var(--primary-dark)] hover:text-black transition"
          >
            <Plus aria-label="Add Task" className="w-4 h-4" />
          </button>
         
        </div>
      </div>

      <ul className="space-y-3">
        {taskList.length > 0 ? (
          taskList.map((task) => (
            <li
              key={task._id}
              className="p-3 bg-[var(--secondary)] rounded-lg shadow-sm 
                 border-[var(--border-light)] dark:border-[var(--border-dark)]"
            >
              <div className="flex justify-between items-start">
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  {task.title}
                </p>
                <button
                  onClick={() => openMutateModal(task)}
                  className="text-xs text-gray-600 hover:text-[var(--primary)] transition"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {task.description}
              </p>
              <div className="flex justify-between mt-2 items-center">
                <p className="text-xs text-[var(--primary)] font-medium">
                  Status: {task.status}
                </p>
                <button
                  onClick={() =>
                    handleUpdateTask(task._id, {
                      status:
                        task.status === "completed" ? "pending" : "completed",
                    })
                  }
                  className="text-xs text-[var(--primary)] hover:underline"
                >
                  {task.status === "completed"
                    ? "Mark as Pending"
                    : "Mark as Completed"}
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="italic text-gray-400">No tasks added yet</li>
        )}
      </ul>

      {/* ADD TASK MODAL */}
      {showAddModal && (
          <AddTaskModal
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        formData={formData}
        handleChange={handleChange}
        handleAddTask={handleAddTask}
      />
      )}

      {/* UPDATE/DELETE TASK MODAL */}
      {showMutateModal && selectedTask && (
        <MutateModal
        showMutateModal={showMutateModal}
        selectedTask={selectedTask}
        setShowMutateModal={setShowMutateModal}
        setSelectedTask={setSelectedTask}
        confirmDelete={confirmDelete}
        setConfirmDelete={setConfirmDelete}
        handleUpdateTask={handleUpdateTask}
        handleDeleteTask={handleDeleteTask}
      />
      )}
    </div>
  );
};

export default ProjectDetails;
