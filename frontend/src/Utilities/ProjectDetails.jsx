import React from 'react'
import {ListChecks,  FolderIcon, BriefcaseIcon, LayersIcon } from "lucide-react"


const ProjectDetails = ({onBack, project}) => {
 const {name, description, tasks = [] } = project
  // const Tasks = project.tasks;
  return (
    <div className='flex flex-col'>
       <button onClick={onBack} className="mb-4">← Back</button>
     <div className="flex items-center gap-3 mb-2">
        {/* {project.icon && <Icon className="text-[var(--primary)] text-xl" />} */}
        <h1 className="text-lg font-semibold">{name}</h1>
      </div>
       <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {description}
      </p>
       <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
        <div
          className="bg-[var(--primary)] h-2 rounded-full transition-all duration-500"
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
        Progress: {project.progress}%
      </div>
      <ul className="list-disc pl-5">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task._id} className="mb-2">
              <p className="font-semibold">{task.title}</p>
              <p className="text-sm text-gray-500">{task.description}</p>
              <p className="text-xs text-gray-400">Status: {task.status}</p>
            </li>
          ))
        ) : (
          <li className="italic text-gray-400">No tasks added yet</li>
        )}
      </ul>
      </div>
   
  )
}

export default ProjectDetails