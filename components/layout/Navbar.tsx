"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "180-Day Blueprint", href: "/#blueprint" },
    { label: "Who It's For", href: "/#personas" },
    { label: "Why 1008", href: "/#comparison" },
    { label: "Playbooks", href: "/knowledge" },
    { label: "Manifesto", href: "/manifesto" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E6E8EB] shadow-[0_1px_3px_0_rgba(0,0,0,0.04)] py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-[#E6E8EB]/60 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* 1. Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Logo size="lg" />
            <div className="hidden lg:flex items-center">
              <Badge variant="indigo" size="sm" pulse>
                Venture Studio
              </Badge>
            </div>
          </div>

          {/* 2. Executive Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href.startsWith("/") && link.href.length > 1 && pathname === link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[14px] font-medium transition-colors duration-150 tracking-tight",
                    isActive
                      ? "text-[#0A2540] font-semibold"
                      : "text-[#425466] hover:text-[#0A2540]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="text-[14px] font-medium text-[#425466] hover:text-[#0A2540] px-3 py-2 transition-colors"
            >
              Contact
            </Link>

            <Button
              href="/studio"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="font-semibold text-xs sm:text-sm"
            >
              Apply to Build
            </Button>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <Button
              href="/studio"
              variant="primary"
              size="sm"
              className="text-xs px-3 h-8 font-semibold"
            >
              Apply
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
        <div className="sm:hidden bg-white border-b border-[#E6E8EB] px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-lg">
          <div className="flex items-center justify-between px-1 py-1 text-xs font-mono text-[#627D98] border-b border-[#E6E8EB] pb-2">
            <span>1008 VENTURE STUDIO</span>
            <Badge variant="indigo" size="sm" pulse>Cohort Open</Badge>
          </div>

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
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#425466] hover:text-[#0A2540] hover:bg-[#F6F9FC] transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="pt-2 border-t border-[#E6E8EB]">
            <Button
              href="/studio"
              variant="primary"
              size="lg"
              className="w-full justify-center text-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply to Build With Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
