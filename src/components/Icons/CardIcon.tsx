/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface SvgProps {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
}

const CardIcon: React.FC<SvgProps> = ({
  color,
  width = '492',
  height = '338',
  className,
}) => {
  const uniqueId = React.useMemo(
    () => `card-icon-${Math.random().toString(36).substring(2, 15)}`,
    []
  );
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={className}
    >
      <g filter={`url(#filter0_dd_${uniqueId})`}>
        <g clipPath={`url(#clip0_${uniqueId})`}>
          <rect
            x="5"
            y="1"
            width="482"
            height="328"
            rx="30"
            fill={`url(#paint0_radial_${uniqueId})`}
          />
          <rect
            x="5"
            y="1"
            width="482"
            height="328"
            rx="30"
            fill={`url(#paint1_linear_${uniqueId})`}
          />
          <g filter={`url(#filter1_d_${uniqueId})`}>
            <path
              d="M330.025 -53.2204C345.448 -73.0573 371.89 -80.7072 395.522 -72.169L462.629 -47.9238C486.261 -39.3857 501.707 -16.6016 500.89 8.51225L498.568 79.8264C497.751 104.94 480.855 126.671 456.718 133.654L388.176 153.484C364.039 160.467 338.15 151.113 324.05 130.315L284.011 71.2564C269.911 50.4583 270.807 22.9464 286.23 3.1094L330.025 -53.2204Z"
              fill="white"
            />
          </g>
          <g filter={`url(#filter2_d_${uniqueId})`}>
            <path
              d="M342.517 -18.8485C357.94 -38.6855 384.382 -46.3354 408.014 -37.7972L439.681 -26.356C463.313 -17.8178 478.76 4.96627 477.942 30.0801L476.847 63.7331C476.029 88.8469 459.133 110.578 434.996 117.561L402.652 126.919C378.514 133.902 352.626 124.548 338.525 103.75L319.631 75.8804C305.531 55.0823 306.427 27.5703 321.85 7.73336L342.517 -18.8485Z"
              fill={`url(#paint2_linear_${uniqueId})`}
            />
          </g>
        </g>
        <rect
          x="5.5"
          y="1.5"
          width="481"
          height="327"
          rx="29.5"
          stroke="#E8E8E8"
        />
      </g>
      <defs>
        <filter
          id={`filter0_dd_${uniqueId}`}
          x="0"
          y="0"
          width="492"
          height="338"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result={`effect1_dropShadow_${uniqueId}`}
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result={`effect1_dropShadow_${uniqueId}`}
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result={`effect2_dropShadow_${uniqueId}`}
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2={`effect1_dropShadow_${uniqueId}`}
            result={`effect2_dropShadow_${uniqueId}`}
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2={`effect2_dropShadow_${uniqueId}`}
            result="shape"
          />
        </filter>
        <filter
          id={`filter1_d_${uniqueId}`}
          x="274.019"
          y="-75.624"
          width="226.902"
          height="235.396"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result={`effect1_dropShadow_${uniqueId}`}
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2={`effect1_dropShadow_${uniqueId}`}
            result="shape"
          />
        </filter>
        <filter
          id={`filter2_d_${uniqueId}`}
          x="281.639"
          y="-69.252"
          width="232.334"
          height="234.46"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.317647 0 0 0 0 0.513726 0 0 0 0 0.941176 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result={`effect1_dropShadow_${uniqueId}`}
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2={`effect1_dropShadow_${uniqueId}`}
            result="shape"
          />
        </filter>
        <radialGradient
          id={`paint0_radial_${uniqueId}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(520.296 -27.9412) rotate(144.615) scale(679.985 566.233)"
        >
          <stop stopColor={color} />
          <stop offset="0.517104" stopColor="white" />
        </radialGradient>
        <linearGradient
          id={`paint1_linear_${uniqueId}`}
          x1="246"
          y1="1"
          x2="246"
          y2="329"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="#F0F5FF" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${uniqueId}`}
          x1="320.603"
          y1="-80.073"
          x2="524.64"
          y2="271.381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <clipPath id={`clip0_${uniqueId}`}>
          <rect x="5" y="1" width="482" height="328" rx="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CardIcon;
