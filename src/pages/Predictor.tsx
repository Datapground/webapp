import React, { Fragment, useEffect, useState } from 'react';
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
  Tooltip,
  IconButton,
} from '@mui/material';
import HandIcon from '../components/Icons/HandIcon';
import PenIcon from '../components/Icons/PenIcon';
import DeleteIcon from '../components/Icons/DeleteIcon';
import { useDropzone } from 'react-dropzone';
import QuestionIcon from '../components/Icons/QuestionIcon';

const columns = ['Columns A', 'Columns B', 'Columns C', 'Columns D'];

const CustomSwitch = styled(Switch)<{
  trackcolor?: string;
  switchcolor?: string;
}>(({ trackcolor = '#E55057', switchcolor = '#fff', theme }) => ({
  width: 22, // Large screens
  height: 14,
  padding: 0,
  display: 'flex',
  alignItems: 'center',

  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)', // Adjusted for smaller size
      color: switchcolor,
      '& + .MuiSwitch-track': {
        backgroundColor: trackcolor,
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 10,
    height: 10,
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

  // Responsive Design
  [theme.breakpoints.up('md')]: {
    width: 26, // Medium screens
    height: 16,
    '& .MuiSwitch-thumb': {
      width: 12,
      height: 12,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(10px)', // Adjust for smaller track
    },
  },
  [theme.breakpoints.up('lg')]: {
    width: 30, // Default width
    height: 18,
    '& .MuiSwitch-thumb': {
      width: 14, // Default size
      height: 14,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(8px)',
    },
  },
}));

const Predictor: React.FC = () => {
  const [search, setSearch] = useState(60);
  const [open, setOpen] = useState(true);
  const [fileError, setFileError] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB limit

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        '.xlsx',
      ],
      'application/json': ['.json'],
    },

    maxSize: MAX_FILE_SIZE,
    onDrop: (files, rejectedFiles) => {
      setFileError(''); // Reset errors

      if (rejectedFiles.length > 0) {
        setFileError('File is too large! Max size is 5MB.');
        return;
      }

      if (files.length > 0) {
        const file = files[0];

        if (file.size > MAX_FILE_SIZE) {
          setFileError('File exceeds 5MB limit.');
          return;
        }

        setUploadedFile(file); // Store uploaded file
        setOpen(true); // Automatically open modal when file is uploaded
      }
    },
  });
  // When acceptedFiles changes, setOpen to true
  useEffect(() => {
    if (acceptedFiles.length > 0) {
      setOpen(true);
    }
  }, [acceptedFiles]);

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
      width: { md: '90vw', lg: '70vw' },
      maxWidth: '1400px',
      height: '80vh',
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
      <div className="flex items-center justify-between gap-3 ">
        <div className="flex items-center gap-2">
          <p className="lg:text-sm font-medium text-xs text-[#414042] ">
            Select Predictor
          </p>
          <div className="flex lg:w-[300px] md:w-[240px] w-[190px]">
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
          <label className="lg:text-base md:text-sm text-xs text-[#414042] font-primary ">
            Status:{' '}
            <span className="text-green-700 font-semibold ">Active</span>
          </label>
          <DeleteIcon className="w-[20px] h-[20px] stroke-[#E55057] cursor-pointer" />
        </div>
      </div>

      <section className="grid grid-cols-8 gap-6 mt-4 w-full">
        <div className="flex flex-col gap-3 w-full xl:col-span-6 col-span-8">
          <div
            {...getRootProps({
              className:
                'border border-[#E55057] border-dashed rounded-[5px] relative p-4 h-[300px] lg:min-h-[360px]',
            })}
          >
            <input
              id="input"
              type="file"
              className="hidden"
              {...getInputProps()}
            />
            <div className="relative">
              <div
                className={` flex flex-col gap-3 items-center justify-center h-[280px] lg:min-h-[340px]
                `}
              >
                <h2 className="text-[#414042] lg:text-base md:text-sm text-xs font-semibold">
                  Create Predictor
                </h2>
                <div className="flex items-center lg:px-4 px-3 lg:py-1.5 py-1  lg:gap-2 gap-1.5 border  border-[#E55057] rounded-[5px]">
                  <FileIcon
                    className={`md:w-[18px] w-[16px] md:h-[18px] h-[16px] fill-predictor`}
                  />
                  <label htmlFor="input" className="">
                    <p className="text-predictor lg:text-base md:text-sm text-xs font-primary font-semibold">
                      Choose File
                    </p>
                  </label>
                </div>
                <p className="text-[#414042] font-primary lg:text-sm text-xs font-light">
                  or drag and drop a .csv, .xlsv, .json file here to upload
                </p>
                {fileError && (
                  <p className="text-red-500 text-sm mt-2">{fileError}</p>
                )}
              </div>

              {/* {files.length > 0 && (
                <aside className="absolute bottom-2 -right-1">
                  <button className="bg-predictor lg:py-2 py-1.5 lg:px-6 px-5 md:text-sm text-xs rounded-lg text-white font-primary flex justify-center items-center gap-2 whitespace-nowrap">
                    <PenIcon
                      className={`md:w-[22px] w-[20px] md:h-[22px] h-[20px] fill-white`}
                    />
                    Generate
                  </button>
                </aside>
              )} */}
            </div>
          </div>

          {files.length > 0 && (
            <Fragment>
              <h2 className="text-[#414042] lg:text-[20px] text-[18px] font-primary font-semibold">
                Input
              </h2>
              <div className="border border-[#E55057] border-dashed rounded-[5px] relative">
                <div className="flex items-center gap-3 overflow-hidden w-full  h-[220px] lg:min-h-[300px]">
                  <div className="flex flex-col gap-3 overflow-y-auto w-full h-[210px] lg:h-[280px] p-2 custom-scrollbar">
                    {files?.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 md:text-sm text-xs text-[#414042] lg:p-2 p-1 w-full border rounded-[10px]"
                      >
                        <input
                          type="text"
                          className="outline-none border-none placeholder:text-gray-500 bg-transparent p-1 w-full"
                          placeholder='Column "A"'
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-predictor lg:py-2 py-1.5 lg:px-6 px-5 md:text-sm text-xs rounded-lg text-white font-primary flex justify-center items-center gap-2 whitespace-nowrap">
                  <PenIcon
                    className={`md:w-[22px] w-[20px] md:h-[22px] h-[20px] fill-white`}
                  />
                  Generate
                </button>
              </div>
            </Fragment>
          )}
        </div>
        <aside className="xl:col-span-2 col-span-8">
          {/* <h3 className="lg:text-base md:text-sm text-xs font-semibold text-[#414042] mb-2 font-primary">
            File Formate
          </h3>

          <div className="flex w-full">
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
          </div> */}

          {/** File Guidelines */}
          <div className="">
            <h3 className="lg:text-base md:text-sm text-xs font-semibold text-[#414042]">
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
                  className="flex items-start gap-2 md:text-sm text-xs  text-[#414042]"
                >
                  <span className=" text-gray-500">+</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/** File Preparation Tips */}
          <div className="my-5">
            <h3 className="lg:text-base md:text-sm text-xs  font-medium text-[#414042] ">
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
                  className="flex items-start gap-2 md:text-sm text-xs text-[#414042]"
                >
                  <span className="  text-[#414042]">+</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {files.length > 0 && (
            <div className="flex flex-col space-y-6">
              <h3 className="lg:text-base md:text-sm text-xs  font-medium text-[#414042] ">
                File Preparation Tips
              </h3>
              <div>
                <p className="md:text-sm text-xs text-[#414042] font-primary mb-3">
                  Prediction Section:
                </p>
                <button className="p-2 border-[1px] border-predictor rounded-[10px] w-full text-[#414042] font-primary md:text-sm text-xs">
                  Result Value
                </button>
              </div>
              <div>
                <p className="md:text-sm text-xs text-[#414042] font-primary mb-3">
                  Download Section:
                </p>
                <button className="p-2 border-[1px] bg-predictor border-predictor rounded-[10px] w-full text-[#414042] font-primary md:text-sm text-xs">
                  Download
                </button>
              </div>
            </div>
          )}
        </aside>
      </section>

      {/* Create Predictor Modal */}

      {files.length > 0 && (
        <Dialog open={open} onClose={handleClose} fullWidth sx={boxStyles}>
          <DialogContent
            sx={{
              width: { md: '100%' },
              height: '100%',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className="grid grid-cols-7 bg-white rounded-[40px] relative border-l-0 w-full h-full">
              <div className="col-span-5 lg:m-10 m-8 overflow-y-auto no-scrollbar max-h-[80vh]">
                <div className="mb-8">
                  <h2 className="text-[#414042] xl:text-[26px] lg:text-[22px] md:text-[20px] text-base font-primary font-semibold">
                    Configure Your Predictor
                  </h2>
                  <p className="text-[#414042] lg:text-sm text-xs font-light md:font-medium font-primary mt-2">
                    Make sure the file format meets the requirement. It must be
                    .csv, .xlsv, .json
                  </p>
                </div>
                <div>
                  <h3 className="text-[#414042] font-primary text-xs font-bold my-4">
                    {' '}
                    Available Columns Configuration
                  </h3>
                  {/* table */}
                  <div className="grid grid-cols-3 border border-[#0000000D] rounded-[40px] overflow-hidden">
                    {/* Header Row */}
                    <div className="text-[#414042] font-medium font-primary lg:text-sm text-xs lg:py-3 py-2  text-center border-r border-b">
                      Available Columns
                      <Tooltip title="Tooltip Text">
                        <IconButton>
                          <QuestionIcon className="w-[14px] h-[14px] stroke-[#414042]" />
                        </IconButton>
                      </Tooltip>
                    </div>
                    <div className="text-[#414042] font-medium font-primary lg:text-sm text-xs lg:py-3 py-2  text-center border-r border-b">
                      Feature Columns{' '}
                      <Tooltip title="Tooltip Text">
                        <IconButton>
                          <QuestionIcon className="w-[14px] h-[14px] stroke-[#414042]" />
                        </IconButton>
                      </Tooltip>
                    </div>
                    <div className="text-[#414042] font-medium font-primary lg:text-sm text-xs lg:py-3 py-2  text-center border-b">
                      Target Columns{' '}
                      <Tooltip title="Tooltip Text">
                        <IconButton>
                          <QuestionIcon className="w-[14px] h-[14px] stroke-[#414042]" />
                        </IconButton>
                      </Tooltip>
                    </div>

                    {/* Data Rows */}
                    {columns.map((column, index) => (
                      <React.Fragment key={index}>
                        <div className="text-[#414042] font-primary lg:text-sm text-xs lg:py-4 md:py-3 py-2 text-center border-r border-b">
                          {column}
                        </div>
                        <div className="text-[#414042] font-primary lg:text-sm text-xs lg:py-4 md:py-3 py-2 border-r border-b flex justify-center items-center">
                          <HandIcon className="lg:w-[22px] md:w-[18px] w-[16px] lg:h-[22px] md:h-[18px] h-[16px] fill-predictor" />
                        </div>
                        <div className="text-[#414042] font-primary lg:text-sm text-xs lg:py-4 md:py-3 py-2 border-b flex justify-center items-center">
                          <HandIcon className="lg:w-[22px] md:w-[18px] w-[16px] lg:h-[22px] md:h-[18px] h-[16px] fill-predictor" />
                        </div>
                      </React.Fragment>
                    ))}
                    {columns.map((column, index) => (
                      <React.Fragment key={index}>
                        <div className="text-[#414042] font-primary lg:text-sm text-xs lg:py-4 md:py-3 py-2 text-center border-r border-b">
                          {column}
                        </div>
                        <div className="text-[#414042] font-primary lg:text-sm text-xs lg:py-4 md:py-3 py-2 border-r border-b flex justify-center items-center">
                          <HandIcon className="lg:w-[22px] md:w-[18px] w-[16px] lg:h-[22px] md:h-[18px] h-[16px] fill-predictor" />
                        </div>
                        <div className="text-[#414042] font-primary lg:text-sm text-xs lg:py-4 md:py-3 py-2 border-b flex justify-center items-center">
                          <HandIcon className="lg:w-[22px] md:w-[18px] w-[16px] lg:h-[22px] md:h-[18px] h-[16px] fill-predictor" />
                        </div>
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="flex justify-center mt-4">
                    <button className="mt-4 bg-predictor text-white lg:py-2 py-1.5 lg:px-16 md:px-14 px-12 lg:text-sm text-xs font-primary rounded-lg transition">
                      Generate
                    </button>{' '}
                  </div>
                </div>
              </div>

              {/** Advance Settings */}
              <div className="col-span-2 rounded-[40px] border w-full py-2">
                <div className="flex flex-col items-center justify-center mt-2 p-4 ">
                  <div className="flex items-center gap-1 py-2 px-3 my-auto bg-[#E55057]/50 w-[90%] rounded-[30px] lg:text-sm text-xs  text-[#414042] font-primary">
                    <SettingsIcon className="md:w-[16px] w-[14px] md:h-[16px] h-[14px] stroke-[#414042]" />
                    Advance Settings
                  </div>

                  {/**  Settings Settings */}
                  <div className="flex flex-col mt-4 w-[90%]">
                    <h2 className="lg:text-base text-sm  font-primary text-[#414042]">
                      Search Parameter{' '}
                      <Tooltip title="Tooltip Text">
                        <IconButton>
                          <QuestionIcon className="w-[14px] h-[14px] stroke-[#414042]" />
                        </IconButton>
                      </Tooltip>
                    </h2>
                    <div>
                      <label className="md:text-xs text-[10px] text-predictor font-primary flex justify-end -mb-3">
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
                          '& .MuiSlider-thumb': {
                            backgroundColor: '#E55057',
                            width: { xs: 14, md: 16 },
                            height: { xs: 14, md: 16 },
                          }, // Thumb color
                          '& .MuiSlider-track': { backgroundColor: '#E55057' }, // Track (filled part)
                          '& .MuiSlider-rail': { backgroundColor: '#E5505733' }, // Rail (unfilled part)
                        }}
                      />
                    </div>
                  </div>

                  <div className="line h-[0.5px] w-[90%] bg-gradient-to-r from-predictor to-transparent my-4"></div>

                  {/**  Settings Settings */}
                  <div className="flex flex-col w-[90%]">
                    <h2 className="lg:text-base text-sm  font-primary text-[#414042]">
                      Additional Configuration{' '}
                      <Tooltip title="Tooltip Text">
                        <IconButton>
                          <QuestionIcon className="w-[14px] h-[14px] stroke-[#414042]" />
                        </IconButton>
                      </Tooltip>
                    </h2>
                    <div className="flex flex-col gap-3 my-2">
                      <div className="flex justify-between">
                        <p className="lg:text-sm text-xs font-light text-[#414042] font-primary ">
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
                        <p className="lg:text-sm text-xs font-light text-[#414042] font-primary ">
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
                        <p className="lg:text-sm text-xs font-light text-[#414042] font-primary ">
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

                  <div className="line h-[0.5px] w-[90%] bg-gradient-to-r from-predictor to-transparent my-4"></div>

                  {/**  Settings Settings */}
                  <div className="flex flex-col w-[90%]">
                    <h2 className="lg:text-lg text-sm font-primary text-[#414042] mb-2">
                      Training Details{' '}
                      <Tooltip title="Tooltip Text">
                        <IconButton>
                          <QuestionIcon className="w-[14px] h-[14px] stroke-[#414042]" />
                        </IconButton>
                      </Tooltip>
                    </h2>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <p className="lg:text-sm text-xs font-light text-[#414042] font-primary ">
                          Estimated Time
                        </p>
                        <label className="lg:text-sm text-xs font-light text-predictor font-primary flex justify-end -mb-2">
                          3 minutes
                        </label>
                      </div>
                      <div className="flex justify-between">
                        <p className="lg:text-sm text-xs font-light text-[#414042] font-primary ">
                          Estimated Price
                        </p>
                        <label className="lg:text-sm text-xs font-light text-predictor font-primary flex justify-end -mb-2">
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
      )}
    </Fragment>
  );
};

export default Predictor;
