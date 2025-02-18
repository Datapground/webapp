import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const chartData = [
  { date: '2025-02-01', model_usage: 100, api_calls: 50, transcriptions: 30 },
  { date: '2025-02-02', model_usage: 120, api_calls: 60, transcriptions: 40 },
  { date: '2025-02-11', model_usage: 170, api_calls: 95, transcriptions: 75 },
  { date: '2025-02-12', model_usage: 180, api_calls: 100, transcriptions: 80 },
  { date: '2025-02-13', model_usage: 175, api_calls: 98, transcriptions: 78 },
  { date: '2025-02-14', model_usage: 190, api_calls: 110, transcriptions: 85 },
  { date: '2025-02-15', model_usage: 200, api_calls: 120, transcriptions: 90 },
  { date: '2025-02-16', model_usage: 210, api_calls: 130, transcriptions: 95 },
  { date: '2025-02-17', model_usage: 220, api_calls: 140, transcriptions: 100 },
  { date: '2025-02-18', model_usage: 230, api_calls: 145, transcriptions: 105 },
  { date: '2025-02-19', model_usage: 240, api_calls: 150, transcriptions: 110 },
  { date: '2025-02-20', model_usage: 250, api_calls: 160, transcriptions: 120 },
  { date: '2025-03-04', model_usage: 370, api_calls: 270, transcriptions: 210 },
  { date: '2025-03-05', model_usage: 380, api_calls: 280, transcriptions: 220 },
  { date: '2025-03-06', model_usage: 390, api_calls: 290, transcriptions: 230 },
  { date: '2025-03-07', model_usage: 400, api_calls: 300, transcriptions: 240 },
  { date: '2025-02-21', model_usage: 260, api_calls: 165, transcriptions: 125 },
  { date: '2025-02-22', model_usage: 270, api_calls: 170, transcriptions: 130 },
  { date: '2025-02-23', model_usage: 280, api_calls: 180, transcriptions: 135 },
  { date: '2025-02-24', model_usage: 290, api_calls: 190, transcriptions: 140 },
  { date: '2025-02-25', model_usage: 300, api_calls: 200, transcriptions: 150 },
  { date: '2025-02-26', model_usage: 310, api_calls: 210, transcriptions: 155 },
  { date: '2025-02-27', model_usage: 320, api_calls: 220, transcriptions: 160 },
  { date: '2025-02-28', model_usage: 330, api_calls: 230, transcriptions: 170 },
  { date: '2025-03-01', model_usage: 340, api_calls: 240, transcriptions: 180 },
  { date: '2025-02-03', model_usage: 110, api_calls: 55, transcriptions: 35 },
  { date: '2025-02-04', model_usage: 130, api_calls: 65, transcriptions: 45 },
  { date: '2025-02-05', model_usage: 140, api_calls: 70, transcriptions: 50 },
  { date: '2025-02-06', model_usage: 150, api_calls: 75, transcriptions: 55 },
  { date: '2025-02-07', model_usage: 160, api_calls: 80, transcriptions: 60 },
  { date: '2025-02-08', model_usage: 145, api_calls: 78, transcriptions: 58 },
  { date: '2025-02-09', model_usage: 155, api_calls: 85, transcriptions: 65 },
  { date: '2025-02-10', model_usage: 165, api_calls: 90, transcriptions: 70 },
  { date: '2025-03-02', model_usage: 350, api_calls: 250, transcriptions: 190 },
  { date: '2025-03-03', model_usage: 360, api_calls: 260, transcriptions: 200 },
  { date: '2025-03-08', model_usage: 410, api_calls: 310, transcriptions: 250 },
  { date: '2025-03-09', model_usage: 420, api_calls: 320, transcriptions: 260 },
  { date: '2025-03-10', model_usage: 430, api_calls: 330, transcriptions: 270 },
];

const ChartWithDateFilter: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  // Filter data based on date range
  const filteredData = chartData.filter(({ date }) => {
    const entryDate = new Date(date);
    return (
      (!startDate || entryDate >= startDate) &&
      (!endDate || entryDate <= endDate)
    );
  });

  return (
    <div className="border border-[#D6D6D6] rounded-[30px] md:py-4 min-h-[420px] relative mt-4 overflow-hidden flex flex-col justify-between p-4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-[24px] font-primary font-medium mb-2 text-[#414042]">
          Usage Analytics
        </h2>
        <div className="relative">
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            isClearable
            dateFormat="yyyy-MM-dd"
            className="border border-[#D6D6D6] rounded-[30px] px-4 py-2 min-w-[250px]"
            portalId="root"
            placeholderText="Filter By Date"
          />
        </div>
      </div>

      {/* Chart */}
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={filteredData}
            margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="model_usage" stackId="a" fill="#E55057" />
            <Bar dataKey="api_calls" stackId="a" fill="#4CB448" />
            <Bar dataKey="transcriptions" stackId="a" fill="#5183F0" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartWithDateFilter;
