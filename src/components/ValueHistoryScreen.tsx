import { ArrowLeft, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { useState } from 'react';

const valueHistory = [
  { date: 'Jan 23', value: 26500 },
  { date: 'Feb 23', value: 26200 },
  { date: 'Mar 23', value: 26400 },
  { date: 'Apr 23', value: 25800 },
  { date: 'May 23', value: 26100 },
  { date: 'Jun 23', value: 25900 },
  { date: 'Jul 23', value: 25400 },
  { date: 'Aug 23', value: 25700 },
  { date: 'Sep 23', value: 25300 },
  { date: 'Oct 23', value: 24900 },
  { date: 'Nov 23', value: 25100 },
  { date: 'Dec 23', value: 24700 },
  { date: 'Jan 24', value: 24400 },
  { date: 'Feb 24', value: 24600 },
  { date: 'Mar 24', value: 24200 },
  { date: 'Apr 24', value: 24500 },
  { date: 'May 24', value: 24100 },
  { date: 'Jun 24', value: 23900 },
  { date: 'Jul 24', value: 24200 },
  { date: 'Aug 24', value: 23800 },
  { date: 'Sep 24', value: 23600 },
  { date: 'Oct 24', value: 23900 },
  { date: 'Nov 24', value: 23500 },
  { date: 'Dec 24', value: 23200 },
];

interface ValueHistoryScreenProps {
  onBack: () => void;
}

export function ValueHistoryScreen({ onBack }: ValueHistoryScreenProps) {
  const [timeRange, setTimeRange] = useState('ALL');
  const currentValue = valueHistory[valueHistory.length - 1].value;
  const purchaseValue = valueHistory[0].value;
  const totalChange = currentValue - purchaseValue;
  const percentChange = ((totalChange / purchaseValue) * 100).toFixed(2);
  const isPositive = totalChange >= 0;

  return (
    <div className="min-h-full bg-[#002855] text-white">
      {/* Header */}
      <div className="px-4 pt-12 pb-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white mb-4 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <div className="mb-1">
          <p className="text-white/60 text-sm">2022 Honda Civic Sport</p>
        </div>
        <div className="flex items-baseline gap-3 mb-1">
          <h1 className="text-4xl">${currentValue.toLocaleString()}.00</h1>
        </div>
        <div className={`flex items-center gap-1 ${isPositive ? 'text-[#00C805]' : 'text-[#FF3B30]'}`}>
          <span className="text-lg">{isPositive ? '+' : ''}${Math.abs(totalChange).toLocaleString()}.00 ({percentChange}%)</span>
        </div>
        <p className="text-white/40 text-sm mt-1">Since Jan 2023</p>
      </div>

      {/* Chart */}
      <div className="px-4 pb-4">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={valueHistory}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={isPositive ? "#00C805" : "#FF3B30"} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={isPositive ? "#00C805" : "#FF3B30"} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              stroke="#ffffff40"
              tick={{ fill: '#ffffff60', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
            />
            <YAxis 
              hide={true}
              domain={[22500, 27000]}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#003366',
                border: '1px solid #FFC72C',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#fff'
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
              labelStyle={{ color: '#FFC72C' }}
            />
            <Area 
              type="linear" 
              dataKey="value" 
              stroke={isPositive ? "#00C805" : "#FF3B30"}
              strokeWidth={2}
              fill="url(#colorValue)"
              dot={false}
              activeDot={{ r: 4, fill: isPositive ? '#00C805' : '#FF3B30' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Time Range Selector */}
      <div className="px-4 pb-6">
        <div className="flex justify-between items-center bg-[#003366] rounded-lg p-1">
          {['1M', '3M', '6M', '1Y', 'ALL'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`flex-1 py-2 rounded-md text-sm transition-colors ${
                timeRange === range 
                  ? 'bg-[#FFC72C] text-[#002855]' 
                  : 'text-white/60'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Key Stats */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#003366] rounded-lg p-4">
            <p className="text-xs text-white/40 mb-2">Purchase Price</p>
            <p className="text-xl text-white">${purchaseValue.toLocaleString()}</p>
          </div>
          <div className="bg-[#003366] rounded-lg p-4">
            <p className="text-xs text-white/40 mb-2">Total Change</p>
            <p className={`text-xl ${isPositive ? 'text-[#00C805]' : 'text-[#FF3B30]'}`}>
              {isPositive ? '+' : ''}${Math.abs(totalChange).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Market Insights */}
      <div className="px-4 pb-6">
        <div className="bg-[#003366] rounded-lg p-5">
          <h2 className="text-lg mb-4">Market Insights</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-white mb-1">Recent Trend</p>
                <p className="text-xs text-white/60">Gradual depreciation typical for used vehicles</p>
              </div>
              <span className="text-xs px-3 py-1.5 rounded-full bg-[#FF3B30]/20 text-[#FF3B30]">Declining</span>
            </div>
            <div className="border-t border-white/10 pt-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-white mb-1">Market Demand</p>
                <p className="text-xs text-white/60">High demand for Honda Civics in your area</p>
              </div>
              <span className="text-xs px-3 py-1.5 rounded-full bg-[#FFC72C]/30 text-[#FFC72C]">High</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}