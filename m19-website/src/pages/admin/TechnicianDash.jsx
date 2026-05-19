import { useState } from "react";
import { LAB_ORDERS, TICKETS } from "../../data/adminSamples.js";
import { AdminBadge } from "../../components/admin/AdminBadge.jsx";
import { AdminShell } from "../../components/admin/AdminShell.jsx";
import { A } from "../../theme/adminColors.js";

export function TechnicianDash({user,onSignOut}){
  const [sec,setSec]=useState("orders");
  const [orders,setOrders]=useState(LAB_ORDERS);
  const [tickets,setTickets]=useState(TICKETS);
  const [selectedOrder,setSelectedOrder]=useState(null);
  const [uploadMsg,setUploadMsg]=useState("");
  const STATUS_FLOW=["Received","Testing","Report Pending","Report Ready","Completed","Delivered"];

  const nav=[
    {group:"Operations",items:[
      {id:"orders",icon:"📋",label:"Order Queue",badge:orders.filter(o=>o.status!=="Delivered").length},
      {id:"upload",icon:"📤",label:"Upload Results"},
      {id:"tickets",icon:"🎫",label:"Query Tickets",badge:tickets.filter(t=>t.status==="Open").length},
    ]},
    {group:"Reports",items:[{id:"completed",icon:"✅",label:"Completed Orders"},{id:"samples",icon:"🧫",label:"Sample Tracker"}]},
  ];

  const updateStatus=(id,newStatus)=>setOrders(prev=>prev.map(o=>o.id===id?{...o,status:newStatus}:o));
  const closeTicket=(id)=>setTickets(prev=>prev.map(t=>t.id===id?{...t,status:"Resolved"}:t));

  const PRI_COL={High:A.red,Med:A.amber,Low:A.green};
  const COL_WIDTHS_ORDER="140px 180px 1fr 110px 80px 110px 110px 120px";
  const COL_WIDTHS_TICKET="100px 130px 1fr 80px 80px 100px";

  return(
    <AdminShell user={user} navGroups={nav} activeSection={sec} setSection={setSec} onSignOut={onSignOut} roleColor={A.green}>
      <div className="fade-in">

        {/* KPI row */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:24}}>
          {[
            {label:"Pending",value:orders.filter(o=>["Received","Testing","Report Pending"].includes(o.status)).length,icon:"⏳",c:A.amber},
            {label:"In Testing",value:orders.filter(o=>o.status==="Testing").length,icon:"🧪",c:A.blue},
            {label:"Report Ready",value:orders.filter(o=>o.status==="Report Ready").length,icon:"📄",c:A.green},
            {label:"Open Tickets",value:tickets.filter(t=>t.status==="Open").length,icon:"🎫",c:A.red},
          ].map(k=>(
            <div key={k.label} className="kpi-card" style={{borderLeftColor:k.c}}>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>{k.label}</div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:42,fontWeight:700,color:k.c,lineHeight:1}}>{k.value}</div>
                <span style={{fontSize:22,opacity:0.5}}>{k.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ORDER QUEUE */}
        {sec==="orders"&&(
          <>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.red,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>Active Order Queue</div>
            <div style={{background:A.panel,border:`1px solid ${A.border}`}}>
              <div className="admin-table-hdr" style={{gridTemplateColumns:COL_WIDTHS_ORDER}}>
                {["Order ID","Client","Test","Standard","Priority","Received","ETA / Status","Actions"].map(h=>(
                  <div key={h} style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.dim,letterSpacing:1.5,textTransform:"uppercase"}}>{h}</div>
                ))}
              </div>
              {orders.filter(o=>o.status!=="Delivered").map(o=>(
                <div key={o.id} className="admin-table-row" style={{gridTemplateColumns:COL_WIDTHS_ORDER}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:A.green}}>{o.id}</div>
                  <div style={{fontSize:11,color:A.text,fontWeight:500}}>{o.client}</div>
                  <div style={{fontSize:11,color:A.muted,lineHeight:1.3}}>{o.test}</div>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.dim}}>{o.std}</div>
                  <span className="tag" style={{alignSelf:"center"}} data-priority={o.priority}>
                    <span style={{padding:"2px 7px",fontSize:9,fontFamily:"'DM Mono',monospace",letterSpacing:1,textTransform:"uppercase",background:o.priority==="High"?A.redDim:o.priority==="Med"?A.amberDim:A.greenDim,color:PRI_COL[o.priority]}}>{o.priority}</span>
                  </span>
                  <div style={{fontSize:10,color:A.muted}}>{o.received}</div>
                  <AdminBadge status={o.status}/>
                  <div style={{display:"flex",gap:6}}>
                    {STATUS_FLOW.indexOf(o.status)<STATUS_FLOW.length-1&&(
                      <button className="abtn abtn-green" style={{fontSize:9,padding:"4px 8px"}} onClick={()=>updateStatus(o.id,STATUS_FLOW[STATUS_FLOW.indexOf(o.status)+1])}>
                        → {STATUS_FLOW[STATUS_FLOW.indexOf(o.status)+1].split(" ")[0]}
                      </button>
                    )}
                    <button className="abtn abtn-ghost" style={{fontSize:9,padding:"4px 8px"}} onClick={()=>setSelectedOrder(o)}>Detail</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ORDER DETAIL MODAL */}
        {selectedOrder&&(
                <div style={{position:"fixed",inset:0,background:"rgba(2,6,23,0.85)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:24}} onClick={()=>setSelectedOrder(null)}>
            <div style={{background:A.panel,border:`1px solid ${A.border}`,maxWidth:560,width:"100%",padding:32}} onClick={e=>e.stopPropagation()}>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.green,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>Order Detail</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,color:A.text,marginBottom:20}}>{selectedOrder.id}</div>
              {[["Client",selectedOrder.client],["Test",selectedOrder.test],["Standard",selectedOrder.std],["Priority",selectedOrder.priority],["Assigned Technician",selectedOrder.tech],["Received",selectedOrder.received],["ETA",selectedOrder.eta],["Status",selectedOrder.status]].map(([k,v])=>(
                <div key={k} style={{display:"flex",gap:16,padding:"8px 0",borderBottom:`1px solid ${A.border}`}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted,letterSpacing:1,textTransform:"uppercase",width:140,flexShrink:0}}>{k}</div>
                  <div style={{fontSize:12,color:A.text}}>{k==="Status"?<AdminBadge status={v}/>:v}</div>
                </div>
              ))}
              <div style={{marginTop:20,display:"flex",gap:10}}>
                <button className="abtn abtn-green" style={{fontSize:11}} onClick={()=>{setSec("upload");setSelectedOrder(null);}}>Upload Report</button>
                <button className="abtn abtn-ghost" style={{fontSize:11}} onClick={()=>setSelectedOrder(null)}>Close</button>
              </div>
            </div>
          </div>
        )}

        {/* UPLOAD RESULTS */}
        {sec==="upload"&&(
          <>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.red,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>Upload Test Results</div>
            <div className="admin-card" style={{maxWidth:600}}>
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                <div><label style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted,letterSpacing:1.5,textTransform:"uppercase",display:"block",marginBottom:6}}>Order ID</label>
                  <select className="admin-select"><option value="">Select order...</option>{orders.filter(o=>o.status==="Report Pending"||o.status==="Testing").map(o=><option key={o.id}>{o.id} — {o.client}</option>)}</select></div>
                <div><label style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted,letterSpacing:1.5,textTransform:"uppercase",display:"block",marginBottom:6}}>Test Report PDF</label>
                  <div style={{border:`1px dashed ${A.border}`,padding:"32px 20px",textAlign:"center",cursor:"pointer",background:"rgba(255,255,255,0.02)"}} onClick={()=>setUploadMsg("✓ Report_M19-2026-0415_PSD.pdf — Ready to submit")}>
                    <div style={{fontSize:28,marginBottom:8}}>📄</div>
                    <div style={{fontSize:12,color:A.muted}}>Click to select PDF or drag & drop</div>
                    {uploadMsg&&<div style={{marginTop:12,fontSize:11,color:A.green,fontFamily:"'DM Mono',monospace"}}>{uploadMsg}</div>}
                  </div>
                </div>
                <div><label style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted,letterSpacing:1.5,textTransform:"uppercase",display:"block",marginBottom:6}}>Raw Data File (optional)</label>
                  <input className="admin-input" type="text" placeholder="CSV / Excel file path or drag file here"/></div>
                <div><label style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted,letterSpacing:1.5,textTransform:"uppercase",display:"block",marginBottom:6}}>Technician Notes</label>
                  <textarea className="admin-input" style={{minHeight:80,resize:"vertical"}} placeholder="Any notes on the test, deviations, sample condition on receipt..."/></div>
                <div><label style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted,letterSpacing:1.5,textTransform:"uppercase",display:"block",marginBottom:6}}>Notify Client</label>
                  <select className="admin-select"><option>Yes — email report link immediately</option><option>Yes — email + WhatsApp</option><option>No — manual notification</option></select></div>
                <div style={{display:"flex",gap:10}}>
                  <button className="abtn abtn-green" style={{fontSize:11}}>Upload & Mark Report Ready</button>
                  <button className="abtn abtn-ghost" style={{fontSize:11}} onClick={()=>setUploadMsg("")}>Clear</button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* TICKETS */}
        {sec==="tickets"&&(
          <>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.red,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>Query Tickets</div>
            <div style={{background:A.panel,border:`1px solid ${A.border}`}}>
              <div className="admin-table-hdr" style={{gridTemplateColumns:COL_WIDTHS_TICKET}}>
                {["Ticket ID","Client","Subject","Time","Priority","Status"].map(h=>(
                  <div key={h} style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.dim,letterSpacing:1.5,textTransform:"uppercase"}}>{h}</div>
                ))}
              </div>
              {tickets.map(t=>(
                <div key={t.id} className="admin-table-row" style={{gridTemplateColumns:COL_WIDTHS_TICKET}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:A.blue}}>{t.id}</div>
                  <div style={{fontSize:11,color:A.text}}>{t.client}</div>
                  <div style={{fontSize:11,color:A.muted,lineHeight:1.4}}>{t.subject}</div>
                  <div style={{fontSize:10,color:A.dim}}>{t.time}</div>
                  <span style={{padding:"2px 7px",fontSize:9,fontFamily:"'DM Mono',monospace",background:t.priority==="High"?A.redDim:A.amberDim,color:t.priority==="High"?A.redLt:A.amber}}>{t.priority}</span>
                  <div style={{display:"flex",gap:6,alignItems:"center"}}>
                    <AdminBadge status={t.status}/>
                    {t.status!=="Resolved"&&<button className="abtn abtn-ghost" style={{fontSize:8,padding:"2px 8px"}} onClick={()=>closeTicket(t.id)}>Resolve</button>}
                  </div>
                </div>
              ))}
            </div>
            <div style={{marginTop:16,padding:"16px 20px",background:A.panel,border:`1px solid ${A.border}`,maxWidth:600}}>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.blue,letterSpacing:1.5,textTransform:"uppercase",marginBottom:12}}>Reply to Ticket — TKT-0088</div>
              <textarea className="admin-input" style={{minHeight:80,resize:"vertical",marginBottom:10,display:"block"}} placeholder="Type your response to the client..."/>
              <button className="abtn abtn-blue" style={{fontSize:11}}>Send Reply</button>
            </div>
          </>
        )}

        {/* COMPLETED */}
        {sec==="completed"&&(
          <>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.red,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>Completed & Delivered Orders</div>
            <div style={{background:A.panel,border:`1px solid ${A.border}`}}>
              {orders.filter(o=>["Completed","Delivered","Report Ready"].includes(o.status)).map(o=>(
                <div key={o.id} className="admin-table-row" style={{gridTemplateColumns:"140px 180px 1fr 110px 100px"}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:A.green}}>{o.id}</div>
                  <div style={{fontSize:11,color:A.text}}>{o.client}</div>
                  <div style={{fontSize:11,color:A.muted}}>{o.test}</div>
                  <div style={{fontSize:10,color:A.muted}}>{o.received}</div>
                  <AdminBadge status={o.status}/>
                </div>
              ))}
            </div>
          </>
        )}

        {sec==="samples"&&(
          <><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.red,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>Sample Tracker</div>
          <div style={{padding:40,textAlign:"center",background:A.panel,border:`1px solid ${A.border}`,color:A.muted}}>
            <div style={{fontSize:36,marginBottom:12}}>🧫</div>
            <div style={{fontSize:13}}>Sample tracker module — LIMS integration in progress.</div>
          </div></>
        )}
      </div>
    </AdminShell>
  );
}

