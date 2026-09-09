"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ArrowUpRight,
  Layers,
  Activity,
  BookOpen,
  Sparkles,
} from "lucide-react";

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
          ? "bg-background/90 backdrop-blur-2xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5"
          : "bg-background/60 backdrop-blur-md border-b border-border/50 py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* 1. Large Brand Logo & Studio Subtitle */}
          <div className="flex items-center gap-4 shrink-0">
            <Logo size="lg" />
            <div className="hidden xl:flex items-center">
              <Badge variant="amber" size="sm" pulse>
                Venture Studio // Delhi NCR
              </Badge>
            </div>
          </div>

          {/* 2. Spacious Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href.startsWith("/") && link.href.length > 1 && pathname === link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5",
                    isActive
                      ? "bg-surface-200 text-foreground font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface-100"
                  )}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. Action Buttons & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <ThemeToggle size="md" />

            <Button
              href="/readiness"
              variant="outline"
              size="sm"
              className="text-xs font-mono hidden md:inline-flex"
            >
              Check Readiness
            </Button>

            <Button
              href="/studio"
              variant="primary"
              size="md"
              rightIcon={<ArrowUpRight className="h-4 w-4" />}
              className="text-xs sm:text-sm font-semibold shadow-md"
            >
              Apply for Studio
            </Button>
          </div>

          {/* Mobile Actions (Theme Toggle + Menu Trigger) */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle size="sm" />
            <Button
              href="/studio"
              variant="primary"
              size="sm"
              className="text-xs px-2.5 h-8 font-semibold"
            >
              Apply
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-surface-200 border border-border transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-3xl border-b border-border px-4 pt-4 pb-8 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex items-center justify-between px-2 py-1 text-xs font-mono text-muted-foreground border-b border-border pb-3">
            <span>1008 VENTURE STUDIO</span>
            <Badge variant="amber" size="sm" pulse>Cohort Open</Badge>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col p-3.5 rounded-xl border border-border bg-surface-100 text-muted-foreground hover:text-foreground hover:bg-surface-200 transition-all text-left"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-foreground">{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      {link.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-border flex flex-col gap-2.5">
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
              className="w-full justify-center text-xs"
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
