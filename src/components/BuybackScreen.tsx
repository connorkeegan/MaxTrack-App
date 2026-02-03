import { DollarSign, TrendingUp, CheckCircle } from 'lucide-react';

interface BuybackScreenProps {
  onRequestAppointment: () => void;
}

export function BuybackScreen({ onRequestAppointment }: BuybackScreenProps) {
  return (
    <div className="bg-gray-50 min-h-full p-6 pt-12">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl text-[#002855] mb-2">Buyback Option</h1>
        <p className="text-gray-600 text-sm">Flexible ownership with on-demand buyback</p>
      </div>

      {/* Current Offer Card */}
      <div className="bg-gradient-to-br from-[#002855] to-[#003875] text-white rounded-2xl p-6 mb-6 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="w-5 h-5 text-[#FFC72C]" />
          <p className="text-sm opacity-90">Your Current Buyback Offer</p>
        </div>
        <p className="text-5xl mb-4">$23,450</p>
        <div className="flex items-center gap-2 text-[#FFC72C] text-sm mb-4">
          <TrendingUp className="w-4 h-4" />
          <span>Up $340 from last month</span>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-sm">
          <p className="opacity-90">This offer is valid for 7 days and reflects current market conditions.</p>
        </div>
      </div>

      {/* Offer Breakdown */}
      <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
        <h2 className="text-lg text-[#002855] mb-4">Offer Breakdown</h2>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Base market value</span>
            <span className="text-[#002855]">$22,800</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Low mileage bonus</span>
            <span className="text-green-600">+$400</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Excellent condition</span>
            <span className="text-green-600">+$250</span>
          </div>
          <div className="border-t border-gray-200 pt-3 flex justify-between">
            <span className="text-[#002855]">Total Offer</span>
            <span className="text-[#002855]">$23,450</span>
          </div>
        </div>
      </div>

      {/* Loan Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h2 className="text-lg text-[#002855] mb-3">Your Loan Status</h2>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Remaining balance</span>
            <span className="text-[#002855]">$21,000</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Buyback offer</span>
            <span className="text-[#002855]">$23,450</span>
          </div>
          <div className="border-t border-blue-200 pt-2 flex justify-between">
            <span className="text-[#002855]">Your net equity</span>
            <span className="text-green-600 font-semibold">+$2,450</span>
          </div>
        </div>
        <p className="text-xs text-gray-600">
          We'll pay off your loan directly and you'll receive the difference.
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
        <h2 className="text-lg text-[#002855] mb-4">Buyback Benefits</h2>
        <div className="space-y-3">
          <BenefitItem text="No haggling - guaranteed offer price" />
          <BenefitItem text="We handle all loan payoff paperwork" />
          <BenefitItem text="Complete transaction in as little as 24 hours" />
          <BenefitItem text="No fees or hidden costs" />
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onRequestAppointment}
        className="w-full bg-[#FFC72C] text-[#002855] rounded-xl py-4 shadow-lg hover:bg-[#ffb700] transition-colors text-center"
      >
        Request Buyback Appointment
      </button>

      <p className="text-center text-xs text-gray-500 mt-4">
        Scheduling an appointment doesn't commit you to selling
      </p>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  );
}