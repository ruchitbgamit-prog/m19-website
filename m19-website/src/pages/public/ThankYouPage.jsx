import { Btn, Eyebrow, Serif } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

export function ThankYouPage({onNav,onRegister}){
  return(
    <div style={{paddingTop:72,minHeight:"calc(100vh - 72px)",background:`linear-gradient(160deg,${C.dark} 0%,${C.navy} 100%)`}}>
      <div style={{maxWidth:900,margin:"0 auto",padding:"100px 24px 120px",textAlign:"center"}}>
        <Eyebrow>Request Received</Eyebrow>
        <div style={{fontSize:72,marginTop:8,marginBottom:24}}>✅</div>
        <Serif size={56} weight={600} mb={20} style={{color:C.white,lineHeight:1.15}}>
          Thank <em style={{color:C.gold,fontStyle:"italic"}}>You</em>
        </Serif>
        <p style={{fontSize:16,color:C.slate,lineHeight:1.7,maxWidth:560,margin:"0 auto 40px"}}>
          We've received your request and our team will respond within one business day.
          In the meantime, explore the rest of the M19 platform — or create an account for instant access.
        </p>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginBottom:56}}>
          <Btn variant="gold" onClick={onRegister}>Create Free Account →</Btn>
          <Btn variant="ghost" onClick={()=>onNav("home")}>Back to Home</Btn>
        </div>
        <div style={{borderTop:"1px solid rgba(139,173,212,0.15)",paddingTop:40,marginTop:24}}>
          <Eyebrow>Continue Exploring</Eyebrow>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:16,marginTop:24,maxWidth:720,marginInline:"auto"}}>
            {[
              ["platform","PoreSense™ Platform"],
              ["instruments","Instruments"],
              ["about","About M19"],
            ].map(([k,l])=>(
              <button
                key={k}
                onClick={()=>onNav(k)}
                style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(139,173,212,0.15)",color:C.white,padding:"18px 16px",fontSize:13,cursor:"pointer",fontFamily:"inherit",textAlign:"left",transition:"all 0.2s"}}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.08)";e.currentTarget.style.borderColor="rgba(212,175,55,0.4)";}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.04)";e.currentTarget.style.borderColor="rgba(139,173,212,0.15)";}}
              >
                <div style={{fontFamily:"'DM Mono',monospace",fontSize:10,color:C.gold,letterSpacing:2,textTransform:"uppercase",marginBottom:6}}>Explore</div>
                <div style={{fontSize:14,fontWeight:600}}>{l} →</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
