import React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

const CustomSwitch = styled(Switch)<{
  switchcolor?: string;
  trackcolor?: string;
}>(({ switchcolor = '#1890ff', trackcolor = '#ddd' }) => ({
  width: 26, // Updated width
  height: 16, // Updated height
  padding: 0,
  display: 'flex',
  alignItems: 'center',

  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(10px)', // Adjusted for new size
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: switchcolor,
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 12, // Adjusted for new ratio
    height: 12,
    borderRadius: '50%',
    backgroundColor: '#fff',
    transition: '0.3s',
  },
  '& .MuiSwitch-track': {
    width: '100%',
    height: '100%',
    borderRadius: 16 / 2, // Maintaining the same proportion
    opacity: 1,
    backgroundColor: trackcolor,
  },
}));

interface ToggleButtonProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  switchColor?: string;
  trackColor?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  defaultChecked = false,
  onChange,
  trackColor = '#ddd',
  switchColor = '#1890ff',
}) => {
  const [checked, setChecked] = React.useState(defaultChecked);

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <CustomSwitch
        checked={checked}
        onChange={handleChange}
        trackcolor={trackColor}
        switchcolor={switchColor}
      />
    </Stack>
  );
};

export default ToggleButton;
