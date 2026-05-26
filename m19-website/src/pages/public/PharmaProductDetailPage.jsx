import { useEffect } from "react";
import { industryHref } from "../../config/site.js";
import { PHARMA_CLIENTS } from "../../data/pharmaIndustryContent.js";
import { MACHINE_IMAGE_MAP } from "../../data/products.js";
import { PharmaProductMachinesGrid } from "../../components/public/PharmaProductMachinesGrid.jsx";
import { FaqAccordion } from "../../components/public/FaqAccordion.jsx";
import { Btn } from "../../components/ui/primitives.jsx";
import "../../styles/instrumentProduct.css";

function ProductDetailSection({ section }) {
  return (
    <div className="ip-pp-block" id={`section-${section.id}`}>
      <h4>{section.title}</h4>
      {section.tagline ? <p className="ip-pp-sec-tagline">{section.tagline}</p> : null}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="ip-pp-prose">
          {p}
        </p>
      ))}
      {section.items?.length > 0 && (
        <div className="ip-pp-app-chips">
          {section.items.map((item) => (
            <span key={item} className="ip-pp-app-chip">
              {item}
            </span>
          ))}
        </div>
      )}
      {section.highlights?.length > 0 && (
        <ul className="ip-pp-highlight-list">
          {section.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
      {section.note ? <p className="ip-pp-sec-note">{section.note}</p> : null}
      {section.bullets?.length > 0 && (
        <ul className="ip-pp-bullet-list">
          {section.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function LegacyProductSections({ P }) {
  return (
    <>
      <div className="ip-pp-block">
        <h4>Technology</h4>
        <div className="ip-pp-feat-list">
          {P.tech.map((item) => (
            <div key={item.title} className="ip-pp-feat-item">
              <span className="ip-pp-feat-ic">{item.ic}</span>
              <p className="ip-pp-feat-txt">
                <strong>{item.title}</strong> — {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="ip-pp-block">
        <h4>Key Capabilities</h4>
        <div className="ip-pp-feat-list">
          {P.features.map((item) => (
            <div key={item.title} className="ip-pp-feat-item">
              <span className="ip-pp-feat-ic">{item.ic}</span>
              <p className="ip-pp-feat-txt">
                <strong>{item.title}</strong> — {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="ip-pp-block">
        <h4>Applications</h4>
        <div className="ip-pp-feat-list">
          {P.apps.map((app) => (
            <div key={app} className="ip-pp-feat-item">
              <span className="ip-pp-feat-ic">✦</span>
              <p className="ip-pp-feat-txt">
                <strong>{app}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/** Shared product detail layout — block grid on top, pp-layout content below (m19lab-pharma-v5). */
export function PharmaProductDetailPage({
  content: P,
  product,
  activeModel,
  activeBlockId,
  onQuote,
  onRegister,
  onProductNav,
}) {
  const img = MACHINE_IMAGE_MAP[product.model];

  useEffect(() => {
    document.title = P.seo.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", P.seo.description);
    return () => {
      document.title = "M19 · Material Intelligence";
    };
  }, [P.seo.description, P.seo.title]);

  return (
    <div className={`ip-page ip-page--pharma ip-page--${activeModel.toLowerCase()}`}>
      <PharmaProductMachinesGrid
        mode="product"
        activeModel={activeModel}
        activeBlockId={activeBlockId}
        onProductNav={onProductNav}
      />

      <div className="ip-pp-wrap" id="product-detail">
        <div className="ip-shell">
          <nav className="ip-pp-nav">
            <a href={industryHref("Pharma")} className="ip-back ip-back--link">
              ← Back to Pharmaceuticals
            </a>
            <span className="ip-pp-tag">{P.tag}</span>
          </nav>

          <div className="ip-pp-layout">
            <div className="ip-pp-left">
              <div className="ip-pp-eyebrow">{P.eyebrow}</div>
              <h1 className="ip-pp-title">
                {P.title[0]}
                <br />
                {P.title[1]}
              </h1>
              <p className="ip-pp-subtitle">{P.subtitle}</p>

              <div className="ip-pp-badges">
                {P.badges.map((b) => (
                  <span key={b} className="ip-pp-badge">
                    {b}
                  </span>
                ))}
              </div>

              <div className="ip-pp-specs">
                {P.specs.rows.map((row) => (
                  <div key={row.l} className="ip-pp-spec-item">
                    <div className="ip-pp-spec-lbl">{row.l}</div>
                    <div className="ip-pp-spec-val">{row.v}</div>
                  </div>
                ))}
              </div>

              <div className="ip-pp-clients">
                <div className="ip-pp-clients-label">Trusted by leading pharmaceutical manufacturers</div>
                <div className="ip-pp-clients-row">
                  {P.clients.map((name) => {
                    const client = PHARMA_CLIENTS.find((c) => c.name === name);
                    return (
                      <span key={name} className="ip-pp-client">
                        {client?.logo ? (
                          <img src={client.logo} alt={name} className="ip-pp-client-logo" />
                        ) : (
                          name
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>

              {P.sections ? (
                P.sections.map((section) => <ProductDetailSection key={section.id} section={section} />)
              ) : (
                <LegacyProductSections P={P} />
              )}

              <div className="ip-pp-block">
                <h4>Client Results</h4>
                <div className="ip-pp-test-grid">
                  {P.testimonials.map((t) => (
                    <div key={t.initials} className="ip-pp-test-card">
                      <div className="ip-pp-stars">★★★★★</div>
                      <blockquote>{t.quote}</blockquote>
                      <div className="ip-pp-test-meta">
                        <div className="ip-pp-test-av">{t.initials}</div>
                        <div>
                          <div className="ip-pp-test-name">{t.name}</div>
                          <div className="ip-pp-test-role">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ip-pp-actions">
                <Btn variant="gold" size="lg" onClick={onQuote}>
                  {P.demoCtaLabel}
                </Btn>
                <Btn variant="ghost" size="lg" onClick={onQuote}>
                  Download Brochure
                </Btn>
              </div>

              <div className="ip-pp-faq">
                <h3>Product FAQs</h3>
                <FaqAccordion items={P.faq} variant="product" />
              </div>
            </div>

            <aside className="ip-pp-right">
              <div className="ip-pp-visual">
                {img ? (
                  <img src={img} alt={product.name} loading="eager" />
                ) : (
                  <span className="ip-pp-visual-emoji">{product.icon || "🔬"}</span>
                )}
                <div className="ip-pp-visual-lbl">{P.modelLabel}</div>
              </div>
              <Btn variant="gold" size="lg" style={{ width: "100%", marginTop: 8 }} onClick={onQuote}>
                Get Your Quote Today →
              </Btn>
            </aside>
          </div>
        </div>
      </div>

      <section className="ip-bottom-cta">
        <div className="ip-shell ip-bottom-cta-inner">
          <div>
            <h2>{P.bottomCta.title}</h2>
            <p>{P.bottomCta.lead}</p>
          </div>
          <div className="ip-bottom-ctas">
            <Btn variant="gold" size="lg" onClick={onQuote}>
              Request quotation
            </Btn>
            <Btn variant="ghost" size="lg" onClick={onRegister}>
              Create account
            </Btn>
          </div>
        </div>
      </section>
    </div>
  );
}
