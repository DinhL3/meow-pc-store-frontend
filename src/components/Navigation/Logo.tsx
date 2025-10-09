import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { LOGO_HEIGHT } from './constants';
import type { LogoProps } from './types';

export const Logo = ({ isMobile, onNavigate, compact }: LogoProps) => {
  const { t } = useTranslation();

  const handleLogoClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onNavigate('/');
    },
    [onNavigate]
  );

  const finalHeight = compact
    ? 48
    : isMobile
    ? LOGO_HEIGHT.mobile
    : LOGO_HEIGHT.desktop;

  return (
    <Box
      component={Link}
      to="/"
      onClick={handleLogoClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        my: 0.5,
      }}
    >
      <img
        src="https://res.cloudinary.com/dlhzbr2to/image/upload/v1759780477/logo_cerulean_transparent_s2geby.png"
        alt={t('logo.alt')}
        style={{
          height: finalHeight,
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
          transition: 'height 200ms ease', // smooth shrink/grow
        }}
      />
    </Box>
  );
};
