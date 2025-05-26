import { useState } from "react";
import { Sidebar } from "./components/Sidebar"
import Header from "./components/Header";
import './index.css'
import DashboardMainContent from "./components/DashboardMainContent";

function App() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
  <>
  <div className="app">
    <Header onToggleSidebar={() => setSidebarOpen(true)} />
  <div className="layout">      
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="main-content">
        <DashboardMainContent/>
      </div>
    </div>
  </div>
  </>



  )
}


export default App

