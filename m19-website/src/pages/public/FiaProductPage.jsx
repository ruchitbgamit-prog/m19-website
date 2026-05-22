import { useEffect } from "react";
import { industryHref } from "../../config/site.js";
import { PHARMA_CLIENTS } from "../../data/pharmaIndustryContent.js";
import { FIA_PAGE } from "../../data/fiaProductContent.js";
import { FaqAccordion } from "../../components/public/FaqAccordion.jsx";
import { Btn } from "../../components/ui/primitives.jsx";
import "../../styles/fiaProduct.css";

function FiaContentSection({ section }) {
  return (
    <article className="fia-sec" id={`fia-${section.id}`}>
      <h2 className="fia-sec-title">{section.title}</h2>
      {section.tagline ? <p className="fia-sec-tagline">{section.tagline}</p> : null}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="fia-sec-p">
          {p}
        </p>
      ))}
      {section.items?.length > 0 && (
        <div className="fia-app-chips">
          {section.items.map((item) => (
            <span key={item} className="fia-app-chip">
              {item}
            </span>
          ))}
        </div>
      )}
      {section.highlights?.length > 0 && (
        <ul className="fia-highlight-grid">
          {section.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      {section.note ? <p className="fia-sec-note">{section.note}</p> : null}
      {section.bullets?.length > 0 && (
        <ul className="fia-bullet-list">
          {section.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function FiaProductPage({ onQuote, onRegister, onNav }) {
  const P = FIA_PAGE;
  const M = P.marketing;

  useEffect(() => {
    document.title = P.seo.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", P.seo.description);
    return () => {
      document.title = "M19 · Material Intelligence";
    };
  }, [P.seo.description, P.seo.title]);

  return (
    <div className="fia-page">
      <nav className="fia-top-nav">
        <div className="fia-shell fia-top-nav-inner">
          <button type="button" className="fia-back" onClick={() => onNav("instruments")}>
            ← Instruments
          </button>
          <a href={industryHref("Pharma")} className="fia-back">
            Pharma industry →
          </a>
        </div>
      </nav>

      <header className="fia-mkt-hero" style={{ "--fia-hero-bg": `url(${M.heroBg})` }}>
        <div className="fia-mkt-overlay" aria-hidden />
        <div className="fia-shell fia-mkt-grid">
          <div className="fia-mkt-copy">
            <span className="fia-mkt-eyebrow">{P.eyebrow}</span>
            <h1 className="fia-mkt-title">{M.heroTitle}</h1>
            <p className="fia-mkt-tagline">{M.tagline}</p>
            <ul className="fia-mkt-bullets">
              {M.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="fia-mkt-cert-lbl">{M.certLabel}</p>
            <div className="fia-mkt-certs">
              {M.certifications.map((c) => (
                <span key={c} className="fia-mkt-cert">
                  {c}
                </span>
              ))}
            </div>
            <button type="button" className="fia-mkt-cta" onClick={onQuote}>
              {M.demoCtaLabel}
            </button>
          </div>
        </div>
      </header>

      <div className="fia-stats-strip">
        <div className="fia-shell fia-stats-inner">
          {M.statsStrip.map((s) => (
            <div key={s.label} className="fia-stat">
              <div className="fia-stat-val">{s.value}</div>
              <div className="fia-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <main className="fia-main">
        <div className="fia-shell fia-main-grid">
          <div className="fia-main-content">
            <div className="fia-intro-card">
              <p className="fia-intro-lead">{P.subtitle}</p>
              <div className="fia-badge-row">
                {P.badges.map((b) => (
                  <span key={b} className="fia-badge">
                    {b}
                  </span>
                ))}
              </div>
              <div className="fia-spec-grid">
                {P.specs.rows.map((row) => (
                  <div key={row.l} className="fia-spec-cell">
                    <span className="fia-spec-l">{row.l}</span>
                    <span className="fia-spec-v">{row.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {P.sections.map((section) => (
              <FiaContentSection key={section.id} section={section} />
            ))}

            <section className="fia-sec fia-sec--clients">
              <h2 className="fia-sec-title">Trusted by leading manufacturers</h2>
              <div className="fia-clients-row">
                {P.clients.map((name) => {
                  const client = PHARMA_CLIENTS.find((c) => c.name === name);
                  return (
                    <span key={name} className="fia-client-chip">
                      {client?.logo ? <img src={client.logo} alt={name} /> : name}
                    </span>
                  );
                })}
              </div>
            </section>

            <section className="fia-sec">
              <h2 className="fia-sec-title">Client results</h2>
              <div className="fia-test-grid">
                {P.testimonials.map((t) => (
                  <blockquote key={t.initials} className="fia-test-card">
                    <div className="fia-test-stars">★★★★★</div>
                    <p>{t.quote}</p>
                    <footer>
                      <span className="fia-test-av">{t.initials}</span>
                      <span>
                        <strong>{t.name}</strong>
                        <em>{t.role}</em>
                      </span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>

            <section className="fia-sec fia-sec--faq">
              <h2 className="fia-sec-title">Product FAQs</h2>
              <FaqAccordion items={P.faq} variant="product" />
            </section>
          </div>

          <aside className="fia-sidebar">
            <div className="fia-sidebar-sticky">
              <div className="fia-sidebar-card">
                <span className="fia-sidebar-tag">{P.tag}</span>
                <h3>FIA-100</h3>
                <p>Request configuration, IQ/OQ documentation, or a live demonstration.</p>
                <button type="button" className="fia-mkt-cta fia-mkt-cta--block" onClick={onQuote}>
                  Get your quote today →
                </button>
                <Btn variant="ghost" style={{ width: "100%", marginTop: 10 }} onClick={onRegister}>
                  Create account
                </Btn>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <section className="fia-bottom-cta">
        <div className="fia-shell fia-bottom-cta-inner">
          <div>
            <h2>{P.bottomCta.title}</h2>
            <p>{P.bottomCta.lead}</p>
          </div>
          <div className="fia-bottom-ctas">
            <button type="button" className="fia-mkt-cta" onClick={onQuote}>
              Request quotation
            </button>
            <Btn variant="ghost" onClick={onRegister}>
              Create account
            </Btn>
          </div>
        </div>
      </section>
    </div>
  );
}
