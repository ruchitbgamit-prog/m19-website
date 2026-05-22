/** Shared FAQs for pharma industry page and FIA/LPA product pages. */

export const PHARMA_INDUSTRY_FAQS = [
  {
    q: "Which instruments does M19 offer for pharmaceutical manufacturing?",
    a: "For pharma we focus on two core systems: FIA (Filter Integrity Analyzer) for sterile-filter validation and LPA (Liquid Permeability Analyzer) for bioprocess membrane characterisation.",
  },
  {
    q: "Are M19 instruments compliant with FDA and EU GMP?",
    a: "Yes. Both support 21 CFR Part 11–style data integrity — electronic signatures, access control, and tamper-proof audit trails. DQ/IQ/OQ documentation is available for regulatory audits.",
  },
  {
    q: "Can we get installation and IQ/OQ support in India?",
    a: "Yes. M19 provides on-site installation, operator training, and validation documentation with domestic service response for spare parts and calibration.",
  },
  {
    q: "How quickly can we receive a quote?",
    a: "Quotes and configuration recommendations are typically provided within 24 business hours via the Request a Quote form or info@m19.io.",
  },
];

export const PHARMA_PRODUCT_FAQS = {
  FIA: [
    {
      q: "What test types does FIA support?",
      a: "Bubble point (BP), forward flow / diffusion flow (FF/DF), water intrusion test (WIT), and pressure decay — aligned with common sterile filtration validation packages.",
    },
    {
      q: "Is FIA suitable for PUPSIT workflows?",
      a: "Yes. Sequences can be configured for pre-use post-sterilisation integrity testing with audit-ready data capture.",
    },
    {
      q: "How does FIA compare to imported integrity testers?",
      a: "MFC-based measurement, faster cycles, 21 CFR Part 11–style records, and domestic support — typically lower total cost of ownership than comparable imported systems.",
    },
    {
      q: "What connectivity options are available?",
      a: "USB, Ethernet, and options for integration with LIMS and validated data workflows.",
    },
  ],
  LPA: [
    {
      q: "What membrane formats can LPA test?",
      a: "Cross-flow, microfiltration, ultrafiltration, nanofiltration, and depth-filter media used in pharmaceutical and bioprocessing applications.",
    },
    {
      q: "What is clean-water permeability (CWP)?",
      a: "A baseline permeability measurement used for incoming QC, post-cleaning validation, and comparing membrane lots before process fluids are introduced.",
    },
    {
      q: "Can LPA support scale-up from R&D to pilot?",
      a: "Yes. Coupon-scale data helps predict pilot and production performance and reduces surprises when scaling TFF or UF steps.",
    },
    {
      q: "What reporting is included?",
      a: "Validated PDF/CSV outputs suitable for QA review and inclusion in batch or validation documentation.",
    },
  ],
};
