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
          <p className="text-sm text-[#414042]">Model</p>

          <div className="flex w-[300px] ">
            <GeneratorSelect />
          </div>
        </div>

        {/** Tabular Data */}
        <div className="flex items-center gap-3">
          <button
            className={`py-2 px-3 border ${
              selected === 'tabular'
                ? 'border-generator text-generator'
                : 'border-none'
            } text-[#414042] text-md`}
            onClick={() => setSelected('tabular')}
          >
            Tabular Data
          </button>
          <button
            className={`py-2 px-3 border ${
              selected === 'nlp'
                ? 'border-generator text-generator'
                : 'border-none'
            } text-[#414042] text-md`}
            onClick={() => setSelected('nlp')}
          >
            Natural Language Input
          </button>
        </div>
      </div>

      {/* Generator Content */}
      <div className="grid grid-cols-8 gap-4 mt-4">
        <div className="flex flex-col gap-3 w-full col-span-6">
          <div className="border border-generator rounded-[5px] relative p-4">
            <div className="relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write an explanation about the topic you want to generate data about and its fields...."
                className="min-h-[260px] w-full h-full bg-transparent outline-none border-none text-sm text-[#414042] placeholder:text-[#414042] resize-none overflow-hidden"
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
              <button className="bg-generator py-2 px-6 text-sm rounded-lg text-white font-primary flex justify-center items-center gap-2 whitespace-nowrap">
                <PenIcon className={`w-[22px] h-[22px] fill-white`} />
                Generate
              </button>
            </aside>
          </div>

          {/** Output */}
          <h2 className="text-[#414042] text-[20px] font-primary font-semibold">
            Output
          </h2>
          <div className=" flex flex-col items-center flex-grow border border-generator rounded-[5px] justify-center">
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

        <div className="col-span-2">
          <span
            className="flex items-center justify-start gap-2 text-[#414042] text-[16px] font-[400] rounded-[10px] p-2 text-center"
            style={{
              background: 'var(--generator-light-color)',
            }}
          >
            <SettingsIcon className={`w-[14px] h-[14px] stroke-[#414042]`} />
            Settings
          </span>

          <div className="mt-3">
            <div>
              <span className="flex items-center justify-between">
                Speed
                <label className="p-1 bg-slate-50 rounded-md border px-4 py-1 text-sm font-[200]">
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
                  '& .MuiSlider-thumb': { backgroundColor: '#C32782' }, // Thumb color
                  '& .MuiSlider-track': { backgroundColor: '#C32782' }, // Track (filled part)
                  '& .MuiSlider-rail': { backgroundColor: '#C3278233' }, // Rail (unfilled part)
                }}
              />
            </div>

            <div>
              <span className="flex items-center justify-between">
                Temperature
                <label className="p-1 bg-slate-50 rounded-md border px-4 py-1 text-sm font-[200]">
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
                  '& .MuiSlider-thumb': { backgroundColor: '#A077A8' }, // Thumb color
                  '& .MuiSlider-track': { backgroundColor: '#A077A8' }, // Track (filled part)
                  '& .MuiSlider-rail': { backgroundColor: '#A077A866' }, // Rail (unfilled part)
                }}
              />
            </div>

            <div>
              <span className="flex items-center justify-between">
                Rows
                <label className="p-1 bg-slate-50 rounded-md border px-4 py-1 text-sm font-[200]">
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
                  '& .MuiSlider-thumb': { backgroundColor: '#1E647F' }, // Thumb color
                  '& .MuiSlider-track': { backgroundColor: '#1E647F' }, // Track (filled part)
                  '& .MuiSlider-rail': { backgroundColor: '#1E647F66' }, // Rail (unfilled part)
                }}
              />
            </div>

            <div>
              <span className="flex items-center justify-between">
                Accuracy
                <label className="p-1 bg-slate-50 rounded-md border px-4 py-1 text-sm font-[200]">
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
                  '& .MuiSlider-thumb': { backgroundColor: '#59B1FE' }, // Thumb color
                  '& .MuiSlider-track': { backgroundColor: '#59B1FE' }, // Track (filled part)
                  '& .MuiSlider-rail': { backgroundColor: '#59B1FE33' }, // Rail (unfilled part)
                }}
              />
            </div>

            {/** Examples */}
            <div className="mt-4 border-t pt-2">
              <h3 className="text-md font-semibold text-gray-700">Examples</h3>
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
                    className="flex items-center gap-2 text-sm text-gray-700"
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
