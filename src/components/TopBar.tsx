/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, ReactNode, useState } from 'react';
import BookIcon from './Icons/BookIcon';
import QuestionIcon from './Icons/QuestionIcon';
import BellIcon from './Icons/BellIcon';
import ChevronDownIcon from './Icons/ChevronDownIcon';
import { cn } from '../utils/tailwindClassesMerge';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
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
import { IconButton, Menu, MenuItem } from '@mui/material';
import SettingsIcon from './Icons/SettingsIcon';
import PlaygroundIcon from './Icons/PlaygroundIcon';

const navItems = [
  { path: '/', label: 'Playground', Icon: PlaygroundIcon },
  { path: '/activity', label: 'Activity', Icon: ActivityIcon },
  { path: '/projects', label: 'Projects', Icon: ProjectsIcon },
  { path: '/blueprints', label: 'Blueprints', Icon: BluePrintIcon },
  { path: '/workflows', label: 'Workflows', Icon: WorkFlowsIcon },
  { path: '/connections', label: 'Connections', Icon: Connections },
];

const tools = [
  { path: '/generator', label: 'The Generator', Icon: GeneratorIcon },
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
  const location = useLocation();
  const pathname = location.pathname;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const openE = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@gmai.com',
    image:
      'https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=',
  });

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
          `lg:flex hidden justify-end items-center mb-4 pt-6 sticky top-0 z-[100] ${pathname.includes('/generator') || pathname.includes('/predictor') || pathname.includes('/extender') ? '' : 'bg-white'}`,
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

          <button
            className="flex justify-center items-center gap-2 p-1 rounded-full bg-white shadow-nav-icon"
            id="basic-button"
            aria-controls={openE ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openE ? 'true' : undefined}
            onClick={handleClick}
          >
            <img
              src="https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA="
              className="w-[32px] h-[32px] rounded-full overflow-hidden object-cover"
            />
            <ChevronDownIcon
              className={`w-[17px] h-[17px] stroke-[#414042] mr-1`}
            />
          </button>
        </div>
        <div className="sm:hidden flex justify-between gap-3 items-center p-3 bg-white rounded-[15px] shadow-nav-shadow">
          <button onClick={handleClick} className="focus:outline-none">
            <img
              src={profile.image}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </button>

          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={openE}
            onClose={handleClose}
            sx={{ mt: '45px', p: 0 }}
            MenuListProps={{
              sx: {
                p: 0, // Remove padding inside the menu list
              },
            }}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <div className="flex items-center gap-3 px-4 py-3 rounded-t-[15px]">
              <img
                src={profile.image}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {profile.name}
                </p>
                <p className="text-xs text-gray-500">
                  {profile.email.slice(0, 15)}...
                </p>
              </div>
            </div>
            <Divider />
            {[
              { to: '#', label: 'Profile' },
              { to: '/apikeys', label: 'API Keys' },
              { to: '/billings', label: 'Billings' },
              { to: '/usage', label: 'Usage' },
            ].map((item) => (
              <Link key={item.label} to={item.to} className="w-full">
                <MenuItem
                  onClick={handleClose}
                  className="rounded-[15px] !font-primary !text-sm"
                >
                  {item.label}
                </MenuItem>
              </Link>
            ))}
            <Divider />
            <MenuItem
              onClick={handleClose}
              className="rounded-[15px] !py-3 !font-primary !text-sm"
            >
              Logout
            </MenuItem>
          </Menu>
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
