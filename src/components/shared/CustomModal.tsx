import { type ReactNode } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 500 },
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
} as const;

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  maxWidth?: number | string;
}

export function CustomModal({
  open,
  onClose,
  title,
  children,
  maxWidth = 500,
}: CustomModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{ ...style, width: { xs: '90%', sm: maxWidth } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          {title && (
            <Typography
              id="modal-title"
              variant="h6"
              component="h2"
              color="navy.main"
            >
              {title}
            </Typography>
          )}
          <IconButton onClick={onClose} sx={{ ml: 'auto' }} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box id="modal-description">{children}</Box>
      </Box>
    </Modal>
  );
}
