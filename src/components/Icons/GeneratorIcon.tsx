import React from 'react';

const GeneratorIcon = ({ className = '' }) => {
  return (
    <img
      src="/generator.svg"
      alt="Generator Icon"
      className={`w-[24px] h-[24px] stroke-[#414042] ${className}`}
    />
  );
};

export default GeneratorIcon;
