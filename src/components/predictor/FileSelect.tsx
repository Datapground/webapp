import React, { CSSProperties } from 'react';
import Select, {
  DropdownIndicatorProps,
  GroupBase,
  OptionProps,
  components,
} from 'react-select';
import ChevronDownIcon from '../Icons/ChevronDownIcon';

// Define types for options
type OptionType = {
  value: string;
  label: string;
  Icon?: React.ElementType;
};

// Group label styling
const groupStyles: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

// Format group labels
const formatGroupLabel = (data: GroupBase<OptionType>) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
  </div>
);

// Predefined grouped options
const groupedOptions: GroupBase<OptionType>[] = [
  {
    label: 'formats',
    options: [
      { value: '.csv', label: '.csv' },
      { value: '.xlsm', label: '.xlsm' },
      { value: '.json', label: '.json' },
    ],
  },
];

// Custom Single Value Component
const customSingleValue = ({ data }: { data: OptionType }) => (
  <div className="flex items-center -mt-5 gap-2 text-predictor">
    {data.Icon && <data.Icon className="w-[16px] h-[16px] fill-predictor" />}
    {data.label}
  </div>
);

// Custom Option Component
const customOption = (props: OptionProps<OptionType, false>) => {
  const { data, innerRef, innerProps, isSelected } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={`flex items-center gap-2 pl-4 p-2 cursor-pointer ${
        isSelected ? 'bg-[#E55057] text-white' : 'hover:bg-gray-100'
      }`}
    >
      {data.Icon && (
        <data.Icon
          className={`w-[16px] h-[16px] fill-white
        ${isSelected ? 'fill-white' : 'fill-predictor'}
        `}
        />
      )}
      {data.label}
    </div>
  );
};

// Custom Dropdown Indicator
const customDropdownIndicator = (
  props: DropdownIndicatorProps<OptionType, false>
) => (
  <components.DropdownIndicator {...props}>
    <ChevronDownIcon className="w-[16px] h-[16px] stroke-predictor" />
  </components.DropdownIndicator>
);

const PredictorFileSelect = () => {
  return (
    <div className="rounded-[15px] bg-white text-[#414042] border-[#E55057] border">
      <Select<OptionType, false, GroupBase<OptionType>>
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        defaultValue={groupedOptions[0].options[0]}
        className="min-w-[270px] text-[#414042] text-sm rounded-[10px]"
        isSearchable={false}
        styles={{
          control: (base) => ({
            ...base,
            outline: 'none',
            border: 'none',
            boxShadow: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            padding: '5px',
            color: 'white',
          }),
          menu: (base) => ({
            ...base,
            borderRadius: '10px',
            overflow: 'hidden',
            cursor: 'pointer',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#C32782' : 'transparent',
            color: state.isSelected ? 'white' : '#C32782',
            cursor: 'pointer',
          }),
        }}
        components={{
          SingleValue: customSingleValue,
          Option: customOption,
          DropdownIndicator: customDropdownIndicator,
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default PredictorFileSelect;
