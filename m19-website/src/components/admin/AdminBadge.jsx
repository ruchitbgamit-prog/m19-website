import { A } from "../../theme/adminColors.js";

export const AdminBadge=({status})=>{
  const map={
    "Testing":{bg:A.blueDim,c:A.blue},"Report Pending":{bg:A.amberDim,c:A.amber},
    "Report Ready":{bg:"rgba(42,157,143,0.15)",c:A.green},"Completed":{bg:A.greenDim,c:A.green},
    "Delivered":{bg:A.dim,c:A.muted},"Open":{bg:A.redDim,c:A.redLt},
    "In Progress":{bg:A.blueDim,c:A.blue},"Resolved":{bg:A.greenDim,c:A.green},"Received":{bg:A.dim,c:A.muted},
  };
  const s=map[status]||{bg:A.dim,c:A.muted};
  return <span className="admin-badge" style={{background:s.bg,color:s.c,borderColor:`${s.c}44`}}>{status}</span>;
};

