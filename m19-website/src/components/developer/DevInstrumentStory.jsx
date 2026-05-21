import { useEffect, useRef, useState } from "react";
import { MACHINE_IMAGE_MAP, PRODUCTS } from "../../data/products.js";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";
import { C } from "../../theme/colors.js";

export function DevInstrumentStory(){
  const reduced=usePrefersReducedMotion();
  const [active,setActive]=useState(0);
  const chapterRefs=useRef([]);

  useEffect(()=>{
    const els=chapterRefs.current.filter(Boolean);
    if(!els.length) return;
    const io=new IntersectionObserver(
      (entries)=>{
        const visible=entries
          .filter(e=>e.isIntersecting)
          .sort((a,b)=>(b.intersectionRatio||0)-(a.intersectionRatio||0))[0];
        if(!visible) return;
        const idx=els.indexOf(visible.target);
        if(idx>=0) setActive(idx);
      },
      {threshold: reduced ? [0.35] : [0.18,0.3,0.45,0.6,0.75]}
    );
    els.forEach(el=>io.observe(el));
    return()=>io.disconnect();
  },[reduced]);

  const p=PRODUCTS[active]||PRODUCTS[0];
  const img=MACHINE_IMAGE_MAP[p.model]||null;

  return(
    <section className="dev-story">
      <div className="dev-story-inner">
        <div className="dev-story-sticky">
          <div className="dev-story-visual">
            <div className="dev-story-kicker">Scrollytelling · Motion-first</div>
            <div className="dev-story-title">{p.model} — {p.name}</div>
            <div className="dev-story-body">{p.desc}</div>
            <div className="dev-story-media" aria-hidden="true">
              {img ? <img src={img} alt="" loading="lazy" decoding="async"/> : <div style={{fontSize:72,opacity:0.35}}>{p.icon}</div>}
            </div>
          </div>
        </div>

        <div className="dev-story-chapters">
          {PRODUCTS.map((x,i)=>(
            <div
              key={x.model}
              ref={(el)=>{chapterRefs.current[i]=el;}}
              className={`dev-story-chapter${i===active?" is-active":""}`}
            >
              <div className="dev-story-chip" style={{borderColor:`${x.color}55`,color:x.color}}>{x.cat}</div>
              <div className="dev-story-h">{x.model} — {x.name}</div>
              <div className="dev-story-p">{x.desc}</div>
              <div className="dev-story-specs">
                {x.specs.slice(0,4).map(s=>(
                  <div key={s.l} className="dev-story-spec">
                    <div className="dev-story-spec-k">{s.l}</div>
                    <div className="dev-story-spec-v">{s.v}</div>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
