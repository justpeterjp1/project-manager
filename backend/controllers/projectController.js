import Project from "../models/Project.js"


// Create new Project
export const createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project)
    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

// get all Projects
export async function getProjects(req, res) {
    try {
        const projects = await Project.find().populate("tasks", "title status");
        console.log("Fetched projects:", projects);
        res.status(200).json(projects)
    } catch(error) {
         res.status(500).json({message: error.message});
    }
}

// get single project
export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id)
           if (!project)
            return res.status(404).json({ message: "Project not found" });
             res.status(200).json(project);
    } catch(error) {
         res.status(500).json({message: error.message});
    }
}

// update project
export const updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        if(!project) return res.status(404).json({ message: "Project not found"});
       res.status(200).json(project)
    } catch(error) {
         res.status(500).json({message: error.message});
    }
};

// delete Project 
export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id)
        if(!project) return res.status(404).json("Project not found")
        res.status(200).json("Project deleted successfully")
    } catch(error) {
        res.status(500).json({message: error.message})
    }
};