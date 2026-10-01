import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Calendar,
  ArrowDown,
  ArrowUpRight,
  Download,
  Terminal,
  Layers,
  Sparkles,
  ExternalLink,
  Code,
  FileCode2,
  Share2,
  Check
} from 'lucide-react';
import { PROFILE, ALL_SKILLS } from './data/skillsData';
import { InteractiveBusinessCard } from './components/InteractiveBusinessCard';
import { AboutSection } from './components/AboutSection';
import { SkillMatrix } from './components/SkillMatrix';
import { ExperienceShowcase } from './components/ExperienceShowcase';
import { AppointmentCalendar } from './components/AppointmentCalendar';
import { ContactSection } from './components/ContactSection';
import { WordPressBridgeModal } from './components/WordPressBridgeModal';
import { Navigation } from './components/Navigation';

export default function App() {
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);
  const [calendarTopic, setCalendarTopic] = useState<string | null>(null);
  const [isWpModalOpen, setIsWpModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'disciplines', 'experience', 'schedule', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookFromSkill = (skillName: string) => {
    setCalendarTopic(skillName);
    const scheduleEl = document.getElementById('schedule');
    if (scheduleEl) {
      scheduleEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleFromArea = (areaTitle: string) => {
    setCalendarTopic(areaTitle);
    const scheduleEl = document.getElementById('schedule');
    if (scheduleEl) {
      scheduleEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInspectSkillByName = (skillName: string) => {
    const found = ALL_SKILLS.find(
      (s) => s.name.toLowerCase() === skillName.toLowerCase()
    );
    if (found) {
      setSelectedSkillId(found.id);
      const discEl = document.getElementById('disciplines');
      if (discEl) {
        discEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleShareSite = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#121316] font-sans selection:bg-[#34609b] selection:text-white">
      {/* Top Banner: Status & Barter Notification */}
      <div className="bg-neutral-900 text-neutral-300 text-[11px] py-1.5 px-4 font-mono border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#34609b] inline-block"></span>
            <span>Zachary Duane · Polymath Practice</span>
            <span className="hidden sm:inline text-neutral-500">·</span>
            <span className="text-emerald-400 font-medium">● Schedule: Mon – Wed 12pm – 4pm CT</span>
          </div>

          <div className="flex items-center gap-3 text-neutral-400">
            <a
              href={`mailto:${PROFILE.email}`}
              className="hover:text-white text-neutral-300 transition-colors"
            >
              {PROFILE.email}
            </a>
            <span className="text-neutral-600">|</span>
            <a
              href={`tel:${PROFILE.cleanPhone}`}
              className="hover:text-white text-neutral-300 transition-colors"
            >
              {PROFILE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <Navigation
        activeSection={activeSection}
        onOpenWordPressModal={() => setIsWpModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-24 sm:space-y-32">
        {/* ================= SECTION 01: HERO & BUSINESS CARD ================= */}
        <section id="overview" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: Manifesto & Headline */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#34609b] font-semibold">
                  01 // SYSTEMS · ECOLOGY · FABRICATION · ESOTERICS
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-neutral-900 leading-[0.95] uppercase">
                  ZACHARY<br />DUANE
                </h1>
                <p className="text-sm sm:text-base font-reading text-neutral-700 leading-relaxed pt-2">
                  Independent polymath, systems administrator, permaculture designer, and bespoke craftsman. Operating across 70 distinct disciplines with high contrast, radical minimalism, and generous whitespace.
                </p>
              </div>

              {/* High-Contrast Fast Contact Strip */}
              <div className="border border-neutral-300 bg-white p-4 font-mono text-xs space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-400 uppercase">Direct Email:</span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-neutral-900 font-bold hover:text-[#34609b]"
                  >
                    {PROFILE.email}
                  </a>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-400 uppercase">Availability:</span>
                  <span className="text-neutral-900 font-medium">Mon – Wed · 12:00 PM – 4:00 PM (CT)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
                  <span className="text-neutral-400 uppercase">WordPress:</span>
                  <a
                    href={PROFILE.websites[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#34609b] hover:underline"
                  >
                    {PROFILE.websites[0].label}
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 uppercase">Exchange:</span>
                  <span className="text-emerald-700 font-medium">Consulting &amp; Passion Barter Welcomed</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#schedule"
                  className="px-6 py-3 bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-xs"
                >
                  Schedule (M–W 12–4pm)
                </a>

                <button
                  onClick={() => setIsWpModalOpen(true)}
                  className="px-5 py-3 bg-[#34609b] hover:bg-[#254674] text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>WordPress Site Pack</span>
                </button>

                <a
                  href="#about"
                  className="px-4 py-3 bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-900 font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  About Zachary
                </a>

                <button
                  onClick={handleShareSite}
                  className="p-3 border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-700 transition-colors"
                  title="Copy Site Link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Right: Interactive Physical Business Card */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <InteractiveBusinessCard
                selectedSkillId={selectedSkillId}
                onSelectSkill={(id) => {
                  setSelectedSkillId(id);
                  const discEl = document.getElementById('disciplines');
                  if (discEl) discEl.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>
          </div>
        </section>

        {/* ================= SECTION 02: THE 70-DISCIPLINE MATRIX ================= */}
        <section id="disciplines" className="scroll-mt-24">
          <SkillMatrix
            selectedSkillId={selectedSkillId}
            onSelectSkill={setSelectedSkillId}
            onBookConsultation={handleBookFromSkill}
          />
        </section>

        {/* ================= SECTION 03: PRACTICE PILLARS & EXPERIENCE ================= */}
        <section id="experience" className="scroll-mt-24">
          <ExperienceShowcase
            onScheduleArea={handleScheduleFromArea}
            onInspectSkill={handleInspectSkillByName}
          />
        </section>

        {/* ================= SECTION 04: APPOINTMENT BOOKING CALENDAR ================= */}
        <section id="schedule" className="scroll-mt-24">
          <AppointmentCalendar initialTopic={calendarTopic} />
        </section>

        {/* ================= SECTION 05: ABOUT ZACHARY DUANE ================= */}
        <section id="about" className="scroll-mt-24">
          <AboutSection
            onScheduleClick={() => {
              const scheduleEl = document.getElementById('schedule');
              if (scheduleEl) scheduleEl.scrollIntoView({ behavior: 'smooth' });
            }}
            onExploreDisciplines={() => {
              const discEl = document.getElementById('disciplines');
              if (discEl) discEl.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </section>

        {/* ================= SECTION 06: CONTACT PAGE & DIRECT DISPATCH ================= */}
        <section id="contact" className="scroll-mt-24">
          <ContactSection />
        </section>
      </main>

      {/* WordPress Theme / Block Export Modal */}
      <WordPressBridgeModal
        isOpen={isWpModalOpen}
        onClose={() => setIsWpModalOpen(false)}
      />

      {/* Colophon & Footer */}
      <footer className="border-t border-neutral-300 bg-white font-mono text-xs text-neutral-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-neutral-200">
            {/* Col 1: Identity */}
            <div className="space-y-2">
              <span className="font-bold text-base text-neutral-900 uppercase block text-[#34609b]">
                ZACHARY DUANE
              </span>
              <p className="text-neutral-500 font-reading text-xs">
                Minimalist personal web platform and appointment portal built from the physical business card catalog.
              </p>
              <div className="text-[11px] text-neutral-400 pt-1">
                Area Code: (218) · Northern Minnesota
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                Site Index
              </span>
              <div><a href="#overview" className="hover:text-black transition-colors">01 // Overview</a></div>
              <div><a href="#disciplines" className="hover:text-black transition-colors">02 // 70 Disciplines</a></div>
              <div><a href="#experience" className="hover:text-black transition-colors">03 // Practice Pillars</a></div>
              <div><a href="#schedule" className="hover:text-black transition-colors">04 // Schedule Session</a></div>
              <div><a href="#about" className="hover:text-black transition-colors">05 // About Zachary</a></div>
              <div><a href="#contact" className="hover:text-black transition-colors">06 // Contact Lines</a></div>
            </div>

            {/* Col 3: Network Domains */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                Network &amp; Hosted Sites
              </span>
              <div>
                <a
                  href={PROFILE.websites[0].url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#34609b] flex items-center gap-1"
                >
                  <span>{PROFILE.websites[0].label}</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setIsWpModalOpen(true)}
                  className="text-[#34609b] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <FileCode2 className="w-3 h-3" />
                  <span>WordPress Export Tool</span>
                </button>
              </div>
            </div>

            {/* Col 4: Contact Direct */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                Direct Contact
              </span>
              <div>
                <a href={`tel:${PROFILE.cleanPhone}`} className="hover:text-black font-medium">
                  {PROFILE.phone}
                </a>
              </div>
              <div className="break-all">
                <a href={`mailto:${PROFILE.email}`} className="hover:text-black">
                  {PROFILE.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-emerald-700">
                Mutual Aid &amp; Barter Respected
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
            <div>
              &copy; {new Date().getFullYear()} Zachary Duane. Typeset in JetBrains Mono &amp; Space Mono.
            </div>
            <div className="flex items-center gap-4">
              <span>Pure HTML &amp; CSS Semantics</span>
              <span>·</span>
              <span>Zero-Pill Typography</span>
              <span>·</span>
              <a href="#overview" className="hover:text-neutral-900 transition-colors">
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
