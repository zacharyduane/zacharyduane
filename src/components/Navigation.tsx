import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, FileCode2, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../data/skillsData';

interface NavigationProps {
  onOpenWordPressModal: () => void;
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenWordPressModal,
  activeSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState('');

  // Clock in Northern Minnesota (US Central)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Chicago',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'disciplines', label: 'Disciplines (70)' },
    { id: 'experience', label: 'Experience' },
    { id: 'schedule', label: 'Schedule Appointment' },
    { id: 'about', label: 'About Zachary' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#fafafa]/95 backdrop-blur-md border-b border-neutral-300 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Mark */}
          <div className="flex items-center gap-3">
            <a
              href="#overview"
              className="group flex flex-col text-left focus:outline-none"
            >
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#34609b] group-hover:text-black transition-colors uppercase leading-none font-mono">
                ZACHARY DUANE
              </span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest mt-0.5">
                Polymath · Systems · Craft
              </span>
            </a>

            {/* Subtle Timezone status */}
            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-neutral-300 text-[11px] text-neutral-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>MN (CT): {localTime || '10:31:00'}</span>
            </div>
          </div>

          {/* Desktop Nav Items (Clean typography with subtle underline, no pills) */}
          <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-700">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`transition-colors py-1 ${
                    isActive
                      ? 'text-black font-bold border-b-2 border-[#34609b]'
                      : 'hover:text-black hover:border-b-2 hover:border-neutral-400'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenWordPressModal}
              className="px-2.5 py-1.5 border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-800 text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="View WordPress Theme & Block Code"
            >
              <FileCode2 className="w-3.5 h-3.5 text-[#34609b]" />
              <span className="hidden lg:inline">WordPress Export</span>
            </button>

            <a
              href={`tel:${PROFILE.cleanPhone}`}
              className="px-3 py-1.5 bg-neutral-900 text-white hover:bg-neutral-800 text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Phone className="w-3 h-3" />
              <span>{PROFILE.phone}</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border border-neutral-300 text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-300 bg-white p-4 space-y-3 font-mono text-xs">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 px-1 text-neutral-800 hover:text-[#34609b] border-b border-neutral-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenWordPressModal();
              }}
              className="w-full py-2 px-3 border border-neutral-300 text-neutral-800 flex items-center justify-center gap-2 bg-neutral-50"
            >
              <FileCode2 className="w-3.5 h-3.5 text-[#34609b]" />
              <span>WordPress Gutenberg / Theme Export</span>
            </button>

            <a
              href={`tel:${PROFILE.cleanPhone}`}
              className="w-full py-2 px-3 bg-neutral-900 text-white flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {PROFILE.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
