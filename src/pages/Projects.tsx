import React, { Fragment } from 'react';
import TopBar from '../components/TopBar';
import ProjectsIcon from '../components/Icons/ProjectsIcon';
import MenuIcon from '../components/Icons/MenuIcon';
import { Menu, MenuItem } from '@mui/material';
import ExtenderIcon from '../components/Icons/ExtenderIcon';
import ProjectCard from '../components/project/Card';
import GeneratorIcon from '../components/Icons/GeneratorIcon';
import GoldIcon from '../components/Icons/GoldIcon';
import PredictorIcon from '../components/Icons/PredictorIcon';

const Projects: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <TopBar containerClassName="justify-between">
        <aside className="flex justify-start items-center gap-3">
          <ProjectsIcon className="stroke-[#414042] w-[26px] h-[26px]" />
          <h2 className="text-[26px] font-primary font-medium">The Project</h2>
        </aside>
      </TopBar>

      <div className="flex justify-between items-center w-full rounded-sm">
        <h2 className="md:text-lg sm:text-base text-sm font-primary font-medium text-[#414042]">
          Your AI Models
        </h2>
        <aside className="relative">
          <button onClick={handleClick}>
            <MenuIcon
              className={`w-[34px] h-[34px] fill-default cursor-pointer`}
            />
          </button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            sx={{
              width: '220px', // Customize width here
              '& .MuiPaper-root': {
                width: '250px',
                marginLeft: {
                  md: '-30px',
                },
                borderRadius: '10px',
                padding: '0',
              },
            }}
          >
            <MenuItem
              onClick={handleClose}
              className="font-primary !text-sm text-[#414042]"
            >
              Active Model
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              className="font-primary !text-sm text-[#414042]"
            >
              Draft Model
            </MenuItem>
          </Menu>
        </aside>
      </div>

      {/* Models */}
      <section className="grid xl:grid-cols-3 md:grid-cols-2 gap-4 md:mt-8 mt-4">
        <ProjectCard
          primaryColor="#4CB448"
          secondaryColor="#4CB448"
          model={'The Extender'}
          title={'Customer Churn'}
          description={
            'Extends files, documents, and entries. Simply provide the documents you want to extend and wait for our tools to do their magic.'
          }
          modelIcon={
            <ExtenderIcon
              className={'w-[32px] h-[32px] fill-white relative mr-8'}
            />
          }
          onUseModel={() => {
            // Use model Logic
          }}
          onDeleteModel={() => {
            // Delete Model Logic
          }}
        />

        <ProjectCard
          primaryColor="#1E647F"
          secondaryColor="#5183F0"
          model={'The Generator'}
          title={'Inventory Forecast Model'}
          description={
            ' Predicts future inventory needs based on sales trends and seasonality.'
          }
          modelIcon={
            <GoldIcon
              className={'w-[32px] h-[32px] fill-white relative mr-8'}
            />
          }
          onUseModel={() => {
            // Use model Logic
          }}
          onDeleteModel={() => {
            // Delete Model Logic
          }}
        />

        <ProjectCard
          primaryColor="#c32782"
          secondaryColor="#c32782"
          model={'The Generator'}
          title={'Marketing Campaign Optimizer'}
          description={
            'Recommends the best marketing strategies based on past campaign data.'
          }
          modelIcon={
            <GeneratorIcon
              className={'w-[32px] h-[32px] fill-white relative mr-8'}
            />
          }
          onUseModel={() => {
            // Use model Logic
          }}
          onDeleteModel={() => {
            // Delete Model Logic
          }}
        />

        <ProjectCard
          primaryColor="#E55057"
          secondaryColor="#E55057"
          model={'The Generator'}
          title={'Sales Predictor'}
          description={`Predicts data and information from files and previous documentation, choose what you want to obtain and what variables you want to use, don't wait any longer and start predicting`}
          modelIcon={
            <PredictorIcon
              className={'w-[32px] h-[32px] fill-white relative mr-8'}
            />
          }
          onUseModel={() => {
            // Use model Logic
          }}
          onDeleteModel={() => {
            // Delete Model Logic
          }}
        />

        <ProjectCard
          primaryColor="#4CB448"
          secondaryColor="#4CB448"
          model={'The Extender'}
          title={'Customer Churn'}
          description={
            'Extends files, documents, and entries. Simply provide the documents you want to extend and wait for our tools to do their magic.'
          }
          modelIcon={
            <ExtenderIcon
              className={'w-[32px] h-[32px] fill-white relative mr-8'}
            />
          }
          onUseModel={() => {
            // Use model Logic
          }}
          onDeleteModel={() => {
            // Delete Model Logic
          }}
        />

        <ProjectCard
          primaryColor="#1E647F"
          secondaryColor="#5183F0"
          model={'The Generator'}
          title={'Inventory Forecast Model'}
          description={
            ' Predicts future inventory needs based on sales trends and seasonality.'
          }
          modelIcon={
            <GoldIcon
              className={'w-[32px] h-[32px] fill-white relative mr-8'}
            />
          }
          onUseModel={() => {
            // Use model Logic
          }}
          onDeleteModel={() => {
            // Delete Model Logic
          }}
        />
      </section>
    </Fragment>
  );
};

export default Projects;
