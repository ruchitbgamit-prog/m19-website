/** Pharma industry landing — FIA + LPA, content aligned with m19lab-pharma-v5. */
export const PHARMA_CLIENTS = [
  { name: "Sun Pharma", logo: "/pharma/clients/sun-pharma.svg" },
  { name: "Cipla", logo: "/pharma/clients/cipla.svg" },
  { name: "Zydus", logo: "/pharma/clients/zydus.svg" },
  { name: "Reliance", logo: "/pharma/clients/reliance.svg" },
  { name: "Gennova", logo: "/pharma/clients/gennova.svg" },
  { name: "Zeiss Pharmaceuticals", logo: "/pharma/clients/zeiss.svg" },
  { name: "Suyash", logo: "/pharma/clients/suyash.svg" },
];

export const PHARMA_PAGE = {
  tag: "Industry · Pharmaceuticals",
  heroImage: "/pharma/fia-hero-lab.png",
  heroImageAlt: "M19 Filter Integrity Analyzer (FIA-100) in a pharmaceutical laboratory",
  heroTitle: ["Pharma", "testing", "solutions."],
  heroDesc:
    "At M19 Lab, we assist pharmaceutical manufacturers in ensuring high-quality products with advanced testing instruments — addressing regulatory compliance, sterile filtration validation, and bioprocess membrane characterisation from R&D through commercial release.",
  heroMeta: [
    { val: "2", label: "Core Instruments" },
    { val: "GMP", label: "Guideline Ready" },
    { val: "ISO", label: "Certified Standards" },
    { val: "24h", label: "Quote Turnaround" },
  ],
  applications: [
    {
      icon: "🏭",
      title: "Sterile filtration validation",
      body: "Bubble point, forward flow, and WIT testing for cartridge, capsule, and syringe filters on aseptic filling lines.",
    },
    {
      icon: "🔩",
      title: "Bioprocess membranes",
      body: "Liquid permeability and fouling analysis for TFF, UF, MF, and depth-filter media from R&D through commercial release.",
    },
    {
      icon: "💉",
      title: "PUPSIT & batch release",
      body: "Pre-use post-sterilisation integrity workflows with audit-ready records aligned to USP <1207> and Annex 1 expectations.",
    },
  ],
  testimonials: [
    {
      quote:
        "The FIA-100 transformed our sterile filtration validation process. What used to take days now takes minutes — and every report is audit-ready for FDA submissions.",
      initials: "RK",
      name: "R. Kumar",
      role: "QA Manager, Injectable Formulations",
    },
    {
      quote:
        "The LP-100 gives us the membrane characterization data we need before scaling to full production. No surprises at scale.",
      initials: "PV",
      name: "P. Verma",
      role: "Process Engineer, Bioprocessing",
    },
    {
      quote:
        "M19's team configured instruments to our exact GMP requirements. Installation, IQ/OQ documentation — handled professionally. Domestic support means zero downtime.",
      initials: "AM",
      name: "A. Mehta",
      role: "Plant Director, Solid Dosage",
    },
  ],
  whatWeDo:
    "M19 supports pharmaceutical manufacturers and CDMOs with validated lab instruments for sterile-filter integrity testing and bioprocess membrane characterisation — across injectables, biologics, vaccines, and aseptic fill-finish.",
  rdSolutions:
    "From development through commercial release, FIA and LPA deliver the integrity and permeability data your validation, QC, and regulatory teams need — with audit-ready records and domestic installation support.",
  standards: [
    "USP <1207>",
    "USP <788>",
    "ASTM F316",
    "PDA TR 26",
    "ISO 11058",
    "21 CFR Part 11",
    "EP 2.6.1",
    "ICH Q10",
  ],
  compliance: {
    heading: "Built for regulated environments.",
    tagline: "Audit-ready records · electronic signatures · validated workflows.",
  },
  products: [
    {
      model: "FIA",
      name: "Filter Integrity Analyzer",
      tagline: "Sterile filtration integrity",
      hoverPoints: [
        "Bubble point · diffusion · pressure hold",
        "21 CFR Part 11 · USP <1207>",
        "PUPSIT-ready · 5× faster testing",
      ],
    },
    {
      model: "LPA",
      name: "Liquid Permeability Analyzer",
      tagline: "Bioprocess membrane testing",
      hoverPoints: [
        "TFF · UF · MF · depth filters",
        "Clean-water permeability (CWP)",
        "0–10 bar · audit-ready reports",
      ],
    },
  ],
  cta: {
    title: ["Ready to qualify your", "next filter or membrane?"],
    titleAccent: 1,
    body: "Speak with a pharmaceutical testing specialist. Configuration guidance, IQ/OQ support, and a quote within one business day.",
  },
  seo: {
    title: "Pharma Filtration & Membrane Testing — FIA & LPA | M19",
    description:
      "FIA sterile-filter integrity and LPA liquid permeability for pharma and biologics — USP <1207>, 21 CFR Part 11, GMP-ready.",
  },
};
