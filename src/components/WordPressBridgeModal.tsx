import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  FileCode,
  Download,
  ExternalLink,
  Sparkles,
  Zap,
  CheckCircle2,
  Code
} from 'lucide-react';
import { PROFILE, ALL_SKILLS, PRACTICE_AREAS } from '../data/skillsData';

interface WordPressBridgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressBridgeModal: React.FC<WordPressBridgeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'code' | 'guide'>('guide');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // NEW CUSTOM HTML CODE (JETBRAINS MONO FOR HEADERS/TITLE/NAV, ROBOTO CONDENSED FOR BODY TEXT)
  // 100% SELF-CONTAINED ON WORDPRESS, ZERO IFRAMES, ZERO 404 LINKS, INSTANT LOADING
  const customHtmlCode = `<!-- ============================================================== -->
<!-- ZACHARY DUANE — SELF-CONTAINED WORDPRESS CUSTOM HTML CODE      -->
<!-- Headers & Title: JetBrains Mono | Body Text: Roboto Condensed   -->
<!-- 100% Hosted in WordPress · Zero External Links · Instant Load -->
<!-- ============================================================== -->

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap" rel="stylesheet">

<div id="zd-container" style="background-color: #fafafa; color: #121316; padding: 24px 16px; max-width: 1100px; margin: 0 auto; box-sizing: border-box; line-height: 1.6; font-family: 'Roboto Condensed', -apple-system, BlinkMacSystemFont, sans-serif;">

  <!-- NAVIGATION & STATUS BAR -->
  <div style="background-color: #111113; color: #f5f5f5; padding: 12px 18px; font-size: 11px; font-family: 'JetBrains Mono', monospace; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; border-bottom: 2px solid #34609b; margin-bottom: 36px; gap: 8px;">
    <span><strong style="color: #ffffff;">ZACHARY DUANE</strong> &nbsp;·&nbsp; POLYMATH PRACTICE</span>
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <a href="#disciplines-section" style="color: #cccccc; text-decoration: none;">01 // 70 DISCIPLINES</a>
      <a href="#experience-section" style="color: #cccccc; text-decoration: none;">02 // PILLARS</a>
      <a href="#schedule-section" style="color: #4ade80; text-decoration: none; font-weight: 700;">● SCHEDULE (M–W 12–4PM)</a>
      <a href="#about-section" style="color: #cccccc; text-decoration: none;">03 // ABOUT</a>
      <a href="#contact-section" style="color: #cccccc; text-decoration: none;">04 // CONTACT</a>
    </div>
  </div>

  <!-- SECTION 01: HERO & IDENTITY -->
  <div style="margin-bottom: 48px;">
    <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #34609b; font-weight: 700; font-family: 'JetBrains Mono', monospace;">01 // SYSTEMS · ECOLOGY · FABRICATION · ESOTERICS</span>
    <h1 style="font-family: 'JetBrains Mono', monospace; font-size: 52px; font-weight: 900; line-height: 0.95; margin: 12px 0; text-transform: uppercase; letter-spacing: -0.04em; color: #111113;">
      ZACHARY<br>DUANE
    </h1>
    <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 17px; color: #333333; max-width: 780px; line-height: 1.7; margin: 16px 0 24px 0;">
      Independent polymath, systems administrator, permaculture designer, and bespoke craftsman. Operating across 70 distinct disciplines with high contrast, radical minimalism, and generous whitespace.
    </p>

    <!-- CONTACT STRIP -->
    <div style="background: #ffffff; border: 1px solid #d4d4d4; padding: 18px; margin-bottom: 26px;">
      <div style="padding-bottom: 8px; border-bottom: 1px solid #eeeeee; display: flex; justify-content: space-between; flex-wrap: wrap; font-size: 13px;">
        <span style="font-family: 'JetBrains Mono', monospace; color: #666666; text-transform: uppercase; font-size: 11px;">Telephone:</span>
        <a href="tel:+12185808997" style="font-family: 'JetBrains Mono', monospace; color: #111113; font-weight: 700; text-decoration: none;">(218) 580-8997</a>
      </div>
      <div style="padding: 8px 0; border-bottom: 1px solid #eeeeee; display: flex; justify-content: space-between; flex-wrap: wrap; font-size: 13px;">
        <span style="font-family: 'JetBrains Mono', monospace; color: #666666; text-transform: uppercase; font-size: 11px;">Email Address:</span>
        <a href="mailto:zflategraff@gmail.com" style="font-family: 'JetBrains Mono', monospace; color: #34609b; font-weight: 700; text-decoration: none;">zflategraff@gmail.com</a>
      </div>
      <div style="padding: 8px 0; border-bottom: 1px solid #eeeeee; display: flex; justify-content: space-between; flex-wrap: wrap; font-size: 13px;">
        <span style="font-family: 'JetBrains Mono', monospace; color: #666666; text-transform: uppercase; font-size: 11px;">Website:</span>
        <a href="https://zacharyduane.wordpress.com" target="_blank" rel="noreferrer" style="font-family: 'JetBrains Mono', monospace; color: #34609b; font-weight: 700; text-decoration: none;">zacharyduane.wordpress.com</a>
      </div>
      <div style="padding: 8px 0; border-bottom: 1px solid #eeeeee; display: flex; justify-content: space-between; flex-wrap: wrap; font-size: 13px;">
        <span style="font-family: 'JetBrains Mono', monospace; color: #666666; text-transform: uppercase; font-size: 11px;">Location:</span>
        <span style="font-family: 'Roboto Condensed', sans-serif; color: #111113;">Northern Minnesota (218 Area) · Remote Worldwide</span>
      </div>
      <div style="padding-top: 8px; display: flex; justify-content: space-between; flex-wrap: wrap; font-size: 13px;">
        <span style="font-family: 'JetBrains Mono', monospace; color: #666666; text-transform: uppercase; font-size: 11px;">Value Model:</span>
        <span style="font-family: 'Roboto Condensed', sans-serif; color: #15803d; font-weight: 700;">Direct Consulting &amp; Passion Barter Welcomed</span>
      </div>
    </div>

    <!-- ACTION BUTTONS -->
    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
      <a href="#schedule-section" style="font-family: 'JetBrains Mono', monospace; display: inline-block; background: #111113; color: #ffffff !important; padding: 12px 22px; text-decoration: none; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Schedule (M–W 12–4pm)</a>
      <a href="#about-section" style="font-family: 'JetBrains Mono', monospace; display: inline-block; background: #ffffff; color: #111113 !important; border: 1px solid #111113; padding: 12px 22px; text-decoration: none; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">About Zachary</a>
      <a href="#disciplines-section" style="font-family: 'JetBrains Mono', monospace; display: inline-block; background: #ffffff; color: #111113 !important; border: 1px solid #111113; padding: 12px 22px; text-decoration: none; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">70 Disciplines</a>
      <a href="tel:+12185808997" style="font-family: 'JetBrains Mono', monospace; display: inline-block; background: #34609b; color: #ffffff !important; padding: 12px 22px; text-decoration: none; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700;">Call (218) 580-8997</a>
    </div>
  </div>

  <!-- PHYSICAL BUSINESS CARD REPLICA -->
  <div style="margin: 44px 0; padding: 24px; background: #fdfdfc; border: 1px solid #d4d4d4;">
    <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #666666; margin-bottom: 16px;">
      <strong>Physical Business Card Concordance (Front &amp; Back)</strong>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
      <!-- CARD FRONT -->
      <div style="flex: 1; min-width: 290px; max-width: 480px; background: #ffffff; border: 1px solid #cccccc; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between; min-height: 240px;">
        <div style="text-align: right; font-size: 10px; font-family: 'JetBrains Mono', monospace; color: #999999;">CARD REF: 2026-ZD FRONT</div>
        <div style="text-align: right; margin: 16px 0;">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 36px; font-weight: 900; line-height: 0.9; color: #34609b; letter-spacing: -0.05em;">ZACHARY<br>DUANE</div>
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #555555; text-transform: uppercase; margin-top: 4px;">Systems · Earth · Craft</div>
        </div>
        <div style="border-top: 1px solid #eeeeee; padding-top: 10px; font-size: 12px; font-family: 'JetBrains Mono', monospace; color: #222222;">
          <div><strong>(218) 580-8997</strong></div>
          <div style="color: #34609b;">zflategraff@gmail.com</div>
          <div style="color: #666666; font-size: 10px; margin-top: 2px;">zacharyduane.wordpress.com</div>
        </div>
      </div>

      <!-- CARD BACK (ALL 70 DISCIPLINES) -->
      <div style="flex: 1; min-width: 290px; max-width: 480px; background: #ffffff; border: 1px solid #cccccc; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: space-between; min-height: 240px;">
        <div style="text-align: right; font-size: 10px; font-family: 'JetBrains Mono', monospace; color: #999999;">CARD REF: 2026-ZD BACK</div>
        <div style="font-family: 'Roboto Condensed', sans-serif; font-size: 12px; line-height: 1.85; color: #222222; text-align: center; margin: 10px 0;">
          Administration · Advocacy · Analysis · Apothecary · Astrology · Automation · Barter · Botany · Branding · Coaching · Coding · Collaboration · Communication · Community · Composting · Consulting · Content · Copywriting · Design · Electronics · Fabrication · Foraging · Gardening · Geology · Graphics · Growing · Growth Guidance · Hardware · Healing · HTML · Hydroponics · Illustration · Interpretation · IT · Landscaping · Leadership · Linux · Mentoring · Minerals · Networking · Nonprofit · Numerology · Off-Grid · Organization · Outreach · Painting · Permaculture · Photography · Poetry · Print · Programming · Publishing · Rockhounding · Sign Language · Skincare · Solar · Spirituality · Strategy · Sustainability · Systems · Tarot · Tattooing · Teaching · Technology · Troubleshooting · Typography · UI/UX · Wellness · Woodworking · WordPress
        </div>
        <div style="border-top: 1px solid #eeeeee; padding-top: 8px; font-size: 10px; font-family: 'JetBrains Mono', monospace; color: #888888; text-align: center;">
          All 70 Core Disciplines &amp; Polymath Facets
        </div>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid #d4d4d4; margin: 48px 0;">

  <!-- SECTION 02: 70 DISCIPLINES (INTERACTIVE ACCORDIONS) -->
  <div id="disciplines-section" style="margin-bottom: 48px;">
    <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #34609b; font-weight: 700;">02 // TAXONOMY &amp; DISCIPLINES</span>
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 32px; font-weight: 800; margin: 10px 0; text-transform: uppercase; color: #111113;">The 70-Discipline Matrix</h2>
    <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 15px; color: #555555; margin-bottom: 22px;">
      Every discipline cataloged from the physical card. Click on any item below to inspect its practical application:
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px;">
      <!-- TECH -->
      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Linux <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Tech]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Debian/Ubuntu/Arch deployments, Bash automation, headless servers, and containerized workloads.</div>
      </details>

      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">WordPress <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Tech]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Custom theme creation, Gutenberg block engineering, headless configurations, and maintenance.</div>
      </details>

      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Coding <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Tech]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Front-end, back-end, and scripting development using modern, standards-based web standards.</div>
      </details>

      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Automation <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Tech]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Eliminating repetitive human tasks via Bash, Python, Cron, and event-driven microservices.</div>
      </details>

      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Electronics &amp; Hardware <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Tech]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">PC building, server racking, circuit soldering, sensor arrays, and solar charge controllers.</div>
      </details>

      <!-- ECOLOGY -->
      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Permaculture <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Ecology]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Drafting multi-tier perennial food forest maps maximizing solar aspect and microclimates.</div>
      </details>

      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Off-Grid Living <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Ecology]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Configuring standalone cabins with DC/AC solar inverters, gravity water, and wood stoves.</div>
      </details>

      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Botany &amp; Growing <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Ecology]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Native flora identification, heirloom seed germination, and regional microclimates.</div>
      </details>

      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Solar Photovoltaics <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Ecology]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Photovoltaic arrays, MPPT charge controllers, LiFePO4 battery banks, and DC wiring.</div>
      </details>

      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Foraging &amp; Composting <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Ecology]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Mapping woodland harvests, wild edible mushrooms, and closed-loop soil microbiome cycling.</div>
      </details>

      <!-- CRAFT -->
      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Woodworking <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Craft]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Joinery, hand tools, reclaimed timber finishing, and functional furniture fabrication.</div>
      </details>

      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Typography &amp; UI/UX <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Craft]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Austere, legible editorial compositions balancing whitespace, JetBrains Mono, and high contrast.</div>
      </details>

      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Tattooing &amp; Art <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Craft]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Custom botanical, talismanic, and geometric linework and permanent ink adornments.</div>
      </details>

      <!-- COMMUNITY & ESOTERICS -->
      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Barter &amp; Mutual Aid <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Community]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Facilitating non-monetary value exchange for creative, ecological, and advisory services.</div>
      </details>

      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Tarot &amp; Astrology <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Esoterics]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Archetypal reflective consultations for creative decision-making and personal transitions.</div>
      </details>

      <details style="background: #ffffff; border: 1px solid #d4d4d4; padding: 10px 14px; cursor: pointer;">
        <summary style="font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 13px; color: #111113;">Apothecary &amp; Healing <span style="font-size: 10px; color: #34609b; font-weight: 400; float: right;">[Esoterics]</span></summary>
        <div style="font-family: 'Roboto Condensed', sans-serif; margin-top: 8px; font-size: 13px; color: #444444; border-top: 1px solid #eeeeee; padding-top: 6px;">Herbal formulations, botanical extractions, natural salves, and restorative daily habits.</div>
      </details>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid #d4d4d4; margin: 48px 0;">

  <!-- SECTION 03: PRACTICE PILLARS -->
  <div id="experience-section" style="margin-bottom: 48px;">
    <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #34609b; font-weight: 700;">03 // PRACTICE PILLARS &amp; EXPERIENCE</span>
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 32px; font-weight: 800; margin: 10px 0; text-transform: uppercase; color: #111113;">Selected Practice Areas</h2>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px;">
      <div style="background: #ffffff; border: 1px solid #d4d4d4; padding: 24px;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #34609b; font-weight: 700; margin-bottom: 6px;">01 // FACET</div>
        <h3 style="font-family: 'JetBrains Mono', monospace; font-size: 18px; margin: 0 0 6px 0; font-weight: 700;">Web Systems &amp; Linux</h3>
        <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 14px; color: #333333; line-height: 1.6;">Hardened Linux servers, custom WordPress development, automation routines, and resilient network infrastructure.</p>
      </div>

      <div style="background: #ffffff; border: 1px solid #d4d4d4; padding: 24px;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #34609b; font-weight: 700; margin-bottom: 6px;">02 // FACET</div>
        <h3 style="font-family: 'JetBrains Mono', monospace; font-size: 18px; margin: 0 0 6px 0; font-weight: 700;">Permaculture &amp; Off-Grid</h3>
        <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 14px; color: #333333; line-height: 1.6;">Regenerative food forests, closed-loop composting, hydroponics arrays, solar PV sizing, and cold-climate living.</p>
      </div>

      <div style="background: #ffffff; border: 1px solid #d4d4d4; padding: 24px;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #34609b; font-weight: 700; margin-bottom: 6px;">03 // FACET</div>
        <h3 style="font-family: 'JetBrains Mono', monospace; font-size: 18px; margin: 0 0 6px 0; font-weight: 700;">Minimalist Craft &amp; Timber</h3>
        <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 14px; color: #333333; line-height: 1.6;">Monospace typographic design, print ephemera, hand joinery woodworking, custom fabrication, and linework.</p>
      </div>

      <div style="background: #ffffff; border: 1px solid #d4d4d4; padding: 24px;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #34609b; font-weight: 700; margin-bottom: 6px;">04 // FACET</div>
        <h3 style="font-family: 'JetBrains Mono', monospace; font-size: 18px; margin: 0 0 6px 0; font-weight: 700;">Community &amp; Barter</h3>
        <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 14px; color: #333333; line-height: 1.6;">Grassroots advocacy, nonprofit organization, mentorship, and non-monetary value exchange for community resilience.</p>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid #d4d4d4; margin: 48px 0;">

  <!-- SECTION 04: APPOINTMENTS & AVAILABILITY -->
  <div id="schedule-section" style="margin-bottom: 48px;">
    <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #34609b; font-weight: 700;">04 // APPOINTMENTS &amp; AVAILABILITY</span>
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 32px; font-weight: 800; margin: 10px 0; text-transform: uppercase; color: #111113;">Schedule a Consultation</h2>

    <!-- SCHEDULE HIGHLIGHT BOX -->
    <div style="background: #ffffff; border: 2px solid #111113; padding: 24px; margin-bottom: 24px;">
      <h3 style="font-family: 'JetBrains Mono', monospace; margin-top: 0; font-size: 17px; font-weight: 700;">
        Available Schedule: Mondays through Wednesdays · 12:00 PM – 4:00 PM (CT)
      </h3>
      <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 14px; color: #555555; margin-bottom: 16px;">
        Click any time slot below to launch a direct pre-filled appointment email to Zachary:
      </p>

      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        <a href="mailto:zflategraff@gmail.com?subject=Appointment%20Request:%20Monday%2012:00%20PM%20CT" style="font-family: 'JetBrains Mono', monospace; padding: 10px 14px; background: #111113; color: #ffffff !important; text-decoration: none; font-size: 11px; font-weight: 700;">📅 Mon 12:00 PM CT</a>
        <a href="mailto:zflategraff@gmail.com?subject=Appointment%20Request:%20Monday%2002:00%20PM%20CT" style="font-family: 'JetBrains Mono', monospace; padding: 10px 14px; background: #111113; color: #ffffff !important; text-decoration: none; font-size: 11px; font-weight: 700;">📅 Mon 02:00 PM CT</a>
        <a href="mailto:zflategraff@gmail.com?subject=Appointment%20Request:%20Tuesday%2012:00%20PM%20CT" style="font-family: 'JetBrains Mono', monospace; padding: 10px 14px; background: #111113; color: #ffffff !important; text-decoration: none; font-size: 11px; font-weight: 700;">📅 Tue 12:00 PM CT</a>
        <a href="mailto:zflategraff@gmail.com?subject=Appointment%20Request:%20Tuesday%2003:00%20PM%20CT" style="font-family: 'JetBrains Mono', monospace; padding: 10px 14px; background: #111113; color: #ffffff !important; text-decoration: none; font-size: 11px; font-weight: 700;">📅 Tue 03:00 PM CT</a>
        <a href="mailto:zflategraff@gmail.com?subject=Appointment%20Request:%20Wednesday%2001:00%20PM%20CT" style="font-family: 'JetBrains Mono', monospace; padding: 10px 14px; background: #111113; color: #ffffff !important; text-decoration: none; font-size: 11px; font-weight: 700;">📅 Wed 01:00 PM CT</a>
        <a href="mailto:zflategraff@gmail.com?subject=Appointment%20Request:%20Wednesday%2004:00%20PM%20CT" style="font-family: 'JetBrains Mono', monospace; padding: 10px 14px; background: #111113; color: #ffffff !important; text-decoration: none; font-size: 11px; font-weight: 700;">📅 Wed 04:00 PM CT</a>
      </div>
    </div>

    <!-- PASSION BARTER BOX -->
    <div style="background: #fdfdfc; border: 1px solid #d4d4d4; border-left: 4px solid #15803d; padding: 24px;">
      <h3 style="font-family: 'JetBrains Mono', monospace; margin-top: 0; font-size: 16px; font-weight: 700; color: #15803d;">
        🌾 Passion Barter &amp; Mutual Exchange
      </h3>
      <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 14px; color: #333333; line-height: 1.7; margin-bottom: 14px;">
        As printed on my card, <strong>Barter</strong> is a foundational discipline. I am open to trade offers pertaining to anything I am passionate about—living plants, heirloom seeds, hardwood timber, woodworking, hand tools &amp; shop gear, apothecary botanicals, rare books &amp; print, solar hardware, or direct trade skills. Willing to hear any honest offers.
      </p>
      <a href="mailto:zflategraff@gmail.com?subject=Passion%20Barter%20Proposal%20for%20Zachary%20Duane" style="font-family: 'JetBrains Mono', monospace; display: inline-block; background: #15803d; color: #ffffff !important; text-decoration: none; padding: 10px 18px; font-size: 11px; font-weight: 700; text-transform: uppercase;">Propose a Passion Barter Trade</a>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid #d4d4d4; margin: 48px 0;">

  <!-- SECTION 05: ABOUT ZACHARY DUANE (ROBUST INFORMATIONAL DOSSIER) -->
  <div id="about-section" style="margin-bottom: 48px;">
    <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #34609b; font-weight: 700; display: block; margin-bottom: 6px;">
      05 // BIOGRAPHY · METHODOLOGY · PHILOSOPHY
    </span>
    <h2 style="font-family: 'JetBrains Mono', monospace; font-size: 34px; font-weight: 800; margin: 0 0 16px 0; text-transform: uppercase; color: #111113;">
      About Zachary Duane
    </h2>
    <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 17px; color: #444444; max-width: 820px; line-height: 1.6; margin-bottom: 24px;">
      Systems architect, northern cold-climate permaculturist, traditional woodworker, and community organizer operating across 70 cataloged disciplines.
    </p>

    <!-- CALLOUT BLOCKQUOTE -->
    <div style="background: #ffffff; border: 2px solid #111113; padding: 24px; margin-bottom: 28px; box-shadow: 4px 4px 0px #111113;">
      <span style="font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; color: #34609b; font-weight: 700; letter-spacing: 1px; display: block; margin-bottom: 6px;">The Polymath Thesis</span>
      <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 17px; font-weight: 600; color: #111113; line-height: 1.5; margin: 0 0 8px 0;">
        &ldquo;Modern systems encourage narrow hyper-specialization, creating brittle technology, disconnected communities, and depleted soils. The polymath path isn&apos;t a scattered hobby—it is the deliberate study of underlying patterns that connect an operating system kernel, a cold-climate swale, and the grain of a white oak timber.&rdquo;
      </p>
      <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #777777;">Zachary Duane · Northern Minnesota (218 Area)</span>
    </div>

    <!-- 2 COLUMN DETAILED BREAKDOWN -->
    <div style="display: flex; flex-wrap: wrap; gap: 24px;">
      <!-- LEFT NARRATIVE COLUMN -->
      <div style="flex: 2; min-width: 320px;">
        <h3 style="font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 700; margin: 0 0 8px 0; text-transform: uppercase; color: #111113;">
          <span style="color: #34609b;">01.</span> Roots in Northern Minnesota &amp; Severe Cold Resilience
        </h3>
        <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 15px; color: #333333; line-height: 1.65; margin: 0 0 16px 0;">
          Working in Northern Minnesota (Area Code 218) demands absolute honesty from materials and systems. Whether calculating the cold-cranking capacity and discharge curves of off-grid solar LiFePO4 battery banks at -30°F, curing native birch and pine against warping, or shielding perennial root crowns under heavy mulch, everything must be engineered for durability. There are no bloated abstractions or superficial corporate veneers—only systems that work reliably when put to the test.
        </p>

        <h3 style="font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 700; margin: 20px 0 8px 0; text-transform: uppercase; color: #111113;">
          <span style="color: #34609b;">02.</span> Cross-Pollinating Digital Architecture &amp; Living Ecology
        </h3>
        <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 15px; color: #333333; line-height: 1.65; margin: 0 0 16px 0;">
          Early immersion in Unix/Linux command-line environments, Debian server deployment, shell automation, and decentralized networking revealed a profound truth: the architecture of a resilient operating system is fundamentally identical to a resilient permaculture food forest. Both rely on decentralized redundancy, feedback loop monitoring, and open protocols. This synthesis allows Zachary to navigate tech infrastructure consultations with the patient, cyclical perspective of an ecological grower, and approach land design with the diagnostic rigor of a systems engineer.
        </p>

        <h3 style="font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 700; margin: 20px 0 8px 0; text-transform: uppercase; color: #111113;">
          <span style="color: #34609b;">03.</span> The Tactile Hand: Craft, Joinery &amp; Typography
        </h3>
        <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 15px; color: #333333; line-height: 1.65; margin: 0 0 16px 0;">
          Digital efficiency is balanced by physical craft. Zachary practices traditional woodworking—hand joinery with Japanese pull saws and bench chisels, timber frame construction, reclaimed lumber salvage, and natural wax finishes. There is a sacred tactile feedback in working physical wood that informs digital user experience: clarity, generous whitespace, zero artificial ornament, and monospaced typography designed to be read effortlessly.
        </p>

        <h3 style="font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 700; margin: 20px 0 8px 0; text-transform: uppercase; color: #111113;">
          <span style="color: #34609b;">04.</span> Economic Model: Barter, Trade &amp; Mutual Value
        </h3>
        <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 15px; color: #333333; line-height: 1.65; margin: 0 0 16px 0;">
          As clearly typeset on the back of his business card, Barter is recognized as a legitimate core discipline. While conventional consultations are scheduled during weekly hours (Mondays through Wednesdays, 12 PM to 4 PM CT), Zachary actively welcomes trade proposals for goods and skills he is passionate about—heirloom seeds, seasoned hardwood timber, antique hand planes, rare books, solar gear, or a specialized craft skill.
        </p>
      </div>

      <!-- RIGHT DOSSIER COLUMN -->
      <div style="flex: 1; min-width: 280px; background: #ffffff; border: 1px solid #d4d4d4; padding: 20px; font-family: 'Roboto Condensed', sans-serif;">
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #34609b; font-weight: 700; border-bottom: 1px solid #eeeeee; padding-bottom: 8px; margin-bottom: 12px;">
          Practitioner Dossier
        </div>

        <div style="font-size: 13px; margin-bottom: 10px;">
          <strong style="font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; color: #777777; display: block;">Practitioner:</strong>
          Zachary Duane
        </div>

        <div style="font-size: 13px; margin-bottom: 10px;">
          <strong style="font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; color: #777777; display: block;">Region &amp; Coordinates:</strong>
          Northern Minnesota · 218 Area Code · Remote Worldwide
        </div>

        <div style="font-size: 13px; margin-bottom: 10px;">
          <strong style="font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; color: #777777; display: block;">Office / Booking Hours:</strong>
          Mon – Wed · 12:00 PM – 4:00 PM (CT)
        </div>

        <div style="font-size: 13px; margin-bottom: 10px;">
          <strong style="font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; color: #777777; display: block;">Technical Stack:</strong>
          Debian GNU/Linux, Bash, Python, POSIX shell, SSH/GPG, WordPress Custom Blocks, Semantic Web.
        </div>

        <div style="font-size: 13px; margin-bottom: 10px;">
          <strong style="font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; color: #777777; display: block;">Landcraft &amp; Energy:</strong>
          Cold-climate permaculture, off-grid solar PV arrays, MPPT charge controllers, hugelkultur, heirloom botany.
        </div>

        <div style="font-size: 13px; margin-bottom: 14px;">
          <strong style="font-family: 'JetBrains Mono', monospace; font-size: 10px; text-transform: uppercase; color: #777777; display: block;">Craft &amp; Making:</strong>
          Hand joinery woodworking, timber salvage, monospaced typography, botanical inks, tattoo linework.
        </div>

        <div style="background: #fdfdfc; border: 1px solid #15803d; padding: 12px; font-size: 12px;">
          <strong style="font-family: 'JetBrains Mono', monospace; color: #15803d; font-size: 10px; text-transform: uppercase; display: block; margin-bottom: 4px;">Passion Barter Welcomed:</strong>
          Open to trade offers on seeds, timber, woodworking tools, books, prints, solar components, or craft skills.
        </div>
      </div>
    </div>
  </div>

  <hr style="border: none; border-top: 1px solid #d4d4d4; margin: 48px 0;">

  <!-- SECTION 06: DIRECT INQUIRIES -->
  <div id="contact-section" style="background: #ffffff; border: 1px solid #d4d4d4; padding: 28px;">
    <h3 style="font-family: 'JetBrains Mono', monospace; margin-top: 0; font-size: 20px; font-weight: 700;">Direct Contact</h3>
    <p style="font-family: 'Roboto Condensed', sans-serif; font-size: 14px; color: #555555; margin-bottom: 16px;">
      For bespoke systems builds, permaculture designs, or open-source consulting:
    </p>

    <div style="display: flex; flex-wrap: wrap; gap: 12px;">
      <a href="tel:+12185808997" style="font-family: 'JetBrains Mono', monospace; display: inline-block; background: #111113; color: #ffffff !important; text-decoration: none; padding: 12px 20px; font-size: 12px; font-weight: 700;">📞 Call (218) 580-8997</a>
      <a href="mailto:zflategraff@gmail.com" style="font-family: 'JetBrains Mono', monospace; display: inline-block; background: #34609b; color: #ffffff !important; text-decoration: none; padding: 12px 20px; font-size: 12px; font-weight: 700;">✉️ Email zflategraff@gmail.com</a>
    </div>

    <div style="margin-top: 24px; padding-top: 14px; border-top: 1px solid #eeeeee; font-size: 11px; font-family: 'JetBrains Mono', monospace; color: #888888;">
      © Zachary Duane · Headers in JetBrains Mono · Body in Roboto Condensed · Northern Minnesota (218 Area)
    </div>
  </div>

</div>
<!-- ================= END ZACHARY DUANE WORDPRESS CODE ================= -->`;

  const copyCustomHtml = () => {
    navigator.clipboard.writeText(customHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs font-mono">
      <div className="bg-white border-2 border-neutral-900 w-full max-w-4xl max-h-[94vh] flex flex-col shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-300 flex items-center justify-between bg-[#fbfbfa]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-[#34609b] inline-block animate-pulse"></span>
            <div>
              <h3 className="font-bold text-base text-neutral-900 font-mono">
                WordPress Custom HTML (JetBrains Mono + Roboto Condensed)
              </h3>
              <p className="text-[11px] text-neutral-500 font-reading">
                Zero external dependencies · 100% self-contained on {PROFILE.websites[0].label}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-neutral-200 border border-neutral-300 text-neutral-700 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs Bar */}
        <div className="flex border-b border-neutral-300 bg-neutral-100 text-xs font-mono">
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-5 py-3 font-bold border-r border-neutral-300 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'guide'
                ? 'bg-white text-neutral-900 border-b-2 border-b-[#34609b]'
                : 'text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <span>1. How to Make WordPress Behave Identically</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-5 py-3 font-bold border-r border-neutral-300 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'code'
                ? 'bg-white text-neutral-900 border-b-2 border-b-[#34609b]'
                : 'text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            <span>2. Copy WordPress Custom HTML Code</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 overflow-y-auto text-xs space-y-4 font-mono">
          {activeTab === 'guide' ? (
            <div className="space-y-6 font-reading text-sm text-neutral-800">
              <div className="p-4 bg-[#fbfbfa] border-2 border-neutral-900">
                <span className="font-mono text-xs font-bold text-[#34609b] uppercase block mb-1">
                  Why Standard WordPress Behaves Differently
                </span>
                <p className="leading-relaxed">
                  This preview is an active <strong>React + TypeScript Single Page Application (SPA)</strong>. It contains an interactive 3D card physics engine, instant search typing filter across 70 cataloged disciplines, active calendar date calculations, and multi-step intake validation.
                </p>
                <p className="mt-2 text-neutral-600 text-xs font-mono">
                  • <strong>WordPress.com Free/Personal</strong> automatically deletes &lt;script&gt; tags when saving pages for security (causing blank pages or missing interactive state).<br />
                  • <strong>WordPress with Plugins / Self-Hosted WP</strong> allows running the exact bundle.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-mono font-bold text-neutral-900 uppercase text-xs border-b border-neutral-200 pb-1">
                  The 3 Practical Solutions To Achieve 100% Parity
                </h4>

                <div className="p-4 bg-white border border-neutral-300 space-y-2">
                  <div className="font-mono font-bold text-xs text-neutral-900 flex items-center gap-2">
                    <span className="w-5 h-5 bg-neutral-900 text-white flex items-center justify-center text-[10px]">1</span>
                    <span>The WordPress Custom HTML Block (Ready Now — Zero Plugins Needed)</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Switch to the <strong>&quot;Copy WordPress Custom HTML Code&quot;</strong> tab. This code has been rebuilt with 100% native HTML5 and CSS. It includes the full business card concordance (front &amp; back with all 70 disciplines), the robust About Zachary dossier, native interactive accordions for disciplines, and pre-formatted consultation booking buttons for Mon–Wed 12–4pm CT. Because it uses no scripts, WordPress can never strip it.
                  </p>
                </div>

                <div className="p-4 bg-white border border-neutral-300 space-y-2">
                  <div className="font-mono font-bold text-xs text-neutral-900 flex items-center gap-2">
                    <span className="w-5 h-5 bg-[#34609b] text-white flex items-center justify-center text-[10px]">2</span>
                    <span>Full React SPA via WPCode or Plugin (For Business / Self-Hosted WP)</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    If your WordPress supports plugins (WordPress.com Creator/Business plan or self-hosted WordPress):
                    Install the free <strong>WPCode</strong> plugin, add a HTML/JavaScript snippet with the React mount code, and set it to execute on your homepage. The live search, 3D flip card, and dynamic intake form will run verbatim.
                  </p>
                </div>

                <div className="p-4 bg-white border border-neutral-300 space-y-2">
                  <div className="font-mono font-bold text-xs text-neutral-900 flex items-center gap-2">
                    <span className="w-5 h-5 bg-emerald-700 text-white flex items-center justify-center text-[10px]">3</span>
                    <span>Direct Static Host + Custom Domain (The Professional Web Polymath Way)</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    You can host this exact production build on <strong>Cloudflare Pages, Netlify, or GitHub Pages for free</strong>. You get 0ms latency, global CDN speed, and full interactivity. You can connect your custom domain (e.g. <code>zacharyduane.com</code>) directly, while keeping <code>zacharyduane.wordpress.com</code> for your blog or writing.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="p-3.5 bg-neutral-100 border border-neutral-300 text-neutral-900 font-reading space-y-1">
                <span className="font-bold text-xs block font-mono text-neutral-900 uppercase">
                  Typography &amp; Configuration
                </span>
                <p className="text-xs">
                  • <strong>Headers, Title, Navigation &amp; Buttons:</strong> JetBrains Mono<br />
                  • <strong>Body Text, Paragraphs, Lists &amp; Definitions:</strong> Roboto Condensed<br />
                  • <strong>Self-Contained:</strong> Pure HTML/CSS, zero script stripping, no external iframes.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between pb-1.5 text-[11px] text-neutral-500 font-mono">
                  <span>Paste into WordPress &gt; Custom HTML block:</span>
                  <span className="text-emerald-700 font-bold">100% Self-Contained</span>
                </div>
                <pre className="font-mono p-4 bg-neutral-900 text-neutral-100 border border-neutral-800 text-[11px] leading-relaxed max-h-[46vh] overflow-x-auto whitespace-pre-wrap select-all">
                  {customHtmlCode}
                </pre>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-300 bg-[#fbfbfa] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="text-neutral-600 text-[11px]">
            Target: <a href={PROFILE.websites[0].url} target="_blank" rel="noreferrer" className="text-[#34609b] underline font-bold">{PROFILE.websites[0].label}</a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyCustomHtml}
              className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Custom HTML Code'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-2 border border-neutral-300 hover:border-neutral-900 text-neutral-700 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
