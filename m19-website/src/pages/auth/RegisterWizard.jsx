import { useState } from "react";
import { PRODUCTS } from "../../data/products.js";
import { COURSES, INDUSTRY_SEGMENTS, PLATFORM_TIERS, STANDARDS, TEST_TYPES } from "../../data/siteContent.js";
import { Btn, FInput, FLabel, FSelect, Mono, Pill, Serif } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function RegisterWizard({onBack,onComplete}){
  const [step,setStep]=useState(1);
  const [d,setD]=useState({platforms:[],tiers:{},name:"",email:"",org:"",phone:"",password:"",industry:"",role:"",country:"India",instruments:[],standards:[],testTypes:[],courseTopics:[],goal:"",gstin:"",studentId:""});
  const set=(k,v)=>setD(p=>({...p,[k]:v}));
  const toggleArr=(k,v)=>setD(p=>({...p,[k]:p[k].includes(v)?p[k].filter(x=>x!==v):[...p[k],v]}));
  const togglePlatform=(id)=>setD(p=>({...p,platforms:p.platforms.includes(id)?p.platforms.filter(x=>x!==id):[...p.platforms,id]}));
  const hasLab=d.platforms.includes("lab"), hasInst=d.platforms.includes("inst"), hasAcad=d.platforms.includes("acad");
  const STEPS=["Platform","Profile","Account","Interests","Plan"];
  const COURSE_TOPICS=["Filter Integrity & Pore Science","Pharmaceutical Filtration","21 CFR Part 11","Statistical Process Control","Material Characterisation","Defence Material Testing","Textile Testing Standards","PoreSense Platform Training","AI in Material Science"];
  const ROLES=["QA / QC Manager","R&D Scientist","Production Manager","Lab Manager","Procurement","Regulatory Affairs","Faculty / Professor","PhD Scholar","Postgraduate Student","Undergraduate Student","Consultant","Other"];

  return(
    <div style={{minHeight:"100vh",background:C.dark,display:"flex",flexDirection:"column"}}>
      <div style={{padding:"16px 40px",borderBottom:"1px solid rgba(139,173,212,0.1)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div className="pub-nav-mark" style={{width:32,height:32,fontSize:16}}>M</div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:600,letterSpacing:1}}>M19 PoreSense</div>
        </div>
        <div style={{display:"flex",gap:6,alignItems:"center"}}>
          {STEPS.map((s,i)=>(
            <div key={s} style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{width:26,height:26,borderRadius:"50%",border:`2px solid ${i+1<=step?C.teal:"rgba(139,173,212,0.2)"}`,background:i+1<step?C.teal:i+1===step?"rgba(14,124,123,0.2)":"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:600,color:i+1<=step?C.white:C.slate,transition:"all 0.3s"}}>{i+1<step?"✓":i+1}</div>
              <span style={{fontSize:10,color:i+1<=step?C.white:C.slate}}>{s}</span>
              {i<4&&<div style={{width:24,height:1,background:i+1<step?C.teal:"rgba(139,173,212,0.15)"}}/>}
            </div>
          ))}
        </div>
        <button onClick={onBack} style={{background:"none",border:"none",color:C.slate,fontSize:12,cursor:"pointer"}}>← Back to Login</button>
      </div>

      <div style={{flex:1,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"48px 24px",overflowY:"auto"}}>
        <div style={{width:"100%",maxWidth:720,animation:"fadeUp 0.4s ease"}}>

          {step===1&&(
            <>
              <Eyebrow>Step 1 of 5</Eyebrow>
              <Serif size={44} weight={600} style={{marginBottom:8}}>Choose your <em style={{color:C.gold,fontStyle:"italic"}}>platforms.</em></Serif>
              <p style={{fontSize:14,color:C.slate,marginBottom:36,lineHeight:1.7}}>Select one or more. A single account gives you access to all platforms simultaneously.</p>
              <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:36}}>
                {Object.entries(PLATFORM_TIERS).map(([id,p])=>{
                  const active=d.platforms.includes(id);
                  return(
                    <div key={id} onClick={()=>togglePlatform(id)} style={{padding:"22px 26px",border:`2px solid ${active?p.color:"rgba(139,173,212,0.1)"}`,background:active?`${p.color}11`:"rgba(255,255,255,0.02)",cursor:"pointer",transition:"all 0.2s",display:"flex",gap:18,alignItems:"flex-start"}}>
                      <div style={{width:50,height:50,background:`${p.color}22`,border:`1px solid ${p.color}44`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{p.icon}</div>
                      <div style={{flex:1}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:600,color:C.white}}>{p.name}</div>
                          <div style={{width:20,height:20,borderRadius:"50%",border:`2px solid ${active?p.color:"rgba(139,173,212,0.3)"}`,background:active?p.color:"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11}}>{active&&"✓"}</div>
                        </div>
                        <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:10}}>
                          {p.tiers.map(t=><Badge key={t} color={p.color}>{t}</Badge>)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{display:"flex",justifyContent:"flex-end"}}><Btn onClick={()=>d.platforms.length&&setStep(2)} variant="gold" style={{opacity:d.platforms.length?1:0.4}}>Continue →</Btn></div>
            </>
          )}

          {step===2&&(
            <>
              <Eyebrow>Step 2 of 5</Eyebrow>
              <Serif size={44} weight={600} style={{marginBottom:8}}>Tell us about <em style={{color:C.gold,fontStyle:"italic"}}>yourself.</em></Serif>
              <p style={{fontSize:14,color:C.slate,marginBottom:36}}>This personalises your dashboard and recommendations.</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,marginBottom:24}}>
                <div><FLabel>Industry / Sector</FLabel><FSelect value={d.industry} onChange={e=>set("industry",e.target.value)} placeholder="Select your industry" options={INDUSTRY_SEGMENTS}/></div>
                <div><FLabel>Your Role</FLabel><FSelect value={d.role} onChange={e=>set("role",e.target.value)} placeholder="Select your role" options={ROLES}/></div>
                <div><FLabel>Organisation / Institution</FLabel><FInput placeholder="Company, Institute or University" value={d.org} onChange={e=>set("org",e.target.value)}/></div>
                <div><FLabel>Country</FLabel><FSelect value={d.country} onChange={e=>set("country",e.target.value)} options={["India","USA","UK","Germany","Australia","Israel","South Korea","UAE","Japan","Other"]}/></div>
                {(hasLab||hasInst)&&<><div><FLabel>Organisation Size</FLabel><FSelect value={d.companySize} onChange={e=>set("companySize",e.target.value)} placeholder="Select..." options={["1–10","11–50","51–200","201–1000","1000+"]}/></div><div><FLabel>GSTIN (for invoicing)</FLabel><FInput placeholder="Optional" value={d.gstin} onChange={e=>set("gstin",e.target.value)}/></div></>}
                {hasAcad&&<><div><FLabel>Student / Employee ID</FLabel><FInput placeholder="Institute ID" value={d.studentId} onChange={e=>set("studentId",e.target.value)}/></div><div><FLabel>ORCID (optional)</FLabel><FInput placeholder="0000-0000-0000-0000"/></div></>}
              </div>
              {hasInst&&<div style={{marginBottom:20}}><FLabel>M19 Instruments You Own or Plan to Purchase</FLabel><div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:8}}>{PRODUCTS.map(p=><Pill key={p.model} active={d.instruments.includes(p.model)} onClick={()=>toggleArr("instruments",p.model)}>{p.model}</Pill>)}</div></div>}
              <div style={{display:"flex",justifyContent:"space-between"}}><Btn variant="ghost" onClick={()=>setStep(1)}>← Back</Btn><Btn variant="gold" onClick={()=>setStep(3)}>Continue →</Btn></div>
            </>
          )}

          {step===3&&(
            <>
              <Eyebrow>Step 3 of 5</Eyebrow>
              <Serif size={44} weight={600} style={{marginBottom:8}}>Create your <em style={{color:C.gold,fontStyle:"italic"}}>account.</em></Serif>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,marginBottom:24}}>
                <div style={{gridColumn:"1/-1"}}><FLabel>Full Name</FLabel><div className="form-icon-wrap"><span className="form-icon">👤</span><FInput placeholder="Dr. / Mr. / Ms. Full Name" value={d.name} onChange={e=>set("name",e.target.value)}/></div></div>
                <div style={{gridColumn:"1/-1"}}><FLabel>Professional Email</FLabel><div className="form-icon-wrap"><span className="form-icon">✉</span><FInput type="email" placeholder="you@organisation.com" value={d.email} onChange={e=>set("email",e.target.value)}/></div></div>
                <div><FLabel>Password</FLabel><div className="form-icon-wrap"><span className="form-icon">🔒</span><FInput type="password" placeholder="Min. 8 characters" value={d.password} onChange={e=>set("password",e.target.value)}/></div></div>
                <div><FLabel>Confirm Password</FLabel><div className="form-icon-wrap"><span className="form-icon">🔒</span><FInput type="password" placeholder="Repeat password"/></div></div>
                <div style={{gridColumn:"1/-1"}}><FLabel>Phone / WhatsApp</FLabel><div className="form-icon-wrap"><span className="form-icon">📱</span><FInput placeholder="+91 XXXXX XXXXX" value={d.phone} onChange={e=>set("phone",e.target.value)}/></div></div>
              </div>
              <div style={{padding:"14px 18px",background:"rgba(14,124,123,0.08)",border:"1px solid rgba(14,124,123,0.2)",marginBottom:24,fontSize:12,color:C.slate,lineHeight:1.7}}>🔒 Your data is encrypted. Two-factor authentication available after registration.</div>
              <div style={{display:"flex",justifyContent:"space-between"}}><Btn variant="ghost" onClick={()=>setStep(2)}>← Back</Btn><Btn variant="gold" onClick={()=>setStep(4)}>Continue →</Btn></div>
            </>
          )}

          {step===4&&(
            <>
              <Eyebrow>Step 4 of 5</Eyebrow>
              <Serif size={44} weight={600} style={{marginBottom:8}}>Areas of <em style={{color:C.gold,fontStyle:"italic"}}>interest.</em></Serif>
              <p style={{fontSize:14,color:C.slate,marginBottom:36}}>Personalise your news feed, AI suggestions, and content recommendations.</p>
              {(hasLab||hasInst)&&<div style={{marginBottom:24}}><FLabel>Testing Standards You Work With</FLabel><div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:8}}>{STANDARDS.map(s=><Pill key={s} active={d.standards.includes(s)} onClick={()=>toggleArr("standards",s)}>{s}</Pill>)}</div></div>}
              {hasLab&&<div style={{marginBottom:24}}><FLabel>Types of Testing You Require</FLabel><div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:8}}>{TEST_TYPES.map(t=><Pill key={t} active={d.testTypes.includes(t)} onClick={()=>toggleArr("testTypes",t)}>{t}</Pill>)}</div></div>}
              {hasAcad&&<div style={{marginBottom:24}}><FLabel>Course Topics of Interest</FLabel><div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:8}}>{COURSE_TOPICS.map(t=><Pill key={t} active={d.courseTopics.includes(t)} onClick={()=>toggleArr("courseTopics",t)} variant="purple">{t}</Pill>)}</div></div>}
              <div style={{marginBottom:24}}><FLabel>Primary Goal with PoreSense (optional)</FLabel><textarea className="form-textarea" placeholder="E.g. Automate filter validation, reduce testing turnaround, prepare for FDA audit..." value={d.goal} onChange={e=>set("goal",e.target.value)}/></div>
              <div style={{display:"flex",justifyContent:"space-between"}}><Btn variant="ghost" onClick={()=>setStep(3)}>← Back</Btn><Btn variant="gold" onClick={()=>setStep(5)}>Continue →</Btn></div>
            </>
          )}

          {step===5&&(
            <>
              <Eyebrow>Step 5 of 5</Eyebrow>
              <Serif size={44} weight={600} style={{marginBottom:8}}>Choose your <em style={{color:C.gold,fontStyle:"italic"}}>plan.</em></Serif>
              <p style={{fontSize:14,color:C.slate,marginBottom:36}}>Start with any tier. Upgrade anytime from your dashboard.</p>
              {d.platforms.map(pid=>{
                const p=PLATFORM_TIERS[pid];
                return(
                  <div key={pid} style={{marginBottom:28}}>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:600,color:p.color,marginBottom:14}}>{p.icon} {p.name}</div>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:2}}>
                      {p.tiers.map((tier,ti)=>{
                        const active=d.tiers[pid]===tier;
                        return(
                          <div key={tier} onClick={()=>setD(prev=>({...prev,tiers:{...prev.tiers,[pid]:tier}}))} style={{padding:"22px 18px",border:`2px solid ${active?p.color:"rgba(139,173,212,0.1)"}`,background:active?`${p.color}11`:"rgba(255,255,255,0.02)",cursor:"pointer",transition:"all 0.2s",position:"relative"}}>
                            {ti===1&&<div style={{position:"absolute",top:-1,left:"50%",transform:"translateX(-50%)",padding:"2px 10px",background:p.color,fontSize:9,fontWeight:700,letterSpacing:1,textTransform:"uppercase",whiteSpace:"nowrap",color:C.dark}}>Popular</div>}
                            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:700,color:C.white,marginBottom:12}}>{tier}</div>
                            {p.features[ti].map(f=>(
                              <div key={f} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:6}}>
                                <span style={{color:p.color,fontSize:10,marginTop:2,flexShrink:0}}>✓</span>
                                <span style={{fontSize:11,color:C.slate,lineHeight:1.4}}>{f}</span>
                              </div>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              <div style={{display:"flex",justifyContent:"space-between",marginTop:16}}>
                <Btn variant="ghost" onClick={()=>setStep(4)}>← Back</Btn>
                <Btn variant="gold" size="lg" onClick={()=>onComplete({...d,type:d.platforms.length>1?"all":d.platforms[0]||"lab",name:d.name||"New User",tier:d.tiers[d.platforms[0]]||"Essential"})}>Create Account & Enter Platform →</Btn>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
