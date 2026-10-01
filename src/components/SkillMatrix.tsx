import React, { useState, useMemo } from 'react';
import { Search, ArrowUpRight, X, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { ALL_SKILLS, CATEGORIES, Skill } from '../data/skillsData';

interface SkillMatrixProps {
  selectedSkillId: string | null;
  onSelectSkill: (id: string | null) => void;
  onBookConsultation: (skillName: string) => void;
}

export const SkillMatrix: React.FC<SkillMatrixProps> = ({
  selectedSkillId,
  onSelectSkill,
  onBookConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = useMemo(() => {
    return ALL_SKILLS.filter((skill) => {
      const matchesCategory =
        activeCategory === 'all' || skill.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        skill.name.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.application.toLowerCase().includes(query) ||
        skill.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const activeSkill = useMemo(() => {
    return ALL_SKILLS.find((s) => s.id === selectedSkillId) || null;
  }, [selectedSkillId]);

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-300">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#34609b] mb-1">
            02 // TAXONOMY &amp; DISCIPLINES
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-neutral-900">
            The 70-Discipline Matrix
          </h2>
          <p className="mt-2 text-sm text-neutral-600 max-w-2xl font-mono">
            Every entry from the physical card cataloged. Filter by domain or search by keyword to inspect direct applications.
          </p>
        </div>

        <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-500">
          Showing <span className="font-bold text-neutral-900">{filteredSkills.length}</span> of {ALL_SKILLS.length} areas
        </div>
      </div>

      {/* Controls: Search and Interactive Filter Segmented Buttons */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
        {/* Search input with high contrast styling */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search disciplines (e.g. Linux, Permaculture, Woodworking, Tarot)..."
            className="w-full pl-10 pr-9 py-2.5 bg-white border border-neutral-300 text-sm font-mono text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#34609b] focus:ring-1 focus:ring-[#34609b] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter categories as functional buttons conforming to zero-pill rules */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider whitespace-nowrap border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900 hover:text-neutral-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid & Inspector Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Skills Grid */}
        <div className={`transition-all duration-300 ${activeSkill ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
          {filteredSkills.length === 0 ? (
            <div className="p-12 text-center border border-dashed border-neutral-300 bg-white font-mono text-sm text-neutral-500">
              No disciplines match &quot;{searchQuery}&quot;. Clear search to view all 70 areas.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {filteredSkills.map((skill) => {
                const isSelected = selectedSkillId === skill.id;
                return (
                  <div
                    key={skill.id}
                    onClick={() => onSelectSkill(isSelected ? null : skill.id)}
                    className={`p-3 border text-left cursor-pointer transition-all duration-150 flex flex-col justify-between group ${
                      isSelected
                        ? 'border-[#34609b] bg-[#eaf1f9] ring-1 ring-[#34609b]'
                        : 'border-neutral-200 bg-white hover:border-neutral-900 hover:bg-neutral-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <span className="font-mono font-medium text-xs sm:text-sm text-neutral-900 tracking-tight group-hover:text-black">
                        {skill.name}
                      </span>
                      <ArrowUpRight
                        className={`w-3 h-3 transition-transform ${
                          isSelected
                            ? 'text-[#34609b] rotate-45'
                            : 'text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        }`}
                      />
                    </div>
                    {/* Quiet inline metadata with separator according to zero-pill guidelines */}
                    <div className="text-[10px] font-mono text-neutral-500 truncate">
                      {skill.categoryLabel}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Selected Skill Inspector Card */}
        {activeSkill && (
          <div className="lg:col-span-5 sticky top-24 bg-white border-2 border-neutral-900 p-6 sm:p-7 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start justify-between pb-4 border-b border-neutral-200">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#34609b] tracking-wider font-semibold">
                  {activeSkill.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-mono font-bold text-neutral-900 mt-1">
                  {activeSkill.name}
                </h3>
              </div>
              <button
                onClick={() => onSelectSkill(null)}
                className="p-1 text-neutral-400 hover:text-neutral-900 border border-neutral-200 hover:border-neutral-900 transition-colors"
                title="Close inspector"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-5 space-y-4 font-mono text-xs sm:text-sm">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                  Core Discipline Definition
                </span>
                <p className="text-neutral-800 leading-relaxed">
                  {activeSkill.description}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                  Zachary&apos;s Practical Application
                </span>
                <p className="text-neutral-900 leading-relaxed bg-neutral-50 p-3 border-l-2 border-[#34609b]">
                  {activeSkill.application}
                </p>
              </div>

              {activeSkill.related.length > 0 && (
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Intersecting Skills
                  </span>
                  {/* Zero-pill: Clean unboxed text with typographic separators */}
                  <div className="text-xs text-neutral-700 flex flex-wrap gap-1.5 items-center">
                    {activeSkill.related.map((rel, i) => {
                      const relSkill = ALL_SKILLS.find(
                        (s) => s.name.toLowerCase() === rel.toLowerCase()
                      );
                      return (
                        <React.Fragment key={rel}>
                          <button
                            onClick={() => relSkill && onSelectSkill(relSkill.id)}
                            className="hover:text-[#34609b] hover:underline cursor-pointer transition-colors"
                          >
                            {rel}
                          </button>
                          {i < activeSkill.related.length - 1 && (
                            <span className="text-neutral-400" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2">
              <button
                onClick={() => onBookConsultation(activeSkill.name)}
                className="w-full py-2.5 px-4 bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Book Appointment regarding {activeSkill.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onSelectSkill(null)}
                className="w-full py-2 px-4 bg-transparent text-neutral-600 font-mono text-xs hover:text-neutral-900 transition-colors"
              >
                Dismiss Inspector
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
