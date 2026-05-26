import { LPA_PAGE } from "../../data/lpaProductContent.js";
import { PharmaProductDetailPage } from "./PharmaProductDetailPage.jsx";

export function LpaProductPage(props) {
  return (
    <PharmaProductDetailPage
      {...props}
      content={LPA_PAGE}
      activeModel="LPA"
      activeBlockId="lpa"
    />
  );
}
