import { useMemo, useState } from "react";
import { PRODUCTS, MACHINE_IMAGE_MAP, MACHINE_IMAGE_PRESENTATION } from "../../data/products.js";
import { INDUSTRIES, INDUSTRY_TO_MODELS, INDUSTRY_META } from "../../data/industryClassification.js";
import { productPathFromModel } from "../../data/productPaths.js";
import { DevInstrumentStory } from "../../components/developer/DevInstrumentStory.jsx";
import { Btn, Eyebrow, Mono, Serif } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function InstrumentsPage({onQuote,onRegister,showFiaPowered=false,showFlip=false,showStory=false,showIndustryFilter=false,showIndustryClassification=false}){
  const [flippedModel,setFlippedModel]=useState(null);
  const [industry,setIndustry]=useState("All");
  const industryIconMap={
    Defense:"Defense.png",
    Space:"Space Research.png",
    "Oil & Gas":"oil-gas.png",
    "Air filtration":"Air Filtration.png",
    "Water purification":"Water Filtration.png",
    Pharma:"pharma.png",
    "Technical textile":"Technical Textile.png",
    Energy:"Energy.png",
    Chemical:"Chemical.png",
    Packaging:"Packaging.png",
    "Personal hygiene":"Personal Hygiene.png",
    Biotech:"Biotech.png",
  };
  const industryCards=INDUSTRIES.filter(i=>i!=="All").map(i=>({
    key:i,
    label:i,
    icon:industryIconMap[i],
    accent:(INDUSTRY_META?.[i]?.color)||C.teal,
    glow:(INDUSTRY_META?.[i]?.glow)||((INDUSTRY_META?.[i]?.color)||C.teal),
    count:(INDUSTRY_TO_MODELS[i]||[]).length,
  }));

  const allowedModels=useMemo(()=>{
    if(!showIndustryFilter) return null;
    const list=INDUSTRY_TO_MODELS[industry]||null;
    if(!list) return null;
    return new Set(list);
  },[industry,showIndustryFilter]);

  const filteredProducts=useMemo(()=>{
    if(!showIndustryFilter) return PRODUCTS;
    if(!allowedModels) return PRODUCTS;
    return PRODUCTS.filter(p=>allowedModels.has(p.model));
  },[allowedModels,showIndustryFilter]);

  return(
    <div style={{paddingTop:72}}>
      <div style={{background:`linear-gradient(160deg,${C.navy} 0%,${C.dark} 100%)`,padding:"80px 48px 60px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <Eyebrow>Precision Instruments</Eyebrow>
          <div className="hero-h1" style={{fontSize:"clamp(40px,5vw,72px)"}}>Powered by <span className="poresense-gradient">PoreSense™</span></div>
          <p className="hero-sub" style={{marginTop:16,marginBottom:0}}>Every M19 instrument is connected to the PoreSense intelligence platform — built for regulated environments, designed to last.</p>
        </div>
      </div>
      <div style={{background:C.offwh,padding:"60px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          {showIndustryFilter&&(
            <>
              {showIndustryClassification&&(
                <div className="industry-grid" style={{marginTop:0,marginBottom:26}}>
                  {industryCards.map(card=>(
                    <button
                      key={card.key}
                      type="button"
                      className="industry-card"
                      onClick={()=>setIndustry(card.key)}
                      style={{"--industry-accent":card.accent,"--industry-glow":card.glow,appearance:"none",width:"100%",background:industry===card.key?"color-mix(in srgb, var(--industry-glow) 14%, rgba(255,255,255,0.03))":"rgba(255,255,255,0.92)"}}
                    >
                      <div className="industry-ico">
                        <img src={`/icons/${encodeURIComponent(card.icon)}`} alt={card.label} loading="lazy" decoding="async" />
                      </div>
                      <div className="industry-label" style={{fontSize:12,fontWeight:700,color:"#0b1220",letterSpacing:1,textTransform:"uppercase"}}>{card.label}</div>
                      <div style={{fontSize:11,color:"#667",marginTop:6}}>{card.count} machines</div>
                    </button>
                  ))}
                </div>
              )}
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:16,flexWrap:"wrap",marginBottom:18}}>
                <div>
                  <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,textTransform:"uppercase",color:"#667"}}>
                    Filter by industry
                  </div>
                  <div style={{fontSize:13,color:"#2b3a4a",marginTop:6}}>
                    Showing <strong>{filteredProducts.length}</strong> instruments
                  </div>
                </div>
                <div style={{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"flex-end"}}>
                  {INDUSTRIES.map(i=>{
                    const accent=(INDUSTRY_META?.[i]?.color)||C.teal;
                    return(
                    <button
                      key={i}
                      type="button"
                      onClick={()=>setIndustry(i)}
                      style={{
                        appearance:"none",
                        border:"1px solid rgba(2,6,23,0.14)",
                        background: i===industry ? "rgba(2,6,23,0.92)" : "rgba(255,255,255,0.9)",
                        color: i===industry ? "#fff" : "#0b1220",
                        padding:"10px 12px",
                        borderRadius:999,
                        fontSize:12,
                        fontWeight:600,
                        letterSpacing:0.2,
                        cursor:"pointer",
                        transition:"transform 160ms ease, background 160ms ease, border-color 160ms ease"
                      }}
                      onMouseEnter={e=>{
                        if(i!==industry){
                          e.currentTarget.style.transform="translateY(-1px)";
                          e.currentTarget.style.borderColor=`${accent}66`;
                        }
                      }}
                      onMouseLeave={e=>{
                        e.currentTarget.style.transform="translateY(0)";
                        e.currentTarget.style.borderColor="rgba(2,6,23,0.14)";
                      }}
                    >
                      <span style={{display:"inline-flex",alignItems:"center",gap:8}}>
                        <span aria-hidden style={{width:8,height:8,borderRadius:99,background:accent,boxShadow:"0 0 0 3px rgba(255,255,255,0.9)"}} />
                        <span>{i}</span>
                      </span>
                    </button>
                  );
                  })}
                </div>
              </div>
            </>
          )}
          <div className="product-grid">
            {filteredProducts.map(p=>{
              const machineImage=MACHINE_IMAGE_MAP[p.model]||null;
              const machinePresentation=MACHINE_IMAGE_PRESENTATION[p.model]||null;
              const machineImageStyle=machinePresentation ? {
                transform:`scale(${machinePresentation.scale}) translateY(${machinePresentation.y || "0%"})`,
                transformOrigin:"center center",
                clipPath: machinePresentation.clip || undefined,
              } : undefined;
              if(!showFlip){
                const pHref=productPathFromModel(p.model);
                return(
                  <div key={p.model} className="product-card" style={{"--hover-color":p.color}} onMouseEnter={e=>e.currentTarget.style.borderBottomColor=p.color} onMouseLeave={e=>e.currentTarget.style.borderBottomColor="transparent"}>
                    <div style={{padding:"28px 28px 0",minHeight:120,display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
                      {p.badge&&<div style={{display:"inline-block",padding:"3px 10px",background:p.color,color:C.white,fontSize:10,fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:8}}>{p.badge}</div>}
                      <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:p.color,letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>{p.cat}</div>
                      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:700,color:C.navy}}>{p.model}</div>
                      <div style={{fontSize:13,color:C.grey,marginTop:4}}>{p.name}</div>
                    </div>
                    <a href={pHref} className="instrument-visual" style={{display:"block",textDecoration:"none",color:"inherit"}}>
                      {machineImage
                        ? <img src={machineImage} alt={`${p.model} — ${p.name}`} loading="lazy" decoding="async" style={{...machineImageStyle,width:"100%",height:"auto"}}/>
                        : <span style={{fontSize:56}}>{p.icon}</span>}
                    </a>
                    <div style={{padding:"0 28px 16px",fontSize:13,color:C.grey,lineHeight:1.6,minHeight:92}}>{p.desc}</div>
                    <div style={{padding:"16px 28px",background:C.offwh,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,minHeight:116,alignContent:"start",borderTop:"1px solid rgba(15,23,42,0.05)"}}>
                      {p.specs.map(s=>(
                        <div key={s.l}>
                          <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:"#999",letterSpacing:1,textTransform:"uppercase"}}>{s.l}</div>
                          <div style={{fontSize:13,fontWeight:600,color:C.navy,marginTop:2}}>{s.v}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{padding:"16px 28px 24px",display:"flex",gap:10,marginTop:"auto",borderTop:"1px solid rgba(15,23,42,0.05)"}}>
                      <Btn variant="teal" style={{flex:1,padding:10,fontSize:11}} onClick={()=>window.location.assign(pHref)}>Read more</Btn>
                      <Btn variant="ghost" style={{flex:1,padding:10,fontSize:11,color:C.navy,borderColor:C.greyLt}} onClick={onQuote}>Request quote</Btn>
                    </div>
                  </div>
                );
              }

              const isFlipped=flippedModel===p.model;
              const pHref=productPathFromModel(p.model);
              return(
                <div
                  key={p.model}
                  className={`product-card flip-card${isFlipped?" is-flipped":""}`}
                  style={{"--hover-color":p.color}}
                  role="button"
                  tabIndex={0}
                  onClick={()=>setFlippedModel(m=>m===p.model?null:p.model)}
                  onKeyDown={e=>{
                    if(e.key==="Enter"||e.key===" "){
                      e.preventDefault();
                      setFlippedModel(m=>m===p.model?null:p.model);
                    }
                  }}
                >
                  <div className="flip-card-inner">
                    <div className="flip-face flip-front">
                      <div style={{padding:"28px 28px 0",minHeight:120,display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
                        {p.badge&&<div style={{display:"inline-block",padding:"3px 10px",background:p.color,color:C.white,fontSize:10,fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:8}}>{p.badge}</div>}
                        <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:p.color,letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>{p.cat}</div>
                        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:700,color:C.navy}}>{p.model}</div>
                        <div style={{fontSize:13,color:C.grey,marginTop:4}}>{p.name}</div>
                      </div>
                      <a href={pHref} className="instrument-visual" style={{display:"block",textDecoration:"none",color:"inherit"}} onClick={e=>e.stopPropagation()}>
                        {machineImage
                          ? <img src={machineImage} alt={`${p.model} — ${p.name}`} loading="lazy" decoding="async" style={machineImageStyle}/>
                          : <span style={{fontSize:56}}>{p.icon}</span>}
                      </a>
                      <div style={{padding:"0 28px 16px",fontSize:13,color:C.grey,lineHeight:1.6,minHeight:92}}>
                        {p.desc.substring(0,80)}...
                      </div>
                    </div>

                    <div className="flip-face flip-back">
                      <div style={{padding:"18px 28px 0",fontSize:13,color:C.grey,lineHeight:1.6}}>
                        {p.desc}
                      </div>
                      <div style={{padding:"16px 28px",background:C.offwh,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:8,minHeight:116,alignContent:"start",borderTop:"1px solid rgba(15,23,42,0.05)"}}>
                        {p.specs.map(s=>(
                          <div key={s.l}>
                            <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:"#999",letterSpacing:1,textTransform:"uppercase"}}>{s.l}</div>
                            <div style={{fontSize:13,fontWeight:600,color:C.navy,marginTop:2}}>{s.v}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{padding:"16px 28px 24px",display:"flex",gap:10,marginTop:"auto",borderTop:"1px solid rgba(15,23,42,0.05)",flexWrap:"wrap"}}>
                        <Btn variant="teal" style={{flex:1,padding:10,fontSize:11,minWidth:120}} onClick={e=>{e.stopPropagation();window.location.assign(pHref);}}>Read more</Btn>
                        <Btn variant="teal" style={{flex:1,padding:10,fontSize:11,minWidth:120}} onClick={e=>{e.stopPropagation();onRegister();}}>Get quote</Btn>
                        <Btn variant="ghost" style={{flex:1,padding:10,fontSize:11,color:C.navy,borderColor:C.greyLt,minWidth:120}} onClick={e=>{e.stopPropagation();onQuote();}}>Download spec</Btn>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Developer-only: Apple-style scrollytelling */}
      {showStory&&<DevInstrumentStory/>}
      <div style={{background:C.navy,padding:"60px 48px",textAlign:"center"}}>
        <Serif size={36} weight={600} mb={16}>Need a demo in your lab?</Serif>
        <p style={{color:C.slate,marginBottom:28,fontSize:14}}>Our applications scientists will bring an instrument to your facility for an on-site demonstration.</p>
        <Btn variant="gold" size="lg" onClick={onQuote}>Request On-Site Demo</Btn>
      </div>
    </div>
  );
}
