import { useState } from "react";
import SideButton from "../Utilities/SideButton";
import { LayoutDashboard, Calendar1, Settings, Mail, ClipboardList, LogOut, Menu, X } from "lucide-react"
import Tasknest from "./Tasknest"
import profile from "../assets/profile.jpeg"
import Button from "../Utilities/Button"


const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, activeSection, setActiveSection }) => {
       const buttons = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: ClipboardList, label: "Tasks" },
    { icon: Calendar1, label: "Calendar" },
    { icon: Settings, label: "Settings" },
    { icon: Mail, label: "Email" },
  ]   
  return (
  <>
         {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

    <div className={`
    w-64 bg-white dark:bg-gray-800 border-r border-gray-200 
    dark:border-gray-700  p-4 flex flex-col
    fixed inset-y-0 left-0 z-50
    transform transition-transform duration-300
    -translate-x-full md:translate-x-0
    ${isSidebarOpen ? "translate-x-0 w-48" : "-translate-x-full" }
    w-64 sm:w-56 md:w-60 lg:w-64
  z-50
    `}>
      {/* Logo component changes to be made later */}
      <Tasknest /> 
      {/* Navigation buttons */}
       {buttons.map(({ icon, label }) => (
          <SideButton
            key={label}
            icon={icon}
            label={label}
            active={activeSection === label}
            onClick={() => {
              setActiveSection(label)
              setIsSidebarOpen(false) // close after selecting
            }}
          />
        ))}
       {/* a little seperation */}
       <div className="h-40 flex items-center justify-around flex-col text-white bg-[var(--primary)] rounded-lg mb-2 p-3">
          <h2 className="font-bold ">Download our Mobile App</h2>
          <p className="font-thin text-xs mb-1">Organize your tasks in another style</p>
          <button className="bg-[var(--accent)] py-1 px-4 rounded-lg">Download</button>
       </div>
       <hr />
       <div className="hidde flex gap-2 md:flex mt-1">
          <img className="h-12" src={profile} alt="user-image" />
          <div>
            <h6 className="font-bold">Jane Doe</h6>
            <p>Overall Supervisor</p>
          </div>
       </div>
        <Button icon={LogOut} label="logout" />
    </div>
    </>
  )
}


export default Sidebar