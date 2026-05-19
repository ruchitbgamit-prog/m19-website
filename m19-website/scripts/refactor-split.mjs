import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const srcDir = path.join(root, "src");
const legacyPath = path.join(srcDir, "App.jsx");
const legacy = fs.readFileSync(legacyPath, "utf8").split("\n");

const slice = (start, end) => legacy.slice(start - 1, end).join("\n");

const write = (rel, body, header = "") => {
  const filePath = path.join(srcDir, rel);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${header}${body}\n`);
};

const exportFunctions = (code) =>
  code.replace(/\nfunction /g, "\nexport function ").replace(/^function /, "export function ");

const exportConsts = (code) =>
  code.replace(/\nconst /g, "\nexport const ").replace(/^const /, "export const ");

write(
  "config/site.js",
  exportFunctions(exportConsts(slice(8, 15))),
  "/** External URLs and route helpers. */\n",
);

write(
  "theme/colors.js",
  slice(20, 41).replace(/^const C/, "export const C"),
  "/** Public marketing + app color tokens. */\n",
);

write(
  "theme/adminColors.js",
  slice(3560, 3568).replace(/^const A/, "export const A"),
  "/** Admin portal color tokens. */\n",
);

write(
  "styles/globalStyles.js",
  slice(46, 530).replace(/^const STYLES/, "export const STYLES"),
  "import { C } from \"../theme/colors.js\";\n\n",
);

write(
  "styles/devStyles.js",
  slice(535, 828).replace(/^const DEV_STYLES/, "export const DEV_STYLES"),
  "import { C } from \"../theme/colors.js\";\n\n",
);

write(
  "styles/adminStyles.js",
  slice(3570, 3618).replace(/^const ADMIN_STYLES/, "export const ADMIN_STYLES"),
  "import { A } from \"../theme/adminColors.js\";\n\n",
);

write(
  "components/ui/primitives.jsx",
  exportFunctions(exportConsts(slice(833, 909))),
  `import { useEffect, useState } from "react";
import { C } from "../../theme/colors.js";

`,
);

write(
  "hooks/usePrefersReducedMotion.js",
  exportFunctions(slice(911, 922)),
  `import { useEffect, useState } from "react";

`,
);

write(
  "components/developer/DevInstrumentStory.jsx",
  exportFunctions(slice(924, 989)),
  `import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";
import { C } from "../../theme/colors.js";

`,
);

write(
  "data/siteContent.js",
  exportConsts(slice(994, 1036)),
  "/** Marketing copy, demo users, and catalogue constants. */\n",
);

write(
  "components/public/QuoteModal.jsx",
  exportFunctions(slice(1041, 1077)),
  `import { useState } from "react";
import { INDUSTRY_SEGMENTS } from "../../data/siteContent.js";
import { Btn, FInput, FLabel, FSelect, Mono, Serif } from "../ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "components/public/navigation.jsx",
  exportFunctions(slice(1082, 1158)),
  `import { useEffect, useRef, useState } from "react";
import { INDUSTRY_META } from "../../data/industryClassification.js";
import { LAB_TESTING_EXTERNAL_URL } from "../../config/site.js";
import { industryHref } from "../../config/site.js";
import { Btn } from "../ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "pages/public/IndustryPage.jsx",
  exportFunctions(slice(1160, 1506)),
  `import { INDUSTRY_CONTENT } from "../../data/industryContent.js";
import { INDUSTRY_META } from "../../data/industryClassification.js";
import { Btn, Eyebrow, Mono, Serif, UIIcon } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "pages/public/InstrumentProductPage.jsx",
  exportFunctions(slice(1508, 1858)),
  `import { PRODUCTS } from "../../data/products.js";
import { HP500_PAGE } from "../../data/hp500Content.js";
import { Btn, Eyebrow, Mono, Serif } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "components/developer/navigation.jsx",
  exportFunctions(slice(1863, 2005)),
  `import { INDUSTRY_META } from "../../data/industryClassification.js";
import { industryHref } from "../../config/site.js";
import { Btn } from "../ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "components/public/PartnersSection.jsx",
  exportFunctions(slice(2007, 2044)),
  `import { useMemo } from "react";
import { Eyebrow } from "../ui/primitives.jsx";

`,
);

write(
  "pages/public/HomePage.jsx",
  exportFunctions(slice(2046, 2237)),
  `import { PRODUCTS } from "../../data/products.js";
import { INDUSTRY_META } from "../../data/industryClassification.js";
import { productPathFromModel } from "../../data/productPaths.js";
import { SERVICES } from "../../data/siteContent.js";
import { industryHref } from "../../config/site.js";
import { PartnersSection } from "../../components/public/PartnersSection.jsx";
import { Btn, Eyebrow, UIIcon } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "pages/public/PlatformPage.jsx",
  exportFunctions(slice(2239, 2289)),
  `import { PLATFORM_TIERS } from "../../data/siteContent.js";
import { Btn, Eyebrow } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "pages/public/InstrumentsPage.jsx",
  exportFunctions(slice(2291, 2524)),
  `import { PRODUCTS, MACHINE_IMAGE_MAP, MACHINE_IMAGE_PRESENTATION } from "../../data/products.js";
import { INDUSTRIES, INDUSTRY_TO_MODELS, INDUSTRY_META } from "../../data/industryClassification.js";
import { productPathFromModel } from "../../data/productPaths.js";
import { DevInstrumentStory } from "../../components/developer/DevInstrumentStory.jsx";
import { Btn, Eyebrow, Mono, Serif } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "pages/public/AboutPage.jsx",
  exportFunctions(slice(2526, 2560)),
  `import { Btn, Eyebrow } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "components/public/PublicFooter.jsx",
  exportFunctions(slice(2562, 2609)),
  `import { C } from "../../theme/colors.js";

`,
);

write(
  "pages/auth/LoginPage.jsx",
  exportFunctions(slice(2614, 2679)),
  `import { useState } from "react";
import { DEMO_USERS } from "../../data/siteContent.js";
import { Btn, FInput, FLabel, Mono, Serif } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "pages/auth/RegisterWizard.jsx",
  exportFunctions(slice(2684, 2832)),
  `import { useState } from "react";
import { COURSES, INDUSTRY_SEGMENTS, PLATFORM_TIERS, STANDARDS, TEST_TYPES } from "../../data/siteContent.js";
import { Btn, FInput, FLabel, FSelect, Mono, Pill, Serif } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "components/dashboard/DashShell.jsx",
  exportFunctions(slice(2837, 2891)),
  `import { Btn, Mono, Serif } from "../ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "components/dashboard/AIChat.jsx",
  exportFunctions(slice(2896, 2939)),
  `import { useState } from "react";
import { Btn, FInput, Mono } from "../ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "data/dashboardSamples.js",
  exportConsts(slice(2944, 2971)),
  "/** Demo dashboard datasets. */\n",
);

write(
  "components/dashboard/fiaWidgets.jsx",
  exportFunctions(slice(2973, 3061)),
  `import { Btn, Mono } from "../ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "pages/dashboard/LabDash.jsx",
  exportFunctions(slice(3063, 3188)),
  `import { useState } from "react";
import { ORDERS, STATUS_COLOR } from "../../data/dashboardSamples.js";
import { TEST_TYPES, STANDARDS } from "../../data/siteContent.js";
import { AIChat } from "../../components/dashboard/AIChat.jsx";
import { DashShell } from "../../components/dashboard/DashShell.jsx";
import { AIDock } from "../../components/dashboard/fiaWidgets.jsx";
import { Badge, Btn, Card, Eyebrow, FInput, FLabel, FSelect, Mono, Pill, ProgressBar, Serif, StatCard } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "pages/dashboard/InstDash.jsx",
  exportFunctions(slice(3190, 3459)),
  `import { useState } from "react";
import { FIA_LOTS, FIA_MACHINE_IDS, FIA_MEDIA, FIA_RUNS } from "../../data/dashboardSamples.js";
import { AIChat } from "../../components/dashboard/AIChat.jsx";
import { DashShell } from "../../components/dashboard/DashShell.jsx";
import { AIDock, Kpi, MiniArea, Segmented, fmt, pct } from "../../components/dashboard/fiaWidgets.jsx";
import { Btn, Card, Eyebrow, Mono, ProgressBar, Serif, StatCard } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "pages/dashboard/AcadDash.jsx",
  exportFunctions(slice(3461, 3519)),
  `import { useState } from "react";
import { COURSES } from "../../data/siteContent.js";
import { DashShell } from "../../components/dashboard/DashShell.jsx";
import { Btn, Card, Eyebrow, Mono, ProgressBar, Serif, StatCard } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "pages/dashboard/AllAccessDash.jsx",
  exportFunctions(slice(3521, 3555)),
  `import { useState } from "react";
import { COURSES } from "../../data/siteContent.js";
import { AIChat } from "../../components/dashboard/AIChat.jsx";
import { Btn, Card, Mono, Serif, StatCard } from "../../components/ui/primitives.jsx";
import { C } from "../../theme/colors.js";

`,
);

write(
  "data/adminSamples.js",
  exportConsts(slice(3621, 3654)),
  "/** Admin demo data. */\n",
);

write(
  "components/admin/AdminBadge.jsx",
  exportFunctions(slice(3656, 3666)),
  `import { A } from "../../theme/adminColors.js";

`,
);

write(
  "components/admin/AdminShell.jsx",
  exportFunctions(slice(3668, 3729)),
  `import { A } from "../../theme/adminColors.js";

`,
);

write(
  "pages/admin/AdminLogin.jsx",
  exportFunctions(slice(3731, 3800)),
  `import { useState } from "react";
import { ADMIN_USERS } from "../../data/adminSamples.js";
import { A } from "../../theme/adminColors.js";

`,
);

write(
  "pages/admin/TechnicianDash.jsx",
  exportFunctions(slice(3802, 3994)),
  `import { useState } from "react";
import { LAB_ORDERS, TICKETS } from "../../data/adminSamples.js";
import { AdminBadge } from "../../components/admin/AdminBadge.jsx";
import { AdminShell } from "../../components/admin/AdminShell.jsx";
import { A } from "../../theme/adminColors.js";

`,
);

write(
  "pages/admin/SuperAdminDash.jsx",
  exportFunctions(slice(3996, 4187)),
  `import { useState } from "react";
import { SKUS } from "../../data/adminSamples.js";
import { AdminBadge } from "../../components/admin/AdminBadge.jsx";
import { AdminShell } from "../../components/admin/AdminShell.jsx";
import { A } from "../../theme/adminColors.js";

`,
);

write(
  "pages/admin/ManagementDash.jsx",
  exportFunctions(slice(4189, 4445)),
  `import { useState } from "react";
import { LAB_ORDERS } from "../../data/adminSamples.js";
import { AdminBadge } from "../../components/admin/AdminBadge.jsx";
import { AdminShell } from "../../components/admin/AdminShell.jsx";
import { A } from "../../theme/adminColors.js";

`,
);

const appRoot = `import { useEffect, useState } from "react";
import { LAB_TESTING_EXTERNAL_URL } from "./config/site.js";
import { industryHref } from "./config/site.js";
import { INDUSTRY_META } from "./data/industryClassification.js";
import { modelFromProductSlug } from "./data/productPaths.js";
import { STYLES } from "./styles/globalStyles.js";
import { ADMIN_STYLES } from "./styles/adminStyles.js";
import { PublicNav } from "./components/public/navigation.jsx";
import { PublicFooter } from "./components/public/PublicFooter.jsx";
import { QuoteModal } from "./components/public/QuoteModal.jsx";
import { HomePage } from "./pages/public/HomePage.jsx";
import { PlatformPage } from "./pages/public/PlatformPage.jsx";
import { InstrumentsPage } from "./pages/public/InstrumentsPage.jsx";
import { IndustryPage } from "./pages/public/IndustryPage.jsx";
import { InstrumentProductPage } from "./pages/public/InstrumentProductPage.jsx";
import { AboutPage } from "./pages/public/AboutPage.jsx";
import { LoginPage } from "./pages/auth/LoginPage.jsx";
import { RegisterWizard } from "./pages/auth/RegisterWizard.jsx";
import { LabDash } from "./pages/dashboard/LabDash.jsx";
import { InstDash } from "./pages/dashboard/InstDash.jsx";
import { AcadDash } from "./pages/dashboard/AcadDash.jsx";
import { AllAccessDash } from "./pages/dashboard/AllAccessDash.jsx";
import { AdminLogin } from "./pages/admin/AdminLogin.jsx";
import { TechnicianDash } from "./pages/admin/TechnicianDash.jsx";
import { SuperAdminDash } from "./pages/admin/SuperAdminDash.jsx";
import { ManagementDash } from "./pages/admin/ManagementDash.jsx";

${exportFunctions(slice(4450, 4588).replace(/^export default function App/, "export default function App"))}
`;

write("App.jsx", appRoot);

console.log("Refactor split complete.");
