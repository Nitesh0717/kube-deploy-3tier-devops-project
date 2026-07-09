import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Kubernetes from "./pages/Kubernetes";
import Deployments from "./pages/Deployments";
import CICD from "./pages/CICD";
import Docker from "./pages/Docker";
import Monitoring from "./pages/Monitoring";
import AWS from "./pages/AWS";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/kubernetes" element={<Kubernetes />} />
      <Route path="/deployments" element={<Deployments />} />
      <Route path="/cicd" element={<CICD />} />
      <Route path="/docker" element={<Docker />} />
      <Route path="/monitoring" element={<Monitoring />} />
      <Route path="/aws" element={<AWS />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
