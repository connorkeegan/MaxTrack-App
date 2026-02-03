import { useState } from 'react';
import { ArrowLeft, AlertTriangle, DollarSign, Wrench, Download, Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';

type ExportMode = 'frame-only' | 'content-strip' | 'preview';
type ScreenType = 'diagnostic-detail' | 'schedule-service';

export function ExportHelper() {
  const [mode, setMode] = useState<ExportMode>('preview');
  const [screen, setScreen] = useState<ScreenType>('diagnostic-detail');

  const downloadPhoneFrameSVG = () => {
    const svgContent = `<svg width="390" height="844" viewBox="0 0 390 844" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer phone body -->
  <rect x="4" y="4" width="382" height="836" rx="44" fill="#1f2937" stroke="#1f2937" stroke-width="8"/>
  <!-- Inner screen cutout (transparent) -->
  <rect x="8" y="8" width="374" height="828" rx="35" fill="transparent"/>
  <!-- Notch -->
  <path d="M115 0 H275 V7 Q275 28 254 28 H136 Q115 28 115 7 Z" fill="#1f2937"/>
</svg>`;

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'phone-frame.svg';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-300 p-8">
      {/* Controls */}
      <div className="mb-8 bg-white rounded-xl p-4 max-w-2xl mx-auto shadow-lg">
        <h2 className="text-lg font-bold mb-2 text-gray-800">Export for PowerPoint - Diagnostic Detail Screen</h2>
        <p className="text-sm text-gray-600 mb-4">Get the phone frame and scrollable content separately for your animation</p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">What to export:</label>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setMode('frame-only')}
              className={`px-4 py-2 rounded-lg text-sm ${mode === 'frame-only' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            >
              1. Phone Frame
            </button>
            <button
              onClick={() => setMode('content-strip')}
              className={`px-4 py-2 rounded-lg text-sm ${mode === 'content-strip' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            >
              2. Content Strip (Tall)
            </button>
            <button
              onClick={() => setMode('preview')}
              className={`px-4 py-2 rounded-lg text-sm ${mode === 'preview' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
            >
              Preview
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Screen to export:</label>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setScreen('diagnostic-detail')}
              className={`px-4 py-2 rounded-lg text-sm ${screen === 'diagnostic-detail' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}
            >
              Check Engine Light
            </button>
            <button
              onClick={() => setScreen('schedule-service')}
              className={`px-4 py-2 rounded-lg text-sm ${screen === 'schedule-service' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}
            >
              Schedule Service
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-600 bg-amber-50 border border-amber-200 p-3 rounded-lg">
          <strong>PowerPoint Steps:</strong>
          <ol className="list-decimal ml-4 mt-1 space-y-1">
            <li>Download the <strong>Phone Frame SVG</strong> (already transparent!)</li>
            <li>Screenshot the <strong>"Content Strip"</strong></li>
            <li>In PPT: Place content strip BEHIND the phone frame</li>
            <li>Add motion path to both (horizontal movement)</li>
            <li>Add second motion path to content only (vertical UP = scroll down)</li>
          </ol>
        </div>
      </div>

      {/* Export Area */}
      <div className="flex justify-center">
        {mode === 'frame-only' && (
          <div className="relative">
            {/* Phone Frame preview with checkerboard to show transparency */}
            <div
              className="w-[390px] h-[844px] rounded-[3rem] border-8 border-gray-800 relative"
              style={{
                background: `repeating-conic-gradient(#d1d5db 0% 25%, white 0% 50%) 50% / 20px 20px`
              }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-10"></div>
              {/* Center text */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-4 bg-white/80 rounded-xl">
                  <p className="text-lg font-bold text-gray-800">Transparent Center</p>
                  <p className="text-sm text-gray-600 mt-1">Checkerboard = transparency</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={downloadPhoneFrameSVG}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Phone Frame (SVG)
              </button>
              <p className="text-gray-600 text-sm mt-2">
                SVG has true transparency - works directly in PowerPoint!
              </p>
            </div>
          </div>
        )}

        {mode === 'content-strip' && (
          <div className="relative">
            {/* Tall content strip - exact iPhone width */}
            <div style={{ width: '390px', minHeight: '844px' }} className="overflow-hidden shadow-2xl">
              {screen === 'diagnostic-detail' ? <DiagnosticDetailContent /> : <ScheduleServiceContent />}
            </div>
            <p className="text-center mt-4 text-gray-600 text-sm max-w-sm">
              Screenshot this - it's exactly 390px wide (same as phone frame)
            </p>
          </div>
        )}

        {mode === 'preview' && (
          <div className="relative">
            {/* Preview how it looks in the phone */}
            <div className="w-[390px] h-[844px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-800 relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-50"></div>
              {/* Content */}
              <div className="h-full overflow-y-auto">
                {screen === 'diagnostic-detail' ? <DiagnosticDetailContent /> : <ScheduleServiceContent />}
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600 text-sm">
              This is how it looks - try scrolling to see all content
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Standalone content component (no navigation handlers needed)
function DiagnosticDetailContent() {
  return (
    <div className="bg-gradient-to-b from-[#002855] to-[#003875]" style={{ width: '390px' }}>
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <button className="flex items-center gap-2 text-white mb-6">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Health</span>
        </button>

        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#FF3B30]/20 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-[#FF3B30]" />
          </div>
          <div>
            <h1 className="text-2xl text-white mb-2">Check Engine Light</h1>
            <p className="text-[#FFC72C] text-sm">Action Required</p>
          </div>
        </div>
      </div>

      {/* Issue Card */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="mb-6">
            <h2 className="text-lg text-[#002855] mb-3">What's Wrong?</h2>
            <p className="text-[#002855] mb-2">
              Your oxygen airflow sensor is damaged.
            </p>
            <p className="text-gray-600 text-sm">
              Detected: December 3, 2024 at 9:42 AM
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-lg text-[#002855] mb-3">Why This Matters</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Your engine is not reliably able to tell if it is getting the right amount of oxygen.
              This can lead to loss of power and poor gas mileage.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg text-[#002855] mb-4">Impact on Your Car</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF3B30] mt-1.5"></div>
                <div>
                  <p className="text-sm text-[#002855]">Reduced fuel efficiency</p>
                  <p className="text-xs text-gray-600">Up to 15-20% worse gas mileage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF3B30] mt-1.5"></div>
                <div>
                  <p className="text-sm text-[#002855]">Loss of power</p>
                  <p className="text-xs text-gray-600">Especially during acceleration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF3B30] mt-1.5"></div>
                <div>
                  <p className="text-sm text-[#002855]">May not pass emissions test</p>
                  <p className="text-xs text-gray-600">Required for registration in some states</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cost Card */}
      <div className="px-6 pb-6">
        <div className="bg-[#FFC72C] rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-2">
            <Wrench className="w-6 h-6 text-[#002855]" />
            <h2 className="text-lg text-[#002855]">Oxygen Sensor Replacement</h2>
          </div>
          <p className="text-xs text-[#002855]/70 mb-4">Recommended fix for this issue</p>
          <p className="text-[#002855] mb-4">
            Replace faulty O2 sensor and clear engine diagnostic codes
          </p>
          <div className="flex items-baseline gap-2 mb-1">
            <DollarSign className="w-5 h-5 text-[#002855]" />
            <span className="text-3xl text-[#002855]">185 - 250</span>
          </div>
          <p className="text-sm text-[#002855]/70">Parts and labor included</p>
        </div>
      </div>

      {/* Book Service Button */}
      <div className="px-6 pb-8">
        <button className="w-full bg-white text-[#002855] py-4 rounded-xl text-center shadow-lg">
          Book Service Appointment
        </button>
        <p className="text-center text-white/60 text-xs mt-3">
          Available appointments at your local CarMax Service Center
        </p>
      </div>
    </div>
  );
}

// Schedule Service content component
function ScheduleServiceContent() {
  const dates = [
    { day: 'Mon', date: '4', full: 'Dec 4' },
    { day: 'Tue', date: '5', full: 'Dec 5' },
    { day: 'Wed', date: '6', full: 'Dec 6' },
    { day: 'Thu', date: '7', full: 'Dec 7' },
    { day: 'Fri', date: '8', full: 'Dec 8' },
  ];

  const times = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM'];

  return (
    <div className="bg-gray-50 min-h-full" style={{ width: '390px' }}>
      {/* Header */}
      <div className="bg-[#002855] text-white p-6 pt-12 pb-8">
        <button className="flex items-center gap-2 mb-4">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">Back</span>
        </button>
        <h1 className="text-2xl mb-1">Schedule Service</h1>
        <p className="text-sm opacity-80">Book your oxygen sensor replacement</p>
      </div>

      <div className="p-6 -mt-4">
        {/* Service Info Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Wrench className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-[#002855] font-medium">Oxygen Sensor Replacement</p>
              <p className="text-xs text-gray-500">Fix for Check Engine Light</p>
            </div>
          </div>
        </div>

        {/* Date Selection */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-[#002855]" />
            <h2 className="text-lg text-[#002855]">Select Date</h2>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {dates.map((d, i) => (
              <button
                key={d.date}
                className={`flex-shrink-0 w-16 py-3 rounded-xl text-center transition-colors ${
                  i === 1
                    ? 'bg-[#002855] text-white'
                    : 'bg-white text-[#002855]'
                } shadow-sm`}
              >
                <p className="text-xs opacity-70">{d.day}</p>
                <p className="text-lg font-semibold">{d.date}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-[#002855]" />
            <h2 className="text-lg text-[#002855]">Select Time</h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {times.map((time, i) => (
              <button
                key={time}
                className={`py-3 rounded-xl text-center transition-colors ${
                  i === 2
                    ? 'bg-[#002855] text-white'
                    : 'bg-white text-[#002855]'
                } shadow-sm`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-[#002855]" />
            <h2 className="text-lg text-[#002855]">Service Location</h2>
          </div>
          <div className="bg-gray-100 rounded-lg p-3">
            <p className="text-sm text-[#002855] font-medium">MaxTrack Service Center</p>
            <p className="text-xs text-gray-500">123 Auto Drive, Suite 100</p>
            <p className="text-xs text-gray-500">Open: Mon-Fri 8AM - 6PM</p>
          </div>
        </div>

        {/* Book Button */}
        <button className="w-full py-4 rounded-xl text-center shadow-lg bg-[#FFC72C] text-[#002855]">
          Book for Dec 5 at 1:00 PM
        </button>
      </div>
    </div>
  );
}
