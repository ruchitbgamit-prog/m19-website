import { C } from "../../theme/colors.js";

export function PublicFooter({ onNav }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-col-title">Quick Link</div>
          {[["Home", "home"], ["About Us", "about"], ["M19 Academy", "about"], ["Career", "about"], ["Blog", "about"], ["Contact Us", "about"]].map(([l, p]) => (
            <span key={l} className="footer-link" onClick={() => onNav(p)}>
              {l}
            </span>
          ))}
          <div style={{ marginTop: 18, fontSize: 12, color: C.slate, cursor: "pointer" }}>Privacy Policy</div>
        </div>
        <div>
          <div className="footer-col-title">USA</div>
          <div style={{ fontSize: 13, color: C.slate, lineHeight: 1.9 }}>
            <div>Material Intelligence Lab LLC</div>
            <div>300 Plaza Drive, Vestal,</div>
            <div>New York 13850</div>
            <div>+1 845 821-6219</div>
            <div>info@m19.io</div>
          </div>
        </div>
        <div>
          <div className="footer-col-title">India</div>
          <div style={{ fontSize: 13, color: C.slate, lineHeight: 1.9 }}>
            <div>801/802 K10 Grand, Vikram</div>
            <div>Sarabhai Campus, Alkapuri,</div>
            <div>Vadodara-390007 Gujarat</div>
            <div>+91 81403 08833</div>
            <div>info@m19.io</div>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 32,
          borderTop: "1px solid rgba(139,173,212,0.1)",
          fontSize: 12,
          color: "rgba(139,173,212,0.4)",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>© 2026 M19 Labs</div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy Policy", "Terms of Use", "IP & Trademark"].map((l) => (
            <span key={l} style={{ cursor: "pointer" }}>
              {l}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
