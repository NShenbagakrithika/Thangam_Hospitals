import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { Icon } from "./icons";
import { Container, Button } from "./ui";
import { site, branches, departments } from "@/data";

const NAV = [
  {
    label: "About Thangam",
    items: [
      { label: "Our Story", to: "/about#story" },
      { label: "Vision & Mission", to: "/about#vision-mission" },
      { label: "Values", to: "/about#values" },
      { label: "Leadership", to: "/about#leadership" },
      { label: "Community Impact", to: "/about#community-impact" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Departments", to: "/departments" },
      { label: "Home Visits", to: "/services/home-visits" },
      { label: "Rural Health", to: "/services/rural-health" },
      { label: "Geriatric Care", to: "/geriatric-care" },
      { label: "Patient Services", to: "/patient-information" },
    ],
  },
  {
    label: "Doctors",
    items: [
      { label: "Geriatrics", to: "/doctors?dept=geriatrics" },
      { label: "General Medicine", to: "/doctors?dept=general-medicine" },
      { label: "Paediatrics", to: "/doctors?dept=paediatrics" },
      { label: "Cardiology", to: "/doctors?dept=cardiology" },
      { label: "Diabetology", to: "/doctors?dept=diabetology" },
      { label: "ENT", to: "/doctors?dept=ent" },
      { label: "Orthopaedics", to: "/doctors?dept=orthopaedics" },
      { label: "Gynaecology & Obstetrics", to: "/doctors?dept=gynaecology-obstetrics" },
      { label: "Dermatology", to: "/doctors?dept=dermatology" },
      { label: "Ophthalmology", to: "/doctors?dept=ophthalmology" },
      { label: "Physiotherapy", to: "/doctors?dept=physiotherapy" },
      { label: "Neurology", to: "/doctors?dept=neurology" },
    ],
  },
  {
    label: "Locations",
    items: [
      { label: "Kandigai", to: "/locations#kandigai" },
      { label: "Urapakkam", to: "/locations#urapakkam" },
    ],
  },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Thangam Hospitals home">
      <span className="header-wordmark">THANGAM<span>HOSPITALS</span></span>
    </Link>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setOpenMobileSection(null);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setOpenMobileSection(null);
      }
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Logo />

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-7 xl:flex"
            aria-label="Main navigation"
          >
            {NAV.map((section) => (
              <div key={section.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 whitespace-nowrap py-3 text-sm font-medium text-navy-600 transition-colors hover:text-navy-900"
                >
                  {section.label}
                  <Icon name="chevronDown" className="h-4 w-4" />
                </button>

                <div className="invisible absolute left-1/2 top-full z-50 min-w-[240px] -translate-x-1/2 translate-y-2 rounded-lg border border-navy-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {section.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block rounded-md px-4 py-3 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:text-navy-900"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/doctors"
              className="hidden min-h-11 items-center gap-2 rounded-md border border-navy-200 px-4 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50 lg:inline-flex"
            >
              <Icon name="user" className="h-4 w-4" />
              Find a doctor
            </Link>

            <Button
              to="/appointment"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Book appointment
            </Button>

            <a
              href={`tel:${site.helpline}`}
              className="hidden h-11 w-11 items-center justify-center rounded-md border border-navy-200 text-navy-800 transition-colors hover:bg-navy-50 lg:flex"
              aria-label={`Call ${site.helplineDisplay}`}
            >
              <Icon name="phone" className="h-5 w-5" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-navy-200 xl:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <Icon
                name={menuOpen ? "x" : "menu"}
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-navy-100 bg-white xl:hidden"
        >
          <Container className="py-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV.map((section) => {
                const isOpen = openMobileSection === section.label;

                return (
                  <div key={section.label}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileSection(isOpen ? null : section.label)
                      }
                      className="flex min-h-12 w-full items-center justify-between rounded-lg px-4 py-3 text-left font-semibold text-navy-800 hover:bg-navy-50"
                      aria-expanded={isOpen}
                    >
                      {section.label}

                      <Icon
                        name="chevronDown"
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {isOpen && (
                      <div className="mb-2 ml-3 border-l border-navy-100 pl-3">
                        {section.items.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block rounded-md px-4 py-2.5 text-sm text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="mt-5 grid gap-3 border-t border-navy-100 pt-5">
              <Button
                to="/doctors"
                variant="secondary"
                fullWidth
                iconLeft="user"
              >
                Find a doctor
              </Button>

              <Button
                to="/appointment"
                fullWidth
                iconLeft="calendar"
              >
                Book appointment
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const featured = departments.filter((d) => d.featured).slice(0, 4);
  return (
    <footer className="bg-navy-950 text-navy-100">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" aria-label="Thangam Hospitals home" className="header-wordmark footer-wordmark">THANGAM<span>HOSPITALS</span></Link>
            <p className="mt-4 max-w-xs text-small text-navy-200">{site.tagline}. Compassionate, affordable care close to home.</p>
            <a
              href={`tel:${site.helpline}`}
              className="mt-4 inline-flex items-center gap-2 text-body font-semibold text-white hover:text-gold-300"
            >
              <Icon name="phone" className="h-5 w-5 text-gold-400" />
              {site.helplineDisplay}
            </a>
          </div>

          <div>
            <h3 className="text-small font-semibold uppercase tracking-wider text-gold-400">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-body">
              {[
                { label: "About Us", to: "/about" },
                { label: "Our Doctors", to: "/doctors" },
                { label: "Patient Information", to: "/patient-information" },
                { label: "Health Resources", to: "/health-resources" },
                { label: "Request a Callback", to: "/callback" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-navy-200 hover:text-white hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-small font-semibold uppercase tracking-wider text-gold-400">Departments</h3>
            <ul className="mt-4 space-y-2.5 text-body">
              {featured.map((d) => (
                <li key={d.slug}>
                  <Link to={`/departments/${d.slug}`} className="text-navy-200 hover:text-white hover:underline">
                    {d.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/departments" className="font-medium text-gold-300 hover:text-gold-200 hover:underline">
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-small font-semibold uppercase tracking-wider text-gold-400">Locations</h3>
            <ul className="mt-4 space-y-4 text-body">
              {branches.map((b) => (
                <li key={b.id}>
                  <p className="font-semibold text-white">{b.name}</p>
                  <p className="mt-0.5 text-small text-navy-200">{b.address}</p><a href={b.directionsUrl} target="_blank" rel="noopener noreferrer" className="footer-directions">Directions to {b.name} ↗</a>
                  <a href={`tel:${b.phone}`} className="mt-0.5 block text-small text-navy-200 hover:text-white">
                    {b.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy-800 pt-6 text-small text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Thangam Hospitals. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Icon name="alertCircle" className="h-4 w-4 text-gold-400" />
            24×7 Emergency: {site.helplineDisplay}
          </p>
        </div>
      </Container>
    </footer>
  );
}

function BottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-navy-100 bg-white p-3 pb-[calc(0.75rem_+_env(safe-area-inset-bottom))] md:hidden">
      <Button href={`tel:${site.helpline}`} variant="secondary" fullWidth iconLeft="phone">
        Call
      </Button>
      <Button to="/appointment" variant="primary" fullWidth iconLeft="calendar">
        Appointment
      </Button>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a href="#main-content" onClick={(event) => { event.preventDefault(); document.getElementById("main-content")?.focus(); }} className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <div className="h-[4.5rem] md:hidden" aria-hidden="true" />
      <BottomBar />
    </div>
  );
}
