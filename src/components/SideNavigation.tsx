/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
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
];

const tools = [
  {
    path: '/generator',
    label: 'The Generator',
    bgClass: 'bg-generator-merlin',
    Icon: GeneratorIcon,
  },
  {
    path: '/predictor',
    label: 'The Predictor',
    bgClass: 'bg-predictor-main',
    Icon: PredictorIcon,
  },
  {
    path: '/extender',
    label: 'The Extender',
    bgClass: 'bg-extender-main',
    Icon: ExtenderIcon,
  },
];

const accounts = [
  { path: '/apikeys', label: 'API Keys', Icon: APIKeyIcon },
  { path: '/invites', label: 'Invites', Icon: InviteIcon },
  { path: '/usage', label: 'Usage', Icon: UsageIcon },
  { path: '/billings', label: 'Billings', Icon: BillingIcon },
];

const SideNavigation = () => {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    // Define colors separately for body and .vertical-rounded-tab elements
    const backgroundColors: Record<string, { body: string; tab: string }> = {
      '/generator': { body: '#C3278208', tab: '#FDF8FB' },
      '/predictor': { body: '#E6555D0D', tab: '#FDF6F6' },
      '/extender': { body: '#C3278208', tab: '#FDF8FB' },
    };
    const { body: bodyBg, tab: tabBg } = backgroundColors[pathname] || {
      body: '#ffffff',
      tab: '#ffffff',
    };
    // Change body background color
    document.body.style.backgroundColor = bodyBg;
    // Change background color of elements with the class .vertical-rounded-tab
    const elements = document.querySelectorAll('.vertical-rounded-tab');
    elements.forEach((el) => {
      (el as HTMLElement).style.backgroundColor = tabBg;
    });

    return () => {
      document.body.style.backgroundColor = ''; // Reset on unmount
      elements.forEach((el) => {
        (el as HTMLElement).style.backgroundColor = '';
      });
    };
  }, [pathname]);

  return (
    <nav
      className={`w-64 flex flex-col justify-between items-center rounded-[40px] bg-[#E3ECFF] pb-4 `}
    >
      <div className="w-full relative z-50">
        <div className="p-4">
          <Lottie
            animationData={logoAnimation}
            loop
            className="h-[40px] w-[190px] mx-auto"
          />
        </div>

        <div className="w-full pl-8 z-50">
          {navItems.map(({ path, label, Icon }, index) => {
            const isActive = pathname === path;
            return (
              <div key={path} className="relative">
                {/* Item Above */}
                {navItems.length - index >= 0 && (
                  <div className="absolute top-full w-full z-40"></div>
                )}

                <div
                  key={path}
                  className={`relative ${isActive ? 'ml-[-4px] my-[-24px] vertical-rounded-tab -z-40' : 'z-30'}`}
                >
                  <Link
                    to={path}
                    className={`flex items-center py-2 gap-3 my-[5px] rounded-l-[30px] w-full text-sm text-[#414042] px-4 ${
                      isActive
                        ? `bg-gradient-to-r from-default to bg-white text-white`
                        : ''
                    }`}
                  >
                    <Icon
                      className={`w-[16px] h-[16px] stroke-[#414042] ${isActive ? 'stroke-white' : ''}`}
                    />
                    {label}
                  </Link>
                </div>

                {index < navItems.length - 1 && (
                  <div className="absolute top-full w-full z-40"></div>
                )}
              </div>
            );
          })}

          {/* Divider */}
          <div className="line h-[1px] w-[80%] bg-gradient-to-r from-blue-600 to-transparent my-4"></div>
          {tools.map(({ path, label, bgClass, Icon }) => (
            <div
              key={path}
              className={`relative ${pathname === path ? 'ml-[-4px] my-[-24px] vertical-rounded-tab -z-50' : 'z-30'}`}
            >
              <Link
                to={path}
                className={`flex items-center py-2 gap-3 my-[5px] rounded-l-[30px] w-full text-sm text-[#414042] px-4 ${
                  pathname === path ? `${bgClass} text-white` : ''
                }`}
              >
                <Icon
                  className={`w-[16px] h-[16px] stroke-[#414042] ${pathname === path ? 'stroke-white' : ''}`}
                />
                {label}
              </Link>
            </div>
          ))}

          {/* Divider */}
          <div className="line h-[1px] w-[80%] bg-gradient-to-r from-blue-600 to-transparent my-4"></div>
          {/* Accounts Items */}
          <p className="text-xs text-[#414042] py-3 -ml-4">Accounts</p>
          {accounts.map(({ path, label, Icon }, index) => {
            const isActive = pathname === path;
            return (
              <div key={path} className="relative">
                {/* Item Above */}
                {navItems.length - index >= 0 && (
                  <div className="absolute top-full w-full z-40"></div>
                )}

                <div
                  key={path}
                  className={`relative ${isActive ? 'ml-[-4px] my-[-24px] vertical-rounded-tab -z-50' : 'z-30'}`}
                >
                  <Link
                    to={path}
                    className={`flex items-center py-2 gap-3 my-[5px] rounded-l-[30px] w-full text-sm text-[#414042] px-4 ${
                      isActive
                        ? `bg-gradient-to-r from-default to bg-white text-white`
                        : ''
                    }`}
                  >
                    <Icon
                      className={`w-[16px] h-[16px] stroke-[#414042] ${isActive ? 'stroke-white' : ''}`}
                    />
                    {label}
                  </Link>
                </div>

                {index < navItems.length - 1 && (
                  <div className="absolute top-full w-full z-40"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Settings */}
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
