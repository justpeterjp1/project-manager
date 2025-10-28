import React, { useState, useEffect } from "react";
import { FolderIcon, BriefcaseIcon, LayersIcon } from "lucide-react";
import ProjectCard from "../Utilities/ProjectCard";
import ProjectDetails from "../Utilities/ProjectDetails";

// import { api } from "../api/api.js"

export default function Projects({ refresh, searchQuery, selectedProject, setSelectedProject }) {
    // States

  const [ projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  
//   Handle rendering of available projects from mongoDb database
    useEffect( () => {
        async function displayProjects () {
                try {
                    const response = await fetch("http://localhost:5000/api/projects")
                    if(!response.ok) {
                        console.log("Data not found")
                    }
                   const data = await response.json()
                   if(data.length === 0) {
                console.log("Add a Project to get started")
            }
                    setProjects(data)
                    setLoading(false)
                } catch (error) {
                 console.error(`message: ${error}`)  
            } 
        } 
        displayProjects()
    }, [refresh])
    
  // Handle clicking on a project's "View all tasks" button
  const handleViewDetails = (project) => {
  setLoading(true);
  setSelectedProject(project);
  
 
  setTimeout(() => {
    setLoading(false);
  }, 500);
};

const handleBack = () => {
  setSelectedProject(null);
  setLoading(false); 
};

// Show loading while fetching data
  const renderProjectCard = () => {
  if (loading) {
    return (
      <div className="col-span-full flex justify-center items-center py-10">
        <p>Loading...</p>
      </div>
    );
  }

  if (!loading && projects.length === 0) {
    return (
      <div className="col-span-full flex justify-center items-center py-10">
        <button
          onClick={handleAddProject} // optional: replace with your actual function
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Click to add a Project
        </button>
      </div>
    );
  }

  return projects.map((project) => (
    <ProjectCard
      key={project._id}
      icon={project.icon}
      title={project.name}
      description={project.description}
      progress={project.progress}
      tasks={project.tasks || []}
      onViewDetails={() => handleViewDetails(project)}
    />
  ));
};

return (
  <div

    className="w-full h-full transition-all duration-300
    bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]
    text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]
     border-[var(--border-light)] dark:border-[var(--border-dark)]
    rounded-lg bg-[var(--primary)]"
  >
    {!selectedProject ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {renderProjectCard()}
      </div>
    ) : (
        <ProjectDetails
          project={selectedProject}
          onBack={handleBack}
          searchQuery={searchQuery}
        />
      ) }


    </div>
  );
}


