import React, { useState } from "react";
import { FolderIcon, BriefcaseIcon, LayersIcon } from "lucide-react";
import ProjectCard from "../Utilities/ProjectCard";
import ProjectDetails from "../Utilities/ProjectDetails";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle clicking on a project's "View all tasks" button
  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleBack = () => setSelectedProject(null);

  // Sample project data
  const projects = [
    {
      id: 1,
      icon: FolderIcon,
      title: "Website Redesign",
      description: "Modernize the company's website with better UX and responsiveness.",
      progress: 60,
      tasks: [
        "Design landing page layout",
        "Implement responsive navbar",
        "Add dark/light theme toggle",
        "Integrate analytics tracking",
        "Optimize performance",
        "Conduct final testing",
      ],
    },
    {
      id: 2,
      icon: BriefcaseIcon,
      title: "Mobile App UI",
      description: "Build a consistent mobile interface for the existing web app.",
      progress: 40,
      tasks: [
        "Create wireframes",
        "Develop login screens",
        "Implement user dashboard",
        "Set up navigation tabs",
      ],
    },
    {
      id: 3,
      icon: LayersIcon,
      title: "Backend Integration",
      description: "Connect frontend components to the Express/MongoDB backend.",
      progress: 25,
      tasks: [
        "Set up MongoDB models",
        "Create Express routes",
        "Create Express routes",
        "Integrate user authentication",
        "Test API endpoints",
      ],
    },
  ];

  return (
    <div className="w-full h-full transition-all duration-300 
    bg-[var(--primary)] dark:bg-[var(--primary-dark)]
    bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] 
    text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)] 
    border border-[var(--border-light)] dark:border-[var(--border-dark)]">
      {!selectedProject ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              icon={project.icon}
              title={project.title}
              description={project.description}
              progress={project.progress}
              tasks={project.tasks}
              onViewDetails={() => handleViewDetails(project)}
            />
          ))}
        </div>
      ) : (
        <ProjectDetails
          project={selectedProject}
          onBack={handleBack}
        />
      ) }
    </div>
  );
}


