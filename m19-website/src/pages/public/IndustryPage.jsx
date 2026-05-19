import { INDUSTRY_CONTENT } from "../../data/industryContent.js";
import { INDUSTRY_META, INDUSTRY_TO_MODELS } from "../../data/industryClassification.js";
import { PRODUCTS } from "../../data/products.js";
import { Btn, Eyebrow, Mono, Serif, UIIcon } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function BrochureIndustryPage({content,meta,onQuote,onRegister,onNav}){
  const G={
    text:C.white,
    muted:"rgba(139,173,212,0.82)",
    line:"rgba(139,173,212,0.14)",
    bg:C.dark,
    soft:"rgba(255,255,255,0.03)",
    panel:"rgba(255,255,255,0.05)",
  };
  const pill={
    borderRadius:999,
    padding:"10px 20px",
    fontSize:11,
    fontWeight:700,
    letterSpacing:1,
    textTransform:"uppercase",
    border:`1px solid rgba(255,255,255,0.16)`,
    background:"rgba(2,6,23,0.55)",
    color:"#fff",
    cursor:"pointer",
    fontFamily:"'Cormorant Garamond',serif",
  };
  return(
    <div style={{paddingTop:72,background:G.bg,color:G.text}}>
      <div
        style={{
          position:"relative",
          overflow:"hidden",
          width:"100%",
          // Exactly match Home hero background
          background:`linear-gradient(160deg,${C.dark} 0%,#0A1829 50%,${C.navy} 100%)`,
          borderRadius:"0 0 clamp(12px, 2vw, 24px) clamp(12px, 2vw, 24px)",
          boxShadow:"0 20px 60px rgba(2,6,23,0.14)",
        }}
      >
        {/* Natural aspect: full width, height from image — entire photo visible (no cover crop, no side bars). */}
        <img
          src={content.heroImage}
          alt={content.heroAlt||`${meta.label} — industry solutions`}
          decoding="async"
          fetchPriority="high"
          style={{
            display:"block",
            width:"100%",
            height:"auto",
          }}
        />
        <div
          style={{
            position:"absolute",
            left:0,
            right:0,
            top:0,
            height:88,
            pointerEvents:"none",
            background:"linear-gradient(180deg, rgba(2,6,23,0.48) 0%, rgba(2,6,23,0.1) 65%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          style={{
            position:"absolute",
            inset:0,
            pointerEvents:"none",
            // Exactly match Home hero grid (same color + size)
            backgroundImage:`linear-gradient(${C.teal} 1px,transparent 1px),linear-gradient(90deg,${C.teal} 1px,transparent 1px)`,
            backgroundSize:"60px 60px",
            opacity:0.04,
          }}
        />
      </div>

      <div style={{padding:`clamp(40px,6vw,72px) clamp(18px,5vw,48px)`}}>
        <div style={{maxWidth:1180,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:40,alignItems:"center"}}>
          <div style={{borderRadius:20,overflow:"hidden",border:`1px solid ${G.line}`,boxShadow:"0 22px 80px rgba(2,6,23,0.38)"}}>
            <img src={content.introImage} alt="" style={{width:"100%",height:"auto",display:"block",objectFit:"cover"}}/>
          </div>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(26px,3.2vw,36px)",fontWeight:700,marginBottom:14}}>
              What we do?
            </div>
            <p style={{fontSize:15,color:G.muted,lineHeight:1.75,marginBottom:28}}>{content.whatWeDo}</p>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(22px,2.6vw,30px)",fontWeight:700,marginBottom:14}}>
              R&amp;D solutions
            </div>
            <p style={{fontSize:15,color:G.muted,lineHeight:1.75,marginBottom:24}}>{content.rdSolutions}</p>
            <a
              href={content.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={content.brochureBtnClassName?`btn ${content.brochureBtnClassName}`:"btn"}
              style={content.brochureBtnClassName?{display:"inline-flex",alignItems:"center",gap:10,textDecoration:"none",textTransform:"uppercase",fontSize:12,letterSpacing:1,fontWeight:700}:{display:"inline-flex",alignItems:"center",gap:10,textDecoration:"none",textTransform:"uppercase",fontSize:12,letterSpacing:1,fontWeight:700,background:meta.color,color:"#fff",border:"none",boxShadow:`0 10px 32px ${meta.color}40`}}
            >
              Download brochure
            </a>
            <div style={{display:"flex",gap:12,marginTop:22,flexWrap:"wrap"}}>
              <Btn variant="ghost" onClick={onRegister} style={{color:G.text,borderColor:"rgba(255,255,255,0.22)"}}>Get started →</Btn>
              <Btn variant="ghost" onClick={onQuote} style={{color:G.text,borderColor:"rgba(255,255,255,0.22)"}}>Talk to an expert</Btn>
            </div>
          </div>
        </div>
      </div>

      <div style={{background:`linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)`,padding:`clamp(48px,7vw,80px) clamp(18px,5vw,48px)`,borderTop:`1px solid ${G.line}`}}>
        <div style={{maxWidth:1180,margin:"0 auto"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:4,color:meta.color,fontWeight:600}}>OUR PRODUCTS</div>
            <div style={{fontSize:12,color:G.muted,marginTop:12,letterSpacing:2,lineHeight:1.5}}>{content.productsTagline}</div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:56}}>
            {content.productCopy.map((row,idx)=>{
              const pHref=productPathFromModel(row.model);
              const img=MACHINE_IMAGE_MAP[row.model];
              const last=idx===content.productCopy.length-1;
              return(
                <div
                  key={row.model}
                  style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
                    gap:36,
                    alignItems:"center",
                    paddingBottom:last?0:56,
                    borderBottom:last?"none":`1px solid ${G.line}`,
                  }}
                >
                  <div style={{order:1}}>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:700,marginBottom:12,lineHeight:1.2,textTransform:"uppercase",letterSpacing:1}}>
                      {row.headline}
                    </div>
                    <p style={{fontSize:14,color:G.muted,lineHeight:1.75,marginBottom:16}}>{row.body}</p>
                    <div style={{fontSize:12,fontWeight:600,color:G.text,marginBottom:18,fontFamily:"'DM Mono',monospace",letterSpacing:0.5}}>
                      {row.standards.join(", ")}
                    </div>
                    <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
                      <button type="button" style={pill} onClick={()=>window.location.assign(pHref)}>Read more</button>
                      <a href={content.brochureUrl} target="_blank" rel="noopener noreferrer" style={{...pill,textDecoration:"none",display:"inline-flex",alignItems:"center"}}>
                        Brochure
                      </a>
                      <button type="button" style={pill} onClick={onQuote}>Request quote</button>
                    </div>
                  </div>
                  <div style={{order:2,borderRadius:18,overflow:"hidden",border:`1px solid ${G.line}`,background:"rgba(255,255,255,0.06)",backdropFilter:"blur(8px)"}}>
                    {img?<img src={img} alt={row.headline} style={{width:"100%",height:"auto",display:"block",objectFit:"contain"}}/>:null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{background:G.bg,padding:`clamp(48px,7vw,80px) clamp(18px,5vw,48px)`}}>
        <div style={{maxWidth:1180,margin:"0 auto"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:4,textAlign:"center",color:meta.color,fontWeight:600,marginBottom:36}}>
            APPLICATIONS
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:22}}>
            {content.applications.map((a)=>(
              <div key={a.title} style={{background:G.soft,border:`1px solid ${G.line}`,borderRadius:18,overflow:"hidden",display:"flex",flexDirection:"column"}}>
                <div style={{aspectRatio:"4/3",overflow:"hidden"}}>
                  <img src={a.image} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                </div>
                <div style={{padding:22}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:700,marginBottom:10,textTransform:"uppercase",letterSpacing:0.5}}>
                    {a.title}
                  </div>
                  <p style={{fontSize:14,color:G.muted,lineHeight:1.65,margin:0}}>{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{background:G.soft,padding:`clamp(48px,7vw,80px) clamp(18px,5vw,48px)`,borderTop:`1px solid ${G.line}`}}>
        <div style={{maxWidth:1180,margin:"0 auto"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:4,textAlign:"center",color:meta.color,fontWeight:600,marginBottom:36}}>
            BLOG
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:22}}>
            {content.blog.map((b)=>(
              <div key={b.title} style={{background:G.bg,border:`1px solid ${G.line}`,borderRadius:18,overflow:"hidden",display:"flex",flexDirection:"column"}}>
                <div style={{aspectRatio:"4/3",overflow:"hidden"}}>
                  <img src={b.image} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                </div>
                <div style={{padding:22,flex:1,display:"flex",flexDirection:"column"}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:16,fontWeight:700,marginBottom:10,lineHeight:1.3,textTransform:"uppercase",letterSpacing:0.4}}>
                    {b.title}
                  </div>
                  <p style={{fontSize:14,color:G.muted,lineHeight:1.65,margin:0,flex:1}}>{b.excerpt}</p>
                  <button type="button" style={{marginTop:16,background:"none",border:"none",padding:0,cursor:"pointer",fontSize:12,fontWeight:700,color:meta.color,letterSpacing:1,textTransform:"uppercase",textAlign:"left"}} onClick={()=>onNav?.("about")}>
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"center",marginTop:36}}>
            <Btn variant="gold" onClick={()=>onNav?.("about")}>View more</Btn>
          </div>
        </div>
      </div>

      <div style={{textAlign:"center",padding:"48px 24px 64px",background:G.soft,borderTop:`1px solid ${G.line}`}}>
        <div
          style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:"clamp(28px,5vw,44px)",
            fontWeight:700,
            lineHeight:1.15,
            letterSpacing:3,
            textTransform:"uppercase",
            background:"linear-gradient(92deg,#2563eb 0%,#7c3aed 45%,#db2777 100%)",
            WebkitBackgroundClip:"text",
            backgroundClip:"text",
            color:"transparent",
          }}
        >
          Smart materials
          <br />
          smarter world
        </div>
      </div>
    </div>
  );
}

export function IndustryPage({industryKey,onQuote,onRegister,onNav}){
  const meta=INDUSTRY_META[industryKey]||{label:industryKey||"Industry",color:C.teal,glow:C.teal};
  const content=INDUSTRY_CONTENT?.[industryKey]||null;
  if(content&&(content.layout==="defense"||content.layout==="brochure")){
    return <BrochureIndustryPage content={content} meta={meta} onQuote={onQuote} onRegister={onRegister} onNav={onNav}/>;
  }
  const models=INDUSTRY_TO_MODELS[industryKey]||[];
  const set=new Set(models);
  const items=PRODUCTS.filter(p=>set.has(p.model));
  return(
    <div style={{paddingTop:72}}>
      <div
        style={{
          background:`linear-gradient(160deg,${C.dark} 0%,${C.navy} 100%)`,
          padding:`clamp(44px,6vw,72px) clamp(18px,5vw,48px) clamp(26px,4.5vw,44px)`,
        }}
      >
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <Eyebrow c={meta.color}>{meta.label}</Eyebrow>
          <div className="hero-h1" style={{fontSize:"clamp(38px,5vw,68px)"}}>
            Instruments for <span style={{color:meta.color}}>{meta.label}</span>
          </div>
          <p className="hero-sub" style={{marginTop:14,marginBottom:0}}>
            Explore the instruments most relevant to this industry. Built for regulated environments, designed to last.
          </p>
          <div style={{display:"flex",gap:12,marginTop:22,flexWrap:"wrap"}}>
            <Btn variant="gold" onClick={onRegister}>Get Started →</Btn>
            <Btn variant="ghost" onClick={onQuote}>Talk to an Expert</Btn>
          </div>
        </div>
      </div>
      <div style={{background:C.offwh,padding:`clamp(34px,5vw,56px) clamp(18px,5vw,48px)`}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          {!industryKey&&(
            <div style={{padding:"14px 16px",borderRadius:14,background:"#fff",border:"1px solid rgba(15,23,42,0.08)",marginBottom:16}}>
              <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,textTransform:"uppercase",color:"#667",marginBottom:6}}>
                Industry not found
              </div>
              <div style={{fontSize:13,color:C.grey,lineHeight:1.6}}>
                This industry link doesn’t match our current list. Please select an industry from the top menu.
              </div>
            </div>
          )}

          {content&&(
            <div style={{display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:18,marginBottom:22}}>
              <div style={{background:"#fff",border:"1px solid rgba(15,23,42,0.08)",borderRadius:18,padding:18}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:700,color:C.navy,marginBottom:10}}>
                  What we do
                </div>
                <div style={{fontSize:13,color:C.grey,lineHeight:1.75}}>
                  {content.whatWeDo}
                </div>
              </div>
              <div style={{background:"#fff",border:"1px solid rgba(15,23,42,0.08)",borderRadius:18,padding:18}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:700,color:C.navy,marginBottom:10}}>
                  R&amp;D solutions
                </div>
                <div style={{fontSize:13,color:C.grey,lineHeight:1.75}}>
                  {content.rdSolutions}
                </div>
                {!!content.highlights?.length&&(
                  <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:14}}>
                    {content.highlights.map(m=>(
                      <span key={m} style={{fontFamily:"'DM Mono',monospace",fontSize:11,letterSpacing:1.2,textTransform:"uppercase",color:meta.color,background:"rgba(2,6,23,0.04)",border:"1px solid rgba(15,23,42,0.10)",padding:"6px 10px",borderRadius:999}}>
                        {m}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,letterSpacing:2,textTransform:"uppercase",color:"#667",marginBottom:12}}>
            Showing {items.length} instruments
          </div>
          <div className="product-grid">
            {items.map(p=>{
              const machineImage=MACHINE_IMAGE_MAP[p.model]||null;
              const pHref=productPathFromModel(p.model);
              return(
                <div key={p.model} className="product-card" style={{"--hover-color":p.color}}>
                  <div style={{padding:"28px 28px 0",minHeight:120,display:"flex",flexDirection:"column"}}>
                    <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:p.color,letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>{p.cat}</div>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:700,color:C.navy}}>{p.model}</div>
                    <div style={{fontSize:13,color:C.grey,marginTop:4}}>{p.name}</div>
                  </div>
                  <a href={pHref} className="instrument-visual" style={{display:"block",textDecoration:"none",color:"inherit"}}>
                    {machineImage ? <img src={machineImage} alt={`${p.model} — ${p.name}`} loading="lazy" decoding="async"/> : null}
                  </a>
                  <div style={{padding:"0 28px 16px",fontSize:13,color:C.grey,lineHeight:1.6,minHeight:92}}>{p.desc}</div>
                  <div style={{padding:"16px 28px",background:C.offwh,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,minHeight:116,alignContent:"start",borderTop:"1px solid rgba(15,23,42,0.05)"}}>
                    {p.specs.slice(0,4).map(s=>(
                      <div key={s.l}>
                        <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,color:"#999",letterSpacing:1,textTransform:"uppercase"}}>{s.l}</div>
                        <div style={{fontSize:13,fontWeight:600,color:C.navy,marginTop:2}}>{s.v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{padding:"16px 28px 24px",display:"flex",gap:10,marginTop:"auto",borderTop:"1px solid rgba(15,23,42,0.05)"}}>
                    <Btn
                      variant="teal"
                      style={{flex:1,padding:10,fontSize:11}}
                      onClick={()=>window.location.assign(pHref)}
                    >
                      Read more
                    </Btn>
                    <Btn variant="ghost" style={{flex:1,padding:10,fontSize:11,color:C.navy,borderColor:C.greyLt}} onClick={onQuote}>Request Quote</Btn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
