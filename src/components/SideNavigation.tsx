import React from 'react';
import Lottie from 'lottie-react';
import logoAnimation from '../constants/LogoAnimation.json';
import { Link, useLocation } from 'react-router-dom';
import ActivityIcon from './Icons/ActivityIcon';
import InviteIcon from './Icons/InviteIcon';
import GeneratorIcon from './Icons/GeneratorIcon';
import ProjectsIcon from './Icons/ProjectsIcon';
import BluePrintIcon from './Icons/BluePrintIcon';
import WorkFlowsIcon from './Icons/WorkFlowsIcon';
import Connections from './Icons/Connections';
import PredictorIcon from './Icons/PredictorIcon';
import ExtenderIcon from './Icons/ExtenderIcon';
import APIKeyIcon from './Icons/APIKeyIcon';
import UsageIcon from './Icons/UsageIcon';
import BillingIcon from './Icons/BillingIcon';
import SettingsIcon from './Icons/SettingsIcon';
import PlaygroundIcon from './Icons/PlaygroundIcon';

const navItems = [
  { path: '/playground', label: 'Playground', Icon: PlaygroundIcon },
  { path: '/activity', label: 'Activity', Icon: ActivityIcon },
  { path: '/projects', label: 'Projects', Icon: ProjectsIcon },
  { path: '/blueprints', label: 'Blueprints', Icon: BluePrintIcon },
  { path: '/workflows', label: 'Workflows', Icon: WorkFlowsIcon },
  { path: '/connections', label: 'Connections', Icon: Connections },
  { path: '/generator', label: 'The Generator', Icon: GeneratorIcon },
  { path: '/predictor', label: 'The Predictor', Icon: PredictorIcon },
  { path: '/extender', label: 'The Extender', Icon: ExtenderIcon },
  { path: '/apikeys', label: 'API Keys', Icon: APIKeyIcon },
  { path: '/invites', label: 'Invites', Icon: InviteIcon },
  { path: '/usage', label: 'Usage', Icon: UsageIcon },
  { path: '/billings', label: 'Billings', Icon: BillingIcon },
];

const SideNavigation = () => {
  const location = useLocation();

  return (
    <nav className="w-64 h-full rounded-[40px] border-none bg-[#E3ECFF] pb-4 ">
      {/* Logo */}
      <div className="p-4">
        <Lottie
          animationData={logoAnimation}
          loop
          className="h-[40px] w-[190px] mx-auto"
        />
      </div>
      {/* NavItems */}
      <div className=""> </div>
      <div className="pl-8">
        {navItems.map(({ path, label, Icon }) => {
          const isActive = location.pathname === path;
          return (
            <div
              key={path}
              className={
                isActive ? 'ml-[-4px] my-[-22px] vertical-rounded-tab' : ''
              }
            >
              <Link
                to={path}
                className={`flex items-center py-2 gap-3 my-[5px] rounded-l-[30px] w-full text-sm text-[#414042] px-4 ${
                  isActive ? 'bg-gradient-to-r from-pink-500 to bg-white' : ''
                }`}
              >
                <Icon className="w-[16px] h-[16px] stroke-[#414042]" />
                {label}
              </Link>
            </div>
          );
        })}
        {/* <div className="line h-[1px] w-[80%] bg-gradient-to-r from-blue-600 to-transparent my-2"></div> */}
      </div>
      <div className="mt-8 mx-auto bg-white text-center text-sm rounded-[30px] w-[40%]">
        <button className="py-2 px-4 flex items-center gap-[5px] text-center text-[#414042]">
          <SettingsIcon className="w-[16px] h-[16px] stroke-[#414042]" />{' '}
          Settings
        </button>
      </div>
    </nav>
  );
};

export default SideNavigation;
