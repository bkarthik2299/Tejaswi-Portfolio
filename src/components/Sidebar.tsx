import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

export default function Sidebar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-sidebar flex-col bg-card border-r border-border z-40 py-10 px-6">
        <Link to="/" className="mb-12">
          <span className="text-sm font-semibold text-foreground leading-tight block">
            Tejaswi<br />Gollapudi
          </span>
        </Link>
        <nav className="flex flex-col gap-1 flex-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-sidebar"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-primary rounded-full"
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto">
          <a
            href="mailto:gollapudisuryatejaswi@gmail.com"
            className="text-xs text-muted-foreground hover:text-primary transition-colors block truncate"
          >
            gollapudisuryatejaswi@gmail.com
          </a>
        </div>
      </aside>

      {/* Mobile Top Navbar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border h-14 flex items-center justify-between px-5">
        <Link to="/" className="text-sm font-semibold text-foreground">
          Tejaswi Gollapudi
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden fixed top-14 left-0 right-0 z-40 bg-card border-b border-border shadow-card"
          >
            <nav className="flex flex-col py-3 px-5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium py-3 border-b border-border last:border-0 transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
