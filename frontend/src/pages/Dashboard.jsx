import Pipeline from "../components/Pipeline";
import ResourceUsage from "../components/ResourceUsage";
import DockerStatus from "../components/DockerStatus";
import LatestDeployment from "../components/LatestDeployment";
import ClusterStatus from "../components/ClusterStatus";
import RecentActivity from "../components/RecentActivity";
import TaskChart from "../components/TaskChart";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCards from "../components/StatCards";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="main">
        {/* Top Navigation */}
        <Topbar />

        {/* Welcome Section */}
        <section className="welcome">
          <h1>Overview 👋</h1>
          <p>Monitor your DevOps environment at a glance</p>
        </section>

        {/* Statistics Cards */}
        <StatCards />

        {/* Dashboard Content (Temporary Placeholders) */}
        <section className="dashboard-grid">

          <TaskChart />

          <ClusterStatus />

          <DockerStatus />
          
          <ResourceUsage />

          <RecentActivity />
 
          <Pipeline />

          <LatestDeployment />

        </section>
      </main>
    </div>
  );
}
