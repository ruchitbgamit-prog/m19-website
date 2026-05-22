import { useState } from "react";

/**
 * @param {{ items: { q: string, a: string }[], className?: string, variant?: "pharma" | "product" }} props
 */
export function FaqAccordion({ items, className = "", variant = "pharma" }) {
  const [open, setOpen] = useState(0);
  const base = variant === "pharma" ? "ph-faq" : "prod-faq";

  return (
    <div className={`${base}-list ${className}`.trim()}>
      {items.map((f, idx) => (
        <div key={f.q} className={`${base}-item${open === idx ? " is-open" : ""}`}>
          <button
            type="button"
            className={`${base}-q`}
            onClick={() => setOpen((prev) => (prev === idx ? -1 : idx))}
            aria-expanded={open === idx}
          >
            <span>{f.q}</span>
            <span className={`${base}-icon`} aria-hidden>
              +
            </span>
          </button>
          <div className={`${base}-a`}>
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
