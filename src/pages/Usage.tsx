import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import UsageIcon from '../components/Icons/UsageIcon';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { IoPrintOutline } from 'react-icons/io5';
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
    date: '2025-02-03',
    user: 'user1@gmail.com',
    model: 'Model 2',
    runnerMode: 'Runner 1',
    creditConsumed: '0.45',
    billedMinutes: '1.23',
    billedCharacters: '3.78',
  },
  {
    date: '2025-02-07',
    user: 'user5@gmail.com',
    model: 'Model 1',
    runnerMode: 'Runner 3',
    creditConsumed: '0.89',
    billedMinutes: '2.56',
    billedCharacters: '4.12',
  },
  {
    date: '2025-02-11',
    user: 'user8@gmail.com',
    model: 'Model 3',
    runnerMode: 'Runner 2',
    creditConsumed: '0.32',
    billedMinutes: '0.89',
    billedCharacters: '1.45',
  },
  {
    date: '2025-02-14',
    user: 'user3@gmail.com',
    model: 'Model 2',
    runnerMode: 'Runner 1',
    creditConsumed: '0.76',
    billedMinutes: '1.67',
    billedCharacters: '2.94',
  },
  {
    date: '2025-02-18',
    user: 'user6@gmail.com',
    model: 'Model 1',
    runnerMode: 'Runner 3',
    creditConsumed: '0.21',
    billedMinutes: '0.78',
    billedCharacters: '3.45',
  },
  {
    date: '2025-02-21',
    user: 'user2@gmail.com',
    model: 'Model 3',
    runnerMode: 'Runner 2',
    creditConsumed: '0.98',
    billedMinutes: '2.34',
    billedCharacters: '5.67',
  },
  {
    date: '2025-02-24',
    user: 'user9@gmail.com',
    model: 'Model 2',
    runnerMode: 'Runner 1',
    creditConsumed: '0.41',
    billedMinutes: '1.11',
    billedCharacters: '2.58',
  },
  {
    date: '2025-02-26',
    user: 'user4@gmail.com',
    model: 'Model 1',
    runnerMode: 'Runner 3',
    creditConsumed: '0.53',
    billedMinutes: '1.44',
    billedCharacters: '3.21',
  },
  {
    date: '2025-02-27',
    user: 'user7@gmail.com',
    model: 'Model 3',
    runnerMode: 'Runner 2',
    creditConsumed: '0.67',
    billedMinutes: '2.01',
    billedCharacters: '4.89',
  },
  {
    date: '2025-02-28',
    user: 'user10@gmail.com',
    model: 'Model 2',
    runnerMode: 'Runner 1',
    creditConsumed: '0.29',
    billedMinutes: '0.93',
    billedCharacters: '1.76',
  },
  {
    date: '2025-02-03',
    user: 'user1@gmail.com',
    model: 'Model 2',
    runnerMode: 'Runner 1',
    creditConsumed: '0.45',
    billedMinutes: '1.23',
    billedCharacters: '3.78',
  },
  {
    date: '2025-02-07',
    user: 'user5@gmail.com',
    model: 'Model 1',
    runnerMode: 'Runner 3',
    creditConsumed: '0.89',
    billedMinutes: '2.56',
    billedCharacters: '4.12',
  },
  {
    date: '2025-02-11',
    user: 'user8@gmail.com',
    model: 'Model 3',
    runnerMode: 'Runner 2',
    creditConsumed: '0.32',
    billedMinutes: '0.89',
    billedCharacters: '1.45',
  },
  {
    date: '2025-02-14',
    user: 'user3@gmail.com',
    model: 'Model 2',
    runnerMode: 'Runner 1',
    creditConsumed: '0.76',
    billedMinutes: '1.67',
    billedCharacters: '2.94',
  },
  {
    date: '2025-02-18',
    user: 'user6@gmail.com',
    model: 'Model 1',
    runnerMode: 'Runner 3',
    creditConsumed: '0.21',
    billedMinutes: '0.78',
    billedCharacters: '3.45',
  },
  {
    date: '2025-02-21',
    user: 'user2@gmail.com',
    model: 'Model 3',
    runnerMode: 'Runner 2',
    creditConsumed: '0.98',
    billedMinutes: '2.34',
    billedCharacters: '5.67',
  },
  {
    date: '2025-02-24',
    user: 'user9@gmail.com',
    model: 'Model 2',
    runnerMode: 'Runner 1',
    creditConsumed: '0.41',
    billedMinutes: '1.11',
    billedCharacters: '2.58',
  },
  {
    date: '2025-02-26',
    user: 'user4@gmail.com',
    model: 'Model 1',
    runnerMode: 'Runner 3',
    creditConsumed: '0.53',
    billedMinutes: '1.44',
    billedCharacters: '3.21',
  },
  {
    date: '2025-02-27',
    user: 'user7@gmail.com',
    model: 'Model 3',
    runnerMode: 'Runner 2',
    creditConsumed: '0.67',
    billedMinutes: '2.01',
    billedCharacters: '4.89',
  },
  {
    date: '2025-02-28',
    user: 'user10@gmail.com',
    model: 'Model 2',
    runnerMode: 'Runner 1',
    creditConsumed: '0.29',
    billedMinutes: '0.93',
    billedCharacters: '1.76',
  },
  {
    date: '2025-02-03',
    user: 'user1@gmail.com',
    model: 'Model 2',
    runnerMode: 'Runner 1',
    creditConsumed: '0.45',
    billedMinutes: '1.23',
    billedCharacters: '3.78',
  },
  {
    date: '2025-02-07',
    user: 'user5@gmail.com',
    model: 'Model 1',
    runnerMode: 'Runner 3',
    creditConsumed: '0.89',
    billedMinutes: '2.56',
    billedCharacters: '4.12',
  },
  {
    date: '2025-02-11',
    user: 'user8@gmail.com',
    model: 'Model 3',
    runnerMode: 'Runner 2',
    creditConsumed: '0.32',
    billedMinutes: '0.89',
    billedCharacters: '1.45',
  },
  {
    date: '2025-02-14',
    user: 'user3@gmail.com',
    model: 'Model 2',
    runnerMode: 'Runner 1',
    creditConsumed: '0.76',
    billedMinutes: '1.67',
    billedCharacters: '2.94',
  },
  {
    date: '2025-02-18',
    user: 'user6@gmail.com',
    model: 'Model 1',
    runnerMode: 'Runner 3',
    creditConsumed: '0.21',
    billedMinutes: '0.78',
    billedCharacters: '3.45',
  },
  {
    date: '2025-02-21',
    user: 'user2@gmail.com',
    model: 'Model 3',
    runnerMode: 'Runner 2',
    creditConsumed: '0.98',
    billedMinutes: '2.34',
    billedCharacters: '5.67',
  },
  {
    date: '2025-02-24',
    user: 'user9@gmail.com',
    model: 'Model 2',
    runnerMode: 'Runner 1',
    creditConsumed: '0.41',
    billedMinutes: '1.11',
    billedCharacters: '2.58',
  },
  {
    date: '2025-02-26',
    user: 'user4@gmail.com',
    model: 'Model 1',
    runnerMode: 'Runner 3',
    creditConsumed: '0.53',
    billedMinutes: '1.44',
    billedCharacters: '3.21',
  },
  {
    date: '2025-02-27',
    user: 'user7@gmail.com',
    model: 'Model 3',
    runnerMode: 'Runner 2',
    creditConsumed: '0.67',
    billedMinutes: '2.01',
    billedCharacters: '4.89',
  },
  {
    date: '2025-02-28',
    user: 'user10@gmail.com',
    model: 'Model 2',
    runnerMode: 'Runner 1',
    creditConsumed: '0.29',
    billedMinutes: '0.93',
    billedCharacters: '1.76',
  },
];

const Usage: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  const filterData = (
    data: ActivityData[],
    startDate: Date | null,
    endDate: Date | null
  ) => {
    if (!startDate || !endDate) {
      return data;
    }
    return data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
    });
  };

  const filteredData = filterData(data, startDate, endDate);

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
            <div className="relative">
              <DatePicker
                selected={startDate}
                isClearable
                onChange={(update) => setDateRange(update)}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                placeholderText="Filter By Date"
                className="rounded-[20px] border min-w-[250px] border-[#E5E5E5] px-4 h-[40px] text-sm font-light outline-none"
                dateFormat="yyyy-MM-dd"
                portalId="root"
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
                {filteredData?.map((item, index) => (
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
        </div>
      </div>

      <ChartWithDateFilter chartData={filteredData} />
    </div>
  );
};

export default Usage;
