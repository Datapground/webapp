import React, { CSSProperties } from 'react';
import Select, { GroupBase, components } from 'react-select';
import GeneratorIcon from './Icons/GeneratorIcon';
import ChevronDownIcon from './Icons/ChevronDownIcon';

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

// Dropdown component
const SelectOption = () => {
  // trying to update the generator color based on the selected model

  // here i have to implement the logic when i click select the different modal theme updated accordingly

  // const [selectedOption, setSelectedOption] = useState<OptionType | null>(
  //   groupedOptions[0].options[0] // Default selection
  // );

  // const handleChange = (option: OptionType | null) => {
  //   if (option) {
  //     setSelectedOption(option);
  //     console.log('Selected Value:', option.value);
  //   }
  // };

  return (
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
  );
};

export default SelectOption;
