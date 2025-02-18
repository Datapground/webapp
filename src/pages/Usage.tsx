import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import UsageIcon from '../components/Icons/UsageIcon';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import UserSelect from '../components/usage/Select';
import { IoPrintOutline } from 'react-icons/io5';
import PrevIcon from '../components/Icons/PrevIcon';
import NextIcon from '../components/Icons/NextIcon';
import ChartWithDateFilter from '../components/usage/chart';

interface ActivityData {
  date: string;
  user: string;
  model: string;
  runnerMode: string;
  creditConsumed: string;
  billedMinutes: string;
  billedCharacters: string;
}

const data: ActivityData[] = [
  {
    date: '2025-01-17',
    user: 'email@gmail.com',
    model: 'Model 1',
    runnerMode: 'Model 1',
    creditConsumed: '0.00',
    billedMinutes: '0.23',
    billedCharacters: '0.56',
  },
  {
    date: '2025-01-17',
    user: 'email@gmail.com',
    model: 'Model 1',
    runnerMode: 'Model 1',
    creditConsumed: '0.00',
    billedMinutes: '0.23',
    billedCharacters: '0.56',
  },
  {
    date: '2025-01-17',
    user: 'email@gmail.com',
    model: 'Model 1',
    runnerMode: 'Model 1',
    creditConsumed: '0.00',
    billedMinutes: '0.23',
    billedCharacters: '0.56',
  },
  {
    date: '2025-01-17',
    user: 'email@gmail.com',
    model: 'Model 1',
    runnerMode: 'Model 1',
    creditConsumed: '0.00',
    billedMinutes: '0.23',
    billedCharacters: '0.56',
  },
  {
    date: '2025-01-17',
    user: 'email@gmail.com',
    model: 'Model 1',
    runnerMode: 'Model 1',
    creditConsumed: '0.00',
    billedMinutes: '0.23',
    billedCharacters: '0.56',
  },
  {
    date: '2025-01-17',
    user: 'email@gmail.com',
    model: 'Model 1',
    runnerMode: 'Model 1',
    creditConsumed: '0.00',
    billedMinutes: '0.23',
    billedCharacters: '0.56',
  },
  {
    date: '2025-01-17',
    user: 'email@gmail.com',
    model: 'Model 1',
    runnerMode: 'Model 1',
    creditConsumed: '0.00',
    billedMinutes: '0.23',
    billedCharacters: '0.56',
  },
];

const Usage: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;
  const [currentPage, setCurrentPage] = useState(0);

  const entriesPerPage = 5;

  // Calculate the start and end index for slicing data
  const startIndex = currentPage * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, data.length);
  const filteredData = data.slice(startIndex, endIndex);

  // Handle Next & Previous buttons
  const nextPage = () => {
    if (endIndex < data.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <div>
      <TopBar containerClassName="justify-between">
        <aside className="flex justify-start items-center gap-3">
          <UsageIcon className="stroke-[#414042] w-[26px] h-[23.59px]" />
          <h2 className="text-[26px] font-primary font-medium">Usage</h2>
        </aside>
      </TopBar>

      <div className="mt-4">
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-2 ">
            <div className="flex items-center justify-center gap-2 ">
              <DatePicker
                selected={startDate}
                onChange={(update) => setDateRange(update)}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                placeholderText="Select a date range"
                className="rounded-[20px] border border-[#E5E5E5] px-4 h-[40px] text-sm font-light outline-none min-w-[200px]"
              />
              <UserSelect
                options={[
                  { value: 'Model 1', label: 'Model 1' },
                  { value: 'Model 2', label: 'Model 2' },
                  { value: 'Model 3', label: 'Model 3' },
                ]}
                placeholder="Select model type"
                className="w-[200px]"
              />
            </div>

            <div>
              <button className="md:text-sm text-xs bg-transparent border-transparent text-gray-500 flex items-center gap-1">
                <IoPrintOutline className="w-[16px] h-[16px] text-gray-500 hover:bg-white cursor-pointer" />
                Export CSV
              </button>
            </div>
          </div>
        </div>
        <div className="border border-[#D6D6D6] rounded-[30px] md:py-4 min-h-[420px] relative mt-4 overflow-hidden flex flex-col justify-between">
          <div className="min-h-[180px] no-scrollbar max-w-full p-4">
            <table className="min-w-[600px] w-full font-primary text-xs md:text-sm bg-white">
              <thead className="top-0 z-10 bg-white">
                <tr className="border-b text-center">
                  <th className="p-3 md:p-4  text-[#414042] font-semibold">
                    Date
                  </th>
                  <th className="p-3 md:p-4  text-[#414042] font-semibold">
                    User Email
                  </th>
                  <th className="p-3 md:p-4  text-[#414042] font-semibold">
                    Model
                  </th>
                  <th className="p-3 md:p-4  text-[#414042] font-semibold">
                    Runner Mode
                  </th>
                  <th className="p-3 md:p-4  text-[#414042] font-semibold">
                    Credit cons..
                  </th>
                  <th className="p-3 md:p-4  text-[#414042] font-semibold">
                    Billed Minutes
                  </th>
                  <th className="p-3 md:p-4  text-[#414042] font-semibold">
                    Billed Characters
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b text-center border-gray-200"
                  >
                    <td className="p-3 md:p-4 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.date}
                    </td>
                    <td className="p-3 md:p-4 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.user}
                    </td>
                    <td className="p-3 md:p-4 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.model}
                    </td>
                    <td className="p-3 md:p-4 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.runnerMode}
                    </td>
                    <td className="p-3 md:p-4 text-[#414042] lg:text-sm text-xs font-light tracking-wide flex items-center justify-center gap-1 md:gap-2">
                      {item.creditConsumed}
                    </td>
                    <td className="p-3 md:p-4 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.billedMinutes}
                    </td>
                    <td className="p-3 md:p-4 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.billedCharacters}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end gap-6 m-2">
            <p className="lg:text-sm text-xs text-gray-500 font-primary">
              {startIndex + 1}-{endIndex} of {data.length}
            </p>
            <div className="flex items-center gap-2">
              <button onClick={prevPage} disabled={currentPage === 0}>
                <PrevIcon className="w-[16px] h-[16px] text-gray-500 cursor-pointer" />
              </button>

              <button onClick={nextPage} disabled={endIndex >= data.length}>
                <NextIcon className="w-[16px] h-[16px] text-gray-500 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ChartWithDateFilter />
    </div>
  );
};

export default Usage;
