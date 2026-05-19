import { useState } from "react";
import { ADMIN_USERS } from "../../data/adminSamples.js";
import { A } from "../../theme/adminColors.js";

export function AdminLogin({onLogin,onBack}){
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [err,setErr]=useState("");
  const handle=()=>{
    const u=ADMIN_USERS.find(u=>u.email===email&&u.pass===pass);
    if(u) onLogin(u); else setErr("Invalid credentials.");
  };
  const ROLE_INFO={
    technician:{color:A.green,desc:"Order management · Test results · Ticket queue"},
    superadmin:{color:A.blue,desc:"SKUs · Pricing · Content · Users · Listings"},
    management:{color:A.gold,desc:"Operations overview · Analytics · Business KPIs"},
  };
  return(
    <div style={{minHeight:"100vh",background:A.bg,display:"flex",fontFamily:"'DM Sans',sans-serif"}}>
      {/* Left */}
      <div style={{width:380,background:A.panel,borderRight:`1px solid ${A.border}`,display:"flex",flexDirection:"column",padding:"48px 40px",flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:64}}>
          <div style={{width:32,height:32,background:`linear-gradient(135deg,#1a0a0a,${A.red})`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:700,color:A.text}}>M</div>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:600,color:A.text,letterSpacing:1}}>M19 Internal</div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.red,letterSpacing:2,textTransform:"uppercase"}}>Restricted Access</div>
          </div>
        </div>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.dim,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>Access Levels</div>
        {Object.entries(ROLE_INFO).map(([role,info])=>(
          <div key={role} style={{padding:"14px 16px",marginBottom:8,background:`${info.color}08`,border:`1px solid ${info.color}22`}}>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:info.color,letterSpacing:1.5,textTransform:"uppercase",marginBottom:4}}>
              {{technician:"Lab Technician",superadmin:"Super Admin",management:"Management"}[role]}
            </div>
            <div style={{fontSize:11,color:A.muted,lineHeight:1.5}}>{info.desc}</div>
          </div>
        ))}
        <div style={{marginTop:"auto",paddingTop:24,borderTop:`1px solid ${A.border}`}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:A.dim,letterSpacing:1,lineHeight:1.8}}>
            This portal is for authorised M19 team members only.<br/>All actions are logged and audited.<br/>Unauthorised access will be reported.
          </div>
        </div>
      </div>
      {/* Right */}
      <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:48}}>
        <div style={{width:"100%",maxWidth:380,animation:"fadeIn 0.4s ease"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.red,letterSpacing:3,textTransform:"uppercase",marginBottom:12}}>Team Login</div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:600,color:A.text,marginBottom:6}}>Internal Portal</div>
          <div style={{fontSize:13,color:A.muted,marginBottom:36}}>Sign in with your M19 team credentials</div>

          <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:20}}>
            <div><label style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted,letterSpacing:1.5,textTransform:"uppercase",display:"block",marginBottom:6}}>Team Email</label>
              <input className="admin-input" type="email" placeholder="you@m19lab.com" value={email} onChange={e=>setEmail(e.target.value)}/></div>
            <div><label style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted,letterSpacing:1.5,textTransform:"uppercase",display:"block",marginBottom:6}}>Password</label>
              <input className="admin-input" type="password" placeholder="••••••••" value={pass} onChange={e=>setPass(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handle()}/></div>
          </div>
          {err&&<div style={{padding:"8px 12px",background:A.redDim,border:`1px solid ${A.red}44`,color:A.redLt,fontSize:11,marginBottom:12}}>{err}</div>}
          <button className="abtn abtn-red" style={{width:"100%",padding:12,fontSize:12}} onClick={handle}>Authenticate →</button>

          <div style={{margin:"24px 0",height:1,background:A.border}}/>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.dim,letterSpacing:1.5,textTransform:"uppercase",marginBottom:10}}>Demo Credentials</div>
          {ADMIN_USERS.map(u=>(
            <div key={u.email} onClick={()=>{setEmail(u.email);setPass(u.pass);}} style={{display:"flex",justifyContent:"space-between",padding:"7px 10px",marginBottom:4,background:`${A.panel}`,border:`1px solid ${A.border}`,cursor:"pointer",transition:"all 0.1s"}} onMouseEnter={e=>e.currentTarget.style.borderColor=A.muted} onMouseLeave={e=>e.currentTarget.style.borderColor=A.border}>
              <div style={{fontSize:11,color:A.text}}>{u.label}</div>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:A.muted}}>{u.email}</div>
            </div>
          ))}
          <div style={{marginTop:20,textAlign:"center"}}><span onClick={onBack} style={{fontSize:11,color:A.muted,cursor:"pointer",textDecoration:"underline"}}>← Back to public site</span></div>
        </div>
      </div>
    </div>
  );
}

