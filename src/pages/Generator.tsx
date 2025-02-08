import React, { CSSProperties, useState } from 'react';
// import SelectOption from '../components/SelectOption';
import TextRemove from '../components/Icons/TextRemove';
import LogoIcon from '../components/Icons/LogoIcon';
import PenIcon from '../components/Icons/PenIcon';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import SettingsIcon from '../components/Icons/SettingsIcon';
import Select, { GroupBase, components } from 'react-select';
import ChevronDownIcon from '../components/Icons/ChevronDownIcon';
import GeneratorIcon from '../components/Icons/GeneratorIcon';

// Define types for options
type OptionType = {
  value: string;
  label: string;
  Icon?: React.ElementType;
};

// Styles
const groupStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

// Function to format group labels with count badge
const formatGroupLabel = (data: GroupBase<OptionType>) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
  </div>
);

// Sample grouped data (Customize this)
const groupedOptions: GroupBase<OptionType>[] = [
  {
    label: 'Models',
    options: [
      { value: 'merlin', label: 'Merlin Generator', Icon: GeneratorIcon },
      { value: 'elixir', label: 'Elixir Predictor', Icon: GeneratorIcon },
      { value: 'gold', label: 'Gold Extender', Icon: GeneratorIcon },
      { value: 'oracle', label: 'Oracle Extender', Icon: GeneratorIcon },
    ],
  },
];

// Custom Single Value Component (Centered)
const customSingleValue = ({ data }: { data: OptionType }) => (
  <div className="flex items-center text-center -mt-5 gap-2 text-[#414042]">
    {data.Icon && <data.Icon className="w-[16px] h-[16px] stroke-generator" />}
    {data.label}
  </div>
);

// Custom Option Component
const customOption = (props: any) => {
  const { data, innerRef, innerProps, isSelected } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={`flex justify-start items-center gap-2 pl-4 p-2 cursor-pointer ${
        isSelected ? 'bg-generator text-white' : 'hover:bg-gray-100'
      }`}
    >
      {data.Icon && (
        <data.Icon
          className={`w-[16px] h-[16px] ${isSelected ? 'stroke-white' : 'stroke-generator'}`}
        />
      )}
      {data.label}
    </div>
  );
};

// Custom Dropdown Indicator (Pink Color)
const customDropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon className={`w-[16px] h-[16px] stroke-generator`} />
    </components.DropdownIndicator>
  );
};

const Generator: React.FC = () => {
  const [speed, setSpeed] = useState(50);
  const [temperature, setTemperature] = useState(40);
  const [rows, setRows] = useState(70);
  const [accuracy, setAccuracy] = useState(30);

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
    <div>
      {/** Generator Top */}
      <div className="flex justify-between items-center w-full my-3">
        <div className="flex items-center gap-3">
          <p className="text-sm text-[#414042]">Model</p>

          <div className="flex w-[300px] ">
            {/* <SelectOption /> */}
            <Select<OptionType, false, GroupBase<OptionType>>
              options={groupedOptions}
              formatGroupLabel={formatGroupLabel}
              defaultValue={groupedOptions[0].options[0]}
              placeholder="Select a Model..."
              // onChange={handleChange}
              className={`w-[300px] text-[#414042] text-sm border border-generator rounded-[10px]
  `}
              isSearchable={false}
              styles={{
                control: (base) => ({
                  ...base,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  outline: 'none',
                  border: 'none',
                  boxShadow: base.isFocused ? '0 0 0 2px #C32782' : 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  padding: '5px 10px',
                }),
                menu: (base) => ({
                  ...base,
                  zIndex: 100,
                  borderRadius: '10px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }),
                option: (provided, state) => ({
                  ...provided,
                  backgroundColor: state.isSelected ? 'pink' : 'transparent',
                  color: state.isSelected ? 'white' : '#414042',
                  cursor: 'pointer',
                }),
              }}
              components={{
                Option: customOption,
                SingleValue: customSingleValue,
                DropdownIndicator: customDropdownIndicator,
                IndicatorSeparator: () => null,
              }}
            />
          </div>
        </div>

        {/** Taublar Data */}
        <div className="flex items-center gap-3">
          <span>
            <p className="py-2 px-3 border border-generator  text-generator text-md">
              Taublar Data
            </p>
          </span>
          <span className="border border-generator rounded-[10px]  py-2 ">
            <input
              type="text"
              placeholder="input date here"
              className="bg-transparent outline-none text-[#414042] px-2"
            />
          </span>
        </div>
      </div>

      {/**Generator Content */}
      <div className=" flex justify-between gap-5 items-center">
        {/** Generator Main */}
        <div className="min-h-screen flex flex-col gap-3 w-full">
          {/** Input */}
          <div className=" flex flex-col flex-grow border border-generator rounded-[5px] p-5 relative">
            <div className="flex items-start w-full">
              <textarea
                id="text"
                name="text"
                cols={10}
                rows={3}
                placeholder="Write an explanation about the topic you want to generate data about and its fields...."
                className="w-full bg-transparent outline-none text-[#414042] text-[20px] font-[400] scrollbar-hide resize-none overflow-hidden"
              />
              <TextRemove className={`w-[30px] h-[30px] stroke-generator`} />
            </div>
            <button className="flex gap-1 absolute right-5 bottom-5 items-center w-[150px] bg-generator rounded-md px-5 p-2 text-center text-[#FFFFFF] text-[18px] font-[600]">
              <PenIcon className={`w-[22px] h-[22px] stroke-white`} />
              Generate
            </button>
          </div>

          {/** Output */}
          <h2 className="text-[#414042] text-[26px] font-[700]">Output</h2>
          <div className=" flex flex-col items-center flex-grow border border-generator rounded-[5px] justify-center">
            {/** if no result  */} <LogoIcon />
            <h3 className="text-[#414042] text-[20px] font-[600]">
              Not Result Yet
            </h3>
            <p className="text-[#414042] text-[a8px] font-[400]">
              The Generation is being performed
            </p>
          </div>
        </div>

        {/** Settings Side */}
        <div className="min-h-screen w-[300px] ">
          <span className="flex items-center justify-start gap-2 text-[#414042] text-[16px] font-[400] bg-generatorLight rounded-[10px] p-2 text-center">
            <SettingsIcon className={`w-[14px] h-[14px] stroke-[#414042]`} />
            Settings
          </span>

          {/** Settings */}
          <div className="mt-3">
            <Box sx={{ width: 300, textAlign: 'center' }}>
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
            </Box>

            <Box sx={{ width: 300 }}>
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
            </Box>

            <Box sx={{ width: 300, textAlign: 'center' }}>
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
            </Box>

            <Box sx={{ width: 300, textAlign: 'center' }}>
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
            </Box>

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
    </div>
  );
};

export default Generator;
