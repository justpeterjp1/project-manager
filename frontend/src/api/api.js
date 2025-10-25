import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

// ====== Projects =====
export const getProjects = () => API.get("/projects");
export const getProjectById = () => API.get(`/projects/${id}`);
export const createProject =  (data) => API.post("/projects", data);
export const updateProject = (id, data) => API.put(`/projects/${id}`, data);
export const deleteProject = (id) => API.delete(`/projects/${id}`);

// ===== Tasks =====
export const getTasks = (projectId) => API.get(`/projects/${projectId}/tasks`);
export const createTask = (projectId, data) => API.post(`/projects/${projectId}/tasks`, data);
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);