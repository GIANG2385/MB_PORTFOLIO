import React, { useState } from 'react';
import { ExternalLink, X, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';
import pangPangImg from '../assets/projects/pang-pang.jpg';
import aegisImg from '../assets/projects/aegis.jpg';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const projectsList: ProjectItem[] = [
    {
      id: 'pang-pang',
      number: '01',
      title: 'Pang Pang SmartOps',
      subtitle: 'AI-Powered Restaurant Operations Platform',
      meta: 'Personal Project · 2026',
      role: 'Full Stack',
      link: 'https://github.com/GIANG2385/FINAL',
      image: pangPangImg,
      description:
        'Pang Pang SmartOps is an AI-powered restaurant operations platform covering ordering, kitchen operations, inventory, reservations, and loyalty. The platform provides restaurant managers with a centralized view of operational performance and real-time insights.',
      responsibilities: [
        'Designed and developed the full-stack system.',
        'Designed the relational database and role-based access control.',
        'Built core restaurant management workflows across ordering, kitchen, inventory, reservations, and loyalty.',
        'Integrated an AI chatbot with live operational data.',
        'Implemented automated anomaly detection for operational issues.',
      ],
      challenges:
        'Restaurant managers often need to monitor multiple operational areas simultaneously, making it difficult to identify problems and understand their impact quickly. The challenge was not simply building multiple features, but connecting them into one system that could turn operational data into actionable information.',
      outcomeProject: [
        'Delivered a production-ready restaurant management platform.',
        'Centralized operational information across key restaurant functions.',
        'Added automated alerts for inventory shortages, kitchen overload, staffing issues, and revenue deviations.',
        'Enabled an AI assistant to interact with live operational data.',
      ],
      outcomeMe: [
        'Strengthened my full-stack development and database design skills.',
        'Learned how different business processes need to work together within one product.',
        'Gained practical experience integrating AI into an actual business workflow.',
      ],
      lessonLearned:
        'Building a product is not about adding more features. It is about making different pieces work together to solve one real problem.',
    },
    {
      id: 'aegis',
      number: '02',
      title: 'Aegis',
      subtitle: 'AI Clinic Operations Assistant',
      meta: 'Team Project · Jul 2026',
      role: 'Business Analyst',
      link: 'https://aegis-care-one.vercel.app/',
      image: aegisImg,
      description:
        'Aegis is an AI-powered clinic operations assistant integrated with CRM/HIS to optimize clinical workflows through AI-assisted knowledge retrieval, patient record summarization, and workflow support.',
      responsibilities: [
        'Gathered and analyzed business requirements from healthcare workflows.',
        'Translated requirements into BRDs, User Stories, Use Cases, Functional Specifications, and workflow diagrams.',
        'Modeled clinical processes and identified workflow improvement opportunities.',
        'Collaborated with Product, UI/UX, and Developers to ensure requirement feasibility and implementation quality.',
        'Supported UAT, analyzed user feedback, and proposed feature improvements.',
      ],
      challenges:
        'Healthcare workflows involve multiple stakeholders, complex processes, and sensitive information. The challenge was to translate these operational complexities into requirements that were clear enough for development while remaining aligned with actual user needs. A second challenge was identifying where AI could genuinely improve the workflow instead of adding unnecessary complexity.',
      outcomeProject: [
        'Converted complex clinical workflows into structured and actionable product requirements.',
        'Established clear documentation and process models for product development.',
        'Supported the team in validating features through UAT and user feedback.',
        'Identified opportunities for AI-assisted knowledge retrieval, record summarization, and workflow support.',
      ],
      outcomeMe: [
        'Developed practical Business Analysis experience in a real-world AI product environment.',
        'Improved my ability to communicate between business stakeholders, Product, UI/UX, and Developers.',
        'Learned how to evaluate requirements from both the user perspective and implementation perspective.',
      ],
      lessonLearned:
        'A good BA does not simply document what users ask for. A good BA understands the problem behind the request.',
    },
    {
      id: 'bitcoin-research',
      number: '03',
      title: 'Research',
      subtitle: 'Mixing Words and Numbers: Can Sentiment Analysis Improve Bitcoin Forecasting?',
      meta: 'Research Project · ICECH 2026',
      role: 'Researcher',
      link: '',
      description:
        'An academic research project exploring whether combining market sentiment with technical indicators can improve Bitcoin forecasting. The research integrates quantitative market data with sentiment signals to capture both numerical and behavioral aspects of financial markets.',
      responsibilities: [
        'Conducted literature review and identified research gaps.',
        'Worked with historical Bitcoin market and sentiment datasets.',
        'Performed data preprocessing and feature engineering.',
        'Explored machine learning and deep learning approaches.',
        'Contributed to model evaluation and interpretation.',
        'Contributed to the research manuscript.',
      ],
      challenges:
        'Financial markets are highly volatile and influenced by both measurable market signals and human behavior. The main challenge was determining whether sentiment provided meaningful additional predictive information rather than simply adding more variables to the model.',
      outcomeProject: [
        'Developed a framework combining technical indicators and sentiment analysis.',
        'Contributed to an academic paper accepted at ICECH 2026.',
        'Demonstrated an interdisciplinary approach combining finance, behavioral signals, and machine learning.',
      ],
      outcomeMe: [
        'Strengthened my ability to work with complex datasets and machine learning methods.',
        'Developed a more rigorous approach to evaluating evidence and model performance.',
        'Learned how to turn an ambiguous research question into a structured, testable problem.',
      ],
      lessonLearned:
        'More data does not necessarily mean more insight. The value comes from understanding which signals actually matter.',
    },
  ];

  return (
    <section id="projects" className="w-full flex flex-col justify-center py-12 md:py-16 bg-[#f0f4f8]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 w-full">
        {/* Title Header */}
        <div className="text-center mb-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-black text-[#0f172a] tracking-tight">
            Projects
          </h2>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {/* Top Row: Pang Pang & Aegis side by side, each with a cover image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[projectsList[0], projectsList[1]].map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {project.image && (
                  <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="font-montserrat text-3xl font-black text-[#001bb7]/15 group-hover:text-[#001bb7]/25 transition-colors">
                      {project.number}
                    </span>
                    <h3 className="font-montserrat text-xl font-black text-[#0f172a] mt-2 mb-1 group-hover:text-[#001bb7] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-be-vietnam text-sm font-semibold text-[#475569] mb-3">
                      {project.subtitle}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-2.5 py-0.5 bg-[#001bb7]/10 text-[#001bb7] rounded-lg font-montserrat text-[11px] font-bold">
                        {project.meta}
                      </span>
                      <span className="px-2.5 py-0.5 bg-slate-100 text-[#475569] rounded-lg font-montserrat text-[11px] font-bold">
                        {project.role}
                      </span>
                    </div>
                    <p className="font-be-vietnam text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <span className="mt-5 font-montserrat font-bold text-xs sm:text-sm text-[#001bb7] inline-flex items-center gap-2 pt-4 border-t border-slate-100">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: Bitcoin Research, no image, full width */}
          {(() => {
            const project = projectsList[2];
            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <span className="font-montserrat text-3xl font-black text-[#001bb7]/15 group-hover:text-[#001bb7]/25 transition-colors">
                      {project.number}
                    </span>
                    <h3 className="font-montserrat text-xl font-black text-[#0f172a] mt-2 mb-1 group-hover:text-[#001bb7] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-be-vietnam text-sm font-semibold text-[#475569] mb-3">
                      {project.subtitle}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="px-2.5 py-0.5 bg-[#001bb7]/10 text-[#001bb7] rounded-lg font-montserrat text-[11px] font-bold">
                        {project.meta}
                      </span>
                      <span className="px-2.5 py-0.5 bg-slate-100 text-[#475569] rounded-lg font-montserrat text-[11px] font-bold">
                        {project.role}
                      </span>
                    </div>
                    <p className="font-be-vietnam text-xs sm:text-sm text-[#475569] leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  <span className="shrink-0 font-montserrat font-bold text-xs sm:text-sm text-[#001bb7] inline-flex items-center gap-2 md:pl-6 md:border-l border-slate-100 md:self-stretch">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Project Detail Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
              {/* Modal Top Banner */}
              <div className="p-6 bg-[#001bb7] text-white flex justify-between items-start">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-2 font-montserrat">
                    {activeProject.meta}
                  </span>
                  <h3 className="font-montserrat text-2xl font-bold">{activeProject.title}</h3>
                  <p className="text-white/80 font-be-vietnam text-sm mt-1">
                    {activeProject.subtitle}
                  </p>
                  <p className="text-white/60 font-be-vietnam text-xs mt-1">
                    Role: {activeProject.role}
                  </p>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-5 font-be-vietnam text-sm text-[#191c1d]">
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-montserrat font-bold text-xs text-[#001bb7] hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Project Link
                  </a>
                )}

                <div className="space-y-1">
                  <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#001bb7]">
                    Description
                  </h4>
                  <p className="text-[#454655] leading-relaxed">{activeProject.description}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#001bb7]">
                    Responsibilities
                  </h4>
                  <ul className="space-y-1.5">
                    {activeProject.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#001bb7] mt-0.5 shrink-0" />
                        <span className="text-[#454655] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1">
                  <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#b20982]">
                    Challenges
                  </h4>
                  <p className="text-[#454655] leading-relaxed">{activeProject.challenges}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#191c1d]">
                    Outcome
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-[#001bb7]/5 border-l-4 border-[#001bb7] rounded-r-lg space-y-1.5">
                      <span className="font-montserrat font-bold text-xs text-[#001bb7]">For the Project</span>
                      <ul className="space-y-1">
                        {activeProject.outcomeProject.map((item, idx) => (
                          <li key={idx} className="text-xs text-[#454655] leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-[#b20982]/5 border-l-4 border-[#b20982] rounded-r-lg space-y-1.5">
                      <span className="font-montserrat font-bold text-xs text-[#b20982]">For Me</span>
                      <ul className="space-y-1">
                        {activeProject.outcomeMe.map((item, idx) => (
                          <li key={idx} className="text-xs text-[#454655] leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#f8f9fa] rounded-xl border border-gray-100 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#001bb7] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-montserrat font-bold text-xs text-[#001bb7] block mb-1">
                      Lesson Learned
                    </span>
                    <p className="italic text-xs text-[#454655]">"{activeProject.lessonLearned}"</p>
                  </div>
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
