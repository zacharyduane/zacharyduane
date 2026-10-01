import React, { useState } from 'react';
import { RefreshCw, Copy, Check, Phone, Mail, Globe, Download, Sparkles } from 'lucide-react';
import { PROFILE, ALL_SKILLS } from '../data/skillsData';

interface InteractiveBusinessCardProps {
  onSelectSkill?: (skillId: string) => void;
  selectedSkillId?: string | null;
}

export const InteractiveBusinessCard: React.FC<InteractiveBusinessCardProps> = ({
  onSelectSkill,
  selectedSkillId,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDownloadVCard = () => {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${PROFILE.name}`,
      `N:Duane;Zachary;;;`,
      `TEL;TYPE=CELL,VOICE:${PROFILE.phone}`,
      `EMAIL;TYPE=INTERNET,PREF:${PROFILE.email}`,
      `URL:${PROFILE.websites[0].url}`,
      `TITLE:Polymath · Systems · Permaculture · Craft`,
      `NOTE:Skills: Technology, Linux, Permaculture, Off-Grid, Woodworking, Typography, WordPress`,
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Zachary_Duane.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Action Bar Above Card */}
      <div className="w-full max-w-xl flex items-center justify-between mb-4 text-xs font-mono">
        <span className="text-neutral-500 uppercase tracking-wider flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#34609b] inline-block animate-pulse"></span>
          Physical Card Archive
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-neutral-100 hover:bg-neutral-800 transition-colors rounded-none font-mono text-xs border border-neutral-700 cursor-pointer shadow-sm"
            title="Flip to view other side"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{isFlipped ? 'View Front Side' : 'Flip to 70 Disciplines'}</span>
          </button>

          <button
            onClick={handleDownloadVCard}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition-colors rounded-none font-mono text-xs border border-neutral-300 cursor-pointer"
            title="Save contact (.vcf)"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Save Contact</span>
          </button>
        </div>
      </div>

      {/* 3D Perspective Card Container */}
      <div
        className="w-full max-w-xl aspect-[1.75/1] min-h-[300px] sm:min-h-[330px] perspective-1000 relative select-none"
        style={{ perspective: '1200px' }}
      >
        <div
          className={`w-full h-full relative transition-transform duration-700 ease-in-out cursor-pointer [transform-style:preserve-3d] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-neutral-300 rounded-sm bg-[#fafafa]`}
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* ================= FRONT SIDE ================= */}
          <div
            className="absolute inset-0 w-full h-full p-6 sm:p-8 flex flex-col justify-between [backface-visibility:hidden] bg-[#fbfbfa] text-neutral-900 overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(rgba(0,0,0,0.03) 1px, transparent 0)',
              backgroundSize: '16px 16px',
            }}
          >
            {/* Subtle top edge bar */}
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                Card Ref: 2026-ZD-01
              </span>
              <span className="text-[10px] font-mono text-[#34609b] font-medium tracking-wider">
                CLICK CARD TO FLIP ↻
              </span>
            </div>

            {/* Middle Graphic Name Typography */}
            <div className="flex justify-end pr-2 sm:pr-4 py-2">
              <div className="text-right">
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.85] text-[#34609b] uppercase"
                  style={{
                    fontFamily: "'Space Mono', 'JetBrains Mono', sans-serif",
                    letterSpacing: '-0.05em',
                    textShadow: '0.5px 0.5px 0px rgba(0,0,0,0.1)',
                  }}
                >
                  ZACHARY<br />DUANE
                </h1>
                <p className="mt-1 text-[11px] font-mono text-neutral-500 tracking-wider uppercase">
                  Systems · Earth · Craft
                </p>
              </div>
            </div>

            {/* Bottom Contact Info (from business card) */}
            <div className="font-mono text-xs sm:text-sm text-neutral-800 space-y-1 pt-2 border-t border-neutral-200">
              <div className="flex items-center gap-2 group/field">
                <span className="font-bold text-neutral-900 tracking-tight">{PROFILE.phone}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(PROFILE.phone, 'phone');
                  }}
                  className="opacity-40 group-hover/field:opacity-100 transition-opacity p-0.5 hover:text-[#34609b]"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2 group/field">
                <span className="text-neutral-700 tracking-tight">{PROFILE.email}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(PROFILE.email, 'email');
                  }}
                  className="opacity-40 group-hover/field:opacity-100 transition-opacity p-0.5 hover:text-[#34609b]"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="text-[11px] sm:text-xs text-neutral-500 pt-0.5">
                <a
                  href={PROFILE.websites[0].url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-[#34609b] transition-colors underline-offset-2 hover:underline"
                >
                  {PROFILE.websites[0].label}
                </a>
              </div>
            </div>
          </div>

          {/* ================= BACK SIDE (SKILLS CLOUD) ================= */}
          <div
            className="absolute inset-0 w-full h-full p-4 sm:p-6 flex flex-col justify-between [backface-visibility:hidden] bg-[#fdfdfc] text-neutral-900 [transform:rotateY(180deg)] overflow-y-auto"
            style={{
              backgroundImage: 'radial-gradient(rgba(0,0,0,0.02) 1px, transparent 0)',
              backgroundSize: '12px 12px',
            }}
          >
            {/* Top row */}
            <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
              <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                Full Card Repertory (70 Disciplines)
              </span>
              <span className="text-[10px] font-mono text-[#34609b] font-medium tracking-wider">
                CLICK TO FLIP FRONT ↻
              </span>
            </div>

            {/* Exactly as typeset on card back */}
            <div className="py-2 text-center leading-[1.65] font-serif text-[11px] sm:text-[12.5px] text-neutral-800 tracking-wide select-text">
              {ALL_SKILLS.map((skill, index) => {
                const isSelected = selectedSkillId === skill.id;
                return (
                  <React.Fragment key={skill.id}>
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSkill?.(skill.id);
                      }}
                      className={`inline-block px-1 py-0.5 transition-all duration-150 cursor-pointer rounded-sm ${
                        isSelected
                          ? 'bg-[#34609b] text-white font-medium scale-105 shadow-xs'
                          : 'hover:bg-neutral-200 hover:text-black hover:underline'
                      }`}
                      title={`Inspect discipline: ${skill.name} (${skill.categoryLabel})`}
                    >
                      {skill.name}
                    </span>
                    {index < ALL_SKILLS.length - 1 && (
                      <span className="text-neutral-400 mx-1 select-none font-sans font-light">·</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Bottom info banner */}
            <div className="pt-2 border-t border-neutral-200 flex justify-between items-center text-[10px] font-mono text-neutral-500">
              <span>Click any skill to inspect details below</span>
              <span className="text-neutral-900 font-medium">Zachary Duane</span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs text-neutral-500 font-mono text-center">
        Tip: Flip the card or click any discipline to highlight its case study &amp; scheduling options.
      </p>
    </div>
  );
};
