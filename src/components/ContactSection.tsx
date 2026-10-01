import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Copy,
  Check,
  Send,
  Download,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Scale
} from 'lucide-react';
import { PROFILE } from '../data/skillsData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [barterTrade, setBarterTrade] = useState(false);
  const [isSent, setIsSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-300">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#34609b] mb-1">
            06 // DIRECT INQUIRIES &amp; DISPATCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-neutral-900">
            Contact Zachary Duane
          </h2>
          <p className="mt-2 text-sm text-neutral-600 max-w-2xl font-mono">
            Direct channels for consulting inquiries, collaborative builds, barter proposals, and open communication.
          </p>
        </div>

        <div className="mt-4 md:mt-0 font-mono text-xs text-neutral-500">
          Response window: within 24–48 hours
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Contact Cards */}
          <div className="border border-neutral-300 bg-white p-6 space-y-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              Direct Contact Lines
            </h3>

            {/* Phone */}
            <div className="flex items-start justify-between pb-4 border-b border-neutral-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-neutral-100 border border-neutral-200 text-neutral-800">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">Telephone / SMS</span>
                  <a
                    href={`tel:${PROFILE.cleanPhone}`}
                    className="font-mono font-bold text-base text-neutral-900 hover:text-[#34609b] transition-colors"
                  >
                    {PROFILE.phone}
                  </a>
                  <p className="text-[11px] font-mono text-neutral-400 mt-0.5">Northern Minnesota (218 Area)</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(PROFILE.phone, 'phone')}
                className="p-1.5 border border-neutral-200 hover:border-neutral-900 transition-colors"
                title="Copy phone"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-neutral-600" />
                )}
              </button>
            </div>

            {/* Email */}
            <div className="flex items-start justify-between pb-4 border-b border-neutral-200">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-neutral-100 border border-neutral-200 text-neutral-800">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block">Primary Inbox</span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="font-mono font-bold text-sm text-neutral-900 hover:text-[#34609b] transition-colors break-all"
                  >
                    {PROFILE.email}
                  </a>
                  <p className="text-[11px] font-mono text-neutral-400 mt-0.5">Direct PGP / Plaintext</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(PROFILE.email, 'email')}
                className="p-1.5 border border-neutral-200 hover:border-neutral-900 transition-colors"
                title="Copy email"
              >
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-neutral-600" />
                )}
              </button>
            </div>

            {/* Websites */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-500 uppercase block">Affiliated Domains</span>
              {PROFILE.websites.map((site) => (
                <div
                  key={site.url}
                  className="flex items-center justify-between p-2.5 bg-neutral-50 border border-neutral-200 font-mono text-xs hover:border-neutral-900 transition-colors"
                >
                  <span className="text-neutral-800">{site.label}</span>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#34609b] hover:text-neutral-900 flex items-center gap-1"
                  >
                    <span>Visit</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>

            {/* Save vCard Button */}
            <button
              onClick={handleDownloadVCard}
              className="w-full py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Contact Card (.VCF)</span>
            </button>
          </div>

          {/* Barter Statement Box */}
          <div className="border border-neutral-300 bg-[#fdfdfc] p-5 font-mono text-xs">
            <div className="flex items-center gap-2 text-neutral-900 font-bold uppercase mb-2">
              <Scale className="w-4 h-4 text-[#34609b]" />
              <span>Barter &amp; Mutual Exchange</span>
            </div>
            <p className="text-neutral-600 font-reading leading-relaxed">
              As printed on my card, <strong className="text-neutral-900">Barter</strong> is a foundational discipline. I am open to trade offers pertaining to anything I am passionate about—living plants, heirloom seeds, hardwood timber, woodworking, hand tools &amp; shop gear, apothecary botanicals, rare books &amp; print, solar hardware, or direct trade skills. Willing to hear any honest offers.
            </p>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7 border-2 border-neutral-900 bg-white p-6 sm:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
          {isSent ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-emerald-100 text-emerald-800 flex items-center justify-center border border-emerald-300">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-mono text-2xl font-bold text-neutral-900">
                Message Dispatched
              </h3>
              <p className="font-reading text-sm text-neutral-600 max-w-md mx-auto">
                Thank you, {senderName}. Your message has been sent. A copy has been prepared for Zachary Duane at {PROFILE.email}.
              </p>
              <div className="pt-4 flex justify-center gap-3 font-mono text-xs">
                <a
                  href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
                  className="px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
                >
                  Open in Mail Client
                </a>
                <button
                  onClick={() => {
                    setIsSent(false);
                    setMessage('');
                    setSubject('');
                  }}
                  className="px-4 py-2 border border-neutral-300 hover:border-neutral-900 text-neutral-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              <div className="pb-3 border-b border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-neutral-500 font-reading mt-0.5">
                  Fill out the form below to initiate communication directly with Zachary.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-3 py-2 bg-[#fdfdfc] border border-neutral-300 text-xs font-mono text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-3 py-2 bg-[#fdfdfc] border border-neutral-300 text-xs font-mono text-neutral-900 focus:outline-none focus:border-neutral-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Systems Architecture / Permaculture Advisory / Barter Inquiry"
                  className="w-full px-3 py-2 bg-[#fdfdfc] border border-neutral-300 text-xs font-mono text-neutral-900 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-600 mb-1">
                  Message Content *
                </label>
                <textarea
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your initiative, timeline, location, or questions..."
                  className="w-full p-3 bg-[#fdfdfc] border border-neutral-300 text-xs font-mono text-neutral-900 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={barterTrade}
                    onChange={(e) => setBarterTrade(e.target.checked)}
                    className="rounded-none text-neutral-900 focus:ring-0 cursor-pointer"
                  />
                  <span className="text-xs text-neutral-700">
                    This inquiry involves a proposed barter, trade, or mutual aid collaboration
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Direct Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
