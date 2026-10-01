import React from 'react';
import {
  Terminal,
  Trees,
  Hammer,
  Users,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Sun,
  Flame,
  Scale,
  Clock,
  MapPin,
  Mail,
  Phone,
  Layers,
  Sparkles
} from 'lucide-react';
import { PROFILE } from '../data/skillsData';

interface AboutSectionProps {
  onScheduleClick: () => void;
  onExploreDisciplines: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onScheduleClick,
  onExploreDisciplines,
}) => {
  return (
    <div className="w-full space-y-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-neutral-300">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#34609b] mb-1 font-semibold">
            05 // BIOGRAPHY · METHODOLOGY · PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold tracking-tight text-neutral-900 uppercase">
            About Zachary Duane
          </h2>
          <p className="mt-2 text-base font-reading text-neutral-700 max-w-3xl leading-relaxed">
            Systems architect, northern cold-climate permaculturist, traditional craftsman, and community organizer operating across 70 cataloged disciplines.
          </p>
        </div>

        <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-500">
          Base: Northern Minnesota · 218 Area
        </div>
      </div>

      {/* Main Narrative Dossier: 2 Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (8 cols): In-depth Narrative & Story */}
        <div className="lg:col-span-8 space-y-10">
          {/* Manifesto Callout */}
          <div className="p-6 sm:p-8 bg-white border-2 border-neutral-900 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#34609b] font-bold block mb-2">
              The Polymath Thesis
            </span>
            <blockquote className="text-lg sm:text-xl font-reading font-semibold text-neutral-900 leading-snug">
              &ldquo;Modern systems encourage narrow hyper-specialization, creating brittle technology, disconnected communities, and depleted soils. The polymath path isn&apos;t a scattered hobby—it is the deliberate study of underlying patterns that connect an operating system kernel, a cold-climate swale, and the grain of a white oak timber.&rdquo;
            </blockquote>
            <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>Zachary Duane</span>
              <span className="text-neutral-400">70 Intersecting Disciplines</span>
            </div>
          </div>

          {/* Deep Narrative Sections */}
          <div className="space-y-8 font-reading text-base text-neutral-800 leading-relaxed">
            <div>
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-neutral-900 mb-3 uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#34609b]">01.</span> Roots in Northern Minnesota &amp; Resilience
              </h3>
              <p className="mb-3">
                Working in the severe, sub-zero climate of Northern Minnesota (Area Code 218) demands absolute honesty from materials and systems. Nature does not accept shortcuts. Whether calculating the cold-cranking capacity and discharge curve of a solar battery array at -30°F, curing native birch and pine timber against warping, or shielding perennial root crowns under heavy mulch, everything must be engineered for durability.
              </p>
              <p>
                This environment shaped Zachary&apos;s working philosophy: <strong>low overhead, radical self-reliance, minimal embodied waste, and direct human accountability</strong>. There are no bloated abstractions or superficial corporate veneers—only systems that work reliably when put to the test.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-neutral-900 mb-3 uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#34609b]">02.</span> Cross-Pollinating Digital Architecture &amp; Living Ecology
              </h3>
              <p className="mb-3">
                Early immersion in Unix/Linux command-line environments, Debian server deployment, shell automation, and decentralized networking revealed a profound truth: <em>the architecture of a resilient operating system is fundamentally identical to a resilient permaculture food forest</em>.
              </p>
              <p className="mb-3">
                Both rely on:
              </p>
              <ul className="space-y-2 pl-4 border-l-2 border-[#34609b] text-neutral-900 text-sm font-reading my-4">
                <li>
                  <strong>Decentralized Redundancy:</strong> Avoiding single points of failure, whether in distributed server clusters or multi-tiered companion planting.
                </li>
                <li>
                  <strong>Feedback Loops:</strong> Monitoring metrics via terminal logs just as one observes soil moisture tension, compost thermal spikes, and frost pockets.
                </li>
                <li>
                  <strong>Open Protocols &amp; Mutual Aid:</strong> The open-source software philosophy applied directly to community seed libraries, tool sharing, and non-monetary passion barter.
                </li>
              </ul>
              <p>
                This synthesis allows Zachary to navigate complex tech infrastructure consultations with the patient, cyclical perspective of an ecological grower, and approach land design with the diagnostic rigor of a systems engineer.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-neutral-900 mb-3 uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#34609b]">03.</span> The Tactile Hand: Craft, Joinery &amp; Typography
              </h3>
              <p className="mb-3">
                Digital efficiency is balanced by physical craft. Zachary practices traditional woodworking—hand joinery with Japanese pull saws and bench chisels, timber frame construction, reclaimed lumber salvage, and natural wax finishes. There is a sacred tactile feedback in working physical wood that informs digital user experience: clarity, generous whitespace, zero artificial ornament, and monospaced typography designed to be read effortlessly.
              </p>
              <p>
                His creative practice extends into botanical linework, permanent ink tattooing, book publishing, and traditional herbal apothecary formulations—wildcrafting local botanicals into tinctures and salves that honor the boreal forest.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-neutral-900 mb-3 uppercase tracking-tight flex items-center gap-2">
                <span className="text-[#34609b]">04.</span> Economic Model: Barter, Trade &amp; Mutual Value
              </h3>
              <p className="mb-3">
                As clearly typeset on the back of his business card, <strong>Barter</strong> is recognized as a legitimate core discipline. While conventional consultations are scheduled during weekly hours (Mondays through Wednesdays, 12 PM to 4 PM CT), Zachary actively welcomes trade proposals for goods and skills he is passionate about.
              </p>
              <p>
                If you have heirloom seeds, seasoned hardwood timber, antique hand planes, rare books, solar gear, or a specialized craft skill to trade in exchange for systems consulting, permaculture property mapping, or custom web design, the door is wide open.
              </p>
            </div>
          </div>

          {/* Action Strip */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-300">
            <button
              onClick={onScheduleClick}
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Schedule Consultation (M–W 12–4pm)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onExploreDisciplines}
              className="px-5 py-3 bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 hover:border-neutral-900 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Inspect All 70 Disciplines</span>
            </button>
          </div>
        </div>

        {/* Right Column (4 cols): Detailed Dossier & Field Specifications */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Dossier Card */}
          <div className="bg-white border border-neutral-300 p-6 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider">Practitioner</span>
              <span className="text-neutral-900 font-bold text-sm">Zachary Duane</span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider">Practice</span>
              <span className="text-neutral-700">Systems, Ecology &amp; Craft</span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider">Geographic Region</span>
              <span className="text-neutral-900 font-medium">Northern MN (218 Area)</span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider">Active Disciplines</span>
              <span className="text-[#34609b] font-bold">70 Cataloged Facets</span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider">Office Hours</span>
              <span className="text-emerald-700 font-bold">Mon – Wed · 12–4pm CT</span>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider">Direct Telephone</span>
              <a href={`tel:${PROFILE.cleanPhone}`} className="text-neutral-900 font-bold hover:text-[#34609b]">
                {PROFILE.phone}
              </a>
            </div>

            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider">Direct Email</span>
              <a href={`mailto:${PROFILE.email}`} className="text-[#34609b] font-bold hover:underline break-all">
                {PROFILE.email}
              </a>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-neutral-400 uppercase text-[10px] tracking-wider">Primary Web</span>
              <a href={PROFILE.websites[0].url} target="_blank" rel="noreferrer" className="text-[#34609b] hover:underline">
                {PROFILE.websites[0].label}
              </a>
            </div>
          </div>

          {/* Technical Environments Box */}
          <div className="bg-[#fbfbfa] border border-neutral-300 p-6 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-900 font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#34609b]" />
              <span>Technical &amp; Systems Toolset</span>
            </h4>
            <div className="font-reading text-xs text-neutral-700 space-y-2 leading-relaxed">
              <p>
                <strong>OS &amp; Shell:</strong> Debian GNU/Linux, Ubuntu LTS, Arch Linux, POSIX sh, Bash scripting, Cron routines, systemd service management.
              </p>
              <p>
                <strong>Web &amp; Infrastructure:</strong> WordPress custom block engineering, semantic HTML5/CSS, Vite, Node/TS, REST APIs, Git version control.
              </p>
              <p>
                <strong>Security:</strong> Hardened SSH keys, UFW/iptables, GPG, zero-telemetry client setups, local-first workflows.
              </p>
            </div>
          </div>

          {/* Landcraft & Fabrication Toolset */}
          <div className="bg-[#fbfbfa] border border-neutral-300 p-6 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-900 font-bold flex items-center gap-2">
              <Sun className="w-4 h-4 text-emerald-700" />
              <span>Ecology &amp; Physical Craft</span>
            </h4>
            <div className="font-reading text-xs text-neutral-700 space-y-2 leading-relaxed">
              <p>
                <strong>Earth Systems:</strong> Perennial food forestry, swale geometry, cold microclimate siting, Hugelkultur, compost tea, heirloom seed collection.
              </p>
              <p>
                <strong>Energy &amp; Water:</strong> Off-grid solar PV arrays, MPPT controllers, LiFePO4 batteries, pure sine inverters, gravity water feed.
              </p>
              <p>
                <strong>Wood &amp; Metal:</strong> Hand joinery (dovetail/mortise-tenon), Japanese saws, Stanley planes, timber salvage, circuit soldering.
              </p>
              <p>
                <strong>Apothecary &amp; Arts:</strong> Cold-pressed plant tinctures, herbal extractions, botanical inks, tattoo linework, tarot archetypes.
              </p>
            </div>
          </div>

          {/* Passion Barter Indicator Box */}
          <div className="border border-emerald-800/40 bg-emerald-50/60 p-5 font-mono text-xs space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-bold uppercase">
              <Scale className="w-4 h-4 text-emerald-700" />
              <span>Passion Barter Welcome</span>
            </div>
            <p className="font-reading text-xs text-emerald-950 leading-relaxed">
              Open to trading professional consulting time for high-grade seeds, tools, timber, books, or community mutual aid.
            </p>
            <a
              href="mailto:zflategraff@gmail.com?subject=Passion%20Barter%20Proposal%20for%20Zachary%20Duane"
              className="inline-block pt-1 text-emerald-800 font-bold underline hover:text-emerald-950"
            >
              Propose an exchange →
            </a>
          </div>
        </div>
      </div>

      {/* 4 Pillars Summary Band */}
      <div className="pt-6 border-t border-neutral-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 border border-neutral-200 bg-white">
            <div className="font-mono text-xs text-[#34609b] font-bold mb-1">PILLAR 01</div>
            <h4 className="font-mono font-bold text-sm text-neutral-900 mb-2">Systems &amp; Open Web</h4>
            <p className="font-reading text-xs text-neutral-600 leading-relaxed">
              Durable, lightweight digital infrastructure, Linux administration, and bespoke WordPress development built to last decades.
            </p>
          </div>

          <div className="p-5 border border-neutral-200 bg-white">
            <div className="font-mono text-xs text-[#34609b] font-bold mb-1">PILLAR 02</div>
            <h4 className="font-mono font-bold text-sm text-neutral-900 mb-2">Earth &amp; Cold Ecology</h4>
            <p className="font-reading text-xs text-neutral-600 leading-relaxed">
              Regenerative food systems, off-grid solar, and gravity hydrology engineered for northern cold-climate resilience.
            </p>
          </div>

          <div className="p-5 border border-neutral-200 bg-white">
            <div className="font-mono text-xs text-[#34609b] font-bold mb-1">PILLAR 03</div>
            <h4 className="font-mono font-bold text-sm text-neutral-900 mb-2">Heirloom Timber &amp; Art</h4>
            <p className="font-reading text-xs text-neutral-600 leading-relaxed">
              Hand-cut joinery, reclaimed timber fabrication, austere monospace typography, and custom botanical tattoo art.
            </p>
          </div>

          <div className="p-5 border border-neutral-200 bg-white">
            <div className="font-mono text-xs text-[#34609b] font-bold mb-1">PILLAR 04</div>
            <h4 className="font-mono font-bold text-sm text-neutral-900 mb-2">Mutual Aid &amp; Barter</h4>
            <p className="font-reading text-xs text-neutral-600 leading-relaxed">
              Non-monetary value trade, apothecary healing, grassroots nonprofit strategy, and reflective advisory consultations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
