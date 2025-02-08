import React from 'react';

const ExtenderImg = ({ className = '' }) => {
  return (
    <img src="/extender.svg" alt="Extender Img" className={`${className}`} />
  );
};

export default ExtenderImg;
