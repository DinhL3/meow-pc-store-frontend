// src/components/Navigation/Navigation.tsx

import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import type { MobileNavProps, DesktopNavProps } from './types';

export const MobileNav = ({
  pages,
  anchorEl,
  onOpenMenu,
  onCloseMenu,
  onNavigate,
}: MobileNavProps) => {
  const handleMenuItemClick = useCallback(
    (path: string) => {
      onCloseMenu();
      onNavigate(path);
    },
    [onCloseMenu, onNavigate]
  );

  return (
    <>
      <IconButton
        size="large"
        aria-label="Open navigation menu"
        aria-controls="mobile-menu"
        aria-haspopup="true"
        onClick={onOpenMenu}
        sx={{ color: 'white' }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={onCloseMenu}
      >
        {pages.map((page) => (
          <MenuItem
            key={page.path}
            onClick={() => handleMenuItemClick(page.path)}
          >
            <Typography component="span">{page.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export const DesktopNav = ({ pages }: DesktopNavProps) => (
  <Box sx={{ display: 'flex', gap: 1 }}>
    {pages.map((page) => (
      <Button
        key={page.path}
        component={Link}
        to={page.path}
        sx={{
          color: 'white',
          textDecoration: 'none',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        {page.label}
      </Button>
    ))}
  </Box>
);
