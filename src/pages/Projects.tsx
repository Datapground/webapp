import React from 'react';
import TopBar from '../components/TopBar';
import ProjectsIcon from '../components/Icons/ProjectsIcon';
import MenuIcon from '../components/Icons/MenuIcon';

const Projects: React.FC = () => {
  return (
    <div className="">
      <TopBar containerClassName="justify-between">
        <aside className="flex justify-start items-center gap-3">
          <ProjectsIcon className="stroke-[#414042] w-[26px] h-[23.59px]" />
          <h2 className="text-[26px] font-primary font-medium">The Project</h2>
        </aside>
      </TopBar>

      {/* <div className=" flex items-center justify-center absolute top-[35%] left-[40%]">
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="/logo-icon.png"
            alt="logo"
            className="object-contain w-[100px] h-[100px] pointer-events-none"
          />
          <h2 className="text-[#414042] text-[18px] font-primary font-semibold ">
            Create New Project
          </h2>
          <p className="text-[14px] font-primary text-[#414042] my-2">
            Now that youre here, its time to create your first <br /> Data play
            ground project
          </p>
          <button className="bg-default py-2 px-6 text-sm rounded-lg text-white font-primary mt-2">
            New Project
          </button>
        </div>
      </div> */}

      <div>
        <div className="flex justify-between items-center bg-[#5183F0]/5 w-full p-6 rounded-sm">
          <h2 className="text-[20px] font-primary font-medium">
            Your AI Models
          </h2>
          <MenuIcon className={`w-[30px] h-[30px] fill-default`} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Projects;
