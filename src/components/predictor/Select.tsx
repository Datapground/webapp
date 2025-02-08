import React, { CSSProperties, useEffect, useState } from 'react';
import Select, {
  DropdownIndicatorProps,
  GroupBase,
  OptionProps,
  components,
} from 'react-select';
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
      { value: 'elixir', label: 'Elixir Predictor', Icon: ElixirIcon },
      { value: 'gold', label: 'Gold Extender', Icon: GoldIcon },
      { value: 'oracle', label: 'Oracle Extender', Icon: OracleIcon },
    ],
  },
];

// Custom Single Value Component (Centered)
const customSingleValue = ({
  data,
  selectProps,
}: {
  data: OptionType;
  selectProps: { iconColor: string; bgColor?: string }; // Allow bgColor
}) => (
  <div
    className="flex items-center text-center -mt-5 gap-2"
    style={{ color: selectProps.iconColor }}
  >
    {data.Icon && (
      <data.Icon
        className="w-[16px] h-[16px]"
        style={{ fill: selectProps.iconColor }}
      />
    )}
    {data.label}
  </div>
);

// Custom Option Component
const customOption = (
  props: OptionProps<OptionType, false> & { iconColor: string; bgColor: string }
) => {
  const { data, innerRef, innerProps, isSelected } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className={`flex justify-start items-center gap-2 pl-4 p-2 cursor-pointer ${
        isSelected ? 'text-white' : 'hover:bg-gray-100'
      }`}
      style={{
        backgroundColor: isSelected ? props.bgColor : 'transparent',
      }}
    >
      {data.Icon && (
        <data.Icon
          className="w-[16px] h-[16px]"
          style={{ fill: isSelected ? 'white' : props.iconColor }}
        />
      )}
      {data.label}
    </div>
  );
};

// Custom Dropdown Indicator (Pink Color)
const customDropdownIndicator = (
  props: DropdownIndicatorProps<OptionType, false> & { chevronColor: string }
) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronDownIcon
        className="w-[16px] h-[16px]"
        style={{ stroke: props.chevronColor }}
      />
    </components.DropdownIndicator>
  );
};

const PredictorSelect = () => {
  const [bgColor, setBgColor] = useState('#C32782');
  const [borderColor, setBorderColor] = useState('#C327824D');
  const [chevronColor, setChevronColor] = useState('#C32782');
  const [iconColor, setIconColor] = useState('#C32782');
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    groupedOptions[0].options[0]
  );

  const handleChange = (option: OptionType | null) => {
    if (option) {
      setSelectedOption(option);
    }
  };

  useEffect(() => {
    const colors = {
      merlin: {
        bg: '#C32782',
        border: '#C327824D',
        chevron: '#C32782',
        icon: '#C32782',
      },
      elixir: {
        bg: '#A077A8',
        border: '#A077A84D',
        chevron: '#A077A8',
        icon: '#A077A8',
      },
      gold: {
        bg: '#1E647F',
        border: '#1E647F4D',
        chevron: '#1E647F',
        icon: '#1E647F',
      },
      oracle: {
        bg: '#59B1FE',
        border: '#59B1FE4D',
        chevron: '#59B1FE',
        icon: '#59B1FE',
      },
    };

    const selected = colors[selectedOption?.value || 'merlin'];

    setBgColor(selected.bg);
    setBorderColor(selected.border);
    setChevronColor(selected.chevron);
    setIconColor(selected.icon);
  }, [selectedOption]);

  return (
    <div
      className=""
      style={{
        backgroundColor: 'transparent',
        border: `1px solid ${borderColor}`,
        borderRadius: '10px',
      }}
    >
      <Select<OptionType, false, GroupBase<OptionType>>
        options={groupedOptions}
        formatGroupLabel={formatGroupLabel}
        defaultValue={groupedOptions[0].options[0]}
        placeholder="Select a Model..."
        onChange={handleChange}
        className="w-[270px] text-[#414042] text-sm rounded-[10px]"
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
          }),
          menu: (base) => ({
            ...base,
            borderRadius: '10px',
            overflow: 'hidden',
            cursor: 'pointer',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? bgColor : 'transparent',
            color: state.isSelected ? 'white' : '#414042',
            cursor: 'pointer',
          }),
        }}
        components={{
          Option: (props) => customOption({ ...props, iconColor, bgColor }),
          SingleValue: (props) =>
            customSingleValue({
              data: props.data,
              selectProps: { ...props.selectProps, iconColor, bgColor },
            }),
          DropdownIndicator: (props) =>
            customDropdownIndicator({ ...props, chevronColor }),
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default PredictorSelect;
