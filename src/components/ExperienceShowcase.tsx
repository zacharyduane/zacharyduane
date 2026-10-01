import React from 'react';
import { ArrowUpRight, Terminal, Trees, Hammer, Users } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/skillsData';

interface ExperienceShowcaseProps {
  onScheduleArea: (title: string) => void;
  onInspectSkill: (skillName: string) => void;
}

export const ExperienceShowcase: React.FC<ExperienceShowcaseProps> = ({
  onScheduleArea,
  onInspectSkill,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'tech':
        return <Terminal className="w-5 h-5 text-[#34609b]" />;
      case 'earth':
        return <Trees className="w-5 h-5 text-[#34609b]" />;
      case 'craft':
        return <Hammer className="w-5 h-5 text-[#34609b]" />;
      case 'community':
        return <Users className="w-5 h-5 text-[#34609b]" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-neutral-300">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#34609b] mb-1">
            03 // PRACTICE PILLARS &amp; EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-neutral-900">
            Selected Practice Areas
          </h2>
          <p className="mt-2 text-sm text-neutral-600 max-w-2xl font-mono">
            Bridging technical architecture, biological systems, heirloom craftsmanship, and community advocacy through a unified lens of self-reliance.
          </p>
        </div>

        <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-500">
          Field-tested &amp; Barter-friendly
        </div>
      </div>

      {/* Grid of 4 Practice Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRACTICE_AREAS.map((area) => (
          <div
            key={area.id}
            className="border border-neutral-300 bg-white p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-900 transition-colors group"
          >
            <div>
              {/* Header row */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-[#34609b] transition-colors">
                  {area.number} // FACET
                </span>
                <div className="p-2 bg-neutral-50 border border-neutral-200">
                  {getIcon(area.id)}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-neutral-900 mb-2 leading-tight">
                {area.title}
              </h3>
              <p className="text-xs font-mono text-[#34609b] mb-4">
                {area.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm font-reading text-neutral-700 leading-relaxed mb-6">
                {area.description}
              </p>

              {/* Deliverables List */}
              <div className="mb-6 font-mono text-xs">
                <span className="uppercase tracking-wider text-neutral-400 text-[10px] block mb-2">
                  Sample Engagements &amp; Deliverables
                </span>
                <ul className="space-y-1.5 text-neutral-800">
                  {area.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#34609b] select-none font-mono">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom: Skills reference (zero-pill unboxed text with separators) & CTA */}
            <div className="pt-4 border-t border-neutral-200">
              <div className="text-[11px] font-mono text-neutral-500 mb-4 flex flex-wrap items-center gap-1.5">
                <span className="text-neutral-400 uppercase text-[10px]">Applied:</span>
                {area.skills.map((skill, index) => (
                  <React.Fragment key={skill}>
                    <button
                      onClick={() => onInspectSkill(skill)}
                      className="hover:text-[#34609b] hover:underline transition-colors"
                    >
                      {skill}
                    </button>
                    {index < area.skills.length - 1 && (
                      <span className="text-neutral-300 select-none">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <button
                onClick={() => onScheduleArea(area.title)}
                className="w-full py-2 px-3 border border-neutral-900 bg-white text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Initiate Consultation in this Area</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Polymath Manifesto Box */}
      <div className="mt-12 p-8 border-2 border-neutral-900 bg-[#fbfbfa]">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#34609b] block mb-2 font-bold">
            The Polymath Synthesis
          </span>
          <h3 className="text-xl sm:text-2xl font-mono font-bold text-neutral-900 mb-3">
            Why integrate Linux servers, permaculture, woodworking, and tarot?
          </h3>
          <p className="text-sm font-reading text-neutral-700 leading-relaxed mb-4">
            Hyper-specialization creates fragile silos. A person who understands how an operating system kernel handles thread scheduling can more clearly see how a permaculture swale manages hydraulic energy down a slope. A woodworker who respects the grain of white oak brings that same tactile patience to accessible web typography and community consensus.
          </p>
          <div className="font-mono text-xs text-neutral-600 flex flex-wrap gap-4 pt-3 border-t border-neutral-200">
            <span>· Open Source Ethos</span>
            <span>· Minimal Embodied Waste</span>
            <span>· High-Contrast Directness</span>
            <span>· Barter &amp; Mutual Aid Welcomed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
