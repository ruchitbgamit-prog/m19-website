import { A } from "../theme/adminColors.js";

export const ADMIN_STYLES = `
.admin-body{background:${A.bg};color:${A.text};font-family:'DM Sans',sans-serif;}
.admin-sidebar{width:220px;background:${A.panel};border-right:1px solid ${A.border};
  display:flex;flex-direction:column;flex-shrink:0;height:100vh;overflow:hidden;}
.admin-topbar{height:52px;background:${A.panel};border-bottom:1px solid ${A.border};
  display:flex;align-items:center;justify-content:space-between;padding:0 24px;
  position:sticky;top:0;z-index:10;flex-shrink:0;}
.admin-nav-item{display:flex;align-items:center;gap:9px;padding:8px 16px;cursor:pointer;
  border-left:2px solid transparent;transition:all 0.12s;font-size:12px;color:${A.muted};}
.admin-nav-item:hover{background:rgba(255,255,255,0.03);color:${A.text};}
.admin-nav-item.active{background:rgba(230,57,70,0.08);border-left-color:${A.red};color:${A.text};}
.admin-section{padding:6px 14px 2px;font-family:'DM Mono',monospace;font-size:8px;
  color:${A.dim};letter-spacing:2px;text-transform:uppercase;margin-top:8px;}
.admin-card{background:${A.panel};border:1px solid ${A.border};padding:20px;}
.admin-table-row{display:grid;gap:12px;padding:11px 16px;border-bottom:1px solid ${A.border};
  align-items:center;transition:background 0.1s;}
.admin-table-row:hover{background:rgba(255,255,255,0.02);}
.admin-table-hdr{display:grid;gap:12px;padding:8px 16px;background:${A.panel};
  border-bottom:1px solid ${A.border};}
.abtn{padding:6px 14px;font-size:11px;font-weight:600;letter-spacing:1px;
  text-transform:uppercase;cursor:pointer;border:none;transition:all 0.15s;font-family:'DM Sans',sans-serif;}
.abtn:hover{opacity:0.85;transform:translateY(-1px);}
.abtn-red{background:${A.red};color:#fff;}
.abtn-ghost{background:transparent;color:${A.muted};border:1px solid ${A.border};}
.abtn-ghost:hover{color:${A.text};border-color:${A.muted};}
.abtn-green{background:${A.green};color:#fff;}
.abtn-amber{background:${A.amber};color:rgba(2,6,23,0.92);}
.abtn-blue{background:${A.blue};color:#fff;}
.admin-input{width:100%;padding:8px 11px;background:rgba(255,255,255,0.04);
  border:1px solid ${A.border};color:${A.text};font-size:12px;outline:none;font-family:'DM Sans',sans-serif;}
.admin-input:focus{border-color:${A.red};}
.admin-select{width:100%;padding:8px 11px;background:rgba(255,255,255,0.04);
  border:1px solid ${A.border};color:${A.text};font-size:12px;outline:none;
  font-family:'DM Sans',sans-serif;appearance:none;cursor:pointer;}
.admin-select option{background:${A.panel};}
.admin-badge{padding:2px 8px;font-family:'DM Mono',monospace;font-size:8px;letter-spacing:1px;text-transform:uppercase;border:1px solid;}
.kpi-card{background:${A.panel};border:1px solid ${A.border};padding:18px 20px;
  border-left:3px solid transparent;}
.stat-bar{height:2px;background:${A.dim};margin-top:8px;}
.stat-bar-fill{height:100%;transition:width 1s ease;}
.sparkline{display:flex;align-items:flex-end;gap:3px;height:36px;}
.spark-bar{flex:1;border-radius:1px 1px 0 0;transition:all 0.3s;}
.tag{padding:2px 7px;font-size:9px;font-family:'DM Mono',monospace;letter-spacing:1px;
  text-transform:uppercase;border-radius:2px;}
.priority-high{background:${A.redDim};color:${A.redLt};border:1px solid rgba(230,57,70,0.3);}
.priority-med{background:${A.amberDim};color:${A.amber};border:1px solid rgba(244,162,97,0.3);}
.priority-low{background:${A.greenDim};color:${A.green};border:1px solid rgba(42,157,143,0.3);}
.ticket-open{background:${A.blueDim};color:${A.blue};border:1px solid rgba(74,144,226,0.3);}
`;
