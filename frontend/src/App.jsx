import { useState, useEffect } from "react";
import "./App.css";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Projects from "./Components/Projects";
import TaskToolbar from "./Components/TaskToolbar";
import CalendarSection from "./Components/CalendarSection";
import Dashboard from "./Components/Dashboard";
import SettingsSection from "./Components/SettingsSection";
import EmailSection from "./Components/EmailSection";
import AddProjectModal from "./Components/AddProjectModal";
import SearchModal from "./Components/SearchModal";
import ProjectDetails from "./Utilities/ProjectDetails";

function App() {
  // Layout states
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Dashboard");

  // Project/task handling
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Search handling
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);

  useEffect(() => {
    if (searchQuery.trim()) {
      setShowSearchModal(true);
    } else {
      setShowSearchModal(false);
    }
  }, [searchQuery]);

  return (
    <main className="flex h-screen gap-1 bg-[var(--background)] text-[var(--text-primary)]">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main container */}
      <div className="flex flex-col flex-1 gap-1 text-[var(--text-primary)] relative">
        {/* Header stays visible */}
        <div className="relative z-40">
          <Header
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>

        {/* Main Content */}
        <section className="flex-1 h-screen bg-[var(--background)] overflow-y-auto p-1 rounded-sm md:ml-65 relative z-10">
          <TaskToolbar
            onAddProjectClick={() => setIsModalOpen(true)}
            activeSection={activeSection}
          />

          {activeSection === "Dashboard" && <Dashboard />}
          {activeSection === "Projects" && (
            <Projects
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              setRefresh={setRefresh}
            />
          )}
          {activeSection === "Calendar" && <CalendarSection />}
          {activeSection === "Settings" && <SettingsSection />}
          {activeSection === "Email" && <EmailSection />}
        </section>

        {/* ✅ Global SearchModal (works from any section) */}
        {showSearchModal && (
          <div className="absolute top-[64px] inset-x-0 bottom-0 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-8 z-30">
            <SearchModal
              searchQuery={searchQuery}
              setSelectedProject={setSelectedProject}
              onClose={() => {
                setSearchQuery("");
                setShowSearchModal(false);
              }}
              onSelectProject={(projectId) => {
                const project = projects.find((p) => p._id === projectId);
                if (project) {
                  setSelectedProject(project);
                  setShowSearchModal(false);
                }
              }}
            />
          </div>
        )}

        {/* Add project modal */}
        {isModalOpen && (
          <AddProjectModal
            onClose={() => setIsModalOpen(false)}
            onProjectCreated={() => {
              setIsModalOpen(false);
              setRefresh((prev) => !prev);
            }}
          />
        )}
      {/*  */}
         {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[var(--background)] backdrop-blur-sm flex items-center justify-center">
  <div className="relative flex flex-col w-full max-w-3xl mx-auto p-6 
      bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]
      rounded-2xl shadow-md border-[var(--border-light)] 
      dark:border-[var(--border-dark)] transition-all duration-300">
    
    <button
      onClick={() => setSelectedProject(null)}
      className="absolute top-4 right-4 text-gray-400 hover:text-[var(--primary)]"
    >
      ✕
    </button>

    <ProjectDetails 
     onBack={() => setSelectedProject(null)} 
    project={selectedProject} />
  </div>
</div>

      )}
      </div>
      
    </main>
  );
}

export default App;
