import Button from "../Utilities/ButtonOutline";
import React from "react";
import { ArrowUp } from "lucide-react"
import ButtonOutline from "../Utilities/ButtonOutline";

export default function ProjectCard({
  icon: Icon,
  title,
  description,
  progress,
  tasks = [],
  onViewDetails,
}) {
  const progressValue = Math.min(Math.max(progress, 0), 100);
  const displayedTasks = tasks.slice(0, 4);

  return (
    <div className="p-4 m-2 rounded-2xl border-[var(--border-light)] 
    dark:border-[var(--border-dark)]  shadow-sm  
    flex flex-col justify-between bg-[var(--secondary)] 
      transition-all duration-300 hover:shadow-md hover:scale-[1.01]">

      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        {Icon && <Icon className="text-[var(--primary)] text-xl" />}
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {description}
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
        <div
          className="bg-[var(--primary)] h-2 rounded-full transition-all duration-500"
          style={{ width: `${progressValue}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
        Progress: {progressValue}%
      </div>

      {/* Task List */}
      <ul className="text-sm text-gray-800 dark:text-gray-300 mb-3 list-disc pl-5">
        {displayedTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
        {tasks.length === 0 && (
          <li className="italic text-gray-400">No tasks added yet</li>
        )}
      </ul>

      

      {/* View All Tasks Button */}
      {tasks.length > 4 && (
        <button  
          onClick={onViewDetails}
          className="text-xs mt-auto self-start">View all tasks→</button>
      )}
    </div>
  );
}
