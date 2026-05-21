import { useState } from "react";
import { AppStyles } from "./components/app/AppStyles.jsx";
import { PublicFooter } from "./components/public/PublicFooter.jsx";
import { PublicNav } from "./components/public/navigation.jsx";
import { QuoteModal } from "./components/public/QuoteModal.jsx";
import { useAppRouting } from "./hooks/useAppRouting.js";
import { AdminLogin } from "./pages/admin/AdminLogin.jsx";
import { ManagementDash } from "./pages/admin/ManagementDash.jsx";
import { SuperAdminDash } from "./pages/admin/SuperAdminDash.jsx";
import { TechnicianDash } from "./pages/admin/TechnicianDash.jsx";
import { LoginPage } from "./pages/auth/LoginPage.jsx";
import { RegisterWizard } from "./pages/auth/RegisterWizard.jsx";
import { AcadDash } from "./pages/dashboard/AcadDash.jsx";
import { AllAccessDash } from "./pages/dashboard/AllAccessDash.jsx";
import { InstDash } from "./pages/dashboard/InstDash.jsx";
import { LabDash } from "./pages/dashboard/LabDash.jsx";
import { AboutPage } from "./pages/public/AboutPage.jsx";
import { HomePage } from "./pages/public/HomePage.jsx";
import { IndustryPage } from "./pages/public/IndustryPage.jsx";
import { InstrumentProductPage } from "./pages/public/InstrumentProductPage.jsx";
import { InstrumentsPage } from "./pages/public/InstrumentsPage.jsx";
import { PlatformPage } from "./pages/public/PlatformPage.jsx";
import { ThankYouPage } from "./pages/public/ThankYouPage.jsx";

export default function App() {
  const [appView, setAppView] = useState("website");
  const [user, setUser] = useState(null);
  const [adminUser, setAdminUser] = useState(null);
  const [showQuote, setShowQuote] = useState(false);
  const { pubPage, industryKey, productModel, handleNav, navigateToProduct } = useAppRouting();

  const handleLogin = (account) => {
    setUser(account);
    setAppView("dashboard");
  };

  const handleRegister = (account) => {
    setUser({
      ...account,
      type: account.platforms?.length > 1 ? "all" : account.platforms?.[0] || "lab",
      name: account.name || "New User",
      tier: account.tiers?.[account.platforms?.[0]] || "Essential",
    });
    setAppView("dashboard");
  };

  const handleAdminLogin = (account) => {
    setAdminUser(account);
    setAppView("admin-dashboard");
  };

  const backToSite = () => {
    setAppView("website");
    handleNav("home");
  };

  const openRegister = () => setAppView("register");
  const openLogin = () => setAppView("login");
  const openQuote = () => setShowQuote(true);

  return (
    <>
      <AppStyles />

      {appView === "website" && (
        <div data-ui="public">
          <PublicNav
            page={pubPage}
            onNav={handleNav}
            onLogin={openLogin}
            onRegister={openRegister}
            onQuote={openQuote}
          />

          <main key={`${pubPage}-${productModel || ""}`}>
            {pubPage === "home" && (
              <HomePage
                onNav={handleNav}
                onProductNav={navigateToProduct}
                onQuote={openQuote}
                onRegister={openRegister}
              />
            )}
            {pubPage === "platform" && (
              <PlatformPage onQuote={openQuote} onRegister={openRegister} />
            )}
            {pubPage === "instruments" && (
              <InstrumentsPage
                onQuote={openQuote}
                onRegister={openRegister}
                onProductNav={navigateToProduct}
                showIndustryFilter
              />
            )}
            {pubPage === "industry" && (
              <IndustryPage
                industryKey={industryKey}
                onQuote={openQuote}
                onRegister={openRegister}
                onNav={handleNav}
                onProductNav={navigateToProduct}
              />
            )}
            {pubPage === "product" && (
              <InstrumentProductPage
                productModel={productModel}
                onQuote={openQuote}
                onRegister={openRegister}
                onNav={handleNav}
              />
            )}
            {pubPage === "about" && (
              <AboutPage onNav={handleNav} onRegister={openRegister} />
            )}
            {pubPage === "thank-you" && (
              <ThankYouPage onNav={handleNav} onRegister={openRegister} />
            )}
          </main>

          <PublicFooter onNav={handleNav} onRegister={openRegister} />

          <div
            className="team-login-row"
            style={{
              background: "#040810",
              padding: "8px 48px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <span
              onClick={() => setAppView("admin-login")}
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: 9,
                color: "rgba(255,255,255,0.12)",
                letterSpacing: 1.5,
                cursor: "pointer",
                textTransform: "uppercase",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = "rgba(255,255,255,0.3)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = "rgba(255,255,255,0.12)";
              }}
            >
              Team Login
            </span>
          </div>

          {showQuote && (
            <QuoteModal
              onClose={() => setShowQuote(false)}
              onRegister={() => {
                setShowQuote(false);
                openRegister();
              }}
              onSubmitted={() => {
                setShowQuote(false);
                handleNav("thank-you");
              }}
            />
          )}
        </div>
      )}

      {appView === "login" && (
        <LoginPage onLogin={handleLogin} onRegister={openRegister} onBack={backToSite} />
      )}

      {appView === "register" && (
        <RegisterWizard onBack={openLogin} onComplete={handleRegister} />
      )}

      {appView === "dashboard" && user && (
        user.type === "all" ? (
          <AllAccessDash user={user} onBackToSite={backToSite} />
        ) : user.type === "lab" ? (
          <LabDash user={user} onBackToSite={backToSite} />
        ) : user.type === "inst" ? (
          <InstDash user={user} onBackToSite={backToSite} />
        ) : (
          <AcadDash user={user} onBackToSite={backToSite} />
        )
      )}

      {appView === "admin-login" && (
        <AdminLogin onLogin={handleAdminLogin} onBack={backToSite} />
      )}

      {appView === "admin-dashboard" && adminUser && (
        adminUser.role === "technician" ? (
          <TechnicianDash
            user={adminUser}
            onSignOut={() => {
              setAdminUser(null);
              setAppView("admin-login");
            }}
          />
        ) : adminUser.role === "superadmin" ? (
          <SuperAdminDash
            user={adminUser}
            onSignOut={() => {
              setAdminUser(null);
              setAppView("admin-login");
            }}
          />
        ) : (
          <ManagementDash
            user={adminUser}
            onSignOut={() => {
              setAdminUser(null);
              setAppView("admin-login");
            }}
          />
        )
      )}
    </>
  );
}
