export default function Topbar(){

return(

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"40px"
}}>

<h2>KubeDeploy Dashboard</h2>

<button style={{
background:"#4f46e5",
border:"none",
padding:"12px 24px",
borderRadius:"10px",
color:"white",
cursor:"pointer"
}}>
Refresh
</button>

</div>

)

}
