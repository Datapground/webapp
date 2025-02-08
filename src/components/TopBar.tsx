/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from 'react';
import BookIcon from './Icons/BookIcon';
import QuestionIcon from './Icons/QuestionIcon';
import BellIcon from './Icons/BellIcon';
import ChevronDownIcon from './Icons/ChevronDownIcon';
import { cn } from '../utils/tailwindClassesMerge';

type Props = {
  containerClassName?: string;
  children?: ReactNode;
};

const TopBar: React.FC<Props> = ({ children, containerClassName }) => {
  return (
    <nav
      className={cn('flex justify-end items-center mb-4', containerClassName)}
    >
      {children}

      <div className="sm:flex hidden justify-between gap-3 items-center">
        <button className="p-3 rounded-full bg-white shadow-nav-icon">
          <BookIcon className={`w-[17px] h-[17px] stroke-[#414042] `} />
        </button>
        <button className="p-3 rounded-full bg-white shadow-nav-icon">
          <QuestionIcon className={`w-[17px] h-[17px] stroke-[#414042]`} />
        </button>
        <button className="p-4 rounded-full bg-white shadow-nav-icon">
          <BellIcon className={`w-[17px] h-[17px] stroke-[#414042]`} />
        </button>

        <button className="flex justify-center items-center gap-2 p-1 rounded-full bg-white shadow-nav-icon">
          <img
            src="https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA="
            className="w-[32px] h-[32px] rounded-full overflow-hidden object-cover"
          />
          <ChevronDownIcon
            className={`w-[17px] h-[17px] stroke-[#414042] mr-1`}
          />
        </button>
      </div>
    </nav>
  );
};

export default TopBar;
