import { Btn, Eyebrow } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function AboutPage({onNav,onRegister}){
  return(
    <div style={{paddingTop:72}}>
      <div style={{background:`linear-gradient(160deg,${C.dark} 0%,${C.navy} 100%)`,padding:"80px 48px 60px"}}>
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <Eyebrow>Our Vision</Eyebrow>
          <div className="hero-h1" style={{fontSize:"clamp(40px,5vw,72px)"}}>India's first <em>global</em><br/>material intelligence brand.</div>
          <p className="hero-sub" style={{marginTop:16,marginBottom:0}}>M19 was founded with one conviction: India can lead the world in precision materials science — not just as a market, but as an innovator, a manufacturer, and a platform company.</p>
        </div>
      </div>
      <div style={{background:C.dark,padding:"80px 48px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80}}>
          <div>
            <Eyebrow>V-2030 Mission</Eyebrow>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:600,color:C.white,lineHeight:1.5,marginBottom:24,fontStyle:"italic"}}>"To build the world's most trusted material intelligence platform — from India, for the world."</div>
            <p style={{fontSize:14,color:C.slate,lineHeight:1.8,marginBottom:20}}>By 2030, PoreSense™ will be the globally recognised standard for pore characterisation intelligence — trusted by pharmaceutical manufacturers in the US and Europe, defence labs in Israel and Australia, and research institutions across Asia.</p>
            <div style={{marginTop:32}}><Btn variant="gold" onClick={onRegister}>Join the Platform →</Btn></div>
          </div>
          <div>
            <Eyebrow>The HEART Values</Eyebrow>
            {[["H","Honesty","We report what we measure. Scientific integrity is non-negotiable."],["E","Excellence","Every instrument, every report — done to the highest standard."],["A","Agility","Fast-moving science requires fast-moving teams."],["R","Rigour","We follow the method. Every time. Calibrated, validated, documented."],["T","Trust","Our clients trust our data for critical decisions. We earn that daily."]].map(([l,w,b])=>(
              <div key={l} style={{display:"flex",gap:16,alignItems:"flex-start",marginBottom:20,paddingBottom:20,borderBottom:"1px solid rgba(139,173,212,0.08)"}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:700,color:C.gold,lineHeight:1,flexShrink:0,width:36}}>{l}</div>
                <div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:600,color:C.white,marginBottom:4}}>{w}</div>
                  <div style={{fontSize:12,color:C.slate,lineHeight:1.6}}>{b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
