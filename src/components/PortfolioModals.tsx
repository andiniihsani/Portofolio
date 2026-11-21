import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MessageCircle,
  Printer,
  Send,
  X,
} from 'lucide-react';
import {
  EDUCATION_TIMELINE,
  EXPERIENCES,
  PROFILE,
  TOOLS,
  type FocusArea,
  type ProjectItem,
} from '../data/portfolioData';

interface ModalWrapperProps {
  title: string;
  eyebrow?: string;
  onClose: () => void;
  children: React.ReactNode;
  maxWidthClass?: string;
}

function ModalWrapper({
  title,
  eyebrow,
  onClose,
  children,
  maxWidthClass = 'max-w-2xl',
}: ModalWrapperProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2D2724]/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${maxWidthClass} max-h-[88vh] overflow-y-auto bg-[#FAF6F2] rounded-[28px] border border-[#2D2724]/10 shadow-2xl p-6 sm:p-8`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#2D2724]/10">
          <div>
            {eyebrow && (
              <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#D38B78]">
                {eyebrow}
              </p>
            )}
            <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#2D2724] mt-1">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-white border border-[#2D2724]/10 flex items-center justify-center text-[#2D2724] hover:bg-[#ECE4DC] transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}

export function FocusDetailModal({
  area,
  onClose,
}: {
  area: FocusArea;
  onClose: () => void;
}) {
  return (
    <ModalWrapper
      eyebrow={`${area.index} · ${area.kicker}`}
      title={`${area.titleLines[0]} ${area.titleLines[1]}`}
      onClose={onClose}
    >
      <p className="text-sm text-[#6E6560] leading-relaxed">{area.summary}</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl p-5 border border-[#2D2724]/6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2724] mb-3">
            Core Competencies
          </h4>
          <ul className="space-y-2">
            {area.competencies.map((item) => (
              <li
                key={item}
                className="text-xs text-[#6E6560] flex items-start gap-2 leading-relaxed"
              >
                <span className="text-[#D38B78] shrink-0" aria-hidden="true">
                  ✦
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#2D2724]/6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2724] mb-3">
            Related Coursework &amp; Focus
          </h4>
          <ul className="space-y-2">
            {area.coursework.map((course) => (
              <li
                key={course}
                className="text-xs text-[#6E6560] flex items-start gap-2 leading-relaxed"
              >
                <span className="text-[#545643] shrink-0" aria-hidden="true">
                  ·
                </span>
                <span>{course}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 p-4 rounded-2xl bg-[#ECE4DC]/60 border border-[#2D2724]/6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#545643] block">
          Practical Deliverable Example
        </span>
        <p className="text-xs text-[#2D2724] mt-1 leading-relaxed">
          {area.deliverableExample}
        </p>
      </div>
    </ModalWrapper>
  );
}

export function ProjectDetailModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  return (
    <ModalWrapper
      eyebrow={`${project.year} · ${project.type} · ${project.tools}`}
      title={project.title}
      onClose={onClose}
    >
      <p className="text-sm text-[#6E6560] leading-relaxed">{project.summary}</p>

      <div className="mt-6 space-y-3 bg-white rounded-2xl p-5 border border-[#2D2724]/6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2724] mb-2">
          Architecture &amp; Execution Notes
        </h4>
        {project.highlights.map((hl) => (
          <div key={hl.label} className="flex items-start gap-3">
            <span className="text-[#D38B78] mt-0.5 shrink-0" aria-hidden="true">
              ✦
            </span>
            <p className="text-xs sm:text-[13px] text-[#6E6560] leading-relaxed">
              <strong className="text-[#2D2724] font-semibold">{hl.label}:</strong>{' '}
              {hl.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#545643] hover:bg-[#424434] text-white text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            <span>OPEN LIVE SITE</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        )}
        <button
          type="button"
          onClick={onClose}
          className="px-5 py-3 rounded-full border border-[#2D2724]/20 hover:bg-[#ECE4DC] text-xs font-semibold uppercase tracking-wider text-[#2D2724] cursor-pointer"
        >
          Close
        </button>
      </div>
    </ModalWrapper>
  );
}

export function CVModal({ onClose }: { onClose: () => void }) {
  return (
    <ModalWrapper
      eyebrow="CURRICULUM VITAE · 2026"
      title={PROFILE.fullName}
      onClose={onClose}
      maxWidthClass="max-w-3xl"
    >
      <div className="bg-white rounded-2xl p-6 border border-[#2D2724]/8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#2D2724]/8">
          <div>
            <p className="text-xs font-semibold text-[#D38B78] uppercase tracking-wider">
              Information Systems Undergraduate · {PROFILE.institution}
            </p>
            <p className="text-xs text-[#6E6560] mt-1">
              {PROFILE.location} · {PROFILE.email} · {PROFILE.phoneDisplay}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D38B78] hover:bg-[#C27763] text-white text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Print / Save PDF</span>
            </button>
            <a
              href={PROFILE.wixUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#2D2724]/20 hover:bg-[#ECE4DC] text-[#2D2724] text-xs font-semibold whitespace-nowrap transition-colors"
            >
              <span>Wix Hub</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Education Summary */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#545643] mb-3">
            Education &amp; Certifications
          </h4>
          <div className="space-y-3">
            {EDUCATION_TIMELINE.map((edu) => (
              <div
                key={edu.id}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs"
              >
                <div>
                  <span className="font-semibold text-[#2D2724]">
                    {edu.institution}
                  </span>
                  <span className="text-[#6E6560]"> — {edu.roleOrDegree}</span>
                </div>
                <span className="font-mono text-[11px] text-[#9A908A] shrink-0 tabular-nums">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Organizational Experience Summary */}
        <div className="pt-4 border-t border-[#2D2724]/8">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#545643] mb-3">
            Organizational Leadership
          </h4>
          <div className="space-y-3">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="text-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-semibold text-[#2D2724]">
                    {exp.role} · {exp.organization}
                  </span>
                  <span className="font-mono text-[11px] text-[#D38B78] shrink-0 tabular-nums">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[#6E6560] mt-1 leading-relaxed">{exp.summary}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Stack Summary */}
        <div className="pt-4 border-t border-[#2D2724]/8">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#545643] mb-2">
            Technical Toolkit
          </h4>
          <p className="text-xs text-[#6E6560] leading-relaxed">
            {TOOLS.map((t) => t.name).join(' · ')}
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
}

export function ContactModal({ onClose }: { onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [topic, setTopic] = useState('Student Collaboration');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !senderEmail.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    `[${topic}] Hello Andini — from ${name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(message)}`;

  return (
    <ModalWrapper
      eyebrow="GET CONNECTED"
      title="Start a Conversation"
      onClose={onClose}
      maxWidthClass="max-w-xl"
    >
      {/* Direct Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <button
          type="button"
          onClick={handleCopyEmail}
          className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-white border border-[#2D2724]/10 hover:border-[#D38B78] transition-colors text-left cursor-pointer"
        >
          <div className="min-w-0">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#9A908A] block">
              Direct Email
            </span>
            <span className="text-xs font-semibold text-[#2D2724] truncate block">
              {PROFILE.email}
            </span>
          </div>
          <span className="w-8 h-8 rounded-full bg-[#FAF6F2] flex items-center justify-center text-[#D38B78] shrink-0">
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </span>
        </button>

        <a
          href={PROFILE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-white border border-[#2D2724]/10 hover:border-[#545643] transition-colors"
        >
          <div>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#9A908A] block">
              WhatsApp Chat
            </span>
            <span className="text-xs font-semibold text-[#2D2724] tabular-nums block">
              {PROFILE.phoneDisplay}
            </span>
          </div>
          <span className="w-8 h-8 rounded-full bg-[#D8D8CE]/45 flex items-center justify-center text-[#545643] shrink-0">
            <MessageCircle className="w-3.5 h-3.5" />
          </span>
        </a>
      </div>

      {submitted ? (
        <div className="bg-white rounded-2xl p-6 border border-[#2D2724]/8 text-center space-y-3">
          <div className="w-11 h-11 rounded-full bg-[#D8D8CE]/60 text-[#545643] flex items-center justify-center mx-auto">
            <Check className="w-5 h-5" />
          </div>
          <h4 className="font-editorial text-xl font-semibold text-[#2D2724]">
            Message Prepared for Andini
          </h4>
          <p className="text-xs text-[#6E6560] leading-relaxed max-w-sm mx-auto">
            Thank you, {name}. You can send this note directly via your email client or reach out on WhatsApp for an immediate reply.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D38B78] hover:bg-[#C27763] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Open in Mail App</span>
            </a>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="px-5 py-2.5 rounded-full border border-[#2D2724]/20 hover:bg-[#ECE4DC] text-xs font-semibold text-[#2D2724] cursor-pointer"
            >
              Edit Note
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-[11px] font-semibold uppercase tracking-wider text-[#6E6560] mb-1.5"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Nadia Kusuma"
                className="w-full px-4 py-2.5 rounded-2xl bg-white border border-[#2D2724]/15 text-sm text-[#2D2724] placeholder:text-[#9A908A] focus:outline-none focus:border-[#D38B78]"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-[11px] font-semibold uppercase tracking-wider text-[#6E6560] mb-1.5"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full px-4 py-2.5 rounded-2xl bg-white border border-[#2D2724]/15 text-sm text-[#2D2724] placeholder:text-[#9A908A] focus:outline-none focus:border-[#D38B78]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-topic"
              className="block text-[11px] font-semibold uppercase tracking-wider text-[#6E6560] mb-1.5"
            >
              Collaboration Topic
            </label>
            <select
              id="contact-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-white border border-[#2D2724]/15 text-sm text-[#2D2724] focus:outline-none focus:border-[#D38B78]"
            >
              <option value="Student Collaboration">Student Collaboration</option>
              <option value="UI/UX & Infographic Design">UI/UX &amp; Infographic Design</option>
              <option value="Information Systems Project">Information Systems Project</option>
              <option value="Committee & Event Operations">Committee &amp; Event Operations</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-[11px] font-semibold uppercase tracking-wider text-[#6E6560] mb-1.5"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share a brief overview of your project, question, or opportunity..."
              className="w-full px-4 py-2.5 rounded-2xl bg-white border border-[#2D2724]/15 text-sm text-[#2D2724] placeholder:text-[#9A908A] focus:outline-none focus:border-[#D38B78]"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#2D2724]/15 hover:bg-[#ECE4DC] text-xs font-semibold text-[#2D2724] cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D38B78] hover:bg-[#C27763] text-white text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors"
            >
              <Send className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Prepare Message</span>
            </button>
          </div>
        </form>
      )}
    </ModalWrapper>
  );
}
