import { useState } from "react";
import { COURSES } from "../../data/siteContent.js";
import { AIChat } from "../../components/dashboard/AIChat.jsx";
import { Btn, Card, Mono, Serif, StatCard } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function AllAccessDash({user,onBackToSite}){
  const [platform,setPlatform]=useState("lab");
  const tabs=[{id:"lab",icon:"🧪",label:"Lab Testing",c:C.teal},{id:"inst",icon:"🔬",label:"Instruments",c:C.navyMid},{id:"acad",icon:"🎓",label:"Academic",c:C.purple}];
  return(
    <div style={{minHeight:"100vh",background:C.dark,display:"flex",flexDirection:"column"}}>
      <div style={{background:C.navy,borderBottom:"1px solid rgba(139,173,212,0.1)",padding:"0 28px",display:"flex",alignItems:"center",justifyContent:"space-between",height:60,position:"sticky",top:0,zIndex:20,flexShrink:0}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div className="pub-nav-mark" style={{width:30,height:30,fontSize:15}}>M</div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:17,fontWeight:600,letterSpacing:1}}>PoreSense</div>
          <Badge color={C.gold}>All Access</Badge>
        </div>
        <div style={{display:"flex",gap:0}}>
          {tabs.map(t=><button key={t.id} onClick={()=>setPlatform(t.id)} style={{padding:"8px 18px",border:"none",background:platform===t.id?`${t.c}22`:"transparent",borderBottom:platform===t.id?`2px solid ${t.c}`:"2px solid transparent",color:platform===t.id?t.c:C.slate,fontSize:12,fontWeight:platform===t.id?600:400,cursor:"pointer",transition:"all 0.2s",display:"flex",alignItems:"center",gap:6}}>{t.icon} {t.label}</button>)}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:14,color:C.white}}>{user.name}</div>
          <button onClick={onBackToSite} style={{background:"none",border:"1px solid rgba(139,173,212,0.2)",color:C.slate,fontSize:10,padding:"4px 10px",cursor:"pointer"}}>🌐 Website</button>
          <button onClick={()=>window.location.reload()} style={{background:"none",border:"1px solid rgba(139,173,212,0.2)",color:C.slate,fontSize:10,padding:"4px 10px",cursor:"pointer"}}>Sign Out</button>
        </div>
      </div>
      <div style={{flex:1,padding:"24px",overflowY:"auto"}}>
        <div style={{marginBottom:16,padding:"10px 16px",background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.15)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:8}}>
          <div style={{fontSize:13,color:C.slate}}>All-Access: <span style={{color:C.gold,fontWeight:600}}>{user.name}</span></div>
          <div style={{display:"flex",gap:6}}><Badge color={C.teal}>Lab: Enterprise</Badge><Badge color={C.navyMid}>Instruments: Intelligence</Badge><Badge color={C.purple}>Academic: Fellow</Badge></div>
        </div>
        {platform==="lab"&&<><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16}}><StatCard label="Active Orders" value="3" icon="📦" color={C.teal}/><StatCard label="Reports Ready" value="2" icon="📄" color={C.gold}/><StatCard label="Monthly Tests" value="11" icon="🧪"/></div><AIChat context="lab"/></>}
        {platform==="inst"&&<><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16}}><StatCard label="Online" value="2/3" icon="🔌" color={C.teal}/><StatCard label="Today" value="47" icon="📡"/><StatCard label="Storage" value="56%" icon="☁️" color={C.gold}/></div><AIChat context="instrument"/></>}
        {platform==="acad"&&<><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16}}><StatCard label="Courses" value="4" icon="📚" color={C.purple}/><StatCard label="Hours" value="12h" icon="⏱"/><StatCard label="Certificates" value="1" icon="🏅" color={C.gold}/></div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {COURSES.slice(0,2).map(c=><Card key={c.title}><div style={{display:"flex",gap:10,alignItems:"center",marginBottom:10}}><span style={{fontSize:22}}>{c.icon}</span><div style={{fontSize:13,fontWeight:600,color:C.white,lineHeight:1.3}}>{c.title}</div></div><ProgressBar value={c.progress} color={C.purple}/><div style={{marginTop:10}}><Btn variant="teal" full style={{fontSize:11,padding:8}}>Continue →</Btn></div></Card>)}
          </div></>}
      </div>
    </div>
  );
}
