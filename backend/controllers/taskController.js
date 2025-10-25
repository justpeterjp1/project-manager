import Task from "../models/Task.js";
import Project from "../models/Project.js";

// Create a task inside a specific project
export const createTask = async (req, res) => {
  const { projectId } = req.params;
  const { title, description, status } = req.body;

  try {
    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });

    const task = new Task({
      title,
      description,
      status,
      projectId,
    });

    await task.save();

    // add refernce to project task count
    project.tasks.push(task._id);
    project.numTasks = (project.numTasks || 0) + 1;
    await project.save();

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { status } = req.query;

    // Build dynamic filter
    const filter = {};
    if (projectId) filter.projectId = projectId;
    if (status) filter.status = status;

    // Define status order for sorting
    const statusOrder = {
      "pending": 1,
      "in-progress": 2,
      "completed": 3,
    };

    const tasks = await Task.find(filter)
      .populate("projectId", "name")
      .lean();

    // Custom sort by status order
    tasks.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// ✅ Update a task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get single task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("projectId", "name");
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete a task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    // Optionally, decrement task count in project
    const project = await Project.findById(task.projectId);
    if (project && project.numTasks > 0) {
      project.numTasks -= 1;
      await project.save();
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
