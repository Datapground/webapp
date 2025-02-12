import React from 'react';
import TopBar from '../components/TopBar';
import ActivityIcon from '../components/Icons/ActivityIcon';
import DeleteIcon from '../components/Icons/DeleteIcon';

interface ActivityData {
  name: string;
  tool: string;
  solution: string;
  date: string;
}

const data: ActivityData[] = [
  {
    name: 'File_Extension.csv',
    tool: 'The Extender',
    solution: 'Extended rows to 1000',
    date: '2025-01-17',
  },
  {
    name: 'Text_Generation_Task_01',
    tool: 'The Generator',
    solution: 'Processed Text Data',
    date: '2025-01-17',
  },
  {
    name: 'Data_Cleanup_Report.xlsx',
    tool: 'The Extender',
    solution: 'Cleaned and Processed File',
    date: '2025-01-17',
  },
  {
    name: 'File_Extension.csv',
    tool: 'The Extender',
    solution: 'Extended rows to 1000',
    date: '2025-01-17',
  },
  {
    name: 'Text_Generation_Task_01',
    tool: 'The Generator',
    solution: 'Processed Text Data',
    date: '2025-01-17',
  },
]; // Ensure TypeScript recognizes the structure

const Activity: React.FC = () => {
  return (
    <div>
      <TopBar containerClassName="justify-between">
        <aside className="flex justify-start items-center gap-3">
          <ActivityIcon className="stroke-[#414042] w-[26px] h-[23.59px]" />
          <h2 className="text-[26px] font-primary font-medium">The Activity</h2>
        </aside>
      </TopBar>

      <div className="border border-[#D6D6D6] rounded-[30px] md:py-4 md:px-8 min-h-[500px] relative mt-4 overflow-hidden">
        {data.length === 0 ? (
          <div className="flex items-center justify-center h-full w-full min-h-[500px]">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/logo-icon.png"
                alt="logo"
                className="object-contain lg:w-[80px] md:w-[70px] w-[60px] lg:h-[80px] md:h-[70px] h-[60px] pointer-events-none"
              />
              <h2 className="text-[#414042] lg:text-base md:text-sm text-xs font-primary font-semibold">
                No Activity Found
              </h2>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto h-[500px] no-scrollbar max-w-full">
            <table className="min-w-[600px] w-full font-primary text-xs md:text-sm bg-white">
              <thead className="sticky top-0 z-10 bg-white">
                <tr className="border-b text-center">
                  <th className="p-3 md:p-4 text-[#414042] font-semibold">
                    Activity Name
                  </th>
                  <th className="p-3 md:p-4 text-[#414042] font-semibold">
                    Tool Used
                  </th>
                  <th className="p-3 md:p-4 text-[#414042] font-semibold">
                    Solution
                  </th>
                  <th className="p-3 md:p-4 text-[#414042] font-semibold">
                    Date
                  </th>
                  <th className="p-3 md:p-4 text-[#414042] font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-3 md:p-4 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.name}
                    </td>
                    <td className="p-3 md:p-4 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.tool}
                    </td>
                    <td className="p-3 md:p-4 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.solution}
                    </td>
                    <td className="p-3 md:p-4 text-[#414042] lg:text-sm text-xs font-light tracking-wide">
                      {item.date}
                    </td>
                    <td className="p-3 md:p-4 text-[#414042] lg:text-sm text-xs font-light tracking-wide flex items-center justify-center gap-1 md:gap-2">
                      <button className="bg-[#5F5FC9] text-white px-2 py-1 md:px-3 md:py-[3px] rounded-[20px] lg:text-sm text-xs">
                        View
                      </button>
                      <button className="border border-[#5F5FC9] text-[#5F5FC9] px-2 py-1 md:px-3 md:py-[3px] rounded-[20px] lg:text-sm text-xs">
                        Download
                      </button>
                      <button className="p-1 md:p-2">
                        <DeleteIcon className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] fill-[#BF0400]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity;
