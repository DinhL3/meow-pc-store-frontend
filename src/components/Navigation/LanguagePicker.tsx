import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { Language } from '@mui/icons-material';
import { LANGUAGES } from './constants';
import type { LanguagePickerProps } from './types';

export const LanguagePicker = ({ isMobile = false }: LanguagePickerProps) => {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLanguageChange = useCallback(
    (code: string) => {
      i18n.changeLanguage(code);
      handleClose();
    },
    [i18n, handleClose]
  );

  const currentLanguageLabel = isMobile
    ? i18n.language.toUpperCase()
    : LANGUAGES.find((lang) => lang.code === i18n.language)?.label;

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
          fontWeight: 500,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
        aria-label={t('language.select')}
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
            selected={i18n.language === lang.code}
          >
            <Typography color="navy" component="span">
              {lang.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
