import React from 'react';
import { Quote } from 'lucide-react';

export const FlowDiagram: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center py-20 md:py-28 bg-[#090d16] text-white relative">
      <div className="max-w-[1360px] mx-auto px-6 text-center w-full">
        {/* Section Header */}
        <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-14">
          Every Challenge Became a New Beginning
        </h2>

        {/* Philosophy Card */}
        <div className="relative max-w-3xl mx-auto bg-[#131b2e] rounded-[32px] p-8 sm:p-12 md:p-14 shadow-2xl border border-slate-800 text-center">
          {/* Top Hanging Quote Badge */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#1a243d] px-5 py-2.5 rounded-2xl shadow-lg border border-slate-700 flex items-center justify-center">
            <Quote className="w-7 h-7 text-[#38bdf8] fill-[#38bdf8]/20 rotate-180" />
          </div>

          {/* Quote Text */}
          <p className="font-be-vietnam italic text-slate-200 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed sm:leading-relaxed mb-10 pt-3">
            "My journey hasn't been a straight line. Every hurdle in technology and every complex business case study taught me one thing: Resilience isn't just about bouncing back—it's about moving forward with more empathy and clarity than before."
          </p>

          {/* Bottom Center Divider */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="h-[1px] w-12 sm:w-24 bg-slate-700"></div>
            <span className="font-montserrat text-xs sm:text-sm font-black text-white tracking-[0.2em] uppercase">
              CORE PHILOSOPHY
            </span>
            <div className="h-[1px] w-12 sm:w-24 bg-slate-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
