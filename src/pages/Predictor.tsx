import React, { Fragment } from 'react';
import TopBar from '../components/TopBar';
import PredictorIcon from '../components/Icons/PredictorIcon';
import PredictorSelect from '../components/predictor/Select';
import FileIcon from '../components/Icons/FileIcon';

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
        {/** Input Section*/}
        <div className="flex flex-col gap-3 w-full col-span-5">
          {/** Input */}
          <div className="border border-[#E55057] border-dashed rounded-[5px] relative p-4">
            <div className="flex items-center justify-center m-auto">
              <div className="min-h-[300px] flex flex-col gap-3 items-center justify-center">
                <h2 className="text-[#414042] text-[18px] font-primary font-semibold">
                  Create Predictor
                </h2>
                <div className="flex items-center px-4 py-2 gap-2 border  border-[#E55057] rounded-[5px]">
                  <FileIcon className={`w-[20px] h-[20px] fill-predictor`} />
                  <label htmlFor="input" className="">
                    <p className="text-predictor text-[14px] font-primary font-semibold">
                      Choose File
                    </p>
                  </label>
                  <input id="input" type="file" className="hidden" />
                </div>
                <p className="text-[#414042] font-primary text-[14px] mt-1">
                  or drag and drop a .csv, .xlsv, .json file here to upload
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 border-t pt-2 col-span-2">
          <h3 className="text-md font-semibold text-gray-700">File Formate</h3>
          <PredictorSelect />

          <h3 className="text-md font-semibold text-gray-700">
            File Guidlines
          </h3>

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

          <h3 className="text-md font-semibold text-gray-700">
            File Guidlines
          </h3>

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
