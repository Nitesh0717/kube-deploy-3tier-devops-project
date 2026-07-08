import { useEffect, useState } from "react";
import API from "../services/api";

export default function DockerStatus() {

  const [containers,setContainers]=useState([]);

  useEffect(()=>{

    load();

    const interval=setInterval(load,10000);

    return ()=>clearInterval(interval);

  },[]);

  async function load(){

    try{

      const res=await API.get("/api/docker");

      setContainers(res.data);

    }

    catch(err){

      console.log(err);

    }

  }

  const running=containers.filter(
    c=>c.status==="running"
  ).length;

  return(

    <div className="dashboard-box">

      <h2>🐳 Docker Containers</h2>

      <p style={{marginBottom:"20px"}}>

        Running {running} / {containers.length}

      </p>

      {containers.map(container=>(

        <div

          key={container.id}

          style={{

            display:"flex",

            justifyContent:"space-between",

            padding:"10px 0",

            borderBottom:"1px solid #374151"

          }}

        >

          <span>

            {container.container}

          </span>

          <span

            style={{

              color:
                container.status==="running"
                ? "#22c55e"
                : "#ef4444",

              fontWeight:"bold"

            }}

          >

            {container.status}

          </span>

        </div>

      ))}

    </div>

  );

}
