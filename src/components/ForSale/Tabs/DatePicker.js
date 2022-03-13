import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css fil
import { useState, useEffect } from 'react';

const DatePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  onClose,
}) => {
  const [localStartingDate, setLocalStartingDate] = useState(startDate);
  const [localEndingDate, setLocalEndingDate] = useState(endDate);
  useEffect(() => {
    setLocalStartingDate(startDate);
    setLocalEndingDate(endDate);
  }, [startDate, endDate]);

  const handleSelect = (ranges) => {
    setLocalStartingDate(ranges.selection.startDate);
    setLocalEndingDate(ranges.selection.endDate);
  };

  return (
    <div className="relative z-50 px-1 pb-2 bg-white rounded-lg shadow-xl w-fit">
      <DateRange
        ranges={[
          {
            startDate: localStartingDate,
            endDate: localEndingDate,
            key: 'selection',
          },
        ]}
        onChange={handleSelect}
        showMonthAndYearPickers={false}
        rangeColors={[' #219653']}
        showDateDisplay={false}
        dragSelectionEnabled={true}
        className="bg-transparent"
      />

      <div className="flex items-center justify-between px-6 text-sm leading-4">
        <button
          className="px-4 py-3 font-bold text-gray-700 transition rounded-md hover:text-gray-800"
          onClick={() => {
            onClose();
          }}
        >
          Cancel
        </button>
        <button
          className="px-8 py-3 font-bold text-gray-100 rounded-md bg-green"
          onClick={() => {
            setStartDate(localStartingDate);
            setEndDate(localEndingDate);
            onClose();
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
