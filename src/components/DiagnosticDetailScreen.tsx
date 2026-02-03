import { ArrowLeft, AlertTriangle, Calendar, DollarSign, Wrench } from 'lucide-react';

interface DiagnosticDetailScreenProps {
  onBack: () => void;
  onBookService: () => void;
  darkMode?: boolean;
}

export function DiagnosticDetailScreen({ onBack, onBookService, darkMode = false }: DiagnosticDetailScreenProps) {
  return (
    <div className="min-h-full bg-gradient-to-b from-[#002855] to-[#003875]">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity"
        >
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
        <div className={`rounded-2xl p-6 shadow-xl ${darkMode ? 'bg-[#002855] border border-white/20' : 'bg-white'}`}>
          <div className="mb-6">
            <h2 className={`text-lg mb-3 ${darkMode ? 'text-white' : 'text-[#002855]'}`}>What's Wrong?</h2>
            <p className={`mb-2 ${darkMode ? 'text-white' : 'text-[#002855]'}`}>
              Your oxygen airflow sensor is damaged.
            </p>
            <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>
              Detected: December 3, 2024 at 9:42 AM
            </p>
          </div>

          <div className={`border-t pt-6 mb-6 ${darkMode ? 'border-white/20' : 'border-gray-200'}`}>
            <h2 className={`text-lg mb-3 ${darkMode ? 'text-white' : 'text-[#002855]'}`}>Why This Matters</h2>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-white/90' : 'text-gray-700'}`}>
              Your engine is not reliably able to tell if it is getting the right amount of oxygen.
              This can lead to loss of power and poor gas mileage.
            </p>
          </div>

          <div className={`border-t pt-6 ${darkMode ? 'border-white/20' : 'border-gray-200'}`}>
            <h2 className={`text-lg mb-4 ${darkMode ? 'text-white' : 'text-[#002855]'}`}>Impact on Your Car</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-1.5 ${darkMode ? 'bg-[#FFC72C]' : 'bg-[#FF3B30]'}`}></div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-white' : 'text-[#002855]'}`}>Reduced fuel efficiency</p>
                  <p className={`text-xs ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>Up to 15-20% worse gas mileage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-1.5 ${darkMode ? 'bg-[#FFC72C]' : 'bg-[#FF3B30]'}`}></div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-white' : 'text-[#002855]'}`}>Loss of power</p>
                  <p className={`text-xs ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>Especially during acceleration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-1.5 ${darkMode ? 'bg-[#FFC72C]' : 'bg-[#FF3B30]'}`}></div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-white' : 'text-[#002855]'}`}>May not pass emissions test</p>
                  <p className={`text-xs ${darkMode ? 'text-white/70' : 'text-gray-600'}`}>Required for registration in some states</p>
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
        <button 
          onClick={onBookService}
          className="w-full bg-white text-[#002855] py-4 rounded-xl text-center hover:bg-gray-50 transition-colors shadow-lg"
        >
          Book Service Appointment
        </button>
        <p className="text-center text-white/60 text-xs mt-3">
          Available appointments at your local CarMax Service Center
        </p>
      </div>
    </div>
  );
}
