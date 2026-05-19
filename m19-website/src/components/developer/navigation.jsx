import { INDUSTRY_META } from "../../data/industryClassification.js";
import { industryHref } from "../../config/site.js";
import { Btn } from "../ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function DeveloperNav({page,onNav,onToggleDeveloper,onOpenMobileMenu,onLogin,onRegister,onQuote}){
  return(
    <nav className="dev-nav">
      <div className="dev-nav-logo" onClick={()=>onNav("home")}>
        <img className="dev-nav-logo-img" src="/assets/m19_logo_white.png" alt="M19" />
      </div>

      <div className="dev-nav-links">
        {[["home","Overview"],["platform","Platform"],["instruments","Instruments"],["testing","Lab Testing"],["about","About"]].map(([k,l])=>(
          <span key={k} className={`dev-nav-link${page===k?" active":""}`} onClick={()=>onNav(k)}>{l}</span>
        ))}
        <IndustryNavMenu triggerClassName={`dev-nav-link${page==="industry"?" active":""}`} />
        <span className="dev-nav-link active" onClick={onToggleDeveloper}>Developer</span>
        <div className="dev-nav-divider"/>
        <span className="dev-nav-link" onClick={onLogin}>Sign In</span>
      </div>

      <button className="dev-mobile-toggle" onClick={onOpenMobileMenu} aria-label="Open navigation">≡</button>

      <div className="dev-nav-actions">
        <Btn variant="ghost" size="sm" onClick={onQuote}>Get Quote</Btn>
        <Btn variant="gold" size="sm" onClick={onRegister}>Get Started</Btn>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PUBLIC WEBSITE — PAGES
═══════════════════════════════════════════════════════════════════════════ */
/* ═══════════════════════════════════════════════════════════════════════════
   DEVELOPER UI — SIDE NAV + MOBILE DRAWER
═══════════════════════════════════════════════════════════════════════════════════ */
export function DeveloperSideNav({page,onSelect,onLogin,onRegister,onQuote,onToggleDeveloper}){
  const items=[
    {k:"home",l:"Overview"},
    {k:"platform",l:"Platform"},
    {k:"instruments",l:"Instruments"},
    {k:"testing",l:"Lab Testing"},
    {k:"about",l:"About"},
  ];

  return(
    <aside className="dev-sidenav" aria-label="Developer navigation">
      <div className="dev-sidenav-inner">
        <div className="dev-sidenav-title">Developer</div>
        {items.map(it=>(
          <div
            key={it.k}
            className={`dev-sidenav-item${page===it.k?" active":""}`}
            onClick={()=>onSelect(it.k)}
          >
            <div className="dev-sidenav-item-icon">{it.icon}</div>
            <div style={{fontSize:13,fontWeight:700}}>{it.l}</div>
          </div>
        ))}

        <div className="dev-drawer-actions" style={{marginTop:18}}>
          <button className="dev-drawer-textlink" onClick={onLogin}>Sign In</button>
          <button className="dev-drawer-textlink" onClick={onToggleDeveloper}>Website</button>
        </div>

        <div className="dev-drawer-actions" style={{marginTop:12}}>
          <Btn variant="ghost" size="sm" full onClick={onQuote}>Get Quote</Btn>
          <Btn variant="gold" size="sm" full onClick={onRegister}>Get Started</Btn>
        </div>
      </div>
    </aside>
  );
}

export function DeveloperMobileDrawer({open,page,onSelect,onClose,onLogin,onRegister,onQuote,onToggleDeveloper}){
  if(!open) return null;
  const items=[
    {k:"home",l:"Overview",icon:"⌘"},
    {k:"platform",l:"Platform",icon:"▦"},
    {k:"instruments",l:"Instruments",icon:"◈"},
    {k:"testing",l:"Lab Testing",icon:"▣"},
    {k:"about",l:"About",icon:"i"},
  ];

  return(
    <div className="dev-drawer-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="dev-drawer-panel" onClick={e=>e.stopPropagation()}>
        <div className="dev-drawer-top">
          <img className="dev-nav-logo-img" src="/assets/m19_logo_white.png" alt="M19" />
          <button className="dev-drawer-close" onClick={onClose} aria-label="Close menu">✕</button>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:8,marginTop:8}}>
          {items.map(it=>(
            <div
              key={it.k}
              className={`dev-sidenav-item${page===it.k?" active":""}`}
              onClick={()=>{onSelect(it.k);onClose();}}
            >
              <div className="dev-sidenav-item-icon">{it.icon}</div>
              <div style={{fontSize:13,fontWeight:700}}>{it.l}</div>
            </div>
          ))}
        </div>

        <div style={{marginTop:14,paddingTop:14,borderTop:"1px solid rgba(255,255,255,0.08)"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,color:"rgba(255,255,255,0.45)",textTransform:"uppercase",marginBottom:8}}>Industries</div>
          <div style={{display:"flex",flexDirection:"column",gap:6,maxHeight:220,overflow:"auto"}}>
            {Object.keys(INDUSTRY_META).filter(k=>k!=="All").map(k=>(
              <a
                key={k}
                href={industryHref(k)}
                onClick={onClose}
                style={{color:"rgba(255,255,255,0.85)",textDecoration:"none",fontSize:13,padding:"8px 0",borderBottom:"1px solid rgba(255,255,255,0.06)"}}
              >
                {INDUSTRY_META[k]?.label || k}
              </a>
            ))}
          </div>
        </div>

        <div className="dev-drawer-actions">
          <button className="dev-drawer-textlink" onClick={()=>{onLogin();onClose();}}>Sign In</button>
          <button className="dev-drawer-textlink" onClick={()=>{onToggleDeveloper();onClose();}}>Website</button>
          <Btn variant="ghost" size="sm" full onClick={()=>{onQuote();onClose();}}>Get Quote</Btn>
          <Btn variant="gold" size="sm" full onClick={()=>{onRegister();onClose();}}>Get Started</Btn>
        </div>
      </div>
    </div>
  );
}

export function DevPoweredBy({variant="generic"}){
  const src={
    fia:"/assets/M19_FIA_logo-89b4741b-237d-4531-b36b-057221da2310.png",
    generic:"/assets/M19_Powered_by_poresence-6a2789ac-ac51-49d7-a2b9-ddd8c1498808.png"
  }[variant]||"/assets/M19_Powered_by_poresence-6a2789ac-ac51-49d7-a2b9-ddd8c1498808.png";

  return(
    <div className="dev-powered-wrap">
      <div className="dev-powered-inner">
        <img className="dev-powered-img" src={src} alt="Powered by PoreSense" />
      </div>
    </div>
  );
}
