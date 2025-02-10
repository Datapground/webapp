import React, { ReactNode } from 'react';
import { Dialog, DialogContent } from '@mui/material';

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: string;
  height?: string;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  children,
  width = '60%',
  height = '80%',
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={false} // Ensures width is controlled via sx
      PaperProps={{
        sx: {
          width,
          height,
          borderRadius: '40px', // Removes rounded corners
          overflow: 'hidden', // Ensures no scrollbars
        },
      }}
    >
      <DialogContent
        sx={{
          width: '100%',
          height: '100%',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
