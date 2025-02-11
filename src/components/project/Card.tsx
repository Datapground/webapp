import React from 'react';
import DeleteIcon from '../Icons/DeleteIcon';
import CardIcon from '../Icons/CardIcon';

type Props = {
  model: string;
  title: string;
  description: string;
  modelIcon: React.ReactNode;
  onUseModel: () => void;
  onDeleteModel: () => void;
  primaryColor: string;
  secondaryColor: string;
};

const ProjectCard: React.FC<Props> = ({
  model,
  title,
  description,
  modelIcon,
  onUseModel,
  onDeleteModel,
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
      <div className="w-full flex justify-between items-center gap-4 mt-3">
        <button
          onClick={onUseModel}
          className={`capitalize font-primary rounded-lg py-1 px-3 w-full sm:text-sm text-xs`}
          style={{
            border: `1px solid ${primaryColor}`,
            color: primaryColor,
          }}
        >
          Use Model
        </button>
        <button
          onClick={onDeleteModel}
          className={`rounded-full sm:p-2 p-1.5`}
          style={{
            backgroundColor: secondaryColor,
          }}
        >
          <DeleteIcon className="w-[20px] h-[20px] fill-white" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
