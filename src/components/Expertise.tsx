import React, { useState } from 'react';
import { TrendingUp, Code, BarChart2, HeartHandshake, ExternalLink, Check } from 'lucide-react';

export const Expertise: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const techStackList = [
    { name: 'React + Vite', category: 'Frontend', desc: 'Component architecture, state management, fast client side rendering.' },
    { name: 'Express + Node.js', category: 'Backend', desc: 'RESTful API routing, server-side Gemini/Cohere proxy, middleware.' },
    { name: 'PostgreSQL', category: 'Database', desc: 'Relational data modeling, ACID transactions, complex SQL queries.' },
    { name: 'Supabase', category: 'Cloud/DB', desc: 'Realtime database synchronization, auth rules, row-level security.' },
    { name: 'Cohere AI', category: 'AI/LLM', desc: 'Embeddings generation, reranking, contextual semantic search.' },
    { name: 'RAG Architecture', category: 'AI Pipeline', desc: 'Vector retrieval augmented generation for healthcare & clinical knowledge bases.' },
    { name: 'FinBERT', category: 'NLP/Finance', desc: 'Financial domain sentiment scoring for time-series forecasting models.' },
    { name: 'Tailwind CSS', category: 'Styling', desc: 'Utility-first responsive layouts with custom design system design tokens.' },
  ];

  return (
    <section id="expertise" className="py-20 bg-[#f3f4f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#c5c5d7] pb-6">
          <div>
            <div className="inline-block px-3 py-1 bg-[#001bb7]/10 text-[#001bb7] rounded-full font-montserrat text-xs font-bold mb-2">
              DEEP DIVES
            </div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-[#001bb7]">
              Core Expertise & Experience
            </h2>
          </div>
          <p className="font-be-vietnam text-sm text-[#454655] max-w-md">
            Combining strategic domain analysis with hands-on AI software implementation and academic research.
          </p>
        </div>

        {/* First Row: Business Strategy & Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Business Strategy */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-2xl font-bold text-[#001bb7] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#001bb7]">trending_up</span>
              Business Strategy
            </h3>
            <p className="font-be-vietnam text-base text-[#454655] leading-relaxed">
              Business helps me identify problems and transform ideas into products. Rather than asking "What can we build?", I prefer asking "What problem are we solving?"
            </p>

            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-montserrat font-bold text-[#001bb7] text-base">
                  AI Clinic Operations Assistant
                </h4>
                <span className="text-xs font-montserrat font-semibold px-2.5 py-1 bg-[#001bb7]/10 text-[#001bb7] rounded-full">
                  Healthcare Ops
                </span>
              </div>
              <ul className="text-[#454655] font-be-vietnam text-sm space-y-2 list-none pt-1">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#001bb7] mt-0.5 shrink-0" />
                  <span>Analyzed healthcare operational workflows and patient journey bottlenecks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#001bb7] mt-0.5 shrink-0" />
                  <span>Designed AI-assisted business processes to structure clinical treatment guidelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#001bb7] mt-0.5 shrink-0" />
                  <span>Built end-to-end user journeys and intuitive conversation flows for clinic staff.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-2xl font-bold text-[#b20982] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#b20982]">code</span>
              Tech Stack
            </h3>
            <p className="font-be-vietnam text-base text-[#454655] leading-relaxed">
              Technology is the bridge between ideas and reality. I enjoy transforming concepts into working applications.
            </p>

            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <span className="text-xs font-montserrat uppercase font-bold text-[#b20982]">
                Click technology tag to view detail:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {techStackList.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveTech(activeTech === item.name ? null : item.name)}
                    className={`px-3.5 py-1.5 rounded-full font-montserrat font-semibold text-xs border transition-all ${
                      activeTech === item.name
                        ? 'bg-[#b20982] text-white border-[#b20982] shadow-sm scale-105'
                        : 'bg-white border-[#b20982]/30 text-[#b20982] hover:bg-[#b20982]/5'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              {activeTech && (
                <div className="p-3 bg-[#b20982]/10 border border-[#b20982]/30 rounded-xl text-xs font-be-vietnam text-[#191c1d] animate-fadeIn">
                  <span className="font-montserrat font-bold text-[#b20982]">
                    {activeTech} ({techStackList.find((t) => t.name === activeTech)?.category}):{' '}
                  </span>
                  {techStackList.find((t) => t.name === activeTech)?.desc}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Second Row: Research & Community */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-4">
          {/* Research */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-2xl font-bold text-[#656100] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#656100]">analytics</span>
              Evidence-Based Research
            </h3>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <div className="p-4 bg-[#f1e800]/10 border border-[#b6b000]/30 rounded-xl space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-montserrat font-bold text-xs text-[#656100] uppercase tracking-wider">
                    ICECH 2026 Research Paper
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-[#656100] text-white rounded-full">
                    ACCEPTED
                  </span>
                </div>
                <p className="text-[#191c1d] font-montserrat font-bold text-base">
                  Mixing Words and Numbers: Bitcoin Forecasting
                </p>
                <p className="text-[#454655] font-be-vietnam text-sm">
                  Utilizing FinBERT sentiment analysis and machine learning for time-series market price forecasting.
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <h4 className="font-montserrat font-bold text-xs text-[#656100] uppercase tracking-wider mb-1">
                  BEBRAS Research Project
                </h4>
                <p className="text-[#454655] font-be-vietnam text-sm">
                  Research Assistant for computational thinking and educational analytics under guidance of Dr. Emmanuel Plan.
                </p>
              </div>
            </div>
          </div>

          {/* Community & Leadership */}
          <div className="space-y-4">
            <h3 className="font-montserrat text-2xl font-bold text-[#001bb7] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#001bb7]">volunteer_activism</span>
              Community & Leadership
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#001bb7]/40 transition-colors">
                <p className="font-montserrat font-bold text-sm text-[#001bb7]">
                  Vice Project Director
                </p>
                <p className="text-[#454655] font-be-vietnam text-xs mt-1">
                  Project For Children (PFC)
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#001bb7]/40 transition-colors">
                <p className="font-montserrat font-bold text-sm text-[#001bb7]">
                  Event Director
                </p>
                <p className="text-[#454655] font-be-vietnam text-xs mt-1">
                  Youth Opportunities VN
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#001bb7]/40 transition-colors">
                <p className="font-montserrat font-bold text-sm text-[#001bb7]">
                  Social Impact
                </p>
                <p className="text-[#454655] font-be-vietnam text-xs mt-1">
                  Hyundai Jump School
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-[#001bb7]/40 transition-colors">
                <p className="font-montserrat font-bold text-sm text-[#001bb7]">
                  Cultural Exchange
                </p>
                <p className="text-[#454655] font-be-vietnam text-xs mt-1">
                  Multicultural Ambassador
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
