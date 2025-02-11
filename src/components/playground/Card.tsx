import React from 'react';
import CardIcon from '../Icons/CardIcon';
import RightArrowIcon from '../Icons/RightArrowIcon';

type Props = {
  model: string;
  title: string;
  description: string;
  modelIcon: React.ReactNode;
  openModel: () => void;
  primaryColor: string;
  secondaryColor: string;
};

const PlayGroundCard: React.FC<Props> = ({
  model,
  title,
  description,
  modelIcon,
  openModel,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <div className="relative w-full rounded-[30px] overflow-hidden p-6 flex flex-col justify-center items-start">
      {/* Background Card Icon */}
      <CardIcon
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-[-1]"
        color={primaryColor}
      />

      {/* Content */}
      <div className="w-full flex justify-between items-center">
        <img
          src="/logo-icon-transparent.png"
          alt="logo"
          className="pointer-events-none w-[52px] h-[38px]"
        />
        {modelIcon}
      </div>
      <button
        disabled
        className="border-b-2 border-[#5183F0] bg-card capitalize font-primary sm:px-3 px-2 sm:py-1.5 py-1 rounded-lg text-black text-xs mt-3"
      >
        {model}
      </button>
      <h2 className="font-primary mt-4 sm:text-base text-sm">{title}</h2>
      <p className="font-primary sm:text-sm text-xs font-light mt-1">
        {description?.length > 130
          ? `${description?.slice(0, 127)}...`
          : description}
      </p>
      <div className="w-full">
        <aside className="flex justify-end">
          <button
            onClick={openModel}
            className={`rounded-full p-3 `}
            style={{
              backgroundColor: secondaryColor,
            }}
          >
            <RightArrowIcon className="w-[16px] h-[16px] stroke-white" />
          </button>
        </aside>
      </div>
    </div>
  );
};

export default PlayGroundCard;
