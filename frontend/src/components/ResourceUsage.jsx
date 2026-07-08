export default function ResourceUsage() {

  const resources = [
    {
      name: "CPU Usage",
      value: 48
    },
    {
      name: "Memory Usage",
      value: 66
    },
    {
      name: "Storage Usage",
      value: 39
    }
  ];

  return (
    <div className="dashboard-box">

      <h2>📊 Resource Usage</h2>

      {resources.map((item) => (

        <div
          key={item.name}
          style={{ marginBottom: "22px" }}
        >

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px"
            }}
          >
            <span>{item.name}</span>
            <strong>{item.value}%</strong>
          </div>

          <div
            style={{
              width: "100%",
              height: "10px",
              background: "#374151",
              borderRadius: "20px",
              overflow: "hidden"
            }}
          >

            <div
              style={{
                width: `${item.value}%`,
                height: "100%",
                background: "#4F46E5"
              }}
            />

          </div>

        </div>

      ))}

    </div>
  );
}
