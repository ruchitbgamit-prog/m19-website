import { PHARMA_CLIENTS } from "../../data/pharmaIndustryContent.js";

const DEFAULT_HEADING = "Trusted by Leading Pharmaceutical Manufacturers";

export function PharmaClientsRibbon({ heading = DEFAULT_HEADING }) {
  const track = [...PHARMA_CLIENTS, ...PHARMA_CLIENTS];

  return (
    <section className="ph-trusted" aria-labelledby="pharma-trusted-heading">
      <div className="ph-shell ph-trusted-head">
        <h2 id="pharma-trusted-heading" className="ph-trusted-title">
          {heading}
        </h2>
      </div>

      <div className="ph-clients-ribbon-wrap" aria-label="Partner logos">
        <div className="ph-clients-ribbon-viewport">
          <div className="ph-clients-ribbon-track">
            {track.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="ph-clients-ribbon-item"
                title={client.name}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fb = e.currentTarget.parentElement.querySelector(".ph-client-fallback");
                    if (fb) fb.hidden = false;
                  }}
                />
                <span className="ph-client-fallback" hidden>
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
