import { useEffect, useState } from "react";
import API from "../services/api";

export default function ClusterStatus() {

  const [cluster, setCluster] = useState({
    pods: 0,
    deployments: 0,
    services: 0,
    nodes: 0,
    podList: [],
  });

  useEffect(() => {

    loadCluster();

    const interval = setInterval(loadCluster,10000);

    return () => clearInterval(interval);

  }, []);

  async function loadCluster() {

    try{

      const res = await API.get("/api/cluster");

      setCluster(res.data);

    }

    catch(err){

      console.log(err);

    }

  }

  return(

    <div className="dashboard-box">

      <h2>☸ Kubernetes Cluster</h2>

      <div style={{margin:"18px 0"}}>

        <strong>Pods :</strong> {cluster.pods}

      </div>

      <div style={{margin:"18px 0"}}>

        <strong>Deployments :</strong> {cluster.deployments}

      </div>

      <div style={{margin:"18px 0"}}>

        <strong>Services :</strong> {cluster.services}

      </div>

      <div style={{margin:"18px 0"}}>

        <strong>Nodes :</strong> {cluster.nodes}

      </div>

      <div style={{marginTop:"25px"}}>

        <strong style={{display:"block",marginBottom:"12px"}}>

          Cluster Health

        </strong>

        <span
          style={{
            background:"#16a34a",
            color:"white",
            padding:"8px 18px",
            borderRadius:"20px",
            fontWeight:"600"
          }}
        >

          Healthy

        </span>

      </div>

    </div>

  );

}
