/** Block-grid cards for pharma product pages (reference: m19lab-pharma-v5 prod-grid). */

export const PHARMA_PRODUCT_BLOCKS = [
  {
    id: "fia",
    model: "FIA",
    index: "01 / 03",
    std: "ASTM F316",
    name: "Filter Integrity Analyzer",
    desc: "Verifies filter effectiveness — bubble point, forward flow, and water intrusion. 5× faster with 21 CFR Part 11 compliance.",
    specsMini: ["Model: FIA-100", "MFC Technology", "21 CFR Part 11", "2-Year Warranty"],
    imageModel: "FIA",
  },
  {
    id: "lpa",
    model: "LPA",
    index: "02 / 03",
    std: "ISO 7231:2023",
    name: "Liquid Permeability Analyzer",
    desc: "Measures liquid flow through filter membranes under controlled pressure — MF, UF, NF, and bioprocess QA/QC.",
    specsMini: ["Model: LP-100", "MF · UF · NF", "Controlled pressure"],
    imageModel: "LPA",
  },
  {
    id: "fia-line",
    model: "FIA",
    index: "03 / 03",
    std: "USP <1207> · PUPSIT",
    name: "Filter Integrity · Production",
    desc: "Same FIA-100 platform configured for aseptic fill-finish and pre-use post-sterilisation integrity programs.",
    specsMini: ["PUPSIT-ready", "Audit trail", "LAN · USB"],
    imageModel: "FIA",
    scrollToDetail: true,
  },
];
