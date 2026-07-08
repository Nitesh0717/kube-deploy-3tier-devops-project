const stages = [
  {
    name: "Git Push",
    status: "Completed",
  },
  {
    name: "Build",
    status: "Completed",
  },
  {
    name: "Test",
    status: "Completed",
  },
  {
    name: "Docker Build",
    status: "Completed",
  },
  {
    name: "Kubernetes Deploy",
    status: "Running",
  },
  {
    name: "Health Check",
    status: "Pending",
  },
];

export default function Pipeline() {
  return (
    <div className="dashboard-box">

      <h2>⚙ CI/CD Pipeline</h2>

      {stages.map((stage) => (

        <div
          key={stage.name}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 0",
            borderBottom: "1px solid #374151"
          }}
        >

          <strong>{stage.name}</strong>

          <span
            style={{
              padding: "5px 12px",
              borderRadius: "20px",
              background:
                stage.status === "Completed"
                  ? "#16a34a"
                  : stage.status === "Running"
                  ? "#2563eb"
                  : "#f59e0b",
              color: "white",
              fontSize: "13px",
            }}
          >
            {stage.status}
          </span>

        </div>

      ))}

    </div>
  );
}
