import { PRODUCTS } from "../../data/products.js";
import { Btn, Eyebrow, Serif, UIIcon } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function PlatformPage({onQuote,onRegister}){
  return(
    <div style={{paddingTop:72}}>
      <div style={{background:`linear-gradient(160deg,${C.dark} 0%,${C.navy} 100%)`,padding:"80px 48px 60px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <Eyebrow>PoreSense™ Platform</Eyebrow>
          <div className="hero-h1" style={{fontSize:"clamp(40px,5vw,72px)"}}>One platform.<br/><em>Infinite intelligence.</em></div>
          <p className="hero-sub" style={{marginTop:16,marginBottom:0}}>PoreSense unifies instruments, cloud data, AI analytics, lab testing, and e-commerce into a single integrated material intelligence ecosystem.</p>
        </div>
      </div>
      <div style={{background:C.dark}}>
        {[
          {tier:"Tier 3 — Intelligence",color:C.purple,title:"PoreSense AI Suite",apps:[{n:"QualityGuard",d:"Real-time OOT detection & batch alerts",i:"◈"},{n:"ValidateIQ",d:"Automated regulatory validation reports",i:"▣"},{n:"DefenceSpec",d:"MIL-SPEC & DRDO compliance engine",i:"Defense.png"},{n:"OilGuard",d:"Filter fouling prediction",i:"oil-gas.png"},{n:"TextileIntel",d:"MVTR & breathability analytics",i:"Technical Textile.png"}]},
          {tier:"Tier 2 — Platform",color:C.teal,title:"PoreSense Cloud",apps:[{n:"Analytics",d:"Batch trend analysis & SPC",i:"▦"},{n:"Cloud",d:"21 CFR Part 11 data logging",i:"▣"},{n:"API",d:"LIMS / ERP integration",i:"◈"},{n:"BI Dashboard",d:"Cross-plant intelligence",i:"▦"},{n:"e-Commerce",d:"Instruments & consumables",i:"▣"}]},
          {tier:"Tier 1 — Instruments",color:C.navyMid,title:"PoreSense Instruments",apps:PRODUCTS.map(p=>({n:p.model,d:p.name,i:p.icon}))},
        ].map(layer=>(
          <div key={layer.tier} style={{borderBottom:"1px solid rgba(139,173,212,0.08)"}}>
            <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"260px 1fr"}}>
              <div style={{padding:"40px 36px",borderRight:"1px solid rgba(139,173,212,0.08)",background:`${layer.color}11`,display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:layer.color,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>{layer.tier}</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:600,color:C.white}}>{layer.title}</div>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:2,padding:2}}>
                {layer.apps.map(app=>(
                  <div key={app.n} style={{padding:"28px 20px",background:"rgba(255,255,255,0.02)",transition:"all 0.2s",cursor:"pointer"}}
                    onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.06)"}
                    onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.02)"}>
                    <div style={{marginBottom:10}}>
                      <UIIcon src={app.i} alt={app.n} size={24}/>
                    </div>
                    <div style={{fontSize:12,fontWeight:600,color:C.white,marginBottom:4}}>{app.n}</div>
                    <div style={{fontSize:11,color:C.slate,lineHeight:1.4}}>{app.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{background:C.navy,padding:"80px 48px",textAlign:"center"}}>
        <Eyebrow c={C.teal}>Get Started</Eyebrow>
        <Serif size={44} weight={600} mb={24}>Access the full <em style={{color:C.gold,fontStyle:"italic"}}>platform.</em></Serif>
        <p style={{color:C.slate,fontSize:15,marginBottom:32,maxWidth:480,margin:"0 auto 32px"}}>Create your account and get immediate access to the tier that matches your needs.</p>
        <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
          <Btn variant="gold" size="lg" onClick={onRegister}>Create Account →</Btn>
          <Btn variant="ghost" size="lg" onClick={onQuote}>Request a Demo</Btn>
        </div>
      </div>
    </div>
  );
}
