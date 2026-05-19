import { useMemo } from "react";
import { Eyebrow } from "../ui/primitives.jsx";

const PARTNER_LOGO_COUNT = 30;

export function PartnersSection(){
  const logos = useMemo(
    () =>
      Array.from({ length: PARTNER_LOGO_COUNT }, (_, i) => ({
        src: `/patners/${i + 1}.png`,
        alt: `Partner logo ${i + 1}`,
      })),
    [],
  );
  const track = [...logos, ...logos];
  return(
    <section className="partners-section" aria-labelledby="partners-heading">
      <div className="partners-section-inner">
        <div className="partners-section-head">
          <Eyebrow>Our network</Eyebrow>
          <h2 id="partners-heading" className="section-h2">Our <em>Partners</em></h2>
          <p className="section-body">
            Material Intelligence Lab is at the forefront of cutting-edge materials research, leveraging
            data-driven insights to drive innovation and transformation across industries.
          </p>
        </div>
        <div className="partners-marquee-wrap">
          <div className="partners-marquee-viewport">
            <div className="partners-marquee-track">
              {track.map((logo, idx) => (
                <div key={`${logo.src}-${idx}`} className="partners-marquee-item">
                  <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
