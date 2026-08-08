import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(3); // Default AI Product Manager highlighted

  const roadmapSteps = [
    {
      id: 0,
      role: 'Today',
      icon: 'person',
      subtitle: 'VNU HSB Student & Kinetic Ambassador',
      details:
        'Building core foundations across Business Strategy, FinBERT research, RAG software pipelines, and campus leadership.',
    },
    {
      id: 1,
      role: 'Business Analyst',
      icon: 'query_stats',
      subtitle: 'Process & Requirements Engineer',
      details:
        'Structuring business requirements, mapping user journeys, optimizing database schemas, and evaluating market product fit.',
    },
    {
      id: 2,
      role: 'AI Product Owner',
      icon: 'psychology',
      subtitle: 'AI Capability Integrator',
      details:
        'Owning AI product backlogs, fine-tuning RAG vector pipelines, and designing human-AI conversation flows.',
    },
    {
      id: 3,
      role: 'AI Product Manager',
      icon: 'stars',
      subtitle: 'Strategic Product Leader',
      details:
        'Leading cross-functional engineering and design teams to build human-centric AI platforms serving millions of users.',
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center py-16 md:py-24 bg-[#001bb7] text-white relative">
      <div className="max-w-[1360px] mx-auto px-6 text-center w-full">
        <div className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full font-montserrat text-xs font-black tracking-widest uppercase border border-white/20 mb-3">
          CAREER TRAJECTORY
        </div>

        <h2 className="font-montserrat text-3xl md:text-5xl font-black text-white tracking-tight mb-12">
          Roadmap to the Future
        </h2>

        {/* Roadmap Items Horizontal Layout */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-6">
          {roadmapSteps.map((step, idx) => {
            const isSelected = activeStep === step.id;
            return (
              <React.Fragment key={step.id}>
                <div
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center cursor-pointer group transition-all"
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-all duration-300 mb-3 ${
                      isSelected
                        ? 'bg-white text-[#001bb7] shadow-2xl ring-4 ring-white/40 scale-110 font-bold'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 group-hover:scale-105'
                    }`}
                  >
                    <span className="material-symbols-outlined text-3xl md:text-4xl">
                      {step.icon}
                    </span>
                  </div>
                  <span
                    className={`font-montserrat text-sm md:text-base font-bold ${
                      isSelected ? 'text-white underline underline-offset-4 decoration-2' : 'text-white/80 group-hover:text-white'
                    }`}
                  >
                    {step.role}
                  </span>
                </div>

                {idx < roadmapSteps.length - 1 && (
                  <span className="material-symbols-outlined text-white/40 hidden md:block text-2xl">
                    arrow_forward
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Active Role Card Details */}
        {activeStep !== null && (
          <div className="mt-12 p-8 bg-white text-slate-900 border-2 border-white rounded-3xl shadow-2xl max-w-xl mx-auto text-left animate-fadeIn space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="font-montserrat font-black text-xs uppercase text-[#001bb7] tracking-wider">
                Phase Milestone: {roadmapSteps[activeStep].role}
              </span>
              <Sparkles className="w-5 h-5 text-[#001bb7]" />
            </div>
            <p className="font-montserrat font-extrabold text-xl text-slate-900">
              {roadmapSteps[activeStep].subtitle}
            </p>
            <p className="font-be-vietnam text-sm text-slate-700 leading-relaxed font-medium">
              {roadmapSteps[activeStep].details}
            </p>
          </div>
        )}

        <blockquote className="mt-12 font-be-vietnam text-base md:text-lg text-white/90 italic max-w-2xl mx-auto font-light">
          "Every experience today is one step toward creating technology that serves people better tomorrow."
        </blockquote>
      </div>
    </section>
  );
};
