import { ChevronDown } from "lucide-react";
import ButtonOutline from "../Utilities/ButtonOutline";

export default function TaskToolbar({ activeSection, user = "Jane" }) {
    const renderToolbar = () => {
        switch (activeSection) {
            // Dashboard
            case "Dashboard":
                return (
                    <div className="flex justify-between items-center  dark:bg-[var(secondary-dark)]  p-3 border-b border-[var(--border-light)] ">
                        <div>
                            <h1 className="font-semibold text-lg">{activeSection}</h1>
                            <p className="text-sm text-gray-500">Hi {user}, welcome back</p>
                        </div>
                        <ButtonOutline label="My Project" icon={ChevronDown} />
                    </div>
                );

            // Tasks
            case "Tasks":
                return (
                    <div className="flex justify-between items-center bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] p-3 border-b border-[var(--border-light)] dark:border-[var(--border-dark)]">
                        <div>
                            <h1 className="font-semibold text-lg">{activeSection}</h1>
                            <p className="text-sm text-gray-500">Make progress, one task at a time</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                className="
                   border-[var(--primary)] bg-[var(--primary)] text-white
                  rounded-lg px-3 sm:px-4 py-2 text-sm hover:opacity-90 transition
                "
                            >
                                Add New Task
                            </button>
                            <ButtonOutline label="Sort by" icon={ChevronDown} />
                        </div>
                    </div>
                );

            // Projects
            case "Projects":
                return (
                    <div className="flex justify-between items-center bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] p-3 border-b border-[var(--border-light)] dark:border-[var(--border-dark)]">
                        <div>
                            <h1 className="font-semibold text-lg">{activeSection}</h1>
                            <p className="text-sm text-gray-500">Overview of all your projects</p>
                        </div>
                        <button
                            className="
                 border-[var(--primary)] bg-[var(--primary)] text-white
                rounded-lg px-3 sm:px-4 py-2 text-sm hover:opacity-90 transition
              "
                        >
                            Add New Project
                        </button>
                    </div>
                );

            // Calendar
            case "Calendar":
                return (
                    <div className="flex justify-between items-center bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] p-3 border-b border-[var(--border-light)] dark:border-[var(--border-dark)]">
                        <div>
                            <h1 className="font-semibold text-lg">{activeSection}</h1>
                            <p className="text-sm text-gray-500">Track deadlines and schedule your work</p>
                        </div>
                    </div>
                );

            // Email
            case "Email":
                return (
                    <div className="flex justify-between items-center bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] p-3 border-b border-[var(--border-light)] dark:border-[var(--border-dark)]">
                        <div>
                            <h1 className="font-semibold text-lg">{activeSection}</h1>
                            <p className="text-sm text-gray-500">Team communication center</p>
                        </div>
                        <button
                            className="
                 border-[var(--primary)] bg-[var(--primary)] text-white
                rounded-lg px-3 sm:px-4 py-2 text-sm hover:opacity-90 transition
              "
                        >
                            Sort date
                        </button>
                    </div>
                );

            // Settings
            case "Settings":
                return (
                    <div className="flex justify-between items-center bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] p-3 border-b border-[var(--border-light)] dark:border-[var(--border-dark)]">
                        <div>
                            <h1 className="font-semibold text-lg">{activeSection}</h1>
                            <p className="text-sm text-gray-500">Choose your preferences</p>
                        </div>
                    </div>
                );

            // Default fallback
            default:
                return (
                    <div className="flex justify-between items-center bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] p-3 border-b border-[var(--border-light)] dark:border-[var(--border-dark)]">
                        <div>
                            <h1 className="font-semibold text-lg">{activeSection || "Section"}</h1>
                            <p className="text-sm text-gray-500">Manage your workflow efficiently</p>
                        </div>
                    </div>
                );
        }
    };

    return <div className="rounded-lg text-[var(--text-primary)]">{renderToolbar()}</div>;
}
