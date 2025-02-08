import React from 'react';
import BookIcon from './Icons/BookIcon';
import QuestionIcon from './Icons/QuestionIcon';
import BellIcon from './Icons/BellIcon';
import ChevronDownIcon from './Icons/ChevronDownIcon';
import { useLocation } from 'react-router-dom';
import PredictorImg from './Icons/PredictorImg';
import ExtenderImg from './Icons/ExtenderImg';
import GeneratorImg from './Icons/GeneratorImg';

function TopBar() {
  const path = useLocation().pathname;

  const TopBarHeading =
    path.split('/')[1].charAt(0).toUpperCase() + path.split('/')[1].slice(1);

  const TopBarIcon =
    path === '/generator'
      ? GeneratorImg
      : path === '/predictor'
        ? PredictorImg
        : ExtenderImg;

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-3">
        <TopBarIcon className={`w-[30px] h-[30px] stroke-[#414042]`} />
        <h2 className="text-[36px] font-600 text-[#414042]">
          {'The ' + TopBarHeading}
        </h2>
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

        <span className="flex flex-grow items-center gap-2 p-1 rounded-full bg-white shadow-md align-center ">
          <img
            src="/ME_Profile.jpeg "
            className="w-[24px] h-[24px] rounded-full"
          />
          <ChevronDownIcon className={`w-[17px] h-[17px] stroke-[#414042]`} />
        </span>
      </div>
    </div>
  );
}

export default TopBar;
