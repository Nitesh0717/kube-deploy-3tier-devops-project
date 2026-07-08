import "./AWS.css";

export default function AWS() {

  const services = [

    {
      name: "EC2",
      purpose: "Hosts Docker containers & backend services",
      status: "Active"
    },

    {
      name: "Docker",
      purpose: "Containerization platform",
      status: "Running"
    },

    {
      name: "Kubernetes",
      purpose: "Container orchestration",
      status: "Running"
    },

    {
      name: "MongoDB",
      purpose: "Application database",
      status: "Connected"
    },

    {
      name: "Prometheus",
      purpose: "Monitoring & metrics",
      status: "Running"
    },

    {
      name: "Grafana",
      purpose: "Visualization dashboard",
      status: "Running"
    }

  ];

  return (

    <div className="aws-page">

      <div className="aws-header">

        <h1>☁ AWS Infrastructure</h1>

        <p>

          Infrastructure overview of the KubeDeploy platform

        </p>

      </div>

      <div className="aws-grid">

        {services.map((service) => (

          <div
            key={service.name}
            className="aws-card"
          >

            <h2>{service.name}</h2>

            <p>{service.purpose}</p>

            <span className="status">

              {service.status}

            </span>

          </div>

        ))}

      </div>

      <div className="aws-card" style={{marginTop:"30px"}}>

        <h2>Architecture Flow</h2>

        <div className="architecture-flow">

          GitHub

          <span className="arrow">→</span>

          GitHub Actions

          <span>→</span>

          Docker

          <span>→</span>

          Kubernetes

          <span>→</span>

          React + Node.js

          <span>→</span>

          MongoDB

        </div>

      </div>

    </div>

  );

}
