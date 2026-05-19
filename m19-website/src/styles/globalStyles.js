import { C } from "../theme/colors.js";

export const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
:root{
  --font-sans:'DM Sans',ui-sans-serif,system-ui,-apple-system,'Segoe UI',Arial,sans-serif;
  --font-serif:'Cormorant Garamond',Georgia,'Times New Roman',serif;
  --font-mono:'DM Mono',ui-monospace,SFMono-Regular,monospace;
}
body{font-family:var(--font-sans);font-weight:400;background:${C.dark};color:${C.white};overflow-x:hidden;-webkit-font-smoothing:antialiased;}
/* Motion + focus defaults (modern, subtle) */
:root{
  --ease-out:cubic-bezier(.2,.8,.2,1);
  --ease-soft:cubic-bezier(.16,1,.3,1);
  --dur-1:140ms;
  --dur-2:220ms;
  --dur-3:420ms;
  --ring:0 0 0 4px rgba(0,199,200,0.18);
}
a,button,[role="button"]{touch-action:manipulation;}
button:focus-visible,[role="button"]:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:none;box-shadow:var(--ring);}
::-webkit-scrollbar{width:4px;} ::-webkit-scrollbar-track{background:${C.dark};} ::-webkit-scrollbar-thumb{background:${C.navyLt};}
.serif{font-family:var(--font-serif);} .mono{font-family:var(--font-mono);}
input,select,textarea,button{font-family:var(--font-sans);}
@keyframes fadeUp{from{opacity:0;transform:translateY(22px);}to{opacity:1;transform:translateY(0);}}
@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
@keyframes pulse{0%,100%{opacity:1;}50%{opacity:0.4;}}
.fade-in{animation:fadeIn 0.4s ease forwards;}
.fade-up{animation:fadeUp 0.5s ease forwards;}
.fade-up-1{animation:fadeUp 0.5s 0.1s ease both;}
.fade-up-2{animation:fadeUp 0.5s 0.2s ease both;}
.fade-up-3{animation:fadeUp 0.5s 0.3s ease both;}
.fade-up-4{animation:fadeUp 0.5s 0.4s ease both;}

/* PUBLIC NAV */
.pub-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;
  justify-content:space-between;padding:0 48px;height:72px;
  /* Match the reference site header tone */
  background:rgba(6,15,30,0.92);
  backdrop-filter:blur(16px) saturate(140%);
  border-bottom:1px solid rgba(201,168,76,0.12);
  box-shadow:0 10px 34px rgba(2,6,23,0.28);
  transition:all 0.3s;}
.pub-nav-logo{display:flex;align-items:center;gap:12px;cursor:pointer;}
.pub-nav-logo-img{height:62px;width:auto;display:block;object-fit:contain;}
.pub-nav-mark{width:36px;height:36px;background:linear-gradient(135deg,${C.navyMid},${C.teal});
  display:flex;align-items:center;justify-content:center;
  font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:700;color:${C.gold};}
.pub-nav-wordmark{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:600;letter-spacing:2px;color:${C.white};}
.pub-nav-links{display:flex;gap:32px;align-items:center;}
.pub-nav-dropdown{position:relative;display:inline-flex;align-items:center;}
.pub-nav-dropdown-panel{
  position:absolute;
  top:44px;
  left:-10px;
  min-width:240px;
  background:rgba(6,15,30,0.96);
  border:1px solid rgba(201,168,76,0.14);
  border-radius:16px;
  padding:8px;
  box-shadow:0 24px 80px rgba(2,6,23,0.55);
  z-index:220;
  pointer-events:auto;
  max-height:min(70vh, 440px);
  overflow:auto;
  overscroll-behavior:contain;
}
.pub-nav-dd-item{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  padding:9px 12px;
  border-radius:12px;
  cursor:pointer;
  color:rgba(255,255,255,0.78);
  transition:background var(--dur-1) var(--ease-out),color var(--dur-1) var(--ease-out),transform var(--dur-1) var(--ease-out);
  font-size:12px;
  font-weight:600;
  letter-spacing:1.1px;
  text-transform:uppercase;
  text-decoration:none;
}
.pub-nav-dd-item:hover{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.96);transform:translateY(-1px);}
.pub-nav-dd-dot{width:8px;height:8px;border-radius:99px;flex-shrink:0;background:var(--dd-accent,#1FC1C6);box-shadow:0 0 0 3px rgba(255,255,255,0.08);}
.pub-nav-link{
  position:relative;
  font-size:12px;
  font-weight:500;
  letter-spacing:1.6px;
  color:rgba(255,255,255,0.72);
  text-decoration:none;
  cursor:pointer;
  transition:color var(--dur-1) var(--ease-out),transform var(--dur-1) var(--ease-out),text-shadow var(--dur-1) var(--ease-out);
  text-transform:uppercase;
}
.pub-nav-link::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  bottom:-10px;
  height:2px;
  border-radius:99px;
  background:#1FC1C6;
  transform:scaleX(0.22);
  opacity:0;
  transform-origin:center;
  transition:transform var(--dur-2) var(--ease-soft),opacity var(--dur-2) var(--ease-soft);
}
.pub-nav-link:hover{
  transform:translateY(-1px);
  color:rgba(255,255,255,0.96);
}
.pub-nav-link:hover::after{
  opacity:0.7;
  transform:scaleX(0.72);
}
.pub-nav-link.active{
  color:#1FC1C6;
  text-shadow:0 0 18px rgba(31,193,198,0.18);
}
.pub-nav-link.active::after{
  opacity:1;
  transform:scaleX(1);
}
.pub-nav-divider{width:1px;height:20px;background:rgba(139,173,212,0.18);}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;justify-content:center;cursor:pointer;
  font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;
  transition:transform var(--dur-1) var(--ease-soft),box-shadow var(--dur-1) var(--ease-soft),background var(--dur-1) var(--ease-soft),border-color var(--dur-1) var(--ease-soft),opacity var(--dur-1) var(--ease-soft);
  border:none;padding:10px 22px;will-change:transform;}
.btn:hover{transform:translateY(-1px);opacity:0.96;}
.btn:active{transform:translateY(0px) scale(0.99);opacity:0.98;}
.btn-gold{background:${C.gold};color:${C.dark};}
.btn-teal{background:${C.teal};color:${C.white};}
.btn-hp-green{background:${C.green};color:${C.white};box-shadow:0 10px 32px rgba(62,160,85,0.34);}
.btn-hp-green:hover{box-shadow:0 14px 44px rgba(62,160,85,0.42);}
.btn-ghost{background:transparent;color:${C.white};border:1px solid rgba(255,255,255,0.2);}
.btn-ghost:hover{border-color:${C.teal};color:${C.tealLt};}
.btn-outline-gold{background:transparent;color:${C.gold};border:1px solid rgba(235,94,0,0.42);}
.btn-outline-gold:hover{background:rgba(235,94,0,0.08);border-color:rgba(235,94,0,0.58);}
.btn-sm{padding:7px 16px;font-size:11px;}
.btn-lg{padding:14px 36px;font-size:13px;}
.btn-full{width:100%;}

/* HERO */
.hero{min-height:100vh;position:relative;overflow:hidden;display:flex;align-items:center;
  background:linear-gradient(160deg,${C.dark} 0%,#0A1829 50%,${C.navy} 100%);}
.hero-grid{position:absolute;inset:0;opacity:0.04;
  background-image:linear-gradient(${C.teal} 1px,transparent 1px),linear-gradient(90deg,${C.teal} 1px,transparent 1px);
  background-size:60px 60px;}
.hero-glow{position:absolute;top:-200px;right:-200px;width:700px;height:700px;border-radius:50%;
  background:radial-gradient(circle,rgba(14,124,123,0.12) 0%,transparent 70%);pointer-events:none;}
.hero-glow2{position:absolute;bottom:-100px;left:-100px;width:500px;height:500px;border-radius:50%;
  background:radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 70%);pointer-events:none;}
.hero-content{position:relative;z-index:2;max-width:1200px;margin:0 auto;padding:120px 48px 80px;width:100%;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:10px;padding:6px 16px;
  border:1px solid rgba(201,168,76,0.3);background:rgba(201,168,76,0.06);margin-bottom:32px;}
.hero-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:${C.gold};animation:pulse 2s infinite;}
.hero-eyebrow-text{font-family:'DM Mono',monospace;font-size:11px;color:${C.gold};letter-spacing:2px;text-transform:uppercase;}
.hero-h1{font-family:'Cormorant Garamond',serif;font-size:clamp(52px,7vw,96px);
  font-weight:300;line-height:1.0;color:${C.white};margin-bottom:12px;letter-spacing:-1px;}
.hero-h1 em{font-style:italic;color:${C.gold};}
.hero-h1 strong{font-weight:700;display:block;}
.poresense-gradient{
  background:linear-gradient(90deg,#1FC1C6 0%, #4B7BFF 34%, #8B3DFF 66%, #FF47C8 100%);
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent !important;
  -webkit-text-fill-color:transparent;
  font-style:italic;
}
.hero-sub{font-size:17px;color:${C.slate};max-width:560px;line-height:1.7;margin-bottom:48px;font-weight:300;}
.hero-actions{display:flex;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:80px;}

/* SECTIONS */
.section{padding:100px 48px;max-width:1200px;margin:0 auto;}
.section-eyebrow{font-family:'DM Mono',monospace;font-size:11px;color:${C.teal};letter-spacing:3px;text-transform:uppercase;margin-bottom:16px;}
.section-h2{font-family:'Cormorant Garamond',serif;font-size:clamp(36px,4vw,56px);font-weight:300;line-height:1.1;color:${C.white};margin-bottom:20px;}
.section-h2 em{font-style:italic;color:${C.gold};}
.section-body{font-size:16px;color:${C.slate};line-height:1.8;max-width:560px;font-weight:300;}

/* CARDS */
.card{background:rgba(255,255,255,0.03);border:1px solid rgba(139,173,212,0.08);padding:24px;transition:all 0.2s;}
.card-hover:hover{background:rgba(255,255,255,0.06);border-color:rgba(139,173,212,0.2);}

/* PLATFORM STRIP */
.strip{background:${C.navyMid};padding:18px 48px;display:flex;align-items:center;gap:0;overflow:hidden;
  border-top:1px solid rgba(201,168,76,0.15);border-bottom:1px solid rgba(201,168,76,0.15);}
.strip-label{font-family:'DM Mono',monospace;font-size:10px;color:${C.gold};letter-spacing:3px;text-transform:uppercase;white-space:nowrap;margin-right:40px;}
.strip-items{display:flex;gap:32px;flex-wrap:wrap;}
.strip-item{font-size:12px;color:${C.slate};letter-spacing:1px;white-space:nowrap;}
.strip-item::before{content:'· ';color:${C.teal};}

/* TRUST BAR */
.trust-bar{background:rgba(27,63,107,0.3);padding:48px;
  border-top:1px solid rgba(201,168,76,0.1);border-bottom:1px solid rgba(201,168,76,0.1);}
.trust-items{display:flex;gap:48px;flex-wrap:wrap;justify-content:center;align-items:center;}
.trust-divider{width:1px;height:48px;background:rgba(139,173,212,0.2);}

/* PARTNERS — infinite marquee (logos in /public/patners/) — light tiles so marks read clearly */
.partners-section{
  background:
    radial-gradient(ellipse 85% 55% at 50% 42%,rgba(19,59,107,0.5) 0%,transparent 58%),
    linear-gradient(180deg,${C.dark} 0%,#050d1a 100%);
  border-top:1px solid rgba(31,193,198,0.14);
  border-bottom:1px solid rgba(31,193,198,0.1);
  padding:clamp(52px,7vw,84px) 0 clamp(44px,6vw,68px);
  overflow:hidden;
}
.partners-section-inner{max-width:1200px;margin:0 auto;padding:0 48px;}
.partners-section-head{text-align:center;margin-bottom:clamp(28px,4vw,44px);}
.partners-section-head .section-body{
  max-width:640px;margin-left:auto;margin-right:auto;
  color:rgba(226,236,248,0.92);
}
.partners-marquee-wrap{
  position:relative;margin:0 -48px;
  padding:clamp(12px,2vw,20px) 0;
}
.partners-marquee-wrap::before{
  content:"";
  position:absolute;inset:0 8%;border-radius:20px;
  background:rgba(255,255,255,0.03);
  border:1px solid rgba(139,173,212,0.1);
  pointer-events:none;
}
.partners-marquee-viewport{
  position:relative;
  overflow:hidden;
  padding:clamp(14px,2.5vw,22px) 0;
  -webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 6%,#000 94%,transparent 100%);
  mask-image:linear-gradient(90deg,transparent 0%,#000 6%,#000 94%,transparent 100%);
}
.partners-marquee-track{
  display:flex;
  align-items:stretch;
  gap:clamp(20px,2.8vw,36px);
  width:max-content;
  animation:partners-marquee 56s linear infinite;
  will-change:transform;
}
.partners-marquee-track:hover{animation-play-state:paused;}
@keyframes partners-marquee{
  0%{transform:translateX(0);}
  100%{transform:translateX(-50%);}
}
.partners-marquee-item{
  flex-shrink:0;
  display:flex;
  align-items:center;
  justify-content:center;
  width:176px;
  min-height:88px;
  padding:16px 20px;
  border-radius:14px;
  background:linear-gradient(180deg,#ffffff 0%,#f4f7fb 100%);
  border:1px solid rgba(15,23,42,0.1);
  box-shadow:
    0 4px 6px rgba(2,6,23,0.06),
    0 18px 40px rgba(2,6,23,0.14),
    inset 0 1px 0 rgba(255,255,255,0.95);
  transition:transform var(--dur-2) var(--ease-soft),border-color var(--dur-2) var(--ease-soft),box-shadow var(--dur-2) var(--ease-soft);
}
.partners-marquee-item:hover{
  transform:translateY(-4px);
  border-color:rgba(0,199,200,0.45);
  box-shadow:
    0 8px 12px rgba(2,6,23,0.08),
    0 22px 50px rgba(0,199,200,0.12),
    inset 0 1px 0 #fff;
}
.partners-marquee-item img{
  max-width:100%;
  max-height:52px;
  width:auto;
  height:auto;
  object-fit:contain;
  filter:none;
  opacity:1;
  transition:transform var(--dur-2) var(--ease-soft);
}
.partners-marquee-item:hover img{transform:scale(1.04);}
@media (prefers-reduced-motion:reduce){
  .partners-marquee-viewport{overflow-x:auto;-webkit-overflow-scrolling:touch;mask-image:none;-webkit-mask-image:none;padding:12px 12px 16px;}
  .partners-marquee-track{animation:none;padding:4px 0;}
  .partners-marquee-item:hover img{transform:none;}
}
@media(max-width:768px){
  .partners-section-inner{padding:0 20px;}
  .partners-marquee-wrap{margin:0 -20px;}
  .partners-marquee-wrap::before{inset:0 4%;border-radius:16px;}
  .partners-marquee-item{width:148px;min-height:76px;padding:14px 16px;}
  .partners-marquee-item img{max-height:44px;}
}

/* PRODUCTS */
.product-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:18px;margin-top:56px;align-items:stretch;}
.product-card{background:${C.white};overflow:hidden;cursor:pointer;
  transition:transform var(--dur-2) var(--ease-soft),box-shadow var(--dur-2) var(--ease-soft),border-color var(--dur-2) var(--ease-soft),filter var(--dur-2) var(--ease-soft);
  border:1px solid rgba(15,23,42,0.08);border-bottom:3px solid transparent;box-shadow:0 2px 20px rgba(2,6,23,0.06);will-change:transform;
  border-radius:22px;display:flex;flex-direction:column;height:100%;}
.product-card:hover{transform:translateY(-6px);box-shadow:0 22px 70px rgba(2,6,23,0.16);filter:saturate(1.02);}
.product-card:active{transform:translateY(-2px);box-shadow:0 14px 48px rgba(2,6,23,0.14);}
/* Instrument hero photo: light neutral stage only — avoids a dark “frame” around PNGs */
.instrument-visual{
  margin:20px 28px;
  min-height:228px;
  border-radius:14px;
  background:linear-gradient(180deg,#f7f8fa 0%,#eef1f5 100%);
  border:1px solid rgba(15,23,42,0.06);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:20px 22px;
  position:relative;
  overflow:hidden;
}
.instrument-visual img{
  max-width:100%;
  max-height:210px;
  width:auto;
  height:auto;
  object-fit:contain;
  object-position:center;
  display:block;
  transition:transform var(--dur-2) var(--ease-soft);
}
.fia-powered{
  position:absolute;
  left:12px;
  right:12px;
  bottom:12px;
  background:rgba(255,255,255,0.94);
  border:1px solid rgba(15,23,42,0.08);
  border-radius:12px;
  overflow:hidden;
  pointer-events:none;
  box-shadow:0 4px 18px rgba(15,23,42,0.05);
}
.fia-powered img{
  width:100%;
  height:64px;
  display:block;
  object-fit:contain;
  object-position:center;
  padding:6px 10px;
}

/* SERVICES */
.services-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:2px;margin-top:56px;}
.service-card{background:rgba(255,255,255,0.04);padding:36px;border-left:2px solid transparent;cursor:pointer;transition:all 0.3s;}
.service-card:hover{background:rgba(14,124,123,0.1);border-left-color:${C.teal};}

/* INDUSTRY */
.industry-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:2px;margin-top:48px;}
.industry-card{
  padding:26px 20px;
  background:rgba(255,255,255,0.03);
  text-align:center;
  cursor:pointer;
  transition:transform var(--dur-2) var(--ease-soft),background var(--dur-2) var(--ease-soft),border-color var(--dur-2) var(--ease-soft);
  border-bottom:2px solid transparent;
  border-radius:16px;
  border:1px solid rgba(255,255,255,0.08);
}
a.industry-card{display:block;text-decoration:none;color:inherit;-webkit-tap-highlight-color:transparent;}
a.industry-card:focus-visible{
  outline:2px solid color-mix(in srgb, var(--industry-accent, ${C.teal}) 70%, transparent);
  outline-offset:3px;
}
.industry-card:hover{
  transform:translateY(-4px);
  background:color-mix(in srgb, var(--industry-glow, var(--industry-accent, ${C.teal})) 16%, rgba(255,255,255,0.03));
  border-color:color-mix(in srgb, var(--industry-glow, var(--industry-accent, ${C.teal})) 68%, rgba(255,255,255,0.08));
  border-bottom-color:var(--industry-accent, ${C.teal});
  box-shadow:
    0 18px 44px color-mix(in srgb, var(--industry-glow, var(--industry-accent, ${C.teal})) 34%, transparent),
    inset 0 0 0 1px color-mix(in srgb, var(--industry-glow, var(--industry-accent, ${C.teal})) 22%, transparent);
}
.industry-ico{
  width:56px;height:56px;margin:0 auto 14px;
  display:grid;place-items:center;
  filter:drop-shadow(0 10px 24px rgba(2,6,23,0.35));
  transition:filter var(--dur-2) var(--ease-soft),transform var(--dur-2) var(--ease-soft);
}
.industry-ico img{
  width:56px;height:56px;object-fit:contain;display:block;
  transition:filter var(--dur-2) var(--ease-soft),transform var(--dur-2) var(--ease-soft),opacity var(--dur-2) var(--ease-soft);
}
.industry-card:hover .industry-ico{
  filter:drop-shadow(0 12px 26px color-mix(in srgb, var(--industry-accent, ${C.teal}) 24%, transparent));
  transform:translateY(-2px);
}
.industry-card:hover .industry-ico img{
  opacity:0.98;
  transform:scale(1.04);
  filter:
    brightness(0) saturate(100%)
    drop-shadow(0 0 0 color-mix(in srgb, var(--industry-accent, ${C.teal}) 0%, transparent))
    brightness(0) invert(1)
    sepia(1)
    saturate(0.55)
    hue-rotate(0deg);
}
.industry-label{transition:color var(--dur-2) var(--ease-soft),letter-spacing var(--dur-2) var(--ease-soft);}
.industry-card:hover .industry-label{
  color:var(--industry-accent, ${C.teal}) !important;
  letter-spacing:1.4px;
}

/* CTA BANNER */
.cta-banner{background:${C.teal};padding:72px 48px;text-align:center;position:relative;overflow:hidden;}
.cta-banner::before{content:'';position:absolute;inset:0;
  background:repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(255,255,255,0.02) 40px,rgba(255,255,255,0.02) 80px);}
.cta-banner>*{position:relative;z-index:1;}

/* FOOTER */
.footer{background:${C.dark};padding:80px 48px 40px;border-top:1px solid rgba(139,173,212,0.1);}
.footer-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:48px;max-width:1200px;margin:0 auto 60px;}
.footer-col-title{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${C.gold};margin-bottom:20px;}
.footer-link{display:block;font-size:13px;color:${C.slate};margin-bottom:10px;cursor:pointer;transition:color 0.2s;}
.footer-link:hover{color:${C.white};}

/* AUTH PAGES */
.auth-split{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;}
.auth-left{background:linear-gradient(160deg,${C.navy} 0%,${C.dark} 100%);
  display:flex;flex-direction:column;justify-content:space-between;padding:48px 56px;
  border-right:1px solid rgba(201,168,76,0.1);position:relative;overflow:hidden;}
.auth-right{display:flex;align-items:center;justify-content:center;padding:48px 56px;overflow-y:auto;}
.auth-grid{position:absolute;inset:0;opacity:0.04;
  background-image:linear-gradient(${C.teal} 1px,transparent 1px),linear-gradient(90deg,${C.teal} 1px,transparent 1px);
  background-size:50px 50px;}
.form-label{font-family:'DM Mono',monospace;font-size:10px;color:${C.slate};letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;display:block;}
.form-input,.form-select,.form-textarea{width:100%;padding:11px 14px;background:rgba(255,255,255,0.05);
  border:1px solid rgba(139,173,212,0.2);color:${C.white};font-size:14px;outline:none;transition:border-color 0.2s;}
.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:${C.teal};}
.form-select option{background:${C.navyMid};color:${C.white};}
.form-textarea{resize:vertical;min-height:80px;}
.form-icon-wrap{position:relative;}
.form-icon-wrap .form-icon{position:absolute;left:13px;top:50%;transform:translateY(-50%);font-size:14px;opacity:0.45;}
.form-icon-wrap .form-input{padding-left:38px;}
.pill{padding:5px 14px;font-size:12px;cursor:pointer;transition:all 0.2s;
  background:transparent;border:1px solid rgba(139,173,212,0.2);color:${C.slate};font-weight:600;}
.pill.active-teal{background:rgba(14,124,123,0.2);border-color:${C.teal};color:${C.teal};font-weight:600;}
.pill.active-purple{background:rgba(123,79,191,0.2);border-color:${C.purple};color:${C.purple};font-weight:600;}
.badge{padding:3px 10px;font-family:'DM Mono',monospace;font-size:9px;letter-spacing:1px;text-transform:uppercase;}

/* DASHBOARD */
.dash-layout{display:flex;height:100vh;overflow:hidden;}
.dash-sidebar{width:240px;background:${C.navy};border-right:1px solid rgba(139,173,212,0.1);
  display:flex;flex-direction:column;flex-shrink:0;}
.dash-main{flex:1;overflow-y:auto;display:flex;flex-direction:column;}
.dash-topbar{padding:14px 32px;border-bottom:1px solid rgba(139,173,212,0.08);
  display:flex;align-items:center;justify-content:space-between;
  background:rgba(11,31,58,0.6);backdrop-filter:blur(8px);position:sticky;top:0;z-index:10;}
.nav-item{display:flex;align-items:center;gap:10px;padding:9px 20px;cursor:pointer;
  border-left:2px solid transparent;transition:all 0.15s;}
.nav-item:hover{background:rgba(14,124,123,0.06);}
.nav-item.active{background:rgba(14,124,123,0.12);border-left-color:${C.teal};}
.nav-section{padding:8px 20px 4px;font-family:'DM Mono',monospace;font-size:8px;
  color:rgba(139,173,212,0.4);letter-spacing:2px;text-transform:uppercase;}
.progress-track{height:3px;background:rgba(255,255,255,0.06);border-radius:2px;}
.progress-fill{height:100%;border-radius:2px;transition:width 1s ease;}

/* MODAL */
.modal-overlay{position:fixed;inset:0;background:rgba(6,15,30,0.92);z-index:200;
  display:flex;align-items:center;justify-content:center;padding:24px;animation:fadeIn 0.2s ease;}
.modal-box{background:${C.navyMid};max-width:560px;width:100%;padding:48px;position:relative;
  border:1px solid rgba(201,168,76,0.2);animation:fadeUp 0.3s ease;}
.modal-close{position:absolute;top:18px;right:18px;background:none;border:none;color:${C.slate};font-size:18px;cursor:pointer;padding:4px;}

@media(max-width:768px){
  .pub-nav{padding:0 20px;} .pub-nav-links{display:none;}
  .hero-content{padding:100px 20px 60px;} .section{padding:60px 20px;}
  .auth-split{grid-template-columns:1fr;} .auth-left{display:none;}
  .footer-grid{grid-template-columns:1fr 1fr;} .trust-divider{display:none;}
  .dash-sidebar{display:none;}
  .fia-dash-main{grid-template-columns:1fr !important;}
  .fia-kpi-row{grid-template-columns:1fr !important;}
  .fia-two-col{grid-template-columns:1fr !important;}
}
`;
