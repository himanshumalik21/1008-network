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
    { label: "Execution Blueprint", href: "/#blueprint" },
    { label: "Find a Partner", href: "/network" },
    { label: "Invest Capital", href: "/capital" },
    { label: "Who It's For", href: "/#personas" },
    { label: "Why 1008 Network", href: "/#comparison" },
    { label: "Playbooks", href: "/knowledge" },
    { label: "Manifesto", href: "/manifesto" },
  ];

  const handleOpenModal = () => {
    trackStudioModalOpen("navbar_cta");
    setModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E6E8EB] shadow-[0_1px_3px_rgba(0,0,0,0.03)] py-3"
            : "bg-white/80 backdrop-blur-sm border-b border-[#E6E8EB]/60 py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* 1. Brand Logo */}
            <div className="flex items-center gap-3 shrink-0">
              <Logo size="lg" />
            </div>

            {/* 2. Executive Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm font-medium text-[#425466] hover:text-[#0A2540] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* 3. Apply to Build Action Button */}
            <div className="hidden sm:flex items-center shrink-0">
              <Button
                variant="primary"
                size="md"
                onClick={handleOpenModal}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="font-semibold text-xs sm:text-sm px-5 h-10 shadow-[0_2px_4px_rgba(99,91,255,0.2)]"
              >
                Apply to Build
              </Button>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={handleOpenModal}
                className="text-xs px-3.5 h-8 font-semibold"
              >
                Apply to Build
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#0A2540] hover:bg-[#F6F9FC] border border-[#E6E8EB] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-b border-[#E6E8EB] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
            <div className="flex flex-col space-y-1 pt-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#425466] hover:text-[#0A2540] hover:bg-[#F6F9FC] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
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
