/** External URLs and route helpers. */
/** Live lab testing catalogue (external M19 Lab site). */
export const LAB_TESTING_EXTERNAL_URL = "https://m19lab.com/Home/LabTest";

/** URL segment for /Industries/<slug> — lowercase, stable (e.g. defense, oil-and-gas). */
export function industryHref(k){
  const slug=k.toLowerCase().replace(/&/g,"and").replace(/\s+/g,"-").replace(/-+/g,"-");
  return `/Industries/${encodeURIComponent(slug)}`;
}
