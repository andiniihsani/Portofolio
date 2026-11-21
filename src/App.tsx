import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FocusAreasSection from './components/FocusAreasSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import SkillsAndEducationSection from './components/SkillsAndEducationSection';
import ExperienceSection from './components/ExperienceSection';
import ContactBannerAndFooter from './components/ContactBannerAndFooter';
import {
  ContactModal,
  CVModal,
  FocusDetailModal,
  ProjectDetailModal,
} from './components/PortfolioModals';
import type { FocusArea, ProjectItem } from './data/portfolioData';

const SECTION_IDS = ['hero', 'focus', 'projects', 'about', 'experience'];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedFocus, setSelectedFocus] = useState<FocusArea | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-35% 0px -50% 0px', threshold: 0.05 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF6F2] bg-grain text-[#2D2724]">
      <Header
        activeSection={activeSection}
        onOpenContact={() => setContactModalOpen(true)}
      />

      <main>
        <HeroSection onOpenCV={() => setCvModalOpen(true)} />
        <FocusAreasSection onSelectFocus={setSelectedFocus} />
        <FeaturedProjectsSection onSelectProject={setSelectedProject} />
        <SkillsAndEducationSection onOpenCV={() => setCvModalOpen(true)} />
        <ExperienceSection />
      </main>

      <ContactBannerAndFooter onOpenContact={() => setContactModalOpen(true)} />

      {selectedFocus && (
        <FocusDetailModal
          area={selectedFocus}
          onClose={() => setSelectedFocus(null)}
        />
      )}

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {cvModalOpen && <CVModal onClose={() => setCvModalOpen(false)} />}

      {contactModalOpen && (
        <ContactModal onClose={() => setContactModalOpen(false)} />
      )}
    </div>
  );
}
