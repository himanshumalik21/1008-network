"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { trackStudioModalOpen } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Co-Founders & Talent", href: "/network" },
    { label: "Funding & Investors", href: "/capital" },
    { label: "Outsource Operations", href: "/studio" },
    { label: "Gigs & Sprints", href: "/gigs" },
    { label: "Playbook", href: "/knowledge" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/studio") {
      return pathname === "/studio";
    }
    if (href === "/network") {
      return pathname === "/network" || pathname.startsWith("/network");
    }
    if (href === "/capital") {
      return pathname === "/capital" || pathname.startsWith("/capital");
    }
    if (href === "/gigs") {
      return pathname === "/gigs" || pathname.startsWith("/gigs");
    }
    if (href === "/knowledge") {
      return pathname === "/knowledge" || pathname.startsWith("/knowledge");
    }
    return pathname === href;
  };

  const handleOpenModal = () => {
    trackStudioModalOpen("navbar_cta");
    setModalOpen(true);
    setMobileMenuOpen(false);
  };

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E6E8EB] shadow-[0_1px_3px_rgba(0,0,0,0.03)] py-3"
            : "bg-white/90 backdrop-blur-md py-4 border-b border-[#E6E8EB] text-[#0A2540]"
        )}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* 1. Brand Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <Logo size="lg" />
            </div>

            {/* 2. Executive Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-xs sm:text-sm font-medium transition-all relative py-1 flex flex-col items-center",
                      active
                        ? "text-[#635BFF] font-semibold"
                        : "text-[#425466] hover:text-[#0A2540]"
                    )}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#635BFF]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 3. Action Pill Button (1008 Brand Indigo) */}
            <div className="hidden md:flex items-center shrink-0">
              <button
                onClick={handleOpenModal}
                className="px-5 py-2 rounded-full bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-xs sm:text-sm shadow-[0_2px_4px_rgba(99,91,255,0.2)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* Mobile / Tablet Actions & Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={handleOpenModal}
                className="px-3.5 py-1.5 rounded-full bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold text-xs shadow-xs shrink-0 cursor-pointer"
              >
                Get Started
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-lg transition-colors focus:outline-none shrink-0 text-[#0A2540] hover:bg-[#F6F9FC] border border-[#E6E8EB]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#E6E8EB] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl max-h-[85vh] max-h-[85dvh] overflow-y-auto overflow-touch pb-safe">
            <div className="flex flex-col space-y-1 pt-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-3 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between",
                      active
                        ? "bg-[#F0F0FF] text-[#635BFF] font-semibold border-l-2 border-[#635BFF]"
                        : "text-[#425466] hover:text-[#0A2540] hover:bg-[#F6F9FC] font-medium"
                    )}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#E6E8EB]">
              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center text-sm font-semibold"
                onClick={handleOpenModal}
              >
                Apply to Build With Us
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Global Application Modal */}
      <StudioApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
