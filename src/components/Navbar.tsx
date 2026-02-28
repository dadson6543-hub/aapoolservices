import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nav shadow-md py-2"
          : "bg-nav/95 py-3"
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="AA Pool Service Logo" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-primary leading-none block">
                AA Pool Service
              </span>
              <span className="text-xs text-muted-foreground">Professional Pool Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-medium font-heading transition-colors duration-200 ${
                  location.pathname === link.to
                    ? "text-secondary border-b-2 border-secondary"
                    : "text-nav-foreground hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:03289471436"
              className="ml-4 flex items-center gap-2 gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-heading font-semibold transition-transform duration-200 hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-nav-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t border-border">
            <div className="flex flex-col pt-3 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 text-sm font-heading font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-secondary bg-accent"
                      : "text-nav-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:03289471436"
                className="mx-4 mt-2 flex items-center justify-center gap-2 gradient-primary text-primary-foreground px-5 py-3 text-sm font-heading font-semibold"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
