import React from 'react';
import Select, {
  DropdownIndicatorProps,
  GroupBase,
  OptionProps,
  components,
} from 'react-select';
import ChevronDownIcon from '../Icons/ChevronDownIcon';
import { cn } from '../../utils/tailwindClassesMerge';

// Format group labels
const formatGroupLabel = (data: GroupBase<OptionType>) => (
  <div className="flex justify-between items-center">
    <span>{data.label}</span>
  </div>
);

// Custom Single Value Component
const customSingleValue = ({ data }: { data: OptionType }) => (
  <div className="flex items-center md:-mt-6 -mt-4 gap-2 text-predictor">
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
      className={`flex items-center gap-1 p-2 pl-4 cursor-pointer rounded-md transition-all
        ${isSelected ? 'bg-predictor text-white' : 'hover:bg-gray-100'}`}
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

type Props = {
  className?: string;
  placeholder?: string | '';
  options: GroupBase<OptionType>[];
};

const PredictorSelect: React.FC<Props> = ({
  className,
  placeholder,
  options,
}) => {
  return (
    <Select<OptionType, false, GroupBase<OptionType>>
      options={options}
      formatGroupLabel={formatGroupLabel}
      placeholder={placeholder}
      className={cn(
        (className = 'w-full lg:text-base md:text-sm text-xs rounded-[10px]'),
        className
      )}
      isSearchable={false}
      styles={{
        control: (base) => ({
          ...base,
          outline: 'none',
          border: '1px solid #E55057',
          boxShadow: 'none',
          borderRadius: '16px',
          cursor: 'pointer',
          backgroundColor: 'white',
          padding: 'lg:5px 1px',
          color: '#414042',
          ':hover': {
            border: '1px solid #E55057',
          },
        }),
        menu: (base) => ({
          ...base,
          borderRadius: '16px',
          overflow: 'hidden',
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

export default PredictorSelect;
