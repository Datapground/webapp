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
  <div className="flex items-center md:-mt-6 -mt-5 my-auto gap-2 text-gray-600">
    {data.Icon && <data.Icon className="w-[16px] h-[16px] fill-gray-600" />}
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
      className={`flex items-center gap-1 lg:p-2 p-1.5 cursor-pointer lg:rounded-[8px] rounded-[5px] transition-all
        ${isSelected ? 'bg-default text-white' : 'hover:bg-gray-100'}`}
    >
      {data.Icon && (
        <data.Icon
          className={`w-[16px] h-[16px] fill-white
        ${isSelected ? 'fill-white' : 'fill-gray-500'}
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
    <ChevronDownIcon className="w-[16px] h-[16px] stroke-gray-500" />
  </components.DropdownIndicator>
);

type Props = {
  className?: string;
  placeholder?: string | '';
  options: GroupBase<OptionType>[];
};

const UserSelect: React.FC<Props> = ({ className, placeholder, options }) => {
  return (
    <Select<OptionType, false, GroupBase<OptionType>>
      options={options}
      formatGroupLabel={formatGroupLabel}
      placeholder={placeholder}
      className={cn(
        (className = 'w-full lg:text-base md:text-sm text-xs rounded-[8px]'),
        className
      )}
      isSearchable={false}
      styles={{
        control: (base) => ({
          ...base,
          outline: 'none',
          border: '1px solid #D1D5DB',
          boxShadow: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          backgroundColor: 'white',
          color: '#414042',
          ':hover': {
            border: '1px solid #9CA3AF',
          },
          height: '40px', // Set a fixed height
          minHeight: '25px',
        }),
        menu: (base) => ({
          ...base,
          borderRadius: '8px',
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

export default UserSelect;
