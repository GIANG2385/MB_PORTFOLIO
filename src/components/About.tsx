import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const [selectedStat, setSelectedStat] = useState<'education' | 'performance' | null>(null);

  return (
    <section id="about" className="min-h-screen w-full flex flex-col justify-center py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Visual background diagonal accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#001bb7]/5 diagonal-bg -z-10 pointer-events-none"></div>

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Side Image */}
        <div className="md:col-span-5 relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-8 border-white bg-white group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvTDuybpevNMbLt-HyQSLDL4-OuiLx8lrsJL-i2TbAdn4a9cKsqJ_IA4ywWIaHasxN9owre0aiAmAoP2DIJ-AztqfWF7AooLO5Ek0KOFRquGm5CluwwSgldGpVM-qy3kseGceypvsCfRVxkC1yT5QBBclp_8pogkw8J1bCOxKTtYxm_Y4Dr4tRN-K0BK4OOff50nQ6m3F5OSKe75hx-BwP-vDEX2hptvrDYgbEi6hSSeZCSbj0IVr6"
              alt="Nguyễn Ngọc Hoàng Giang portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#b20982] rounded-2xl -z-10 opacity-20 animate-pulse"></div>
        </div>

        {/* Right Side Bio & Education details */}
        <div className="md:col-span-7 space-y-6">
          <div className="space-y-4">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-[#001bb7]">
              Hello, I'm Giang.
            </h2>
            <p className="font-be-vietnam text-base md:text-lg text-[#454655] leading-relaxed">
              I am a Business Administration & Technology student at the Hanoi School of Business and Management, Vietnam National University, Hanoi.
            </p>
            <p className="font-be-vietnam text-base md:text-lg text-[#454655] leading-relaxed">
              Rather than limiting myself to one discipline, I enjoy working where business strategy meets technology. I am particularly interested in understanding people's needs, transforming ideas into products, and applying artificial intelligence to solve real-world problems.
            </p>
          </div>

          {/* Interactive Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div
              onClick={() => setSelectedStat(selectedStat === 'education' ? null : 'education')}
              className={`border-l-4 border-[#001bb7] pl-4 py-4 rounded-r-lg transition-all cursor-pointer ${
                selectedStat === 'education' ? 'bg-[#001bb7]/15 shadow-md' : 'bg-[#001bb7]/5 hover:bg-[#001bb7]/10'
              }`}
            >
              <div className="flex items-center justify-between pr-3">
                <span className="font-montserrat text-xs font-bold text-[#001bb7] uppercase tracking-wider">
                  Education
                </span>
                <GraduationCap className="w-4 h-4 text-[#001bb7]" />
              </div>
              <div className="font-montserrat text-2xl font-bold text-[#001bb7] mt-1">
                HSB - VNU
              </div>
              <div className="font-be-vietnam text-sm text-[#454655]">
                Management of Enterprise and Technology
              </div>
            </div>

            <div
              onClick={() => setSelectedStat(selectedStat === 'performance' ? null : 'performance')}
              className={`border-l-4 border-[#b20982] pl-4 py-4 rounded-r-lg transition-all cursor-pointer ${
                selectedStat === 'performance' ? 'bg-[#b20982]/15 shadow-md' : 'bg-[#b20982]/5 hover:bg-[#b20982]/10'
              }`}
            >
              <div className="flex items-center justify-between pr-3">
                <span className="font-montserrat text-xs font-bold text-[#b20982] uppercase tracking-wider">
                  Performance
                </span>
                <Award className="w-4 h-4 text-[#b20982]" />
              </div>
              <div className="font-montserrat text-2xl font-bold text-[#b20982] mt-1">
                3.64 / 4.00
              </div>
              <div className="font-be-vietnam text-sm text-[#454655]">
                Current GPA
              </div>
            </div>
          </div>

          {/* Expandable Details Box on Click */}
          {selectedStat === 'education' && (
            <div className="p-4 bg-white border border-[#001bb7]/30 rounded-xl shadow-sm space-y-2">
              <div className="flex items-center gap-2 font-montserrat font-bold text-sm text-[#001bb7]">
                <BookOpen className="w-4 h-4" />
                VNU Hanoi School of Business and Management (HSB)
              </div>
              <p className="font-be-vietnam text-xs text-[#454655]">
                Specialized program fusing strategic management, business analysis, software engineering, and AI integration. Focus on real-world projects and computational thinking under leading faculty.
              </p>
            </div>
          )}

          {selectedStat === 'performance' && (
            <div className="p-4 bg-white border border-[#b20982]/30 rounded-xl shadow-sm space-y-2">
              <div className="flex items-center gap-2 font-montserrat font-bold text-sm text-[#b20982]">
                <Award className="w-4 h-4" />
                Academic Honors & Track Record
              </div>
              <p className="font-be-vietnam text-xs text-[#454655]">
                Maintaining 3.64/4.00 cumulative GPA while leading student projects, conducting AI sentiment research accepted at ICECH 2026, and serving as a Bebras research assistant.
              </p>
            </div>
          )}

          <blockquote className="italic text-[#454655] border-l-4 border-[#c5c5d7] pl-4 mt-6 font-be-vietnam">
            "Curiosity starts the journey. Purpose gives it direction."
          </blockquote>
        </div>
      </div>
    </section>
  );
};
