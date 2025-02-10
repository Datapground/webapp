import React, { Fragment, useState } from 'react';
import TopBar from '../components/TopBar';
import PredictorIcon from '../components/Icons/PredictorIcon';
import FileIcon from '../components/Icons/FileIcon';
import PredictorSelect from '../components/predictor/Select';
import SettingsIcon from '../components/Icons/SettingsIcon';
import {
  Slider,
  DialogContent,
  Dialog,
  Stack,
  Switch,
  styled,
} from '@mui/material';
import HandIcon from '../components/Icons/HandIcon';
import PenIcon from '../components/Icons/PenIcon';
import DeleteIcon from '../components/Icons/DeleteIcon';
import { useDropzone } from 'react-dropzone';

const columns = ['Columns A', 'Columns B', 'Columns C', 'Columns D'];

interface Predictor {
  open: boolean;
  onClose: () => void;
}

const CustomSwitch = styled(Switch)<{
  trackcolor?: string;
  switchcolor?: string;
}>(({ trackcolor = '#E55057', switchcolor = '#fff' }) => ({
  width: 26, // Updated width
  height: 16, // Updated height
  padding: 0,
  display: 'flex',
  alignItems: 'center',

  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(10px)',
      color: switchcolor,
      '& + .MuiSwitch-track': {
        backgroundColor: trackcolor,
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: '#fff',
    transition: '0.3s',
  },
  '& .MuiSwitch-track': {
    width: '100%',
    height: '100%',
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: trackcolor,
  },
}));

const Predictor: React.FC = () => {
  const [search, setSearch] = useState(60);
  const [open, setOpen] = useState(true);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path} className="list-none">
      {file.name}
    </li>
  ));

  const handleSearch = (_event: Event, newValue: number | number[]) => {
    setSearch(newValue as number);
  };

  const [entries, setEntries] = React.useState(false);
  const [outliers, setOutliers] = React.useState(false);
  const [others, setOthers] = React.useState(false);

  const handleEntries = () => {
    const newValue = !entries;
    setEntries(newValue);
  };
  const handleOutliers = () => {
    const newValue = !outliers;
    setOutliers(newValue);
  };
  const handleOthers = () => {
    const newValue = !others;
    setOthers(newValue);
  };

  const handleClose = () => setOpen(false);

  const boxStyles = {
    '& .MuiPaper-root': {
      width: '70vw',
      maxWidth: '1400px',
      height: '85vh',
      borderRadius: '40px',
      overflow: 'hidden',
    },
  };
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
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <p className="text-sm text-[#414042] font-medium">Select Predictor</p>
          <div className="flex w-[300px] ">
            <PredictorSelect
              options={[
                {
                  label: 'Predictor',
                  options: [
                    { value: 'Predictor 1', label: 'Predictor 1' },
                    { value: 'Predictor 2', label: 'Predictor 2' },
                    { value: 'Predictor 3', label: 'Predictor 3' },
                  ],
                },
              ]}
              placeholder="No predictor selected"
            />
          </div>
        </div>
        {/* Status */}
        <div className="flex items-center gap-3">
          <label className="text-sm text-[#414042] font-primary ">
            Status:{' '}
            <span className="text-green-700 font-semibold ">Active</span>
          </label>
          <DeleteIcon className="w-[20px] h-[20px] stroke-[#E55057] cursor-pointer" />
        </div>
      </div>

      <section className="grid grid-cols-8 gap-2 mt-4 w-full">
        <div className="flex flex-col gap-3 w-full col-span-6">
          <div className="border border-[#E55057] border-dashed rounded-[5px] relative p-4">
            <div className="relative">
              <div
                className={` flex flex-col gap-3 items-center justify-center
                  ${files.length > 0 ? 'min-h-[260px]' : 'min-h-[360px]'}
                  `}
              >
                <h2 className="text-[#414042] text-base font-semibold">
                  Create Predictor
                </h2>
                <div className="flex items-center px-4 py-1.5 gap-2 border  border-[#E55057] rounded-[5px]">
                  <FileIcon className={`w-[18px] h-[18px] fill-predictor`} />
                  <label htmlFor="input" className="">
                    <p className="text-predictor text-xs font-primary font-semibold">
                      Choose File
                    </p>
                    <div {...getRootProps({ className: 'dropzone' })}>
                      <input
                        id="input"
                        type="file"
                        className="hidden"
                        {...getInputProps()}
                      />
                    </div>
                  </label>
                </div>
                <p className="text-[#414042] font-primary text-sm font-light">
                  or drag and drop a .csv, .xlsv, .json file here to upload
                </p>
              </div>

              {files.length > 0 && (
                <aside className="absolute bottom-0 right-0">
                  <button className="bg-[#E55057] py-2 px-6 text-sm rounded-lg text-white font-primary flex justify-center items-center gap-2 whitespace-nowrap">
                    <PenIcon className={`w-[22px] h-[22px] fill-white`} />
                    Generate
                  </button>
                </aside>
              )}
            </div>
          </div>

          {files.length > 0 && (
            <Fragment>
              <h2 className="text-[#414042] text-[20px] font-primary font-semibold">
                Input
              </h2>
              <div className="border border-[#E55057] border-dashed rounded-[5px] relative">
                <div className="flex items-center gap-3 overflow-hidden w-full">
                  <div className="flex flex-col gap-3 overflow-y-auto w-full h-[300px] p-2 custom-scrollbar">
                    {files?.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-[#414042] p-3 w-full border rounded-[10px]"
                      >
                        <p>{file}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Fragment>
          )}
        </div>
        <aside className="col-span-2">
          <h3 className="text-md font-semibold text-[#414042] mb-2 font-primary">
            File Formate
          </h3>

          <PredictorSelect
            options={[
              {
                label: 'formats',
                options: [
                  { value: '.csv', label: '.csv' },
                  { value: '.xlsm', label: '.xlsm' },
                  { value: '.json', label: '.json' },
                ],
              },
            ]}
            placeholder="No file selected"
          />

          {/** File Guidelines */}
          <div className="my-5">
            <h3 className="text-md font-semibold text-[#414042]">
              File Guidelines
            </h3>

            <ul className="mt-2 space-y-2">
              {[
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 tex-sm text-[#414042]"
                >
                  <span className=" text-gray-500">+</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/** File Preparation Tips */}
          <div className="my-5">
            <h3 className="text-md font-medium text-[#414042] ">
              File Preparation Tips
            </h3>

            <ul className="mt-2 space-y-2">
              {[
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                'Lorem ipsum dolor sit amet',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 tex-sm text-[#414042]"
                >
                  <span className="  text-[#414042]">+</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {files.length > 0 && (
            <div className="flex flex-col space-y-6">
              <h3 className="text-md font-medium text-[#414042] ">
                File Preparation Tips
              </h3>
              <div>
                <p className="text-[12px] text-[#414042] font-primary mb-3">
                  Prediction Section:
                </p>
                <button className="p-2 border-[1px] border-predictor rounded-[10px] w-full text-[#414042] font-primary text-sm">
                  Result Value
                </button>
              </div>
              <div>
                <p className="text-[12px] text-[#414042] font-primary mb-3">
                  Download Section:
                </p>
                <button className="p-2 border-[1px] bg-predictor border-predictor rounded-[10px] w-full text-[#414042] font-primary text-sm">
                  Download
                </button>
              </div>
            </div>
          )}
        </aside>
      </section>

      {/* Create Predictor Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth sx={boxStyles}>
        <DialogContent
          sx={{
            width: '100%',
            height: '100%',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="grid grid-cols-7 bg-[#FFFFFF] rounded-[40px] relative  border-l-0 w-full h-full ">
            <div className="col-span-5 m-10">
              <div className="mb-8">
                <h2 className="text-[#414042] text-[26px] font-primary font-semibold">
                  Configure Your Predictor
                </h2>
                <p className="text-[#414042] text-sm font-primary mt-2">
                  Make sure the file format meets the requirement. It must be
                  .csv, .xlsv, .json
                </p>
              </div>
              <div>
                <h3 className="text-[#414042] font-primary text-[12px] font-bold my-4">
                  {' '}
                  Available Columns Configuration
                </h3>
                {/* table */}
                <div className="grid grid-cols-3 border border-[#0000000D] rounded-[40px] overflow-hidden">
                  {/* Header Row */}
                  <div className="text-[#414042] font-medium font-primary text-sm py-3 text-center border-r border-b">
                    Available Columns
                  </div>
                  <div className="text-[#414042] font-medium font-primary text-sm py-3 text-center border-r border-b">
                    Feature Columns
                  </div>
                  <div className="text-[#414042] font-medium font-primary text-sm py-3 text-center border-b">
                    Target Columns
                  </div>

                  {/* Data Rows */}
                  {columns.map((column, index) => (
                    <React.Fragment key={index}>
                      <div className="text-[#414042] font-primary text-sm py-4 text-center border-r border-b">
                        {column}
                      </div>
                      <div className="text-[#414042] font-primary text-sm py-4 border-r border-b flex justify-center items-center">
                        <HandIcon className="w-[22px] h-[22px] fill-predictor" />
                      </div>
                      <div className="text-[#414042] font-primary text-sm py-4 border-b flex justify-center items-center">
                        <HandIcon className="w-[22px] h-[22px] fill-predictor" />
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                <div className="flex justify-center mt-4">
                  <button className="mt-4 bg-predictor text-white py-2 px-16 text-sm font-primary rounded-lg transition">
                    Generate
                  </button>{' '}
                </div>
              </div>
            </div>

            {/** Advance Settings */}
            <div className="col-span-2 rounded-[40px] border w-full py-2">
              <div className="flex flex-col items-center justify-center mt-2 p-4">
                <div className="flex items-center gap-1 py-2 px-3 my-auto bg-[#E55057]/50 w-full rounded-[30px] text-[10px] text-[#414042] font-primary">
                  <SettingsIcon className="w-[16px] h-[16px] stroke-[#414042]" />
                  Advance Settings
                </div>

                {/**  Settings Settings */}
                <div className="flex flex-col w-full mt-4">
                  <h2 className="text-sm font-primary text-[#414042]">
                    Search Parameter
                  </h2>
                  <div>
                    <label className="text-xs text-predictor font-primary flex justify-end -mb-3">
                      {search}%
                    </label>
                    <Slider
                      value={search}
                      onChange={handleSearch}
                      min={0}
                      max={100}
                      aria-label="Temperature"
                      sx={{
                        color: '#E55057', // Custom Purple (Deep Purple)
                        '& .MuiSlider-thumb': { backgroundColor: '#E55057' }, // Thumb color
                        '& .MuiSlider-track': { backgroundColor: '#E55057' }, // Track (filled part)
                        '& .MuiSlider-rail': { backgroundColor: '#E5505733' }, // Rail (unfilled part)
                      }}
                    />
                  </div>
                </div>

                {/**  Settings Settings */}
                <div className="flex flex-col w-full">
                  <h2 className="text-sm font-primary text-[#414042]">
                    Additional Configuration
                  </h2>
                  <div className="flex flex-col gap-3 my-2">
                    <div className="flex justify-between">
                      <p className="text-[10px] text-[#414042] font-primary ">
                        Remove NaN Entries
                      </p>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CustomSwitch
                          checked={entries}
                          onChange={handleEntries}
                        />
                      </Stack>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[10px] text-[#414042] font-primary ">
                        Remove Outliers
                      </p>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CustomSwitch
                          checked={outliers}
                          onChange={handleOutliers}
                        />
                      </Stack>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[10px] text-[#414042] font-primary ">
                        Remove Others
                      </p>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <CustomSwitch
                          checked={others}
                          onChange={handleOthers}
                        />
                      </Stack>
                    </div>
                  </div>
                </div>

                {/**  Settings Settings */}
                <div className="flex flex-col w-full">
                  <h2 className="text-sm font-primary text-[#414042] my-3">
                    Training Details
                  </h2>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <p className="text-[10px] text-[#414042] font-primary ">
                        Estimated Time
                      </p>
                      <label className="text-[10px] text-predictor font-primary flex justify-end -mb-2">
                        3 minutes
                      </label>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[10px] text-[#414042] font-primary ">
                        Estimated Price
                      </p>
                      <label className="text-[10px] text-predictor font-primary flex justify-end -mb-2">
                        10 credits
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default Predictor;
