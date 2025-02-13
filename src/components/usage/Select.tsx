import React from 'react';
import Select from 'react-select';
import { cn } from '../../utils/tailwindClassesMerge';

// Define the option type
type OptionType = {
  value: string;
  label: string;
};

type Props = {
  className?: string;
  placeholder?: string;
  options: OptionType[];
};

const UsageSelect: React.FC<Props> = ({ className, placeholder, options }) => {
  return (
    <Select<OptionType>
      options={options}
      placeholder={placeholder}
      className={cn('w-full', className)}
      isSearchable={false}
      styles={{
        control: (base) => ({
          ...base,
          outline: 'none',
          border: '1px solid #E5E5E5',
          boxShadow: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          backgroundColor: 'white',
          color: '#414042',
          ':hover': {
            border: '1px solid #E5E5E5',
          },
          fontWeight: 300,
          height: '40px',
          fontSize: '14px',
        }),
        menu: (base) => ({
          ...base,
          borderRadius: '20px',
          overflow: 'hidden',
          cursor: 'pointer',
          fontSize: '14px',
        }),
        placeholder: (base) => ({
          ...base,
          color: '#9CA4B0', // Set your desired placeholder color here
          fontWeight: 300,
        }),
      }}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default UsageSelect;
