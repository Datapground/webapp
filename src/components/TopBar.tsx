import React from 'react';
import GeneratorIcon from './Icons/GeneratorIcon';
import BookIcon from './Icons/BookIcon';
import QuestionIcon from './Icons/QuestionIcon';
import BellIcon from './Icons/BellIcon';
import ChevronDownIcon from './Icons/ChevronDownIcon';
import { useLocation } from 'react-router-dom';
import PredictorIcon from './Icons/PredictorIcon';
import ExtenderIcon from './Icons/ExtenderIcon';

function TopBar() {
  const path = useLocation().pathname;

  const TopBarHeading =
    path === '/generator'
      ? 'The Generator'
      : path === '/predictor'
        ? 'The Predictor'
        : 'The Extender';

  const TopBarIcon =
    path === '/generator'
      ? GeneratorIcon
      : path === '/predictor'
        ? PredictorIcon
        : ExtenderIcon;

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-3">
        <TopBarIcon className={`w-[30px] h-[30px] stroke-[#414042]`} />
        <h2 className="text-[36px] font-600 text-[#414042]">{TopBarHeading}</h2>
      </div>

      <div className="flex justify-between gap-2 items-center">
        <span className="p-2 rounded-full bg-white shadow-md align-center m-auto">
          <BookIcon className={`w-[17px] h-[17px] stroke-[#414042] `} />
        </span>
        <span className="p-2 rounded-full bg-white shadow-md align-center m-auto">
          <QuestionIcon className={`w-[17px] h-[17px] stroke-[#414042]`} />
        </span>
        <span className="p-3 rounded-full bg-white shadow-md align-center m-auto">
          <BellIcon className={`w-[17px] h-[17px] stroke-[#414042]`} />
        </span>

        <span className="flex flex-grow items-center gap-2 p-3 rounded-full bg-white shadow-md align-center ">
          <img src="/LogoIcon.svg " className="w-[17px] h-[17px]" />
          <ChevronDownIcon className={`w-[17px] h-[17px] stroke-[#414042]`} />
        </span>
      </div>
    </div>
  );
}

export default TopBar;
