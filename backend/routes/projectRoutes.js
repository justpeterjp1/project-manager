import express from "express";

import {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject,
} from "../controllers/projectController.js";
import {
  createTask,
  getAllTasks
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/", createProject);
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);


router.post("/:projectId/tasks", createTask);
router.get("/:projectId/tasks", getAllTasks);

export default router;
