import { PHARMA_PAGE } from "../../data/pharmaIndustryContent.js";

export function PharmaTestimonialsCarousel() {
  const items = PHARMA_PAGE.testimonials;
  const track = [...items, ...items];

  return (
    <section className="ph-testimonials-sec" aria-labelledby="pharma-testimonials-heading">
      <div className="ph-shell">
        <div className="ph-sec-eyebrow">Client results</div>
        <h2 id="pharma-testimonials-heading" className="ph-sec-title">
          What pharma manufacturers
          <br />
          <em>say about M19</em>
        </h2>
      </div>
      <div className="ph-test-marquee-wrap" aria-label="Client testimonials">
        <div className="ph-test-marquee-viewport">
          <div className="ph-test-marquee-track">
            {track.map((t, idx) => (
              <article key={`${t.initials}-${idx}`} className="ph-test-card">
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
        </div>
      </div>
    </section>
  );
}
