import { ArrowRight, ClipboardList, Database, Globe, Palette } from 'lucide-react';
import { FOCUS_AREAS, type FocusArea } from '../data/portfolioData';

interface FocusAreasSectionProps {
  onSelectFocus: (area: FocusArea) => void;
}

function FocusIcon({ icon }: { icon: FocusArea['icon'] }) {
  switch (icon) {
    case 'database':
      return <Database className="w-5 h-5" aria-hidden="true" />;
    case 'palette':
      return <Palette className="w-5 h-5" aria-hidden="true" />;
    case 'globe':
      return <Globe className="w-5 h-5" aria-hidden="true" />;
    case 'clipboard':
      return <ClipboardList className="w-5 h-5" aria-hidden="true" />;
  }
}

export default function FocusAreasSection({ onSelectFocus }: FocusAreasSectionProps) {
  return (
    <section id="focus" className="py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9A908A]">
              WHAT I DO
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#2D2724] mt-2 text-balance">
              Academic Focus &amp; Digital Disciplines
            </h2>
          </div>
          <p className="text-xs text-[#6E6560] max-w-xs leading-relaxed">
            Select any discipline card to inspect coursework, competencies, and practical outputs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOCUS_AREAS.map((area) => {
            const isBlush = area.theme === 'blush';
            return (
              <button
                key={area.id}
                type="button"
                onClick={() => onSelectFocus(area)}
                className={`group text-left rounded-3xl p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(45,39,36,0.1)] min-h-[370px] border border-white/50 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D38B78] ${
                  isBlush
                    ? 'bg-[#F1D9D1]/60 hover:bg-[#F1D9D1]/90'
                    : 'bg-[#D8D8CE]/50 hover:bg-[#D8D8CE]/80'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-full bg-white/85 flex items-center justify-center mb-6 shadow-xs ${
                      isBlush ? 'text-[#D38B78]' : 'text-[#545643]'
                    }`}
                  >
                    <FocusIcon icon={area.icon} />
                  </div>
                  <h3 className="font-editorial text-xl font-bold uppercase tracking-tight text-[#2D2724] leading-snug">
                    {area.titleLines[0]}
                    <br />
                    {area.titleLines[1]}
                  </h3>
                  <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-[#6E6560]">
                    {area.summary}
                  </p>
                </div>

                <div className="pt-6 flex justify-between items-center w-full">
                  <span className="text-[11px] font-semibold tracking-wider text-[#6E6560] uppercase tabular-nums">
                    {area.index} · {area.kicker}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#2D2724] shadow-xs group-hover:bg-[#D38B78] group-hover:text-white transition-colors">
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
