"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ArrowUpRight,
  Layers,
  Users,
  BookOpen,
  TrendingUp,
  Activity,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Studio", href: "/studio", icon: Layers, badge: "180-Day Build" },
    { label: "Network", href: "/network", icon: Users, badge: "60-Day Match" },
    { label: "Knowledge", href: "/knowledge", icon: BookOpen },
    { label: "Capital", href: "/capital", icon: TrendingUp, badge: "Syndicate" },
    { label: "Readiness", href: "/readiness", icon: Activity },
    { label: "Manifesto", href: "/manifesto" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-[#090A0C]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Status Badge */}
          <div className="flex items-center gap-4">
            <Logo size="md" />
            <Badge variant="amber" size="sm" pulse className="hidden lg:inline-flex">
              Delhi NCR • Pan-India
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-surface-200/60 border border-white/[0.08] p-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5",
                    isActive
                      ? "bg-white/10 text-white font-semibold shadow-sm"
                      : "text-muted hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {link.label}
                  {link.badge && (
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/[0.06] text-amber-300/90 border border-amber-300/20">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="/network"
              variant="ghost"
              size="sm"
              className="text-xs font-mono text-muted hover:text-white"
            >
              Explore Network
            </Button>
            <Button
              href="/studio"
              variant="primary"
              size="sm"
              rightIcon={<ArrowUpRight className="h-3.5 w-3.5" />}
            >
              Build With Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              href="/studio"
              variant="primary"
              size="sm"
              className="text-xs px-3 py-1.5 h-8"
            >
              Build
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-muted hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C0E13] border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="flex items-center justify-between px-2 py-1 text-xs font-mono text-muted border-b border-white/[0.06] pb-2">
            <span>VENTURE PLATFORM</span>
            <Badge variant="amber" size="sm" pulse>Active</Badge>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => {
              const Icon = link.icon || ArrowUpRight;
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex flex-col p-3 rounded-xl border transition-colors text-left",
                    isActive
                      ? "bg-white/[0.08] border-amber-400/40 text-white"
                      : "bg-surface-200/40 border-white/[0.05] text-muted hover:text-white hover:bg-surface-100"
                  )}
                >
                  <div className="flex items-center justify-between mb-1">
                    <Icon className="h-4 w-4 text-amber-400" />
                    {link.badge && (
                      <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-white/[0.06] text-amber-300">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-foreground">{link.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2">
            <Button
              href="/studio"
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/network/post"
              variant="secondary"
              size="md"
              className="w-full justify-center text-xs"
              onClick={() => setMobileMenuOpen(false)}
            >
              Post a 60-Day Opportunity
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
