import React from "react";
import { ArrowLeft, ListChecks } from "lucide-react";

const ProjectDetails = ({ onBack, project }) => {
  if (!project) return null;

  const { name, description, progress, tasks = [] } = project;

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto p-6 
      bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]
      rounded-2xl shadow-md border border-[var(--border-light)] 
      dark:border-[var(--border-dark)] transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-[var(--primary)] hover:underline"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex items-center gap-2">
          <ListChecks className="text-[var(--primary)]" />
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {name}
          </h1>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>

      {/* Progress */}
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
      <h2 className="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Tasks
      </h2>
      <ul className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li
              key={task._id}
              className="p-3 bg-[var(--secondary)] rounded-lg shadow-sm 
                border border-[var(--border-light)] dark:border-[var(--border-dark)]"
            >
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                {task.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {task.description}
              </p>
              <p className="text-xs mt-1 text-[var(--primary)] font-medium">
                Status: {task.status}
              </p>
            </li>
          ))
        ) : (
          <li className="italic text-gray-400">No tasks added yet</li>
        )}
      </ul>
    </div>
  );
};

export default ProjectDetails;
