import React, { CSSProperties, useEffect, useState } from 'react';
import Select, {
  DropdownIndicatorProps,
  GroupBase,
  OptionProps,
  components,
} from 'react-select';
import { useNavigate, useLocation } from 'react-router-dom';

import ChevronDownIcon from '../Icons/ChevronDownIcon';
import GeneratorIcon from '../Icons/GeneratorIcon';
import ElixirIcon from '../Icons/ElixirIcon';
import GoldIcon from '../Icons/GoldIcon';
import OracleIcon from '../Icons/OracleIcon';

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
    label: 'Models',
    options: [
      { value: 'merlin', label: 'Merlin Generator', Icon: GeneratorIcon },
      { value: 'elixir', label: 'Elixir Generator', Icon: ElixirIcon },
      { value: 'gold', label: 'Gold Generator', Icon: GoldIcon },
      { value: 'oracle', label: 'Oracle Generator', Icon: OracleIcon },
    ],
  },
];

// Custom Single Value Component
const customSingleValue = ({ data }: { data: OptionType }) => (
  <div
    className="flex items-center -mt-5 gap-2"
    style={{
      color: 'var(--generator-color)',
    }}
  >
    {data.Icon && (
      <data.Icon
        className="w-[16px] h-[16px]"
        style={{
          fill: 'var(--generator-color)',
        }}
      />
    )}
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
      className={`flex items-center gap-2 p-2 pl-4 cursor-pointer rounded-md transition-all`}
      style={{
        background: isSelected
          ? 'var(--generator-color)'
          : 'rgba(243 244 246, 0.1)',
        color: isSelected ? 'white' : '',
      }}
    >
      {data.Icon && (
        <data.Icon
          className={`w-4 h-4`}
          style={{
            fill: isSelected ? 'white' : 'var(--generator-color)',
          }}
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
    <ChevronDownIcon
      className="w-[16px] h-[16px]"
      style={{
        stroke: 'var(--generator-color)',
      }}
    />
  </components.DropdownIndicator>
);

const GeneratorSelect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  // Extract "model" query parameter from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const model = queryParams.get('model');

    // Find the matching option
    const foundOption =
      groupedOptions[0].options.find((opt) => opt.value === model) || null;

    setSelectedOption(foundOption);
  }, [location.search]);

  return (
    <Select
      options={groupedOptions}
      formatGroupLabel={formatGroupLabel}
      placeholder="Select a model"
      className="w-[270px] text-sm rounded-[10px]"
      isSearchable={false}
      value={selectedOption} // Set default selected value
      onChange={(e) => {
        navigate(`/generator?model=${e?.value}`);
      }}
      styles={{
        control: (base) => ({
          ...base,
          outline: 'none',
          border: '1px solid var(--generator-color)',
          boxShadow: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          padding: '5px',
          color: 'white',
          ':hover': {
            border: '1px solid var(--generator-color)',
          },
        }),
        menu: (base) => ({
          ...base,
          borderRadius: '10px',
          overflow: 'hidden',
          cursor: 'pointer',
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected
            ? 'var(--generator-color)'
            : 'transparent',
          color: state.isSelected ? 'white' : 'var(--generator-color)',
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
  );
};

export default GeneratorSelect;
