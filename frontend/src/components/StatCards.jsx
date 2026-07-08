import { useEffect, useState } from "react";
import {
  CheckCircle,
  Clock3,
  Boxes,
  Server,
} from "lucide-react";
import API from "../services/api";

export default function StatCards() {
  const [tasks, setTasks] = useState([]);

  const [cluster, setCluster] = useState({
    pods: 0,
    deployments: 0,
    services: 0,
    nodes: 0,
  });

  useEffect(() => {
    loadData();

    const interval = setInterval(() => {
      loadData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  async function loadData() {
    try {
      // Fetch Tasks (don't stop if it fails)
      const taskRes = await API.get("/api/tasks").catch((err) => {
        console.error("Tasks API Error:", err);
        return { data: [] };
      });

      // Fetch Kubernetes Cluster (don't stop if it fails)
      const clusterRes = await API.get("/api/cluster").catch((err) => {
        console.error("Cluster API Error:", err);
        return {
          data: {
            pods: 0,
            deployments: 0,
            services: 0,
            nodes: 0,
          },
        };
      });

      console.log("Tasks:", taskRes.data);
      console.log("Cluster:", clusterRes.data);

      setTasks(Array.isArray(taskRes.data) ? taskRes.data : []);

      setCluster({
        pods: clusterRes.data?.pods || 0,
        deployments: clusterRes.data?.deployments || 0,
        services: clusterRes.data?.services || 0,
        nodes: clusterRes.data?.nodes || 0,
      });
    } catch (err) {
      console.error("StatCards Error:", err);
    }
  }

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.length - completed;

  const cards = [
    {
      title: "Total Tasks",
      value: tasks.length,
      icon: <Boxes size={28} />,
      color: "#2563eb",
    },
    {
      title: "Completed",
      value: completed,
      icon: <CheckCircle size={28} />,
      color: "#16a34a",
    },
    {
      title: "Pending",
      value: pending,
      icon: <Clock3 size={28} />,
      color: "#f59e0b",
    },
    {
      title: "Running Pods",
      value: cluster.pods,
      icon: <Server size={28} />,
      color: "#7c3aed",
    },
    {
      title: "Deployments",
      value: cluster.deployments,
      icon: <Boxes size={28} />,
      color: "#0891b2",
    },
    {
      title: "Services",
      value: cluster.services,
      icon: <Server size={28} />,
      color: "#dc2626",
    },
  ];

  return (
    <div className="cards">
      {cards.map((card) => (
        <div className="card" key={card.title}>
          <div
            style={{
              width: 55,
              height: 55,
              borderRadius: 12,
              background: card.color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 15,
              color: "#fff",
            }}
          >
            {card.icon}
          </div>

          <h3>{card.title}</h3>

          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}
