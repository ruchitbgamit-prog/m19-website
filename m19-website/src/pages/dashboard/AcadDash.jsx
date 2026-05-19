import { useState } from "react";
import { COURSES } from "../../data/siteContent.js";
import { DashShell } from "../../components/dashboard/DashShell.jsx";
import { Btn, Card, Eyebrow, Mono, ProgressBar, Serif, StatCard } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function AcadDash({user,onBackToSite}){
  const [sec,setSec]=useState("home");
  const isScholar=["Scholar","Fellow"].includes(user.tier);
  const isFellow=user.tier==="Fellow";
  const nav=[
    {group:"Overview",items:[{id:"home",icon:"🏠",label:"Dashboard"}]},
    {group:"Learning",items:[{id:"courses",icon:"📚",label:"My Courses"},{id:"videos",icon:"🎥",label:"Video Library"},{id:"content",icon:"📖",label:"Articles & Papers"}]},
    {group:"Achievements",items:[{id:"certs",icon:"🏅",label:"Certificates"},{id:"progress",icon:"📈",label:"My Progress"}]},
    {group:"Research",items:[{id:"tools",icon:"🔭",label:"Research Tools",locked:!isFellow},{id:"mentorship",icon:"👨‍🏫",label:"Mentorship",locked:!isFellow}]},
    {group:"Account",items:[{id:"profile",icon:"👤",label:"My Profile"}]},
  ];
  return(
    <DashShell user={user} navGroups={nav} activeSection={sec} setSection={setSec} onBackToSite={onBackToSite}>
      <div className="fade-in">
        {sec==="home"&&<><Eyebrow>Academic Platform</Eyebrow><Serif size={28} weight={600} style={{marginBottom:20}}>Keep learning, <em style={{color:C.gold,fontStyle:"italic"}}>{user.name?.split(" ")[0]||"Scholar"}.</em></Serif>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:20}}><StatCard label="Enrolled" value="4" icon="📚"/><StatCard label="Hours Completed" value="12h" icon="⏱" color={C.teal}/><StatCard label="Certificates" value="1" icon="🏅" color={C.gold}/><StatCard label="Streak" value="7 days" icon="🔥" color={C.amber}/></div>
          <Card><Serif size={18} weight={600} style={{marginBottom:14}}>Continue Learning</Serif>{COURSES.slice(0,2).map(c=><div key={c.title} style={{marginBottom:14}}><div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}><div style={{display:"flex",gap:8,alignItems:"center"}}><span>{c.icon}</span><div style={{fontSize:13,fontWeight:500,color:C.white}}>{c.title}</div></div><Mono size={11} color={C.slate} spacing={0}>{c.progress}%</Mono></div><ProgressBar value={c.progress} color={C.purple}/></div>)}</Card></>}

        {sec==="courses"&&<><Eyebrow>Learning</Eyebrow><Serif size={32} weight={600} style={{marginBottom:20}}>My Courses</Serif>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:12}}>
            {COURSES.map(c=>(
              <div key={c.title} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(139,173,212,0.07)",overflow:"hidden"}}>
                <div style={{height:70,display:"flex",alignItems:"center",justifyContent:"center",background:`${C.purple}11`,fontSize:36}}>{c.icon}</div>
                <div style={{padding:"14px"}}>
                  <div style={{fontSize:13,fontWeight:600,color:C.white,marginBottom:8,lineHeight:1.3}}>{c.title}</div>
                  <div style={{display:"flex",gap:10,marginBottom:10}}><span style={{fontSize:11,color:C.slate}}>{c.modules} modules · {c.dur}</span>{c.cert&&<Badge color={C.gold}>Certificate</Badge>}</div>
                  <ProgressBar value={c.progress} color={C.purple}/>
                  <div style={{marginTop:10}}><Btn variant="teal" full style={{padding:8,fontSize:11}}>{c.progress>0?"Continue →":"Start Course"}</Btn></div>
                </div>
              </div>
            ))}</div></>}

        {sec==="certs"&&<><Eyebrow>Achievements</Eyebrow><Serif size={32} weight={600} style={{marginBottom:20}}>Certificates</Serif>
          <div style={{padding:"28px",textAlign:"center",background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.2)",marginBottom:10}}>
            <div style={{fontSize:48,marginBottom:12}}>🏅</div>
            <Serif size={20} weight={600} style={{marginBottom:4}}>Filter Integrity & Pore Science — Level 1</Serif>
            <Mono size={10} color={C.slate} spacing={0} style={{marginBottom:16}}>Issued by M19 Material Intelligence Lab · March 2026 · ID: M19-CERT-2026-0041</Mono>
            <div style={{display:"flex",gap:10,justifyContent:"center"}}><Btn variant="gold" size="sm">⬇ Download</Btn><Btn variant="ghost" size="sm">🔗 Share LinkedIn</Btn></div>
          </div>
          {!isScholar&&<div style={{padding:28,textAlign:"center",background:`${C.purple}11`,border:`1px solid ${C.purple}33`}}><div style={{fontSize:13,color:C.slate,marginBottom:10}}>Unlock more certifications with Scholar plan.</div><Btn variant="outline-gold" size="sm">Upgrade to Scholar →</Btn></div>}</>}

        {sec==="videos"&&<><Eyebrow>Learning</Eyebrow><Serif size={32} weight={600} style={{marginBottom:20}}>Video Library</Serif>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
            {[{t:"Introduction to Capillary Flow Porometry",d:"18:42",v:"2.4k",i:"🔬"},{t:"Reading Filter Integrity Test Results",d:"24:10",v:"1.8k",i:"📊"},{t:"Setting Up the FIA",d:"12:55",v:"3.1k",i:"💧"},{t:"Understanding USP <1207>",d:"31:20",v:"1.2k",i:"📋"},{t:"Pore Size Distribution — Interpreting Data",d:"22:08",v:"980",i:"📡"},{t:"SPC Charts for Lab Scientists",d:"28:45",v:"756",i:"📈"}].map(v=>(
              <div key={v.t} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(139,173,212,0.07)",cursor:"pointer"}} onMouseEnter={e=>e.currentTarget.style.borderColor=`${C.purple}66`} onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(139,173,212,0.07)"}>
                <div style={{height:90,background:`${C.purple}11`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,position:"relative"}}>{v.i}<div style={{position:"absolute",bottom:6,right:6,padding:"2px 7px",background:"rgba(2,6,23,0.6)",fontSize:10,fontFamily:"'DM Mono',monospace"}}>{v.d}</div></div>
                <div style={{padding:"10px 12px"}}><div style={{fontSize:12,fontWeight:500,color:C.white,lineHeight:1.4,marginBottom:4}}>{v.t}</div><Mono size={9} color={C.slate} spacing={0}>{v.v} views</Mono></div>
              </div>
            ))}</div></>}

        {sec==="tools"&&(!isFellow?<div style={{padding:40,textAlign:"center",background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.2)"}}><div style={{fontSize:40,marginBottom:12}}>🔭</div><Serif size={22} weight={600} style={{marginBottom:8}}>Fellow Plan Required</Serif><Btn variant="gold">Upgrade to Fellow →</Btn></div>:<><Eyebrow>Research</Eyebrow><Serif size={32} weight={600}>Research Tools</Serif></>)}

        {(sec==="progress"||sec==="content"||sec==="mentorship")&&<><Eyebrow>Coming Soon</Eyebrow><Serif size={28} weight={600} style={{marginBottom:8}}>{sec.charAt(0).toUpperCase()+sec.slice(1)}</Serif><div style={{fontSize:14,color:C.slate}}>This section is under development.</div></>}

        {sec==="profile"&&<><Eyebrow>Account</Eyebrow><Serif size={32} weight={600} style={{marginBottom:20}}>My Profile</Serif><Card style={{maxWidth:500}}>{[["Name",user.name],["Type","Academic"],["Plan",user.tier],["Institution",user.org||"—"]].map(([k,v])=><div key={k} style={{display:"flex",gap:16,padding:"9px 0",borderBottom:"1px solid rgba(139,173,212,0.07)"}}><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:C.slate,letterSpacing:1,textTransform:"uppercase",width:110,flexShrink:0}}>{k}</div><div style={{fontSize:13,color:C.white}}>{v}</div></div>)}</Card></>}
      </div>
    </DashShell>
  );
}
