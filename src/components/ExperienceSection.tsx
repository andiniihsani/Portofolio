import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="experience" className="py-16 bg-[#F4EEE7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D38B78]">
            LEADERSHIP &amp; TEAMWORK
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#2D2724] mt-2 text-balance">
            Organizational &amp; Committee Roles
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6560] mt-3 leading-relaxed">
            Real-world event execution, administrative oversight, and community stewardship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {EXPERIENCES.map((exp) => {
            const isTerracotta = exp.tone === 'terracotta';
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(45,39,36,0.08)] border border-[#2D2724]/6 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs mb-4">
                    <span
                      className={`font-mono font-semibold tabular-nums ${
                        isTerracotta ? 'text-[#D38B78]' : 'text-[#545643]'
                      }`}
                    >
                      {exp.period}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6E6560]">
                      {exp.category}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-[#2D2724]">
                    {exp.role}
                  </h3>
                  <p
                    className={`text-xs font-semibold mt-1.5 leading-snug ${
                      isTerracotta ? 'text-[#D38B78]' : 'text-[#545643]'
                    }`}
                  >
                    {exp.organization}
                  </p>
                  <p className="text-xs sm:text-[13px] text-[#6E6560] mt-4 leading-relaxed">
                    {exp.summary}
                  </p>

                  {isExpanded && (
                    <ul className="mt-4 pt-4 border-t border-[#2D2724]/8 space-y-2">
                      {exp.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="text-xs text-[#6E6560] flex items-start gap-2 leading-relaxed"
                        >
                          <span
                            className={
                              isTerracotta
                                ? 'text-[#D38B78] shrink-0'
                                : 'text-[#545643] shrink-0'
                            }
                            aria-hidden="true"
                          >
                            ✦
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#2D2724]/8 flex items-center justify-between gap-3 text-[11px]">
                  <div>
                    <span className="text-[#9A908A] block">{exp.metricLabel}</span>
                    <span
                      className={`font-semibold ${
                        isTerracotta ? 'text-[#D38B78]' : 'text-[#545643]'
                      }`}
                    >
                      {exp.metricValue}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setExpandedId((prev) => (prev === exp.id ? null : exp.id))
                    }
                    aria-expanded={isExpanded}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FAF6F2] hover:bg-[#ECE4DC] text-[#2D2724] font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Scope' : 'Key Duties'}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
