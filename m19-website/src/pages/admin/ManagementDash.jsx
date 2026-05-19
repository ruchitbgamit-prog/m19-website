import { useState } from "react";
import { LAB_ORDERS } from "../../data/adminSamples.js";
import { AdminBadge } from "../../components/admin/AdminBadge.jsx";
import { AdminShell } from "../../components/admin/AdminShell.jsx";
import { A } from "../../theme/adminColors.js";

export function ManagementDash({user,onSignOut}){
  const [sec,setSec]=useState("overview");

  const nav=[
    {group:"Operations",items:[{id:"overview",icon:"📊",label:"Operations Overview"},{id:"orders",icon:"📦",label:"Order Pipeline"},{id:"revenue",icon:"💰",label:"Revenue & Billing"}]},
    {group:"Performance",items:[{id:"kpi",icon:"📈",label:"Business KPIs"},{id:"team",icon:"👥",label:"Team Performance"},{id:"analytics",icon:"🌐",label:"Platform Analytics"}]},
    {group:"Intelligence",items:[{id:"customers",icon:"🏢",label:"Customer Intelligence"},{id:"reports",icon:"📄",label:"Executive Reports"}]},
  ];

  const SPARKDATA_ORDERS=[6,9,7,11,8,13,11,14,10,16,12,11];
  const SPARKDATA_REV=[42,58,51,67,54,78,71,85,63,92,81,74];
  const SPARKDATA_USERS=[12,18,15,22,19,28,24,31,26,35,29,33];

  const Sparkline=({data,color})=>{
    const max=Math.max(...data);
    return(
      <div className="sparkline">
        {data.map((v,i)=><div key={i} className="spark-bar" style={{height:`${(v/max)*100}%`,background:i===data.length-1?color:`${color}55`}}/>)}
      </div>
    );
  };

  const PAGE_STATS=[
    {page:"Home",views:"12,840",bounce:"34%",time:"2:42",conv:"4.8%",trend:"+12%"},
    {page:"Lab Testing",views:"8,210",bounce:"28%",time:"3:55",conv:"9.2%",trend:"+24%"},
    {page:"Instruments",views:"6,540",bounce:"41%",time:"2:18",conv:"5.6%",trend:"+8%"},
    {page:"Platform",views:"4,890",bounce:"38%",time:"3:12",conv:"6.1%",trend:"+31%"},
    {page:"About",views:"2,340",bounce:"52%",time:"1:48",conv:"1.4%",trend:"+3%"},
    {page:"Register",views:"1,820",bounce:"44%",time:"4:30",conv:"62%",trend:"+18%"},
  ];

  return(
    <AdminShell user={user} navGroups={nav} activeSection={sec} setSection={setSec} onSignOut={onSignOut} roleColor={A.gold}>
      <div className="fade-in">

        {/* OVERVIEW */}
        {sec==="overview"&&(
          <>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
              <div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>Management Dashboard</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:600,color:A.text}}>Good morning, <em style={{fontStyle:"italic",color:A.gold}}>{user.name?.split(" ")[0]}.</em></div>
              </div>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted,letterSpacing:1}}>LIVE DATA · {new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}</div>
            </div>

            {/* Primary KPIs */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:20}}>
              {[
                {label:"Revenue MTD",value:"₹38.4L",sub:"vs ₹31.2L last month",c:A.gold,spark:SPARKDATA_REV,delta:"+23.1%"},
                {label:"Orders This Month",value:"47",sub:"11 pending · 2 overdue",c:A.blue,spark:SPARKDATA_ORDERS,delta:"+18.4%"},
                {label:"Active Users",value:"284",sub:"38 new this month",c:A.green,spark:SPARKDATA_USERS,delta:"+15.6%"},
                {label:"Avg Test Turnaround",value:"41h",sub:"vs 48h target",c:A.amber,spark:[48,45,43,46,42,44,41,43,40,42,41,41],delta:"-14.6%"},
              ].map(k=>(
                <div key={k.label} className="kpi-card" style={{borderLeftColor:k.c,paddingBottom:16}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.muted,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>{k.label}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:700,color:k.c,lineHeight:1,marginBottom:4}}>{k.value}</div>
                  <div style={{fontSize:10,color:A.muted,marginBottom:10}}>{k.sub}</div>
                  <Sparkline data={k.spark} color={k.c}/>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:parseFloat(k.delta)>0?A.green:A.red,marginTop:6}}>{k.delta} vs last month</div>
                </div>
              ))}
            </div>

            {/* Secondary grid */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
              {/* Order pipeline */}
              <div className="admin-card">
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:14}}>Order Pipeline Status</div>
                {[["Received / Awaiting Testing",3,A.amber],["Currently in Testing",4,A.blue],["Report Pending Upload",2,A.amber],["Report Ready — Pending Delivery",2,A.green],["Completed This Month",38,A.green]].map(([l,v,c])=>(
                  <div key={l} style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
                    <div style={{fontSize:11,color:A.muted,width:220,flexShrink:0}}>{l}</div>
                    <div style={{flex:1,height:6,background:A.dim,borderRadius:3,overflow:"hidden"}}><div style={{width:`${(v/38)*100}%`,height:"100%",background:c,borderRadius:3}}/></div>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:12,color:c,width:20,textAlign:"right"}}>{v}</div>
                  </div>
                ))}
              </div>

              {/* Revenue by segment */}
              <div className="admin-card">
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:14}}>Revenue by Segment — March 2026</div>
                {[["Instrument Sales",52,A.blue,"₹19.96L"],["Lab Testing",28,A.green,"₹10.75L"],["AMC Contracts",12,A.amber,"₹4.61L"],["Platform SaaS",8,A.gold,"₹3.07L"]].map(([l,pct,c,v])=>(
                  <div key={l} style={{marginBottom:12}}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                      <span style={{fontSize:11,color:A.muted}}>{l}</span>
                      <div style={{display:"flex",gap:8}}>
                        <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:c}}>{pct}%</span>
                        <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:A.gold}}>{v}</span>
                      </div>
                    </div>
                    <div style={{height:4,background:A.dim,borderRadius:2}}><div style={{width:`${pct}%`,height:"100%",background:c,borderRadius:2}}/></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alerts */}
            <div className="admin-card">
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>Operational Alerts</div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {[
                  {type:"warning",icon:"⚠️",msg:"2 orders past ETA — M19-2026-0418 (DRDO, +1 day), M19-2026-0415 (Bharat Biotech, +12h)"},
                  {type:"info",icon:"📋",msg:"3 invoices unpaid for 15+ days — total outstanding ₹64,510"},
                  {type:"success",icon:"✅",msg:"PoreSense Cloud v2.1 deployed successfully — 284 active sessions"},
                  {type:"info",icon:"🎫",msg:"2 open tickets unresolved for >24h — requires technician follow-up"},
                ].map((a,i)=>(
                  <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"10px 14px",background:{warning:A.amberDim,info:A.blueDim,success:A.greenDim}[a.type],border:`1px solid ${{warning:A.amber,info:A.blue,success:A.green}[a.type]}33`}}>
                    <span style={{fontSize:14,flexShrink:0}}>{a.icon}</span>
                    <div style={{fontSize:12,color:A.text,lineHeight:1.5}}>{a.msg}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* PLATFORM ANALYTICS */}
        {sec==="analytics"&&(
          <>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:16}}>Platform Analytics — Page Utilisation</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16}}>
              {[{l:"Total Monthly Sessions",v:"38,640",c:A.blue},{l:"Avg Session Duration",v:"2:54",c:A.gold},{l:"Overall Conversion",c:A.green,v:"6.8%"}].map(k=>(
                <div key={k.l} className="kpi-card" style={{borderLeftColor:k.c}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.muted,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>{k.l}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:700,color:k.c,lineHeight:1}}>{k.v}</div>
                </div>
              ))}
            </div>
            <div className="admin-card">
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:14}}>Page Performance — March 2026</div>
              <div style={{background:A.bg,border:`1px solid ${A.border}`,marginBottom:0}}>
                <div className="admin-table-hdr" style={{gridTemplateColumns:"130px 100px 80px 80px 80px 80px"}}>
                  {["Page","Views","Bounce","Avg Time","Conversion","Trend"].map(h=><div key={h} style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.dim,letterSpacing:1.5,textTransform:"uppercase"}}>{h}</div>)}
                </div>
                {PAGE_STATS.map(p=>(
                  <div key={p.page} className="admin-table-row" style={{gridTemplateColumns:"130px 100px 80px 80px 80px 80px"}}>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:A.text}}>{p.page}</div>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:A.blue}}>{p.views}</div>
                    <div style={{fontSize:11,color:parseFloat(p.bounce)>45?A.red:A.muted}}>{p.bounce}</div>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:A.muted}}>{p.time}</div>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:parseFloat(p.conv)>8?A.green:A.gold}}>{p.conv}</div>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:A.green}}>{p.trend}</div>
                  </div>
                ))}
              </div>
              <div style={{marginTop:16,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
                {[["Top Traffic Source","Direct / Referral — 48%"],["Top Converting Page","Lab Testing — 9.2%"],["Best Performing CTA","Get Quote modal — 8.4%"]].map(([l,v])=>(
                  <div key={l} style={{padding:"12px 14px",background:A.bg,border:`1px solid ${A.border}`}}>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.dim,letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>{l}</div>
                    <div style={{fontSize:12,fontWeight:500,color:A.gold}}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ORDER PIPELINE */}
        {sec==="orders"&&(
          <>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:16}}>Order Pipeline — Management View</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:2,marginBottom:20}}>
              {[["Received",3,A.muted],["Testing",4,A.blue],["Report Pending",2,A.amber],["Report Ready",2,A.green],["Delivered",38,A.dim]].map(([status,count,c])=>(
                <div key={status} style={{padding:"16px 14px",background:A.panel,border:`1px solid ${A.border}`,borderTop:`3px solid ${c}`,textAlign:"center"}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:700,color:c,lineHeight:1,marginBottom:4}}>{count}</div>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.muted,letterSpacing:1,textTransform:"uppercase"}}>{status}</div>
                </div>
              ))}
            </div>
            <div className="admin-card">
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:14}}>Overdue / At-Risk Orders</div>
              {LAB_ORDERS.filter(o=>["Testing","Report Pending"].includes(o.status)&&o.priority==="High").map(o=>(
                <div key={o.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:`1px solid ${A.border}`}}>
                  <div style={{display:"flex",gap:16,alignItems:"center"}}>
                    <span style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:A.blue}}>{o.id}</span>
                    <div><div style={{fontSize:12,fontWeight:500,color:A.text}}>{o.client}</div><div style={{fontSize:11,color:A.muted}}>{o.test}</div></div>
                  </div>
                  <div style={{display:"flex",gap:12,alignItems:"center"}}>
                    <div style={{textAlign:"right"}}><div style={{fontSize:10,color:A.muted}}>ETA: {o.eta}</div><div style={{fontSize:10,color:A.red}}>Assigned: {o.tech}</div></div>
                    <AdminBadge status={o.status}/>
                    <span style={{padding:"2px 8px",fontSize:9,fontFamily:"'DM Mono',monospace",background:A.redDim,color:A.redLt}}>HIGH</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* REVENUE */}
        {sec==="revenue"&&(
          <>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:16}}>Revenue & Billing</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16}}>
              {[{l:"Revenue MTD",v:"₹38.4L",c:A.gold},{l:"Outstanding Invoices",v:"₹64,510",c:A.amber},{l:"ARR (Projected)",v:"₹4.6Cr",c:A.green}].map(k=>(
                <div key={k.l} className="kpi-card" style={{borderLeftColor:k.c}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.muted,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>{k.l}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:700,color:k.c,lineHeight:1}}>{k.v}</div>
                </div>
              ))}
            </div>
            <div className="admin-card">
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:14}}>Monthly Revenue Trend — FY 2025–26</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(12,1fr)",gap:4,alignItems:"flex-end",height:120,marginBottom:8}}>
                {[28,31,26,34,29,38,33,41,36,45,40,38].map((v,i)=>(
                  <div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",height:"100%",justifyContent:"flex-end"}}>
                    <div style={{width:"100%",background:i===11?A.gold:`${A.gold}55`,borderRadius:"2px 2px 0 0",height:`${(v/45)*100}%`,transition:"all 0.3s"}}/>
                  </div>
                ))}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(12,1fr)",gap:4}}>
                {["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"].map(m=>(
                  <div key={m} style={{fontFamily:"'DM Mono',monospace",fontSize:7,color:A.dim,textAlign:"center"}}>{m}</div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* KPI */}
        {sec==="kpi"&&(
          <>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:16}}>Business KPIs — March 2026</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              {[
                {title:"Growth Metrics",items:[["Revenue YoY Growth","34.2%",A.green,34],[" Active Users Growth","28.6%",A.green,28],["Order Volume Growth","21.4%",A.green,21],["Platform SaaS Adoption","8.4% of revenue",A.blue,8]]},
                {title:"Quality & Operations",items:[["Test Pass Rate","97.3%",A.green,97],["On-Time Delivery","91.2%",A.amber,91],["Client Retention","94.8%",A.green,94],["Avg Resolution Time","6.2h tickets",A.blue,62]]},
                {title:"Platform Health",items:[["PoreSense Cloud Uptime","99.97%",A.green,99],["Avg Page Load Time","1.4s",A.green,72],["Mobile Usage","38% of sessions",A.blue,38],["Conversion Rate","6.8%",A.gold,68]]},
                {title:"Financial Health",items:[["Gross Margin","61.4%",A.green,61],["Recurring Revenue %","22.8%",A.gold,22],["Outstanding > 30d","₹64,510",A.amber,15],["Cash Collection Rate","94.2%",A.green,94]]},
              ].map(section=>(
                <div key={section.title} className="admin-card">
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:14}}>{section.title}</div>
                  {section.items.map(([l,v,c,bar])=>(
                    <div key={l} style={{marginBottom:12}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                        <span style={{fontSize:11,color:A.muted}}>{l}</span>
                        <span style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:c,fontWeight:600}}>{v}</span>
                      </div>
                      <div style={{height:2,background:A.dim,borderRadius:1}}><div style={{width:`${bar}%`,height:"100%",background:c,borderRadius:1}}/></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}

        {(sec==="team"||sec==="customers"||sec==="reports")&&(
          <div style={{padding:40,textAlign:"center",background:A.panel,border:`1px solid ${A.border}`,color:A.muted}}>
            <div style={{fontSize:36,marginBottom:12}}>{sec==="team"?"👥":sec==="customers"?"🏢":"📄"}</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:A.text,marginBottom:8}}>{{team:"Team Performance",customers:"Customer Intelligence",reports:"Executive Reports"}[sec]}</div>
            <div style={{fontSize:13}}>Module in development — available in next release.</div>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
