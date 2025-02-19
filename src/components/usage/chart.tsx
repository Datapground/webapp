import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const ChartWithDateFilter = ({ chartData = [] }: { chartData: any[] }) => {
  // Filter data based on selected date
  const filteredData = chartData;

  return (
    <div className="border border-[#D6D6D6] rounded-[30px] md:py-4 min-h-[420px] relative mt-4 overflow-hidden flex flex-col justify-between p-4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-[24px] font-primary font-medium mb-2 text-[#414042]">
          Usage Analytics
        </h2>
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
            <Bar dataKey="creditConsumed" stackId="a" fill="#E55057" />
            <Bar dataKey="billedMinutes" stackId="a" fill="#4CB448" />
            <Bar dataKey="billedCharacters" stackId="a" fill="#5183F0" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartWithDateFilter;
