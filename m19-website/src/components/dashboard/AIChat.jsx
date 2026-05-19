import { useEffect, useRef, useState } from "react";
import { Btn, FInput, Mono } from "../ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function AIChat({context,submitFromParent}){
  const [msgs,setMsgs]=useState([{role:"ai",text:`Hi! I'm PoreSense AI. ${context==="lab"?"I can help interpret test results, flag anomalies, and answer regulatory questions.":"I can analyse instrument data, detect anomalies, and provide predictive maintenance insights."} How can I help?`}]);
  const [input,setInput]=useState("");
  const lastParentNonce=useRef(null);
  const SUGGEST=context==="lab"?["Why did my bubble point drop?","Summarise last 30 days of tests","Check USP <1207> compliance","Analyse OOT trends"]:["Analyse FIA measurement drift","Predict MPA calibration schedule","Show this week's anomalies","Compare with industry benchmarks"];
  const reply=(q)=>{
    setMsgs(p=>[...p,{role:"user",text:q}]);
    setTimeout(()=>setMsgs(p=>[...p,{role:"ai",text:`Analysing "${q}"...\n\nBased on your ${context==="lab"?"recent test data":"instrument measurements"}, I can see consistent patterns across your dataset. Your ${context==="lab"?"filter integrity results show a 97.3% pass rate over 30 days":"FIA data shows stable performance within control limits"}.\n\nWould you like me to generate a detailed report or drill into specific batches?`}]),900);
  };
  const send=()=>{
    if(!input.trim())return;
    const q=input.trim(); setInput("");
    reply(q);
  };
  useEffect(()=>{
    if(!submitFromParent?.text?.trim()||!submitFromParent?.nonce)return;
    if(lastParentNonce.current===submitFromParent.nonce)return;
    lastParentNonce.current=submitFromParent.nonce;
    reply(submitFromParent.text.trim());
  },[submitFromParent]);
  return(
    <div style={{border:"1px solid rgba(139,173,212,0.1)",display:"flex",flexDirection:"column",height:480}}>
      <div style={{padding:"10px 14px",background:C.navyMid,borderBottom:"1px solid rgba(139,173,212,0.1)",display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:26,height:26,background:`linear-gradient(135deg,${C.teal},${C.purple})`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12}}>🤖</div>
        <div><div style={{fontSize:12,fontWeight:600,color:C.white}}>PoreSense AI</div><Mono size={9} color={C.teal} spacing={1}>ACTIVE</Mono></div>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:14,display:"flex",flexDirection:"column",gap:10}}>
        {msgs.map((m,i)=>(
          <div key={i} style={{display:"flex",gap:8,justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
            {m.role==="ai"&&<div style={{width:24,height:24,borderRadius:"50%",background:`${C.teal}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,flexShrink:0}}>🤖</div>}
            <div style={{padding:"9px 12px",maxWidth:"78%",fontSize:12,lineHeight:1.6,background:m.role==="user"?C.navyMid:"rgba(255,255,255,0.05)",color:C.white,borderRadius:m.role==="user"?"8px 8px 0 8px":"8px 8px 8px 0",whiteSpace:"pre-line"}}>{m.text}</div>
          </div>
        ))}
      </div>
      <div style={{padding:"6px 10px",display:"flex",gap:6,flexWrap:"wrap",borderTop:"1px solid rgba(139,173,212,0.08)",background:"rgba(11,31,58,0.4)"}}>
        {SUGGEST.map(s=><span key={s} onClick={()=>setInput(s)} style={{padding:"3px 9px",fontSize:10,background:"rgba(14,124,123,0.1)",border:"1px solid rgba(14,124,123,0.2)",color:C.tealLt,cursor:"pointer",borderRadius:20}}>{s}</span>)}
      </div>
      <div style={{padding:"10px",display:"flex",gap:8,background:"rgba(11,31,58,0.6)"}}>
        <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="Ask PoreSense AI..." style={{flex:1,padding:"8px 12px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(139,173,212,0.2)",color:C.white,fontSize:12,outline:"none"}} onFocus={e=>e.target.style.borderColor=C.teal} onBlur={e=>e.target.style.borderColor="rgba(139,173,212,0.2)"}/>
        <Btn variant="teal" onClick={send} style={{padding:"8px 14px",fontSize:12}}>→</Btn>
      </div>
    </div>
  );
}
