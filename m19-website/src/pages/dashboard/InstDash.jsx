import { useEffect, useMemo, useState } from "react";
import { FIA_LOTS, FIA_MACHINE_IDS, FIA_MEDIA, FIA_RUNS } from "../../data/dashboardSamples.js";
import { AIChat } from "../../components/dashboard/AIChat.jsx";
import { DashShell } from "../../components/dashboard/DashShell.jsx";
import { AIDock, Kpi, MiniArea, Segmented, fmt, pct } from "../../components/dashboard/fiaWidgets.jsx";
import { Btn, Card, Eyebrow, Mono, ProgressBar, Serif, StatCard } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function InstDash({user,onBackToSite}){
  const [sec,setSec]=useState("home");
  const isAnal=["Analytics","Intelligence"].includes(user.tier);
  const isIntel=user.tier==="Intelligence";
  const DEVICES=[{name:"FIA",sn:"FIA-2024-0041",status:"Online",lastSync:"2 min ago",storage:84},{name:"MPA",sn:"MPA-2023-0019",status:"Idle",lastSync:"14 min ago",storage:61},{name:"BPT",sn:"BPT-2025-0007",status:"Offline",lastSync:"3 hrs ago",storage:22}];
  const nav=[
    {group:"Overview",items:[{id:"home",icon:"🏠",label:"Dashboard"}]},
    {group:"Instruments",items:[{id:"devices",icon:"🔌",label:"Connected Devices"},{id:"data",icon:"📡",label:"Live Data"},{id:"reports",icon:"📄",label:"Measurement Reports"}]},
    {group:"Intelligence",items:[{id:"bi",icon:"📊",label:"Analytics & BI",locked:!isAnal},{id:"ai",icon:"🤖",label:"PoreSense AI",locked:!isIntel}]},
    {group:"Account",items:[{id:"profile",icon:"👤",label:"My Profile"}]},
  ];
  return(
    <DashShell user={user} navGroups={nav} activeSection={sec} setSection={setSec} onBackToSite={onBackToSite}>
      <div className="fade-in">
        {sec==="home"&&(
          <InstSmartFIA user={user} devices={DEVICES} isIntel={isIntel}/>
        )}

        {sec==="devices"&&<><Eyebrow>Instruments</Eyebrow><Serif size={32} weight={600} style={{marginBottom:16}}>Connected Devices</Serif>
          <div style={{display:"flex",gap:10,marginBottom:16}}><Btn variant="teal" size="sm">+ Connect New</Btn><Btn variant="ghost" size="sm">Scan Network</Btn></div>
          {DEVICES.map(d=>(
            <div key={d.sn} style={{padding:"20px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(139,173,212,0.07)",marginBottom:2,display:"grid",gridTemplateColumns:"1fr 1fr 1fr 120px",gap:20,alignItems:"center"}}>
              <div><div style={{fontSize:15,fontWeight:600,color:C.white,marginBottom:4}}>{d.name}</div><Mono size={9} color={C.slate} spacing={0}>S/N: {d.sn}</Mono></div>
              <div><div style={{marginBottom:4}}><Badge color={d.status==="Online"?C.green:d.status==="Idle"?C.amber:C.slate}>{d.status}</Badge></div><Mono size={10} color={C.slate} spacing={0}>{d.lastSync}</Mono></div>
              <ProgressBar label="Storage" value={d.storage}/>
              <Btn variant={d.status==="Offline"?"teal":"ghost"} size="sm">{d.status==="Offline"?"Connect":"Configure"}</Btn>
            </div>
          ))}</>}

        {sec==="bi"&&<><Eyebrow>Analytics</Eyebrow><Serif size={32} weight={600} style={{marginBottom:16}}>Analytics & BI</Serif>
          {!isAnal?<div style={{padding:40,textAlign:"center",background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.2)"}}><div style={{fontSize:40,marginBottom:12}}>📊</div><Serif size={22} weight={600} style={{marginBottom:8}}>Analytics Plan Required</Serif><Btn variant="gold">Upgrade →</Btn></div>:(
          <><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:16}}><StatCard label="Avg Bubble Point" value="3.4 bar" color={C.teal}/><StatCard label="Diffusion Flow" value="8.2 sccm" color={C.gold}/><StatCard label="Pass Rate" value="98.1%" color={C.green}/></div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <Card><Serif size={18} weight={600} style={{marginBottom:14}}>FIA Trend</Serif>{["Week 1","Week 2","Week 3","Week 4"].map((w,i)=><div key={w} style={{marginBottom:10}}><ProgressBar label={w} value={[72,81,88,95][i]} color={C.teal}/></div>)}</Card>
            <Card><Serif size={18} weight={600} style={{marginBottom:14}}>SPC Control Chart</Serif>{[["UCL","3.8 bar",C.amber],["Centre","3.4 bar",C.teal],["LCL","3.0 bar",C.amber],["Latest","3.42 bar",C.green]].map(([l,v,c])=>(
              <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:"1px solid rgba(139,173,212,0.07)"}}><span style={{fontSize:12,color:C.slate}}>{l}</span><span style={{fontFamily:"'DM Mono',monospace",fontSize:12,color:c,fontWeight:600}}>{v}</span></div>
            ))}</Card>
          </div></>)}</>}

        {sec==="ai"&&<><Eyebrow>AI Intelligence</Eyebrow><Serif size={32} weight={600} style={{marginBottom:16}}>PoreSense AI</Serif>
          {!isIntel?<div style={{padding:40,textAlign:"center",background:"rgba(201,168,76,0.06)",border:"1px solid rgba(201,168,76,0.2)"}}><div style={{fontSize:40,marginBottom:12}}>🤖</div><Serif size={22} weight={600} style={{marginBottom:8}}>Intelligence Plan Required</Serif><Btn variant="gold">Upgrade →</Btn></div>:<AIChat context="instrument"/>}</>}

        {(sec==="data"||sec==="reports")&&<><Eyebrow>Instruments</Eyebrow><Serif size={32} weight={600} style={{marginBottom:12}}>{sec==="data"?"Live Data":"Measurement Reports"}</Serif><div style={{padding:32,textAlign:"center",color:C.slate}}><div style={{fontSize:36,marginBottom:10}}>{sec==="data"?"📡":"📄"}</div><div style={{fontSize:13}}>Connect an instrument to view {sec==="data"?"live data":"reports"}</div></div></>}

        {sec==="profile"&&<><Eyebrow>Account</Eyebrow><Serif size={32} weight={600} style={{marginBottom:20}}>My Profile</Serif><Card style={{maxWidth:500}}>{[["Name",user.name],["Type","Instrument User"],["Plan",user.tier],["Organisation",user.org||"—"]].map(([k,v])=><div key={k} style={{display:"flex",gap:16,padding:"9px 0",borderBottom:"1px solid rgba(139,173,212,0.07)"}}><div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:C.slate,letterSpacing:1,textTransform:"uppercase",width:110,flexShrink:0}}>{k}</div><div style={{fontSize:13,color:C.white}}>{v}</div></div>)}</Card></>}
      </div>
    </DashShell>
  );
}

export function InstSmartFIA({user,devices,isIntel}){
  const [machine,setMachine]=useState("All");
  const [lot,setLot]=useState("All");
  const [range,setRange]=useState("30d");
  const [selected,setSelected]=useState(null);
  const [aiSubmit,setAiSubmit]=useState({nonce:0,text:""});

  const runs=useMemo(()=>{
    const maxDays=range==="7d"?7:range==="14d"?14:30;
    const cutoff=Date.now() - maxDays*24*60*60*1000;
    return FIA_RUNS
      .filter(r=>new Date(r.ts).getTime()>=cutoff)
      .filter(r=>machine==="All" || r.machineId===machine)
      .filter(r=>lot==="All" || r.lotNo===lot)
      .slice()
      .reverse();
  },[machine,lot,range]);

  useEffect(()=>{
    if(!runs.length){ setSelected(null); return; }
    const still=selected && runs.some(r=>r.id===selected.id);
    if(!still) setSelected(runs[0]);
  },[runs,selected]);

  const stats=useMemo(()=>{
    const total=runs.length || 1;
    const pass=runs.filter(r=>r.pass).length;
    const oot=runs.filter(r=>r.oot).length;
    const bpAvg=runs.reduce((a,r)=>a+r.bubblePoint,0)/total;
    const dfAvg=runs.reduce((a,r)=>a+r.diffFlow,0)/total;
    const integrityAvg=runs.reduce((a,r)=>a+r.integrityIdx,0)/total;
    const spark=runs.slice(-12).map(r=>r.integrityIdx);
    return {total, pass, oot, bpAvg, dfAvg, integrityAvg, spark};
  },[runs]);

  const aiContextItems=useMemo(()=>{
    if(!selected) return [];
    return [
      {k:"Machine",v:selected.machineId},
      {k:"Lot",v:selected.lotNo},
      {k:"Run",v:selected.id},
      {k:"BP",v:`${fmt(selected.bubblePoint,2)} bar`},
      {k:"DF",v:`${fmt(selected.diffFlow,1)} sccm`},
      {k:"Integrity",v:`${fmt(selected.integrityIdx,1)}`},
      {k:"Result",v:selected.pass?"PASS":"FAIL"},
    ];
  },[selected]);

  const askFromDock=(q)=>setAiSubmit(s=>({nonce:s.nonce+1,text:q}));

  return(
    <>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:16,flexWrap:"wrap",marginBottom:16}}>
        <div>
          <Eyebrow>Instrument Platform · FIA Smart Dashboard</Eyebrow>
          <Serif size={28} weight={600} style={{marginTop:6}}>Welcome, <em style={{color:C.gold,fontStyle:"italic"}}>{user.name?.split(" ")[0]}.</em></Serif>
        </div>
        <div style={{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:C.slate,letterSpacing:1.5,textTransform:"uppercase"}}>Range</span>
            <Segmented value={range} onChange={setRange} options={[{value:"7d",label:"7D"},{value:"14d",label:"14D"},{value:"30d",label:"30D"}]} />
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:C.slate,letterSpacing:1.5,textTransform:"uppercase"}}>Machine</span>
            <select className="form-select" value={machine} onChange={e=>setMachine(e.target.value)} style={{padding:"8px 10px",fontSize:12,background:"rgba(255,255,255,0.04)"}}>
              {["All",...FIA_MACHINE_IDS].map(m=><option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:C.slate,letterSpacing:1.5,textTransform:"uppercase"}}>Lot</span>
            <select className="form-select" value={lot} onChange={e=>setLot(e.target.value)} style={{padding:"8px 10px",fontSize:12,background:"rgba(255,255,255,0.04)"}}>
              {["All",...FIA_LOTS].map(l=><option key={l} value={l}>{l}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="fia-dash-main" style={{display:"grid",gridTemplateColumns:"1fr minmax(280px,360px)",gap:14,alignItems:"start"}}>
        <div style={{minWidth:0}}>
          <div className="fia-kpi-row" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginBottom:12}}>
            <Kpi label="Pass rate" value={pct((stats.pass/stats.total)*100)} sub={`${stats.pass}/${stats.total} runs`} color={C.green} spark={stats.spark}/>
            <Kpi label="OOT flags" value={`${stats.oot}`} sub={`last ${range.replace("d"," days")}`} color={stats.oot>0?C.red:C.teal} spark={runs.slice(-12).map(r=>r.oot?92:100)}/>
            <Kpi label="Avg bubble point" value={`${fmt(stats.bpAvg,2)} bar`} sub={`with current filters`} color={C.teal} spark={runs.slice(-12).map(r=>r.bubblePoint)}/>
          </div>

          <div className="fia-two-col" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
            <Card>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12,marginBottom:12}}>
                <Serif size={18} weight={600}>Integrity Trend</Serif>
                <Mono size={9} color={C.slate} spacing={1}>INDEX · last {runs.length} runs</Mono>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"center",flexWrap:"wrap"}}>
                <div style={{display:"flex",gap:14,flexWrap:"wrap"}}>
                  {[["Avg",fmt(stats.integrityAvg,1),C.teal],["DF",fmt(stats.dfAvg,1),C.gold],["Latest",selected?fmt(selected.integrityIdx,1):"—",selected?.oot?C.red:C.green]].map(([l,v,c])=>(
                    <div key={l} style={{padding:"8px 10px",border:"1px solid rgba(139,173,212,0.10)",background:"rgba(255,255,255,0.02)"}}>
                      <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:C.slate,letterSpacing:1.5,textTransform:"uppercase",marginBottom:4}}>{l}</div>
                      <div style={{fontFamily:"'DM Mono',monospace",fontSize:14,color:c,fontWeight:700}}>{v}</div>
                    </div>
                  ))}
                </div>
                <MiniArea data={runs.slice(-24).map(r=>r.integrityIdx)} color={C.teal} height={48} />
              </div>
              <div style={{marginTop:14,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <div style={{padding:"12px 14px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(139,173,212,0.08)"}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:C.slate,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>Signal</div>
                  <div style={{fontSize:12,color:C.white,lineHeight:1.5}}>
                    {stats.oot>0 ? "Recent OOT flags detected. Review diffusion flow spikes and lot-specific drift." : "No OOT flags in the selected range. System appears stable within control limits."}
                  </div>
                </div>
                <div style={{padding:"12px 14px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(139,173,212,0.08)"}}>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:C.slate,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>Next action</div>
                  <div style={{fontSize:12,color:C.white,lineHeight:1.5}}>
                    {stats.oot>0 ? "Select a failed run below and ask AI for a scientific root-cause summary." : "Compare latest lot vs baseline and draft a compliance summary."}
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12,marginBottom:12}}>
                <Serif size={18} weight={600}>Device Health</Serif>
                <Mono size={9} color={C.slate} spacing={1}>SYNC · STORAGE</Mono>
              </div>
              {devices.map(d=>(
                <div key={d.sn} style={{display:"grid",gridTemplateColumns:"1fr 90px",gap:12,alignItems:"center",padding:"10px 0",borderBottom:"1px solid rgba(139,173,212,0.07)"}}>
                  <div style={{minWidth:0}}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <div style={{width:8,height:8,borderRadius:99,background:d.status==="Online"?C.green:d.status==="Idle"?C.gold:C.slate,boxShadow:`0 0 8px ${d.status==="Online"?C.green:d.status==="Idle"?C.gold:C.slate}44`}}/>
                      <div style={{fontSize:13,fontWeight:700,color:C.white}}>{d.name}</div>
                      <Mono size={9} color={C.slate} spacing={0} style={{marginLeft:"auto"}}>{d.lastSync}</Mono>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",marginTop:8,alignItems:"center",gap:10}}>
                      <Mono size={9} color={C.slate} spacing={0}>{d.sn}</Mono>
                      <div style={{width:140}}><ProgressBar label="Storage" value={d.storage} color={d.storage>80?C.red:C.teal}/></div>
                    </div>
                  </div>
                  <div style={{textAlign:"right"}}>
                    <Badge color={d.status==="Online"?C.green:d.status==="Idle"?C.amber:C.slate}>{d.status}</Badge>
                  </div>
                </div>
              ))}
              <div style={{marginTop:12,display:"flex",gap:8,flexWrap:"wrap"}}>
                <Btn variant="ghost" size="sm">Open device logs</Btn>
                <Btn variant="teal" size="sm">Run self-check →</Btn>
              </div>
            </Card>
          </div>

          <Card>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12,marginBottom:12,flexWrap:"wrap"}}>
              <div>
                <Serif size={18} weight={600}>Recent FIA Runs</Serif>
                <div style={{fontSize:12,color:C.slate,marginTop:4}}>Select a run to attach context for scientific Q&A.</div>
              </div>
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                <Btn variant="ghost" size="sm">Export CSV</Btn>
                <Btn variant="outline-gold" size="sm">Create report</Btn>
              </div>
            </div>
            <div style={{border:"1px solid rgba(139,173,212,0.08)"}}>
              <div style={{display:"grid",gridTemplateColumns:"110px 130px 120px 70px 80px 90px 70px",gap:12,padding:"10px 12px",background:"rgba(255,255,255,0.02)",borderBottom:"1px solid rgba(139,173,212,0.08)"}}>
                {["Run","Machine","Lot","BP","DF","Integrity","Result"].map(h=>(
                  <div key={h} style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:"rgba(139,173,212,0.45)",letterSpacing:1.7,textTransform:"uppercase"}}>{h}</div>
                ))}
              </div>
              {runs.slice(0,14).map(r=>{
                const active=selected?.id===r.id;
                return(
                  <div key={r.id} onClick={()=>setSelected(r)} style={{
                    display:"grid",gridTemplateColumns:"110px 130px 120px 70px 80px 90px 70px",gap:12,
                    padding:"11px 12px",cursor:"pointer",
                    background:active?`${C.teal}14`:"rgba(255,255,255,0.01)",
                    borderBottom:"1px solid rgba(139,173,212,0.06)",
                    borderLeft:active?`2px solid ${C.teal}`:"2px solid transparent",
                    transition:"background var(--dur-1) var(--ease-out)"
                  }} onMouseEnter={e=>{if(!active) e.currentTarget.style.background="rgba(255,255,255,0.03)";}} onMouseLeave={e=>{if(!active) e.currentTarget.style.background="rgba(255,255,255,0.01)";}}>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:C.teal}}>{r.id}</div>
                    <div style={{fontSize:12,color:C.white}}>{r.machineId}</div>
                    <div style={{fontSize:12,color:C.white}}>{r.lotNo}</div>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:C.gold}}>{fmt(r.bubblePoint,2)}</div>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:C.white}}>{fmt(r.diffFlow,1)}</div>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,color:r.oot?C.red:C.green,fontWeight:700}}>{fmt(r.integrityIdx,1)}</div>
                    <Badge color={r.pass?C.green:C.red}>{r.pass?"Pass":"Fail"}</Badge>
                  </div>
                );
              })}
            </div>
            <div style={{marginTop:12,display:"flex",gap:10,flexWrap:"wrap"}}>
              <span style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:C.slate,letterSpacing:1,textTransform:"uppercase"}}>Selected:</span>
              {selected ? (
                <>
                  <Badge color={selected.pass?C.green:C.red}>{selected.id}</Badge>
                  <span style={{fontSize:12,color:C.slate}}>· {selected.machineId} · {selected.lotNo} · {selected.date}</span>
                </>
              ):<span style={{fontSize:12,color:C.slate}}>None</span>}
            </div>
          </Card>
        </div>

        <AIDock
          contextLabel={selected?`Attached to ${selected.id}`:"Attach a run for context"}
          contextItems={aiContextItems}
          suggest={["Why did this run fail?","Is this within control limits?","Compare this lot vs baseline","Summarise 30-day drift"]}
          onAsk={askFromDock}
        >
          {!isIntel ? (
            <div style={{padding:"18px",textAlign:"center",background:"rgba(31,193,198,0.06)",border:"1px solid rgba(31,193,198,0.18)"}}>
              <div style={{fontSize:28,marginBottom:10}}>🤖</div>
              <Serif size={18} weight={600} style={{marginBottom:8}}>Enable Intelligence Plan</Serif>
              <div style={{fontSize:12,color:C.slate,marginBottom:12,lineHeight:1.6}}>Unlock context-aware scientific answers, anomaly summaries, and compliance-ready drafts.</div>
              <Btn variant="teal" size="sm">Upgrade →</Btn>
            </div>
          ) : (
            <AIChat context="instrument" submitFromParent={aiSubmit}/>
          )}
        </AIDock>
      </div>
    </>
  );
}
