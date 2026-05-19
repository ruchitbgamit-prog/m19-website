import { Btn, Mono } from "../ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function pct(n){ return `${Math.round(n*10)/10}%`; }
export function fmt(num, digits=2){ return (typeof num==="number" ? num.toFixed(digits) : String(num)); }

export function MiniArea({data,color=C.teal,height=34}){
  const w=120, h=height;
  if(!data||data.length===0)return null;
  const max=Math.max(...data), min=Math.min(...data);
  const span=Math.max(data.length-1,1);
  const pts=data.map((v,idx)=>{
    const x=(idx/span)*w;
    const y=h - ((v-min)/(max-min || 1))*h;
    return [x,y];
  });
  const d=`M 0 ${h} `+pts.map(([x,y])=>`L ${x} ${y}`).join(" ") + ` L ${w} ${h} Z`;
  const line=`M `+pts.map(([x,y])=>`${x} ${y}`).join(" L ");
  return(
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display:"block"}}>
      <path d={d} fill={`${color}22`} />
      <path d={line} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function Kpi({label,value,sub,color=C.teal,spark}){
  return(
    <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(139,173,212,0.08)",padding:"16px 16px",display:"flex",justifyContent:"space-between",gap:12}}>
      <div style={{minWidth:0}}>
        <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:C.slate,letterSpacing:1.6,textTransform:"uppercase",marginBottom:8}}>{label}</div>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:700,color:color,lineHeight:1.0}}>{value}</div>
        {sub && <div style={{fontSize:11,color:C.slate,marginTop:6,lineHeight:1.3}}>{sub}</div>}
      </div>
      {spark && <div style={{alignSelf:"center"}}><MiniArea data={spark} color={color} /></div>}
    </div>
  );
}

export function Segmented({value,options,onChange}){
  return(
    <div style={{display:"inline-flex",border:"1px solid rgba(139,173,212,0.14)",background:"rgba(255,255,255,0.02)"}}>
      {options.map(o=>(
        <button key={o.value} onClick={()=>onChange(o.value)} style={{
          border:"none",cursor:"pointer",padding:"7px 10px",fontSize:11,
          background:value===o.value?`${C.teal}22`:"transparent",
          color:value===o.value?C.teal:C.slate,fontWeight:value===o.value?600:500,
          transition:"all var(--dur-1) var(--ease-out)"
        }}>{o.label}</button>
      ))}
    </div>
  );
}

export function AIDock({contextLabel,contextItems,suggest,onAsk,children}){
  return(
    <div style={{border:"1px solid rgba(139,173,212,0.1)",background:"rgba(255,255,255,0.02)",display:"flex",flexDirection:"column",minHeight:520,position:"sticky",top:76}}>
      <div style={{padding:"12px 14px",borderBottom:"1px solid rgba(139,173,212,0.08)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:12}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:28,height:28,background:`linear-gradient(135deg,${C.teal},${C.purple})`,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12}}>AI</div>
          <div>
            <div style={{fontSize:12,fontWeight:700,color:C.white}}>PoreSense AI</div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,color:C.slate,letterSpacing:1.2,textTransform:"uppercase"}}>{contextLabel||"Context-aware assistant"}</div>
          </div>
        </div>
        <Badge color={C.teal}>ACTIVE</Badge>
      </div>
      {contextItems?.length>0 && (
        <div style={{padding:"10px 12px",borderBottom:"1px solid rgba(139,173,212,0.08)",display:"flex",flexWrap:"wrap",gap:6,background:"rgba(11,31,58,0.35)"}}>
          {contextItems.map(ci=>(
            <span key={ci.k} style={{padding:"3px 9px",fontSize:10,borderRadius:999,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(139,173,212,0.14)",color:C.white}}>
              <span style={{color:C.slate}}>{ci.k}:</span> {ci.v}
            </span>
          ))}
        </div>
      )}
      {suggest?.length>0 && (
        <div style={{padding:"10px 12px",display:"flex",flexWrap:"wrap",gap:6,borderBottom:"1px solid rgba(139,173,212,0.08)"}}>
          {suggest.map(s=>(
            <button key={s} onClick={()=>onAsk?.(s)} style={{padding:"5px 10px",fontSize:10,borderRadius:999,cursor:"pointer",
              background:`${C.teal}14`,border:`1px solid ${C.teal}22`,color:C.tealLt}}>
              {s}
            </button>
          ))}
        </div>
      )}
      <div style={{padding:12,flex:1}}>
        {children}
      </div>
    </div>
  );
}
