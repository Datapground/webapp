import React from 'react';
import TopBar from '../components/TopBar';
import ProjectsIcon from '../components/Icons/ProjectsIcon';
import MenuIcon from '../components/Icons/MenuIcon';
import { Menu, MenuItem } from '@mui/material';
import DeleteIcon from '../components/Icons/DeleteIcon';
import Generator from './Generator';

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
    <div className="">
      <TopBar containerClassName="justify-between">
        <aside className="flex justify-start items-center gap-3">
          <ProjectsIcon className="stroke-[#414042] w-[26px] h-[26px]" />
          <h2 className="text-[26px] font-primary font-medium">The Project</h2>
        </aside>
      </TopBar>

      <div>
        <div className="flex justify-between items-center bg-[#5183F0]/5 w-full p-6 rounded-sm">
          <h2 className="text-[20px] font-primary font-medium">
            Your AI Models
          </h2>
          <div>
            <MenuIcon
              className={`w-[40px] h-[40px] fill-default cursor-pointer`}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Dashboard
            </MenuIcon>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              anchorOrigin={{
                vertical: 'bottom', // Change this to 'top', 'center', etc.
                horizontal: 'left', // Change this to 'left', 'center', etc.
              }}
              transformOrigin={{
                vertical: 'top', // Change this to 'bottom', 'center', etc.
                horizontal: 'center', // Change this to 'left', 'center', etc.
              }}
              sx={{
                width: '220px', // Customize width here
                '& .MuiPaper-root': {
                  width: '250px',
                  marginLeft: '-30px',
                  borderRadius: '10px',
                  padding: '0',
                },
              }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{
                  color: '#414042',
                  fontSize: '14px',
                  fontFamily: 'BR Candor, sans-serif',
                }}
              >
                Active Model
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  color: '#414042',
                  fontSize: '14px',
                  fontFamily: 'BR Candor, sans-serif',
                }}
              >
                Draft Model
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 my-4">
          <div className="relative max-w-[400px] mx-auto">
            {/* Background Image */}
            <img
              src="/1.png"
              alt=""
              width={400}
              height={400}
              className="relative w-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full">
              {/* Content Overlay */}

              <div className="flex flex-col items-start justify-between py-5 px-6 bg-red-00 h-full w-full">
                <div className="flex justify-between items-center">
                  <img
                    src="/logo2.png"
                    alt="logo"
                    className="object-contain w-[40px] h-[40px] pointer-events-none"
                  />
                </div>

                <div className="flex flex-col items-start justify-between gap-[5px] w-full">
                  <button className="bg-gradient-to-t from-defaultLight to-white py-1 px-4 text-sm border-t-black rounded-[10px] text-[#414042] border-b-2 border-default font-primary">
                    The Extender
                  </button>

                  <h2 className="text-[#414042] text-[20px] font-primary max-w-[250px]">
                    Customer Churn{' '}
                  </h2>

                  <p className="text-[#414042] text-sm font-primary leading-relaxed max-w-[280px]">
                    Extends files, documents and entries, simply provide the
                    documents you want to extend and wait for our tools to do
                    their magic
                  </p>

                  <div className="flex items-center justify-between gap-10 w-full">
                    <button className="flex-grow border border-extender rounded-[10px] p-[3px] text-extender font-semibold">
                      Use Model
                    </button>
                    <div className="p-2 rounded-full bg-extender flex items-center justify-center">
                      <DeleteIcon className="w-[24px] h-[24px] fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-[400px] mx-auto">
            {/* Background Image */}
            <img
              src="/2.png"
              alt=""
              width={400}
              height={400}
              className="relative w-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full">
              {/* Content Overlay */}

              <div className="flex flex-col items-start justify-between py-5 px-6 bg-red-00 h-full w-full">
                <div className="flex justify-between items-center">
                  <img
                    src="/logo2.png"
                    alt="logo"
                    className="object-contain w-[40px] h-[40px] pointer-events-none"
                  />
                </div>

                <div className="flex flex-col items-start justify-between gap-[5px] w-full">
                  <button className="bg-gradient-to-t from-defaultLight to-white py-1 px-4 text-sm border-t-black rounded-[10px] text-[#414042] border-b-2 border-default font-primary">
                    The Generator
                  </button>

                  <h2 className="text-[#414042] text-[20px] font-primary max-w-[250px]">
                    Inventory Forecast Model
                  </h2>

                  <p className="text-[#414042] text-sm font-primary leading-relaxed max-w-[280px]">
                    Predicts future inventory needs based on sales trends and
                    seasonality.
                  </p>

                  <div className="flex items-center justify-between gap-10 w-full mt-3">
                    <button className="flex-grow border border-[#1E647F] rounded-[10px] p-[3px] text-[#1E647F] font-semibold">
                      Use Model
                    </button>
                    <div className="p-2 rounded-full bg-default flex items-center justify-center">
                      <DeleteIcon className="w-[24px] h-[24px] fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-[400px] mx-auto">
            {/* Background Image */}
            <img
              src="/3.png"
              alt=""
              width={400}
              height={400}
              className="relative w-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full">
              {/* Content Overlay */}

              <div className="flex flex-col items-start justify-between py-5 px-6 bg-red-00 h-full w-full">
                <div className="flex justify-between items-center">
                  <img
                    src="/logo2.png"
                    alt="logo"
                    className="object-contain w-[40px] h-[40px] pointer-events-none"
                  />
                </div>

                <div className="flex flex-col items-start justify-between gap-[5px] w-full">
                  <button className="bg-gradient-to-t from-defaultLight to-white py-1 px-4 text-sm border-t-black rounded-[10px] text-[#414042] border-b-2 border-default font-primary">
                    The Generator
                  </button>

                  <h2 className="text-[#414042] text-[20px] font-primary max-w-[250px]">
                    Marketing Campaign Optimizer{' '}
                  </h2>

                  <p className="text-[#414042] text-sm font-primary leading-relaxed max-w-[280px]">
                    Recommends the best marketing strategies based on past
                    campaign data.
                  </p>

                  <div className="flex items-center justify-between gap-10 w-full">
                    <button className="flex-grow border border-generator rounded-[10px] p-[3px] text-generator font-semibold">
                      Use Model
                    </button>
                    <div className="p-2 rounded-full bg-generator flex items-center justify-center">
                      <DeleteIcon className="w-[24px] h-[24px] fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-[400px] max-h-[440px] mx-auto">
            {/* Background Image */}
            <img
              src="/4.png"
              alt=""
              width={400}
              height={430}
              className="relative w-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full">
              {/* Content Overlay */}

              <div className="flex flex-col items-start justify-between py-5 px-6 bg-red-00 h-full w-full">
                <div className="flex justify-between items-center">
                  <img
                    src="/logo2.png"
                    alt="logo"
                    className="object-contain w-[40px] h-[40px] pointer-events-none"
                  />
                </div>

                <div className="flex flex-col items-start justify-between gap-[5px] w-full">
                  <button className="bg-gradient-to-t from-defaultLight to-white py-1 px-4 text-sm border-t-black rounded-[10px] text-[#414042] border-b-2 border-default font-primary">
                    The Generator
                  </button>

                  <h2 className="text-[#414042] text-[20px] font-primary max-w-[250px]">
                    Sales Predictor{' '}
                  </h2>

                  <p className="text-[#414042] text-sm font-primary leading-relaxed max-w-[340px]">
                    Predicts data and information from files and previous
                    documentation, choose what you want to obtain and what
                    variables you want to use, dont wait any longer and start
                    predicting
                  </p>

                  <div className="flex items-center justify-between gap-10 w-full">
                    <button className="flex-grow border border-predictor rounded-[10px] p-[3px] text-predictor font-semibold">
                      Use Model
                    </button>
                    <div className="p-2 rounded-full bg-predictor flex items-center justify-center">
                      <DeleteIcon className="w-[24px] h-[24px] fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-[400px] mx-auto">
            {/* Background Image */}
            <img
              src="/1.png"
              alt=""
              width={400}
              height={400}
              className="relative w-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full">
              {/* Content Overlay */}

              <div className="flex flex-col items-start justify-between py-5 px-6 bg-red-00 h-full w-full">
                <div className="flex justify-between items-center">
                  <img
                    src="/logo2.png"
                    alt="logo"
                    className="object-contain w-[40px] h-[40px] pointer-events-none"
                  />
                </div>

                <div className="flex flex-col items-start justify-between gap-[5px] w-full">
                  <button className="bg-gradient-to-t from-defaultLight to-white py-1 px-4 text-sm border-t-black rounded-[10px] text-[#414042] border-b-2 border-default font-primary">
                    The Extender
                  </button>

                  <h2 className="text-[#414042] text-[20px] font-primary max-w-[250px]">
                    Customer Churn{' '}
                  </h2>

                  <p className="text-[#414042] text-sm font-primary leading-relaxed max-w-[280px]">
                    Extends files, documents and entries, simply provide the
                    documents you want to extend and wait for our tools to do
                    their magic
                  </p>

                  <div className="flex items-center justify-between gap-10 w-full">
                    <button className="flex-grow border border-extender rounded-[10px] p-[3px] text-extender font-semibold">
                      Use Model
                    </button>
                    <div className="p-2 rounded-full bg-extender flex items-center justify-center">
                      <DeleteIcon className="w-[24px] h-[24px] fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-[400px] mx-auto">
            {/* Background Image */}
            <img
              src="/2.png"
              alt=""
              width={400}
              height={400}
              className="relative w-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full">
              {/* Content Overlay */}

              <div className="flex flex-col items-start justify-between py-5 px-6 bg-red-00 h-full w-full">
                <div className="flex justify-between items-center">
                  <img
                    src="/logo2.png"
                    alt="logo"
                    className="object-contain w-[40px] h-[40px] pointer-events-none"
                  />
                </div>

                <div className="flex flex-col items-start justify-between gap-[5px] w-full">
                  <button className="bg-gradient-to-t from-defaultLight to-white py-1 px-4 text-sm border-t-black rounded-[10px] text-[#414042] border-b-2 border-default font-primary">
                    The Generator
                  </button>

                  <h2 className="text-[#414042] text-[20px] font-primary max-w-[250px]">
                    Inventory Forecast Model
                  </h2>

                  <p className="text-[#414042] text-sm font-primary leading-relaxed max-w-[280px]">
                    Predicts future inventory needs based on sales trends and
                    seasonality.
                  </p>

                  <div className="flex items-center justify-between gap-10 w-full mt-3">
                    <button className="flex-grow border border-[#1E647F] rounded-[10px] p-[3px] text-[#1E647F] font-semibold">
                      Use Model
                    </button>
                    <div className="p-2 rounded-full bg-default flex items-center justify-center">
                      <DeleteIcon className="w-[24px] h-[24px] fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
