import { useState, useEffect } from "react"
import './App.css'
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"
import Projects from "./Components/Projects"
import TaskToolbar from "./Components/TaskToolbar"
import CalendarSection from "./Components/CalendarSection"
import Dashboard from "./Components/Dashboard"
import SettingsSection from "./Components/SettingsSection"
import EmailSection from "./Components/EmailSection"
import AddProjectModal from "./Components/AddProjectModal"
import SearchModal from "./Components/SearchModal"
function App() {
  // For  responsive layout
       const [isSidebarOpen, setIsSidebarOpen] = useState(false)
       const [activeSection, setActiveSection] = useState("Dashboard")
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [refresh, setRefresh] = useState(false); 
       const [searchQuery, setSearchQuery] = useState("");
       const [showSearchModal, setShowSearchModal] = useState(false);
        const [selectedProject, setSelectedProject] = useState(null);

       useEffect(() => {
  if (searchQuery.trim()) {
    setShowSearchModal(true);
  } else {
    setShowSearchModal(false);
  }
}, [searchQuery]);


 return (
  <main className="relative flex h-screen gap-1 bg-[var(--background)] text-[var(--text-primary)]">
  <Sidebar 
    isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
    activeSection={activeSection} setActiveSection={setActiveSection}
  />

  <div className="flex flex-col flex-1 gap-1 text-[var(--text-primary)] relative z-10">
    {/* Header should always stay on top */}
    <div className="relative z-40">
      <Header 
        setSearchQuery={setSearchQuery} 
        searchQuery={searchQuery}  
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
      />
    </div>

    <section className="flex-1 h-screen bg-[var(--background)] overflow-y-auto p-1 rounded-sm md:ml-65 relative z-10">
      <TaskToolbar onAddProjectClick={() => setIsModalOpen(true)} activeSection={activeSection} />

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

      {/* Search Modal Overlay (below header now) */}
      {showSearchModal && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-8 z-30">
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
    </section>

    {isModalOpen && (
      <AddProjectModal
        onClose={() => setIsModalOpen(false)}
        onProjectCreated={() => {
          setShowModal(false);
          setRefresh((prev) => !prev);
        }}
      />
    )}
  </div>
</main>

  );
}

export default App
