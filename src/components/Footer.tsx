import React from 'react';
import { Mail, Phone, Link as LinkIcon, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#090d16] text-white py-12 border-t border-white/10">
      <div className="max-w-[1360px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 font-be-vietnam text-sm">
        <div>
          <div className="font-montserrat text-2xl font-bold text-white mb-1">NNHG</div>
          <p className="text-white/60 text-xs">
            © 2024 Nguyễn Ngọc Hoàng Giang. Kinetic Ambassador.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-white/80 text-xs">
            <a
              href="https://www.linkedin.com/in/giang238"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
            >
              <LinkIcon className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a
              href="mailto:hgiang2308@gmail.com"
              className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" /> hgiang2308@gmail.com
            </a>
            <a
              href="tel:0933198692"
              className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" /> 0933198692
            </a>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-white/40 text-[11px]">
              Business Administration & Technology Student (VNU HSB)
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-xs transition-all flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
