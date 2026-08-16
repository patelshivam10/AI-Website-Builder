import React from "react"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Projects from "./pages/Projects"
import Preview from "./pages/Preview"
import Community from "./pages/Community"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/projects/:projectId" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/preview/:projectId" element={<Preview/>} />
        <Route path="/preview/:projectId/:versionId" element={<Preview/>} />
        <Route path="/community" element={<Community />} />
        <Route path="/view/:projectId" element={<view />} />
      </Routes>
    </div>
  )
}

export default App