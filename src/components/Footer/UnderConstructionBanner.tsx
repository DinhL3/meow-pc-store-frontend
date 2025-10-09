import { Alert, AlertTitle, Collapse } from '@mui/material';
import { useState, useEffect } from 'react';

export default function UnderConstructionBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the banner
    const dismissed = localStorage.getItem('constructionBannerDismissed');
    if (!dismissed) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('constructionBannerDismissed', 'true');
  };

  return (
    <Collapse in={open}>
      <Alert
        severity="info"
        onClose={handleClose}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: 0,
          zIndex: 1000,
          '& .MuiAlert-message': {
            width: '100%',
          },
        }}
      >
        <AlertTitle>Website Under Construction 🚧</AlertTitle>
        This website is currently under construction by the company's best (and
        only) web developer, me. I apologize for any missing features or
        functionality. Thank you for your patience!
      </Alert>
    </Collapse>
  );
}
