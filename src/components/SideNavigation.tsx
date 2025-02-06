import Lottie from 'lottie-react';
import React from 'react';
import logoAnimation from '../constants/LogoAnimation.json';
import { Link } from 'react-router-dom';
import PlaygroundIcon from './icons/PlaygroundIcon';

const SideNavigation: React.FC = () => {
  return (
    <nav className="w-64 h-full border border-[#C7D2D6] rounded-[40px] bg-side-navigation shadow-side-navigation">
      <div className="p-4">
        <Lottie
          animationData={logoAnimation}
          loop={true}
          className="h-[40px] w-[190px] mx-auto"
        />
      </div>

      <div className="pl-8 py-4 pr-0 space-y-3">
        <Link
          to={''}
          className="flex justify-start items-center gap-3 w-full text-sm text-[#414042] px-4"
        >
          <PlaygroundIcon className={'w-[16px] h-[16px] stroke-[#414042]'} />
          Playground
        </Link>
      </div>
    </nav>
  );
};

export default SideNavigation;
