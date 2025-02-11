/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, ReactNode } from 'react';
import BookIcon from './Icons/BookIcon';
import QuestionIcon from './Icons/QuestionIcon';
import BellIcon from './Icons/BellIcon';
import ChevronDownIcon from './Icons/ChevronDownIcon';
import { cn } from '../utils/tailwindClassesMerge';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
import { IconButton } from '@mui/material';
import SettingsIcon from './Icons/SettingsIcon';
import MenuIcon from './Icons/MenuIcon';
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
  { path: '/predictor', label: 'The Predictor', Icon: PredictorIcon },
  { path: '/extender', label: 'The Extender', Icon: ExtenderIcon },
];

const accounts = [
  { path: '/apikeys', label: 'API Keys', Icon: APIKeyIcon },
  { path: '/invites', label: 'Invites', Icon: InviteIcon },
  { path: '/usage', label: 'Usage', Icon: UsageIcon },
  { path: '/billings', label: 'Billings', Icon: BillingIcon },
];

type Props = {
  containerClassName?: string;
  children?: ReactNode;
};

const TopBar: React.FC<Props> = ({ children, containerClassName }) => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        className="text-gray-700"
      >
        <GeneratorIcon className={`w-[16px] h-[16px] fill-black`} />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        className="w-64"
      >
        <List className="w-64 bg-white ">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[30px] w-[180px] mx-auto object-contain pointer-events-none"
          />{' '}
        </List>
        <List className="w-64 bg-white h-full">
          {navItems.map(({ path, label, Icon }) => (
            <ListItem key={path} disablePadding>
              <ListItemButton
                component={Link}
                to={path}
                selected={location.pathname === path}
                className={`flex items-center py-2 rounded-md transition-all ${
                  location.pathname === path
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'hover:bg-default text-white'
                }`}
              >
                <ListItemIcon>
                  <Icon className={`ml-6 w-[16px] h-[16px] stroke-[#414042]`} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}

          <Divider className="my-2" />

          {tools.map(({ path, label, Icon }) => (
            <ListItem key={path} disablePadding>
              <ListItemButton
                component={Link}
                to={path}
                selected={location.pathname === path}
                className={`flex items-center  py-2 rounded-md transition-all ${
                  location.pathname === path
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'hover:bg-gray-200'
                }`}
              >
                <ListItemIcon>
                  <Icon className={`ml-6 w-[16px] h-[16px] fill-[#414042]`} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}

          <Divider className="my-2" />

          {accounts.map(({ path, label, Icon }) => (
            <ListItem key={path} disablePadding>
              <ListItemButton
                component={Link}
                to={path}
                selected={location.pathname === path}
                className={`flex items-center  py-2 rounded-md transition-all ${
                  location.pathname === path
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'hover:bg-gray-200'
                }`}
              >
                <ListItemIcon>
                  <Icon className={`ml-6 w-[16px] h-[16px] stroke-[#414042]`} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}

          <Divider className="my-2" />

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/settings"
              className="flex items-center py-2 rounded-md hover:bg-gray-200 transition-all"
            >
              <ListItemIcon>
                <SettingsIcon
                  className={`ml-6 w-[16px] h-[16px] stroke-[#414042]`}
                />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
  return (
    <Fragment>
      <nav
        className={cn(
          'lg:flex hidden justify-end items-center mb-4 pt-6',
          containerClassName
        )}
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

      {/* For Mobile */}
      <nav className="w-full h-[60px] lg:hidden flex justify-between items-center">
        <Link to={'/playground'}>
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[30px] w-[130px] mx-auto object-contain pointer-events-none"
          />
        </Link>
        <button onClick={toggleDrawer(true)} className="text-3xl">
          <RxHamburgerMenu />
        </button>
      </nav>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Fragment>
  );
};

export default TopBar;
