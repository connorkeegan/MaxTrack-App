import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Wrench, CheckCircle } from 'lucide-react';

interface ScheduleServiceScreenProps {
  onBack: () => void;
}

export function ScheduleServiceScreen({ onBack }: ScheduleServiceScreenProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const dates = [
    { day: 'Mon', date: '4', full: 'Dec 4' },
    { day: 'Tue', date: '5', full: 'Dec 5' },
    { day: 'Wed', date: '6', full: 'Dec 6' },
    { day: 'Thu', date: '7', full: 'Dec 7' },
    { day: 'Fri', date: '8', full: 'Dec 8' },
  ];

  const times = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM'];

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      setIsBooked(true);
    }
  };

  if (isBooked) {
    return (
      <div className="bg-gray-50 min-h-full p-6 pt-12">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-2xl text-[#002855] mb-2">Appointment Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Your oxygen sensor replacement is scheduled for<br />
            <span className="font-semibold text-[#002855]">{selectedDate} at {selectedTime}</span>
          </p>
          <div className="bg-white rounded-xl p-4 w-full max-w-sm shadow-sm mb-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-[#002855]" />
              <div className="text-left">
                <p className="text-sm text-[#002855] font-medium">MaxTrack Service Center</p>
                <p className="text-xs text-gray-500">123 Auto Drive, Suite 100</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Wrench className="w-5 h-5 text-[#002855]" />
              <div className="text-left">
                <p className="text-sm text-[#002855] font-medium">Oxygen Sensor Replacement</p>
                <p className="text-xs text-gray-500">Estimated time: 1 hour</p>
              </div>
            </div>
          </div>
          <button
            onClick={onBack}
            className="w-full max-w-sm bg-[#002855] text-white py-4 rounded-xl text-center hover:bg-[#001a3d] transition-colors shadow-lg"
          >
            Back to Vehicle Health
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Header */}
      <div className="bg-[#002855] text-white p-6 pt-12 pb-8">
        <button onClick={onBack} className="flex items-center gap-2 mb-4 hover:opacity-80">
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
            {dates.map((d) => (
              <button
                key={d.date}
                onClick={() => setSelectedDate(d.full)}
                className={`flex-shrink-0 w-16 py-3 rounded-xl text-center transition-colors ${
                  selectedDate === d.full
                    ? 'bg-[#002855] text-white'
                    : 'bg-white text-[#002855] hover:bg-gray-100'
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
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 rounded-xl text-center transition-colors ${
                  selectedTime === time
                    ? 'bg-[#002855] text-white'
                    : 'bg-white text-[#002855] hover:bg-gray-100'
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
        <button
          onClick={handleBookAppointment}
          disabled={!selectedDate || !selectedTime}
          className={`w-full py-4 rounded-xl text-center transition-colors shadow-lg ${
            selectedDate && selectedTime
              ? 'bg-[#FFC72C] text-[#002855] hover:bg-[#e6b327]'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {selectedDate && selectedTime
            ? `Book for ${selectedDate} at ${selectedTime}`
            : 'Select date and time to continue'}
        </button>
      </div>
    </div>
  );
}
