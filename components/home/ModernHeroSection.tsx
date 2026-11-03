\"use client\";

import React, { useState, useRef } from \"react\";
import Link from \"next/link\";
import { motion } from \"framer-motion\";
import { ArrowDown, ArrowRight, Play, Pause, ShieldCheck, Users, TrendingUp, Layers } from \"lucide-react\";

export function ModernHeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const stats = [
    {
      value: \"₹14 Cr+\",
      label: \"Active Mandates & Deals\",
      sub: \"Verified across India\",
      icon: TrendingUp,
      color: \"text-[#00A389]\",
      bg: \"bg-[#E6FFFA]\",
    },
    {
      value: \"1,200+\",
      label: \"Founders & Operators\",
      sub: \"Private vetting pool\",
      icon: Users,
      color: \"text-[#635BFF]\",
      bg: \"bg-[#F0F0FF]\",
    },
    {
      value: \"5 Pathways\",
      label: \"Turnkey Execution\",
      sub: \"Co-Founders to Capital\",
      icon: Layers,
      color: \"text-[#FF6B4A]\",
      bg: \"bg-[#FFF3EE]\",
    },
    {
      value: \"Zero\",
      label: \"Broker / Placement Fees\",
      sub: \"Direct transparent access\",
      icon: ShieldCheck,
      color: \"text-[#0A2540]\",
      bg: \"bg-[#F1F5F9]\",
    },
  ];

  return (
    <section className=\"relative w-full pt-6 sm:pt-10 lg:pt-14 pb-8 sm:pb-12 z-20\">
      <div className=\"max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8\">
        {/* Main Grid: Headline & Action Left, Video Showcase Right */}
        <div className=\"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center\">
          {/* Left Column: Hero Content */}
          <div className=\"lg:col-span-7 space-y-6 sm:space-y-7 text-left\">
            {/* Shimmering Eyebrow Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: \"easeOut\" }}
              className=\"inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-[#CBD5E1]/90 shadow-2xs backdrop-blur-md w-fit\"
            >
              <span className=\"relative flex h-2.5 w-2.5\">
                <span className=\"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4B2] opacity-75\" />
                <span className=\"relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00A389]\" />
              </span>
              <span className=\"text-xs sm:text-[13px] font-semibold text-[#0A2540] tracking-wide font-mono\">
                1008 Network • The Entrepreneur & Business Ecosystem
              </span>
            </motion.div>

            {/* Superhero Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: \"easeOut\" }}
              className=\"space-y-3\"
            >
              <h1 className=\"text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold tracking-tight text-[#0A2540] leading-[1.12]\">
                One community. <br />
                <span className=\"bg-gradient-to-r from-[#635BFF] via-[#00A389] to-[#00D4B2] bg-clip-text text-transparent\">
                  Five growth pathways.
                </span>
              </h1>
              <p className=\"text-[#425466] text-base sm:text-lg lg:text-[19px] leading-relaxed max-w-2xl font-normal pt-1\">
                Find co-founders, raise angel funding, outsource day-to-day operations, hire project experts, and access practical business playbooks.
              </p>
            </motion.div>

            {/* Dual Conversion Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: \"easeOut\" }}
              className=\"flex flex-wrap items-center gap-3 sm:gap-4 pt-2\"
            >
              <a
                href=\"#pathways\"
                className=\"inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#0A2540] hover:bg-[#1E3A5F] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00D4B2]\"
              >
                <span>Explore 5 Pathways</span>
                <ArrowDown className=\"h-4 w-4 transition-transform group-hover:translate-y-0.5\" />
              </a>

              <Link
                href=\"/network\"
                className=\"inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0A2540] border border-[#CBD5E1] font-semibold text-sm sm:text-base transition-all duration-300 shadow-2xs hover:shadow-md hover:border-[#635BFF] hover:-translate-y-0.5 group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#635BFF]\"
              >
                <span>Join the Community</span>
                <ArrowRight className=\"h-4 w-4 text-[#635BFF] transition-transform group-hover:translate-x-1\" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Hero Video Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: \"easeOut\" }}
            className=\"lg:col-span-5 relative\"
          >
            {/* Ambient Multi-Hue Radiant Glow */}
            <div className=\"absolute -inset-4 bg-gradient-to-tr from-[#635BFF]/22 via-[#00A68C]/15 to-[#00D4B2]/22 rounded-[40px] blur-3xl opacity-80 -z-10 pointer-events-none\" />

            {/* Video Container Frame */}
            <div className=\"relative w-full h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] xl:h-[560px] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_24px_60px_-16px_rgba(10,37,64,0.25)] border border-white/80 bg-zinc-950 isolate group\">
              <video
                ref={videoRef}
                src=\"/videos/hero_video.mp4\"
                autoPlay
                loop
                muted
                playsInline
                preload=\"auto\"
                aria-label=\"1008 Network overview video showcase\"
                title=\"1008 Network overview video\"
                className=\"w-full h-full object-cover object-[55%_center]\";
              />

              {/* Ambient Edge Vignettes */}
              <div className=\"absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent pointer-events-none\" />
              <div className=\"absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 via-black/20 to-transparent pointer-events-none\" />

              {/* Bottom Play/Pause & Audio Floating Glass Pill */}
              <div className=\"absolute bottom-4 right-4 z-20 flex items-center gap-2\">
                <button
                  onClick={togglePlay}
                  className=\"px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white/90 text-xs font-medium flex items-center gap-1.5 transition-all border border-white/20 shadow-md cursor-pointer\"
                  aria-label={isPlaying ? \"Pause Video\" : \"Play Video\"}
                >
                  {isPlaying ? (
                    <>
                      <Pause className=\"h-3.5 w-3.5\" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className=\"h-3.5 w-3.5 fill-current\" />
                      <span>Play</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Ecosystem Metrics Strip (Refero & 21st.dev Trust Bar) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: \"easeOut\" }}
          className=\"mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6\"
        >
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className=\"p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all flex items-center gap-3.5\"
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <div className=\"min-w-0\">
                  <div className=\"text-lg sm:text-xl font-extrabold text-[#0A2540] tracking-tight font-mono\">
                    {item.value}
                  </div>
                  <div className=\"text-xs sm:text-[13px] font-semibold text-[#425466] truncate\">
                    {item.label}
                  </div>
                  <div className=\"text-[10.5px] text-[#64748B] hidden sm:block truncate\">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
