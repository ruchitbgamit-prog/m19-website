import { A } from "../../theme/adminColors.js";

export function AdminShell({user,navGroups,activeSection,setSection,onSignOut,children,roleColor=A.red}){
  const initials=user.name?.split(" ").map(w=>w[0]).join("").slice(0,2)||"M";
  const ROLE_LABEL={technician:"Lab Technician",superadmin:"Super Admin",management:"Management Director"};
  const activeLabel=navGroups.flatMap(g=>g.items).find(i=>i.id===activeSection)?.label||"Dashboard";
  return(
    <div className="admin-body" style={{display:"flex",height:"100vh",overflow:"hidden"}}>
      <aside className="admin-sidebar">
        {/* Admin logo strip */}
        <div style={{padding:"14px 16px",borderBottom:`1px solid ${A.border}`,background:A.bg}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{width:28,height:28,background:`linear-gradient(135deg,#1a0a0a,${roleColor})`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Cormorant Garamond',serif",fontSize:14,fontWeight:700,color:A.text}}>M</div>
            <div>
              <div style={{fontSize:13,fontWeight:600,color:A.text,letterSpacing:0.5}}>M19 Internal</div>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:roleColor,letterSpacing:1.5,textTransform:"uppercase"}}>{ROLE_LABEL[user.role]||"Admin"}</div>
            </div>
          </div>
        </div>
        {/* User */}
        <div style={{padding:"12px 16px",borderBottom:`1px solid ${A.border}`,display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:30,height:30,borderRadius:"50%",background:`${roleColor}22`,border:`1px solid ${roleColor}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:roleColor,flexShrink:0}}>{initials}</div>
          <div style={{overflow:"hidden"}}>
            <div style={{fontSize:12,fontWeight:600,color:A.text,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{user.name}</div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.muted,letterSpacing:1}}>{user.email}</div>
          </div>
        </div>
        {/* Nav */}
        <div style={{flex:1,overflowY:"auto",padding:"8px 0"}}>
          {navGroups.map(g=>(
            <div key={g.group}>
              <div className="admin-section">{g.group}</div>
              {g.items.map(item=>(
                <div key={item.id} className={`admin-nav-item${activeSection===item.id?" active":""}`} style={activeSection===item.id?{color:A.text}:{}} onClick={()=>setSection(item.id)}>
                  <span style={{fontSize:13,opacity:0.8}}>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.badge&&<span style={{marginLeft:"auto",background:A.redDim,color:A.redLt,padding:"1px 6px",fontSize:9,fontFamily:"'DM Mono',monospace"}}>{item.badge}</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{padding:"10px 16px",borderTop:`1px solid ${A.border}`}}>
          <div onClick={onSignOut} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 0",cursor:"pointer",fontSize:11,color:A.muted}} onMouseEnter={e=>e.currentTarget.style.color=A.text} onMouseLeave={e=>e.currentTarget.style.color=A.muted}>🚪 Sign Out</div>
        </div>
      </aside>
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <div className="admin-topbar">
          <div style={{display:"flex",alignItems:"center",gap:16}}>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:A.muted,letterSpacing:1,textTransform:"uppercase"}}>{activeLabel}</div>
            <div style={{width:1,height:14,background:A.border}}/>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.dim,letterSpacing:1}}>{new Date().toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short",year:"numeric"}).toUpperCase()}</div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:6,height:6,borderRadius:"50%",background:A.green,boxShadow:`0 0 6px ${A.green}`,animation:"pulse 2s infinite"}}/><span style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted}}>SYSTEM ONLINE</span></div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:roleColor,padding:"3px 8px",background:`${roleColor}11`,border:`1px solid ${roleColor}33`,textTransform:"uppercase",letterSpacing:1}}>{user.role}</div>
          </div>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:24,background:A.bg}}>{children}</div>
      </div>
    </div>
  );
}

