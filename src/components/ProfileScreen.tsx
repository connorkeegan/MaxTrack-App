import { ChevronRight, Settings, HelpCircle, FileText, Bell } from 'lucide-react';

export function ProfileScreen() {
  return (
    <div className="bg-gray-50 min-h-full p-6 pt-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-[#002855] flex items-center justify-center text-white text-xl">
            SC
          </div>
          <div>
            <h1 className="text-xl text-[#002855] mb-1">Sarah Carter</h1>
            <p className="text-sm text-gray-600">sarah.carter@email.com</p>
          </div>
        </div>
      </div>

      {/* Vehicle Info Card */}
      <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">YOUR VEHICLE</p>
            <h2 className="text-lg text-[#002855] mb-1">2022 Honda Civic Sport</h2>
            <p className="text-sm text-gray-600">VIN: 1HGCV1F36NA123456</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-500 mb-1">Purchase Date</p>
            <p className="text-sm text-[#002855]">March 15, 2024</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">MaxTrack Active</p>
            <p className="text-sm text-green-600">Connected</p>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="mb-6">
        <h2 className="text-xs text-gray-500 mb-3 px-1">ACCOUNT</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <MenuItem
            icon={<Settings className="w-5 h-5" />}
            label="Settings"
          />
          <div className="border-t border-gray-100"></div>
          <MenuItem
            icon={<Bell className="w-5 h-5" />}
            label="Notifications"
          />
          <div className="border-t border-gray-100"></div>
          <MenuItem
            icon={<FileText className="w-5 h-5" />}
            label="Documents"
          />
        </div>
      </div>

      {/* Support */}
      <div className="mb-6">
        <h2 className="text-xs text-gray-500 mb-3 px-1">SUPPORT</h2>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <MenuItem
            icon={<HelpCircle className="w-5 h-5" />}
            label="Help Center"
          />
          <div className="border-t border-gray-100"></div>
          <MenuItem
            icon={<FileText className="w-5 h-5" />}
            label="Terms & Privacy"
          />
        </div>
      </div>

      {/* Logout Button */}
      <button className="w-full bg-white border border-gray-200 text-gray-700 rounded-xl py-3 text-sm hover:bg-gray-50 transition-colors">
        Sign Out
      </button>
    </div>
  );
}

function MenuItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="text-[#002855]">{icon}</div>
        <span className="text-sm text-[#002855]">{label}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
  );
}