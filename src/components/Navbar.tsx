import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConnect: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect, onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'intersection', 'projects', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About Me', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      id="top-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f8f9fa]/95 backdrop-blur-md shadow-sm py-3 text-[#191c1d]'
          : 'bg-[#001bb7]/90 backdrop-blur-md py-4 text-white border-b border-white/10'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-[1360px] mx-auto">
        {/* Brand Logo */}
        <a
          href="#hero"
          className={`font-montserrat text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity ${
            isScrolled ? 'text-[#001bb7]' : 'text-white'
          }`}
        >
          NNHG
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`font-montserrat text-sm font-semibold px-4 py-1.5 transition-all duration-200 rounded-md ${
                  isScrolled
                    ? isActive
                      ? 'text-[#001bb7] border-b-2 border-[#001bb7] bg-[#001bb7]/5'
                      : 'text-[#454655] hover:text-[#001bb7] hover:bg-black/5'
                    : isActive
                      ? 'text-[#66FFFF] border-b-2 border-[#66FFFF] bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className={`font-montserrat text-sm font-semibold px-3 py-1.5 flex items-center gap-1 transition-colors ${
              isScrolled ? 'text-[#001bb7] hover:text-[#001080]' : 'text-white/90 hover:text-white'
            }`}
          >
            CV Preview
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            id="connect-nav-button"
            onClick={onOpenConnect}
            className={`px-6 py-2 rounded-lg font-montserrat font-semibold text-sm active:scale-95 transition-all shadow-sm ${
              isScrolled
                ? 'bg-[#001bb7] text-white hover:bg-[#001080]'
                : 'bg-white text-[#001bb7] hover:bg-blue-50 font-bold'
            }`}
          >
            Connect
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenConnect}
            className={`px-4 py-1.5 rounded-lg font-montserrat font-semibold text-xs ${
              isScrolled ? 'bg-[#001bb7] text-white' : 'bg-white text-[#001bb7]'
            }`}
          >
            Connect
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg ${isScrolled ? 'text-[#001bb7] hover:bg-black/5' : 'text-white hover:bg-white/10'}`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#c5c5d7] px-6 py-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-montserrat text-base font-semibold py-2 px-3 rounded-lg ${
                  activeSection === link.id
                    ? 'bg-[#001bb7]/10 text-[#001bb7]'
                    : 'text-[#454655] hover:bg-gray-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full text-left font-montserrat text-sm font-semibold text-[#001bb7] py-2 px-3"
              >
                📄 Download / View Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
