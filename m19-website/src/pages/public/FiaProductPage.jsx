import { useEffect, useState } from "react";
import { PHARMA_CLIENTS } from "../../data/pharmaIndustryContent.js";
import { FIA_PAGE } from "../../data/fiaProductContent.js";
import { FaqAccordion } from "../../components/public/FaqAccordion.jsx";
import { Btn } from "../../components/ui/primitives.jsx";
import "../../styles/fiaProduct.css";

function FiaAfterSalesAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="fia-acc">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className={`fia-acc-item${isOpen ? " fia-acc-item--open" : ""}`}>
            <button
              type="button"
              className="fia-acc-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {item.title}
            </button>
            {isOpen ? <div className="fia-acc-body">{item.body}</div> : null}
          </div>
        );
      })}
    </div>
  );
}

export function FiaProductPage({ onQuote, onRegister }) {
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
      <header className="fia-hero" style={{ "--fia-hero-bg": `url(${M.heroBg})` }}>
        <div className="fia-hero-overlay" aria-hidden />
        <div className="fia-shell fia-hero-grid">
          <div className="fia-hero-copy">
            <span className="fia-hero-eyebrow">{P.eyebrow}</span>
            <h1 className="fia-hero-title">{M.heroTitle}</h1>
            <p className="fia-hero-tagline">{M.tagline}</p>
            <ul className="fia-hero-bullets">
              {M.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="fia-hero-cert-lbl">{M.certLabel}</p>
            <div className="fia-hero-certs">
              {M.certifications.map((c) => (
                <span key={c} className="fia-hero-cert">
                  {c}
                </span>
              ))}
            </div>
            <button type="button" className="fia-btn fia-btn--primary" onClick={onQuote}>
              {M.demoCtaLabel}
            </button>
          </div>
          <div className="fia-hero-visual">
            <img src={M.productImage} alt="M19 FIA-100 Filter Integrity Analyzer" loading="eager" />
          </div>
        </div>
      </header>

      <section className="fia-stats" aria-label="Company highlights">
        <div className="fia-shell fia-stats-grid">
          {M.statsStrip.map((s) => (
            <article key={s.label} className={`fia-stat-card fia-stat-card--${s.variant}`}>
              <span className="fia-stat-icon" aria-hidden>
                {s.icon}
              </span>
              <div className="fia-stat-val">{s.value}</div>
              <div className="fia-stat-lbl">{s.label}</div>
              <p className="fia-stat-body">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <main className="fia-body">
        <section id="fia-why" className="fia-sec fia-sec--experience">
          <div className="fia-shell">
            <p className="fia-sec-eyebrow">{P.experience.eyebrow}</p>
            <p className="fia-sec-lead">{P.experience.lead}</p>
            <div className="fia-exp-grid">
              {P.experience.cards.map((card) => (
                <article key={card.id} className="fia-exp-card">
                  <div className="fia-exp-card-img">
                    <img src={card.image} alt="" loading="lazy" />
                  </div>
                  <h3 className="fia-exp-card-title">{card.title}</h3>
                  <ul className="fia-exp-list">
                    {card.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {card.tests ? (
                    <>
                      <h4 className="fia-exp-tests-lbl">{card.testsLabel}</h4>
                      <ul className="fia-exp-tests">
                        {card.tests.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </article>
              ))}
            </div>
            <div className="fia-sec-cta-row">
              <button type="button" className="fia-btn fia-btn--primary" onClick={onQuote}>
                {M.demoCtaLabel}
              </button>
            </div>
          </div>
        </section>

        <section className="fia-sec fia-sec--apart">
          <div className="fia-shell">
            <h2 className="fia-sec-title">{P.differentiators.title}</h2>
            <div className="fia-apart-grid">
              {P.differentiators.items.map((item) => (
                <article key={item.title} className="fia-apart-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <div className="fia-sec-cta-row">
              <button type="button" className="fia-btn fia-btn--primary" onClick={onQuote}>
                Get a free demo
              </button>
            </div>
          </div>
        </section>

        <section id="fia-testimonials" className="fia-sec fia-sec--testimonials">
          <div className="fia-shell">
            <h2 className="fia-sec-title">Testimonials</h2>
            <div className="fia-test-grid">
              {P.testimonials.map((t) => (
                <blockquote key={t.company} className="fia-test-card">
                  <div className="fia-test-logo">
                    {t.logo ? (
                      <img src={t.logo} alt={t.company} loading="lazy" />
                    ) : (
                      <span>{t.company}</span>
                    )}
                  </div>
                  <p>{t.quote}</p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="fia-sec fia-sec--support">
          <div className="fia-shell fia-support-grid">
            <div className="fia-support-copy">
              <h2 className="fia-sec-title">{P.afterSales.title}</h2>
              <p className="fia-sec-lead">{P.afterSales.lead}</p>
              <FiaAfterSalesAccordion items={P.afterSales.items} />
            </div>
            <div className="fia-support-visual">
              <img src={P.afterSales.image} alt="M19 support and validation team" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="fia-partners" className="fia-sec fia-sec--partners">
          <div className="fia-shell fia-partners-head">
            <h2 className="fia-sec-title">{P.partners.title}</h2>
            <p className="fia-sec-lead">{P.partners.lead}</p>
          </div>
          <div className="fia-partners-logos" aria-label="Partner logos">
            {P.partners.clients.map((name) => {
              const client = PHARMA_CLIENTS.find((c) => c.name === name);
              return (
                <div key={name} className="fia-partner-logo">
                  {client?.logo ? <img src={client.logo} alt={name} loading="lazy" /> : <span>{name}</span>}
                </div>
              );
            })}
          </div>
        </section>

        <section className="fia-sec fia-sec--expo">
          <div className="fia-shell">
            <h2 className="fia-sec-title">{P.expo.title}</h2>
            <div className="fia-expo-grid">
              {P.expo.images.map((img) => (
                <figure key={img.src} className="fia-expo-item">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </figure>
              ))}
            </div>
            <div className="fia-sec-cta-row">
              <button type="button" className="fia-btn fia-btn--primary" onClick={onQuote}>
                Talk to our experts
              </button>
            </div>
          </div>
        </section>

        <section id="fia-contact" className="fia-contact">
          <div className="fia-contact-bg" aria-hidden />
          <div className="fia-shell fia-contact-grid">
            <div className="fia-contact-pitch">
              <h2>{P.bottomCta.title}</h2>
              <p>{P.bottomCta.lead}</p>
            </div>
            <div className="fia-contact-card">
              <h3>{P.bottomCta.formTitle}</h3>
              <p className="fia-contact-card-sub">{P.bottomCta.formSubtitle}</p>
              <p className="fia-contact-card-note">{P.bottomCta.formNote}</p>
              <div className="fia-spec-mini">
                {P.specs.rows.slice(0, 4).map((row) => (
                  <div key={row.l} className="fia-spec-mini-row">
                    <span>{row.l}</span>
                    <strong>{row.v}</strong>
                  </div>
                ))}
              </div>
              <button type="button" className="fia-btn fia-btn--primary fia-btn--block" onClick={onQuote}>
                {P.bottomCta.quoteLabel}
              </button>
              <Btn variant="ghost" style={{ width: "100%", marginTop: 10 }} onClick={onRegister}>
                Create account
              </Btn>
            </div>
          </div>
        </section>

        <section className="fia-sec fia-sec--faq">
          <div className="fia-shell">
            <h2 className="fia-sec-title">Product FAQs</h2>
            <FaqAccordion items={P.faq} variant="product" />
          </div>
        </section>
      </main>
    </div>
  );
}
