import React from 'react';

export const ThankYou: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center py-20 md:py-28 bg-[#f8f9fa]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-black text-[#0f172a] tracking-tight mb-4">
            Thank You for Being Here
          </h2>
          <p className="font-be-vietnam text-base md:text-lg text-[#454655] leading-relaxed mb-8">
            Thank you for taking the time to explore my journey — from the classroom to the community, from research to real products. Every page here reflects a small part of who I'm becoming, and I hope it gave you a genuine sense of who I am and where I'm headed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-lg font-montserrat font-semibold text-sm border-2 border-[#001bb7] text-[#001bb7] hover:bg-[#001bb7]/5 transition-all"
            >
              Preview CV
            </a>
            <a
              href="/CV.pdf"
              download
              className="px-6 py-2.5 rounded-lg font-montserrat font-semibold text-sm bg-[#001bb7] text-white hover:bg-[#001080] transition-all shadow-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
