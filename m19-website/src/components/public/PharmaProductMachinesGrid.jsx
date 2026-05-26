import { PHARMA_INDUSTRY_MACHINE_BLOCKS, PHARMA_PRODUCT_BLOCKS } from "../../data/pharmaProductBlocks.js";
import { MACHINE_IMAGE_MAP } from "../../data/products.js";
import { productPathFromModel } from "../../data/productPaths.js";

export function PharmaProductMachinesGrid({
  mode = "product",
  activeModel = "FIA",
  activeBlockId = "fia",
  onProductNav,
  note,
}) {
  const industryNote =
    "Click any instrument to explore full specs, technology, and request a quote.";
  const productNote =
    "Click a block to switch product · active instrument highlighted below";
  const blocks = mode === "industry" ? PHARMA_INDUSTRY_MACHINE_BLOCKS : PHARMA_PRODUCT_BLOCKS;

  const go = (block) => {
    if (mode === "industry") {
      if (onProductNav) onProductNav(block.model);
      else window.location.assign(productPathFromModel(block.model));
      return;
    }
    if (block.scrollToDetail && block.model === activeModel) {
      document.getElementById("product-detail")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (block.id === activeBlockId) return;
    if (onProductNav) onProductNav(block.model);
    else window.location.assign(productPathFromModel(block.model));
  };

  return (
    <section
      className={`ip-machines-sec${mode === "industry" ? " ip-machines-sec--industry ip-machines-sec--pharma-two" : ""}`}
    >
      <div className="ip-shell">
        <div className="ip-machines-head">
          <div>
            <div className="ip-machines-eyebrow">Our instruments</div>
            <h2 className="ip-machines-title">
              AI-based · ultra-high precision
              <br />
              <span>industry specific</span>
            </h2>
          </div>
          <p className="ip-machines-note">{note ?? (mode === "industry" ? industryNote : productNote)}</p>
        </div>
        <div className="ip-machines-grid">
          {blocks.map((block) => {
            const img = MACHINE_IMAGE_MAP[block.imageModel];
            const isActive = mode === "product" && block.id === activeBlockId;

            return (
              <button
                key={block.id}
                type="button"
                className={`ip-machine-card ip-machine-card--modern${isActive ? " ip-machine-card--active" : ""}`}
                onClick={() => go(block)}
                aria-current={isActive ? "true" : undefined}
              >
                <div className="ip-machine-card-top">
                  <div className="ip-machine-idx">{block.index}</div>
                  <span className="ip-machine-model-pill">{block.model}</span>
                </div>
                <div className="ip-machine-visual">
                  {img ? (
                    <img src={img} alt="" loading="lazy" decoding="async" />
                  ) : (
                    <span className="ip-machine-fallback">{block.model}</span>
                  )}
                </div>
                <div className="ip-machine-std">{block.std}</div>
                <h3 className="ip-machine-name">{block.name}</h3>
                <p className="ip-machine-desc">{block.desc}</p>
                <div className="ip-machine-specs-mini">
                  {block.specsMini.map((s) => (
                    <span key={s} className="ip-spec-mini">
                      {s}
                    </span>
                  ))}
                </div>
                <span className="ip-machine-link">
                  {isActive ? "Viewing details below" : "View full details"} <span>→</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
