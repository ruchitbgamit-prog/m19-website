import { PHARMA_PRODUCT_BLOCKS } from "../../data/pharmaProductBlocks.js";

export function PharmaHeroSmartCards({ onMeetMachines, onCardClick }) {
  const scrollToInstruments = () => {
    document.getElementById("instruments")?.scrollIntoView({ behavior: "smooth", block: "start" });
    onMeetMachines?.();
  };

  const handleCard = (block) => {
    if (onCardClick) onCardClick(block);
    else scrollToInstruments();
  };

  return (
    <div className="ph-hero-smart">
      <div className="ph-smart-card-grid">
        {PHARMA_PRODUCT_BLOCKS.map((block, i) => (
          <button
            key={block.id}
            type="button"
            className={`ph-smart-card ph-smart-card--${i + 1}`}
            onClick={() => handleCard(block)}
            aria-label={`${block.model} — ${block.name}. Scroll to instruments.`}
          >
            <span className="ph-smart-card-std">{block.std}</span>
            <span className="ph-smart-card-model">{block.model}</span>
            <span className="ph-smart-card-name">{block.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
