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
  {
    name: 'Data_Cleanup_Report.xlsx',
    tool: 'The Extender',
    solution: 'Cleaned and Processed File',
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

      <div className="pr-8 py-6">
        <div className="border border-[#D6D6D6] rounded-[20px] p-4 min-h-[500px] relative">
          {/** if data available */}
          {data.length === 0 ? (
            <div className="flex items-center justify-center h-full w-full min-h-[500px]">
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/logo-icon.png"
                  alt="logo"
                  className="object-contain w-[100px] h-[100px] pointer-events-none"
                />
                <h2 className="text-[#414042] text-[18px] font-primary font-semibold">
                  No Activity Found
                </h2>
              </div>
            </div>
          ) : (
            <div className="relative">
              {/** data Table */}

              <div className="overflow-x-auto max-h-[500px] no-scrollbar">
                <table className="min-w-full text-center font-primary text-[12px] border-collapse">
                  <thead className="bg-white sticky top-0 z-10">
                    <tr className="border-b text-gray-700">
                      <th className="p-4">Activity Name</th>
                      <th className="p-4">Tool Used</th>
                      <th className="p-4">Solution</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="p-4">{item.name}</td>
                        <td className="p-4">{item.tool}</td>
                        <td className="p-4">{item.solution}</td>
                        <td className="p-4">{item.date}</td>
                        <td className="p-4 flex items-center justify-center gap-2">
                          <button className="bg-[#5F5FC9] text-white px-3 py-[3px] my-auto text-center rounded-[20px]">
                            View
                          </button>
                          <button className="border border-[#5F5FC9] text-[#5F5FC9] px-3 py-[3px] my-auto text-center rounded-[20px]">
                            Download
                          </button>
                          <button>
                            <DeleteIcon className="w-[20px] h-[20px] fill-[#BF0400]" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activity;
