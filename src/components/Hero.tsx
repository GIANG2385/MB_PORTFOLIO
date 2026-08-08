import React from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { StarryBackgroundCanvas } from './StarryBackgroundCanvas';

interface HeroProps {
  onOpenResume?: () => void;
  onOpenConnect?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#001bb7] text-white px-6">
      {/* Animated MB Blue Starry Canvas with Moving Shooting Stars */}
      <div className="absolute inset-0 z-0">
        <StarryBackgroundCanvas />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001bb7]/80 via-transparent to-[#001bb7]/40 pointer-events-none"></div>
      </div>

      {/* Centered Minimal Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl space-y-6 animate-fadeIn">
        {/* Enlarged Prominent Action Pill */}
        <a
          href="#about"
          id="hero-welcome-cta"
          className="group inline-flex items-center gap-3.5 sm:gap-5 px-8 py-4 sm:px-12 sm:py-6 bg-white text-[#001bb7] rounded-full font-montserrat text-lg sm:text-2xl md:text-3xl font-black tracking-wider uppercase shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/90"
        >
          <Sparkles className="w-6 h-6 sm:w-9 sm:h-9 text-[#b20982] shrink-0 animate-pulse group-hover:rotate-12 transition-transform duration-300" />
          <span className="drop-shadow-sm">WELCOME TO MY PORTFOLIO</span>
        </a>

        {/* User Name */}
        <h1 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md pt-2">
          Nguyễn Ngọc Hoàng Giang
        </h1>

        {/* Small "scroll to explore" text underneath */}
        <a
          href="#about"
          className="inline-flex items-center gap-2 font-montserrat text-xs sm:text-sm text-white/90 font-bold tracking-widest uppercase hover:text-white transition-colors group pt-1"
        >
          <span>scroll to explore</span>
          <ChevronDown className="w-4 h-4 text-[#FFFF66] animate-bounce group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

