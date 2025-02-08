import React from 'react';

const DeleteIcon = (props) => {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_451_7547"
        // style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="28"
      >
        <path
          d="M4.625 5.25098V26.501H23.375V5.25098H4.625Z"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 11.501V19.626M16.5 11.501V19.626M1.5 5.25098H26.5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 5.25098L11.0556 1.50098H16.9856L19 5.25098H9Z"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_451_7547)">
        <path d="M-1 -1H29V29H-1V-1Z" fill="#850006" />
      </g>
    </svg>
  );
};

export default DeleteIcon;
