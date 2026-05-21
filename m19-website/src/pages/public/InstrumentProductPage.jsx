import { MACHINE_IMAGE_MAP, PRODUCTS } from "../../data/products.js";
import { HP500_PAGE } from "../../data/hp500Content.js";
import { Btn, Eyebrow, Mono, Serif } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

const HP_ACCENT="#E91E63";
const HP_GREEN="#3EA055";

export function GenericInstrumentProductPage({product,onQuote,onRegister,onNav}){
  const img=MACHINE_IMAGE_MAP[product.model];
  return(
    <div style={{paddingTop:72,background:C.offwh,minHeight:"100vh"}}>
      <div style={{background:`linear-gradient(165deg,${C.dark},${C.navy})`,padding:`clamp(40px,6vw,72px) clamp(18px,5vw,48px)`}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <button type="button" onClick={()=>onNav("instruments")} style={{background:"transparent",border:"none",color:"rgba(255,255,255,0.55)",fontSize:12,cursor:"pointer",marginBottom:16,letterSpacing:1.2}}>← Instruments</button>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:product.color,letterSpacing:2,textTransform:"uppercase"}}>{product.cat}</div>
          <div className="hero-h1" style={{fontSize:"clamp(34px,4.5vw,56px)",marginTop:8}}>{product.model}</div>
          <div style={{fontSize:18,color:"rgba(255,255,255,0.75)",marginTop:8}}>{product.name}</div>
          <p style={{fontSize:15,color:C.slate,maxWidth:720,lineHeight:1.75,marginTop:20}}>{product.desc}</p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:24}}>
            <Btn variant="gold" onClick={onQuote}>Request quote</Btn>
            <Btn variant="ghost" onClick={onRegister}>Get started</Btn>
          </div>
        </div>
      </div>
      <div style={{maxWidth:1100,margin:"0 auto",padding:`clamp(32px,5vw,56px) clamp(18px,5vw,48px)`}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:28,alignItems:"start"}}>
          <div style={{background:C.white,borderRadius:20,padding:24,boxShadow:"0 4px 24px rgba(2,6,23,0.06)",border:"1px solid rgba(15,23,42,0.06)"}}>
            <div style={{borderRadius:16,background:"#f4f6f8",padding:20,textAlign:"center"}}>
              {img?<img src={img} alt={product.name} style={{maxWidth:"100%",height:"auto",maxHeight:320,objectFit:"contain"}}/>:null}
            </div>
          </div>
          <div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,color:"#667",textTransform:"uppercase",marginBottom:12}}>Specifications</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              {product.specs.map(s=>(
                <div key={s.l} style={{padding:"12px 0",borderBottom:"1px solid rgba(15,23,42,0.06)"}}>
                  <div style={{fontSize:10,color:"#94a3b8",letterSpacing:1,textTransform:"uppercase"}}>{s.l}</div>
                  <div style={{fontSize:14,fontWeight:600,color:C.navy,marginTop:4}}>{s.v}</div>
                </div>
              ))}
            </div>
            <div style={{marginTop:20,display:"flex",flexWrap:"wrap",gap:8}}>
              {(product.standards||[]).map(s=>(
                <span key={s} style={{fontSize:11,padding:"6px 12px",borderRadius:999,background:"rgba(2,6,23,0.05)",border:"1px solid rgba(2,6,23,0.08)"}}>{s}</span>
              ))}
            </div>
            <div style={{display:"flex",gap:10,marginTop:28}}>
              <Btn variant="teal" onClick={onQuote}>Request quote</Btn>
              <Btn variant="ghost" style={{color:C.navy,borderColor:C.greyLt}} onClick={onRegister}>Create account</Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HydrogenProductPage({product,onQuote,onRegister,onNav}){
  const H=HP500_PAGE;
  const img=MACHINE_IMAGE_MAP.HP500;
  return(
    <div style={{paddingTop:72,background:"#050508",minHeight:"100vh",color:"#fff"}}>
      <div style={{padding:`clamp(36px,6vw,80px) clamp(18px,5vw,48px)`,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <button type="button" onClick={()=>onNav("instruments")} style={{background:"transparent",border:"none",color:"rgba(255,255,255,0.45)",fontSize:12,cursor:"pointer",marginBottom:20}}>← Instruments</button>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,color:"rgba(255,255,255,0.45)",textTransform:"uppercase",marginBottom:10}}>{H.modelBadge}</div>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,color:HP_GREEN,textTransform:"uppercase",marginBottom:12}}>{product.cat}</div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(26px,4.2vw,42px)",fontWeight:700,lineHeight:1.15,margin:0,maxWidth:980}}>{H.heroTitle}</h1>
          <p style={{fontSize:13,letterSpacing:2,textTransform:"uppercase",color:"rgba(255,255,255,0.65)",marginTop:16,maxWidth:900,lineHeight:1.6}}>{H.tagline}</p>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.55)",maxWidth:820,marginTop:14,lineHeight:1.65}}>{H.trustedLead}</p>
          <ul style={{listStyle:"none",padding:0,margin:"28px 0 0",maxWidth:900}}>
            {H.bullets.map((b,i)=>(
              <li key={i} style={{display:"flex",gap:12,alignItems:"flex-start",marginBottom:14,fontSize:15,lineHeight:1.6,color:"rgba(255,255,255,0.88)"}}>
                <span style={{color:HP_GREEN,fontWeight:700,flexShrink:0}}>✓</span>
                <span>
                  {typeof b==="string"?b:(
                    <>{b.text}<span style={{color:HP_GREEN,fontWeight:600}}>{b.strong}</span>{b.suffix}</>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,color:"rgba(255,255,255,0.55)",textTransform:"uppercase",marginTop:20,marginBottom:10}}>
            {H.trustedCertLabel || "Trusted and Certified by:"}
          </div>
          <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
            {H.certifications.map(c=>(
              <span key={c} style={{fontSize:11,padding:"9px 14px",borderRadius:12,border:"1px solid rgba(255,255,255,0.18)",background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.92)"}}>{c}</span>
            ))}
          </div>
          <div style={{display:"flex",gap:12,marginTop:28,flexWrap:"wrap"}}>
            <Btn variant="hp-green" size="lg" onClick={onQuote} style={{minWidth:260}}>{H.demoCtaLabel || "GET A FREE DEMO"}</Btn>
            <Btn variant="ghost" size="lg" onClick={onRegister}>Request quote</Btn>
          </div>

          {!!H.media?.hero && (
            <div style={{marginTop:26}}>
              <img
                src={H.media.hero}
                alt="HP-500 marketing reference"
                style={{width:"100%",maxWidth:980,height:"auto",borderRadius:16,opacity:0.98,boxShadow:"0 26px 90px rgba(2,6,23,0.55)",border:"1px solid rgba(255,255,255,0.06)"}}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </div>
      </div>

      {H.statsStrip?.length>0&&(
        <div style={{background:"linear-gradient(90deg,rgba(62,160,85,0.14),transparent)",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
          <div style={{maxWidth:1100,margin:"0 auto",padding:"22px clamp(18px,5vw,48px)",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:20}}>
            {H.statsStrip.map(s=>(
              <div key={s.label}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:700,color:HP_GREEN,lineHeight:1}}>{s.value}</div>
                <div style={{fontSize:12,color:"rgba(255,255,255,0.55)",marginTop:8,lineHeight:1.4}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{padding:`clamp(40px,6vw,72px) clamp(18px,5vw,48px)`,background:"#0a0a0e"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:20}}>
          {H.cards.map((card)=>(
            <div key={card.title} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:18,overflow:"hidden",display:"flex",flexDirection:"column"}}>
              <div style={{padding:14,background:"linear-gradient(180deg,rgba(62,160,85,0.16),rgba(2,6,23,0))",borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <div style={{height:94,borderRadius:14,background:"linear-gradient(135deg,rgba(255,255,255,0.06),rgba(233,30,99,0.12))",border:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>
                  {card.visualKind==="machine" && img ? (
                    <img src={img} alt="" style={{maxWidth:"92%",maxHeight:86,objectFit:"contain",opacity:0.96}} loading="lazy" decoding="async"/>
                  ) : (
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,textTransform:"uppercase",color:"rgba(255,255,255,0.55)"}}>
                      {card.visualPlaceholder || "HP-500"}
                    </div>
                  )}
                </div>
              </div>
              <div style={{padding:22,display:"flex",flexDirection:"column",gap:12}}>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:1.5,color:"rgba(255,255,255,0.4)",textTransform:"uppercase"}}>HP-500</div>
              <h3 style={{fontSize:14,fontWeight:700,letterSpacing:1,margin:0,lineHeight:1.35}}>{card.title}</h3>
              <ul style={{margin:0,paddingLeft:18,color:"rgba(255,255,255,0.82)",fontSize:13,lineHeight:1.55}}>
                {card.bullets.map((x,j)=>(<li key={j}>{x}</li>))}
              </ul>
              {card.sub&&(
                <>
                  <div style={{fontSize:11,letterSpacing:2,color:HP_ACCENT,marginTop:8}}>{card.sub}</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                    {card.standards.map(s=>(<span key={s} style={{fontSize:10,padding:"4px 8px",borderRadius:6,background:"rgba(255,255,255,0.06)"}}>{s}</span>))}
                  </div>
                </>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {!!H.media?.overview && (
        <div style={{padding:"0 clamp(18px,5vw,48px) clamp(36px,5vw,56px)",background:"#0a0a0e"}}>
          <div style={{maxWidth:1100,margin:"0 auto"}}>
            <img
              src={H.media.overview}
              alt="HP-500 overview reference"
              style={{width:"100%",height:"auto",borderRadius:18,boxShadow:"0 26px 90px rgba(2,6,23,0.55)",border:"1px solid rgba(255,255,255,0.06)",background:"rgba(255,255,255,0.02)"}}
              loading="lazy"
              decoding="async"
            />
            {H.overviewFigureCaption && (
              <div style={{fontSize:12,color:"rgba(255,255,255,0.5)",textAlign:"center",marginTop:12,letterSpacing:0.2}}>
                {H.overviewFigureCaption}
              </div>
            )}
          </div>
        </div>
      )}

      <div style={{padding:`clamp(36px,5vw,56px) clamp(18px,5vw,48px)`,background:"#08080c",borderTop:"1px solid rgba(255,255,255,0.05)"}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:28}}>
          <div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,color:HP_ACCENT,textTransform:"uppercase",marginBottom:10}}>{H.software.eyebrow}</div>
            <h3 style={{fontSize:18,fontWeight:700,margin:"0 0 12px",lineHeight:1.3}}>{H.software.title}</h3>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.65)",lineHeight:1.65,marginBottom:16}}>{H.software.lead}</p>
            <ul style={{margin:0,paddingLeft:18,color:"rgba(255,255,255,0.82)",fontSize:13,lineHeight:1.55}}>
              {H.software.bullets.map((x,i)=>(<li key={i}>{x}</li>))}
            </ul>
          </div>
          <div>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,color:HP_ACCENT,textTransform:"uppercase",marginBottom:10}}>{H.workflow.eyebrow}</div>
            <h3 style={{fontSize:18,fontWeight:700,margin:"0 0 18px",lineHeight:1.3}}>{H.workflow.title}</h3>
            <div style={{display:"grid",gap:14}}>
              {H.workflow.steps.map(st=>(
                <div key={st.n} style={{display:"grid",gridTemplateColumns:"44px 1fr",gap:12,alignItems:"start"}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:700,color:"rgba(233,30,99,0.35)"}}>{st.n}</div>
                  <div>
                    <div style={{fontSize:13,fontWeight:700,marginBottom:4}}>{st.title}</div>
                    <div style={{fontSize:13,color:"rgba(255,255,255,0.62)",lineHeight:1.5}}>{st.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{padding:`clamp(28px,4vw,48px) clamp(18px,5vw,48px)`,background:"#0a0a0e"}}>
        <div style={{maxWidth:1100,margin:"0 auto",padding:24,borderRadius:18,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.02)"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,color:HP_GREEN,textTransform:"uppercase",marginBottom:8}}>{H.materials.eyebrow}</div>
          <h3 style={{fontSize:17,fontWeight:700,margin:"0 0 12px"}}>{H.materials.title}</h3>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.72)",lineHeight:1.7,margin:0}}>{H.materials.body}</p>
        </div>
      </div>

      {img&&(
        <div style={{padding:"0 clamp(18px,5vw,48px) 40px",background:"#0a0a0e"}}>
          <div style={{maxWidth:720,margin:"0 auto"}}>
            <img src={img} alt="M19 Hydrogen Permeability Analyzer (HP-500)" style={{width:"100%",height:"auto",borderRadius:16,opacity:0.95,boxShadow:"0 24px 80px rgba(2,6,23,0.45)"}} loading="lazy"/>
            <p style={{fontSize:12,color:"rgba(255,255,255,0.45)",textAlign:"center",marginTop:12,letterSpacing:0.3}}>High-precision M19 hydrogen permeability platform — engineered for regulated hydrogen barrier programs.</p>
          </div>
        </div>
      )}

      <div style={{padding:`clamp(32px,5vw,48px) clamp(18px,5vw,48px)`,background:"#111118",borderTop:"1px solid rgba(255,255,255,0.06)"}}>
        <div style={{maxWidth:1000,margin:"0 auto",textAlign:"center"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,color:HP_ACCENT,textTransform:"uppercase",marginBottom:8}}>{H.complianceBand.eyebrow}</div>
          <h3 style={{fontSize:"clamp(20px,2.5vw,26px)",fontWeight:700,margin:"0 0 12px"}}>{H.complianceBand.title}</h3>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.62)",maxWidth:720,margin:"0 auto 20px",lineHeight:1.65}}>{H.complianceBand.lead}</p>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:8}}>
            {H.complianceBand.badges.map(b=>(
              <span key={b} style={{fontSize:11,padding:"8px 14px",borderRadius:999,border:"1px solid rgba(255,255,255,0.18)",color:"rgba(255,255,255,0.88)"}}>{b}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{padding:`clamp(40px,6vw,64px) clamp(18px,5vw,48px)`,background:"#06060a"}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:3,color:HP_ACCENT,textTransform:"uppercase",marginBottom:8}}>{H.techIntro}</div>
          <h2 style={{fontSize:"clamp(22px,3vw,32px)",fontWeight:700,margin:"0 0 28px",letterSpacing:1}}>{H.techTitle}</h2>
          {!!H.media?.specsStory && (
            <div style={{margin:"0 0 20px"}}>
              <img
                src={H.media.specsStory}
                alt="HP-500 technical + applications reference"
                style={{width:"100%",height:"auto",borderRadius:16,opacity:0.98,boxShadow:"0 22px 80px rgba(2,6,23,0.50)",border:"1px solid rgba(255,255,255,0.06)"}}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
          <div style={{display:"grid",gap:0,border:"1px solid rgba(255,255,255,0.08)",borderRadius:14,overflow:"hidden"}}>
            {H.techRows.map((row,i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 1fr",borderBottom:i<H.techRows.length-1?"1px solid rgba(255,255,255,0.06)":"none"}}>
                {["left","right"].map(side=>(
                  <div key={side} style={{padding:"16px 18px",borderRight:side==="left"?"1px solid rgba(255,255,255,0.06)":"none",background:"rgba(255,255,255,0.02)"}}>
                    <div style={{fontSize:10,letterSpacing:1.5,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",marginBottom:6}}>{row[side].k}</div>
                    <div style={{fontSize:14,color:row[side].highlight?HP_ACCENT:"rgba(255,255,255,0.85)",fontWeight:600}}>{row[side].v}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{padding:`clamp(36px,5vw,56px) clamp(18px,5vw,48px)`,background:"#f0f2f5",color:"#0f172a",
        backgroundImage:"linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
        backgroundSize:"56px 56px"
      }}>
        <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
          <h3 style={{fontSize:18,letterSpacing:2,fontWeight:700,margin:"0 0 16px"}}>WHY CHOOSE THE HP-500?</h3>
          <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:12,fontSize:14,fontWeight:600}}>
            {H.whyBullets.map(b=>(<span key={b} style={{padding:"8px 12px",background:"#fff",borderRadius:8,boxShadow:"0 2px 8px rgba(2,6,23,0.06)"}}>{b}</span>))}
          </div>
        </div>
      </div>

      <div style={{padding:`clamp(40px,6vw,72px) clamp(18px,5vw,48px)`,background:"#fff"}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,color:HP_ACCENT,textTransform:"uppercase",marginBottom:8}}>{H.useCasesIntro}</div>
          <h3 style={{fontSize:"clamp(22px,3vw,30px)",margin:"0 0 12px",fontWeight:700}}>{H.useCasesTitle}</h3>
          <p style={{color:"#64748b",maxWidth:720,lineHeight:1.65,marginBottom:28}}>{H.useCasesLead}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:2,background:"#e2e8f0",borderRadius:12,overflow:"hidden"}}>
            {H.useCases.map(u=>(
              <div key={u.n} style={{background:"#fff",padding:22,minHeight:140}}>
                <div style={{fontSize:42,fontWeight:800,color:"rgba(233,30,99,0.15)",lineHeight:1,marginBottom:8}}>{u.n}</div>
                <div style={{fontSize:12,fontWeight:700,letterSpacing:1,marginBottom:8}}>{u.title}</div>
                <div style={{fontSize:13,color:"#64748b",lineHeight:1.55}}>{u.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{padding:`clamp(40px,6vw,64px) clamp(18px,5vw,48px)`,background:"#f1f5f9",color:"#0f172a"}}>
        <div style={{maxWidth:720,margin:"0 auto"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,color:HP_ACCENT,textTransform:"uppercase",marginBottom:10}}>FAQ</div>
          <h3 style={{fontSize:22,fontWeight:700,margin:"0 0 20px"}}>Common questions</h3>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {H.faq.map((item,i)=>(
              <details key={i} style={{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",padding:"12px 16px"}}>
                <summary style={{cursor:"pointer",fontWeight:600,fontSize:14,listStyle:"none"}}>{item.q}</summary>
                <p style={{fontSize:13,color:"#64748b",lineHeight:1.6,margin:"12px 0 4px"}}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div style={{padding:`clamp(40px,6vw,72px) clamp(18px,5vw,48px)`,background:"#f8fafc"}}>
        <div style={{maxWidth:1000,margin:"0 auto"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,color:HP_ACCENT,textTransform:"uppercase",textAlign:"center",marginBottom:8}}>{H.whyGridEyebrow}</div>
          <h3 style={{textAlign:"center",fontSize:"clamp(22px,3vw,30px)",margin:"0 0 28px",fontWeight:700}}>{H.whyGridTitle}</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:12}}>
            {H.whyGrid.map(cell=>(
              <div key={cell.title} style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:14,padding:20}}>
                <div style={{fontSize:12,fontWeight:700,letterSpacing:0.5,marginBottom:8}}>{cell.title}</div>
                <div style={{fontSize:13,color:"#64748b",lineHeight:1.55}}>{cell.body}</div>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center",marginTop:36}}>
            <Btn variant="gold" size="lg" onClick={onQuote}>GET A FREE DEMO →</Btn>
          </div>
        </div>
      </div>

      <div style={{padding:`clamp(48px,7vw,88px) clamp(18px,5vw,48px)`,background:`linear-gradient(165deg,${C.dark},#0d1117)`,color:"#fff",textAlign:"center"}}>
        <div style={{maxWidth:640,margin:"0 auto"}}>
          <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,3vw,32px)",fontWeight:700,margin:"0 0 14px",lineHeight:1.2}}>{H.bottomCta.title}</h3>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.65)",lineHeight:1.65,margin:"0 0 24px"}}>{H.bottomCta.lead}</p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <Btn variant="gold" size="lg" onClick={onQuote}>Request quotation</Btn>
            <Btn variant="ghost" size="lg" onClick={onRegister}>Create account</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstrumentProductPage({productModel,onQuote,onRegister,onNav}){
  const product=PRODUCTS.find(p=>p.model===productModel);
  if(!product){
    return(
      <div style={{paddingTop:120,minHeight:"60vh",textAlign:"center",background:C.offwh}}>
        <p style={{color:C.grey}}>Instrument not found.</p>
        <Btn variant="teal" style={{marginTop:16}} onClick={()=>onNav("instruments")}>Back to instruments</Btn>
      </div>
    );
  }
  if(product.model==="HP500"){
    return <HydrogenProductPage product={product} onQuote={onQuote} onRegister={onRegister} onNav={onNav}/>;
  }
  return <GenericInstrumentProductPage product={product} onQuote={onQuote} onRegister={onRegister} onNav={onNav}/>;
}
