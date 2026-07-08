import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CheckSquare,
  Boxes,
  Rocket,
  GitBranch,
  Package,
  Activity,
  Cloud,
  Settings,
} from "lucide-react";

import "./Sidebar.css";

const menus = [
  {
    name: "Overview",
    path: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: <CheckSquare size={20} />,
  },
  {
    name: "Kubernetes",
    path: "/kubernetes",
    icon: <Boxes size={20} />,
  },
  {
    name: "Deployments",
    path: "/deployments",
    icon: <Rocket size={20} />,
  },
  {
    name: "CI/CD",
    path: "/cicd",
    icon: <GitBranch size={20} />,
  },
  {
    name: "Docker",
    path: "/docker",
    icon: <Package size={20} />,
  },
  {
    name: "Monitoring",
    path: "/monitoring",
    icon: <Activity size={20} />,
  },
  {
    name: "AWS",
    path: "/aws",
    icon: <Cloud size={20} />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings size={20} />,
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div>

        <div className="logo">
          <h2>⚙️ KubeDeploy</h2>
          <p>DevOps Dashboard</p>
        </div>

        <nav className="menu">

          {menus.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive
                  ? "menu-item active"
                  : "menu-item"
              }
            >

              {item.icon}

              <span>{item.name}</span>

            </NavLink>

          ))}

        </nav>

      </div>

      <div className="status-card">

        <h3>Cluster Status</h3>

        <p>🟢 Healthy</p>

        <small>4 Pods Running</small>

      </div>

    </aside>
  );
}