import React from 'react';

const GeneratorImg = ({ className = '' }) => {
  return (
    <img src="/generator.svg" alt="Generator Img" className={` ${className}`} />
  );
};

export default GeneratorImg; // Named exports
