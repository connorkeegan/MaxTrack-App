import { Battery, Wifi, Signal } from 'lucide-react';
import appIcon from 'figma:asset/cfbdb1de8808d675702069ea3fc98e4197740e09.png';

interface LockScreenProps {
  onUnlock: () => void;
}

export function LockScreen({ onUnlock }: LockScreenProps) {
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: false 
  });
  
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-full bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] text-white relative">
      {/* Status Bar */}
      <div className="px-6 pt-3 flex justify-between items-center text-xs">
        <div className="flex items-center gap-1">
          <Signal className="w-3 h-3" />
          <Wifi className="w-3 h-3" />
        </div>
        <div className="flex items-center gap-1">
          <span>100%</span>
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Time Display */}
      <div className="text-center mt-20">
        <h1 className="text-7xl mb-2">{currentTime}</h1>
        <p className="text-lg text-white/70">{currentDate}</p>
      </div>

      {/* Notification */}
      <div className="px-4 mt-12">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl">
          <div className="flex items-start gap-3 mb-2">
            <img 
              src={appIcon} 
              alt="MaxTrack" 
              className="w-10 h-10 rounded-lg flex-shrink-0 object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">MaxTrack</span>
                <span className="text-xs text-white/60">now</span>
              </div>
              <h3 className="text-sm mb-1">Check Engine Light Alert</h3>
              <p className="text-sm text-white/80">
                Your check engine light is on because your oxygen airflow sensor is damaged.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Swipe Up Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center">
        <div className="w-32 h-1 bg-white/30 rounded-full mb-2"></div>
        <button
          onClick={onUnlock}
          className="text-sm text-white/60 hover:text-white/80 transition-colors"
        >
          Tap to unlock
        </button>
      </div>
    </div>
  );
}