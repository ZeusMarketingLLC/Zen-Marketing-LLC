import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Search,
  Megaphone,
  Globe2,
  Monitor,
  MapPin,
  Sparkles,
} from "lucide-react";

import ThemeToggle from "../ui/ThemeToggle";
import lightLogo from "../../assets/zen-logo-light.png";
import darkLogo from "../../assets/zen-logo-dark.png";
import { useTheme } from "../../context/ThemeContext";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  {
    title: "Search Engine Optimization",
    description: "Get found by the customers searching for you.",
    icon: Search,
    href: "#seo",
  },
  {
    title: "Google Ads Management",
    description: "Turn paid search into qualified opportunities.",
    icon: Megaphone,
    href: "#google-ads",
  },
  {
    title: "Social Media Marketing",
    description: "Build a stronger presence across social platforms.",
    icon: Megaphone,
    href: "#social-media",
  },
  {
    title: "Website Development",
    description: "Websites built for speed, clarity and conversion.",
    icon: Monitor,
    href: "#web-development",
  },
  {
    title: "Local SEO",
    description: "Reach more customers in your service areas.",
    icon: MapPin,
    href: "#local-seo",
  },
  {
    title: "Digital Strategy",
    description: "A clear plan connecting your marketing channels.",
    icon: Globe2,
    href: "#strategy",
  },
];

const ease = [0.22, 1, 0.36, 1];

function NavLink({ label, href, active, onClick }) {
  const { theme } = useTheme();

  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={`
        group relative inline-flex
        h-10 items-center justify-center
        rounded-full px-5
        text-center text-sm font-semibold
        leading-none
        transition-colors duration-300
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[var(--zen-gold)]
        ${
          active
            ? theme === "dark"
              ? "text-[#171717]"
              : "text-white"
            : "text-[var(--foreground)]"
        }
      `}
    >
      {/* Active Pill Background */}
      {active && (
        <motion.span
          layoutId="zen-active-navigation"
          aria-hidden="true"
          className={`
            pointer-events-none
            absolute inset-0
            rounded-full
            ${theme === "dark" ? "bg-[var(--zen-gold)]" : "bg-[#171717]"}
          `}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
        />
      )}

      {/* Hover Pill Background */}
      <span
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute inset-0
          rounded-full
          bg-[var(--zen-gold-soft)]
          transition-opacity duration-300
          ${active ? "opacity-0" : "opacity-0 group-hover:opacity-100"}
        `}
      />

      {/* Navigation Text */}
      <span
        className="
          relative z-10
          flex h-full items-center
          justify-center
          text-center leading-none
        "
      >
        {label}
      </span>
    </motion.a>
  );
}

function ServiceMegaMenu({ onClose }) {
  return (
    <motion.div
      id="zen-services-menu"
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{ duration: 0.3, ease }}
      className="
        absolute left-1/2 top-[calc(100%+14px)]
        z-50 w-[min(920px,calc(100vw-48px))]
        -translate-x-1/2
        overflow-hidden rounded-[28px]
        border border-[var(--border-color)]
        bg-[var(--background)]/95
        shadow-[0_30px_90px_rgba(0,0,0,0.18)]
        backdrop-blur-3xl
      "
    >
      <div className="grid grid-cols-[1fr_245px]">
        <div className="p-7">
          <div className="mb-6 flex items-center gap-2">
            <Sparkles size={17} className="text-[var(--zen-gold)]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
              What We Do
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.a
                  href={service.href}
                  key={service.title}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.045 }}
                  whileHover={{ x: 3 }}
                  className="
                    group flex gap-3 rounded-2xl p-3
                    transition-colors duration-300
                    hover:bg-[var(--surface)]
                  "
                >
                  <div
                    className="
                      flex h-11 w-11 shrink-0 items-center
                      justify-center rounded-xl
                      bg-[var(--zen-gold-soft)]
                      text-[var(--zen-gold)]
                      transition-transform duration-300
                      group-hover:rotate-[-7deg]
                    "
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[var(--foreground)]">
                      {service.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                      {service.description}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <div
          className="
            relative flex flex-col justify-between
            overflow-hidden bg-[#171717] p-7 text-white
          "
        >
          <div
            className="
              pointer-events-none absolute -right-24 -top-20
              h-64 w-64 rounded-full
              bg-[#B89852]/30 blur-[60px]
            "
          />

          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8B96C]">
              Zen Marketing Services
            </span>

            <h3 className="mt-8 text-3xl font-extrabold leading-tight">
              Smart Strategies.
              <span className="block text-[#D8B96C]">Stronger Growth.</span>
            </h3>

            {/* <p className="mt-5 text-sm leading-7 text-white/65">
              From SEO and paid advertising to social media and website
              development, we help businesses reach the right audience and turn
              more visitors into customers.
            </p> */}
          </div>

          {/* View All Services Link */}
          <motion.a
            href="/services"
            onClick={onClose}
            whileHover={{ x: 4 }}
            className="
      relative z-10 mt-10
      flex items-center justify-between
      border-t border-white/20 pt-5
      text-sm font-semibold text-white
      transition-colors duration-300
      hover:text-[#D8B96C]
    "
          >
            View All Services
            <ArrowUpRight size={19} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Header() {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();
  const active = pathname;

  const headerRef = useRef(null);
  const closeTimer = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 70);
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };

    const handleOutside = (event) => {
      const clickedInsideHeader = headerRef.current?.contains(event.target);

      const clickedInsideMobileMenu = event.target.closest(
        "#zen-mobile-navigation",
      );

      if (!clickedInsideHeader && !clickedInsideMobileMenu) {
        setServicesOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutside);

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutside);
      clearTimeout(closeTimer.current);
    };
  }, []);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setServicesOpen(false);
    }, 160);
  };

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* Keeps content below the fixed header */}
      <div className="h-[88px] lg:h-[104px]" />

      <header
        ref={headerRef}
        className={`
          fixed inset-x-0 top-0 z-50
          transition-[padding] duration-500
          ${scrolled ? "px-3 pt-3 sm:px-6" : "px-0 pt-0"}
        `}
      >
        <motion.div
          layout={!reducedMotion}
          transition={{
            layout: {
              type: "spring",
              stiffness: 260,
              damping: 30,
            },
          }}
          className={`
            relative mx-auto
            border-0
            bg-[var(--background)]/90
            backdrop-blur-2xl
            transition-[max-width,border-radius,box-shadow]
            duration-500
            ${
              scrolled
                ? `max-w-6xl rounded-[25px]
       ${
         theme === "dark"
           ? "shadow-[0_18px_55px_rgba(212,175,55,0.18),0_8px_30px_rgba(0,0,0,0.45)]"
           : "shadow-[0_18px_55px_rgba(212,175,55,0.14),0_8px_30px_rgba(0,0,0,0.08)]"
       }`
                : "max-w-full rounded-none shadow-none"
            }
          `}
        >
          {/* Animated gold top line */}
          <motion.div
            animate={{
              scaleX: scrolled ? 0 : 1,
              opacity: scrolled ? 0 : 1,
            }}
            transition={{ duration: 0.4 }}
            className="
              absolute inset-x-0 top-0 h-[3px]
              origin-center
              bg-gradient-to-r
              from-transparent via-[var(--zen-gold)]
              to-transparent
            "
          />

          <div
            className={`
              mx-auto flex max-w-[1440px]
              items-center justify-between gap-4
              px-5 transition-[height,padding] duration-500
              md:px-8 xl:px-12
              ${scrolled ? "h-[72px]" : "h-[88px] lg:h-[104px]"}
            `}
          >
            {/* Logo */}
            <a
              href="/"
              className="
                group relative z-10 flex shrink-0
                items-center gap-3
              "
              aria-label="Zen Marketing LLC Home"
            >
              <div
                className="
                  flex items-center justify-center
                  rounded-xl
                  transition-transform duration-300
                  group-hover:scale-105
                "
              >
                <img
                  src={theme === "dark" ? darkLogo : lightLogo}
                  alt="Zen Marketing LLC"
                  className={`
                    w-auto object-contain
                    transition-[height] duration-500
                    ${scrolled ? "h-[50px]" : "h-[70px]"}
                  `}
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main navigation"
              className="
                hidden items-center gap-1
                rounded-full border
                border-[var(--border-color)]
                bg-[var(--surface)]/60
                px-3 py-1
                lg:flex
              "
            >
              <NavLink label="Home" href="/" active={active === "/"} />

              <NavLink
                label="About"
                href="/about"
                active={active === "/about"}
              />

              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  onClick={() => {
                    setServicesOpen((value) => !value);
                  }}
                  onFocus={openServices}
                  aria-expanded={servicesOpen}
                  aria-controls="zen-services-menu"
                  className={`
      group relative flex h-10 cursor-pointer
      items-center gap-1.5 rounded-full
      px-5 text-sm font-semibold
      transition-all duration-300
      ${
        servicesOpen
          ? "bg-[#171717] text-white"
          : "text-[var(--foreground)] hover:bg-[var(--zen-gold-soft)]"
      }
    `}
                >
                  Services
                  <motion.span
                    animate={{
                      rotate: servicesOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={15} />
                  </motion.span>
                </button>
              </div>

              {links.slice(2).map((link) => (
                <NavLink
                  key={link.label}
                  {...link}
                  active={active === link.href}
                />
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2 lg:gap-3">
              <ThemeToggle />

              <motion.a
                href="/contact"
                whileHover={reducedMotion ? {} : { scale: 1.035, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="
                  group relative hidden
                  items-center gap-3 overflow-hidden
                  rounded-full bg-[#171717]
                  px-6 py-3.5
                  text-sm font-bold text-white
                  lg:inline-flex
                "
              >
                <span
                  className="
                    absolute inset-0
                    translate-y-full
                    bg-gradient-to-r
                    from-[#A37F37] to-[#D5B66C]
                    transition-transform duration-500
                    group-hover:translate-y-0
                  "
                />

                <span className="relative z-10">Let's Talk</span>

                <ArrowUpRight
                  size={17}
                  className="
                    relative z-10
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </motion.a>

              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="zen-mobile-navigation"
                onClick={() => {
                  setMobileOpen((value) => !value);
                  setServicesOpen(false);
                }}
                className="
                  flex h-11 w-11 cursor-pointer
                  items-center justify-center
                  rounded-full border
                  border-[var(--border-color)]
                  bg-[var(--surface)]
                  text-[var(--foreground)]
                  lg:hidden
                "
              >
                {mobileOpen ? <X size={23} /> : <Menu size={23} />}
              </button>
            </div>
          </div>

          {/* Full width desktop mega menu */}
          <AnimatePresence>
            {servicesOpen && (
              <div
                className="hidden lg:block"
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
              >
                <ServiceMegaMenu onClose={closeAll} />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

      {/* Cinematic Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="zen-mobile-navigation"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease }}
            className="
              fixed inset-0 z-40
  w-full
  overflow-x-hidden
  overflow-y-auto
  bg-[var(--background)]
  pt-28 pb-10
  [scrollbar-gutter:stable]
  lg:hidden
            "
          >
            <div
              className="
                pointer-events-none absolute
                -right-24 top-24 h-72 w-72
                rounded-full
                bg-[var(--zen-gold-soft)]
                blur-[65px]
              "
            />

            <div className="relative mx-auto w-full max-w-xl px-7">
              <p
                className="
                  mb-8 text-xs font-bold uppercase
                  tracking-[0.25em]
                  text-[var(--zen-gold)]
                "
              >
                Discover Zen Marketing
              </p>

              {/* <div className="flex flex-col">
                {[
                  ...links.slice(0, 2),
                  { label: "Services", href: "#services" },
                  ...links.slice(2),
                ].map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={closeAll}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.055,
                      duration: 0.42,
                      ease,
                    }}
                    className="
                      group flex items-center
                      justify-between border-b
                      border-[var(--border-color)]
                      py-4 text-3xl font-extrabold
                      tracking-tight
                      text-[var(--foreground)]
                      transition-colors
                      hover:text-[var(--zen-gold)]
                      sm:text-4xl
                    "
                  >
                    {link.label}

                    <ArrowUpRight
                      size={22}
                      className="
                        text-[var(--zen-gold)]
                        transition-transform
                        group-hover:rotate-45
                      "
                    />
                  </motion.a>
                ))}
              </div> */}
              <div className="flex flex-col">
                {[
                  ...links.slice(0, 2),
                  { label: "Services", href: "/services" },
                  ...links.slice(2),
                ].map((link, index) => (
                  <div key={link.label}>
                    {link.label === "Services" ? (
                      <>
                        {/* Mobile Services Dropdown Button */}
                        <motion.button
                          type="button"
                          onClick={() => setServicesOpen((prev) => !prev)}
                          aria-expanded={servicesOpen}
                          aria-controls="zen-mobile-services"
                          initial={{ opacity: 0, y: 28 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: index * 0.055,
                            duration: 0.42,
                            ease,
                          }}
                          className="
              flex w-full cursor-pointer
              items-center justify-between
              border-b border-[var(--border-color)]
              py-4 text-left text-3xl font-extrabold
              tracking-tight text-[var(--foreground)]
              transition-colors
              hover:text-[var(--zen-gold)]
              sm:text-4xl
            "
                        >
                          Services
                          <motion.span
                            animate={{ rotate: servicesOpen ? 90 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-[var(--zen-gold)]"
                          >
                            <ArrowUpRight size={22} />
                          </motion.span>
                        </motion.button>

                        {/* Mobile Services Dropdown Content */}
                        <AnimatePresence initial={false}>
                          {servicesOpen && (
                            <motion.div
                              id="zen-mobile-services"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-2 py-4 pl-3">
                                {services.map((service) => {
                                  const Icon = service.icon;

                                  return (
                                    <a
                                      key={service.title}
                                      href={service.href}
                                      onClick={closeAll}
                                      className="
                          flex items-center gap-4
                          rounded-2xl bg-[var(--surface)]
                          px-4 py-3
                          transition-colors duration-300
                          hover:bg-[var(--zen-gold-soft)]
                        "
                                    >
                                      <span
                                        className="
                            flex h-11 w-11 shrink-0
                            items-center justify-center
                            rounded-xl bg-[var(--zen-gold-soft)]
                            text-[var(--zen-gold)]
                          "
                                      >
                                        <Icon size={20} />
                                      </span>

                                      <div className="min-w-0 flex-1">
                                        <h4 className="text-sm font-bold text-[var(--foreground)]">
                                          {service.title}
                                        </h4>

                                        <p className="mt-1 text-xs text-[var(--muted)]">
                                          {service.description}
                                        </p>
                                      </div>

                                      <ArrowUpRight
                                        size={18}
                                        className="shrink-0 text-[var(--zen-gold)]"
                                      />
                                    </a>
                                  );
                                })}

                                {/* All Services Link */}
                                <a
                                  href="/services"
                                  onClick={closeAll}
                                  className="
                      mt-3 flex items-center justify-between
                      rounded-xl px-4 py-3
                      text-sm font-bold
                      text-[var(--zen-gold)]
                      hover:bg-[var(--zen-gold-soft)]
                    "
                                >
                                  View All Services
                                  <ArrowUpRight size={19} />
                                </a>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <motion.a
                        href={link.href}
                        onClick={closeAll}
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.055,
                          duration: 0.42,
                          ease,
                        }}
                        className="
            group flex items-center
            justify-between border-b
            border-[var(--border-color)]
            py-4 text-3xl font-extrabold
            tracking-tight
            text-[var(--foreground)]
            transition-colors
            hover:text-[var(--zen-gold)]
            sm:text-4xl
          "
                      >
                        {link.label}

                        <ArrowUpRight
                          size={22}
                          className="
              text-[var(--zen-gold)]
              transition-transform
              group-hover:rotate-45
            "
                        />
                      </motion.a>
                    )}
                  </div>
                ))}
              </div>

              <motion.a
                href="/contact"
                onClick={closeAll}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="
                  mt-9 flex items-center
                  justify-between rounded-2xl
                  bg-[#171717] px-6 py-5
                  font-bold text-white
                "
              >
                Start Your Project
                <ArrowRight size={21} />
              </motion.a>

              <p className="mt-8 text-sm text-[var(--muted)]">
                Digital thinking. Creative execution.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
