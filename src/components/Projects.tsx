import React, { useState } from 'react';
import { ExternalLink, X, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const projectsList: ProjectItem[] = [
    {
      id: 'clinic-ai',
      title: 'AI Clinic Operations Assistant',
      tag: 'HEALTHTECH',
      category: 'healthcare',
      description:
        'A streamlined solution for small clinic management, integrating intelligent patient routing and automated administrative task handling.',
      learning:
        'Great AI products begin by understanding medical workflows before designing intelligent systems.',
      tagBg: 'bg-black/80',
      tagColor: 'text-white',
      accentBorder: 'hover:border-[#0284c7]/50',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      badges: ['HEALTHTECH', 'AI'],
      challenge: 'Manual patient flow management causing 30%+ wait time delays.',
      impact: 'Reduced administrative overhead by 40% in initial pilot runs.',
      details: {
        problem:
          'Medical staff spent hours manually searching scattered paper and PDF records to compile treatment histories and protocols.',
        solution:
          'Built a vector-indexed RAG copilot parsing clinical notes and guidelines into an intelligent query interface with strict privacy constraints.',
        techStack: ['React', 'Express', 'Cohere AI RAG', 'PostgreSQL', 'Tailwind CSS'],
        role: 'AI Product Lead & Business Workflow Designer',
        metrics: 'Reduced protocol search time from 15 minutes to under 10 seconds.',
      },
    },
    {
      id: 'pang-pang',
      title: 'Pang Pang SmartOps AI',
      tag: 'SMARTOPS',
      category: 'fullstack',
      description:
        'A robust warehouse and logistics automation platform built with React and Node.js to optimize supply chain visibility.',
      learning:
        'The critical importance of scalability in real-time data architectures.',
      tagBg: 'bg-black/80',
      tagColor: 'text-white',
      accentBorder: 'hover:border-[#0284c7]/50',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      badges: ['SMARTOPS', 'FULL-STACK'],
      techTags: ['React', 'Node.js', 'TensorFlow', 'PostgreSQL'],
      lessonLearned: 'The critical importance of scalability in real-time data architectures.',
      details: {
        problem:
          'Local restaurant and retail warehouse chains faced inventory leaks, chaotic order handoffs, and lack of shift forecasting.',
        solution:
          'Developed a web platform linking kitchen displays with inventory databases and predictive order suggestions.',
        techStack: ['React + Vite', 'Express', 'Supabase', 'Node.js', 'Tailwind CSS'],
        role: 'Full-Stack Developer & UX Architect',
        metrics: 'Improved peak-hour order turnaround efficiency by 30%.',
      },
    },
    {
      id: 'bitcoin-forecasting',
      title: 'Bitcoin Forecasting Research: Predictive Analytics',
      tag: 'Publication',
      category: 'fintech',
      description:
        'Developing hybrid LSTM-based models for high-frequency trading signal analysis. Bridging technical volatility with institutional risk management strategies.',
      learning:
        'Research strengthened my ability to approach market uncertainty through evidence and quantitative experimentation.',
      tagBg: 'bg-[#0284c7]',
      tagColor: 'text-white',
      accentBorder: 'border-l-4 border-l-[#0284c7]',
      venue: 'ICECH 2026 (Forthcoming)',
      details: {
        problem:
          'Traditional quantitative financial models struggle with unexpected market volatility driven by news sentiment.',
        solution:
          'Engineered a hybrid model combining FinBERT sentiment scores from 10,000+ financial headlines with quantitative technical indicators.',
        techStack: ['Python', 'FinBERT', 'Machine Learning', 'Time-Series Analysis'],
        role: 'Lead Researcher & Data Analyst',
        metrics: 'Accepted for presentation and publication at ICECH 2026 Conference.',
      },
    },
  ];

  return (
    <section id="projects" className="w-full flex flex-col justify-center py-12 md:py-16 bg-[#f0f4f8]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 w-full">
        {/* Title Header */}
        <div className="text-center mb-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-black text-[#0f172a] tracking-tight">
            Building with Purpose
          </h2>
        </div>

        {/* Top 2 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Card 1: AI Clinic Operations Assistant */}
          <div
            onClick={() => setActiveProject(projectsList[0])}
            className="group bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={projectsList[0].image}
                  alt={projectsList[0].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {projectsList[0].badges?.map((badge) => (
                    <span
                      key={badge}
                      className="bg-black/80 backdrop-blur-md text-white font-montserrat text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6">
                <h3 className="font-montserrat text-xl sm:text-2xl font-black text-[#0f172a] mb-2 group-hover:text-[#001bb7] transition-colors">
                  {projectsList[0].title}
                </h3>
                <p className="font-be-vietnam text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  {projectsList[0].description}
                </p>

                {/* Challenge & Impact Columns */}
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100">
                  <div>
                    <h4 className="font-montserrat font-extrabold text-xs text-[#0f172a] mb-1">
                      Challenge
                    </h4>
                    <p className="font-be-vietnam text-xs text-[#64748b] leading-normal">
                      {projectsList[0].challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-extrabold text-xs text-[#0f172a] mb-1">
                      Impact
                    </h4>
                    <p className="font-be-vietnam text-xs text-[#64748b] leading-normal">
                      {projectsList[0].impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Link */}
            <div className="px-5 sm:px-6 pb-5 pt-0">
              <span className="font-montserrat font-bold text-xs sm:text-sm text-[#001bb7] group-hover:text-[#001bb7] inline-flex items-center gap-2">
                View Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Card 2: Pang Pang SmartOps AI */}
          <div
            onClick={() => setActiveProject(projectsList[1])}
            className="group bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={projectsList[1].image}
                  alt={projectsList[1].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {projectsList[1].badges?.map((badge) => (
                    <span
                      key={badge}
                      className="bg-black/80 backdrop-blur-md text-white font-montserrat text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6">
                <h3 className="font-montserrat text-xl sm:text-2xl font-black text-[#0f172a] mb-2 group-hover:text-[#001bb7] transition-colors">
                  {projectsList[1].title}
                </h3>
                <p className="font-be-vietnam text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                  {projectsList[1].description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {projectsList[1].techTags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-[#001bb7]/10 text-[#001bb7] rounded-lg font-montserrat text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Lesson Learned Highlight Box */}
                <div className="p-3 bg-[#f0f7ff] rounded-xl border border-[#e0f2fe]">
                  <h4 className="font-montserrat font-extrabold text-xs text-[#0f172a] mb-0.5">
                    Lesson Learned
                  </h4>
                  <p className="font-be-vietnam text-xs text-[#475569] leading-relaxed">
                    {projectsList[1].lessonLearned}
                  </p>
                </div>
              </div>
            </div>

            {/* Link */}
            <div className="px-5 sm:px-6 pb-5 pt-0">
              <span className="font-montserrat font-bold text-xs sm:text-sm text-[#001bb7] group-hover:text-[#001bb7] inline-flex items-center gap-2">
                Github Repository
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Full-Width Card: Bitcoin Forecasting Research */}
        <div
          onClick={() => setActiveProject(projectsList[2])}
          className="group bg-white rounded-2xl shadow-sm border-2 border-[#001bb7]/40 p-5 sm:p-6 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 cursor-pointer relative overflow-hidden"
        >
          {/* Subtle Accent Side Bar */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#001bb7]"></div>

          <div className="flex items-start md:items-center gap-4 pl-2">
            {/* Circular Trend Icon */}
            <div className="w-12 h-12 rounded-full bg-[#001bb7]/10 text-[#001bb7] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>

            <div>
              {/* Top Tags */}
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#001bb7] text-white font-montserrat text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  Publication
                </span>
                <span className="font-montserrat font-bold text-xs text-[#475569]">
                  {projectsList[2].venue}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-montserrat text-lg sm:text-xl font-black text-[#0f172a] mb-1 group-hover:text-[#001bb7] transition-colors">
                {projectsList[2].title}
              </h3>
              <p className="font-be-vietnam text-xs sm:text-sm text-[#475569] max-w-3xl leading-relaxed">
                {projectsList[2].description}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="self-end md:self-center shrink-0">
            <button className="bg-[#090d16] text-white font-montserrat font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl hover:bg-black transition-all shadow-md group-hover:scale-105 active:scale-95">
              Read Abstract
            </button>
          </div>
        </div>

        {/* Project Detail Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
              {/* Modal Top Banner */}
              <div className="p-6 bg-[#001bb7] text-white flex justify-between items-start">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-2 font-montserrat">
                    {activeProject.tag}
                  </span>
                  <h3 className="font-montserrat text-2xl font-bold">{activeProject.title}</h3>
                  <p className="text-white/80 font-be-vietnam text-xs mt-1">
                    Role: {activeProject.details.role}
                  </p>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5 font-be-vietnam text-sm text-[#191c1d]">
                <div className="space-y-1">
                  <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#001bb7]">
                    Problem Statement
                  </h4>
                  <p className="text-[#454655] leading-relaxed">{activeProject.details.problem}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#b20982]">
                    Solution & Engineering Approach
                  </h4>
                  <p className="text-[#454655] leading-relaxed">{activeProject.details.solution}</p>
                </div>

                {activeProject.details.metrics && (
                  <div className="p-3 bg-[#001bb7]/5 border-l-4 border-[#001bb7] rounded-r-lg">
                    <span className="font-montserrat font-bold text-xs text-[#001bb7] uppercase">Key Impact Metric: </span>
                    <span className="font-be-vietnam text-xs text-[#191c1d]">{activeProject.details.metrics}</span>
                  </div>
                )}

                <div>
                  <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#191c1d] mb-2">
                    Technologies Employed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.details.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#f3f4f5] text-[#001bb7] rounded-md font-montserrat text-xs font-semibold border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#f8f9fa] rounded-xl border border-gray-100">
                  <span className="font-montserrat font-bold text-xs text-[#001bb7] block mb-1">
                    Core Philosophy Takeaway:
                  </span>
                  <p className="italic text-xs text-[#454655]">{activeProject.learning}</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setActiveProject(null)}
                  className="bg-[#001bb7] text-white px-6 py-2 rounded-lg font-montserrat text-xs font-semibold hover:bg-[#001080] transition-colors"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
