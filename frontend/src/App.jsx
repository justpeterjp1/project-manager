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

function App() {
  // For  responsive layout
       const [isSidebarOpen, setIsSidebarOpen] = useState(false)
       const [activeSection, setActiveSection] = useState("Dashboard")

  //       const renderSection = () => {
  //   switch (activeSection) {
  //     case "Dashboard":
  //       return <Dashboard />;
  //     case "Projects":
  //       return <Projects />;
  //     case "Calendar":
  //       return <Calendar />;
  //     case "Email":
  //       return <Email />;
  //     case "Settings":
  //       return <Settings />;
  //     default:
  //       return <Dashboard />;
  //   }
  // };
 return (
   <main className='flex h-screen gap-1 bg-[var(--background)] text-[var(--text-primary)]'>
          <Sidebar 
            isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
            activeSection={activeSection} setActiveSection={setActiveSection}
            />

        <div className='flex flex-col flex-1 gap-1 text-[var(--text-primary)]'>
          <Header  isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <section className='flex-1 h-screen bg-[var(--background)]  overflow-y-auto p-1 rounded-sm md:ml-65 '>
          <TaskToolbar activeSection={activeSection} />
          {activeSection === "Dashboard" && <Dashboard />}
          {activeSection === "Tasks" && <Projects />}
          {activeSection === "Calendar" && <CalendarSection />}
          {activeSection === "Settings" && <SettingsSection />}
          {activeSection === "Email" && <EmailSection />}
        </section>
    </div>
   </main>
  );
}

export default App
