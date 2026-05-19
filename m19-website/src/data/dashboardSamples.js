/** Demo dashboard datasets. */
import { C } from "../theme/colors.js";

export const ORDERS=[
  {id:"M19-2026-0412",test:"Filter Integrity — FIA",status:"In Progress",date:"15 Mar",std:"USP <1207>",eta:"17 Mar"},
  {id:"M19-2026-0389",test:"Pore Size Distribution",status:"Completed",date:"10 Mar",std:"ASTM E1294",eta:"—"},
  {id:"M19-2026-0371",test:"MVTR Testing × 12 samples",status:"Report Ready",date:"08 Mar",std:"ASTM E96",eta:"—"},
  {id:"M19-2026-0340",test:"Bubble Point — 6 filters",status:"Completed",date:"01 Mar",std:"ASTM F316",eta:"—"},
];
export const STATUS_COLOR={Completed:C.green,"Report Ready":C.teal,"In Progress":C.amber,"Pending":C.slate};

/* ── FIA SMART DASHBOARD (testing data) ─────────────────────────────────── */
export const FIA_MACHINE_IDS=["FIA-2024-0041","FIA-2024-0042","FIA-2024-0047"];
export const FIA_LOTS=["LOT-26A-114","LOT-26A-118","LOT-26B-031","LOT-26C-002"];
export const FIA_MEDIA=["Water","IPA","Air"];
export const FIA_RUNS = Array.from({length:34}).map((_,i)=>{
  const dayOffset=33-i;
  const dt=new Date(Date.now()-dayOffset*24*60*60*1000);
  const machineId=FIA_MACHINE_IDS[(i*7)%FIA_MACHINE_IDS.length];
  const lotNo=FIA_LOTS[(i*5)%FIA_LOTS.length];
  const media=FIA_MEDIA[(i*3)%FIA_MEDIA.length];
  const baseBP=3.35 + (machineId.endsWith("47")?0.08:0) + (lotNo.includes("26B")?-0.06:0);
  const noise=(Math.sin(i*0.9)+Math.cos(i*0.35))*0.03;
  const bubblePoint=+(baseBP + noise).toFixed(2);
  const diffFlow=+(7.8 + (Math.cos(i*0.7)*0.5) + (lotNo.includes("26C")?0.6:0)).toFixed(1);
  const integrityIdx=+(100 - (diffFlow-7.8)*4 - Math.abs(bubblePoint-3.35)*22).toFixed(1);
  const oot = integrityIdx < 96.0 || bubblePoint < 3.15 || diffFlow > 9.3;
  const pass = !oot;
  const id=`FIA-RUN-${String(4100+i).padStart(4,"0")}`;
  return { id, ts: dt.toISOString(), date: dt.toLocaleDateString("en-IN",{day:"2-digit",month:"short"}), machineId, lotNo, media, bubblePoint, diffFlow, integrityIdx, oot, pass };
});
