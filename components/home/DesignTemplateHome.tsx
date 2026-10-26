"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { Star, ArrowRight, CheckCircle2 } from "lucide-react";

export function DesignTemplateHome() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full font-sans antialiased selection:bg-[#FF3B94] selection:text-white">
      {/* ============================================================ */}
      {/* 1. HERO SECTION (Periwinkle Blue) */}
      {/* ============================================================ */}
      <section className="w-full bg-[#8392EA] text-white pt-24 pb-14 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {/* Main Hero Headline */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] font-sans">
              Smarter Business <br />
              Starts Here
            </h1>
            <p className="text-white/90 text-lg sm:text-xl font-medium max-w-xl">
              1008 Network • Helping your business get closer to your goals.
            </p>
          </div>

          {/* 3 Images Row (Exact from Mockup) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-2">
            {/* Image 1: Left */}
            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-[#6C7DE4]">
              <Image
                src="/images/mockup/hero_1_person.png"
                alt="Entrepreneur holding phone"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Image 2: Center */}
            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-[#6C7DE4]">
              <Image
                src="/images/mockup/hero_2_collaborators.png"
                alt="Co-founders collaborating over mobile device"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Image 3: Right */}
            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-[#6C7DE4]">
              <Image
                src="/images/mockup/hero_3_mobile_dashboard.png"
                alt="Hand holding phone displaying live financial dashboard"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. GRADIENT FEATURE SPLIT SECTION (Pink to Coral/Peach) */}
      {/* ============================================================ */}
      <section className="w-full bg-gradient-to-b from-[#EA4899] via-[#F43F5E] to-[#F97316] text-white py-14 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Tall Vertical Portrait Image */}
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[3/4] sm:aspect-[3/4.2] rounded-3xl overflow-hidden shadow-2xl bg-white/10">
              <Image
                src="/images/mockup/sec2_founders_portrait.png"
                alt="Co-founders smiling and showing mobile solution"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Small Image + Big Text Headline & Copy */}
          <div className="md:col-span-7 space-y-8 sm:space-y-12 md:pl-6">
            {/* Small Collaborating Image */}
            <div className="relative aspect-[16/10] max-w-md rounded-2xl overflow-hidden shadow-xl bg-white/10">
              <Image
                src="/images/mockup/sec2_hands_devices.png"
                alt="Hands sharing devices and building together"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Text Block */}
            <div className="space-y-4 max-w-xl">
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
                Powerful tools. <br />
                Simplified business.
              </h2>
              <p className="text-white/90 text-base sm:text-xl font-normal leading-relaxed">
                1008 Network simplifies scaling your venture without compromising performance, control, or equity. We connect you with curated co-founders, angel investors, and turnkey operational execution.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-white text-[#EA4899] font-bold text-sm hover:bg-[#FFFDF7] shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Explore 1008 Pillars
                </button>
                <Link
                  href="/studio"
                  className="px-6 py-3 rounded-full bg-black/25 text-white font-semibold text-sm hover:bg-black/35 backdrop-blur-xs transition-colors"
                >
                  Work With 1008 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. WHY CHOOSE US (Warm Cream Background + Hot Pink Text) */}
      {/* ============================================================ */}
      <section className="w-full bg-[#FFFDF7] text-[#0A2540] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* Section Headline */}
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#FF2B93] leading-none font-sans">
            Why choose us
          </h2>

          {/* Wide Panoramic Photo Banner */}
          <div className="relative w-full aspect-[16/6] sm:aspect-[16/5] rounded-3xl overflow-hidden shadow-xl bg-[#F6F9FC]">
            <Image
              src="/images/mockup/sec3_panoramic_team.png"
              alt="Two collaborators working together with mobile devices"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* 3 Column Feature Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {/* Col 1 */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#FF2B93] font-sans">
                Built for modern business needs
              </h3>
              <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                Advanced operational frameworks and vetted talent simplify venture building from day one.
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#FF2B93] font-sans">
                Security at every level
              </h3>
              <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                Mutual NDAs, standardized reverse-vesting, and 100% Day-1 IP ownership protect your assets.
              </p>
            </div>

            {/* Col 3 */}
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#FF2B93] font-sans">
                Clear insights, better decisions
              </h3>
              <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                Audited unit economics, zero-broker funding discovery, and milestone execution reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. TRUSTED BY THOUSANDS (Periwinkle Blue + Pink Gradient Cards) */}
      {/* ============================================================ */}
      <section className="w-full bg-[#8392EA] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* Section Headline */}
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none font-sans">
            Trusted by founders
          </h2>

          {/* 2 Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#FFD5DF] to-[#FFE7EE] text-[#0A2540] shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-white text-white drop-shadow-xs" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl sm:text-2xl font-bold leading-snug text-[#0A2540]">
                  “Seamless from onboarding to daily use — powerful, not complicated.”
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs bg-white">
                  <Image
                    src="/images/mockup/avatar_jordan.png"
                    alt="Jordan S."
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540]">Jordan S.</h4>
                  <p className="text-xs sm:text-sm text-[#425466]">Sales Professional & GTM Lead</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#FFD5DF] to-[#FFE7EE] text-[#0A2540] shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-white text-white drop-shadow-xs" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl sm:text-2xl font-bold leading-snug text-[#0A2540]">
                  “Instantly simplified our venture ops and connected us to the right technical partner.”
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs bg-white">
                  <Image
                    src="/images/mockup/avatar_sarah.png"
                    alt="Sarah M."
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540]">Sarah M.</h4>
                  <p className="text-xs sm:text-sm text-[#425466]">Marketing & Operating Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. HOW IT WORKS (Soft Cream + Hot Pink Heading + Gradient Cards) */}
      {/* ============================================================ */}
      <section className="w-full bg-[#FFFDF7] text-[#0A2540] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* Section Headline */}
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#FF2B93] leading-none font-sans">
            How it works
          </h2>

          {/* 3 Step Gradient Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#8C9DF5] to-[#B8C8FF] text-[#0A2540] shadow-lg flex flex-col justify-between min-h-[280px]">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]/70">
                  01
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] leading-tight font-sans">
                  Create your account
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#0A2540]/80 leading-relaxed pt-6">
                Start with a secure setup built for clarity, control, and growth.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#8C9DF5] to-[#B8C8FF] text-[#0A2540] shadow-lg flex flex-col justify-between min-h-[280px]">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]/70">
                  02
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] leading-tight font-sans">
                  Connect and customize
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#0A2540]/80 leading-relaxed pt-6">
                Connect tools and tailor your dashboard for easy workflows.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#8C9DF5] to-[#B8C8FF] text-[#0A2540] shadow-lg flex flex-col justify-between min-h-[280px]">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]/70">
                  03
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] leading-tight font-sans">
                  Manage with confidence
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#0A2540]/80 leading-relaxed pt-6">
                Monitor, optimize, and make informed decisions.
              </p>
            </div>
          </div>

          {/* Panoramic Photo Banner at Bottom of Section */}
          <div className="relative w-full aspect-[16/6] sm:aspect-[16/5] rounded-3xl overflow-hidden shadow-xl bg-[#F6F9FC]">
            <Image
              src="/images/mockup/sec5_panoramic_collab.png"
              alt="Two partners smiling and collaborating on device"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. OWN YOUR FUTURE (Peach/Coral Gradient Banner + Footer) */}
      {/* ============================================================ */}
      <section className="w-full bg-gradient-to-r from-[#FFA280] via-[#FF8D6C] to-[#FF7B60] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Big Headline */}
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tight text-white leading-none font-sans">
            Own your future.
          </h2>

          {/* Footer 4-Col Row (Address, Email, Social, CTA Button) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-end pt-4 border-t border-white/20">
            {/* Address */}
            <div className="space-y-1 text-sm text-white/95">
              <span className="font-bold text-xs font-mono uppercase tracking-wider text-white/70 block">
                Address
              </span>
              <p>1008 Network</p>
              <p>Pan-India / Gurgaon, India</p>
            </div>

            {/* Email */}
            <div className="space-y-1 text-sm text-white/95">
              <span className="font-bold text-xs font-mono uppercase tracking-wider text-white/70 block">
                Email
              </span>
              <p>contact@1008.network</p>
            </div>

            {/* Social media */}
            <div className="space-y-1 text-sm text-white/95">
              <span className="font-bold text-xs font-mono uppercase tracking-wider text-white/70 block">
                Social media
              </span>
              <div className="space-y-0.5">
                <a
                  href="https://www.instagram.com/1008_network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline block"
                >
                  @1008_network (Instagram)
                </a>
                <a
                  href="https://www.facebook.com/share/1BpxN8G7VM/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline block"
                >
                  1008 Network (Facebook)
                </a>
              </div>
            </div>

            {/* Action Pill Button */}
            <div className="sm:ml-auto">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF3B94] hover:bg-[#FF2085] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                BOOK A DEMO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Application Modal */}
      <StudioApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
