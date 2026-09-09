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
    { label: "Readiness Quiz", href: "/readiness", badge: "2-Min" },
    { label: "Playbooks", href: "/knowledge" },
    { label: "Manifesto", href: "/manifesto" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#E6E8EB] shadow-[0_1px_3px_0_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06)] py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* 1. Large Brand Logo & Studio Subtitle */}
          <div className="flex items-center gap-3.5 shrink-0">
            <Logo size="lg" />
            <div className="hidden xl:flex items-center">
              <Badge variant="indigo" size="sm" pulse>
                Venture Studio
              </Badge>
            </div>
          </div>

          {/* 2. Spacious Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/80 border border-[#E6E8EB] rounded-full px-4 py-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.02)] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href.startsWith("/") && link.href.length > 1 && pathname === link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 text-[13.5px] font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 tracking-tight",
                    isActive
                      ? "bg-[#F6F9FC] text-[#0A2540] font-semibold"
                      : "text-[#425466] hover:text-[#0A2540] hover:bg-[#F6F9FC]"
                  )}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-[#F0F0FF] text-[#635BFF] border border-[#E0E0FF]">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <Button
              href="/readiness"
              variant="outline"
              size="sm"
              className="text-xs font-semibold hidden md:inline-flex"
            >
              Check Readiness
            </Button>

            <Button
              href="/studio"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="text-xs sm:text-sm font-semibold"
            >
              Apply for Studio
            </Button>
          </div>

          {/* Mobile Actions */}
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
              className="p-2 rounded-full text-[#0A2540] hover:bg-[#F6F9FC] border border-[#E6E8EB] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E6E8EB] px-4 pt-4 pb-8 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="flex items-center justify-between px-2 py-1 text-xs font-mono text-[#627D98] border-b border-[#E6E8EB] pb-3">
            <span>1008 VENTURE STUDIO</span>
            <Badge variant="indigo" size="sm" pulse>Cohort Open</Badge>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col p-3.5 rounded-xl border border-[#E6E8EB] bg-[#F6F9FC] text-[#425466] hover:text-[#0A2540] hover:bg-white transition-all text-left shadow-xs"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-[#0A2540]">{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[#F0F0FF] text-[#635BFF]">
                      {link.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E6E8EB] flex flex-col gap-2.5">
            <Button
              href="/studio"
              variant="primary"
              size="lg"
              className="w-full justify-center text-sm font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/readiness"
              variant="secondary"
              size="md"
              className="w-full justify-center text-xs font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Take 2-Min Venture Readiness Quiz
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
