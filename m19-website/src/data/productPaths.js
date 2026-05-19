import { PRODUCTS } from "./products.js";

/** Stable path for in-app links, e.g. /Products/MPA, /Products/DA-PA */
export function productPathFromModel(model) {
  if (!model) return "/";
  if (model === "DA/PA") return "/Products/DA-PA";
  return `/Products/${encodeURIComponent(model)}`;
}

const SLUG_ALIASES = {
  "da-pa": "DA/PA",
  "da/pa": "DA/PA",
  "hp-500": "HP500",
  hp500: "HP500",
  "hpa-500": "HP500",
  "hydrogen-permeability-analyzer": "HP500",
  "micropore-analyzer": "MPA",
  "nanopore-analyzer": "NPA",
  "filter-integrity-analyzer": "FIA",
};

/** Resolve URL segment (e.g. MPA, DA-PA, HP500) to PRODUCTS[].model */
export function modelFromProductSlug(segment) {
  const raw = decodeURIComponent(segment || "").trim();
  if (!raw) return null;
  const lower = raw.toLowerCase().replace(/_/g, "-");
  if (SLUG_ALIASES[lower]) return SLUG_ALIASES[lower];
  if (raw === "DA/PA" || lower === "da-pa") return "DA/PA";

  const byExact = PRODUCTS.find((p) => p.model === raw);
  if (byExact) return byExact.model;

  const byUpper = PRODUCTS.find((p) => p.model.toUpperCase() === raw.toUpperCase());
  if (byUpper) return byUpper.model;

  return PRODUCTS.find((p) => p.model.toLowerCase() === lower)?.model || null;
}
