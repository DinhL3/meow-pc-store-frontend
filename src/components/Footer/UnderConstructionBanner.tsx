import { Alert, AlertTitle, Collapse } from '@mui/material';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function UnderConstructionBanner() {
  const { t } = useTranslation();
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
        <AlertTitle>{t('banner.title')}</AlertTitle>
        {t('banner.message')}
      </Alert>
    </Collapse>
  );
}
