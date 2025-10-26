import { useState } from "react";
import { createProject } from "/src/api/api.js";
import { FolderIcon, Briefcase, ListChecks, Activity, Layers, Airplay,
     AlarmClock, Server, ShieldCheck, Globe, TabletSmartphone } from "lucide-react";

const iconOptions = [
  { label: "Folder", value: "FolderIcon", icon: <FolderIcon className="w-5 h-5" /> },
  { label: "Briefcase", value: "BriefcaseIcon", icon: <Briefcase className="w-5 h-5" /> },
  { label: "List Checks", value: "ListChecks", icon: <ListChecks className="w-5 h-5" /> },
  { label: "Layers", value: "LayersIcon", icon: <Layers className="w-5 h-5" /> },
  { label: "Airplay", value: "Airplay", icon: <Airplay className="w-5 h-5" /> },
  { label: "Activity", value: "Activity", icon: <Activity className="w-5 h-5" /> },
  { label: "Server", value: "Server", icon: <Server className="w-5 h-5" /> },
  { label: "AlarmClock", value: "AlarmClock", icon: <AlarmClock className="w-5 h-5" /> },
  { label: "Security", value: "ShieldCheck", icon: <ShieldCheck className="w-5 h-5" /> },
  { label: "Web", value: "Globe", icon: <Globe className="w-5 h-5" /> },
  { label: "Mobile", value: "TabletSmartphone", icon: <TabletSmartphone className="w-5 h-5" /> },
];

const AddProjectModal = ({ onClose, onProjectCreated }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "pending",
    icon: "FolderIcon",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await createProject(formData);
    console.log("Project created:", res.data);

    // Notify parent to refresh
    onProjectCreated();

    // Show brief success message
    setSuccessMessage(
      `✅ Project "${formData.name}" created successfully! You can now have full access and start creating tasks in the Projects section.`
    );

    // Close modal shortly after showing success message
    setTimeout(() => {
      onClose();
    }, 1200);
  } catch (err) {
    console.error("Error creating project:", err);
    setSuccessMessage("⚠️ Failed to create project. Please try again.");
  } finally {
    setLoading(false);
  }
};


  const selectedIcon = iconOptions.find((i) => i.value === formData.icon)?.icon;

  return (
    <div className="fixed inset-0 bg-[var(--background)] bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[var(--surface-light)] dark:bg-[var(--surface)] p-6 rounded-2xl w-[90%] max-w-md shadow-lg border-[var(--border-light)] dark:border-[var(--border-dark)]">
        {!successMessage ? (
          <>
            <h2 className="text-lg font-semibold mb-4 text-center text-[var(--primary)]">
              Add New Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Project Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
              />
              <textarea
                name="description"
                placeholder="Project Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
              />
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
              </select>

              <div>
                <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300">
                  Choose Icon
                </label>
                <div className="flex items-center gap-2">
                  <select
                    name="icon"
                    value={formData.icon}
                    onChange={handleChange}
                    className="flex-1 p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                  >
                    {iconOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    {selectedIcon}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-sm bg-gray-200 dark:bg-gray-700 hover:opacity-80"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-lg text-sm bg-[var(--primary)] text-white hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? "Adding..." : "Add Project"}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center text-[var(--primary)] font-medium py-8">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProjectModal;
