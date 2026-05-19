import { C } from "../theme/colors.js";

export const DEV_STYLES = `
/* Developer header (modern, minimal) */
.dev-nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;
  justify-content:space-between;padding:0 48px;height:72px;
  background:rgba(3,10,22,0.88);backdrop-filter:blur(16px);
  border-bottom:1px solid rgba(20,168,167,0.18);transition:all 0.3s;}
.dev-nav-logo{display:flex;align-items:center;gap:12px;cursor:pointer;}
.dev-nav-logo-img{height:40px;width:auto;display:block;object-fit:contain;}
.dev-nav-mark{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,${C.tealLt},${C.teal});
  display:flex;align-items:center;justify-content:center;color:${C.dark};font-weight:800;font-family:'Cormorant Garamond',serif;}
.dev-nav-wordmark{font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:700;letter-spacing:1px;color:${C.white};}
.dev-nav-links{display:flex;gap:26px;align-items:center;}
.dev-nav-link{font-size:12px;font-weight:600;letter-spacing:1.7px;text-transform:uppercase;color:rgba(240,244,250,0.7);
  cursor:pointer;transition:color 0.2s,transform 0.2s;}
.dev-nav-link:hover{color:${C.tealLt};transform:translateY(-1px);}
.dev-nav-link.active{color:${C.tealLt};}
.dev-nav-divider{width:1px;height:20px;background:rgba(20,168,167,0.25);}
.dev-nav-actions{display:flex;gap:10px;align-items:center;}
.dev-mobile-toggle{display:none;}

/* Developer mode content overrides */
[data-ui="developer"] .hero{
  background:linear-gradient(160deg,${C.dark} 0%,#061427 44%,${C.navy} 100%);
}
[data-ui="developer"] .hero-grid{opacity:0.06;}
[data-ui="developer"] .hero-eyebrow{
  border-color:rgba(20,168,167,0.35);
  background:rgba(20,168,167,0.08);
}
[data-ui="developer"] .hero-eyebrow-dot{background:${C.tealLt};}
[data-ui="developer"] .hero-eyebrow-text{color:${C.tealLt};}
[data-ui="developer"] .hero-sub{color:rgba(139,173,212,0.95);}
[data-ui="developer"] .section-eyebrow{color:${C.teal};}
[data-ui="developer"] .strip{
  background:rgba(11,31,58,0.92);
  border-top:1px solid rgba(20,168,167,0.18);
  border-bottom:1px solid rgba(20,168,167,0.18);
}
[data-ui="developer"] .card{border:1px solid rgba(20,168,167,0.14);background:rgba(14,124,123,0.07);}
[data-ui="developer"] .footer{background:rgba(3,10,22,0.98);}

/* Developer shell */
.dev-main{margin-left:260px;min-height:100vh;}
.dev-sidenav{position:fixed;top:72px;left:0;bottom:0;width:260px;z-index:90;
  padding:22px 16px;background:rgba(3,10,22,0.62);backdrop-filter:blur(14px);
  border-right:1px solid rgba(20,168,167,0.18);overflow-y:auto;}
.dev-sidenav-inner{max-width:228px;margin:0 auto;}
.dev-sidenav-title{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;
  color:rgba(240,244,250,0.55);margin:8px 0 14px;}
.dev-sidenav-item{display:flex;align-items:center;gap:12;padding:12px 14px;border-radius:14px;
  cursor:pointer;border:1px solid transparent;color:rgba(240,244,250,0.74);
  transition:all 0.2s;}
.dev-sidenav-item:hover{background:rgba(20,168,167,0.10);border-color:rgba(20,168,167,0.22);
  transform:translateY(-1px);color:rgba(240,244,250,0.96);}
.dev-sidenav-item.active{background:rgba(20,168,167,0.18);border-color:rgba(20,168,167,0.35);color:${C.white};}
.dev-sidenav-item-icon{width:30px;height:30px;border-radius:12px;background:rgba(20,168,167,0.12);
  border:1px solid rgba(20,168,167,0.20);display:flex;align-items:center;justify-content:center;
  font-size:13px;flex-shrink:0;}
.dev-drawer-overlay{position:fixed;inset:0;z-index:130;background:rgba(3,10,22,0.56);backdrop-filter:blur(6px);
  display:flex;justify-content:flex-start;}
.dev-drawer-panel{width:290px;max-width:86vw;background:rgba(3,10,22,0.96);
  border-right:1px solid rgba(20,168,167,0.22);padding:18px 14px;overflow-y:auto;}
.dev-drawer-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}
.dev-drawer-close{background:none;border:1px solid rgba(139,173,212,0.18);color:${C.white};border-radius:12px;
  width:38px;height:38px;cursor:pointer;transition:all 0.2s;}
.dev-drawer-close:hover{border-color:rgba(20,168,167,0.35);background:rgba(20,168,167,0.10);}
.dev-drawer-actions{display:flex;flex-direction:column;gap:10;margin-top:14px;}
.dev-drawer-textlink{font-size:12px;font-weight:600;letter-spacing:1.3px;text-transform:uppercase;
  color:rgba(240,244,250,0.7);cursor:pointer;padding:10px 12px;border-radius:12px;
  border:1px solid rgba(139,173,212,0.14);transition:all 0.2s;text-align:left;background:transparent;}
.dev-drawer-textlink:hover{color:rgba(240,244,250,0.95);border-color:rgba(20,168,167,0.28);background:rgba(20,168,167,0.10);}

/* Developer content polish */
[data-ui="developer"] .product-card{border-radius:16px;box-shadow:0 2px 20px rgba(2,6,23,0.04);transition:all 0.25s;}
[data-ui="developer"] .product-card:hover{box-shadow:0 18px 60px rgba(2,6,23,0.30);}
[data-ui="developer"] .service-card{border-radius:16px;}

[data-ui="developer"] .team-login-row{margin-left:260px;width:calc(100% - 260px);}

/* Developer navigation page transitions */
[data-ui="developer"] .dev-page{animation:fadeIn 0.22s ease;}
[data-ui="developer"] .dev-page > *{transform-origin:top center;}

@media (prefers-reduced-motion:reduce){
  html{scroll-behavior:auto;}
  *,*::before,*::after{
    animation-duration:0.001ms !important;
    animation-iteration-count:1 !important;
    transition-duration:0.001ms !important;
    scroll-behavior:auto !important;
  }
  [data-ui="developer"] .dev-page{animation:none;}
}

[data-ui="developer"] .dev-powered-wrap{
  padding:26px 48px 64px;
  background:rgba(6,15,30,0.25);
  border-top:1px solid rgba(20,168,167,0.12);
}
[data-ui="developer"] .dev-powered-inner{
  max-width:1200px;
  margin:0 auto;
}
[data-ui="developer"] .dev-powered-img{
  width:100%;
  height:auto;
  display:block;
  border-radius:18px;
  box-shadow:0 24px 90px rgba(2,6,23,0.55);
  border:1px solid rgba(255,255,255,0.04);
  max-height:170px;
  object-fit:contain;
}

/* Scrollytelling (developer instruments) */
[data-ui="developer"] .dev-story{
  background:linear-gradient(180deg,rgba(6,15,30,0.0),rgba(6,15,30,0.55) 14%,rgba(6,15,30,1) 100%);
  padding:90px 48px 110px;
  border-top:1px solid rgba(255,255,255,0.08);
}
[data-ui="developer"] .dev-story-inner{
  max-width:1200px;
  margin:0 auto;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:28px;
  align-items:start;
}
[data-ui="developer"] .dev-story-sticky{
  position:sticky;
  top:92px;
  align-self:start;
}
[data-ui="developer"] .dev-story-visual{
  border-radius:22px;
  border:1px solid rgba(255,255,255,0.10);
  background:radial-gradient(circle at 30% 0%,rgba(255,255,255,0.08),rgba(255,255,255,0.03) 45%,rgba(2,6,23,0.55) 100%);
  padding:26px 24px;
  overflow:hidden;
}
[data-ui="developer"] .dev-story-kicker{
  font-family:'DM Mono',monospace;
  font-size:10px;
  letter-spacing:2.2px;
  text-transform:uppercase;
  color:rgba(255,255,255,0.72);
  margin-bottom:10px;
}
[data-ui="developer"] .dev-story-title{
  font-family:'Cormorant Garamond',serif;
  font-size:40px;
  font-weight:600;
  color:${C.white};
  line-height:1.05;
  margin-bottom:12px;
}
[data-ui="developer"] .dev-story-body{
  font-size:13px;
  line-height:1.8;
  color:rgba(255,255,255,0.72);
  margin-bottom:18px;
}
[data-ui="developer"] .dev-story-media{
  height:320px;
  border-radius:18px;
  background:linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02));
  border:1px solid rgba(255,255,255,0.08);
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
}
[data-ui="developer"] .dev-story-media img{
  width:100%;
  height:100%;
  object-fit:contain;
  object-position:center;
  transform:translateY(0);
  transition:transform 0.6s cubic-bezier(.2,.8,.2,1),opacity 0.3s ease;
  filter:drop-shadow(0 16px 26px rgba(2,6,23,0.35));
}
[data-ui="developer"] .dev-story-chapters{
  display:flex;
  flex-direction:column;
  gap:14px;
}
[data-ui="developer"] .dev-story-chapter{
  border-radius:18px;
  padding:18px 18px 16px;
  border:1px solid rgba(255,255,255,0.08);
  background:rgba(255,255,255,0.03);
  backdrop-filter:blur(10px);
  min-height:220px;
  transition:transform 0.25s ease,border-color 0.25s ease,background 0.25s ease;
}
[data-ui="developer"] .dev-story-chapter.is-active{
  transform:translateY(-2px);
  background:rgba(255,255,255,0.05);
  border-color:rgba(255,255,255,0.16);
}
[data-ui="developer"] .dev-story-chip{
  display:inline-flex;
  padding:4px 10px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,0.18);
  font-family:'DM Mono',monospace;
  font-size:9px;
  letter-spacing:1.6px;
  text-transform:uppercase;
  margin-bottom:10px;
}
[data-ui="developer"] .dev-story-h{
  font-size:15px;
  font-weight:700;
  color:${C.white};
  margin-bottom:8px;
}
[data-ui="developer"] .dev-story-p{
  font-size:12px;
  line-height:1.7;
  color:rgba(255,255,255,0.70);
  margin-bottom:12px;
}
[data-ui="developer"] .dev-story-specs{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}
[data-ui="developer"] .dev-story-spec-k{
  font-family:'DM Mono',monospace;
  font-size:9px;
  letter-spacing:1.5px;
  text-transform:uppercase;
  color:rgba(255,255,255,0.46);
  margin-bottom:3px;
}
[data-ui="developer"] .dev-story-spec-v{
  font-size:12px;
  color:rgba(255,255,255,0.86);
  font-weight:600;
}


/* Flip-box effect (developer mode only) */
[data-ui="developer"] .flip-card{
  perspective:1200px;
  min-height:520px;
}
[data-ui="developer"] .flip-card-inner{
  position:relative;
  width:100%;
  height:100%;
  transition:transform 0.65s cubic-bezier(.2,.8,.2,1);
  transform-style:preserve-3d;
}
[data-ui="developer"] .flip-card:hover .flip-card-inner,
[data-ui="developer"] .flip-card.is-flipped .flip-card-inner{
  transform:rotateY(180deg);
}
[data-ui="developer"] .flip-face{
  position:absolute;
  inset:0;
  backface-visibility:hidden;
  overflow:hidden;
  display:flex;
  flex-direction:column;
}
[data-ui="developer"] .flip-front{transform:rotateY(0deg);}
[data-ui="developer"] .flip-back{transform:rotateY(180deg);}

@media(max-width:768px){
  [data-ui="developer"] .flip-card{min-height:470px;}
}

@media(max-width:960px){
  [data-ui="developer"] .dev-story-inner{grid-template-columns:1fr;}
  [data-ui="developer"] .dev-story-sticky{position:relative;top:auto;}
  [data-ui="developer"] .dev-story-media{height:280px;}
}

@media(max-width:768px){
  .dev-nav{padding:0 20px;}
  .dev-nav-links{display:none;}
  .dev-nav-actions{display:none;}
  .dev-mobile-toggle{display:flex;align-items:center;justify-content:center;
    width:44px;height:44px;border-radius:14px;background:rgba(255,255,255,0.04);
    border:1px solid rgba(139,173,212,0.18);color:${C.white};cursor:pointer;transition:all 0.2s;}
  .dev-mobile-toggle:hover{border-color:rgba(20,168,167,0.35);background:rgba(20,168,167,0.10);}
  .dev-main{margin-left:0;}
  .dev-sidenav{display:none;}
  [data-ui="developer"] .team-login-row{margin-left:0;width:100%;}
  [data-ui="developer"] .dev-powered-wrap{padding:20px 18px 48px;}
}
`;
