import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onOpenContact: () => void;
}

const NAV_LINKS = [
  { id: 'hero', label: 'HOME', href: '#hero' },
  { id: 'about', label: 'ABOUT', href: '#about' },
  { id: 'focus', label: 'FOCUS', href: '#focus' },
  { id: 'projects', label: 'PROJECTS', href: '#projects' },
  { id: 'experience', label: 'EXPERIENCE', href: '#experience' },
];

export default function Header({ activeSection, onOpenContact }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F2]/85 backdrop-blur-md border-b border-[#2D2724]/6 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 h-16 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#hero"
          aria-label="Andini Putri Ihsani Home"
          className="font-editorial text-2xl sm:text-3xl font-semibold tracking-tight text-[#2D2724] hover:text-[#D38B78] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D38B78]"
        >
          AP<span className="text-[#D38B78]">.</span>
        </a>

        {/* Zone 2: Single-line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-semibold"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-1 tracking-[0.2em] whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D38B78] ${
                  isActive
                    ? 'text-[#2D2724]'
                    : 'text-[#6E6560] hover:text-[#2D2724]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-[#D38B78] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA (+ Mobile Toggle) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D38B78] hover:bg-[#C27763] text-white text-xs font-semibold tracking-wider whitespace-nowrap shrink-0 transition-all duration-200 shadow-sm hover:shadow cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D38B78]"
          >
            <span>LET&apos;S TALK</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#2D2724]/15 bg-white/80 text-[#2D2724] hover:bg-[#ECE4DC] transition-colors shrink-0 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2D2724]/8 bg-[#FAF6F2] px-6 py-5 space-y-3">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={handleLinkClick}
                className="py-2.5 px-3 rounded-xl text-xs font-semibold tracking-[0.2em] text-[#2D2724] hover:bg-[#ECE4DC]/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D38B78] hover:bg-[#C27763] text-white text-xs font-semibold tracking-wider whitespace-nowrap transition-colors cursor-pointer"
          >
            <span>LET&apos;S TALK</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      )}
    </header>
  );
}
