import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Award,
  Building2,
  MapPin,
  Star,
  Users,
} from 'lucide-react';
import {
  METRICS,
  PORTRAIT_IMAGE_URL,
  PROFILE,
  type MetricItem,
} from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCV: () => void;
}

function MetricIcon({ icon }: { icon: MetricItem['icon'] }) {
  switch (icon) {
    case 'star':
      return <Star className="w-4 h-4" aria-hidden="true" />;
    case 'building':
      return <Building2 className="w-4 h-4" aria-hidden="true" />;
    case 'users':
      return <Users className="w-4 h-4" aria-hidden="true" />;
    case 'badge':
      return <Award className="w-4 h-4" aria-hidden="true" />;
  }
}

export default function HeroSection({ onOpenCV }: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <section
        id="hero"
        className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline & Bio */}
            <div className="lg:col-span-7 flex flex-col justify-center z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block w-8 h-[1px] bg-[#D38B78]" />
                <p className="text-xs uppercase tracking-[0.28em] font-semibold text-[#6E6560]">
                  {PROFILE.eyebrow}
                </p>
                <span className="text-[#D38B78] text-sm" aria-hidden="true">
                  ✦
                </span>
              </div>

              <h1 className="font-editorial leading-[1.02] tracking-tight text-balance">
                <span className="block text-4xl sm:text-6xl md:text-7xl font-semibold text-[#D38B78]">
                  {PROFILE.headlineTop}
                </span>
                <span className="block text-4xl sm:text-6xl md:text-7xl font-normal text-[#2D2724] mt-2">
                  {PROFILE.headlineBottom}
                </span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-[#6E6560] font-light max-w-xl leading-relaxed">
                A first-semester Information Systems undergraduate at{' '}
                <strong className="text-[#2D2724] font-semibold">
                  {PROFILE.institution}
                </strong>{' '}
                passionate about digital innovation, data analysis, UI/UX design,
                and structured web development.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-7">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#D38B78] hover:bg-[#C27763] text-white font-semibold text-xs sm:text-sm tracking-wide whitespace-nowrap shrink-0 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D38B78]"
                >
                  <span>VIEW PORTFOLIO</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={onOpenCV}
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#2D2724]/20 hover:bg-[#ECE4DC] text-[#2D2724] font-semibold text-xs tracking-wider uppercase whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D38B78]"
                >
                  <span>VIEW &amp; DOWNLOAD CV</span>
                  <ArrowDown
                    className="w-3.5 h-3.5 text-[#6E6560] group-hover:text-[#D38B78] transition-transform group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Subtle Editorial Quote */}
              <div className="mt-12 pt-6 border-t border-[#2D2724]/8 flex items-start gap-4 max-w-xl">
                <span
                  className="font-editorial italic text-2xl text-[#D38B78] leading-none shrink-0"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="text-xs sm:text-sm text-[#9A908A] italic font-editorial leading-relaxed">
                  {PROFILE.quote}
                </p>
              </div>
            </div>

            {/* Right Column: Visual Composition with Organic Arch */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              {/* Botanical Line Art Top-Right */}
              <svg
                aria-hidden="true"
                className="absolute -top-8 -right-4 w-44 h-44 text-[#545643]/20 pointer-events-none z-0 transform rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 120 120"
              >
                <path
                  d="M60,110 C60,60 100,20 110,10"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
                <path
                  d="M80,50 C95,45 105,30 95,20 C85,25 78,35 80,50 Z"
                  fill="rgba(84, 86, 67, 0.08)"
                  strokeWidth="1.2"
                />
                <path
                  d="M65,70 C80,68 90,55 82,45 C72,50 67,60 65,70 Z"
                  fill="rgba(84, 86, 67, 0.08)"
                  strokeWidth="1.2"
                />
                <path
                  d="M92,30 C105,25 110,12 100,5 C90,10 88,20 92,30 Z"
                  fill="rgba(84, 86, 67, 0.08)"
                  strokeWidth="1.2"
                />
              </svg>

              <span
                aria-hidden="true"
                className="absolute top-10 left-4 text-[#D38B78] text-lg select-none"
              >
                ✦
              </span>
              <span
                aria-hidden="true"
                className="absolute bottom-28 right-0 text-[#D38B78]/70 text-sm select-none"
              >
                ✦
              </span>

              <div className="relative w-full max-w-[380px]">
                {/* Soft sage backdrop arch */}
                <div className="absolute inset-0 bg-[#E6E4DC] arch-mask transform -rotate-1 scale-105 opacity-80" />

                {/* Inner Arch Card */}
                <div className="relative bg-[#F1D9D1]/40 arch-mask overflow-hidden border-2 border-white/70 shadow-xl aspect-[3/4.2] flex flex-col justify-end">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#ECE4DC]/90 via-[#F1D9D1]/15 to-transparent z-10 pointer-events-none" />

                  {!imageError ? (
                    <img
                      src={PORTRAIT_IMAGE_URL}
                      alt="Editorial portrait of Andini Putri Ihsani in warm natural lighting"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[0.98]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#F1D9D1] via-[#ECE4DC] to-[#D8D8CE] p-8 text-center">
                      <span className="font-editorial text-6xl font-semibold text-[#8A4E3E]">
                        AP.
                      </span>
                      <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#6E6560]">
                        {PROFILE.fullName}
                      </p>
                    </div>
                  )}

                  {/* Floating Location Pill */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-max">
                    <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-[#2D2724]/5 flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#ECE4DC] flex items-center justify-center text-[#D38B78] shrink-0">
                        <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      </div>
                      <div className="text-left leading-tight whitespace-nowrap">
                        <span className="block text-[9px] uppercase tracking-widest font-bold text-[#9A908A]">
                          BASED IN
                        </span>
                        <span className="block font-editorial font-semibold text-xs tracking-wider text-[#D38B78] uppercase">
                          {PROFILE.locationShort}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Floating Highlights Bar */}
      <section className="relative -mt-4 mb-20 z-20" aria-label="Academic Highlights">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(45,39,36,0.08)] border border-[#2D2724]/6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-[#2D2724]/10">
              {METRICS.map((metric) => (
                <div
                  key={metric.id}
                  className="flex flex-col items-center text-center px-3 py-2"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
                      metric.accent === 'blush'
                        ? 'bg-[#F1D9D1]/65 text-[#D38B78]'
                        : 'bg-[#ECE4DC] text-[#6E6560]'
                    }`}
                  >
                    <MetricIcon icon={metric.icon} />
                  </div>
                  <span className="font-editorial text-3xl sm:text-4xl font-semibold text-[#2D2724] tabular-nums">
                    {metric.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#9A908A] mt-1.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
