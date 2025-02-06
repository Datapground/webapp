import React from 'react';

const UsageIcon = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 2V14H14" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12.667 6L9.33366 9.33333L6.66699 6.66667L4.66699 8.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UsageIcon;
