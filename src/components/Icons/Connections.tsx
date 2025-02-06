import React from 'react';

const Connections = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 4H14" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M2 8H12C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12H9.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6663 10.6667L9.33301 12L10.6663 13.3334"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 12H6.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default Connections;
