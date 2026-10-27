"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import { Star, ArrowRight, CheckCircle2, ShieldCheck, Layers, Users, Coins, Briefcase } from "lucide-react";

export function DesignTemplateHome() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full font-sans antialiased selection:bg-[#FF3B94] selection:text-white">
      {/* ============================================================ */}
      {/* 1. HERO SECTION (Clean White Background) */}
      {/* ============================================================ */}
      <section className="w-full bg-white text-[#0A2540] pt-28 pb-14 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {/* Main Hero Headline & Business Vision */}
          <div className="space-y-5 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono font-semibold border border-zinc-200">
              <span>1008 Network • The Entrepreneur & Business Community</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#0A2540] leading-[1.05] font-sans">
              Helping your Business <br />
              get closer to your Goals.
            </h1>

            <p className="text-[#425466] text-lg sm:text-xl font-normal max-w-2xl leading-relaxed">
              A collaborative community where you can find co-founders & talent, access funding, outsource operational bottlenecks to 1008 as an execution partner, or post and find project gigs.
            </p>

            {/* Quick Community Pathway Chips */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono font-semibold">
              <Link
                href="/network"
                className="px-4 py-2 rounded-full bg-zinc-100 hover:bg-[#635BFF] hover:text-white text-zinc-800 border border-zinc-200/80 transition-all flex items-center gap-1.5 shadow-2xs group"
              >
                <Users className="h-3.5 w-3.5 text-[#635BFF] group-hover:text-white transition-colors" />
                <span>01. Co-Founders & Talent</span>
              </Link>
              <Link
                href="/capital"
                className="px-4 py-2 rounded-full bg-zinc-100 hover:bg-[#635BFF] hover:text-white text-zinc-800 border border-zinc-200/80 transition-all flex items-center gap-1.5 shadow-2xs group"
              >
                <Coins className="h-3.5 w-3.5 text-[#635BFF] group-hover:text-white transition-colors" />
                <span>02. Funding & Investors</span>
              </Link>
              <Link
                href="/studio"
                className="px-4 py-2 rounded-full bg-zinc-100 hover:bg-[#635BFF] hover:text-white text-zinc-800 border border-zinc-200/80 transition-all flex items-center gap-1.5 shadow-2xs group"
              >
                <Layers className="h-3.5 w-3.5 text-[#635BFF] group-hover:text-white transition-colors" />
                <span>03. Outsource Operations</span>
              </Link>
              <Link
                href="/gigs"
                className="px-4 py-2 rounded-full bg-zinc-100 hover:bg-[#635BFF] hover:text-white text-zinc-800 border border-zinc-200/80 transition-all flex items-center gap-1.5 shadow-2xs group"
              >
                <Briefcase className="h-3.5 w-3.5 text-[#635BFF] group-hover:text-white transition-colors" />
                <span>04. Project Gigs & Sprints</span>
              </Link>
            </div>
          </div>

          {/* 3 Images Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-2">
            {/* Image 1: Left */}
            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-zinc-200/80 bg-zinc-50">
              <Image
                src="/images/home/hero_1_person.png"
                alt="Entrepreneur holding phone with business tools"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Image 2: Center */}
            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-zinc-200/80 bg-zinc-50">
              <Image
                src="/images/home/hero_2_collaborators.png"
                alt="Co-founders collaborating over startup growth strategy"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Image 3: Right */}
            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-zinc-200/80 bg-zinc-50">
              <Image
                src="/images/home/hero_3_mobile_dashboard.png"
                alt="Mobile dashboard displaying venture financial metrics"
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
                src="/images/home/sec2_founders_portrait.png"
                alt="Founders smiling and presenting operational partnership"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Small Image + Big Text Headline & Copy */}
          <div className="md:col-span-7 space-y-6 sm:space-y-8 md:pl-6">
            {/* Small Collaborating Image */}
            <div className="relative aspect-[16/10] max-w-md rounded-2xl overflow-hidden shadow-xl bg-white/10">
              <Image
                src="/images/home/sec2_hands_devices.png"
                alt="Partners collaborating and executing milestone sprints"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Text Block: 1008 Four Community Pathways */}
            <div className="space-y-4 max-w-xl">
              <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
                One community. <br />
                Four growth pathways.
              </h2>
              <p className="text-white/95 text-base sm:text-lg font-normal leading-relaxed">
                1008 Network simplifies scaling your venture without compromising control or equity. We eliminate friction across four core business objectives:
              </p>

              {/* 4 Aligned Community Capabilities */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-white/95">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FFFDF7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Co-Founders & Talent Matching:</strong> Have the vision? Find vetted Technical CTOs, GTM heads, or join an ambitious startup for milestone equity.
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FFFDF7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Funding & Investor Discovery:</strong> Connect evaluated businesses directly with active angel syndicates and family offices with 0% broker cuts.
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FFFDF7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Outsource Operations to 1008:</strong> We act as your hands-on execution arm—engineering production software, deploying ERPNext, and auditing factory vendors.
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#FFFDF7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Project Gigs & Acute Sprints:</strong> Post urgent project requirements or get hired for specialized 2–4 week milestone deliverables.
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-white text-[#EA4899] font-bold text-xs sm:text-sm hover:bg-[#FFFDF7] shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-wider"
                >
                  Work With 1008
                </button>
                <Link
                  href="/network"
                  className="px-6 py-3 rounded-full bg-black/25 text-white font-semibold text-xs sm:text-sm hover:bg-black/35 backdrop-blur-xs transition-colors flex items-center gap-1.5"
                >
                  <span>Find a Co-Founder</span>
                  <ArrowRight className="h-3.5 w-3.5" />
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
          <div className="space-y-2">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#FF2B93] leading-none font-sans">
              Why choose us
            </h2>
            <p className="text-[#425466] text-base sm:text-lg max-w-2xl">
              Why founders, operators, and capital partners choose 1008 Network to build real economy and technology ventures.
            </p>
          </div>

          {/* Wide Panoramic Photo Banner */}
          <div className="relative w-full aspect-[16/6] sm:aspect-[16/5] rounded-3xl overflow-hidden shadow-xl bg-[#F6F9FC]">
            <Image
              src="/images/home/sec3_panoramic_team.png"
              alt="Co-founders and operators collaborating with modern devices"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* 3 Column Feature Benefits Aligned with 1008 Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {/* Col 1 */}
            <div className="space-y-2.5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#FF2B93] font-sans">
                Zero broker cuts & agency markups
              </h3>
              <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                No recruiter placement agency commissions, no syndication finder cuts. All co-founder pairings and capital discovery happen directly between parties on transparent legal rails.
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-2.5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#FF2B93] font-sans">
                Turnkey in-house execution arm
              </h3>
              <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                1008 isn't just an advisory network. We step into the trenches—engineering your production software, deploying private cloud ERPs, and auditing factory vendors.
              </p>
            </div>

            {/* Col 3 */}
            <div className="space-y-2.5">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#FF2B93] font-sans">
                Milestone-gated equity & Day-1 IP
              </h3>
              <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                Every collaboration is protected by mutual NDAs, standardized 4-year reverse-vesting schedules, and 100% Day-1 Intellectual Property ownership for your company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. TRUSTED BY FOUNDERS (Clean White Background) */}
      {/* ============================================================ */}
      <section className="w-full bg-white text-[#0A2540] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* Section Headline */}
          <div className="space-y-2">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#FF2B93] leading-none font-sans">
              Trusted by founders
            </h2>
            <p className="text-[#425466] text-base sm:text-lg max-w-2xl">
              Real perspectives from founders and operators building within the 1008 community.
            </p>
          </div>

          {/* 2 Testimonial Cards Aligned with 1008 Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#FFD5DF] to-[#FFE7EE] text-[#0A2540] shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FF2B93] text-[#FF2B93]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl sm:text-2xl font-bold leading-snug text-[#0A2540]">
                  “1008 Network matched me with a domain founder in industrial logistics. We structured a 4-year milestone vesting agreement in days. No recruiters, no games.”
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs bg-white">
                  <Image
                    src="/images/home/avatar_jordan.png"
                    alt="Jordan S."
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540]">Jordan S.</h4>
                  <p className="text-xs sm:text-sm text-[#425466]">Commercial Co-Founder & GTM Lead</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#FFD5DF] to-[#FFE7EE] text-[#0A2540] shadow-xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FF2B93] text-[#FF2B93]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl sm:text-2xl font-bold leading-snug text-[#0A2540]">
                  “Instead of burning ₹25L on an IT agency, 1008's studio arm engineered our cloud architecture, deployed our ERP, and helped us present to angels with 0% broker cuts.”
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/10">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs bg-white">
                  <Image
                    src="/images/home/avatar_sarah.png"
                    alt="Sarah M."
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#0A2540]">Sarah M.</h4>
                  <p className="text-xs sm:text-sm text-[#425466]">Founder & Operating CEO</p>
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
          <div className="space-y-2">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#FF2B93] leading-none font-sans">
              How it works
            </h2>
            <p className="text-[#425466] text-base sm:text-lg max-w-2xl">
              From requirement definition to milestone execution—confidential, structured, and aligned with your business goals.
            </p>
          </div>

          {/* 3 Step Gradient Cards Aligned with 1008 Network */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#8C9DF5] to-[#B8C8FF] text-[#0A2540] shadow-lg flex flex-col justify-between min-h-[300px]">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]/70">
                  01 // DEFINE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] leading-tight font-sans">
                  Define your need
                </h3>
                <p className="text-xs sm:text-sm text-[#0A2540]/85 leading-relaxed pt-2">
                  Choose your objective: recruit a Technical CTO, pitch angel investors, outsource operations to 1008, or post a project gig request.
                </p>
              </div>
              <div className="pt-4 border-t border-black/10 text-[11px] font-mono text-[#0A2540]/70">
                Direct Intake Form
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#8C9DF5] to-[#B8C8FF] text-[#0A2540] shadow-lg flex flex-col justify-between min-h-[300px]">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]/70">
                  02 // MATCH & SCOPE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] leading-tight font-sans">
                  Connect under NDA
                </h3>
                <p className="text-xs sm:text-sm text-[#0A2540]/85 leading-relaxed pt-2">
                  1008 curates high-alignment matches—introducing verified co-founders, accredited capital syndicates, or deploying our dedicated execution pod.
                </p>
              </div>
              <div className="pt-4 border-t border-black/10 text-[11px] font-mono text-[#0A2540]/70">
                Mutual NDA Protected
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#8C9DF5] to-[#B8C8FF] text-[#0A2540] shadow-lg flex flex-col justify-between min-h-[300px]">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540]/70">
                  03 // EXECUTE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] leading-tight font-sans">
                  Deliver with confidence
                </h3>
                <p className="text-xs sm:text-sm text-[#0A2540]/85 leading-relaxed pt-2">
                  Execute on clear milestone gates with 100% Day-1 IP ownership, standardized 4-year reverse-vesting rails, and zero hidden broker markups.
                </p>
              </div>
              <div className="pt-4 border-t border-black/10 text-[11px] font-mono text-[#0A2540]/70">
                Milestone Verification
              </div>
            </div>
          </div>

          {/* Panoramic Photo Banner at Bottom of Section */}
          <div className="relative w-full aspect-[16/6] sm:aspect-[16/5] rounded-3xl overflow-hidden shadow-xl bg-[#F6F9FC]">
            <Image
              src="/images/home/sec5_panoramic_collab.png"
              alt="Two partners smiling and collaborating on business dashboard"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. OWN YOUR FUTURE (Peach/Coral Gradient Banner + Directory) */}
      {/* ============================================================ */}
      <section className="w-full bg-gradient-to-r from-[#FFA280] via-[#FF8D6C] to-[#FF7B60] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Big Headline */}
          <div className="space-y-3">
            <h2 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tight text-white leading-none font-sans">
              Own your future.
            </h2>
            <p className="text-white/95 text-lg sm:text-xl font-medium max-w-xl">
              Ready to get your business closer to its goals? Join the 1008 Network community today.
            </p>
          </div>

          {/* Community Directory & Contact Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start pt-6 border-t border-white/20">
            {/* Community Pathways Directory */}
            <div className="space-y-2 text-sm text-white/95">
              <span className="font-bold text-xs font-mono uppercase tracking-wider text-white/70 block">
                Community Pathways
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                <li>
                  <Link href="/network" className="hover:underline flex items-center gap-1">
                    <span>Co-Founders & Talent</span>
                  </Link>
                </li>
                <li>
                  <Link href="/capital" className="hover:underline flex items-center gap-1">
                    <span>Funding & Investors</span>
                  </Link>
                </li>
                <li>
                  <Link href="/studio" className="hover:underline flex items-center gap-1">
                    <span>Outsource Operations</span>
                  </Link>
                </li>
                <li>
                  <Link href="/gigs" className="hover:underline flex items-center gap-1">
                    <span>Project Gigs & Sprints</span>
                  </Link>
                </li>
                <li>
                  <Link href="/knowledge" className="hover:underline flex items-center gap-1">
                    <span>1008 Playbook</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Direct Contact & HQ */}
            <div className="space-y-1 text-sm text-white/95">
              <span className="font-bold text-xs font-mono uppercase tracking-wider text-white/70 block">
                Contact & HQ
              </span>
              <p className="font-semibold">1008 Network</p>
              <p className="text-xs sm:text-sm text-white/90">Gurgaon, Haryana • Pan-India</p>
              <p className="pt-2 text-xs sm:text-sm">
                <a href="mailto:contact@1008.network" className="hover:underline font-mono">
                  contact@1008.network
                </a>
              </p>
            </div>

            {/* Social Media */}
            <div className="space-y-1 text-sm text-white/95">
              <span className="font-bold text-xs font-mono uppercase tracking-wider text-white/70 block">
                Official Channels
              </span>
              <div className="space-y-1 text-xs sm:text-sm">
                <a
                  href="https://www.instagram.com/1008_network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline block font-mono"
                >
                  Instagram: @1008_network
                </a>
                <a
                  href="https://www.facebook.com/share/1BpxN8G7VM/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline block font-mono"
                >
                  Facebook: 1008 Network
                </a>
              </div>
            </div>

            {/* Action Pill Button */}
            <div className="sm:ml-auto space-y-3 w-full sm:w-auto">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF3B94] hover:bg-[#FF2085] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer block text-center"
              >
                WORK WITH 1008
              </button>

              <Link
                href="/network/join"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#0A2540] font-bold text-xs tracking-wider uppercase backdrop-blur-xs transition-all block text-center"
              >
                Join Talent Pool
              </Link>
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
