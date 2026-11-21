import { useState } from 'react';
import { ArrowUpRight, Lock } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';

interface FeaturedProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

type CategoryFilter = 'all' | 'web' | 'infographics' | 'systems';
type PreviewTab = 'home' | 'articles' | 'infographic';

const FILTERS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'web', label: 'Web & UI/UX' },
  { id: 'infographics', label: 'Infographics' },
  { id: 'systems', label: 'Systems & Ops' },
];

export default function FeaturedProjectsSection({
  onSelectProject,
}: FeaturedProjectsSectionProps) {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [previewTab, setPreviewTab] = useState<PreviewTab>('home');

  const featuredProject = PROJECTS.find((p) => p.isFeatured) ?? PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.isFeatured).filter(
    (p) => filter === 'all' || p.category === filter
  );
  const showFeatured =
    filter === 'all' || filter === featuredProject.category || filter === 'infographics';

  return (
    <section id="projects" className="py-16 bg-[#F4EEE7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D38B78]">
              SELECTED WORK
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl font-semibold text-[#2D2724] mt-2 text-balance">
              Featured Case Studies
            </h2>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter case studies by discipline"
            className="inline-flex flex-wrap items-center gap-1 p-1.5 bg-white/80 rounded-full border border-[#2D2724]/8 self-start md:self-auto"
          >
            {FILTERS.map((item) => {
              const active = filter === item.id;
              return (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setFilter(item.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#2D2724] text-white'
                      : 'text-[#6E6560] hover:text-[#2D2724]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Flagship Spotlight Card */}
        {showFeatured && (
          <div className="bg-white rounded-[32px] p-7 sm:p-12 shadow-[0_20px_40px_-15px_rgba(45,39,36,0.08)] border border-[#2D2724]/6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Info Details */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#6E6560] uppercase mb-4">
                    <span className="tabular-nums">{featuredProject.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{featuredProject.type}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#D38B78]">{featuredProject.tools}</span>
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#2D2724] leading-snug text-balance">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-4 text-sm text-[#6E6560] leading-relaxed">
                    {featuredProject.summary}
                  </p>

                  <div className="mt-6 space-y-3">
                    {featuredProject.highlights.map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <span className="text-[#D38B78] mt-0.5 shrink-0" aria-hidden="true">
                          ✦
                        </span>
                        <p className="text-xs sm:text-[13px] text-[#6E6560] leading-relaxed">
                          <strong className="text-[#2D2724] font-semibold">
                            {item.label}:
                          </strong>{' '}
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#2D2724]/10 flex flex-wrap items-center gap-4">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#545643] hover:bg-[#424434] text-white text-xs font-semibold tracking-wider uppercase whitespace-nowrap shrink-0 transition-all shadow-sm hover:shadow"
                  >
                    <span>VISIT LIVE WEBSITE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#2D2724]/20 hover:bg-[#ECE4DC] text-[#2D2724] text-xs font-semibold tracking-wider uppercase whitespace-nowrap shrink-0 transition-colors cursor-pointer"
                  >
                    <span>CASE STUDY NOTES</span>
                  </button>
                </div>
              </div>

              {/* Right: Interactive Browser Preview Container */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl bg-[#FAF6F2] p-5 border border-[#2D2724]/8">
                  {/* Browser Tab Bar */}
                  <div className="flex items-center justify-between gap-3 pb-3 mb-4 border-b border-[#2D2724]/10">
                    <div className="flex items-center space-x-1.5 shrink-0" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E57A64]/75" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5C158]/75" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#82B980]/75" />
                    </div>
                    <span className="text-[11px] font-mono text-[#6E6560] bg-white px-3 py-1 rounded-full border border-[#2D2724]/6 truncate">
                      andiniputriihsani.wixsite.com/andinipi
                    </span>
                    <Lock className="w-3.5 h-3.5 text-[#9A908A] shrink-0" aria-hidden="true" />
                  </div>

                  {/* Interactive Preview Canvas */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xs border border-[#2D2724]/6 space-y-4">
                    {/* Interactive Mini Nav inside Mockup */}
                    <div className="flex items-center justify-between gap-2 pb-2 border-b border-[#2D2724]/6">
                      <span className="font-editorial text-sm font-semibold text-[#2D2724]">
                        andinipi
                      </span>
                      <div className="flex items-center gap-1">
                        {(['home', 'articles', 'infographic'] as PreviewTab[]).map(
                          (tab) => (
                            <button
                              key={tab}
                              type="button"
                              onClick={() => setPreviewTab(tab)}
                              className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                                previewTab === tab
                                  ? 'bg-[#D38B78] text-white'
                                  : 'text-[#6E6560] hover:bg-[#FAF6F2]'
                              }`}
                            >
                              {tab}
                            </button>
                          )
                        )}
                      </div>
                    </div>

                    {previewTab === 'home' && (
                      <>
                        <div className="h-28 rounded-xl bg-gradient-to-r from-[#F1D9D1]/80 via-[#ECE4DC] to-[#D8D8CE]/60 p-4 flex flex-col justify-center">
                          <span className="text-[9px] uppercase tracking-widest text-[#8A4E3E] font-bold">
                            Portfolio Hub
                          </span>
                          <p className="font-editorial text-xl font-bold text-[#2D2724]">
                            Andini Putri Ihsani
                          </p>
                          <p className="text-[11px] text-[#6E6560] mt-1">
                            Information Systems · ITPLN 2026
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3.5 rounded-xl bg-[#FAF6F2] border border-[#2D2724]/6">
                            <span className="text-[10px] font-bold text-[#D38B78]">
                              ARTICLE 01
                            </span>
                            <p className="text-xs font-semibold text-[#2D2724] mt-1">
                              Digital Ecosystems
                            </p>
                            <p className="text-[11px] text-[#6E6560] mt-1 leading-snug">
                              Visual infographic synthesis and analysis on cloud databases.
                            </p>
                          </div>
                          <div className="p-3.5 rounded-xl bg-[#FAF6F2] border border-[#2D2724]/6">
                            <span className="text-[10px] font-bold text-[#545643]">
                              CREATIVE
                            </span>
                            <p className="text-xs font-semibold text-[#2D2724] mt-1">
                              Visual Storytelling
                            </p>
                            <p className="text-[11px] text-[#6E6560] mt-1 leading-snug">
                              Editorial layout, palette harmony &amp; user empathy.
                            </p>
                          </div>
                        </div>
                      </>
                    )}

                    {previewTab === 'articles' && (
                      <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-[#FAF6F2] border border-[#2D2724]/6">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D38B78]">
                            Featured Essay · 4 min read
                          </span>
                          <p className="font-editorial text-base font-semibold text-[#2D2724] mt-1">
                            How Structured Data Shapes Everyday Campus Services
                          </p>
                          <p className="text-[11px] text-[#6E6560] mt-1.5 leading-relaxed">
                            Examining relational tables, student record workflows, and clean UI entry forms.
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#FAF6F2] border border-[#2D2724]/6">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#545643]">
                            Technical Digest · 3 min read
                          </span>
                          <p className="font-editorial text-base font-semibold text-[#2D2724] mt-1">
                            First Steps in Cybersecurity Telemetry with Wazuh
                          </p>
                          <p className="text-[11px] text-[#6E6560] mt-1.5 leading-relaxed">
                            Reflections from hands-on SIEM monitoring and alert hygiene workshops.
                          </p>
                        </div>
                      </div>
                    )}

                    {previewTab === 'infographic' && (
                      <div className="p-4 rounded-xl bg-[#FAF6F2] border border-[#2D2724]/6 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D38B78]">
                            Visual Breakdown
                          </span>
                          <span className="text-[10px] text-[#6E6560]">Canva Layout Grid</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="p-3 rounded-lg bg-[#F1D9D1]/60">
                            <span className="font-editorial text-sm font-bold text-[#2D2724] block">
                              01
                            </span>
                            <span className="text-[10px] text-[#6E6560]">Research</span>
                          </div>
                          <div className="p-3 rounded-lg bg-[#D8D8CE]/60">
                            <span className="font-editorial text-sm font-bold text-[#2D2724] block">
                              02
                            </span>
                            <span className="text-[10px] text-[#6E6560]">Synthesize</span>
                          </div>
                          <div className="p-3 rounded-lg bg-[#ECE4DC]">
                            <span className="font-editorial text-sm font-bold text-[#2D2724] block">
                              03
                            </span>
                            <span className="text-[10px] text-[#6E6560]">Publish</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-[#6E6560] leading-relaxed">
                          Calibrated contrast and generous whitespace keep long-form student articles approachable on mobile screens.
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between text-[11px] text-[#9A908A] pt-1">
                      <span>Published on Wix Cloud</span>
                      <span className="font-mono text-[10px]">Desktop &amp; Mobile Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Case Studies Grid */}
        {secondaryProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => onSelectProject(project)}
                className="group text-left bg-white rounded-3xl p-7 border border-[#2D2724]/6 shadow-[0_12px_30px_-10px_rgba(45,39,36,0.06)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D38B78]"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#9A908A] mb-3">
                    <span className="tabular-nums">{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#D38B78]">{project.tools}</span>
                  </div>
                  <h3 className="font-editorial text-xl font-semibold text-[#2D2724] leading-snug group-hover:text-[#8A4E3E] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-[13px] text-[#6E6560] leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2D2724]/8 flex items-center justify-between w-full text-xs font-semibold text-[#2D2724]">
                  <span>{project.type}</span>
                  <span className="text-[#D38B78] group-hover:translate-x-0.5 transition-transform">
                    Inspect →
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
