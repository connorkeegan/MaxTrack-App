import { TrendingUp, AlertCircle } from 'lucide-react';

interface HomeScreenProps {
  onViewValueHistory: () => void;
}

export function HomeScreen({ onViewValueHistory }: HomeScreenProps) {
  return (
    <div className="min-h-full bg-gradient-to-b from-[#002855] to-[#003875]">
      {/* Header with Logo */}
      <div className="px-6 pt-12 pb-6 text-center">
        <h1 className="text-4xl text-white">MaxTrack</h1>
      </div>

      {/* Main Content */}
      <div className="text-white px-6 min-h-full">
        {/* Vehicle Info */}
        <div className="mb-6">
          <h2 className="text-xl mb-1">2022 Honda Civic Sport</h2>
          <p className="text-gray-300 text-sm">VIN: 1HGCV1F36NA123456</p>
        </div>

        {/* Current Value Card */}
        <button 
          onClick={onViewValueHistory}
          className="bg-white text-[#002855] rounded-2xl p-6 mb-6 shadow-lg w-full text-left hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Current Market Value</p>
            <div className="flex items-center gap-1 text-red-600 text-sm">
              <TrendingUp className="w-4 h-4 rotate-180" />
              <span>-12.5%</span>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-4xl">$23,200</p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-500 mb-1">Purchase Price</p>
              <p className="text-sm">$26,500</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Total Change</p>
              <p className="text-sm text-red-600">-$3,300</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">Tap to view value history</p>
        </button>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-xs text-gray-300 mb-1">Total Mileage</p>
            <p className="text-2xl">32,458</p>
            <p className="text-xs text-gray-300 mt-1">miles</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-xs text-gray-300 mb-1">Ownership</p>
            <p className="text-2xl">24</p>
            <p className="text-xs text-gray-300 mt-1">months</p>
          </div>
        </div>

        {/* Health Alert */}
        <div className="bg-[#FFC72C] text-[#002855] rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm mb-1">Service Recommended</p>
            <p className="text-xs opacity-80">Oil change due in 500 miles</p>
          </div>
        </div>

        {/* Market Insights */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <p className="text-sm mb-3">Market Insights</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">Demand for your model</span>
              <span className="text-[#FFC72C]">High</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">Value trend (30 days)</span>
              <span className="text-green-400">+$550</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">Condition score</span>
              <span className="text-white">Excellent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}