import { useCallback, useEffect, useState } from "react";
import { LAB_TESTING_EXTERNAL_URL } from "../config/site.js";
import { INDUSTRY_META } from "../data/industryClassification.js";
import { modelFromProductSlug, productPathFromModel } from "../data/productPaths.js";

const INDUSTRY_SLUG_ALIASES = {
  defence: "Defense",
  "space research": "Space",
  pharmaceutical: "Pharma",
};

function normalizeSlug(value) {
  return String(value).toLowerCase().replace(/&/g, "and").replace(/\s+/g, " ").trim();
}

function resolveIndustryKey(slug) {
  const slugKey = normalizeSlug(slug);
  const direct = INDUSTRY_SLUG_ALIASES[slugKey];
  if (direct && INDUSTRY_META[direct]) return direct;
  const keys = Object.keys(INDUSTRY_META);
  return keys.find((key) => normalizeSlug(key) === slugKey) || null;
}

export function useAppRouting() {
  const [pubPage, setPubPage] = useState("home");
  const [industryKey, setIndustryKey] = useState(null);
  const [productModel, setProductModel] = useState(null);

  const parseRoute = useCallback(() => {
    const path = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
    const parts = path.split("/").filter(Boolean);

    if (parts[0]?.toLowerCase() === "testing") {
      window.location.replace(LAB_TESTING_EXTERNAL_URL);
      return;
    }

    const catalogSegment = parts[0]?.toLowerCase();
    if (catalogSegment === "products" || catalogSegment === "instruments") {
      setIndustryKey(null);
      if (parts[1]) {
        setProductModel(modelFromProductSlug(parts[1]));
        setPubPage("product");
        return;
      }
      setProductModel(null);
      setPubPage("instruments");
      return;
    }

    setProductModel(null);

    if (parts[0]?.toLowerCase() === "industries" && parts[1]) {
      const raw = decodeURIComponent(parts[1] || "");
      setIndustryKey(resolveIndustryKey(raw.replace(/-/g, " ")));
      setPubPage("industry");
      return;
    }

    setIndustryKey(null);
    setPubPage(parts[0] || "home");
  }, []);

  useEffect(() => {
    parseRoute();
    window.addEventListener("popstate", parseRoute);
    return () => window.removeEventListener("popstate", parseRoute);
  }, [parseRoute]);

  const handleNav = useCallback(
    (page) => {
      if (page === "testing") {
        window.location.assign(LAB_TESTING_EXTERNAL_URL);
        return;
      }
      const path =
        page === "home" ? "/" : page === "instruments" ? "/Products" : `/${page}`;
      window.history.pushState({}, "", path);
      parseRoute();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [parseRoute],
  );

  const navigateToProduct = useCallback(
    (model) => {
      if (!model) return;
      window.history.pushState({}, "", productPathFromModel(model));
      parseRoute();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [parseRoute],
  );

  return { pubPage, industryKey, productModel, handleNav, navigateToProduct };
}
