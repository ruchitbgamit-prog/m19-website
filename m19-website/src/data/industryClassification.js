// Developer mode only: industry → instruments mapping (derived from M19_Industry_Based_classification/Sheet1.html)
// We intentionally map ONLY the 14 instruments currently shown in the Developer Instruments grid.

// Industry accent colors (from brand guideline “INDUSTRY COLORS”)
function clamp01(n){ return Math.max(0, Math.min(1, n)); }
function hexToRgb(hex){
  const h = (hex || "").replace("#","").trim();
  if(h.length !== 6) return null;
  const n = parseInt(h, 16);
  return { r:(n>>16)&255, g:(n>>8)&255, b:n&255 };
}
function srgbToLin(c){
  const v = c / 255;
  return v <= 0.04045 ? v/12.92 : ((v+0.055)/1.055) ** 2.4;
}
function relLuma({r,g,b}){
  const R=srgbToLin(r), G=srgbToLin(g), B=srgbToLin(b);
  return 0.2126*R + 0.7152*G + 0.0722*B;
}
function mixWithWhite(hex, t){
  const rgb = hexToRgb(hex);
  if(!rgb) return hex;
  const k = clamp01(t);
  const r = Math.round(rgb.r + (255 - rgb.r) * k);
  const g = Math.round(rgb.g + (255 - rgb.g) * k);
  const b = Math.round(rgb.b + (255 - rgb.b) * k);
  return `rgb(${r} ${g} ${b})`;
}
function makeGlow(hex){
  const rgb = hexToRgb(hex);
  if(!rgb) return hex;
  const L = relLuma(rgb);
  // Dark accents get a stronger lift so hover never feels dull.
  const t = L < 0.35 ? 0.55 : L < 0.5 ? 0.40 : 0.22;
  return mixWithWhite(hex, t);
}

export const INDUSTRY_META = {
  All: { label: "All", color: "#000000" },
  Defense: { label: "Defense", color: "#5B7742", glow: makeGlow("#5B7742") },
  Space: { label: "Space research", color: "#8784DB", glow: makeGlow("#8784DB") },
  "Oil & Gas": { label: "Oil & gas", color: "#EB5E00", glow: makeGlow("#EB5E00") },
  "Air filtration": { label: "Air filtration", color: "#707070", glow: makeGlow("#707070") },
  "Water purification": { label: "Water filtration", color: "#00C7C8", glow: makeGlow("#00C7C8") },
  Pharma: { label: "Pharma", color: "#FF0099", glow: makeGlow("#FF0099") },
  "Technical textile": { label: "Technical textile", color: "#EE779D", glow: makeGlow("#EE779D") },
  Energy: { label: "Energy", color: "#3EA055", glow: makeGlow("#3EA055") },
  Chemical: { label: "Chemical", color: "#B156D6", glow: makeGlow("#B156D6") },
  Packaging: { label: "Packaging", color: "#CB8962", glow: makeGlow("#CB8962") },
  "Personal hygiene": { label: "Personal hygiene", color: "#F97272", glow: makeGlow("#F97272") },
  Biotech: { label: "Biotech", color: "#105955", glow: makeGlow("#105955") },
};

export const INDUSTRIES = Object.keys(INDUSTRY_META);

// Models used in the grid (14):
// FIA, LPA, MPA, NPA, DPA, GPA, DA/PA, SAA, PFEA, HPA, WVTR, SBPA, BPT, HP500
export const INDUSTRY_TO_MODELS = {
  All: null,

  // New sheet update: Biotech (treated like Pharma filtration validation)
  Biotech: ["FIA", "LPA"],

  // Defense landing (brochure-aligned): micropore, nanopore, BET surface area, hydrostatic head, density/porosity
  Defense: ["MPA", "NPA", "SAA", "HPA", "DA/PA"],

  // From the sheet: Space (1)
  Space: ["DA/PA"],

  // From the sheet: Oil & Gas (8)
  "Oil & Gas": ["MPA", "NPA", "DPA", "GPA", "DA/PA", "SAA", "PFEA", "HPA"],

  // From the sheet: Air filteration (2)
  "Air filtration": ["MPA", "PFEA"],

  // From the sheet: Water Puriication (7)
  "Water purification": ["LPA", "MPA", "NPA", "DPA", "GPA", "DA/PA", "SAA"],

  // From the sheet: Pharma (2)
  Pharma: ["FIA", "LPA"],

  // From the sheet: Technical Textile (8)
  "Technical textile": ["MPA", "NPA", "DPA", "DA/PA", "SAA", "PFEA", "HPA", "SBPA"],

  // From the sheet: Energy (3)
  Energy: ["MPA", "NPA", "DA/PA"],

  // From the sheet: Chemical (3)
  Chemical: ["MPA", "DA/PA", "SAA"],

  // From the sheet: Packaging (2)
  Packaging: ["DA/PA", "HP500"],

  // From the sheet: Personal hygiene (3)
  "Personal hygiene": ["MPA", "DA/PA", "SAA"],

};

