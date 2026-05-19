import { Btn, Mono, Serif } from "../ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function DashShell({user,navGroups,activeSection,setSection,onBackToSite,children}){
  const initials=user.name?.split(" ").map(w=>w[0]).join("").slice(0,2)||"U";
  const activeLabel=navGroups.flatMap(g=>g.items).find(i=>i.id===activeSection)?.label||"Dashboard";
  return(
    <div className="dash-layout">
      <aside className="dash-sidebar">
        <div style={{padding:"16px 18px",borderBottom:"1px solid rgba(139,173,212,0.1)"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div className="pub-nav-mark" style={{width:30,height:30,fontSize:15}}>M</div>
            <div><div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:600,letterSpacing:1}}>M19</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:7,color:C.slate,letterSpacing:1.5}}>PORESENSE PLATFORM</div></div>
          </div>
        </div>
        <div style={{padding:"14px 18px",borderBottom:"1px solid rgba(139,173,212,0.08)"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
            <div style={{width:34,height:34,borderRadius:"50%",background:`linear-gradient(135deg,${C.navyMid},${C.teal})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,flexShrink:0}}>{initials}</div>
            <div style={{overflow:"hidden"}}><div style={{fontSize:13,fontWeight:600,color:C.white,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{user.name}</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:C.slate,letterSpacing:1,textTransform:"uppercase"}}>{user.type==="all"?"All Access":user.type==="lab"?"Lab":user.type==="inst"?"Instrument":"Academic"}</div></div>
          </div>
          <Badge color={user.tier==="Enterprise"||user.tier==="Intelligence"||user.tier==="Fellow"?C.gold:user.tier==="Professional"||user.tier==="Analytics"||user.tier==="Scholar"?C.teal:C.slate}>{user.tier}</Badge>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"10px 0"}}>
          {navGroups.map(g=>(
            <div key={g.group}>
              <div className="nav-section">{g.group}</div>
              {g.items.map(item=>(
                <div key={item.id} className={`nav-item${activeSection===item.id?" active":""}`} onClick={()=>setSection(item.id)}>
                  <span style={{fontSize:14,opacity:activeSection===item.id?1:0.6}}>{item.icon}</span>
                  <span style={{fontSize:12,color:activeSection===item.id?C.white:C.slate,fontWeight:activeSection===item.id?600:400}}>{item.label}</span>
                  {item.locked&&<span style={{marginLeft:"auto",fontFamily:"'DM Mono',monospace",fontSize:8,color:C.gold,letterSpacing:1,border:"1px solid rgba(201,168,76,0.3)",padding:"1px 5px"}}>PRO</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{padding:"10px 18px",borderTop:"1px solid rgba(139,173,212,0.08)"}}>
          <div onClick={onBackToSite} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",cursor:"pointer",opacity:0.6}} onMouseEnter={e=>e.currentTarget.style.opacity="1"} onMouseLeave={e=>e.currentTarget.style.opacity="0.6"}>
            <span>🌐</span><span style={{fontSize:11,color:C.slate}}>Back to Website</span>
          </div>
          <div onClick={()=>window.location.reload()} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",cursor:"pointer",opacity:0.6}} onMouseEnter={e=>e.currentTarget.style.opacity="1"} onMouseLeave={e=>e.currentTarget.style.opacity="0.6"}>
            <span>🚪</span><span style={{fontSize:11,color:C.slate}}>Sign Out</span>
          </div>
        </div>
      </aside>
      <div className="dash-main">
        <div className="dash-topbar">
          <Serif size={20} weight={600}>{activeLabel}</Serif>
          <div style={{display:"flex",alignItems:"center",gap:20}}>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:C.slate,letterSpacing:1}}>{new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}</div>
            <div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:7,height:7,borderRadius:"50%",background:C.green,boxShadow:`0 0 6px ${C.green}`,animation:"pulse 2s infinite"}}/><span style={{fontSize:10,color:C.slate}}>Connected</span></div>
          </div>
        </div>
        <div style={{flex:1,padding:28,overflowY:"auto"}}>{children}</div>
      </div>
    </div>
  );
}
