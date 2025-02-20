/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { FileWithPath, useDropzone } from 'react-dropzone';
import QuestionIcon from '../components/Icons/QuestionIcon';
import * as XLSX from 'xlsx';

// custom switch

const CustomSwitch = styled(Switch)<{
  trackcolor?: string;
  switchcolor?: string;
}>(({ trackcolor = '#E55057', switchcolor = '#fff' }) => ({
  width: 26, // Average size for all screens
  height: 16,
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

// box mui
const boxStyles = {
  '& .MuiPaper-root': {
    width: { md: '90vw', lg: '70vw' },
    maxWidth: '1400px',
    height: '80vh',
    borderRadius: '40px',
    overflow: 'hidden',
  },
};

const Predictor: React.FC = () => {
  const [entries, setEntries] = React.useState(false);
  const [outliers, setOutliers] = React.useState(false);
  const [others, setOthers] = React.useState(false);
  const [search, setSearch] = useState(60);
  const [open, setOpen] = useState(true);
  const [hasRun, setHasRun] = useState(false);
  const [selectedPredictor, setSelectedPredictor] = useState<OptionType | null>(
    null
  );
  const [predictorName, setPredictorName] = useState('');
  const [columns, setColumns] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPath[]>([]);
  const [prevFiles, setPrevFiles] = useState<FileWithPath[]>([]);
  const [fileError, setFileError] = useState('');

  // File Upload features
  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB Limit

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) processFile(file);
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (!e.target?.result) return;

      const data = new Uint8Array(e.target.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetName = workbook.SheetNames[0];
      const sheet = XLSX.utils.sheet_to_json<string[]>(
        workbook.Sheets[sheetName],
        {
          header: 1,
        }
      );

      if (sheet.length > 0) {
        setColumns(sheet[0] as string[]);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  // Dropzone Functionality

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        '.xlsx',
      ],
    },
    maxSize: MAX_FILE_SIZE,
    noKeyboard: true, // Prevent "Enter" from reopening

    onDrop: (files) => {
      setFileError(''); // Reset error state

      if (files.length === 0) {
        setUploadedFiles(prevFiles);
        return;
      }

      const newFiles = files.filter(
        (file) => !uploadedFiles.some((prevFile) => prevFile.name === file.name)
      );

      if (newFiles.length > 0) {
        setUploadedFiles((prev) => [...prev, ...newFiles]); // Append new files
        setPrevFiles([...uploadedFiles, ...newFiles]); // Backup previous files
        processFile(newFiles[0]);
        setHasRun(true);
      }

      setOpen(true);
    },
  });

  // handle switches

  const handleEntries = (): void => {
    setEntries((prev) => !prev);
  };

  const handleOutliers = (): void => {
    setOutliers((prev) => !prev);
  };

  const handleOthers = (): void => {
    setOthers((prev) => !prev);
  };

  const handlePredictorChange = (selected: OptionType | null) => {
    setSelectedPredictor(selected);
  };

  const handleSearch = (_event: Event, newValue: number | number[]) => {
    setSearch(newValue as number);
  };

  const handleClose = (): void => setOpen(false);

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
              value={selectedPredictor}
              onChange={handlePredictorChange}
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
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
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
                <label htmlFor="input" className="">
                  <button className="flex items-center lg:px-4 px-3 lg:py-1.5 py-1  lg:gap-2 gap-1.5 border  border-[#E55057] rounded-[5px] cursor-pointer">
                    <FileIcon
                      className={`md:w-[18px] w-[16px] md:h-[18px] h-[16px] fill-predictor`}
                    />
                    <p className="text-predictor lg:text-base md:text-sm text-xs font-primary font-semibold">
                      Choose File
                    </p>
                  </button>
                </label>
                <p className="text-[#414042] font-primary lg:text-sm text-xs font-light">
                  or drag and drop a .csv, .xlsv, .json file here to upload
                </p>
                {fileError && (
                  <p className="text-red-500 text-sm mt-2">{fileError}</p>
                )}
              </div>
            </div>
          </div>

          {selectedPredictor && (
            <Fragment>
              <h2 className="text-[#414042] lg:text-[20px] text-[18px] font-primary font-semibold">
                Input
              </h2>
              <div className="border border-[#E55057] border-dashed rounded-[5px] relative">
                <div className="flex items-center gap-3 overflow-hidden w-full  h-[220px] lg:min-h-[300px]">
                  <div className="flex flex-col gap-3 overflow-y-auto w-full h-[210px] lg:h-[280px] p-2 custom-scrollbar">
                    {Array.from({ length: 10 }).map((_, index) => (
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

          {selectedPredictor && (
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

      {uploadedFiles.length > 0 && (
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
            <div className="grid grid-cols-7 bg-white rounded-[40px] relative border-l-0 w-full h-full  lg:p-4 p-3">
              <div className="col-span-5 lg:mx-10 mx-8 lg:py-6 py-4 overflow-y-auto no-scrollbar max-h-[80vh]">
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
                      <Tooltip title="Tooltip Text" placement="top">
                        <IconButton>
                          <QuestionIcon className="w-[14px] h-[14px] stroke-[#414042]" />
                        </IconButton>
                      </Tooltip>
                    </div>
                    <div className="text-[#414042] font-medium font-primary lg:text-sm text-xs lg:py-3 py-2  text-center border-r border-b">
                      Feature Columns{' '}
                      <Tooltip title="Tooltip Text" placement="top">
                        <IconButton>
                          <QuestionIcon className="w-[14px] h-[14px] stroke-[#414042]" />
                        </IconButton>
                      </Tooltip>
                    </div>
                    <div className="text-[#414042] font-medium font-primary lg:text-sm text-xs lg:py-3 py-2  text-center border-b">
                      Target Columns{' '}
                      <Tooltip title="Tooltip Text" placement="top">
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
                </div>
              </div>

              {/** Advance Settings */}
              <div className="col-span-2 rounded-[40px] border w-full py-2">
                <div className="flex flex-col items-center justify-center mt-2 p-4 ">
                  <div className="flex items-center gap-1 py-2 px-3 my-auto bg-[#E55057]/50 w-full rounded-[30px] lg:text-sm text-xs  text-[#414042] font-primary">
                    <SettingsIcon className="md:w-[16px] w-[14px] md:h-[16px] h-[14px] stroke-[#414042]" />
                    Advanced Settings
                  </div>

                  {/**  Settings Settings */}
                  <div className="flex flex-col mt-4 w-full">
                    <input
                      type="text"
                      placeholder="Type predictor name"
                      className=" text-xs placeholder:text-gray-300 text-gray-500 font-primary py-2 px-3 border outline-none rounded-[30px] mb-2"
                      value={predictorName}
                      onChange={(e) => setPredictorName(e.target.value)}
                    />
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

                  <div className="line min-h-[0.5px] w-full bg-gradient-to-r from-predictor to-transparent my-3"></div>

                  {/**  Settings Settings */}
                  <div className="flex flex-col w-full">
                    <h2 className="lg:text-base text-sm font-primary text-[#414042] mb-1">
                      Additional Configuration
                      <Tooltip title="Tooltip Text" placement="top">
                        <IconButton>
                          <QuestionIcon className="w-[14px] h-[14px] stroke-[#414042]" />
                        </IconButton>
                      </Tooltip>
                    </h2>
                    <div className="flex flex-col gap-1 my-1">
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

                  <div className="flex line min-h-[1px] w-full bg-gradient-to-r from-predictor to-transparent my-3"></div>

                  {/**  Settings Settings */}
                  <div className="flex flex-col w-full">
                    <h2 className="lg:text-base text-sm font-primary text-[#414042] mb-1">
                      Training Details{' '}
                      <Tooltip title="Tooltip Text" placement="top">
                        <IconButton>
                          <QuestionIcon className="w-[14px] h-[14px] stroke-[#414042]" />
                        </IconButton>
                      </Tooltip>
                    </h2>
                    <div className="flex flex-col gap-1">
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

                  <div className="flex justify-center mt-4 w-full">
                    <button className="mt-4 bg-predictor text-white lg:py-2 py-1.5 lg:px-16 md:px-14 px-12 lg:text-sm text-xs font-primary rounded-[30px] transition w-full">
                      Generate
                    </button>{' '}
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
