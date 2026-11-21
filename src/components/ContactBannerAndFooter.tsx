import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ContactBannerAndFooterProps {
  onOpenContact: () => void;
}

export default function ContactBannerAndFooter({
  onOpenContact,
}: ContactBannerAndFooterProps) {
  return (
    <>
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="relative bg-[#D8D8CE]/60 rounded-[32px] p-8 sm:p-14 overflow-hidden border border-white/60 shadow-[0_20px_40px_-15px_rgba(45,39,36,0.08)]">
            {/* Botanical Accent SVG */}
            <svg
              aria-hidden="true"
              className="absolute -right-8 -bottom-10 w-72 h-72 text-[#545643]/15 pointer-events-none transform -rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 100 100"
            >
              <path
                d="M50,95 C50,45 80,10 95,5"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
              <path
                d="M65,40 C75,35 85,20 75,12 C65,18 60,25 65,40 Z"
                fill="rgba(84, 86, 67, 0.08)"
                strokeWidth="1.2"
              />
              <path
                d="M55,60 C70,55 78,42 70,35 C60,40 55,50 55,60 Z"
                fill="rgba(84, 86, 67, 0.08)"
                strokeWidth="1.2"
              />
            </svg>

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#545643]">
                  GET CONNECTED
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#2D2724] leading-tight mt-2 text-balance">
                  LET&apos;S CREATE{' '}
                  <span className="block italic font-normal text-[#D38B78]">
                    something extraordinary
                  </span>
                </h2>
                <p className="mt-4 text-xs sm:text-sm text-[#6E6560] leading-relaxed">
                  I am actively open for student collaborations, academic projects,
                  technical discussions, and professional growth opportunities.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#545643] hover:bg-[#424434] text-white text-xs font-semibold tracking-wider uppercase whitespace-nowrap shrink-0 transition-all duration-200 shadow-md hover:scale-[1.02] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#545643]"
                >
                  <span>LET&apos;S WORK TOGETHER</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href={PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full bg-white/85 hover:bg-white text-[#2D2724] text-xs font-semibold tracking-wider uppercase whitespace-nowrap shrink-0 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#545643]" aria-hidden="true" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-8 pb-12 border-t border-[#2D2724]/8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2D2724]/6">
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#6E6560]">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D38B78] transition-colors whitespace-nowrap"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D38B78] transition-colors whitespace-nowrap"
              >
                Instagram
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D38B78] transition-colors whitespace-nowrap"
              >
                GitHub
              </a>
              <a
                href={PROFILE.wixUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D38B78] transition-colors whitespace-nowrap"
              >
                Wix Portfolio
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-[#2D2724]">
              <Mail className="w-4 h-4 text-[#D38B78] shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${PROFILE.email}`}
                className="hover:text-[#D38B78] transition-colors"
              >
                {PROFILE.email}
              </a>
              <span className="text-[#9A908A]" aria-hidden="true">
                ·
              </span>
              <span className="text-[#6E6560] tabular-nums">
                {PROFILE.phoneDisplay}
              </span>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9A908A] gap-4">
            <p>© 2026 {PROFILE.fullName}. All Rights Reserved.</p>
            <p className="flex items-center gap-2">
              <span>{PROFILE.institution}</span>
              <span aria-hidden="true">·</span>
              <span>{PROFILE.location}</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
