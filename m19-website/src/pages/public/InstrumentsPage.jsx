import { useEffect, useMemo, useRef, useState } from "react";
import { PRODUCTS, MACHINE_IMAGE_MAP, MACHINE_IMAGE_PRESENTATION } from "../../data/products.js";
import { INDUSTRIES, INDUSTRY_TO_MODELS, INDUSTRY_META } from "../../data/industryClassification.js";
import { productPathFromModel } from "../../data/productPaths.js";
import { DevInstrumentStory } from "../../components/developer/DevInstrumentStory.jsx";
import { Btn, Eyebrow, Mono, Serif } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function InstrumentsPage({onQuote,onRegister,onProductNav,showFiaPowered=false,showFlip=false,showStory=false,showIndustryFilter=false,showIndustryClassification=false}){
  const goToProduct=(model,e)=>{
    e?.preventDefault?.();
    if(onProductNav) onProductNav(model);
    else window.location.assign(productPathFromModel(model));
  };
  const [flippedModel,setFlippedModel]=useState(null);
  const industryList=useMemo(()=>INDUSTRIES.filter((i)=>i!=="All"),[]);
  const [selectedIndustry,setSelectedIndustry]=useState(()=>(showIndustryFilter?INDUSTRIES.filter((i)=>i!=="All")[0]:null));
  const [autoPaused,setAutoPaused]=useState(false);
  const pillRefs=useRef({});
  const pillsScrollRef=useRef(null);
  const resumeAutoRef=useRef(null);

  const AUTO_CYCLE_MS=1000;
  const AUTO_RESUME_MS=5000;

  useEffect(()=>{
    if(!showIndustryFilter||autoPaused||industryList.length<2) return undefined;

    const id=window.setInterval(()=>{
      setSelectedIndustry((prev)=>{
        const idx=industryList.indexOf(prev);
        return industryList[(idx+1)%industryList.length];
      });
    },AUTO_CYCLE_MS);
    return ()=>window.clearInterval(id);
  },[showIndustryFilter,autoPaused,industryList]);

  useEffect(()=>()=>{
    if(resumeAutoRef.current) window.clearTimeout(resumeAutoRef.current);
  },[]);

  useEffect(()=>{
    if(!showIndustryFilter||!selectedIndustry) return;
    const pill=pillRefs.current[selectedIndustry];
    if(!pill) return;
    const scrollBehavior=autoPaused?"instant":"smooth";
    pill.scrollIntoView({behavior:scrollBehavior,inline:"center",block:"nearest"});
  },[selectedIndustry,showIndustryFilter,autoPaused]);

  const selectIndustry=(industry)=>{
    setSelectedIndustry(industry);
    setAutoPaused(true);
    if(resumeAutoRef.current) window.clearTimeout(resumeAutoRef.current);
    resumeAutoRef.current=window.setTimeout(()=>setAutoPaused(false),AUTO_RESUME_MS);
  };
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

  const filteredProducts=useMemo(()=>{
    if(!showIndustryFilter) return PRODUCTS;
    if(!selectedIndustry) return [];
    const models=INDUSTRY_TO_MODELS[selectedIndustry]||[];
    const allowed=new Set(models);
    return PRODUCTS.filter((p)=>allowed.has(p.model));
  },[selectedIndustry,showIndustryFilter]);

  return(
    <div className="instruments-page">
      <section className="instruments-hero">
        <div className="instruments-shell">
          <Eyebrow>Precision Instruments</Eyebrow>
          <div className="hero-h1 instruments-hero-title">Powered by <span className="poresense-gradient">PoreSense™</span></div>
          <p className="hero-sub instruments-hero-sub">Every M19 instrument is connected to the PoreSense intelligence platform — built for regulated environments, designed to last.</p>
        </div>
      </section>
      <div className="instruments-body">
        <div className="instruments-shell">
          {showIndustryFilter&&(
            <div className="instruments-industry-picker">
              {showIndustryClassification&&(
                <div className="industry-grid" style={{marginTop:0,marginBottom:26}}>
                  {industryCards.map((card)=>(
                    <button
                      key={card.key}
                      type="button"
                      className="industry-card"
                      onClick={()=>selectIndustry(card.key)}
                      style={{"--industry-accent":card.accent,"--industry-glow":card.glow,appearance:"none",width:"100%",background:selectedIndustry===card.key?"color-mix(in srgb, var(--industry-glow) 14%, rgba(255,255,255,0.03))":"rgba(255,255,255,0.92)"}}
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
              <div className="instruments-industry-intro">
                <p className="instruments-industry-prompt">
                  {selectedIndustry ? (
                    <>
                      Instruments for{" "}
                      <strong>{INDUSTRY_META?.[selectedIndustry]?.label || selectedIndustry}</strong>
                    </>
                  ) : (
                    "Explore instruments by industry"
                  )}
                </p>
                <p className="instruments-industry-guide">
                  Click an industry to view its instruments 
                </p>
              </div>
              <div
                ref={pillsScrollRef}
                className="instruments-industry-pills"
                role="group"
                aria-label="Select industry"
              >
                {industryList.map((i)=>{
                  const accent=(INDUSTRY_META?.[i]?.color)||C.teal;
                  const isActive=selectedIndustry===i;
                  return(
                    <button
                      key={i}
                      ref={(el)=>{if(el) pillRefs.current[i]=el;}}
                      type="button"
                      className={`instruments-industry-pill${isActive?" is-active":""}`}
                      aria-pressed={isActive}
                      onClick={()=>selectIndustry(i)}
                      style={{"--pill-accent":accent}}
                    >
                      <span className="instruments-industry-pill-dot" aria-hidden />
                      <span>{INDUSTRY_META?.[i]?.label||i}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {showIndustryFilter&&selectedIndustry&&filteredProducts.length===0?(
            <p className="instruments-select-hint">No instruments are listed for this industry yet.</p>
          ):null}
          {(!showIndustryFilter||(selectedIndustry&&filteredProducts.length>0))&&(
          <div
            key={selectedIndustry||"all"}
            className={`product-grid${showIndustryFilter?" product-grid--filtered":""}`}
          >
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
                    <button
                      type="button"
                      onClick={(e)=>goToProduct(p.model,e)}
                      style={{padding:"28px 28px 0",minHeight:120,display:"flex",flexDirection:"column",justifyContent:"flex-start",width:"100%",textAlign:"left",background:"transparent",border:"none",cursor:"pointer"}}
                    >
                      {p.badge&&<div style={{display:"inline-block",padding:"3px 10px",background:p.color,color:C.white,fontSize:10,fontWeight:700,letterSpacing:1,textTransform:"uppercase",marginBottom:8}}>{p.badge}</div>}
                      <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:p.color,letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>{p.cat}</div>
                      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:700,color:C.navy}}>{p.model}</div>
                      <div style={{fontSize:13,color:C.grey,marginTop:4}}>{p.name}</div>
                    </button>
                    <a
                      href={pHref}
                      className="instrument-visual"
                      style={{display:"block",textDecoration:"none",color:"inherit",cursor:"pointer"}}
                      onClick={(e)=>goToProduct(p.model,e)}
                      aria-label={`View ${p.model} — ${p.name}`}
                    >
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
                      <Btn variant="teal" style={{flex:1,padding:10,fontSize:11}} onClick={()=>goToProduct(p.model)}>Read more</Btn>
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
                      <a
                        href={pHref}
                        className="instrument-visual"
                        style={{display:"block",textDecoration:"none",color:"inherit",cursor:"pointer"}}
                        onClick={(e)=>{e.stopPropagation();goToProduct(p.model,e);}}
                        aria-label={`View ${p.model} — ${p.name}`}
                      >
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
                        <Btn variant="teal" style={{flex:1,padding:10,fontSize:11,minWidth:120}} onClick={e=>{e.stopPropagation();goToProduct(p.model);}}>Read more</Btn>
                        <Btn variant="teal" style={{flex:1,padding:10,fontSize:11,minWidth:120}} onClick={e=>{e.stopPropagation();onRegister();}}>Get quote</Btn>
                        <Btn variant="ghost" style={{flex:1,padding:10,fontSize:11,color:C.navy,borderColor:C.greyLt,minWidth:120}} onClick={e=>{e.stopPropagation();onQuote();}}>Download spec</Btn>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          )}
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
