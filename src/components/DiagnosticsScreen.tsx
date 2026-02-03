import { Activity, Battery, Droplet, Thermometer, CheckCircle, AlertTriangle } from 'lucide-react';

interface DiagnosticsScreenProps {
  onViewAlert: () => void;
  onScheduleService: () => void;
}

export function DiagnosticsScreen({ onViewAlert, onScheduleService }: DiagnosticsScreenProps) {
  return (
    <div className="bg-gray-50 min-h-full p-6 pt-12">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl text-[#002855] mb-2">Vehicle Health</h1>
        <p className="text-gray-600 text-sm">Real-time diagnostics from MaxTrack</p>
      </div>

      {/* Overall Health Score */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl p-6 mb-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm opacity-90 mb-1">Overall Health Score</p>
            <p className="text-5xl">78</p>
          </div>
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <AlertTriangle className="w-12 h-12" />
          </div>
        </div>
        <p className="text-sm opacity-90">Action needed - Check engine light</p>
      </div>

      {/* System Status */}
      <div className="mb-6">
        <h2 className="text-lg text-[#002855] mb-3">System Status</h2>
        <div className="bg-white rounded-xl p-4 space-y-4 shadow-sm">
          <SystemItem
            icon={<Battery className="w-5 h-5" />}
            label="Battery"
            status="Good"
            value="12.6V"
            isGood={true}
          />
          <div className="border-t border-gray-100"></div>
          <SystemItem
            icon={<Droplet className="w-5 h-5" />}
            label="Engine Oil"
            status="Low Soon"
            value="35% life"
            isGood={false}
          />
          <div className="border-t border-gray-100"></div>
          <SystemItem
            icon={<Thermometer className="w-5 h-5" />}
            label="Coolant"
            status="Good"
            value="Normal"
            isGood={true}
          />
          <div className="border-t border-gray-100"></div>
          <SystemItem
            icon={<Activity className="w-5 h-5" />}
            label="Transmission"
            status="Good"
            value="Optimal"
            isGood={true}
          />
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="mb-6">
        <h2 className="text-lg text-[#002855] mb-3">Recent Alerts</h2>
        <div className="space-y-3">
          <button 
            onClick={onViewAlert}
            className="w-full bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 text-left hover:bg-red-100 transition-colors"
          >
            <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-[#002855] mb-1">Check Engine Light</p>
              <p className="text-xs text-gray-600 mb-2">Oxygen airflow sensor is damaged</p>
              <span className="text-xs text-red-700 underline">
                View Details →
              </span>
            </div>
          </button>
          
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm text-[#002855] mb-1">Oil Change Recommended</p>
              <p className="text-xs text-gray-600">Schedule service in the next 500 miles</p>
              <button
                onClick={onScheduleService}
                className="mt-2 text-xs text-[#002855] bg-[#FFC72C] px-3 py-1.5 rounded-lg hover:bg-[#e6b327] transition-colors"
              >
                Schedule Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance History */}
      <div>
        <h2 className="text-lg text-[#002855] mb-3">Maintenance History</h2>
        <div className="bg-white rounded-xl p-4 space-y-4 shadow-sm">
          <HistoryItem
            date="Oct 15, 2024"
            service="Tire Rotation"
            mileage="17,200 mi"
          />
          <div className="border-t border-gray-100"></div>
          <HistoryItem
            date="Aug 3, 2024"
            service="Oil Change"
            mileage="14,500 mi"
          />
          <div className="border-t border-gray-100"></div>
          <HistoryItem
            date="May 22, 2024"
            service="Brake Inspection"
            mileage="11,800 mi"
          />
        </div>
      </div>
    </div>
  );
}

function SystemItem({ icon, label, status, value, isGood }: {
  icon: React.ReactNode;
  label: string;
  status: string;
  value: string;
  isGood: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`${isGood ? 'text-green-600' : 'text-amber-600'}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-[#002855]">{label}</p>
          <p className="text-xs text-gray-500">{value}</p>
        </div>
      </div>
      <span className={`text-xs px-2 py-1 rounded-full ${
        isGood ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
      }`}>
        {status}
      </span>
    </div>
  );
}

function HistoryItem({ date, service, mileage }: {
  date: string;
  service: string;
  mileage: string;
}) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-[#002855] mb-1">{service}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <p className="text-xs text-gray-600">{mileage}</p>
    </div>
  );
}