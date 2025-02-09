import React, { Fragment, useState } from 'react';
import TopBar from '../components/TopBar';
import PredictorIcon from '../components/Icons/PredictorIcon';
import FileIcon from '../components/Icons/FileIcon';
import PredictorSelect from '../components/predictor/Select';
import SettingsIcon from '../components/Icons/SettingsIcon';
import ToggleButton from './../components/predictor/CustomSwitch';
import { Slider } from '@mui/material';
import HandIcon from '../components/Icons/HandIcon';
import PenIcon from '../components/Icons/PenIcon';
import DeleteIcon from '../components/Icons/DeleteIcon';

const columns = ['Columns A', 'Columns B', 'Columns C', 'Columns D'];

const inputFiles = [
  { id: 1, text: 'The quick brown fox jumps over the lazy dog.' },
  {
    id: 2,
    text: "Life is what happens when you're busy making other plans.",
  },
  {
    id: 3,
    text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
  },
  {
    id: 4,
    text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
  },
  {
    id: 5,
    text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
  },
  { id: 6, text: "It always seems impossible until it's done." },
  { id: 7, text: 'Happiness depends upon ourselves.' },
  { id: 8, text: "Believe you can and you're halfway there." },
  {
    id: 9,
    text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
  },
  { id: 10, text: 'Dream big and dare to fail.' },
];

const Predictor: React.FC = () => {
  const [search, setSearch] = useState(60);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = (_event: Event, newValue: number | number[]) => {
    setSearch(newValue as number);
  };

  const handleToggle = (value: boolean) => {
    console.log('Toggle State:', value);
  };

  const handleCloseModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target instanceof HTMLDivElement && e.target.id === 'background-id') {
      setModalOpen(false);
    }
  };

  return (
    <Fragment>
      {/* Top bar */}
      <TopBar containerClassName="justify-between">
        <aside className="flex justify-start items-center gap-3">
          <PredictorIcon className="fill-[#414042] w-[26px] h-[23.59px]" />
          <h2 className="text-[26px] font-primary font-medium">
            The Predictor
          </h2>
        </aside>
      </TopBar>

      {/* Predictor */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <p className="text-sm text-[#414042] font-medium">Select Predictor</p>
          <div className="flex w-[300px] ">
            <PredictorSelect
              options={[
                {
                  label: 'Predictor',
                  options: [
                    { value: 'Predictor 1', label: 'Predictor 1' },
                    { value: 'Predictor 2', label: 'Predictor 2' },
                    { value: 'Predictor 3', label: 'Predictor 3' },
                  ],
                },
              ]}
              placeholder="No predictor selected"
            />
          </div>
        </div>
        {/* Status */}
        <div className="flex items-center gap-3">
          <label className="text-sm text-[#414042] font-primary ">
            Status:{' '}
            <span className="text-green-700 font-semibold ">Active</span>
          </label>
          <DeleteIcon className="w-[20px] h-[20px] stroke-[#E55057] cursor-pointer" />
        </div>
      </div>

      <section className="grid grid-cols-8 gap-4 mt-4 w-full">
        <div className="flex flex-col gap-3 w-full col-span-6">
          <div className="border border-[#E55057] border-dashed rounded-[5px] relative p-4">
            <div className="relative">
              <div className="min-h-[260px] flex flex-col gap-3 items-center justify-center">
                <h2 className="text-[#414042] text-base font-semibold">
                  Create Predictor
                </h2>
                <div className="flex items-center px-4 py-1.5 gap-2 border  border-[#E55057] rounded-[5px]">
                  <FileIcon className={`w-[18px] h-[18px] fill-predictor`} />
                  <label htmlFor="input" className="">
                    <p className="text-predictor text-xs font-primary font-semibold">
                      Choose File
                    </p>
                  </label>
                  <input id="input" type="file" className="hidden" />
                </div>
                <p className="text-[#414042] font-primary text-sm font-light">
                  or drag and drop a .csv, .xlsv, .json file here to upload
                </p>
              </div>
              <aside className="absolute bottom-0 right-0">
                <button className="bg-[#E55057] py-2 px-6 text-sm rounded-lg text-white font-primary flex justify-center items-center gap-2 whitespace-nowrap">
                  <PenIcon className={`w-[22px] h-[22px] fill-white`} />
                  Generate
                </button>
              </aside>
            </div>
          </div>

          <h2 className="text-[#414042] text-[20px] font-primary font-semibold">
            Input
          </h2>
          <div className="border border-[#E55057] border-dashed rounded-[5px] relative">
            <div className="flex items-center gap-3 overflow-hidden w-full">
              <div className="flex flex-col gap-3 overflow-y-auto w-full max-h-[300px] p-2 custom-scrollbar">
                {inputFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center gap-2 text-[14px] text-[#414042] p-3 w-full border rounded-[10px]"
                  >
                    <p>{file.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <aside className="col-span-2">
          <h3 className="text-md font-semibold text-[#414042] mb-2">
            File Formate
          </h3>

          <PredictorSelect
            options={[
              {
                label: 'formats',
                options: [
                  { value: '.csv', label: '.csv' },
                  { value: '.xlsm', label: '.xlsm' },
                  { value: '.json', label: '.json' },
                ],
              },
            ]}
            placeholder="No file selected"
          />

          {/** File Guidelines */}
          <div className="my-5">
            <h3 className="text-md font-semibold text-[#414042]">
              File Guidelines
            </h3>

            <ul className="mt-2 space-y-2">
              {[
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 tex-[14px] text-[#414042]"
                >
                  <span className=" text-gray-500">+</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/** File Preparation Tips */}
          <div className="my-5">
            <h3 className="text-md font-medium text-[#414042] ">
              File Preparation Tips
            </h3>

            <ul className="mt-2 space-y-2">
              {[
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 tex-[14px] text-[#414042]"
                >
                  <span className="  text-[#414042]">+</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/** Result Section  */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-md font-medium text-[#414042] ">
              File Preparation Tips
            </h3>
            <div>
              <p className="text-[12px] text-[#414042] font-primary mb-3">
                Prediction Section:
              </p>
              <button className="p-2 border-[1px] border-predictor rounded-[10px] w-full text-[#414042] font-primary text-[14px]">
                Result Value
              </button>
            </div>
            <div>
              <p className="text-[12px] text-[#414042] font-primary mb-3">
                Download Section:
              </p>
              <button className="p-2 border-[1px] bg-predictor border-predictor rounded-[10px] w-full text-[#414042] font-primary text-[14px]">
                Download
              </button>
            </div>
          </div>
        </aside>
        {/* <button
          className="bg-[#E55057] py-2 px-6 text-sm rounded-lg text-white font-primary flex justify-center items-center gap-2 whitespace-nowrap"
          onClick={() => setModalOpen(true)}
        >
          Open Modal
        </button> */}
      </section>

      {/* Create Predictor Modal */}
      {modalOpen && (
        <div>
          <div
            id="background-id"
            onClick={handleCloseModal}
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-50 "
          >
            <div className="grid grid-cols-7 bg-[#FFFFFF] rounded-[40px] w-[60%] h-[80%] relative border-[1px] border-[#8F8F8F] border-l-0">
              <div className="col-span-5 m-10">
                <div className="mb-8">
                  <h2 className="text-[#414042] text-[26px] font-primary font-semibold">
                    Configure Your Predictor
                  </h2>
                  <p className="text-[#414042] text-[14px] font-primary mt-2">
                    Make sure the file format meets the requirement. It must be
                    .csv, .xlsv, .json
                  </p>
                </div>
                <div>
                  <h3 className="text-[#414042] font-primary text-[12px] font-bold my-4">
                    {' '}
                    Available Columns Configuration
                  </h3>
                  <div className="overflow-hidden rounded-[30px] border-[1px]">
                    <table className="w-full">
                      <thead>
                        <tr className="">
                          <th className="text-[#414042] font-medium font-primary text-[14px] border py-2 ">
                            Available Columns
                          </th>
                          <th className="text-[#414042] font-medium font-primary text-[14px] border py-2 ">
                            Feature Columns
                          </th>
                          <th className="text-[#414042] font-medium font-primary text-[14px] border py-2 ">
                            Target Columns
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {columns.map((column, index) => (
                          <tr key={index} className="">
                            <td className="text-[#414042] font-primary text-[14px] border py-4 text-center">
                              {column}
                            </td>
                            <td className="text-[#414042] font-primary text-[14px] border py-4">
                              <div className="flex justify-center align-center">
                                <HandIcon className="w-[22px] h-[22px] fill-predictor" />
                              </div>
                            </td>
                            <td className="text-[#414042] font-primary text-[14px] border py-4 ">
                              <div className="flex justify-center align-center">
                                <HandIcon className="w-[22px] h-[22px] fill-predictor" />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button className="mt-4 bg-predictor text-white py-2 px-16 text-[14px] font-primary rounded-lg transition">
                      Generate
                    </button>{' '}
                  </div>
                </div>
              </div>

              {/** Advance Settings */}
              <div className="col-span-2 rounded-[40px] border-[2px]  w-full py-2">
                <div className="flex flex-col items-center justify-center mt-2 p-4">
                  <div className="flex items-center gap-1 py-2 px-3 my-auto bg-[#E55057]/50 w-full rounded-[30px] text-[10px] text-[#414042] font-primary">
                    <SettingsIcon className="w-[16px] h-[16px] stroke-[#414042]" />
                    Advance Settings
                  </div>

                  {/**  Settings Settings */}
                  <div className="flex flex-col w-full mt-4">
                    <h2 className="text-[14px] font-primary text-[#414042]">
                      Search Parameter
                    </h2>
                    <div>
                      <label className="text-xs text-predictor font-primary flex justify-end -mb-3">
                        {search}%
                      </label>
                      <Slider
                        value={search}
                        onChange={handleSearch}
                        min={0}
                        max={100}
                        aria-label="Temperature"
                        sx={{
                          color: '#E55057', // Custom Purple (Deep Purple)
                          '& .MuiSlider-thumb': { backgroundColor: '#E55057' }, // Thumb color
                          '& .MuiSlider-track': { backgroundColor: '#E55057' }, // Track (filled part)
                          '& .MuiSlider-rail': { backgroundColor: '#E5505733' }, // Rail (unfilled part)
                        }}
                      />
                    </div>
                  </div>

                  {/**  Settings Settings */}
                  <div className="flex flex-col w-full">
                    <h2 className="text-[14px] font-primary text-[#414042]">
                      Additional Configuration
                    </h2>
                    <div className="flex flex-col gap-3 my-2">
                      <div className="flex justify-between">
                        <p className="text-[10px] text-[#414042] font-primary ">
                          Remove NaN Entries
                        </p>
                        <ToggleButton
                          defaultChecked={true}
                          onChange={handleToggle}
                          switchColor="#E55057"
                          trackColor="#E55057"
                        />
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[10px] text-[#414042] font-primary ">
                          Remove Outliers
                        </p>
                        <ToggleButton
                          defaultChecked={true}
                          onChange={handleToggle}
                          switchColor="#E55057"
                          trackColor="#E55057"
                        />
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[10px] text-[#414042] font-primary ">
                          Remove Others
                        </p>
                        <ToggleButton
                          defaultChecked={true}
                          onChange={handleToggle}
                          switchColor="#E55057"
                          trackColor="#E55057"
                        />
                      </div>
                    </div>
                  </div>

                  {/**  Settings Settings */}
                  <div className="flex flex-col w-full">
                    <h2 className="text-[14px] font-primary text-[#414042] my-3">
                      Training Details
                    </h2>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <p className="text-[10px] text-[#414042] font-primary ">
                          Estimated Time
                        </p>
                        <label className="text-[10px] text-predictor font-primary flex justify-end -mb-2">
                          3 minutes
                        </label>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[10px] text-[#414042] font-primary ">
                          Estimated Price
                        </p>
                        <label className="text-[10px] text-predictor font-primary flex justify-end -mb-2">
                          10 credits
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Predictor;
