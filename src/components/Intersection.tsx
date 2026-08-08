import React, { useState } from 'react';
import { Briefcase, Cpu, Microscope, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PerspectiveItem } from '../types';

export const Intersection: React.FC = () => {
  const [selectedPerspective, setSelectedPerspective] = useState<PerspectiveItem | null>(null);

  const perspectives = [
    {
      id: 'business',
      title: 'Business',
      icon: Briefcase,
      skills: 'Strategy • Product Thinking • Business Analysis • UX',
      quote: '"Understanding people before building solutions."',
      colorClass: 'text-[#001bb7]',
      bgClass: 'bg-[#001bb7]/10',
      borderClass: 'border-slate-200 hover:border-[#001bb7]',
      details: 'Applying structured frameworks to identify customer pain points, perform market sizing, refine product-market fit, and streamline business processes.',
    },
    {
      id: 'technology',
      title: 'Technology',
      icon: Cpu,
      skills: 'AI • Engineering • Product Development',
      quote: '"Turning ideas into products."',
      colorClass: 'text-[#b20982]',
      bgClass: 'bg-[#b20982]/10',
      borderClass: 'border-slate-200 hover:border-[#b20982]',
      details: 'Building modern full-stack web applications with React, Express, Cohere AI, FinBERT, RAG pipelines, Supabase, and PostgreSQL.',
    },
    {
      id: 'research',
      title: 'Research',
      icon: Microscope,
      skills: 'Curiosity • Evidence • Continuous Learning',
      quote: '"Curiosity guided by evidence."',
      colorClass: 'text-[#d97706]',
      bgClass: 'bg-[#fef3c7]',
      borderClass: 'border-slate-200 hover:border-[#d97706]',
      details: 'Synthesizing market intelligence, NLP sentiment metrics for financial forecasting (ICECH 2026), and computational thinking diagnostics.',
    },
    {
      id: 'community',
      title: 'Community',
      icon: Users,
      skills: 'Leadership • Service • Events • Impact',
      quote: '"Growing through people."',
      colorClass: 'text-[#0284c7]',
      bgClass: 'bg-[#e0f2fe]',
      borderClass: 'border-slate-200 hover:border-[#0284c7]',
      details: 'Directing volunteer teams across PFC, Hyundai Jump School, Green Summer, and international cultural exchange initiatives.',
    },
  ];

  return (
    <section id="intersection" className="min-h-screen w-full flex flex-col justify-center py-16 md:py-24 bg-[#001bb7] text-white relative">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 w-full">
        {/* Title Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-montserrat text-3xl md:text-5xl font-black text-white tracking-tight">
            Four Perspectives. One Purpose.
          </h2>
          <p className="text-white/90 font-be-vietnam text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            I don't define myself by a single role. I see myself at the intersection of four disciplines that shape how I think, build, and grow.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {perspectives.map((p) => {
            const isSelected = selectedPerspective?.id === p.id;
            const IconComponent = p.icon;
            return (
              <div
                key={p.id}
                onClick={() => setSelectedPerspective(isSelected ? null : (p as any))}
                className={`bg-white rounded-3xl p-7 shadow-lg border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-2.5 ${p.borderClass} ${
                  isSelected ? 'ring-4 ring-white shadow-2xl scale-102' : ''
                }`}
              >
                <div>
                  <div className={`w-14 h-14 ${p.bgClass} ${p.colorClass} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className={`font-montserrat text-2xl font-black mb-3 ${p.colorClass}`}>
                    {p.title}
                  </h3>

                  <p className="text-slate-600 font-be-vietnam text-sm mb-6 leading-relaxed font-medium">
                    {p.skills}
                  </p>
                </div>

                <div>
                  <p className="text-slate-900 font-montserrat text-xs italic font-bold border-t border-slate-100 pt-4">
                    {p.quote}
                  </p>
                  <button className={`mt-4 text-xs font-black font-montserrat flex items-center gap-1.5 ${p.colorClass} group-hover:underline`}>
                    {isSelected ? 'Hide details' : 'Explore scope'}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Drawer on Card Selection */}
        {selectedPerspective && (
          <div className="mt-10 p-8 bg-white text-slate-900 border-2 border-white rounded-3xl shadow-2xl animate-fadeIn space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#001bb7]" />
                <h4 className="font-montserrat font-black text-xl text-[#001bb7]">
                  Deep Dive: {selectedPerspective.title} Perspective
                </h4>
              </div>
              <button
                onClick={() => setSelectedPerspective(null)}
                className="text-xs font-black uppercase tracking-wider text-slate-500 hover:text-black px-3 py-1 bg-slate-100 rounded-lg"
              >
                Close ✕
              </button>
            </div>
            <p className="font-be-vietnam text-base text-slate-700 leading-relaxed font-medium">
              {selectedPerspective.details}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
