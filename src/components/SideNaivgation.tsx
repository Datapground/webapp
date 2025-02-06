import React from 'react';
import Lottie from 'lottie-react';
import logoAnimation from '../constants/LogoAnimation.json';
import { Link, useLocation } from 'react-router-dom';
import PlayGrounIcon from './Icons/PlayGrounIcon';
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

const SideNavigation = () => {
  const location = useLocation();
  const path: string = location.pathname;

  console.log(path);

  return (
    <nav className="w-64 rounded-[40px] border-l-2 border-y-2 border-[#C7D2D6] bg-side-navigation pb-4">
      <div className="logo-container p-4">
        <Lottie
          animationData={logoAnimation}
          loop={true}
          className="h-[40px] w-[190px] mx-auto"
        />
      </div>
      <div className="nav-items pl-8 pr-0 space-y-1">
        <div
          className={`nav-items             
           
                ${path === '/playground' && 'ml-[-4px] my-[-22px] vertical-rounded-tab'} `}
        >
          <Link
            to="/playground"
            className={`flex justify-start items-center py-2 gap-3 my-[5px] rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/playground' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <PlayGrounIcon className={`w-[16px] h-[16px] stroke-[#414042]`} />
            PlayGround
          </Link>
        </div>
        <div
          className={`nav-items           
           
                ${path === '/activity' && 'ml-[-4px] my-[-22px] vertical-rounded-tab'} `}
        >
          <Link
            to="/activity"
            className={`flex justify-start items-center py-2 gap-3 my-[5px] rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/activity' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <ActivityIcon className={`w-[16px] h-[16px] stroke-[#414042]`} />
            Activity
          </Link>
        </div>
        <div
          className={`nav-items             
              ${path === '/projects' && 'ml-[-4px] my-[-22px] vertical-rounded-tab'}`}
        >
          {' '}
          <Link
            to="/projects"
            className={`flex justify-start items-center py-2 gap-3 my-1 rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/projects' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <ProjectsIcon className={`w-[16px] h-[16px] stroke-[#414042]`} />
            Projects
          </Link>
        </div>
        <div
          className={`nav-items 
              ${
                path === '/projects'
                  ? 'mt-[-22px]'
                  : path === '/workflows' && 'mb-[-22px]'
              }
            ${path === '/blueprints' && 'ml-[-4px] vertical-rounded-tab'} `}
        >
          {' '}
          <Link
            to="/blueprints"
            className={`flex justify-start items-center py-2 gap-3 my-1 rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/blueprints' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <BluePrintIcon className={`w-[16px] h-[16px] stroke-[#414042]`} />
            BluePrints
          </Link>
        </div>
        <div
          className={`nav-items
             ${
               path === '/playground'
                 ? 'mt-[-22px]'
                 : path === '/projects'
                   ? '/projects'
                   : 'mb-[-22px]'
             }
            ${path === '/workflows' && 'ml-[-4px] vertical-rounded-tab'} `}
        >
          {' '}
          <Link
            to="/workflows"
            className={`flex justify-start items-center py-2 gap-3 my-1 rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/workflows' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <WorkFlowsIcon className={`w-[16px] h-[16px] stroke-[#414042]`} />
            Workflows
          </Link>
        </div>
        <div
          className={`nav-items
             ${
               path === '/playground'
                 ? 'mt-[-22px]'
                 : path === '/projects'
                   ? '/projects'
                   : 'mb-[-22px]'
             }
            ${path === '/connections' && 'ml-[-4px] vertical-rounded-tab'} `}
        >
          {' '}
          <Link
            to="/connections"
            className={`flex justify-start items-center py-2 gap-3 my-1 rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/connections' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <Connections className={`w-[16px] h-[16px] stroke-[#414042]`} />
            Connections
          </Link>
        </div>
        <div className="line h-[1px] w-[80%] bg-gradient-to-r from-blue-600 to-transparent my-2"></div>
        <div
          className={`nav-items
             ${
               path === '/playground'
                 ? 'mt-[-22px]'
                 : path === '/projects'
                   ? '/projects'
                   : 'mb-[-22px]'
             }
            ${path === '/generator' && 'vertical-rounded-tab'} `}
        >
          <Link
            to="/generator"
            className={`flex justify-start items-center py-2 gap-3 my-1 rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/generator' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <GeneratorIcon className={`w-[17px] h-[16px] stroke-[#424042]`} />
            The Generator
          </Link>
        </div>
        <div
          className={`nav-items
             ${
               path === '/playground'
                 ? 'mt-[-22px]'
                 : path === '/projects'
                   ? '/projects'
                   : 'mb-[-22px]'
             }
              ${path === '/predictor' && 'ml-[-4px] vertical-rounded-tab'} `}
        >
          <Link
            to="/predictor"
            className={`flex justify-start items-center py-2 gap-3 my-1 rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/predictor' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <PredictorIcon className={`w-[16px] h-[16px] stroke-[#414042]`} />
            The Predictor
          </Link>
        </div>
        <div
          className={`nav-items
             ${
               path === '/playground'
                 ? 'mt-[-22px]'
                 : path === '/projects'
                   ? '/projects'
                   : 'mb-[-22px]'
             }
            ${path === '/extender' && 'ml-[-4px] vertical-rounded-tab'} `}
        >
          <Link
            to="/extender"
            className={`flex justify-start items-center py-2 gap-3 my-1 rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/extender' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <ExtenderIcon className={`w-[16px] h-[16px] stroke-[#414042]`} />
            The Extneder
          </Link>
        </div>

        <div className="line h-[1px] w-[80%] bg-gradient-to-r from-blue-600 to-transparent my-2"></div>
        <div
          className={`nav-items 
             ${
               path === '/playground'
                 ? 'mt-[-22px]'
                 : path === '/projects'
                   ? '/projects'
                   : 'mb-[-22px]'
             }
            ${path === '/apikeys' && 'ml-[-4px] vertical-rounded-tab'} `}
        >
          <Link
            to="/apikeys"
            className={`flex justify-start items-center py-2 gap-3 my-1 rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/apikeys' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <APIKeyIcon className={`w-[16px] h-[16px] stroke-[#414042]`} />
            API Keys
          </Link>
        </div>
        <div
          className={`nav-items
             ${
               path === '/playground'
                 ? 'mt-[-22px]'
                 : path === '/projects'
                   ? '/projects'
                   : 'mb-[-22px]'
             }
            ${path === '/invites' && 'ml-[-4px] vertical-rounded-tab'} `}
        >
          <Link
            to="/invites"
            className={`flex justify-start items-center py-2 gap-3 my-1 rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/invites' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <InviteIcon className={`w-[16px] h-[16px] stroke-[#414042]`} />
            Invites
          </Link>
        </div>
        <div
          className={`nav-items
             ${
               path === '/playground'
                 ? 'mt-[-22px]'
                 : path === '/projects'
                   ? '/projects'
                   : 'mb-[-22px]'
             }
            ${path === '/usage' && 'ml-[-4px] vertical-rounded-tab'} `}
        >
          <Link
            to="/usage"
            className={`flex justify-start items-center py-2 gap-3 my-1 rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/usage' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <UsageIcon className={`w-[16px] h-[16px] stroke-[#414042]`} />
            Usage
          </Link>
        </div>
        <div
          className={`nav-items
             ${
               path === '/playground'
                 ? 'mt-[-22px]'
                 : path === '/projects'
                   ? '/projects'
                   : 'mb-[-22px]'
             }
            ${path === '/billings' && 'ml-[-4px] vertical-rounded-tab'} `}
        >
          <Link
            to="/billings"
            className={`flex justify-start items-center py-2 gap-3 my-1 rounded-l-[30px]  w-full text-sm  text-[#414042] px-4 ${path === '/billings' && 'bg-gradient-to-r from-pink-500 to bg-white'}`}
          >
            <BillingIcon className={`w-[16px] h-[16px] stroke-[#414042]`} />
            Billings
          </Link>
        </div>
      </div>
      <div className="setting-btn mt-8 mx-auto bg-white text-center text-sm rounded-[30px] w-[40%]">
        <button className="py-2 px-4 flex items-center gap-[5px] text-center [#414042]">
          <SettingsIcon className={`w-[16px] h-[16px] stroke-[#414042]`} />{' '}
          Settings
        </button>
      </div>
    </nav>
  );
};

export default SideNavigation;
