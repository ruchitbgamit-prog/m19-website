import { useState } from "react";
import { ORDERS, STATUS_COLOR } from "../../data/dashboardSamples.js";
import { NEWS, TEST_TYPES, STANDARDS } from "../../data/siteContent.js";
import { AIChat } from "../../components/dashboard/AIChat.jsx";
import { DashShell } from "../../components/dashboard/DashShell.jsx";
import { AIDock } from "../../components/dashboard/fiaWidgets.jsx";
import { Badge, Btn, Card, Eyebrow, FInput, FLabel, FSelect, Mono, Pill, ProgressBar, Serif, StatCard } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function LabDash({user,onBackToSite}){
  const [sec,setSec]=useState("home");
  const isPro=["Professional","Enterprise"].includes(user.tier);
  const isEnt=user.tier==="Enterprise";
  const nav=[
    {group:"Overview",items:[{id:"home",icon:"▦",label:"Dashboard"},{id:"news",icon:"▣",label:"News Feed"}]},
    {group:"Lab Testing",items:[{id:"submit",icon:"◈",label:"Submit Request"},{id:"orders",icon:"▦",label:"My Orders"},{id:"reports",icon:"▣",label:"Test Reports"},{id:"invoices",icon:"◆",label:"Invoices"}]},
    {group:"Intelligence",items:[{id:"bi",icon:"▦",label:"BI Dashboard",locked:!isPro},{id:"ai",icon:"◈",label:"AI Assistant",locked:!isEnt}]},
    {group:"Account",items:[{id:"profile",icon:"i",label:"My Profile"}]},
  ];
  return(
    <DashShell user={user} navGroups={nav} activeSection={sec} setSection={setSec} onBackToSite={onBackToSite}>
      <div className="fade-in">
        {sec==="home"&&<><div style={{marginBottom:24}}><Eyebrow>Lab Testing Dashboard</Eyebrow><Serif size={28} weight={600}>Good morning, <em style={{color:C.gold,fontStyle:"italic"}}>{user.name?.split(" ")[0]}.</em></Serif></div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:20}}>
            <StatCard label="Active Orders" value="3" icon="▦" color={C.teal}/><StatCard label="Reports Ready" value="2" icon="▣" color={C.gold}/><StatCard label="Tests This Month" value="11" icon="◈"/><StatCard label="Avg Turnaround" value="48h" icon="◆" color={C.tealLt}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:12}}>
            <Card>
              <Serif size={18} weight={600} style={{marginBottom:14}}>Recent Orders</Serif>
              {ORDERS.slice(0,3).map(o=>(
                <div key={o.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderBottom:"1px solid rgba(139,173,212,0.07)"}}>
                  <div><div style={{fontSize:12,fontWeight:600,color:C.white,marginBottom:2}}>{o.test}</div><Mono size={9} color={C.slate} spacing={0}>{o.id}</Mono></div>
                  <Badge color={STATUS_COLOR[o.status]}>{o.status}</Badge>
                </div>
              ))}
              <div style={{marginTop:10}}><Btn variant="outline-gold" size="sm" onClick={()=>setSec("orders")}>View All →</Btn></div>
            </Card>
            <Card>
              <Serif size={18} weight={600} style={{marginBottom:14}}>Quick Actions</Serif>
              {[{i:"🧪",l:"New Test Request",s:"submit"},{i:"📄",l:"Download Reports",s:"reports"},{i:"🧾",l:"View Invoices",s:"invoices"}].map(a=>(
                <div key={a.s} onClick={()=>setSec(a.s)} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 10px",marginBottom:4,background:"rgba(255,255,255,0.03)",cursor:"pointer",transition:"all 0.15s",borderLeft:"2px solid transparent"}} onMouseEnter={e=>{e.currentTarget.style.background="rgba(14,124,123,0.1)";e.currentTarget.style.borderLeftColor=C.teal;}} onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.03)";e.currentTarget.style.borderLeftColor="transparent";}}><span>{a.i}</span><span style={{fontSize:12}}>{a.l}</span></div>
              ))}
            </Card>
          </div></>}

        {sec==="submit"&&<><Eyebrow>Lab Testing</Eyebrow><Serif size={32} weight={600} style={{marginBottom:24}}>Submit a Test Request</Serif>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,maxWidth:680}}>
            {[{l:"Contact Name",p:"Your name"},{l:"Email",p:"For report delivery"},{l:"Organisation",p:"Company / Institute"},{l:"Phone",p:"WhatsApp preferred"}].map(f=><div key={f.l}><FLabel>{f.l}</FLabel><FInput placeholder={f.p}/></div>)}
            <div style={{gridColumn:"1/-1"}}><FLabel>Test Type Required</FLabel><FSelect placeholder="Select test..." options={TEST_TYPES}/></div>
            <div><FLabel>Standard</FLabel><FSelect placeholder="Select..." options={STANDARDS}/></div>
            <div><FLabel>Number of Samples</FLabel><FInput type="number" placeholder="e.g. 6 filters"/></div>
            <div><FLabel>Urgency</FLabel><FSelect options={["Standard (48–72 hours)","Urgent (Same day)","Scheduled (weekly batch)"]}/></div>
            <div><FLabel>Report Format</FLabel><FSelect options={["PDF + PoreSense Cloud","PDF only","Raw Data + PDF"]}/></div>
            <div style={{gridColumn:"1/-1"}}><FLabel>Sample Description</FLabel><textarea className="form-textarea" placeholder="Describe your sample, material type, regulatory context..."/></div>
          </div>
          <div style={{marginTop:18,display:"flex",gap:12}}><Btn variant="teal">Submit Request →</Btn><Btn variant="ghost">Save as Draft</Btn></div></>}

        {sec==="orders"&&<><Eyebrow>Lab Testing</Eyebrow><Serif size={32} weight={600} style={{marginBottom:20}}>My Orders</Serif>
          <div style={{display:"flex",gap:8,marginBottom:16,flexWrap:"wrap"}}>
            {["All","In Progress","Report Ready","Completed"].map(f=><Pill key={f} active={f==="All"}>{f}</Pill>)}
            <div style={{marginLeft:"auto"}}><Btn variant="teal" size="sm" onClick={()=>setSec("submit")}>+ New Request</Btn></div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:2}}>
            {ORDERS.map(o=>(
              <div key={o.id} style={{display:"grid",gridTemplateColumns:"130px 1fr 90px 110px 80px 90px",gap:14,alignItems:"center",padding:"14px 18px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(139,173,212,0.07)"}}>
                <Mono size={10} color={C.teal} spacing={0}>{o.id}</Mono>
                <div><div style={{fontSize:13,fontWeight:500,color:C.white}}>{o.test}</div><Mono size={9} color={C.slate} spacing={0}>{o.std}</Mono></div>
                <div style={{fontSize:11,color:C.slate}}>{o.date}</div>
                <Badge color={STATUS_COLOR[o.status]||C.slate}>{o.status}</Badge>
                <div style={{fontSize:11,color:o.eta!=="—"?C.gold:C.slate}}>{o.eta}</div>
                <Btn variant="ghost" size="sm">{o.status==="Report Ready"||o.status==="Completed"?"Download":"Track"}</Btn>
              </div>
            ))}</div></>}

        {sec==="reports"&&<><Eyebrow>Lab Testing</Eyebrow><Serif size={32} weight={600} style={{marginBottom:20}}>Test Reports</Serif>
          {ORDERS.filter(o=>["Completed","Report Ready"].includes(o.status)).map(o=>(
            <div key={o.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(139,173,212,0.07)",marginBottom:2}}>
              <div style={{display:"flex",alignItems:"center",gap:14}}><span style={{fontSize:28}}>📄</span><div><div style={{fontSize:13,fontWeight:600,color:C.white}}>{o.test}</div><Mono size={9} color={C.slate} spacing={0}>{o.id} · {o.date} · {o.std}</Mono></div></div>
              <div style={{display:"flex",gap:8}}><Btn variant="teal" size="sm">⬇ Download PDF</Btn><Btn variant="ghost" size="sm">View in PoreSense</Btn></div>
            </div>
          ))}</>}

        {sec==="invoices"&&<><Eyebrow>Billing</Eyebrow><Serif size={32} weight={600} style={{marginBottom:20}}>Invoices</Serif>
          {[{no:"INV-2026-0089",desc:"Filter Integrity × 6",total:"₹21,830",date:"10 Mar"},{no:"INV-2026-0072",desc:"MVTR Testing × 12",total:"₹28,320",date:"08 Mar"},{no:"INV-2026-0058",desc:"Pore Size × 3",total:"₹14,160",date:"01 Mar"}].map(inv=>(
            <div key={inv.no} style={{display:"grid",gridTemplateColumns:"150px 1fr 90px 130px 80px 80px",gap:14,alignItems:"center",padding:"14px 18px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(139,173,212,0.07)",marginBottom:2}}>
              <Mono size={10} color={C.teal} spacing={0}>{inv.no}</Mono>
              <div style={{fontSize:12,color:C.white}}>{inv.desc}</div>
              <div style={{fontSize:11,color:C.slate}}>{inv.date}</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:700,color:C.gold}}>{inv.total}</div>
              <Badge color={C.green}>Paid</Badge>
              <Btn variant="ghost" size="sm">🖨 Print</Btn>
            </div>
          ))}</>}

        {sec==="news"&&<><Eyebrow>Your Feed</Eyebrow><Serif size={32} weight={600} style={{marginBottom:20}}>News & Updates</Serif>
          <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap"}}>{["All","Regulatory","Platform","Standards","Science"].map(f=><Pill key={f} active={f==="All"}>{f}</Pill>)}</div>
          {NEWS.map(n=>(
            <div key={n.title} style={{padding:"18px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(139,173,212,0.07)",marginBottom:2,cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.05)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.03)"}>
              <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
                <div style={{flexShrink:0}}><Badge color={n.tag==="M19"?C.gold:n.tag==="Regulatory"?C.red:C.teal}>{n.tag}</Badge><Mono size={9} color={C.slate} spacing={0} style={{marginTop:6}}>{n.date} Mar 2026</Mono></div>
                <div><div style={{fontSize:14,fontWeight:500,color:C.white,lineHeight:1.4,marginBottom:4}}>{n.title}</div><Badge color={C.slate}>{n.cat}</Badge></div>
              </div>
            </div>
          ))}</>}

        {sec==="bi"&&<><Eyebrow>Intelligence</Eyebrow><Serif size={32} weight={600} style={{marginBottom:20}}>BI Dashboard</Serif>
          {!isPro?<div style={{padding:40,textAlign:"center",background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.2)"}}><div style={{fontSize:40,marginBottom:12}}>📊</div><Serif size={22} weight={600} style={{marginBottom:8}}>Professional Plan Required</Serif><div style={{fontSize:13,color:C.slate,marginBottom:16}}>Upgrade to access BI dashboards and SPC analytics.</div><Btn variant="gold">Upgrade Plan →</Btn></div>:(
          <><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16}}><StatCard label="Tests This Month" value="11" icon="🧪"/><StatCard label="Avg Pore Size" value="0.22μm" color={C.teal}/><StatCard label="Pass Rate" value="97.3%" color={C.green}/></div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <Card><Serif size={18} weight={600} style={{marginBottom:14}}>Volume by Month</Serif>{["Jan","Feb","Mar"].map((m,i)=><div key={m} style={{marginBottom:10}}><ProgressBar label={`${m} 2026`} value={[65,78,90][i]} color={C.teal}/></div>)}</Card>
            <Card><Serif size={18} weight={600} style={{marginBottom:14}}>Tests by Type</Serif>{[["Filter Integrity",45,C.teal],["Pore Size",28,C.navyMid],["MVTR",18,C.gold],["Bubble Point",9,C.purple]].map(([l,v,c])=><div key={l} style={{marginBottom:10}}><ProgressBar label={l} value={v} color={c}/></div>)}</Card>
          </div></>)}</>}

        {sec==="ai"&&<><Eyebrow>AI Assistant</Eyebrow><Serif size={32} weight={600} style={{marginBottom:16}}>PoreSense AI</Serif>
          {!isEnt?<div style={{padding:40,textAlign:"center",background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.2)"}}><div style={{fontSize:40,marginBottom:12}}>🤖</div><Serif size={22} weight={600} style={{marginBottom:8}}>Enterprise Plan Required</Serif><div style={{fontSize:13,color:C.slate,marginBottom:16}}>Upgrade for AI quality assistant and predictive analytics.</div><Btn variant="gold">Upgrade to Enterprise →</Btn></div>:<AIChat context="lab"/>}</>}

        {sec==="profile"&&<><Eyebrow>Account</Eyebrow><Serif size={32} weight={600} style={{marginBottom:20}}>My Profile</Serif>
          <div style={{display:"grid",gridTemplateColumns:"200px 1fr",gap:16,maxWidth:700}}>
            <Card style={{textAlign:"center",padding:"28px 16px"}}>
              <div style={{width:64,height:64,borderRadius:"50%",background:`linear-gradient(135deg,${C.navyMid},${C.teal})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,fontWeight:700,margin:"0 auto 14px"}}>{user.name?.split(" ").map(w=>w[0]).join("").slice(0,2)||"U"}</div>
              <Serif size={18} weight={600} style={{marginBottom:4}}>{user.name}</Serif>
              <Mono size={8} color={C.slate} spacing={1} style={{marginBottom:12}}>Member since Mar 2026</Mono>
              <Badge color={C.gold}>{user.tier}</Badge>
            </Card>
            <Card>{[["Name",user.name],["Type","Lab Testing"],["Plan",user.tier],["Organisation",user.org||"Porelab Scientific"],["Country","India"]].map(([k,v])=>(
              <div key={k} style={{display:"flex",gap:16,padding:"9px 0",borderBottom:"1px solid rgba(139,173,212,0.07)"}}>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:C.slate,letterSpacing:1,textTransform:"uppercase",width:110,flexShrink:0}}>{k}</div>
                <div style={{fontSize:13,color:C.white}}>{v}</div>
              </div>
            ))}<div style={{marginTop:14,display:"flex",gap:10}}><Btn variant="teal" size="sm">Edit Profile</Btn><Btn variant="ghost" size="sm">Change Password</Btn></div></Card>
          </div></>}
      </div>
    </DashShell>
  );
}
