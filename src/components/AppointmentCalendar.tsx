import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Download,
  CalendarCheck,
  RefreshCw,
  Sparkles,
  MapPin,
  Mail,
  User,
  Phone,
  MessageSquare
} from 'lucide-react';
import { CONSULTATION_TYPES, ConsultationType, PROFILE } from '../data/skillsData';

interface AppointmentCalendarProps {
  initialTopic?: string | null;
}

export interface BookedAppointment {
  id: string;
  consultationId: string;
  consultationTitle: string;
  duration: string;
  dateStr: string; // YYYY-MM-DD
  timeSlot: string;
  name: string;
  email: string;
  phone: string;
  mode: string;
  notes: string;
  isBarter: boolean;
  barterDetails?: string;
  createdAt: string;
}

const STORAGE_KEY = 'zachary_duane_appointments_v1';

export const AppointmentCalendar: React.FC<AppointmentCalendarProps> = ({
  initialTopic,
}) => {
  // Current date baseline: October 2026 (Oct 5, 2026 is Monday)
  const [currentDate, setCurrentDate] = useState(() => new Date(2026, 9, 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => new Date(2026, 9, 5)); // Monday
  const [selectedSlot, setSelectedSlot] = useState<string>('12:00 PM');
  const [selectedConsultation, setSelectedConsultation] = useState<ConsultationType>(
    CONSULTATION_TYPES[0]
  );

  // Timezone state
  const [timeZone, setTimeZone] = useState<string>('America/Chicago');

  // Form State
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [meetingMode, setMeetingMode] = useState('Google Meet (Video)');
  const [notes, setNotes] = useState('');
  const [isBarter, setIsBarter] = useState(false);
  const [barterDetails, setBarterDetails] = useState('');

  // Passion Barter Quick Tags
  const passionTags = [
    '🌱 Heirloom Seeds / Plants',
    '🪵 Hardwood / Timber / Woodcraft',
    '🪓 Hand Tools & Equipment',
    '🌿 Apothecary / Foraged Herbs',
    '📖 Rare Books & Print',
    '⚡ Solar / Hardware Components',
    '🤝 Trade Skills & Mutual Aid',
    '✨ Custom Passion Offer'
  ];

  const handleAddPassionTag = (tag: string) => {
    setBarterDetails((prev) => {
      if (!prev) return tag;
      if (prev.includes(tag)) return prev;
      return `${prev} · ${tag}`;
    });
  };

  // Status & Stored appointments
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastBooking, setLastBooking] = useState<BookedAppointment | null>(null);
  const [bookedList, setBookedList] = useState<BookedAppointment[]>([]);
  const [viewMode, setViewMode] = useState<'schedule' | 'my-bookings'>('schedule');

  // Load existing bookings from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setBookedList(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  // Sync initialTopic if passed from skill inspector
  useEffect(() => {
    if (initialTopic) {
      const lower = initialTopic.toLowerCase();
      if (
        lower.includes('permaculture') ||
        lower.includes('off-grid') ||
        lower.includes('solar') ||
        lower.includes('garden') ||
        lower.includes('botany')
      ) {
        setSelectedConsultation(CONSULTATION_TYPES[1]);
      } else if (
        lower.includes('design') ||
        lower.includes('typography') ||
        lower.includes('print') ||
        lower.includes('craft') ||
        lower.includes('wood')
      ) {
        setSelectedConsultation(CONSULTATION_TYPES[2]);
      } else if (
        lower.includes('tarot') ||
        lower.includes('astrology') ||
        lower.includes('numerology') ||
        lower.includes('spiritual')
      ) {
        setSelectedConsultation(CONSULTATION_TYPES[3]);
      } else if (lower.includes('barter') || lower.includes('community')) {
        setSelectedConsultation(CONSULTATION_TYPES[4]);
        setIsBarter(true);
      } else {
        setSelectedConsultation(CONSULTATION_TYPES[0]);
      }
      setNotes((prev) =>
        prev ? `${prev} · Inquiry regarding ${initialTopic}` : `Interested in consulting about: ${initialTopic}`
      );
    }
  }, [initialTopic]);

  // Calendar calculations
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  // Navigation handlers
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Time Slots: Mon-Wed 12pm - 4pm
  const timeSlots = [
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];

  const handleDateClick = (dayNum: number) => {
    const newSelected = new Date(year, month, dayNum);
    setSelectedDate(newSelected);
  };

  // Generate .ICS file for calendar invite
  const generateICS = (appt: BookedAppointment) => {
    const formattedDate = appt.dateStr.replace(/-/g, '');
    const startTimeStr = appt.timeSlot.includes('PM') && !appt.timeSlot.startsWith('12')
      ? `${parseInt(appt.timeSlot.split(':')[0], 10) + 12}${appt.timeSlot.substring(3, 5)}00`
      : `${appt.timeSlot.split(':')[0].padStart(2, '0')}${appt.timeSlot.substring(3, 5)}00`;

    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Zachary Duane//Appointment Booking//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:REQUEST',
      'BEGIN:VEVENT',
      `UID:${appt.id}@zacharyduane.wordpress.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART;TZID=${timeZone}:${formattedDate}T${startTimeStr}`,
      `SUMMARY:Zachary Duane: ${appt.consultationTitle}`,
      `DESCRIPTION:Consultation with Zachary Duane\\nMode: ${appt.mode}\\nNotes: ${appt.notes || 'None'}\\nContact: ${PROFILE.phone} / ${PROFILE.email}`,
      `ORGANIZER;CN="Zachary Duane":mailto:${PROFILE.email}`,
      `ATTENDEE;CN="${appt.name}":mailto:${appt.email}`,
      `STATUS:CONFIRMED`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ZacharyDuane_Consultation_${appt.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) return;

    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;

    const newBooking: BookedAppointment = {
      id: `ZD-${Math.floor(1000 + Math.random() * 9000)}`,
      consultationId: selectedConsultation.id,
      consultationTitle: selectedConsultation.title,
      duration: selectedConsultation.duration,
      dateStr,
      timeSlot: selectedSlot,
      name: clientName,
      email: clientEmail,
      phone: clientPhone,
      mode: meetingMode,
      notes,
      isBarter,
      barterDetails: isBarter ? barterDetails : undefined,
      createdAt: new Date().toISOString(),
    };

    const updated = [newBooking, ...bookedList];
    setBookedList(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }

    setLastBooking(newBooking);
    setIsSubmitted(true);
  };

  const cancelBooking = (id: string) => {
    const updated = bookedList.filter((b) => b.id !== id);
    setBookedList(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-300">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#34609b] mb-1">
            04 // SCHEDULE APPOINTMENT
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-neutral-900">
            Book a Consultation
          </h2>
          <p className="mt-2 text-sm text-neutral-600 max-w-2xl font-mono">
            Direct calendar scheduling for technical advisory, permaculture planning, typography critiques, or barter-friendly collaborations.
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setViewMode('schedule')}
            className={`px-3 py-1.5 border transition-all cursor-pointer ${
              viewMode === 'schedule'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900'
            }`}
          >
            Calendar
          </button>
          <button
            onClick={() => setViewMode('my-bookings')}
            className={`px-3 py-1.5 border transition-all cursor-pointer ${
              viewMode === 'my-bookings'
                ? 'bg-neutral-900 text-white border-neutral-900'
                : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-900'
            }`}
          >
            My Bookings ({bookedList.length})
          </button>
        </div>
      </div>

      {viewMode === 'my-bookings' ? (
        /* ================= MY BOOKINGS TAB ================= */
        <div className="border border-neutral-300 bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
            <h3 className="font-mono text-xl font-bold text-neutral-900">
              Scheduled Appointments
            </h3>
            <span className="font-mono text-xs text-neutral-500">
              Stored locally on this device
            </span>
          </div>

          {bookedList.length === 0 ? (
            <div className="py-12 text-center font-mono text-sm text-neutral-500">
              No upcoming appointments booked yet.
              <div className="mt-4">
                <button
                  onClick={() => setViewMode('schedule')}
                  className="px-4 py-2 bg-neutral-900 text-white text-xs uppercase tracking-wider font-mono hover:bg-neutral-800 transition-colors"
                >
                  Schedule Your First Session
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {bookedList.map((b) => (
                <div
                  key={b.id}
                  className="border border-neutral-200 p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-neutral-50 hover:border-neutral-900 transition-colors"
                >
                  <div className="font-mono space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-neutral-900">
                        {b.consultationTitle}
                      </span>
                      <span className="text-xs text-[#34609b] font-medium">
                        [{b.id}]
                      </span>
                    </div>
                    <div className="text-xs text-neutral-600 flex flex-wrap gap-2 items-center">
                      <span>📅 {b.dateStr}</span>
                      <span>·</span>
                      <span>⏰ {b.timeSlot} ({b.duration})</span>
                      <span>·</span>
                      <span>📍 {b.mode}</span>
                      {b.isBarter && (
                        <>
                          <span>·</span>
                          <span className="text-emerald-700 font-bold">🌾 Barter Proposal</span>
                        </>
                      )}
                    </div>
                    {b.notes && (
                      <p className="text-xs text-neutral-500 pt-1 italic">
                        &quot;{b.notes}&quot;
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-auto font-mono text-xs">
                    <button
                      onClick={() => generateICS(b)}
                      className="px-3 py-1.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-800 flex items-center gap-1.5 transition-colors"
                      title="Download .ICS Calendar Event"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>.ICS</span>
                    </button>
                    <button
                      onClick={() => cancelBooking(b.id)}
                      className="px-3 py-1.5 bg-transparent border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : isSubmitted && lastBooking ? (
        /* ================= SUBMITTED CONFIRMATION SCREEN ================= */
        <div className="border-2 border-neutral-900 bg-white p-8 sm:p-10 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
              <CheckCircle className="w-4 h-4" />
              <span>Appointment Successfully Confirmed</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-mono font-bold text-neutral-900 mb-2">
              You are scheduled with Zachary Duane.
            </h3>
            <p className="text-sm font-reading text-neutral-600 mb-6">
              A calendar reservation has been generated. Zachary Duane has been notified at{' '}
              <span className="font-mono text-neutral-900 font-medium">{PROFILE.email}</span>.
            </p>

            {/* Receipt Box */}
            <div className="border border-neutral-300 bg-[#fbfbfa] p-5 font-mono text-xs space-y-2.5 mb-8">
              <div className="flex justify-between pb-2 border-b border-neutral-200">
                <span className="text-neutral-500 uppercase">Reference Code</span>
                <span className="font-bold text-neutral-900">{lastBooking.id}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-neutral-200">
                <span className="text-neutral-500 uppercase">Consultation</span>
                <span className="text-neutral-900 font-medium">{lastBooking.consultationTitle}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-neutral-200">
                <span className="text-neutral-500 uppercase">Date &amp; Time</span>
                <span className="text-neutral-900 font-medium">
                  {lastBooking.dateStr} at {lastBooking.timeSlot} ({lastBooking.duration})
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-neutral-200">
                <span className="text-neutral-500 uppercase">Meeting Mode</span>
                <span className="text-neutral-900 font-medium">{lastBooking.mode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 uppercase">Attendee</span>
                <span className="text-neutral-900">{lastBooking.name} ({lastBooking.email})</span>
              </div>
              {lastBooking.isBarter && (
                <div className="pt-2 border-t border-neutral-200 text-emerald-800">
                  <span className="font-bold">Proposed Barter:</span> {lastBooking.barterDetails}
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <button
                onClick={() => generateICS(lastBooking)}
                className="px-5 py-2.5 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download .ICS Calendar Invite</span>
              </button>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setClientName('');
                  setClientEmail('');
                  setNotes('');
                }}
                className="px-4 py-2.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-800 transition-colors cursor-pointer"
              >
                Schedule Another Slot
              </button>

              <a
                href={`mailto:${PROFILE.email}?subject=Consultation%20Confirmation%20${lastBooking.id}&body=Hi%20Zachary,%0D%0A%0D%0AI%20just%20booked%20the%20${encodeURIComponent(lastBooking.consultationTitle)}%20for%20${lastBooking.dateStr}%20at%20${lastBooking.timeSlot}.%0D%0A%0D%0ABest,%0D%0A${encodeURIComponent(lastBooking.name)}`}
                className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Email Dispatch</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* ================= MAIN SCHEDULING INTERFACE ================= */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Select Consultation Type */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              Step 1 // Choose Consultation Type
            </span>

            {CONSULTATION_TYPES.map((type) => {
              const isSelected = selectedConsultation.id === type.id;
              return (
                <div
                  key={type.id}
                  onClick={() => setSelectedConsultation(type)}
                  className={`p-4 border text-left cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? 'border-neutral-900 bg-white ring-1 ring-neutral-900 shadow-xs'
                      : 'border-neutral-200 bg-[#fcfcfb] hover:border-neutral-400 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[11px] text-[#34609b] font-medium">
                      {type.tag}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {type.duration}
                    </span>
                  </div>
                  <h4 className="font-mono font-bold text-sm text-neutral-900 mb-1">
                    {type.title}
                  </h4>
                  <p className="text-xs font-reading text-neutral-600 line-clamp-2 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="mt-2 text-[10px] font-mono text-neutral-400 flex items-center gap-2">
                    <span>{type.format}</span>
                    <span>·</span>
                    <span className="text-emerald-700">Barter Welcomed</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Interactive Monospace Calendar & Slots */}
          <div className="lg:col-span-4 border border-neutral-300 bg-white p-5">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-4">
              <span className="font-mono text-xs font-bold text-neutral-900 uppercase">
                {monthNames[month]} {year}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={prevMonth}
                  className="p-1 hover:bg-neutral-100 border border-neutral-200 text-neutral-600 cursor-pointer"
                  title="Previous month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="p-1 hover:bg-neutral-100 border border-neutral-200 text-neutral-600 cursor-pointer"
                  title="Next month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-1 text-center font-mono text-[11px] text-neutral-400 mb-2 font-medium">
              <span>Su</span>
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span>Sa</span>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center font-mono text-xs mb-6">
              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} className="h-8 select-none" />
              ))}

              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const isSelected =
                  selectedDate &&
                  selectedDate.getFullYear() === year &&
                  selectedDate.getMonth() === month &&
                  selectedDate.getDate() === dayNum;

                // User availability constraint: Monday - Wednesday only (1, 2, 3)
                const dateObj = new Date(year, month, dayNum);
                const dayOfWeek = dateObj.getDay();
                const isAvailable = dayOfWeek >= 1 && dayOfWeek <= 3;

                return (
                  <button
                    key={`day-${dayNum}`}
                    type="button"
                    disabled={!isAvailable}
                    onClick={() => handleDateClick(dayNum)}
                    className={`h-8 w-full flex items-center justify-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-neutral-900 text-white font-bold'
                        : isAvailable
                        ? 'hover:bg-neutral-100 text-neutral-900 border border-neutral-100 font-medium'
                        : 'text-neutral-300 cursor-not-allowed bg-neutral-50/50'
                    }`}
                    title={isAvailable ? `Select ${monthNames[month]} ${dayNum}` : 'Available Mon–Wed only'}
                  >
                    {dayNum}
                  </button>
                );
              })}
            </div>

            {/* Availability Indicator */}
            <div className="mb-4 p-2 bg-[#f4f7fb] border border-[#d6e3f4] font-mono text-[11px] text-[#254674] flex items-center justify-between">
              <span className="font-semibold">Schedule: Mon – Wed</span>
              <span>12:00 PM – 4:00 PM CT</span>
            </div>

            {/* Time Slots Section */}
            <div className="pt-4 border-t border-neutral-200">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-neutral-800 uppercase">
                  Available Slots (12pm – 4pm)
                </span>
                <select
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
                  className="font-mono text-[10px] bg-neutral-50 border border-neutral-200 px-1.5 py-0.5 text-neutral-600 focus:outline-none"
                >
                  <option value="America/Chicago">CT (Central Time)</option>
                  <option value="America/New_York">ET (Eastern Time)</option>
                  <option value="America/Denver">MT (Mountain Time)</option>
                  <option value="America/Los_Angeles">PT (Pacific Time)</option>
                  <option value="UTC">UTC (Universal)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {timeSlots.map((slot) => {
                  const isSlotSelected = selectedSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 px-2 text-center font-mono text-xs transition-all cursor-pointer border ${
                        isSlotSelected
                          ? 'border-[#34609b] bg-[#34609b] text-white font-medium'
                          : 'border-neutral-200 bg-white text-neutral-800 hover:border-neutral-900'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form & Confirmation */}
          <div className="lg:col-span-4 border border-neutral-300 bg-white p-5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-2">
              Step 3 // Attendee Details
            </span>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-neutral-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full px-3 py-2 bg-[#fdfdfc] border border-neutral-300 text-xs font-mono text-neutral-900 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-neutral-700 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full px-3 py-2 bg-[#fdfdfc] border border-neutral-300 text-xs font-mono text-neutral-900 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-neutral-700 uppercase tracking-wider mb-1">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="(218) 555-0199"
                  className="w-full px-3 py-2 bg-[#fdfdfc] border border-neutral-300 text-xs font-mono text-neutral-900 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-neutral-700 uppercase tracking-wider mb-1">
                  Meeting Channel
                </label>
                <select
                  value={meetingMode}
                  onChange={(e) => setMeetingMode(e.target.value)}
                  className="w-full px-3 py-2 bg-[#fdfdfc] border border-neutral-300 text-xs font-mono text-neutral-900 focus:outline-none focus:border-neutral-900"
                >
                  <option value="Google Meet (Video)">Google Meet (Video Conference)</option>
                  <option value="Direct Phone Call">Direct Phone Call (Zachary calls you)</option>
                  <option value="In-Person (Minnesota 218)">In-Person (Grand Rapids / MN Area)</option>
                  <option value="Async Email Consultation">Async Technical Consultation (Email)</option>
                </select>
              </div>

              {/* Barter Option Checkbox with Passion Offer Guidance */}
              <div className="pt-2 border-t border-neutral-200">
                <label className="flex items-start gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isBarter}
                    onChange={(e) => setIsBarter(e.target.checked)}
                    className="mt-0.5 rounded-none text-neutral-900 focus:ring-0 cursor-pointer"
                  />
                  <div className="text-xs font-mono text-neutral-800">
                    <span className="font-semibold text-neutral-900">Propose a Barter or Trade</span>
                    <p className="text-[11px] text-neutral-500 font-reading">
                      Open to trade offers pertaining to anything Zachary is passionate about.
                    </p>
                  </div>
                </label>

                {isBarter && (
                  <div className="mt-2.5 p-3 bg-neutral-50 border border-neutral-300 space-y-2.5">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                      Quick-Select Passion Categories:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {passionTags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => handleAddPassionTag(tag)}
                          className="text-[10px] font-mono px-2 py-0.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-black transition-colors"
                        >
                          + {tag}
                        </button>
                      ))}
                    </div>

                    <textarea
                      rows={3}
                      value={barterDetails}
                      onChange={(e) => setBarterDetails(e.target.value)}
                      placeholder="Describe your offer (willing to hear any offers on plants, seeds, woodwork, tools, apothecary herbs, books, crafts, or skills exchange)..."
                      className="w-full p-2 bg-white border border-neutral-300 text-xs font-mono text-neutral-900 focus:outline-none focus:border-[#34609b]"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block font-mono text-xs text-neutral-700 uppercase tracking-wider mb-1">
                  Topic &amp; Objectives
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Outline what you want to achieve during this session..."
                  className="w-full p-2.5 bg-[#fdfdfc] border border-neutral-300 text-xs font-mono text-neutral-900 focus:outline-none focus:border-neutral-900"
                />
              </div>

              {/* Selected summary banner */}
              <div className="bg-[#f0f4f9] p-3 font-mono text-[11px] text-neutral-800 border-l-2 border-[#34609b]">
                <div className="font-bold text-neutral-900">
                  {selectedConsultation.title}
                </div>
                <div className="text-neutral-600">
                  {selectedDate?.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}{' '}
                  at {selectedSlot}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Confirm Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
