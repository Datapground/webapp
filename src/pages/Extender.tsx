import React, { Fragment, useState } from 'react';
import TopBar from '../components/TopBar';
import ExtenderIcon from '../components/Icons/ExtenderIcon';
import FileIcon from '../components/Icons/FileIcon';
import SettingsIcon from '../components/Icons/SettingsIcon';
import { Slider } from '@mui/material';
import ExtenderSelect from '../components/extender/Select';
import ToggleButton from '../components/predictor/CustomSwitch';
import ChevronDownIcon from '../components/Icons/ChevronDownIcon';
import PenIcon from '../components/Icons/PenIcon';
import JsonIcon from '../components/Icons/JsonIcon';

const Extender: React.FC = () => {
  const [rows, setRows] = useState(7);
  const [columns, setColumns] = useState(10);
  const [inputFile, setInputFile] = useState('');
  const [selected, setSelected] = useState('tabular');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';
      setInputFile(fileExtension);
    }
  };

  const handleRows = (_event: Event, newValue: number | number[]) => {
    setRows(newValue as number);
  };

  const handleColumns = (_event: Event, newValue: number | number[]) => {
    setColumns(newValue as number);
  };

  const handleToggle = (value: boolean) => {
    console.log('Toggle State:', value);
  };

  return (
    <Fragment>
      <TopBar containerClassName="justify-between">
        <aside className="flex justify-start items-center gap-3">
          <ExtenderIcon className="fill-[#414042] w-[26px] h-[26px]" />
          <h2 className="text-[26px] font-primary font-medium">The Extender</h2>
        </aside>
      </TopBar>

      <aside className="flex items-center justify-end gap-3">
        <button
          className={`py-2 px-3 border ${
            selected === 'tabular'
              ? 'border-extender text-extender'
              : 'border-transparent'
          } text-[#414042] text-md`}
          onClick={() => setSelected('tabular')}
        >
          Tabular Data
        </button>
        <button
          className={`py-2 px-3 border ${
            selected === 'nlp'
              ? 'border-extender text-extender'
              : 'border-transparent'
          } text-[#414042]  text-md`}
          onClick={() => setSelected('nlp')}
        >
          Natural Language Input
        </button>
      </aside>

      <section className="grid grid-cols-8 gap-2 mt-4 w-full">
        <div className="flex flex-col gap-3 w-full col-span-6">
          <div className="border border-[#4CB448CC] rounded-[5px] relative p-4 min-h-[340px] flex flex-col justify-between">
            <div className="relative flex-grow">
              {inputFile.length === 0 && (
                <div className="flex flex-col gap-3 items-center justify-center min-h-[300px]">
                  <h2 className="text-[#414042] text-base font-semibold">
                    Upload a File
                  </h2>
                  <div className="flex items-center px-4 py-1.5 gap-2 border border-[#4CB448] bg-extender rounded-[5px] cursor-pointer">
                    <FileIcon className="w-[18px] h-[18px] fill-white" />
                    <label htmlFor="input">
                      <p className="text-xs text-white font-primary">
                        Choose File
                      </p>
                      <input
                        id="input"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <p className="text-[#414042] font-primary text-sm font-light">
                    or drag and drop a .csv, .xlsv, .json file here to upload
                  </p>
                </div>
              )}
            </div>

            {inputFile.length > 0 && (
              <div className="flex justify-between items-center w-full ">
                <p className="flex items-center text-[#414042] font-primary text-sm font-light">
                  <JsonIcon className="w-[30px] h-[30px] fill-extender" />
                  The .{inputFile} file has been uploaded to generate result
                </p>
                <button className="bg-[#4CB448] py-2 px-6 text-sm rounded-lg text-white font-primary flex justify-center items-center gap-2 whitespace-nowrap">
                  <PenIcon className="w-[22px] h-[22px] fill-white" />
                  Generate
                </button>
              </div>
            )}
          </div>

          {/* Extender Output */}
          <h2 className="text-[#414042] text-[20px] font-primary font-semibold">
            Output
          </h2>
          <div className=" flex flex-col items-center min-h-[200px] flex-grow border border-[#4CB448CC] rounded-[5px] justify-center">
            <img
              src="/logo-icon.png"
              alt="logo"
              className="object-contain w-[70px] h-[70px] pointer-events-none"
            />
            <h3 className="text-[#414042] text-base font-semibold">
              Not Result Yet
            </h3>
            <p className="text-[#414042] text-sm font-primary">
              The Generation is being performed
            </p>
          </div>
        </div>

        <div className=" flex flex-col gap-5 col-span-2">
          <span className="flex items-center justify-start gap-2 text-[#414042] text-[16px] rounded-[10px] p-2 text-center bg-[#4CB448]/60">
            <SettingsIcon className={`w-[14px] h-[14px] stroke-[#414042]`} />
            Settings
          </span>
          <div className="space-y-2">
            <div>
              <span className="flex items-center justify-between text-[14px] font-primary text-[#414042]">
                Add to rows
                <label className="p-1 bg-slate-50 rounded-md border px-4 text-sm font-[200]">
                  {rows}
                </label>
              </span>{' '}
              <Slider
                value={rows}
                max={20}
                min={0}
                onChange={handleRows}
                aria-label="Temperature"
                sx={{
                  color: '#1E647F',
                  '& .MuiSlider-thumb': { backgroundColor: '#1E647F' }, // Thumb color
                  '& .MuiSlider-track': { backgroundColor: '#1E647F' }, // Track (filled part)
                  '& .MuiSlider-rail': { backgroundColor: '#1E647F66' }, // Rail (unfilled part)
                }}
              />
            </div>

            <div>
              <span className="flex items-center justify-between text-[14px] font-primary text-[#414042]">
                Add to columns
                <label className="p-1 bg-slate-50 rounded-md border px-4  text-sm font-[200]">
                  {' '}
                  {columns}
                </label>
              </span>

              <Slider
                value={columns}
                onChange={handleColumns}
                max={20}
                min={0}
                aria-label="Temperature"
                sx={{
                  color: '#A077A8',
                  '& .MuiSlider-thumb': { backgroundColor: '#A077A8' }, // Thumb color
                  '& .MuiSlider-track': { backgroundColor: '#A077A8' }, // Track (filled part)
                  '& .MuiSlider-rail': { backgroundColor: '#A077A866' }, // Rail (unfilled part)
                }}
              />
            </div>
          </div>

          <div className="">
            <p className="text-sm text-[#414042] mb-2 font-primary">
              Output Format
            </p>
            <div className="flex w-[280px] ">
              <ExtenderSelect
                options={[
                  {
                    label: 'Predictor',
                    options: [
                      { value: '.csv', label: '.csv' },
                      { value: '.xlsm', label: '.xlsm' },
                      { value: '.json', label: '.json' },
                    ],
                  },
                ]}
                placeholder="No predictor selected"
              />
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <p className="text-sm text-[#414042] font-primary">
              Handle Duplicates
            </p>
            <ToggleButton
              defaultChecked={true}
              onChange={handleToggle}
              switchColor="#4CB448"
              trackColor="#4CB448"
            />
          </div>

          <hr />

          <div className="flex justify-between items-center ">
            <p className="text-sm text-[#414042] font-primary">
              Show generated rows
            </p>
            <ChevronDownIcon className={`w-[18px] h-[18px] stroke-extender`} />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Extender;
