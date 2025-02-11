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
      <div className="w-full flex justify-between items-center mb-3">
        <img
          src="/logo-icon-transparent.png"
          alt="logo"
          className="pointer-events-none w-[52px] h-[38px]"
        />
        {modelIcon}
      </div>
      {model && (
        <button
          disabled
          className="border-b-2 border-[#5183F0] bg-card capitalize font-primary px-3 py-1.5 rounded-lg text-black text-xs "
        >
          {model}
        </button>
      )}

      <h2 className="font-primary mt-4">{title}</h2>
      <p className="font-primary text-sm font-light mt-1">{description}</p>
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
