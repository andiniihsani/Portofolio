import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  EDUCATION_TIMELINE,
  SOFT_SKILLS,
  TOOLS,
  type ToolItem,
} from '../data/portfolioData';

interface SkillsAndEducationSectionProps {
  onOpenCV: () => void;
}

export default function SkillsAndEducationSection({
  onOpenCV,
}: SkillsAndEducationSectionProps) {
  const [selectedTool, setSelectedTool] = useState<ToolItem>(TOOLS[0]);
  const [expandedEduId, setExpandedEduId] = useState<string | null>('itpln');

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Bento (5 cols): Tools & Technical Skills */}
          <div className="lg:col-span-5 bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_20px_40px_-15px_rgba(45,39,36,0.08)] border border-[#2D2724]/6 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D38B78]">
                STACK &amp; CAPABILITIES
              </p>
              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#2D2724] mt-1 mb-7">
                Tools &amp; Technical Skills
              </h3>

              {/* 4x2 Tool Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {TOOLS.map((tool) => {
                  const isSelected = selectedTool.id === tool.id;
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => setSelectedTool(tool)}
                      aria-pressed={isSelected}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl bg-[#FAF6F2] border transition-all cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D38B78] ${
                        isSelected
                          ? 'border-[#D38B78] shadow-xs'
                          : 'border-[#2D2724]/6 hover:border-[#D38B78]/60'
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl shadow-xs flex items-center justify-center font-bold text-xs group-hover:scale-105 transition-transform ${tool.bgClass}`}
                      >
                        {tool.badgeText}
                      </div>
                      <span className="text-[11px] font-medium text-[#6E6560] mt-2 whitespace-nowrap">
                        {tool.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Tool Detail Readout */}
              <div className="mt-5 p-4 rounded-2xl bg-[#FAF6F2] border border-[#2D2724]/6">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-semibold text-[#2D2724]">
                    {selectedTool.name}
                  </span>
                  <span className="text-[11px] font-medium text-[#D38B78]">
                    {selectedTool.category} · {selectedTool.level}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-[#6E6560] leading-relaxed">
                  {selectedTool.description}
                </p>
              </div>

              {/* Interpersonal & Practical Strengths */}
              <div className="mt-7 pt-6 border-t border-[#2D2724]/10">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9A908A] mb-3">
                  Interpersonal &amp; Practical Strengths
                </p>
                <div className="flex flex-wrap gap-2">
                  {SOFT_SKILLS.map((skill) => {
                    const toneClass =
                      skill.tone === 'sand'
                        ? 'bg-[#ECE4DC]'
                        : skill.tone === 'blush'
                          ? 'bg-[#F1D9D1]/65'
                          : 'bg-[#D8D8CE]/45';
                    return (
                      <span
                        key={skill.label}
                        className={`px-3.5 py-1.5 rounded-full text-[#2D2724] text-xs font-medium ${toneClass}`}
                      >
                        {skill.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#2D2724]/6 flex items-center justify-between gap-4 text-xs text-[#6E6560]">
              <span>Continually expanding skills</span>
              <button
                type="button"
                onClick={onOpenCV}
                className="text-[#D38B78] hover:text-[#C27763] font-semibold whitespace-nowrap shrink-0 cursor-pointer transition-colors"
              >
                View full CV →
              </button>
            </div>
          </div>

          {/* Right Bento (7 cols): Education & Certifications */}
          <div
            id="about"
            className="lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_20px_40px_-15px_rgba(45,39,36,0.08)] border border-[#2D2724]/6 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D38B78]">
                ACADEMIC EXCELLENCE
              </p>
              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#2D2724] mt-1 mb-8">
                Education &amp; Certifications
              </h3>

              <div className="space-y-5">
                {EDUCATION_TIMELINE.map((item, idx) => {
                  const isLast = idx === EDUCATION_TIMELINE.length - 1;
                  const isExpanded = expandedEduId === item.id;

                  const circleTone =
                    item.tone === 'blush'
                      ? 'bg-[#F1D9D1]/65 text-[#D38B78]'
                      : item.tone === 'sage'
                        ? 'bg-[#D8D8CE]/60 text-[#545643]'
                        : 'bg-[#ECE4DC] text-[#6E6560]';

                  const periodTone =
                    item.tone === 'blush'
                      ? 'text-[#8A4E3E] bg-[#F1D9D1]/45'
                      : item.tone === 'sage'
                        ? 'text-[#545643] bg-[#D8D8CE]/45'
                        : 'text-[#6E6560] bg-[#ECE4DC]/70';

                  return (
                    <div
                      key={item.id}
                      className={!isLast ? 'pb-5 border-b border-[#2D2724]/8' : ''}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedEduId((prev) =>
                            prev === item.id ? null : item.id
                          )
                        }
                        aria-expanded={isExpanded}
                        className="w-full text-left flex items-start gap-4 group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D38B78] rounded-xl"
                      >
                        <div
                          className={`w-10 h-10 rounded-full font-editorial font-bold text-sm flex items-center justify-center shrink-0 tabular-nums ${circleTone}`}
                        >
                          {item.number}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                            <h4 className="font-bold text-sm tracking-wide text-[#2D2724] uppercase leading-snug group-hover:text-[#8A4E3E] transition-colors">
                              {item.institution}
                            </h4>
                            <div className="flex items-center gap-2 shrink-0">
                              <span
                                className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap tabular-nums ${periodTone}`}
                              >
                                {item.period}
                              </span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 text-[#9A908A] transition-transform duration-200 ${
                                  isExpanded ? 'rotate-180 text-[#D38B78]' : ''
                                }`}
                                aria-hidden="true"
                              />
                            </div>
                          </div>

                          <p className="text-xs font-medium text-[#6E6560] mt-1.5 leading-snug">
                            {item.roleOrDegree}
                          </p>

                          <p className="text-xs text-[#9A908A] mt-2 leading-relaxed">
                            {item.description}
                          </p>

                          {isExpanded && item.highlights.length > 0 && (
                            <ul className="mt-3 pt-3 border-t border-[#2D2724]/6 space-y-1.5">
                              {item.highlights.map((hl) => (
                                <li
                                  key={hl}
                                  className="text-xs text-[#6E6560] flex items-start gap-2"
                                >
                                  <span className="text-[#D38B78] shrink-0" aria-hidden="true">
                                    ✦
                                  </span>
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
