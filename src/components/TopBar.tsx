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
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
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
