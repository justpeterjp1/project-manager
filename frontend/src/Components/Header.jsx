import {Menu, X, Search, Bell } from "lucide-react"
import profile from "../assets/profile.jpeg"
import ThemeToggle from "../Utilities/ThemeToggle";


export default function Header({ isSidebarOpen, setIsSidebarOpen, searchQuery, setSearchQuery }) {

    return (
            <header className="h-16 flex flex-row items-center justify-between px-3 border-b bg-[var(--background)]  ">
           {/* Mobile hamburger */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden top-4 left-4 z-50 bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] p-2 rounded-lg shadow-soft border border-[var(--primary-light)] dark:border-[var(--border-dark)]"
            > {isSidebarOpen ? ( <X className="w-3 h-3 text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]" />
              ) : <Menu className="w-3 h-3 text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]" /> } 
            </button>

                    <div className="flex-1 flex justify-center items-center">
              <form className="flex items-center w-full max-w-xs">
                {/* Wrap the input to accomadate the search icon */}
                <div className="relative w-3/4 mx-auto md:w-full">
                      <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4"
                      />
                      <input
                        className="w-full border border-gray-300 dark:border-gray-600 
                          rounded-lg pl-9 pr-3 py-1.5 text-sm focus:outline-none focus:ring-2 
                          focus:ring-[var(--primary-light)] dark:focus:ring-[var(--primary-dark)] 
                          bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] text-[var(--text-primary-light)] 
                          dark:text-[var(--text-primary-dark)]"
                        type="text"
                        placeholder="Search for tasks"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                       {searchQuery && (
                        <button
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 top-2.5 text-gray-400 hover:text-[var(--accent)]"
                        >
                          <X size={14} />
                        </button>
                      )}
                    </div>
              </form>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Bell className="cursor-pointer text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]" />
              <img className="h-8 w-8 rounded-full object-cover cursor-pointer" src={profile} alt="user" />
            </div>
        </header>
    )
}