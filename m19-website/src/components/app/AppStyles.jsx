import { ADMIN_STYLES } from "../../styles/adminStyles.js";
import { STYLES } from "../../styles/globalStyles.js";

export function AppStyles() {
  return (
    <>
      <style>{STYLES}</style>
      <style>{ADMIN_STYLES}</style>
    </>
  );
}
