"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { NAV_ITEMS } from "../constants/navconst";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [displayedMenu, setDisplayedMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  const closeAllMenus = useCallback(() => {
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
    setActiveMobileCategory(null);
    setExpandedAccordion(null);
  }, []);

  useEffect(() => {
    if (openMenu) setDisplayedMenu(openMenu);
  }, [openMenu]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAllMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeAllMenus]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsMobileMenuOpen(false);
        setActiveMobileCategory(null);
        setExpandedAccordion(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen((prev) => {
      if (prev) {
        setActiveMobileCategory(null);
        setExpandedAccordion(null);
      }
      return !prev;
    });
  };

  const isMegaMenuOpen = openMenu !== null;
  const menuToRender = NAV_ITEMS.find((item) => item.name === displayedMenu);
  const activeCategoryData = NAV_ITEMS.find((item) => item.name === activeMobileCategory);

  return (
    <header
      id="navbar"
      ref={navRef}
      className="fixed left-0 top-0 z-50 h-20 w-full bg-[#2C466D] shadow-md"
    >
      <div className="container relative z-20 mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Intellidea home"
            onClick={closeAllMenus}
          >
            <img
              src="/intellidea.png"
              alt="Intellidea"
              className="h-10 w-auto object-contain md:h-12"
              width={220}
              height={56}
              loading="eager"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden h-full items-center gap-5 xl:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const isOpen = openMenu === item.name;

              return (
                <div key={item.name} className="relative flex h-full items-center">
                  <span
                    className={`absolute left-0 right-0 top-0 h-0.5 bg-[#F9C100] transition-opacity duration-200 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />

                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={closeAllMenus}
                      className="text-sm font-semibold text-white transition-colors hover:text-[#F9C100]"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      id={`nav-trigger-${item.name}`}
                      onClick={() => toggleMenu(item.name)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls="desktop-mega-menu"
                      className={`flex items-center gap-1.5 text-sm font-semibold transition-colors focus:outline-none ${
                        isOpen ? "text-[#F9C100]" : "text-white hover:text-[#F9C100]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <i
                        className={`fas fa-chevron-down text-[10px] transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#F9C100]" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>
              );
            })}

            <a
              href="https://calendly.com/hello-intellidea/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-sm bg-[#F9C100] px-5 py-2.5 text-xs font-bold text-[#2C466D] shadow-lg transition hover:scale-105 hover:bg-[#ffcd36]"
            >
              Book an appointment
            </a>
          </nav>

          {/* Mobile trigger */}
          <button
            type="button"
            className="relative z-30 p-2 text-white cursor-pointer focus:outline-none xl:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMobileMenu}
          >
            <i className={`text-xl ${isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      <div
        id="desktop-mega-menu"
        role="region"
        aria-hidden={!isMegaMenuOpen}
        className={`absolute left-0 top-20 hidden w-full border-t border-white/10 bg-[#1C2C45] text-white shadow-2xl transition-all duration-200 ease-out xl:block ${
          isMegaMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {menuToRender?.megaMenu && (
          <div className="container mx-auto px-8 py-10">
            <div className="grid grid-cols-12 items-start gap-12">
              <div className="col-span-4 border-r border-white/10 pr-8">
                <h3 className="mb-4 text-2xl font-normal text-white">{menuToRender.name}</h3>
                <p className="mb-8 text-sm leading-relaxed text-white/80">
                  {menuToRender.megaMenu.description}
                </p>
                <Link
                  href={menuToRender.megaMenu.exploreHref}
                  onClick={closeAllMenus}
                  className="inline-block border border-white px-8 py-2.5 text-sm font-semibold text-white transition hover:border-[#F9C100] hover:bg-[#F9C100] hover:text-[#2C466D]"
                >
                  Explore
                </Link>
              </div>

              <div className="col-span-8 pl-4">
                <div className="grid grid-cols-1 divide-y divide-white/15 border-b border-t border-white/15 md:grid-cols-2 md:gap-x-8">
                  {menuToRender.megaMenu.items.map((subItem) =>
                    subItem.external ? (
                      <a
                        key={subItem.title}
                        href={subItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeAllMenus}
                        className="group flex items-center justify-between border-b border-white/15 py-3.5 text-base font-semibold text-white transition hover:text-[#F9C100]"
                      >
                        <span className="pr-2">{subItem.title}</span>
                        <i
                          className="fas fa-external-link-alt text-xs text-white transition-transform group-hover:translate-x-1 group-hover:text-[#F9C100]"
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        onClick={closeAllMenus}
                        className="group flex items-center justify-between border-b border-white/15 py-3.5 text-base font-semibold text-white transition hover:text-[#F9C100]"
                      >
                        <span className="pr-2">{subItem.title}</span>
                        <i
                          className="fas fa-arrow-right text-xs text-white transition-transform group-hover:translate-x-1 group-hover:text-[#F9C100]"
                          aria-hidden="true"
                        />
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setOpenMenu(null)}
                aria-label="Close mega menu"
                className="p-2 text-white/60 transition hover:text-[#F9C100] focus:outline-none"
              >
                <i className="fas fa-chevron-up text-sm" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed left-0 top-20 z-40 h-[calc(100vh-5rem)] w-full overflow-y-auto bg-[#1C2C45] text-white transition-transform duration-300 ease-out xl:hidden ${
          isMobileMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
      >
        {activeMobileCategory === null ? (
          <div className="flex flex-col space-y-1 p-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="border-b border-white/10">
                {item.megaMenu ? (
                  <button
                    type="button"
                    onClick={() => setActiveMobileCategory(item.name)}
                    className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold text-white transition hover:text-[#F9C100]"
                  >
                    <span>{item.name}</span>
                    <i className="fas fa-chevron-right text-xs text-white/60" aria-hidden="true" />
                  </button>
                ) : (
                  <Link
                    href={item.href ?? "/"}
                    onClick={closeAllMenus}
                    className="block py-4 text-lg font-semibold text-white transition hover:text-[#F9C100]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-6">
              <a
                href="https://calendly.com/hello-intellidea/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeAllMenus}
                className="block w-full rounded-sm bg-[#F9C100] py-3.5 text-center text-sm font-bold text-[#2C466D] shadow-md"
              >
                Book an appointment
              </a>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <button
              type="button"
              onClick={() => setActiveMobileCategory(null)}
              className="mb-6 flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-[#F9C100] focus:outline-none"
            >
              <i className="fas fa-chevron-left text-xs" aria-hidden="true" />
              <span>Back</span>
            </button>

            {activeCategoryData?.megaMenu && (
              <div>
                <h2 className="mb-3 text-xl font-semibold text-white">{activeCategoryData.name}</h2>
                <p className="mb-5 text-sm leading-relaxed text-white/80">
                  {activeCategoryData.megaMenu.description}
                </p>

                <Link
                  href={activeCategoryData.megaMenu.exploreHref}
                  onClick={closeAllMenus}
                  className="mb-8 inline-block border border-white px-8 py-2 text-sm font-semibold text-white transition hover:border-[#F9C100] hover:bg-[#F9C100] hover:text-[#2C466D]"
                >
                  Explore
                </Link>

                <div className="mb-8 divide-y divide-white/15 border-b border-t border-white/15">
                  {activeCategoryData.megaMenu.items.map((subItem) => {
                    const isExpanded = expandedAccordion === subItem.title;
                    const hasSubItems = Boolean(subItem.subItems?.length);

                    return (
                      <div key={subItem.title} className="py-1">
                        <div className="flex items-center justify-between py-3">
                          {subItem.external ? (
                            <a
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeAllMenus}
                              className="flex items-center gap-2 pr-2 text-sm font-bold text-white transition hover:text-[#F9C100]"
                            >
                              <span>{subItem.title}</span>
                              <i className="fas fa-external-link-alt text-xs opacity-75" aria-hidden="true" />
                            </a>
                          ) : (
                            <Link
                              href={subItem.href}
                              onClick={closeAllMenus}
                              className="pr-2 text-sm font-bold text-white transition hover:text-[#F9C100]"
                            >
                              {subItem.title}
                            </Link>
                          )}

                          {hasSubItems && (
                            <button
                              type="button"
                              onClick={() => setExpandedAccordion(isExpanded ? null : subItem.title)}
                              aria-label={`Toggle ${subItem.title}`}
                              aria-expanded={isExpanded}
                              className="p-1 text-white transition hover:text-[#F9C100] focus:outline-none"
                            >
                              <i
                                className={`fas ${isExpanded ? "fa-minus" : "fa-plus"} text-sm`}
                                aria-hidden="true"
                              />
                            </button>
                          )}
                        </div>

                        {hasSubItems && isExpanded && (
                          <div className="my-1 space-y-2.5 border-l border-[#F9C100]/40 pb-3 pl-4">
                            {subItem.subItems!.map((nested) => (
                              <Link
                                key={nested.title}
                                href={nested.href}
                                onClick={closeAllMenus}
                                className="block text-xs text-white/90 transition hover:text-[#F9C100]"
                              >
                                {nested.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}