/** Marketing + technical copy for M19 Hydrogen Permeability Analyzer (model HP500 / HP-500 / HPA-500). */

const LIM = "10\u207b\u00b9\u2075"; // 10⁻¹��
const TORR6 = "10\u207b\u2076"; // 10⁻��

export const HP500_PAGE = {
  modelBadge: "HP-500 · HPA-500 · Hydrogen Permeability Platform",
  heroTitle: "THE WORLD'S MOST ADVANCED HYDROGEN PERMEABILITY ANALYZER",
  tagline: "FOR HYDROGEN BARRIER MATERIALS — ACCURATE, RELIABLE & ASTM-COMPLIANT",
  trustedCertLabel: "We are Trusted and Certified by:",
  demoCtaLabel: "GET A FREE DEMO",
  /**
   * Place the 3 reference PNGs into `public/assets/` with these names.
   * (They are the images you attached in chat.)
   */
  media: {
    hero: "/assets/hp500-marketing-hero.png",
    overview: "/assets/hp500-marketing-overview.png",
    specsStory: "/assets/hp500-marketing-specs-story.png",
  },
  trustedLead:
    "Trusted and certified for hydrogen barrier testing — from R&D method development to production-scale qualification.",
  bullets: [
    "Engineered in New York. Manufactured in India.",
    { text: "Made for ", strong: "Hydrogen Economy", suffix: " industries" },
    {
      text: "Ultra-sensitive detection up to ",
      strong: `${LIM} mol/m\u00b2\u00b7s\u00b7Pa`,
      suffix: " — test pressures to 700 bar",
    },
    {
      text: "AI-powered software delivers results ",
      strong: "40% faster",
      suffix: " with real-time cloud analytics",
    },
  ],
  certifications: ["ASTM D1434", "ISO 15105-1", "ANSI/CSA"],
  statsStrip: [
    { value: "700 bar", label: "Peak pressure capability" },
    { value: LIM, label: "mol/m\u00b2\u00b7s\u00b7Pa detection class" },
    { value: "3\u00d7", label: "Parallel samples" },
  ],
  cards: [
    {
      title: "HIGH-PRECISION M19 HYDROGEN PERMEABILITY ANALYZER",
      visualKind: "machine",
      visualPlaceholder: "HP-500 product image",
      bullets: [
        `Ultra-sensitive detection up to ${LIM} mol/m\u00b2\u00b7s\u00b7Pa`,
        "Test pressures up to 700 bar",
        "2-year extended warranty",
      ],
      sub: "COMPATIBLE WITH MULTIPLE TEST STANDARDS",
      standards: ["ISO 15105-1", "ASTM D1434", "CSA/ANSI CHMC1:2023", "CSA/ANSI CHMC2:2019"],
    },
    {
      title: "KEY FEATURES",
      visualKind: "placeholder",
      visualPlaceholder: "Software interface image",
      bullets: [
        `Ultra-sensitive detection up to ${LIM} mol/m\u00b2\u00b7s\u00b7Pa`,
        "Advanced coating evaluation — composite, metal, hybrid & polymeric",
        "AI-powered software with real-time monitoring & cloud integration",
        "Customizable pressure (35\u2013500 bar) & sample thickness up to 5 mm",
        `High-vacuum system (${TORR6} Torr class) for minimal background interference`,
        "Multi-sample capability — up to 3 samples simultaneously",
        "Compact & modular design for lab and industrial environments",
      ],
    },
    {
      title: "YOUR ASSURANCE MATTERS",
      visualKind: "placeholder",
      visualPlaceholder: "Lab / application image",
      bullets: [
        "40% faster testing vs. conventional methods",
        "Full ASTM, ISO & ANSI/CSA alignment for reporting",
        "Scalable & customizable for industrial or R&D requirements",
        "Real-time analysis & cloud integration with AI-driven analytics",
        "IQ/OQ documentation and M19 expert support for seamless validation",
        "2-year warranty with spare parts assurance",
      ],
    },
  ],
  overviewFigureCaption: "HP-500 at a glance — platform overview, software intelligence, and field assurance.",
  software: {
    eyebrow: "SOFTWARE & INTELLIGENCE",
    title: "AI-POWERED CONTROL, VISIBILITY & REPORTING",
    lead:
      "Purpose-built workflows for hydrogen permeation: fewer manual steps, clearer traceability, and report packages your quality and regulatory teams can stand behind.",
    bullets: [
      "Live run monitoring with guardrails, alarms, and session logs for audit-ready studies",
      "Method templates lock in repeatability across sites, shifts, and operators",
      "Automated curve analysis with exportable summaries aligned to common ASTM/ISO report expectations",
      "Optional cloud sync for distributed teams with role-based access and versioned outputs",
    ],
  },
  workflow: {
    eyebrow: "MEASUREMENT WORKFLOW",
    title: "FROM SAMPLE LOAD TO DEFENSIBLE RESULTS",
    steps: [
      {
        n: "01",
        title: "Prepare & mount",
        body: "Standardized fixtures for \u00d850 mm coupons; capture thickness, conditioning history, and full barrier stack metadata.",
      },
      {
        n: "02",
        title: "High-vacuum baseline",
        body: `Establish ultra-low background with ${TORR6} Torr\u2013class conditioning before controlled pressurization.`,
      },
      {
        n: "03",
        title: "Differential permeation",
        body: "Hydrogen pressure ramps with differential sensing for stable, low-noise permeation traces.",
      },
      {
        n: "04",
        title: "Analyze & release",
        body: "AI-assisted review, variance flags, and one-click report bundles for internal sign-off and customer submission.",
      },
    ],
  },
  materials: {
    eyebrow: "MATERIAL COVERAGE",
    title: "BUILT FOR COMPLEX BARRIERS — NOT JUST FLAT FILMS",
    body:
      "Characterize composite, metallic, hybrid, and polymeric hydrogen barriers — from dense alloys to engineered coatings and laminates — with workflows tuned for industrial qualification and exploratory R&D.",
  },
  techIntro: "TECHNICAL DATA",
  techTitle: "TECHNICAL SPECIFICATIONS",
  techRows: [
    { left: { k: "TEST METHOD", v: "Differential pressure method" }, right: { k: "TEST GAS", v: "Hydrogen (H\u2082)", highlight: true } },
    {
      left: { k: "TEST RANGE", v: "0.001 ~ 100 cm\u00b3/m\u00b2\u00b724h\u00b7atm" },
      right: { k: "DETECTION LIMIT", v: `${LIM} mol/m\u00b2\u00b7s\u00b7Pa`, highlight: true },
    },
    {
      left: { k: "VACUUM RANGE", v: `<1 Pa (${TORR6} Torr system)` },
      right: { k: "VACUUM RESOLUTION", v: "0.01 Pa" },
    },
    { left: { k: "SAMPLE SIZE", v: "\u00d8 50 mm" }, right: { k: "SAMPLE THICKNESS", v: "Up to 5 mm" } },
    {
      left: { k: "TEST PRESSURE RANGE", v: "35\u2013500 bar (up to 700 bar)", highlight: true },
      right: { k: "MULTI-SAMPLE", v: "Up to 3 samples simultaneously" },
    },
  ],
  complianceBand: {
    eyebrow: "COMPLIANCE & TRUST",
    title: "STANDARDS-ALIGNED. DOCUMENTATION-READY.",
    lead:
      "Whether you qualify coatings for fuel-cell enclosures or benchmark pipeline barrier systems, HP-500 outputs are structured for technical review and long-term data governance.",
    badges: ["ISO 15105-1", "ASTM D1434", "CSA/ANSI CHMC1:2023", "CSA/ANSI CHMC2:2019", "IQ/OQ packages"],
  },
  whyBullets: [
    "Industry-leading sensitivity & accuracy",
    "Customizable conditions for versatile applications",
    "AI-powered analysis & report generation",
    "Reliable after-sales support & training",
  ],
  useCasesIntro: "USE CASES",
  useCasesTitle: "INDUSTRY APPLICATIONS",
  useCasesLead:
    "From aerospace to clean energy, the HPA-500 delivers reliable hydrogen barrier testing across the sectors that depend on material certainty.",
  useCases: [
    {
      n: "01",
      title: "AEROSPACE & DEFENSE",
      body: "Hydrogen-resistant alloys and coatings for altitude, space, and mission-critical hardware where permeation margins are non-negotiable.",
    },
    {
      n: "02",
      title: "AUTOMOTIVE HYDROGEN FUEL CELLS",
      body: "Tank materials, liners, and sealing systems validated against stringent permeation limits for safe, durable fuel-cell vehicles.",
    },
    {
      n: "03",
      title: "ENERGY STORAGE & PIPELINES",
      body: "Barrier coatings and steels for pipeline integrity, storage vessels, and long-duration hydrogen logistics.",
    },
    {
      n: "04",
      title: "MATERIAL SCIENCE RESEARCH",
      body: "Next-generation composites and hybrids for the hydrogen economy — from first principles to scale-up.",
    },
  ],
  whyGridEyebrow: "WHAT SETS US APART",
  whyGridTitle: "WHY CHOOSE THE HP-500?",
  whyGrid: [
    {
      title: "VALIDATION-FIRST SERVICE",
      body: "Installation, operator training, IQ/OQ documentation, on-site calibration, and AMC by trained M19 technicians.",
    },
    {
      title: "GLOBAL TRUST, LOCAL PRESENCE",
      body: "Registered offices in India and the USA — faster procurement, INR billing, and reduced overseas friction.",
    },
    {
      title: "END-TO-END OPERATIONAL SAFETY",
      body: "Extended warranty options, stocked spares, and preventive maintenance to keep uptime predictable.",
    },
    {
      title: "COMPLIANCE & DATA INTEGRITY",
      body: "Audit-oriented software paths, traceable data lineage, and export formats suited to regulated environments.",
    },
    {
      title: "ENGINEERED IN NEW YORK. MADE IN INDIA.",
      body: "Local manufacturing supports shorter lead times and responsive field support.",
    },
    {
      title: "INDUSTRY-LEADING SENSITIVITY",
      body: `Commercial-grade permeation measurements targeting ${LIM} mol/m\u00b2\u00b7s\u00b7Pa class performance.`,
    },
  ],
  faq: [
    {
      q: "Is the HP-500 only for hydrogen?",
      a: "Hydrogen is the primary test gas for barrier qualification. Alternate configurations for specific R&D programs can be discussed with M19 applications engineering.",
    },
    {
      q: "What does installation and validation include?",
      a: "We provide installation, operator training, and IQ/OQ documentation with optional on-site execution by certified M19 technicians.",
    },
    {
      q: "How does cloud analytics help our team?",
      a: "Authorized users can monitor runs, compare batches, and export consistent report formats — reducing manual rework and improving traceability across sites.",
    },
    {
      q: "What ongoing support is available?",
      a: "Extended warranty, spare parts programs, preventive maintenance, and access to application scientists for method refinement.",
    },
    {
      q: "Can the system scale from R&D to production QA?",
      a: "Yes — method libraries, role-based access, and repeatable automation paths help you grow from exploratory testing to routine QC without changing platforms.",
    },
  ],
  bottomCta: {
    title: "READY TO QUALIFY YOUR HYDROGEN BARRIER?",
    lead: "Schedule a technical review or request a formal quotation — we will align HP-500 configuration, accessories, and validation scope to your standards and sample types.",
  },
};
