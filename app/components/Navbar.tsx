"use client";

import React, { useState, useEffect, useRef } from "react";
import { NAV_ITEMS } from "../constants/navconst";




export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveMobileCategory(null);
    setExpandedAccordion(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileCategory(null);
    setExpandedAccordion(null);
    setOpenMenu(null);
  };

  const activeCategoryData = NAV_ITEMS.find((item) => item.name === activeMobileCategory);

  return (
    <header
      id="navbar"
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#2C466D] shadow-md h-20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="index.html" className="flex items-center gap-3" aria-label="Home" onClick={closeMobileMenu}>
            <picture>
              <img
                src="intellidea.png"
                alt="Intellidea"
                className="h-10 md:h-12 w-auto object-contain"
                width="220"
                height="56"
                loading="eager"
              />
            </picture>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 h-full" aria-label="Primary">
            {NAV_ITEMS.map((item) => {
              const isOpen = openMenu === item.name;

              return (
                <div key={item.name} className="relative h-full flex items-center">
                  {isOpen && <div className="absolute top-0 left-0 right-0 h-1 bg-[#F9C100]" />}

                  {item.href ? (
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="text-lg font-semibold text-white hover:text-[#F9C100] transition"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => toggleMenu(item.name)}
                      className={`text-lg font-semibold flex items-center gap-2 transition focus:outline-none ${
                        isOpen ? "text-[#F9C100]" : "text-white hover:text-[#F9C100]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <i
                        className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
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
              className="bg-[#F9C100] hover:bg-[#ffcd36] text-[#2C466D] font-bold text-sm py-2.5 px-6 rounded-sm transition shadow-lg transform hover:scale-105"
            >
              Book an appointment
            </a>
          </nav>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            className="lg:hidden text-white focus:outline-none p-2"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            <i className={`text-2xl ${isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Desktop Mega-Menu Overlay */}
      {openMenu && (
        <div className="hidden lg:block absolute top-20 left-0 w-full bg-[#1C2C45] border-t border-white/10 text-white shadow-2xl z-40">
          {NAV_ITEMS.filter((item) => item.name === openMenu && item.megaMenu).map((item) => {
            const menu = item.megaMenu!;
            return (
              <div key={item.name} className="container mx-auto px-8 py-10">
                <div className="grid grid-cols-12 gap-12 items-start">
                  <div className="col-span-3 border-r border-white/10 pr-8">
                    <h3 className="text-3xl font-normal text-white mb-4">{item.name}</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-8">{menu.description}</p>
                    <a
                      href={menu.exploreHref}
                      onClick={closeMobileMenu}
                      className="inline-block border border-white text-white hover:bg-[#F9C100] hover:text-[#2C466D] hover:border-[#F9C100] font-semibold text-sm py-2.5 px-8 transition"
                    >
                      Explore
                    </a>
                  </div>

                  <div className="col-span-5 border-r border-white/10 pr-8">
                    <div className="divide-y divide-white/15 border-t border-b border-white/15">
                      {menu.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          onClick={closeMobileMenu}
                          className="group flex items-center justify-between py-3.5 text-base font-semibold text-white hover:text-[#F9C100] transition"
                        >
                          <span>{subItem.title}</span>
                          <i className="fas fa-arrow-right text-sm text-white group-hover:text-[#F9C100] group-hover:translate-x-1 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-4 pl-4">
                    <h4 className="text-lg font-bold text-[#F9C100] mb-4">Spotlight</h4>
                    <div className="space-y-3">
                      {menu.spotlight.map((spot) => (
                        <a
                          key={spot.title}
                          href={spot.href}
                          onClick={closeMobileMenu}
                          className="block text-base font-semibold text-white hover:text-[#F9C100] transition py-1"
                        >
                          {spot.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="button"
                    onClick={() => setOpenMenu(null)}
                    aria-label="Close menu"
                    className="text-white/60 hover:text-[#F9C100] transition p-2 focus:outline-none"
                  >
                    <i className="fas fa-chevron-up text-sm" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* EY-Style Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-[#1C2C45] text-white z-50 overflow-y-auto"
        >
          {activeMobileCategory === null ? (
            /* Main Top-Level Categories View */
            <div className="flex flex-col p-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.name} className="border-b border-white/10">
                  {item.megaMenu ? (
                    <button
                      type="button"
                      onClick={() => setActiveMobileCategory(item.name)}
                      className="w-full flex items-center justify-between py-4 text-xl font-semibold text-white hover:text-[#F9C100] transition text-left"
                    >
                      <span>{item.name}</span>
                      <i className="fas fa-chevron-right text-xs text-white/60" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block py-4 text-xl font-semibold text-white hover:text-[#F9C100] transition"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              <div className="pt-6">
                <a
                  href="https://calendly.com/hello-intellidea/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block w-full bg-[#F9C100] text-[#2C466D] font-bold py-3.5 text-center rounded-sm shadow-md"
                >
                  Book an appointment
                </a>
              </div>
            </div>
          ) : (
            /* EY Sub-Menu Drill-Down View */
            <div className="p-6">
              {/* Back Header Button */}
              <button
                type="button"
                onClick={() => setActiveMobileCategory(null)}
                className="flex items-center gap-2 text-white/80 hover:text-[#F9C100] font-medium text-sm mb-6 transition focus:outline-none"
              >
                <i className="fas fa-chevron-left text-xs" />
                <span>Back</span>
              </button>

              {activeCategoryData && activeCategoryData.megaMenu && (
                <div>
                  {/* Category Title & Description */}
                  <h2 className="text-2xl font-semibold text-white mb-3">{activeCategoryData.name}</h2>
                  <p className="text-sm text-white/80 leading-relaxed mb-5">
                    {activeCategoryData.megaMenu.description}
                  </p>

                  <a
                    href={activeCategoryData.megaMenu.exploreHref}
                    onClick={closeMobileMenu}
                    className="inline-block border border-white text-white hover:bg-[#F9C100] hover:text-[#2C466D] hover:border-[#F9C100] font-semibold text-sm py-2 px-8 mb-8 transition"
                  >
                    Explore
                  </a>

                  {/* List of Accordion Items with '+' / '-' Icons */}
                  <div className="border-t border-b border-white/15 divide-y divide-white/15 mb-8">
                    {activeCategoryData.megaMenu.items.map((subItem) => {
                      const isExpanded = expandedAccordion === subItem.title;
                      const hasSubItems = subItem.subItems && subItem.subItems.length > 0;

                      return (
                        <div key={subItem.title} className="py-1">
                          <div className="flex items-center justify-between py-3">
                            <a
                              href={subItem.href}
                              onClick={closeMobileMenu}
                              className="text-base font-semibold text-white hover:text-[#F9C100] transition pr-2"
                            >
                              {subItem.title}
                            </a>

                            <button
                              type="button"
                              onClick={() => setExpandedAccordion(isExpanded ? null : subItem.title)}
                              aria-label={`Toggle ${subItem.title}`}
                              className="text-white hover:text-[#F9C100] p-1 focus:outline-none"
                            >
                              <i className={`fas ${isExpanded ? "fa-minus" : "fa-plus"} text-sm`} />
                            </button>
                          </div>

                          {/* Nested Accordion Sub-items */}
                          {isExpanded && (
                            <div className="pl-4 pb-3 space-y-2.5 border-l border-[#F9C100]/40 my-1">
                              {hasSubItems ? (
                                subItem.subItems!.map((nested) => (
                                  <a
                                    key={nested.title}
                                    href={nested.href}
                                    onClick={closeMobileMenu}
                                    className="block text-sm text-white/90 hover:text-[#F9C100] transition"
                                  >
                                    {nested.title}
                                  </a>
                                ))
                              ) : (
                                <a
                                  href={subItem.href}
                                  onClick={closeMobileMenu}
                                  className="block text-sm text-[#F9C100] hover:underline"
                                >
                                  View all {subItem.title}
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Spotlight Section */}
                  <div className="pt-2 pb-6">
                    <h3 className="text-base font-bold text-[#F9C100] mb-3">Spotlight</h3>
                    <div className="space-y-3">
                      {activeCategoryData.megaMenu.spotlight.map((spot) => (
                        <a
                          key={spot.title}
                          href={spot.href}
                          onClick={closeMobileMenu}
                          className="block text-sm font-semibold text-white hover:text-[#F9C100] transition"
                        >
                          {spot.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </header>
  );
}