import React, { useState } from 'react';
import { Target, CheckCircle2, ChevronRight, Bookmark } from 'lucide-react';
import { ActionPlanStep } from '../types';

export const ActionPlan: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  const steps: ActionPlanStep[] = [
    {
      stepNumber: 1,
      phase: 'LEARN',
      title: 'Master MB Ecosystem & Culture',
      description:
        'Deeply absorb MB’s digital products, strategic goals, and ambassador principles to serve as an authoritative, trusted student voice.',
      targets: [
        'Complete all MB digital product onboarding modules.',
        'Interview 5+ senior MB product managers and alumni.',
        'Document core banking feature breakdowns for students.',
      ],
      status: 'In Progress',
    },
    {
      stepNumber: 2,
      phase: 'ENGAGE',
      title: 'Authentic Campus Outreach',
      description:
        'Connect directly with students across VNU HSB and Hanoi universities through interactive workshops, club events, and digital campaigns.',
      targets: [
        'Reach 10,000+ students through campus workshops.',
        'Partner with 8+ university academic & tech clubs.',
        'Host 3 live Q&A webinars on Fintech careers & AI.',
      ],
      status: 'Planned',
    },
    {
      stepNumber: 3,
      phase: 'CREATE',
      title: 'High-Impact Content Publishing',
      description:
        'Produce high-value educational content demystifying Artificial Intelligence, Modern Banking, and Student Productivity.',
      targets: [
        'Publish 2-3 weekly articles and video breakdowns.',
        'Create infographic guides on AI tools for finance.',
        'Build interactive case study decks for students.',
      ],
      status: 'Planned',
    },
    {
      stepNumber: 4,
      phase: 'LEAD',
      title: 'Sustainable Student Community',
      description:
        'Establish an enduring network of student innovators and future AI creators that continues growing far beyond the ambassador program timeline.',
      targets: [
        'Form the MB Youth Innovation Chapter at VNU HSB.',
        'Mentor junior students in hackathons and business contests.',
        'Handover sustainable operational guidelines for the next cohort.',
      ],
      status: 'Planned',
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center py-12 md:py-16 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Why MB Pioneer */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-[#001bb7]/10 text-[#001bb7] rounded-full font-montserrat text-xs font-bold">
              AMBASSADOR VISION
            </div>

            <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-[#001bb7]">
              Why MB Pioneer Ambassador?
            </h2>

            <p className="font-be-vietnam text-base md:text-lg text-[#454655] leading-relaxed">
              MB represents more than digital banking. It represents a culture that embraces innovation and continuous learning. I want to contribute my experiences in AI, research, and leadership to a community that challenges one another to keep creating value.
            </p>

            <div className="p-6 bg-[#001bb7] text-white rounded-2xl shadow-lg space-y-2 border border-[#001bb7]/30">
              <span className="font-montserrat text-xs font-bold text-[#909cff] uppercase tracking-wider block">
                Core Ambition:
              </span>
              <p className="font-be-vietnam text-base sm:text-lg italic leading-relaxed">
                "I don't want to simply represent MB. I want to become a bridge that connects students with opportunities and inspires lasting impact."
              </p>
            </div>
          </div>

          {/* Right Column: 4-Phase Action Plan */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-montserrat text-3xl md:text-4xl font-extrabold text-[#b20982]">
                My 4-Phase Action Plan
              </h2>
            </div>

            <div className="space-y-4">
              {steps.map((step) => {
                const isExpanded = expandedStep === step.stepNumber;
                return (
                  <div
                    key={step.stepNumber}
                    onClick={() => setExpandedStep(isExpanded ? null : step.stepNumber)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isExpanded
                        ? 'bg-[#f3f4f5] border-[#b20982] shadow-sm'
                        : 'bg-white border-gray-200 hover:border-[#b20982]/40'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 shrink-0 bg-[#b20982]/10 text-[#b20982] rounded-full flex items-center justify-center font-montserrat font-extrabold text-lg">
                        {step.stepNumber}
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h4 className="font-montserrat font-bold text-[#b20982] text-sm uppercase tracking-wider">
                            {step.phase}: {step.title}
                          </h4>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              step.status === 'In Progress'
                                ? 'bg-[#001bb7] text-white'
                                : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            {step.status}
                          </span>
                        </div>

                        <p className="text-[#454655] font-be-vietnam text-sm mt-1">
                          {step.description}
                        </p>

                        {isExpanded && (
                          <div className="mt-4 pt-3 border-t border-gray-200 space-y-2 animate-fadeIn">
                            <span className="font-montserrat font-bold text-xs text-[#001bb7] block">
                              Key Key Performance Indicators (KPIs):
                            </span>
                            <ul className="space-y-1 font-be-vietnam text-xs text-[#454655]">
                              {step.targets.map((target, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b20982] shrink-0" />
                                  <span>{target}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
