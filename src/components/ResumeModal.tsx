import React, { useState } from 'react';
import { X, Download, Copy, Check, GraduationCap, Award, Briefcase, Code } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const resumeText = `NGUYỄN NGỌC HOÀNG GIANG - Kinetic Ambassador
Business × AI × Leadership
Email: hgiang2308@gmail.com | Phone: 0933198692 | LinkedIn: linkedin.com/in/giang238

EDUCATION
- VNU Hanoi School of Business and Management (HSB)
- Program: Business Administration & Technology
- Cumulative GPA: 3.64 / 4.00

CORE EXPERTISE & RESEARCH
- ICECH 2026 Accepted Paper: "Mixing Words and Numbers: Bitcoin Forecasting" (FinBERT Sentiment Analysis + Time Series ML)
- BEBRAS Research Project: Research Assistant in Computational Thinking with Dr. Emmanuel Plan
- AI Healthcare Copilot: RAG architecture for clinical knowledge base retrieval

TECH STACK
- Frontend & Web: React + Vite, Tailwind CSS, TypeScript
- Backend & Cloud: Node.js, Express, Supabase, PostgreSQL
- AI & NLP: Cohere AI, RAG Architecture, FinBERT

LEADERSHIP & COMMUNITY
- Vice Project Director: Project For Children (PFC)
- Event Director: Youth Opportunities Vietnam
- Social Mentor: Hyundai Jump School
- Cultural Exchange Ambassador: Vietnam - Korea Culture Fair`;

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#001bb7] text-white flex justify-between items-center">
          <div>
            <h3 className="font-montserrat text-xl font-bold">Curriculum Vitae / Resume</h3>
            <p className="text-white/80 font-be-vietnam text-xs">
              Nguyễn Ngọc Hoàng Giang - VNU HSB Business Admin & Tech
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold font-montserrat flex items-center gap-1 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied' : 'Copy CV'}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Printable Document Area */}
        <div className="p-6 overflow-y-auto space-y-6 font-be-vietnam text-sm text-[#191c1d]">
          {/* Header info */}
          <div className="border-b border-gray-200 pb-4">
            <h2 className="font-montserrat text-2xl font-bold text-[#001bb7]">
              Nguyễn Ngọc Hoàng Giang
            </h2>
            <p className="font-montserrat font-semibold text-sm text-[#b20982]">
              Business × AI × Leadership | VNU HSB
            </p>
            <p className="text-xs text-[#454655] mt-1">
              📧 hgiang2308@gmail.com | 📞 0933198692 | 🔗 linkedin.com/in/giang238 | 📍 Hanoi, Vietnam
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#001bb7] flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Education
            </h4>
            <div className="bg-[#f8f9fa] p-3 rounded-xl border border-gray-200">
              <div className="flex justify-between font-montserrat font-bold text-sm text-[#001bb7]">
                <span>VNU Hanoi School of Business and Management (HSB)</span>
                <span>GPA: 3.64 / 4.00</span>
              </div>
              <p className="text-xs text-[#454655]">Bachelor of Business Administration & Technology</p>
            </div>
          </div>

          {/* Research & Publications */}
          <div className="space-y-2">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#656100] flex items-center gap-1.5">
              <Award className="w-4 h-4" /> Research & Academic Publications
            </h4>
            <ul className="list-disc pl-5 text-xs text-[#454655] space-y-1.5">
              <li>
                <strong className="text-[#191c1d]">ICECH 2026 Accepted Paper:</strong> "Mixing Words and Numbers: Bitcoin Forecasting" - FinBERT sentiment modeling combined with time-series ML algorithms.
              </li>
              <li>
                <strong className="text-[#191c1d]">Bebras Research Project:</strong> Research Assistant under Dr. Emmanuel Plan in computational thinking diagnostics.
              </li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#b20982] flex items-center gap-1.5">
              <Code className="w-4 h-4" /> Technical & AI Competencies
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-[#f3f4f5] rounded-lg">
                <span className="font-bold block text-[#001bb7]">AI & Data:</span>
                Cohere AI, RAG, FinBERT, Time-Series ML
              </div>
              <div className="p-2.5 bg-[#f3f4f5] rounded-lg">
                <span className="font-bold block text-[#001bb7]">Full-Stack:</span>
                React, Vite, Express, Supabase, PostgreSQL
              </div>
            </div>
          </div>

          {/* Leadership & Activities */}
          <div className="space-y-2">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#001bb7] flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> Leadership & Community Experience
            </h4>
            <ul className="list-disc pl-5 text-xs text-[#454655] space-y-1">
              <li><strong>Vice Project Director:</strong> Project For Children (PFC)</li>
              <li><strong>Event Director:</strong> Youth Opportunities Vietnam</li>
              <li><strong>Academic Mentor:</strong> Hyundai Jump School</li>
              <li><strong>Multicultural Ambassador:</strong> Vietnam-Korea Culture Exchange</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
          <button
            onClick={handlePrint}
            className="text-xs font-montserrat font-bold text-[#001bb7] hover:underline"
          >
            🖨️ Print / Save PDF
          </button>
          <button
            onClick={onClose}
            className="bg-[#001bb7] text-white px-6 py-2 rounded-lg font-montserrat text-xs font-semibold hover:bg-[#001080] transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
