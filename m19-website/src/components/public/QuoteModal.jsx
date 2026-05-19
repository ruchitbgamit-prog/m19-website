import { useState } from "react";
import { INDUSTRY_SEGMENTS } from "../../data/siteContent.js";
import { Btn, FInput, FLabel, FSelect, Mono, Serif } from "../ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function QuoteModal({onClose,onRegister}){
  const [done,setDone]=useState(false);
  const [f,setF]=useState({name:"",org:"",email:"",interest:"",msg:""});
  const set=(k,v)=>setF(p=>({...p,[k]:v}));
  return(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e=>e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        {done?(
          <div style={{textAlign:"center",padding:"20px 0"}}>
            <div style={{fontSize:48,marginBottom:16}}>✅</div>
            <Serif size={28} weight={600} mb={12}>Thank You</Serif>
            <p style={{fontSize:13,color:C.slate,lineHeight:1.7,marginBottom:24}}>Our team will respond within one business day.<br/>For immediate access — create your account.</p>
            <Btn onClick={onRegister} variant="teal" full>Create Free Account →</Btn>
          </div>
        ):(
          <>
            <Mono size={10} color={C.gold} spacing={3}>Quick Quote</Mono>
            <Serif size={32} weight={600} mb={8} style={{marginTop:8}}>Request a <em style={{color:C.gold,fontStyle:"italic"}}>Proposal</em></Serif>
            <p style={{fontSize:13,color:C.slate,marginBottom:28,lineHeight:1.6}}>Response within 24 hours. No commitment.</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              <div><FLabel>Name</FLabel><FInput placeholder="Your name" value={f.name} onChange={e=>set("name",e.target.value)}/></div>
              <div><FLabel>Organisation</FLabel><FInput placeholder="Company / Institute" value={f.org} onChange={e=>set("org",e.target.value)}/></div>
              <div style={{gridColumn:"1/-1"}}><FLabel>Email</FLabel><FInput type="email" icon="✉" placeholder="you@company.com" value={f.email} onChange={e=>set("email",e.target.value)}/></div>
              <div style={{gridColumn:"1/-1"}}><FLabel>Area of Interest</FLabel>
                <FSelect value={f.interest} onChange={e=>set("interest",e.target.value)} placeholder="Select..." options={["FIA Filter Integrity Analyzer","MPA Micropore Analyser","Lab Testing Services","PoreSense Platform","Annual Maintenance Contract","Other"]}/>
              </div>
              <div style={{gridColumn:"1/-1"}}><FLabel>Details</FLabel><textarea className="form-textarea" placeholder="Describe your requirement..." value={f.msg} onChange={e=>set("msg",e.target.value)}/></div>
            </div>
            <Btn onClick={()=>setDone(true)} variant="teal" full style={{marginTop:20,padding:14}}>Submit Request →</Btn>
            <p style={{fontSize:10,color:C.slate,textAlign:"center",marginTop:10}}>Or <span style={{color:C.gold,cursor:"pointer"}} onClick={onRegister}>create an account</span> for instant access</p>
          </>
        )}
      </div>
    </div>
  );
}
