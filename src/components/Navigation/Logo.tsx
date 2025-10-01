import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import logoImage from '../../assets/new-logo-sm.png';
import { LOGO_HEIGHT } from './constants';
import type { LogoProps } from './types';

export const Logo = ({ isMobile, onNavigate }: LogoProps) => {
  const handleLogoClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onNavigate('/');
    },
    [onNavigate]
  );

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
        src={logoImage}
        alt="Company Logo"
        style={{
          height: isMobile ? LOGO_HEIGHT.mobile : LOGO_HEIGHT.desktop,
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </Box>
  );
};
