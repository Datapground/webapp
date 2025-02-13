// import SelectOption from '../components/SelectOption';
import React, { Fragment, useState } from 'react';
import TextRemove from '../components/Icons/TextRemove';
import PenIcon from '../components/Icons/PenIcon';
import Slider from '@mui/material/Slider';
import SettingsIcon from '../components/Icons/SettingsIcon';

import TopBar from '../components/TopBar';
import GeneratorIcon from '../components/Icons/GeneratorIcon';
import GeneratorSelect from '../components/generator/Select';

const Generator: React.FC = () => {
  const [speed, setSpeed] = useState(50);
  const [temperature, setTemperature] = useState(40);
  const [rows, setRows] = useState(70);
  const [accuracy, setAccuracy] = useState(30);
  const [text, setText] = useState('');
  const [selected, setSelected] = useState('tabular');

  const handleSpeed = (_event: Event, newValue: number | number[]) => {
    setSpeed(newValue as number);
  };

  const handleRows = (_event: Event, newValue: number | number[]) => {
    setRows(newValue as number);
  };

  const handleTemperature = (_event: Event, newValue: number | number[]) => {
    setTemperature(newValue as number);
  };

  const handleAccuracy = (_event: Event, newValue: number | number[]) => {
    setAccuracy(newValue as number);
  };

  return (
    <Fragment>
      {/* Top bar */}
      <TopBar containerClassName="justify-between">
        <aside className="flex justify-start items-center gap-3">
          <GeneratorIcon className="fill-[#414042] w-[26px] h-[23.59px]" />
          <h2 className="text-[26px] font-primary font-medium">
            The Generator
          </h2>
        </aside>
      </TopBar>

      {/* Generator bar */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <p className="sm:text-sm text-xs text-[#414042]">Model</p>

          <div className="flex ">
            <GeneratorSelect />
          </div>
        </div>

        {/** Tabular Data */}
        <div className="flex items-center gap-3">
          <button
            className={`md:py-2 p-1.5 md:px-3 px-2 border ${
              selected === 'tabular'
                ? 'border-generator text-generator'
                : 'border-transparent'
            } text-[#414042] lg:text-base md:text-sm text-xs`}
            onClick={() => setSelected('tabular')}
          >
            Tabular Data
          </button>
          <button
            className={`py-2 px-3 border ${
              selected === 'nlp'
                ? 'border-generator text-generator'
                : 'border-transparent'
            } lg:text-base md:text-sm text-xs`}
            onClick={() => setSelected('nlp')}
          >
            Natural Language Input
          </button>
        </div>
      </div>

      {/* Generator Content */}
      <div className="grid grid-cols-8 gap-6 mt-4">
        <div className="flex flex-col gap-3 w-full xl:col-span-6 col-span-8">
          <div className="border border-generator rounded-[5px] relative p-4">
            <div className="relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write an explanation about the topic you want to generate data about and its fields...."
                className="min-h-[200px] md:min-h-[260px] w-full h-full bg-transparent outline-none border-none md:text-sm text-xs text-[#414042] placeholder:text-[#414042] resize-none overflow-hidden"
              />
              <button
                className="absolute top-0 right-0 z-10"
                onClick={() => setText('')}
              >
                <TextRemove
                  className={`w-[30px] h-[30px] fill-generator relative`}
                />
              </button>
            </div>
            <aside className="flex justify-end">
              <button className="bg-generator lg:py-2 py-1.5 lg:px-6 px-5 md:text-sm text-xs rounded-lg text-white font-primary flex justify-center items-center gap-2 whitespace-nowrap">
                <PenIcon
                  className={`md:w-[22px] w-[20px] md:h-[22px] h-[20px] fill-white`}
                />
                Generate
              </button>
            </aside>
          </div>

          {/** Output */}
          <h2 className="text-[#414042] lg:text-[20px] text-[18px] font-primary font-semibold">
            Output
          </h2>
          <div className=" flex flex-col items-center flex-grow lg:min-h-[200px] min-h-[150px] border border-generator rounded-[5px] justify-center">
            <img
              src="/logo-icon.png"
              alt="logo"
              className="object-contain lg:w-[70px] w-[60px] lg:h-[70px] h-[60px] pointer-events-none"
            />
            <h3 className="text-[#414042] lg:text-base text-sm font-semibold">
              Not Result Yet
            </h3>
            <p className="text-[#414042] lg:text-sm text-xs font-primary">
              The Generation is being performed
            </p>
          </div>
        </div>

        <div className="col-span-8 xl:col-span-2">
          <span
            className="flex items-center justify-start gap-2 text-[#414042] md:text-[16px] text-sm mt-3 xl:mt-0 font-[400] rounded-[10px] p-2 text-center"
            style={{
              background: 'var(--generator-light-color)',
            }}
          >
            <SettingsIcon className={`w-[14px] h-[14px] stroke-[#414042]`} />
            Settings
          </span>

          <div className="mt-3">
            <div>
              <span className="flex items-center justify-between md:text-base text-sm">
                Speed
                <label className="p-1 bg-slate-50 rounded-md border lg:px-4 px-3 lg:py-1 py-0.8  lg:text-sm text-xs font-light">
                  {' '}
                  {speed}
                </label>
              </span>{' '}
              <Slider
                value={speed}
                onChange={handleSpeed}
                aria-label="Temperature"
                sx={{
                  color: '#C32782', // Custom Purple (Deep Purple)
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#C32782',
                    width: { xs: 14, md: 16 },
                    height: { xs: 14, md: 16 },
                  },
                  '& .MuiSlider-track': {
                    backgroundColor: '#C32782',
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: '#C3278233',
                  },
                }}
              />
            </div>

            <div>
              <span className="flex items-center justify-between md:text-base text-sm">
                Temperature
                <label className="p-1 bg-slate-50 rounded-md border lg:px-4 px-3 lg:py-1 py-0.8  lg:text-sm text-xs font-light">
                  {' '}
                  {temperature}
                </label>
              </span>

              <Slider
                value={temperature}
                onChange={handleTemperature}
                aria-label="Temperature"
                sx={{
                  color: '#A077A8', // Custom Purple (Deep Purple)
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#A077A8',
                    width: { xs: 14, md: 16 },
                    height: { xs: 14, md: 16 },
                  }, // Thumb color
                  '& .MuiSlider-track': { backgroundColor: '#A077A8' }, // Track (filled part)
                  '& .MuiSlider-rail': { backgroundColor: '#A077A866' }, // Rail (unfilled part)
                }}
              />
            </div>

            <div>
              <span className="flex items-center justify-between md:text-base text-sm">
                Rows
                <label className="p-1 bg-slate-50 rounded-md border lg:px-4 px-3 lg:py-1 py-0.8  lg:text-sm text-xs font-light">
                  {' '}
                  {rows}
                </label>
              </span>{' '}
              <Slider
                value={rows}
                onChange={handleRows}
                aria-label="Temperature"
                sx={{
                  color: '#1E647F', // Custom Purple (Deep Purple)
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#1E647F',
                    width: { xs: 14, md: 16 },
                    height: { xs: 14, md: 16 },
                  }, // Thumb color
                  '& .MuiSlider-track': { backgroundColor: '#1E647F' }, // Track (filled part)
                  '& .MuiSlider-rail': { backgroundColor: '#1E647F66' }, // Rail (unfilled part)
                }}
              />
            </div>

            <div>
              <span className="flex items-center justify-between md:text-base text-sm">
                Accuracy
                <label className="p-1 bg-slate-50 rounded-md border lg:px-4 px-3 lg:py-1 py-0.8  lg:text-sm text-xs font-light">
                  {' '}
                  {accuracy}
                </label>
              </span>{' '}
              <Slider
                value={accuracy}
                onChange={handleAccuracy}
                aria-label="Temperature"
                sx={{
                  color: '#59B1FE', // Custom Purple (Deep Purple)
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#59B1FE',
                    width: { xs: 14, md: 16 },
                    height: { xs: 14, md: 16 },
                  }, // Thumb color
                  '& .MuiSlider-track': { backgroundColor: '#59B1FE' }, // Track (filled part)
                  '& .MuiSlider-rail': { backgroundColor: '#59B1FE33' }, // Rail (unfilled part)
                }}
              />
            </div>

            {/** Examples */}
            <div className="mt-4 border-t pt-2">
              <h3 className="md:text-base text-sm font-semibold text-gray-700">
                Examples
              </h3>
              <ul className="mt-2 space-y-2">
                {[
                  'Lorem ipsum dolor sit amet',
                  'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                  'Lorem ipsum dolor sit amet',
                  'Lorem ipsum dolor sit amet',
                  'Lorem ipsum dolor sit amet',
                  'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 md:text-sm text-xs text-gray-700"
                  >
                    <span className="text-lg font-semibold text-gray-500">
                      +
                    </span>{' '}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Generator;
