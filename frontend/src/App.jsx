import { useState } from "react"
import './App.css'
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"

import Dashboard from "./Components/Dashboard"

function App() {
  // For  responsive layout
       const [isSidebarOpen, setIsSidebarOpen] = useState(false)
       const [activeSection, setActiveSection] = useState("Dashboard")

 return (
   <main className='flex h-screen bg-gray-200 gap-2 dark:bg-gray-900'>
          <Sidebar 
            isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}
            activeSection={activeSection} setActiveSection={setActiveSection}
            />

        <div className='flex flex-col flex-1 gap-2'>
          <Header  isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <section className='flex-1 bg-gray-400 overflow-y-auto p-1 rounded-sm md:ml-66'>
          <Dashboard activeSection={activeSection} />
        </section>
    </div>
   </main>
  );
}

export default App
