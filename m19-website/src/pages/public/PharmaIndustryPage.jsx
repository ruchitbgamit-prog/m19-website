import { useEffect } from "react";
import { LAB_TESTING_EXTERNAL_URL } from "../../config/site.js";
import { PharmaClientsRibbon } from "../../components/public/PharmaClientsRibbon.jsx";
import { PharmaProductMachinesGrid } from "../../components/public/PharmaProductMachinesGrid.jsx";
import { FaqAccordion } from "../../components/public/FaqAccordion.jsx";
import { PHARMA_PAGE } from "../../data/pharmaIndustryContent.js";
import { PHARMA_INDUSTRY_FAQS } from "../../data/pharmaFaqs.js";
import { Btn } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";
import "../../styles/pharmaIndustry.css";
import "../../styles/instrumentProduct.css";

function labTestUrl(medium) {
  const u = new URL(LAB_TESTING_EXTERNAL_URL);
  u.searchParams.set("utm_source", "industry_pharma");
  u.searchParams.set("utm_medium", medium);
  u.searchParams.set("utm_campaign", "pharma_landing");
  return u.toString();
}

export function PharmaIndustryPage({ meta, onQuote, onProductNav, brochureUrl }) {
  const industryAccent = meta?.color || "#FF0099";
  const page = PHARMA_PAGE;

  useEffect(() => {
    document.title = page.seo.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", page.seo.description);
    return () => {
      document.title = "M19 · Material Intelligence";
    };
  }, [page.seo]);

  return (
    <div className="ph-page" style={{ "--ph-industry": industryAccent }}>
      <section
        className={`ph-hero ph-hero--landing${page.heroImage ? " ph-hero--bg" : ""}`}
        style={page.heroImage ? { "--ph-hero-bg": `url(${page.heroImage})` } : undefined}
      >
        {!page.heroImage && <div className="hero-grid" aria-hidden />}
        {!page.heroImage && <div className="hero-glow" aria-hidden />}
        {!page.heroImage && <div className="hero-glow2" aria-hidden />}
        {page.heroImage ? <div className="ph-hero-bg-overlay" aria-hidden /> : null}
        <div className="ph-shell ph-hero-layout">
          <div className="ph-hero-copy">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-dot" aria-hidden />
              <span className="hero-eyebrow-text">{page.tag}</span>
            </div>
            <h1 className="hero-h1 ph-hero-h1">
              <em style={{ color: industryAccent }}>{page.heroTitle[0]}</em>
              <strong>{page.heroTitle[1]}</strong>
              <span style={{ color: C.slate, fontWeight: 600 }}> {page.heroTitle[2]}</span>
            </h1>
            <p className="hero-sub">{page.heroDesc}</p>
            <div className="ph-hero-meta">
              {page.heroMeta.map((m) => (
                <div key={m.label} className="ph-hero-meta-item">
                  <div className="ph-hero-meta-val">{m.val}</div>
                  <div className="ph-hero-meta-lbl">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="ph-hero-actions hero-actions">
              <Btn variant="gold" onClick={onQuote}>
                Request a Quote →
              </Btn>
              <Btn
                variant="ghost"
                onClick={() =>
                  document.getElementById("instruments")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                Meet machines ↓
              </Btn>
            </div>
          </div>
        </div>
      </section>

      <PharmaClientsRibbon />

      <div id="instruments" className="ph-page-machines">
        <PharmaProductMachinesGrid mode="industry" onProductNav={onProductNav} />
      </div>

      <section className="ph-shell ph-app-sec">
        <div className="ph-sec-eyebrow">Applications</div>
        <h2 className="ph-sec-title">
          Where our instruments
          <br />
          <em>add critical value</em>
        </h2>
        <div className="ph-app-grid">
          {page.applications.map((app) => (
            <article key={app.title} className="ph-app-card">
              <div className="ph-app-img">{app.icon}</div>
              <div className="ph-app-body">
                <h3>{app.title}</h3>
                <p>{app.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ph-shell ph-testimonials-sec">
        <div className="ph-sec-eyebrow">Client results</div>
        <h2 className="ph-sec-title">
          What pharma manufacturers
          <br />
          <em>say about M19</em>
        </h2>
        <div className="ph-test-grid">
          {page.testimonials.map((t) => (
            <article key={t.initials} className="ph-test-card">
              <div className="ph-test-stars">★★★★★</div>
              <blockquote>{t.quote}</blockquote>
              <div className="ph-test-meta">
                <div className="ph-test-av">{t.initials}</div>
                <div>
                  <div className="ph-test-name">{t.name}</div>
                  <div className="ph-test-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ph-compliance ph-compliance--compact">
        <div className="ph-shell ph-compliance-inner">
          <p className="ph-compliance-title">{page.compliance.heading}</p>
          <p className="ph-compliance-tagline">{page.compliance.tagline}</p>
        </div>
      </section>

      <section className="ph-shell ph-faq-block" id="faqs">
        <header className="ph-section-head ph-section-head--center">
          <div className="ph-sec-eyebrow">FAQs</div>
          <h2 className="ph-sec-title">Frequently asked questions</h2>
          <p className="ph-section-lead">Everything you need to know about M19 pharmaceutical testing instruments.</p>
        </header>
        <FaqAccordion items={PHARMA_INDUSTRY_FAQS} variant="pharma" />
      </section>

      <section className="ph-cta">
        <div className="ph-shell ph-cta-inner">
          <div className="ph-cta-copy">
            <h2>
              Ready to elevate
              <br />
              your <em>pharma lab?</em>
            </h2>
            <p>{page.cta.body}</p>
          </div>
          <div className="ph-cta-actions">
            <Btn variant="gold" size="lg" onClick={onQuote}>
              Request a Quote →
            </Btn>
            {brochureUrl ? (
              <a className="ph-cta-link" href={brochureUrl} target="_blank" rel="noopener noreferrer">
                Download brochure
              </a>
            ) : (
              <button type="button" className="ph-cta-link" onClick={onQuote}>
                Download brochure
              </button>
            )}
            <a className="ph-cta-link" href={labTestUrl("closing")} target="_blank" rel="noopener noreferrer">
              Book a lab test
            </a>
          </div>
        </div>
      </section>

      <footer className="ph-closing">
        <p className="ph-closing-text">Smart materials · smarter world</p>
      </footer>
    </div>
  );
}
