import { useState } from "react";
import { SKUS } from "../../data/adminSamples.js";
import { AdminBadge } from "../../components/admin/AdminBadge.jsx";
import { AdminShell } from "../../components/admin/AdminShell.jsx";
import { A } from "../../theme/adminColors.js";

export function SuperAdminDash({user,onSignOut}){
  const [sec,setSec]=useState("skus");
  const [skus,setSkus]=useState(SKUS);
  const [editingPrice,setEditingPrice]=useState(null);
  const [newPrice,setNewPrice]=useState("");

  const nav=[
    {group:"Catalogue",items:[{id:"skus",icon:"📦",label:"Product SKUs"},{id:"pricing",icon:"💰",label:"Pricing Manager"},{id:"services",icon:"🧪",label:"Lab Test Listings"}]},
    {group:"Content",items:[{id:"content",icon:"✏️",label:"Page Content"},{id:"hero",icon:"🖼️",label:"Hero & Banners"}]},
    {group:"Users & Orders",items:[{id:"users",icon:"👥",label:"User Database"},{id:"allorders",icon:"📋",label:"All Orders"}]},
    {group:"System",items:[{id:"integrations",icon:"🔗",label:"API & Integrations"},{id:"logs",icon:"📝",label:"System Logs"}]},
  ];

  const CAT_COLOR={Instrument:A.blue,Service:A.green,"Lab Test":A.amber};

  return(
    <AdminShell user={user} navGroups={nav} activeSection={sec} setSection={setSec} onSignOut={onSignOut} roleColor={A.blue}>
      <div className="fade-in">

        {/* SKU MANAGEMENT */}
        {sec==="skus"&&(
          <>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.blue,letterSpacing:2,textTransform:"uppercase"}}>Product SKU Catalogue — {skus.length} items</div>
              <div style={{display:"flex",gap:8}}>
                <input className="admin-input" placeholder="Search SKU..." style={{width:200,fontSize:11}}/>
                <button className="abtn abtn-blue" style={{fontSize:11,whiteSpace:"nowrap"}}>+ Add SKU</button>
              </div>
            </div>
            <div style={{display:"flex",gap:8,marginBottom:12}}>
              {["All","Instrument","Service","Lab Test"].map(f=><button key={f} className="abtn abtn-ghost" style={{fontSize:10,padding:"4px 12px"}}>{f}</button>)}
            </div>
            <div style={{background:A.panel,border:`1px solid ${A.border}`}}>
              <div className="admin-table-hdr" style={{gridTemplateColumns:"100px 1fr 100px 140px 80px 60px 100px"}}>
                {["SKU ID","Product Name","Category","Price","Stock","Live","Actions"].map(h=>(
                  <div key={h} style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.dim,letterSpacing:1.5,textTransform:"uppercase"}}>{h}</div>
                ))}
              </div>
              {skus.map((sku,idx)=>(
                <div key={sku.id} className="admin-table-row" style={{gridTemplateColumns:"100px 1fr 100px 140px 80px 60px 100px"}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:A.blue}}>{sku.id}</div>
                  <div style={{fontSize:12,color:A.text,fontWeight:500}}>{sku.name}</div>
                  <span style={{padding:"2px 8px",fontSize:9,fontFamily:"'DM Mono',monospace",background:`${CAT_COLOR[sku.cat]}18`,color:CAT_COLOR[sku.cat],border:`1px solid ${CAT_COLOR[sku.cat]}33`,alignSelf:"center"}}>{sku.cat}</span>
                  {editingPrice===idx?(
                    <div style={{display:"flex",gap:6}}>
                      <input className="admin-input" value={newPrice} onChange={e=>setNewPrice(e.target.value)} style={{fontSize:11,padding:"4px 8px"}}/>
                      <button className="abtn abtn-green" style={{fontSize:9,padding:"4px 8px"}} onClick={()=>{setSkus(p=>p.map((s,i)=>i===idx?{...s,price:newPrice}:s));setEditingPrice(null);}}>✓</button>
                    </div>
                  ):(
                    <div style={{display:"flex",gap:8,alignItems:"center"}}>
                      <span style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:A.gold}}>{sku.price}</span>
                      <button className="abtn abtn-ghost" style={{fontSize:8,padding:"2px 6px"}} onClick={()=>{setEditingPrice(idx);setNewPrice(sku.price);}}>Edit</button>
                    </div>
                  )}
                  <div style={{fontSize:11,color:A.muted}}>{sku.stock}</div>
                  <div style={{width:32,height:16,background:sku.active?A.green:A.dim,borderRadius:8,cursor:"pointer",position:"relative",transition:"background 0.2s"}} onClick={()=>setSkus(p=>p.map((s,i)=>i===idx?{...s,active:!s.active}:s))}>
                    <div style={{width:12,height:12,background:A.text,borderRadius:"50%",position:"absolute",top:2,left:sku.active?16:2,transition:"left 0.2s"}}/>
                  </div>
                  <div style={{display:"flex",gap:4}}>
                    <button className="abtn abtn-ghost" style={{fontSize:9,padding:"3px 8px"}}>Edit</button>
                    <button className="abtn" style={{fontSize:9,padding:"3px 8px",background:A.redDim,color:A.redLt,border:`1px solid ${A.red}33`}}>Del</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* PRICING */}
        {sec==="pricing"&&(
          <>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.blue,letterSpacing:2,textTransform:"uppercase",marginBottom:16}}>Pricing Manager</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              {["Lab Testing","Instruments","Membership Tiers","AMC Contracts"].map(cat=>(
                <div key={cat} className="admin-card">
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.blue,letterSpacing:1.5,textTransform:"uppercase",marginBottom:14}}>{cat}</div>
                  {skus.filter(s=>cat==="Lab Testing"?s.cat==="Lab Test":cat==="Instruments"?s.cat==="Instrument":s.cat==="Service").slice(0,4).map(s=>(
                    <div key={s.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:`1px solid ${A.border}`}}>
                      <div style={{fontSize:11,color:A.text}}>{s.name}</div>
                      <div style={{display:"flex",gap:8,alignItems:"center"}}>
                        <span style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:A.gold}}>{s.price}</span>
                        <button className="abtn abtn-ghost" style={{fontSize:9,padding:"2px 8px"}}>Edit</button>
                      </div>
                    </div>
                  ))}
                  {cat==="Membership Tiers"&&[["Essential","On demand"],["Professional","₹24,000/yr"],["Enterprise","₹96,000/yr"]].map(([t,p])=>(
                    <div key={t} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:`1px solid ${A.border}`}}>
                      <div style={{fontSize:11,color:A.text}}>{t}</div>
                      <div style={{display:"flex",gap:8,alignItems:"center"}}>
                        <span style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:A.gold}}>{p}</span>
                        <button className="abtn abtn-ghost" style={{fontSize:9,padding:"2px 8px"}}>Edit</button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}

        {/* CONTENT EDITOR */}
        {sec==="content"&&(
          <>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.blue,letterSpacing:2,textTransform:"uppercase",marginBottom:16}}>Page Content Manager</div>
            <div style={{display:"grid",gridTemplateColumns:"240px 1fr",gap:16}}>
              <div className="admin-card" style={{padding:0}}>
                {[["home","Home Page"],["platform","Platform Page"],["instruments","Instruments"],["testing","Lab Testing"],["about","About / Vision"],["footer","Footer"],["seo","SEO & Meta"]].map(([id,label])=>(
                  <div key={id} style={{padding:"10px 16px",cursor:"pointer",borderLeft:"2px solid transparent",fontSize:12,color:A.muted,transition:"all 0.1s",borderBottom:`1px solid ${A.border}`}} onMouseEnter={e=>{e.currentTarget.style.color=A.text;e.currentTarget.style.borderLeftColor=A.blue;}} onMouseLeave={e=>{e.currentTarget.style.color=A.muted;e.currentTarget.style.borderLeftColor="transparent";}}>{label}</div>
                ))}
              </div>
              <div className="admin-card">
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.blue,letterSpacing:1.5,textTransform:"uppercase",marginBottom:14}}>Home Page — Hero Section</div>
                {[{l:"Hero Headline",v:"Material\nIntelligence.\nReimagined."},{l:"Hero Subheading",v:"India's first integrated material intelligence platform — precision instruments, AI-powered analytics, and cloud-based quality intelligence, unified under PoreSense™."},{l:"Primary CTA Text",v:"Start Free →"},{l:"Secondary CTA",v:"Explore Platform"}].map(f=>(
                  <div key={f.l} style={{marginBottom:14}}>
                    <label style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted,letterSpacing:1.5,textTransform:"uppercase",display:"block",marginBottom:6}}>{f.l}</label>
                    {f.v.includes("\n")?<textarea className="admin-input" defaultValue={f.v} style={{minHeight:72,resize:"vertical"}}/>:<input className="admin-input" defaultValue={f.v}/>}
                  </div>
                ))}
                <div style={{display:"flex",gap:10}}>
                  <button className="abtn abtn-blue" style={{fontSize:11}}>Save Changes</button>
                  <button className="abtn abtn-ghost" style={{fontSize:11}}>Preview</button>
                  <button className="abtn abtn-ghost" style={{fontSize:11}}>Revert</button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* USER DATABASE */}
        {sec==="users"&&(
          <>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.blue,letterSpacing:2,textTransform:"uppercase"}}>User Database</div>
              <input className="admin-input" placeholder="Search by name, email, org..." style={{width:260,fontSize:11}}/>
            </div>
            <div style={{background:A.panel,border:`1px solid ${A.border}`}}>
              <div className="admin-table-hdr" style={{gridTemplateColumns:"1fr 200px 130px 90px 80px 80px"}}>
                {["Name / Email","Organisation","Platform","Tier","Joined","Status"].map(h=>(
                  <div key={h} style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.dim,letterSpacing:1.5,textTransform:"uppercase"}}>{h}</div>
                ))}
              </div>
              {[
                {name:"Dr. Priya Nair",email:"priya@serum.in",org:"Serum Institute",platform:"Lab",tier:"Enterprise",joined:"Jan 2026",status:"Active"},
                {name:"Rajesh Kumar",email:"rajesh@ril.com",org:"Reliance Industries",platform:"Instrument",tier:"Analytics",joined:"Feb 2026",status:"Active"},
                {name:"Arjun Shah",email:"arjun@iitb.ac.in",org:"IIT Bombay",platform:"Academic",tier:"Scholar",joined:"Mar 2026",status:"Active"},
                {name:"Meena Iyer",email:"meena@bharat.bio",org:"Bharat Biotech",platform:"Lab",tier:"Professional",joined:"Mar 2026",status:"Pending"},
                {name:"Col. Suresh Nair",email:"suresh@drdo.gov.in",org:"DRDO — CBRDE",platform:"Lab + Inst",tier:"Enterprise",joined:"Dec 2025",status:"Active"},
              ].map(u=>(
                <div key={u.email} className="admin-table-row" style={{gridTemplateColumns:"1fr 200px 130px 90px 80px 80px"}}>
                  <div><div style={{fontSize:12,fontWeight:500,color:A.text}}>{u.name}</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted}}>{u.email}</div></div>
                  <div style={{fontSize:11,color:A.muted}}>{u.org}</div>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:A.blue}}>{u.platform}</div>
                  <span style={{padding:"2px 8px",fontSize:9,fontFamily:"'DM Mono',monospace",background:A.amberDim,color:A.amber,border:`1px solid ${A.amber}33`,alignSelf:"center"}}>{u.tier}</span>
                  <div style={{fontSize:10,color:A.dim}}>{u.joined}</div>
                  <span className="admin-badge" style={{background:u.status==="Active"?A.greenDim:A.amberDim,color:u.status==="Active"?A.green:A.amber,borderColor:u.status==="Active"?`${A.green}44`:`${A.amber}44`}}>{u.status}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {sec==="allorders"&&(
          <><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.blue,letterSpacing:2,textTransform:"uppercase",marginBottom:16}}>All Orders — Full Listing</div>
          <div style={{background:A.panel,border:`1px solid ${A.border}`}}>
            <div className="admin-table-hdr" style={{gridTemplateColumns:"140px 180px 1fr 110px 100px 110px"}}>
              {["Order ID","Client","Test","Std","Received","Status"].map(h=><div key={h} style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.dim,letterSpacing:1.5,textTransform:"uppercase"}}>{h}</div>)}
            </div>
            {LAB_ORDERS.map(o=>(
              <div key={o.id} className="admin-table-row" style={{gridTemplateColumns:"140px 180px 1fr 110px 100px 110px"}}>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:A.blue}}>{o.id}</div>
                <div style={{fontSize:11,color:A.text}}>{o.client}</div>
                <div style={{fontSize:11,color:A.muted}}>{o.test}</div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.dim}}>{o.std}</div>
                <div style={{fontSize:10,color:A.muted}}>{o.received}</div>
                <AdminBadge status={o.status}/>
              </div>
            ))}
          </div></>
        )}

        {(sec==="hero"||sec==="integrations"||sec==="logs"||sec==="services")&&(
          <div style={{padding:40,textAlign:"center",background:A.panel,border:`1px solid ${A.border}`,color:A.muted}}>
            <div style={{fontSize:36,marginBottom:12}}>{sec==="hero"?"🖼️":sec==="integrations"?"🔗":"📝"}</div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:A.text,marginBottom:8}}>{{hero:"Hero & Banner Manager",integrations:"API & Integration Settings",logs:"System Logs",services:"Lab Test Service Listings"}[sec]}</div>
            <div style={{fontSize:13}}>Module in development — available in next release.</div>
          </div>
        )}
      </div>
    </AdminShell>
  );
}

