import React, { Fragment } from 'react';
import TopBar from '../components/TopBar';
import PredictorIcon from '../components/Icons/PredictorIcon';
import PredictorSelect from '../components/predictor/Select';
import PenIcon from '../components/Icons/PenIcon';

const Predictor: React.FC = () => {
  return (
    <Fragment>
      {/* Top bar */}
      <TopBar containerClassName="justify-between">
        <aside className="flex justify-start items-center gap-3">
          <PredictorIcon className="fill-[#414042] w-[26px] h-[23.59px]" />
          <h2 className="text-[26px] font-primary font-medium">
            The Predictor
          </h2>
        </aside>
      </TopBar>

      {/* Predictor */}
      <div className="flex items-center gap-3">
        <p className="text-sm text-[#414042]">Select Predictor</p>

        <div className="flex w-[300px] ">
          {/* <SelectOption /> */}
          <PredictorSelect />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-4 mt-4 w-full">
        <div className="flex flex-col gap-3 w-full col-span-5">
          <div className="border border-[#C32782]/60 rounded-[5px] relative p-4">
            <div className="relative">
              <textarea
                placeholder="Write an explanation about the topic you want to generate data about and its fields...."
                className="min-h-[260px] w-full h-full bg-transparent outline-none border-none text-sm text-[#414042] placeholder:text-[#414042] resize-none overflow-hidden"
              />
            </div>
            <aside className="flex justify-end">
              <button className="bg-[#C32782] py-2 px-6 text-sm rounded-lg text-white font-primary flex justify-center items-center gap-2 whitespace-nowrap">
                <PenIcon className={`w-[22px] h-[22px] fill-white`} />
                Generate
              </button>
            </aside>
          </div>

          {/** Output */}
          <h2 className="text-[#414042] text-[20px] font-primary font-semibold">
            Output
          </h2>
          <div className=" flex flex-col items-center flex-grow border border-[#C32782]/60 rounded-[5px] justify-center">
            <img
              src="/logo-icon.png"
              alt="logo"
              className="object-contain w-[70px] h-[70px] pointer-events-none"
            />
            <h3 className="text-[#414042] text-base font-semibold">
              Not Result Yet
            </h3>
            <p className="text-[#414042] text-sm font-primary">
              The Generation is being performed
            </p>
          </div>
        </div>
        <div className="mt-4 border-t pt-2 col-span-2">
          <h3 className="text-md font-semibold text-gray-700">Examples</h3>
          <ul className="mt-2 space-y-2">
            {[
              'Lorem ipsum dolor sit amet',
              'Lorem ipsum dolor sit amet consectetur adipiscing elit',
              'Lorem ipsum dolor sit amet',
              'Lorem ipsum dolor sit amet',
              'Lorem ipsum dolor sit amet',
              'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="text-lg font-semibold text-gray-500">+</span>{' '}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Predictor;
