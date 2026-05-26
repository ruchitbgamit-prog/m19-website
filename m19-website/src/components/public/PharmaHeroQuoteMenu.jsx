import { PHARMA_INDUSTRY_MACHINE_BLOCKS } from "../../data/pharmaProductBlocks.js";

export function PharmaHeroQuoteMenu({ onQuote }) {
  const machines = PHARMA_INDUSTRY_MACHINE_BLOCKS;

  const handleMachine = (block) => {
    onQuote?.(block);
  };

  return (
    <div className="ph-quote-menu">
      <button type="button" className="btn btn-gold ph-quote-menu-trigger" aria-haspopup="true">
        Request a Quote
        <span className="ph-quote-menu-arrow" aria-hidden>
          →
        </span>
      </button>
      <div className="ph-quote-menu-panel" role="menu" aria-label="Request a quote by instrument">
        <p className="ph-quote-menu-label">Pharma instruments</p>
        <ul className="ph-quote-menu-list">
          {machines.map((block) => (
            <li key={block.id}>
              <button
                type="button"
                className="ph-quote-menu-item"
                role="menuitem"
                onClick={() => handleMachine(block)}
              >
                <span className="ph-quote-menu-item-model">{block.model}</span>
                <span className="ph-quote-menu-item-name">{block.name}</span>
                <span className="ph-quote-menu-item-std">{block.std}</span>
              </button>
            </li>
          ))}
        </ul>
        <button type="button" className="ph-quote-menu-all" onClick={() => onQuote?.()}>
          General quote — all instruments
        </button>
      </div>
    </div>
  );
}
