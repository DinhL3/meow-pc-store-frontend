import { useState, useCallback } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Language } from '@mui/icons-material';
import { LANGUAGES } from './constants';
import type { LanguagePickerProps } from './types';

export const LanguagePicker = ({ isMobile = false }: LanguagePickerProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedLang, setSelectedLang] = useState('en');

  const handleOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLanguageChange = useCallback(
    (code: string) => {
      setSelectedLang(code);
      // Add your i18n language change logic here
      handleClose();
    },
    [handleClose]
  );

  const currentLanguageLabel = isMobile
    ? selectedLang.toUpperCase()
    : LANGUAGES.find((lang) => lang.code === selectedLang)?.label?.toString();

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          color: 'white',
          textTransform: 'none',
          minWidth: 'auto',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 600,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
        aria-label="Select language"
        startIcon={<Language />}
      >
        {currentLanguageLabel}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            selected={selectedLang === lang.code}
          >
            {lang.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
