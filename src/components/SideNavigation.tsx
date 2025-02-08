import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import logoAnimation from '../constants/LogoAnimation.json';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
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
  const [searchParams] = useSearchParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const model = searchParams.get('model');

  useEffect(() => {
    // Define background colors for body and tab
    const backgroundColors: Record<string, { body: string; tab: string }> = {
      '/generator': {
        body:
          model === 'elixir'
            ? '#A077A80D'
            : model === 'gold'
              ? '#1E647F0D'
              : model === 'oracle'
                ? '#59B1FE0D'
                : '#C3278208', // Default merlin color
        tab:
          model === 'elixir'
            ? '#FAFAFD'
            : model === 'gold'
              ? '#F9FAFC'
              : model === 'oracle'
                ? '#FAFAFF'
                : '#FDF8FB', // Default merlin color
      },
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

    // Dynamically set the CSS variable for --generator-color
    const modelColor =
      model === 'elixir'
        ? '#A077A8'
        : model === 'gold'
          ? '#1E647F'
          : model === 'oracle'
            ? '#59B1FE'
            : '#C32782';

    document.documentElement.style.setProperty('--generator-color', modelColor);

    const navBgColor =
      model === 'elixir'
        ? 'linear-gradient(90deg, #A077A8 -4.54%, rgba(160, 119, 168, 0.776) 51.38%, rgba(255, 255, 255, 0) 100%)'
        : model === 'gold'
          ? 'linear-gradient(90deg, #1E647F -4.54%, rgba(30, 100, 127, 0.776) 51.38%, rgba(255, 255, 255, 0) 100%)'
          : model === 'oracle'
            ? 'linear-gradient(90deg, #59B1FE -4.54%, rgba(89, 177, 254, 0.776) 51.38%, rgba(255, 255, 255, 0) 100%)'
            : 'linear-gradient(90deg, #C32782 -4.54%, rgba(195, 39, 130, 0.776) 43.82%, rgba(255, 255, 255, 0) 100%)';

    document.documentElement.style.setProperty(
      '--generator-nav-bg',
      navBgColor
    );

    // Dynamically set the CSS variable for --generator-color
    const generatorLight =
      model === 'elixir'
        ? '#A077A866'
        : model === 'gold'
          ? '#1E647F66'
          : model === 'oracle'
            ? '#59B1FE66'
            : '#C3278233';

    document.documentElement.style.setProperty(
      '--generator-light-color',
      generatorLight
    );

    // Cleanup: Reset on unmount
    return () => {
      document.body.style.backgroundColor = ''; // Reset on unmount
      elements.forEach((el) => {
        (el as HTMLElement).style.backgroundColor = '';
      });
      document.documentElement.style.removeProperty('--generator-color'); // Reset model color
      document.documentElement.style.removeProperty('--generator-nav-bg');
      document.documentElement.style.removeProperty('--generator-light-color');
    };
  }, [pathname, model]);

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
          <div
            className={`relative ${location.pathname === '/generator' ? 'ml-[-4px] my-[-24px] vertical-rounded-tab -z-50' : 'z-30'}`}
          >
            <Link
              to={'/generator?model=merlin'}
              className={`flex items-center py-2 gap-3 my-[5px] rounded-l-[30px] w-full text-sm px-4 ${location.pathname === '/generator' ? `text-white` : 'text-[#414042]'}`}
              style={{
                background:
                  location.pathname === '/generator'
                    ? 'var(--generator-nav-bg)'
                    : '',
              }}
            >
              <GeneratorIcon
                className={`w-[16px] h-[16px] fill-[#414042] ${location.pathname === '/generator' ? 'fill-white' : ''}`}
              />
              The Generator
            </Link>
          </div>
          {tools.map(({ path, label, bgClass, Icon }) => {
            const isActive = location.pathname === path;
            return (
              <div
                key={path}
                className={`relative ${isActive ? 'ml-[-4px] my-[-24px] vertical-rounded-tab -z-50' : 'z-30'}`}
              >
                <Link
                  to={path}
                  className={`flex items-center py-2 gap-3 my-[5px] rounded-l-[30px] w-full text-sm px-4 ${isActive ? `${bgClass} text-white` : 'text-[#414042]'}`}
                >
                  <Icon
                    className={`w-[16px] h-[16px] fill-[#414042] ${isActive ? 'fill-white' : ''}`}
                  />
                  {label}
                </Link>
              </div>
            );
          })}

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
