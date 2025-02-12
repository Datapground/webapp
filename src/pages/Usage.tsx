import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import UsageIcon from '../components/Icons/UsageIcon';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import UserSelect from '../components/usage/Select';
import { IoPrintOutline } from 'react-icons/io5';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';

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
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const entriesPerPage = 5;

  // Calculate the start and end index for slicing data
  const startIndex = currentPage * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
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

      <div className="md:p-6 p-4">
        <h2 className="lg:text-[22px] md:text-[20px] text-[16px] text-xs font-semibold text-[#414042] font-primary">
          Usage Report
        </h2>
        <div className="flex flex-col mt-6">
          <div className="flex items-center justify-between gap-2 ">
            <div className="flex items-center gap-2 ">
              <label className="lg:text-base md:text-sm text-xs text-gray-500 font-medium font-primary">
                From
              </label>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
                className="lg:p-2 p-1.5 lg:max-w-[150px] md:max-w-[120px] max-w-[100px] border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 focus:ring-0 lg:text-base md:text-sm text-xs text-gray-500"
              />
              <label className="lg:text-base md:text-sm text-xs text-gray-500 font-medium font-primary">
                To
              </label>

              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate || undefined}
                placeholderText="End Date"
                className="lg:p-2 p-1.5 lg:max-w-[150px] md:max-w-[120px] max-w-[100px] border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 focus:ring-0 lg:text-base md:text-sm text-xs text-gray-500"
              />
              <div className="flex lg:w-[150px] md:w-[150px] w-[120px]">
                <UserSelect
                  options={[
                    {
                      label: 'Model Type',
                      options: [
                        { value: 'Model 1', label: 'Model 1' },
                        { value: 'Model 2', label: 'Model 2' },
                        { value: 'Model 3', label: 'Model 3' },
                      ],
                    },
                  ]}
                  placeholder="Model Type"
                />
              </div>
              <div className="flex lg:w-[160px] md:w-[150px] w-[120px] h-[40px]">
                <UserSelect
                  options={[
                    {
                      label: 'Runner Model',
                      options: [
                        { value: 'Model 1', label: 'Model 1' },
                        { value: 'Model 2', label: 'Model 2' },
                        { value: 'Model 3', label: 'Model 3' },
                      ],
                    },
                  ]}
                  placeholder="Runner Model"
                />
              </div>
            </div>

            <div>
              <button className="lg:p-2.5 p-1.5 lg:text-md md:text-sm text-xs bg-transparent border-transparent text-gray-500 hover:text-white hover:bg-black hover:border-black transition-all duration-300 font-semibold rounded-[8px] flex items-center gap-1">
                <IoPrintOutline className="w-[16px] h-[16px] text-gray-500 hover:bg-white cursor-pointer" />
                Export CSV
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 border border-[#E5E5E5] rounded-[5px]">
          <div className="max-h-[180px] no-scrollbar max-w-full">
            <table className="min-w-[600px] w-full font-primary text-xs md:text-sm bg-white">
              <thead className="top-0 z-10 bg-white">
                <tr className="border-b text-center bg-gray-100  ">
                  <th className="p-1  text-[#414042] font-semibold">Date</th>
                  <th className="p-1  text-[#414042] font-semibold">
                    User Email
                  </th>
                  <th className="p-1  text-[#414042] font-semibold">Model</th>
                  <th className="p-1  text-[#414042] font-semibold">
                    Runner Mode
                  </th>
                  <th className="p-1  text-[#414042] font-semibold">
                    Credit cons..
                  </th>
                  <th className="p-1  text-[#414042] font-semibold">
                    Billed Minutes
                  </th>
                  <th className="p-1  text-[#414042] font-semibold">
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
                    <td className="p-1 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.date}
                    </td>
                    <td className="p-1 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.user}
                    </td>
                    <td className="p-1 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.model}
                    </td>
                    <td className="p-1 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.runnerMode}
                    </td>
                    <td className="p-1 text-[#414042] lg:text-sm text-xs font-light tracking-wide flex items-center justify-center gap-1 md:gap-2">
                      {item.creditConsumed}
                    </td>
                    <td className="p-1 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.billedMinutes}
                    </td>
                    <td className="p-1 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.billedCharacters}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="border-t p-2 flex justify-end">
            <div className="flex items-center gap-6">
              <p className="lg:text-sm text-xs text-gray-500 font-primary">
                0-0 of 0
              </p>
              <div className="flex items-center gap-2">
                <GrFormPrevious
                  onClick={prevPage}
                  className="w-[16px] h-[16px] text-gray-500 cursor-pointer"
                />
                <GrFormNext
                  onClick={nextPage}
                  className="w-[16px] h-[16px] text-gray-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
