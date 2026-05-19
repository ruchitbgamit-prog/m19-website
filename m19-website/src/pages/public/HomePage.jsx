import { PRODUCTS } from "../../data/products.js";
import { INDUSTRY_META } from "../../data/industryClassification.js";
import { productPathFromModel } from "../../data/productPaths.js";
import { SERVICES } from "../../data/siteContent.js";
import { industryHref } from "../../config/site.js";
import { PartnersSection } from "../../components/public/PartnersSection.jsx";
import { Btn, Eyebrow, Serif, UIIcon } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function HomePage({onNav,onQuote,onRegister}){
  const iconUrl=(file)=>`/icons/${encodeURIComponent(file)}`;
  const OVERVIEW_INDUSTRIES=[
    {routeKey:"Defense",label:"Defense",icon:"Defense.png",accent:INDUSTRY_META.Defense.color,glow:INDUSTRY_META.Defense.glow},
    {routeKey:"Space",label:"Space Research",icon:"Space Research.png",accent:INDUSTRY_META.Space.color,glow:INDUSTRY_META.Space.glow},
    {routeKey:"Oil & Gas",label:"Oil & Gas",icon:"oil-gas.png",accent:INDUSTRY_META["Oil & Gas"].color,glow:INDUSTRY_META["Oil & Gas"].glow},
    {routeKey:"Air filtration",label:"Air Filtration",icon:"Air Filtration.png",accent:INDUSTRY_META["Air filtration"].color,glow:INDUSTRY_META["Air filtration"].glow},
    {routeKey:"Water purification",label:"Water Purification",icon:"Water Filtration.png",accent:INDUSTRY_META["Water purification"].color,glow:INDUSTRY_META["Water purification"].glow},
    {routeKey:"Pharma",label:"Pharma",icon:"pharma.png",accent:INDUSTRY_META.Pharma.color,glow:INDUSTRY_META.Pharma.glow},
    {routeKey:"Technical textile",label:"Technical Textiles",icon:"Technical Textile.png",accent:INDUSTRY_META["Technical textile"].color,glow:INDUSTRY_META["Technical textile"].glow},
    {routeKey:"Energy",label:"Energy",icon:"Energy.png",accent:INDUSTRY_META.Energy.color,glow:INDUSTRY_META.Energy.glow},
    {routeKey:"Chemical",label:"Chemical",icon:"Chemical.png",accent:INDUSTRY_META.Chemical.color,glow:INDUSTRY_META.Chemical.glow},
    {routeKey:"Packaging",label:"Packaging",icon:"Packaging.png",accent:INDUSTRY_META.Packaging.color,glow:INDUSTRY_META.Packaging.glow},
    {routeKey:"Personal hygiene",label:"Personal Hygiene",icon:"Personal Hygiene.png",accent:INDUSTRY_META["Personal hygiene"]?.color || "#F97272",glow:INDUSTRY_META["Personal hygiene"]?.glow || "rgb(255 180 180)"},
    {routeKey:"Biotech",label:"Biotech",icon:"Biotech.png",accent:INDUSTRY_META.Biotech.color,glow:INDUSTRY_META.Biotech.glow},
  ];
  return(
    <>
      <div className="hero">
        <div className="hero-grid"/><div className="hero-glow"/><div className="hero-glow2"/>
        <div className="hero-content">
          <div className="hero-eyebrow fade-up-1"><div className="hero-eyebrow-dot"/><span className="hero-eyebrow-text">PoreSense™ Platform — Now Live</span></div>
          <h1 className="hero-h1 fade-up-2"><em>Material</em><strong>Intelligence.</strong><span style={{color:C.slate,fontWeight:600}}> Reimagined.</span></h1>
          <p className="hero-sub fade-up-3">India's first integrated material intelligence platform — precision instruments, AI-powered analytics, and cloud-based quality intelligence, unified under PoreSense™.</p>
          <div className="hero-actions fade-up-4">
            <Btn variant="gold" size="lg" onClick={onRegister}>Start Free →</Btn>
            <Btn variant="ghost" size="lg" onClick={()=>onNav("platform")}>Explore Platform</Btn>
            <Btn variant="outline-gold" size="lg" onClick={onQuote}>Get a Quote</Btn>
          </div>
        </div>
      </div>

      <div className="strip">
        <span className="strip-label">Platform</span>
        <div className="strip-items">
          {["Instruments","PoreSense Cloud","AI Analytics","Lab Testing","E-Commerce","LIMS Integration","API","BI Dashboard","Regulatory Compliance"].map(i=><span key={i} className="strip-item">{i}</span>)}
        </div>
      </div>

      <PartnersSection />

      <div className="trust-bar">
        <div className="trust-items">
          {[
            ["pharma.png","Pharmaceuticals"],
            ["Defense.png","Defense"],
            ["Technical Textile.png","Technical Textiles"],
            ["oil-gas.png","Oil & Gas"],
            ["Water Filtration.png","Water Treatment"],
            ["Air Filtration.png","Filtration"],
          ].map(([icon,name])=>(
            <div key={name} style={{textAlign:"center"}}>
              <div style={{marginBottom:8,display:"flex",justifyContent:"center"}}>
                <UIIcon src={icon} alt={name} size={26}/>
              </div>
              <div style={{fontSize:11,color:C.slate,letterSpacing:1,textTransform:"uppercase"}}>{name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform preview */}
      <div style={{background:C.dark,padding:"100px 0"}}>
        <div className="section" style={{paddingTop:0,paddingBottom:0}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center"}}>
            <div>
              <Eyebrow>The PoreSense™ Platform</Eyebrow>
              <div className="section-h2">One platform.<br/><em>Every measurement.</em></div>
              <p className="section-body">From instrument to AI-powered cloud intelligence — M19's PoreSense platform connects every pore measurement into a single, intelligent data ecosystem.</p>
              <div style={{display:"flex",gap:16,marginTop:36,flexWrap:"wrap"}}>
                <Btn variant="gold" onClick={onRegister}>Create Account</Btn>
                <Btn variant="outline-gold" onClick={()=>onNav("platform")}>Explore Platform →</Btn>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2}}>
              {[{icon:"🔬",t:"Instruments",d:"5 precision instruments",c:C.navyMid},{icon:"☁️",t:"Cloud & SaaS",d:"Real-time data & audit trails",c:C.teal},{icon:"🤖",t:"AI Intelligence",d:"Predictive quality & OOT alerts",c:C.purple},{icon:"🔗",t:"API & LIMS",d:"Connect your lab infrastructure",c:"#1A5276"}].map(c=>(
                <div key={c.t} onClick={()=>onNav("platform")} style={{background:`${c.c}22`,border:`1px solid ${c.c}33`,padding:"28px 24px",cursor:"pointer",transition:"all 0.2s"}}
                  onMouseEnter={e=>e.currentTarget.style.background=`${c.c}44`}
                  onMouseLeave={e=>e.currentTarget.style.background=`${c.c}22`}>
                  <div style={{fontSize:28,marginBottom:12}}>{c.icon}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:600,color:C.white,marginBottom:6}}>{c.t}</div>
                  <div style={{fontSize:12,color:C.slate,lineHeight:1.5}}>{c.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Instruments preview */}
      <div style={{background:C.offwh,color:C.navy,padding:"100px 0"}}>
        <div className="section" style={{paddingTop:0,paddingBottom:0}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:24}}>
            <div>
              <div className="section-eyebrow">Precision Instruments</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(36px,4vw,52px)",fontWeight:600,color:C.navy}}>Powered by <span className="poresense-gradient">PoreSense™</span></div>
            </div>
            <Btn variant="teal" onClick={()=>onNav("instruments")}>View All →</Btn>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:2,marginTop:48}}>
            {PRODUCTS.slice(0,4).map(p=>(
              <a
                key={p.model}
                href={productPathFromModel(p.model)}
                style={{background:C.white,padding:"24px",cursor:"pointer",transition:"all 0.2s",borderBottom:"3px solid transparent",boxShadow:"0 2px 12px rgba(2,6,23,0.06)",textDecoration:"none",color:"inherit",display:"block"}}
                onMouseEnter={e=>{e.currentTarget.style.borderBottomColor=p.color;e.currentTarget.style.transform="translateY(-4px)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderBottomColor="transparent";e.currentTarget.style.transform="translateY(0)";}}
              >
                <div style={{fontSize:32,marginBottom:12}}>{p.icon}</div>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:p.color,letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>{p.cat}</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:700,color:C.navy}}>{p.model}</div>
                <div style={{fontSize:12,color:C.grey,marginTop:4}}>{p.name}</div>
                <div style={{fontSize:12,color:C.grey,marginTop:12,lineHeight:1.5}}>{p.desc.substring(0,70)}...</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Lab testing preview */}
      <div style={{background:C.navy,padding:"100px 0"}}>
        <div className="section" style={{paddingTop:0,paddingBottom:0}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center"}}>
            <div>
              <Eyebrow>Lab Testing Services</Eyebrow>
              <div className="section-h2">Results in <em>days,</em><br/>not weeks.</div>
              <p className="section-body">NABL-aligned testing against 18+ international standards. Serving pharma, defence, textile, and industrial clients globally.</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginTop:36}}>
                {[["48hr","Standard turnaround"],["Same Day","Urgent option"],["18+","Standards covered"],["NABL","Aligned processes"]].map(([v,l])=>(
                  <div key={l} style={{padding:"16px",background:"rgba(255,255,255,0.04)",borderLeft:`2px solid ${C.gold}`}}>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:700,color:C.gold}}>{v}</div>
                    <div style={{fontSize:11,color:C.slate,marginTop:4,lineHeight:1.4}}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{display:"flex",gap:16,marginTop:36,flexWrap:"wrap"}}>
                <Btn variant="gold" onClick={()=>onNav("testing")}>View Services</Btn>
                <Btn variant="ghost" onClick={onQuote}>Get Test Quote</Btn>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:2}}>
              {SERVICES.slice(0,4).map(s=>(
                <div key={s.name} onClick={()=>onNav("testing")} style={{padding:"16px 20px",background:"rgba(255,255,255,0.04)",borderLeft:"2px solid transparent",cursor:"pointer",transition:"all 0.2s",display:"flex",gap:14,alignItems:"flex-start"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderLeftColor=C.teal;e.currentTarget.style.background="rgba(14,124,123,0.1)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderLeftColor="transparent";e.currentTarget.style.background="rgba(255,255,255,0.04)";}}>
                  <UIIcon src={s.icon} alt={s.name} size={22} style={{marginTop:2}}/>
                  <div>
                    <div style={{fontWeight:600,fontSize:14,color:C.white,marginBottom:3}}>{s.name}</div>
                    <div style={{fontSize:12,color:C.slate,lineHeight:1.5}}>{s.desc.substring(0,55)}...</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Industries */}
      <div style={{background:C.dark,padding:"100px 0"}}>
        <div className="section" style={{paddingTop:0,paddingBottom:0}}>
          <Eyebrow>Industries We Serve</Eyebrow>
          <div className="section-h2">Built for <em>regulated</em><br/>high-stakes environments.</div>
          <div className="industry-grid">
            {OVERVIEW_INDUSTRIES.map(({routeKey,label,icon,accent,glow})=>(
              <a
                key={label}
                href={industryHref(routeKey)}
                className="industry-card"
                style={{"--industry-accent":accent,"--industry-glow":glow||accent}}
              >
                <div className="industry-ico">
                  <img src={iconUrl(icon)} alt={label} loading="lazy" decoding="async" />
                </div>
                <div className="industry-label" style={{fontSize:12,fontWeight:600,color:C.white,letterSpacing:1,textTransform:"uppercase"}}>{label}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-banner">
        <Serif size={52} weight={600} style={{marginBottom:12,fontFamily:"'Cormorant Garamond',serif"}}>Ready to <em style={{color:C.navy,fontStyle:"italic"}}>elevate</em> your lab?</Serif>
        <p style={{fontSize:16,color:"rgba(255,255,255,0.85)",maxWidth:480,margin:"0 auto 36px",lineHeight:1.7}}>Create your free PoreSense account. Access the platform, submit test requests, and connect your instruments — all in one place.</p>
        <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
          <Btn variant="ghost" size="lg" style={{borderColor:"rgba(255,255,255,0.4)",color:C.white}} onClick={onRegister}>Create Free Account</Btn>
          <Btn variant="ghost" size="lg" style={{borderColor:"rgba(255,255,255,0.4)",color:C.white}} onClick={onQuote}>Talk to an Expert</Btn>
        </div>
      </div>
    </>
  );
}
