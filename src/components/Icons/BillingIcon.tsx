import React from 'react';

const BillingIcon = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.333 3.33337H2.66634C1.92996 3.33337 1.33301 3.93033 1.33301 4.66671V11.3334C1.33301 12.0698 1.92996 12.6667 2.66634 12.6667H13.333C14.0694 12.6667 14.6663 12.0698 14.6663 11.3334V4.66671C14.6663 3.93033 14.0694 3.33337 13.333 3.33337Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33301 6.66663H14.6663"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BillingIcon;
