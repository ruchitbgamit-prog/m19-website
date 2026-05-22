import { useEffect, useRef, useState } from "react";
import { INDUSTRY_META } from "../../data/industryClassification.js";
import { LAB_TESTING_EXTERNAL_URL } from "../../config/site.js";
import { industryHref } from "../../config/site.js";
import { Btn } from "../ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function IndustryNavMenu({triggerClassName}){
  const [open,setOpen]=useState(false);
  const wrapRef=useRef(null);
  const industryItems=Object.keys(INDUSTRY_META).filter(k=>k!=="All");

  useEffect(()=>{
    const onDocDown=(e)=>{
      if(!open) return;
      const el=wrapRef.current;
      if(el && !el.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDocDown);
    return()=>document.removeEventListener("pointerdown", onDocDown);
  },[open]);

  return(
    <div className="pub-nav-dropdown" ref={wrapRef}>
      <span
        className={triggerClassName}
        onClick={()=>setOpen(v=>!v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e)=>{if(e.key==="Enter"||e.key===" ")setOpen(v=>!v);}}
      >
        Industry
      </span>
      {open&&(
        <div className="pub-nav-dropdown-panel" role="menu" aria-label="Industries">
          {industryItems.map(k=>{
            const meta=INDUSTRY_META[k];
            const iconFile=meta?.icon;
            const accent=meta?.color||"#1FC1C6";
            const glow=meta?.glow||accent;
            const iconUrl=iconFile?`/icons/${encodeURIComponent(iconFile)}`:null;
            return(
            <a
              key={k}
              className="pub-nav-dd-item"
              role="menuitem"
              href={industryHref(k)}
              onClick={()=>setOpen(false)}
              style={{
                "--dd-accent":accent,
                "--dd-glow":glow,
                ...(iconUrl?{"--dd-icon-url":`url("${iconUrl}")`}:{}),
              }}
            >
              <span className="pub-nav-dd-item-inner">
                {iconUrl
                  ? <span className="pub-nav-dd-ico" aria-hidden />
                  : <span className="pub-nav-dd-dot" aria-hidden />}
                <span className="pub-nav-dd-label">{meta?.label||k}</span>
              </span>
            </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function PublicNav({page,onNav,onLogin,onRegister,onQuote}){
  return(
    <nav className="pub-nav">
      <div className="pub-nav-logo" onClick={()=>onNav("home")}>
        <img className="pub-nav-logo-img" src="/assets/m19_logo_white.png" alt="M19" />
      </div>
      <div className="pub-nav-links">
        {[["platform","Platform"],["instruments","Instruments"],["testing","Lab Testing"],["about","About"]].map(([k,l])=>
          k==="testing" ? (
            <a key={k} className="pub-nav-link" href={LAB_TESTING_EXTERNAL_URL} rel="noopener noreferrer">
              {l}
            </a>
          ) : (
            <span key={k} className={`pub-nav-link${page===k?" active":""}`} onClick={()=>onNav(k)}>{l}</span>
          )
        )}
        <IndustryNavMenu triggerClassName={`pub-nav-link${page==="industry"?" active":""}`} />
        <div className="pub-nav-divider"/>
        <span className="pub-nav-link" onClick={onLogin} style={{color:C.white}}>Sign In</span>
      </div>
      <div style={{display:"flex",gap:8}}>
        <Btn variant="ghost" size="sm" onClick={onQuote}>Get Quote</Btn>
        <Btn variant="gold" size="sm" onClick={onRegister}>Get Started</Btn>
      </div>
    </nav>
  );
}

