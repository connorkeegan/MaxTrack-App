import { useState } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { DiagnosticsScreen } from './components/DiagnosticsScreen';
import { BuybackScreen } from './components/BuybackScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { ValueHistoryScreen } from './components/ValueHistoryScreen';
import { LockScreen } from './components/LockScreen';
import { DiagnosticDetailScreen } from './components/DiagnosticDetailScreen';
import { ScheduleServiceScreen } from './components/ScheduleServiceScreen';
import { BuybackAppointmentScreen } from './components/BuybackAppointmentScreen';
import { ExportHelper } from './components/ExportHelper';

export default function App() {
  // Check URL parameters
  const isExportMode = window.location.search.includes('export=true');
  const isDarkMode = window.location.search.includes('dark=true');

  const [isLocked, setIsLocked] = useState(true);
  const [activeScreen, setActiveScreen] = useState('home');
  const [showValueHistory, setShowValueHistory] = useState(false);
  const [showDiagnosticDetail, setShowDiagnosticDetail] = useState(false);
  const [showScheduleService, setShowScheduleService] = useState(false);
  const [showBuybackAppointment, setShowBuybackAppointment] = useState(false);

  // Show export helper for PowerPoint preparation
  if (isExportMode) {
    return <ExportHelper />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Mobile Phone Frame */}
      <div className="w-full max-w-[390px] h-[844px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-800 relative">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-50"></div>
        
        {/* App Content */}
        <div className="h-full flex flex-col">
          {/* Screen Content */}
          <div className="flex-1 overflow-y-auto">
            {isLocked ? (
              <LockScreen onUnlock={() => setIsLocked(false)} />
            ) : showBuybackAppointment ? (
              <BuybackAppointmentScreen onBack={() => setShowBuybackAppointment(false)} />
            ) : showScheduleService ? (
              <ScheduleServiceScreen onBack={() => setShowScheduleService(false)} />
            ) : showDiagnosticDetail ? (
              <DiagnosticDetailScreen
                onBack={() => setShowDiagnosticDetail(false)}
                onBookService={() => {
                  setShowDiagnosticDetail(false);
                  setActiveScreen('diagnostics');
                }}
                darkMode={isDarkMode}
              />
            ) : showValueHistory ? (
              <ValueHistoryScreen onBack={() => setShowValueHistory(false)} />
            ) : (
              <>
                {activeScreen === 'home' && <HomeScreen onViewValueHistory={() => setShowValueHistory(true)} />}
                {activeScreen === 'diagnostics' && (
                  <DiagnosticsScreen
                    onViewAlert={() => setShowDiagnosticDetail(true)}
                    onScheduleService={() => setShowScheduleService(true)}
                  />
                )}
                {activeScreen === 'buyback' && (
                  <BuybackScreen onRequestAppointment={() => setShowBuybackAppointment(true)} />
                )}
                {activeScreen === 'profile' && <ProfileScreen />}
              </>
            )}
          </div>

          {/* Bottom Navigation */}
          {!showValueHistory && !isLocked && !showDiagnosticDetail && !showScheduleService && !showBuybackAppointment && (
            <div className="bg-white border-t border-gray-200 px-6 py-3 pb-6">
              <div className="flex justify-around items-center">
                <button
                  onClick={() => setActiveScreen('home')}
                  className="flex flex-col items-center gap-1"
                >
                  <svg
                    className={`w-6 h-6 ${activeScreen === 'home' ? 'text-[#002855]' : 'text-gray-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className={`text-xs ${activeScreen === 'home' ? 'text-[#002855]' : 'text-gray-400'}`}>Home</span>
                </button>

                <button
                  onClick={() => setActiveScreen('diagnostics')}
                  className="flex flex-col items-center gap-1"
                >
                  <svg
                    className={`w-6 h-6 ${activeScreen === 'diagnostics' ? 'text-[#002855]' : 'text-gray-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className={`text-xs ${activeScreen === 'diagnostics' ? 'text-[#002855]' : 'text-gray-400'}`}>Health</span>
                </button>

                <button
                  onClick={() => setActiveScreen('buyback')}
                  className="flex flex-col items-center gap-1"
                >
                  <svg
                    className={`w-6 h-6 ${activeScreen === 'buyback' ? 'text-[#002855]' : 'text-gray-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className={`text-xs ${activeScreen === 'buyback' ? 'text-[#002855]' : 'text-gray-400'}`}>Buyback</span>
                </button>

                <button
                  onClick={() => setActiveScreen('profile')}
                  className="flex flex-col items-center gap-1"
                >
                  <svg
                    className={`w-6 h-6 ${activeScreen === 'profile' ? 'text-[#002855]' : 'text-gray-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className={`text-xs ${activeScreen === 'profile' ? 'text-[#002855]' : 'text-gray-400'}`}>Profile</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}