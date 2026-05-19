import { useState } from "react";
import { DEMO_USERS } from "../../data/siteContent.js";
import { Btn, FInput, FLabel, Mono, Serif } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function LoginPage({onLogin,onRegister,onBack}){
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [err,setErr]=useState("");
  const handle=()=>{
    const d=DEMO_USERS.find(d=>d.email===email&&d.pass===pass);
    if(d) onLogin(d); else setErr("Invalid credentials. Use a demo account below.");
  };
  return(
    <div className="auth-split">
      <div className="auth-left">
        <div className="auth-grid"/>
        <div style={{position:"absolute",top:-100,right:-100,width:400,height:400,borderRadius:"50%",background:`radial-gradient(circle,rgba(14,124,123,0.15) 0%,transparent 70%)`,pointerEvents:"none"}}/>
        <div style={{position:"relative"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:64}}>
            <div className="pub-nav-mark">M</div>
            <div><div className="pub-nav-wordmark">M19</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:C.slate,letterSpacing:2}}>MATERIAL INTELLIGENCE LAB</div></div>
          </div>
          <Mono size={10} color={C.teal} spacing={3}>PoreSense™ Platform</Mono>
          <Serif size={52} weight={600} style={{margin:"12px 0 20px",lineHeight:1.0}}>Science.<br/><em style={{color:C.gold,fontStyle:"italic"}}>Intelligence.</em><br/><strong style={{fontWeight:700}}>Unified.</strong></Serif>
          <p style={{fontSize:14,color:C.slate,lineHeight:1.8,maxWidth:380,fontWeight:600}}>One account. Three platforms. Lab testing, instrument intelligence, and scientific education — all in one place.</p>
        </div>
        <div style={{position:"relative"}}>
          {[{icon:"🧪",t:"Lab Testing & Membership",c:C.teal},{icon:"🔬",t:"Instrument Intelligence",c:C.navyMid},{icon:"🎓",t:"Academic Platform",c:C.purple}].map(p=>(
            <div key={p.t} style={{display:"flex",alignItems:"center",gap:14,marginBottom:20}}>
              <div style={{width:44,height:44,background:`${p.c}22`,border:`1px solid ${p.c}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>{p.icon}</div>
              <div style={{fontSize:13,color:C.slate}}>{p.t}</div>
            </div>
          ))}
          <button onClick={onBack} style={{marginTop:16,background:"none",border:"none",color:C.slate,fontSize:12,cursor:"pointer",padding:0}}>← Back to website</button>
        </div>
      </div>
      <div className="auth-right">
        <div style={{width:"100%",maxWidth:400,animation:"fadeIn 0.5s ease"}}>
          <Mono size={10} color={C.gold} spacing={3}>Secure Login</Mono>
          <Serif size={36} weight={600} style={{margin:"12px 0 6px"}}>Welcome back</Serif>
          <p style={{fontSize:13,color:C.slate,marginBottom:36}}>Sign in to your PoreSense account</p>
          <div style={{display:"flex",flexDirection:"column",gap:16,marginBottom:24}}>
            <div><FLabel>Email Address</FLabel><div className="form-icon-wrap"><span className="form-icon">✉</span><input className="form-input" type="email" placeholder="you@organisation.com" value={email} onChange={e=>setEmail(e.target.value)}/></div></div>
            <div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                <FLabel>Password</FLabel><span style={{fontSize:11,color:C.teal,cursor:"pointer"}}>Forgot password?</span>
              </div>
              <div className="form-icon-wrap"><span className="form-icon">🔒</span><input className="form-input" type="password" placeholder="••••••••" value={pass} onChange={e=>setPass(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handle()}/></div>
            </div>
          </div>
          {err&&<div style={{padding:"10px 14px",background:"rgba(192,57,43,0.1)",border:"1px solid rgba(192,57,43,0.3)",color:"#E74C3C",fontSize:12,marginBottom:16}}>{err}</div>}
          <Btn variant="gold" full size="lg" onClick={handle}>Sign In →</Btn>
          <div style={{display:"flex",alignItems:"center",gap:16,margin:"20px 0"}}><div style={{flex:1,height:1,background:"rgba(139,173,212,0.1)"}}/><span style={{fontSize:11,color:C.slate}}>or</span><div style={{flex:1,height:1,background:"rgba(139,173,212,0.1)"}}/></div>
          <Btn variant="ghost" full onClick={onRegister}>Create New Account</Btn>
          <div style={{marginTop:28,padding:18,background:"rgba(201,168,76,0.05)",border:"1px solid rgba(201,168,76,0.15)"}}>
            <Mono size={9} color={C.gold} spacing={2}>Demo Accounts</Mono>
            {DEMO_USERS.map(d=>(
              <div key={d.email} onClick={()=>{setEmail(d.email);setPass(d.pass);}} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 0",borderBottom:"1px solid rgba(255,255,255,0.04)",cursor:"pointer",marginTop:8}}
                onMouseEnter={e=>e.currentTarget.style.opacity="0.7"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
                <div style={{fontSize:12,color:C.white}}>{d.label}</div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:C.slate}}>{d.email}</div>
              </div>
            ))}
            <div style={{fontSize:10,color:C.slate,marginTop:10}}>Password: <span style={{fontFamily:"'DM Mono',monospace",color:C.teal}}>demo</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
