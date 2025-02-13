import React, { Fragment, useState } from 'react';
import TopBar from '../components/TopBar';
import ExtenderIcon from '../components/Icons/ExtenderIcon';
import FileIcon from '../components/Icons/FileIcon';
import SettingsIcon from '../components/Icons/SettingsIcon';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Slider,
  Stack,
  styled,
  Switch,
  Typography,
} from '@mui/material';
import ExtenderSelect from '../components/extender/Select';
import ChevronDownIcon from '../components/Icons/ChevronDownIcon';
import PenIcon from '../components/Icons/PenIcon';
import JsonIcon from '../components/Icons/JsonIcon';
import { useDropzone } from 'react-dropzone';

const CustomSwitch = styled(Switch)<{
  trackcolor?: string;
  switchcolor?: string;
}>(({ trackcolor = '#4CB448', switchcolor = '#fff' }) => ({
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

const Extender: React.FC = () => {
  const [rows, setRows] = useState(7);
  const [columns, setColumns] = useState(10);
  const [selected, setSelected] = useState('tabular');
  const [checked, setChecked] = React.useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');

  const handleRows = (_event: Event, newValue: number | number[]) => {
    setRows(newValue as number);
  };

  const handleColumns = (_event: Event, newValue: number | number[]) => {
    setColumns(newValue as number);
  };

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
  };

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        '.xlsx',
      ],
      'application/json': ['.json'],
    },
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE,
    onDrop: (files, rejectedFiles) => {
      setFileError(''); // Reset error state

      if (rejectedFiles.length > 0) {
        setFileError('Invalid file type or size exceeded (Max 5MB).');
        return;
      }

      if (files.length > 0) {
        const file = files[0];

        if (file.size > MAX_FILE_SIZE) {
          setFileError('File exceeds the 5MB limit.');
          return;
        }

        setUploadedFile(file); // Store only the latest uploaded file
      }
    },
  });

  return (
    <Fragment>
      <TopBar containerClassName="justify-between">
        <aside className="flex justify-start items-center gap-3">
          <ExtenderIcon className="fill-[#414042] w-[26px] h-[26px]" />
          <h2 className="text-[26px] font-primary font-medium">The Extender</h2>
        </aside>
      </TopBar>

      <aside className="flex items-center justify-end gap-3">
        <button
          className={`md:py-2 p-1.5 md:px-3 px-2 border ${
            selected === 'tabular'
              ? 'border-extender text-extender'
              : 'border-transparent'
          } text-[#414042] lg:text-base md:text-sm text-xs`}
          onClick={() =>
            setSelected((prev) => (prev === 'tabular' ? '' : 'tabular'))
          }
        >
          Tabular Data
        </button>
      </aside>

      <section className="grid grid-cols-8 gap-6 mt-4 w-full">
        <div className="flex flex-col gap-3 w-full xl:col-span-6 col-span-8">
          <div
            {...getRootProps({
              className:
                'border border-[#4CB448CC] rounded-[5px] relative p-4 h-[300px] lg:min-h-[360px] flex flex-col justify-between',
            })}
          >
            <input
              id="input"
              type="file"
              className="hidden"
              {...getInputProps()}
            />
            <div className="relative flex-grow">
              {!uploadedFile && (
                <div className="flex flex-col gap-3 items-center justify-center h-[280px] lg:min-h-[340px]">
                  <h2 className="text-[#414042] lg:text-base md:text-sm text-xs font-semibold">
                    Upload a File
                  </h2>
                  <button className="flex items-center lg:px-4 px-3 lg:py-1.5 py-1  lg:gap-2 gap-1.5 bg-extender border border-extender rounded-[5px] cursor-pointer">
                    <FileIcon className="md:w-[18px] w-[16px] md:h-[18px] h-[16px] fill-white" />
                    <label htmlFor="input">
                      <p className="text-white lg:text-base md:text-sm text-xs font-primary font-semibold">
                        Choose a File
                      </p>{' '}
                    </label>
                  </button>
                  <p className="text-[#414042] font-primary lg:text-sm text-xs font-light">
                    or drag and drop a .csv, .xlsv, .json file here to upload
                  </p>
                  {fileError && (
                    <p className="text-red-500 text-sm mt-2">{fileError}</p>
                  )}
                </div>
              )}
            </div>

            {uploadedFile && (
              <div className="flex justify-between items-center w-full ">
                <p className="flex items-center text-[#414042] font-primary text-sm font-light">
                  <JsonIcon className="md:w-[30px] w-[26px] md:h-[30px] h-[26px] fill-extender" />
                  The .{uploadedFile.name.split('.').pop()} file has been
                  uploaded to generate result
                </p>
                <button className="bg-extender lg:py-2 py-1.5 lg:px-6 px-5 md:text-sm text-xs rounded-lg text-white font-primary flex justify-center items-center gap-2 whitespace-nowrap">
                  <PenIcon className="md:w-[22px] w-[20px] md:h-[22px] h-[20px] fill-white" />
                  Generate
                </button>
              </div>
            )}
          </div>

          {/* Extender Output */}
          <h2 className="text-[#414042] lg:text-[20px] text-[18px] font-primary font-semibold">
            Output
          </h2>
          <div className=" flex flex-col items-center flex-grow border border-[#4CB448CC] rounded-[5px] justify-center lg:min-h-[200px] min-h-[150px]">
            <img
              src="/logo-icon.png"
              alt="logo"
              className="object-contain lg:w-[70px] w-[60px] lg:h-[70px] h-[60px] pointer-events-none"
            />
            <h3 className="text-[#414042] lg:text-base text-sm font-semibold">
              Not Result Yet
            </h3>
            <p className="text-[#414042] lg:text-sm text-xs font-primary">
              The Generation is being performed
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 col-span-8 xl:col-span-2 mt-4 xl:mt-0">
          <span className="flex items-center justify-start gap-2 text-[#414042]  md:text-[16px] text-sm rounded-[10px] p-2 text-center bg-[#4CB448]/60">
            <SettingsIcon className={`w-[14px] h-[14px] stroke-[#414042]`} />
            Settings
          </span>
          <div className="space-y-2">
            <div>
              <span className="flex items-center justify-between text-sm font-primary text-[#414042]">
                Add to rows
                <label className="p-1 bg-slate-50 rounded-md border lg:px-4 px-3 lg:py-1 py-0.8  lg:text-sm text-xs font-light">
                  {rows}
                </label>
              </span>{' '}
              <Slider
                value={rows}
                max={20}
                min={0}
                onChange={handleRows}
                aria-label="Temperature"
                sx={{
                  color: '#1E647F',
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#1E647F',
                    width: { xs: 14, md: 16 },
                    height: { xs: 14, md: 16 },
                  }, // Thumb color
                  '& .MuiSlider-track': { backgroundColor: '#1E647F' }, // Track (filled part)
                  '& .MuiSlider-rail': { backgroundColor: '#1E647F66' }, // Rail (unfilled part)
                }}
              />
            </div>

            <div>
              <span className="flex items-center justify-between  text-sm font-primary text-[#414042]">
                Add to columns
                <label className="p-1 bg-slate-50 rounded-md border lg:px-4 px-3 lg:py-1 py-0.8  lg:text-sm text-xs font-light">
                  {' '}
                  {columns}
                </label>
              </span>

              <Slider
                value={columns}
                onChange={handleColumns}
                max={20}
                min={0}
                aria-label="Temperature"
                sx={{
                  color: '#A077A8',
                  '& .MuiSlider-thumb': {
                    backgroundColor: '#A077A8',
                    width: { xs: 14, md: 16 },
                    height: { xs: 14, md: 16 },
                  }, // Thumb color
                  '& .MuiSlider-track': { backgroundColor: '#A077A8' }, // Track (filled part)
                  '& .MuiSlider-rail': { backgroundColor: '#A077A866' }, // Rail (unfilled part)
                }}
              />
            </div>
          </div>

          <div className="">
            <p className="text-sm text-[#414042] mb-2 font-primary">
              Output Format
            </p>
            <div className="flex xl:w-full w-[300px]">
              <ExtenderSelect
                options={[
                  {
                    label: 'Predictor',
                    options: [
                      { value: '.csv', label: '.csv' },
                      { value: '.xlsm', label: '.xlsm' },
                      { value: '.json', label: '.json' },
                    ],
                  },
                ]}
                placeholder="No predictor selected"
              />
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <p className="text-sm text-[#414042] font-primary">
              Handle Duplicates
            </p>
            <Stack direction="row" spacing={1} alignItems="center">
              <CustomSwitch checked={checked} onChange={handleChange} />
            </Stack>
          </div>

          <hr />

          <div className="flex justify-between items-center -mt-2 -mx-4">
            <Accordion
              sx={{
                color: '',
                backgroundColor: 'transparent',
                boxShadow: 'none',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ChevronDownIcon
                    className={`w-[18px] h-[18px] stroke-extender`}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  color: '',
                  backgroundColor: 'transparent',
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontFamily: 'BR Candor, sans-serif',
                    color: '#414042',
                    fontSize: '14px',
                  }}
                >
                  Generated Rows Preview
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Extender;
