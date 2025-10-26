import { useState } from "react"
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

function App() {
  // For  responsive layout
       const [isSidebarOpen, setIsSidebarOpen] = useState(false)
       const [activeSection, setActiveSection] = useState("Dashboard")
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [refresh, setRefresh] = useState(false); 

 return (
   <main className='flex h-screen gap-1 bg-[var(--background)] text-[var(--text-primary)]'>
          <Sidebar 
            isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
            activeSection={activeSection} setActiveSection={setActiveSection}
            />

        <div className='flex flex-col flex-1 gap-1 text-[var(--text-primary)]'>
          <Header  isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <section className='flex-1 h-screen bg-[var(--background)]  overflow-y-auto p-1 rounded-sm md:ml-65 '>
          <TaskToolbar 
         
          onAddProjectClick={() => setIsModalOpen(true)}
          activeSection={activeSection} />
          {activeSection === "Dashboard" && <Dashboard />}
          {activeSection === "Projects" && (<Projects setRefresh={setRefresh} /> )}
          {activeSection === "Calendar" && <CalendarSection />}
          {activeSection === "Settings" && <SettingsSection />}
          {activeSection === "Email" && <EmailSection />}
        </section>
        {isModalOpen && (
          <AddProjectModal
            onClose={() => setIsModalOpen(false)}
            onProjectCreated={() => {
            setShowModal(false); // close modal
            setRefresh((prev) => !prev); // trigger refresh in Projects
          }}
          />
        )}

    </div>
   </main>
  );
}

export default App
