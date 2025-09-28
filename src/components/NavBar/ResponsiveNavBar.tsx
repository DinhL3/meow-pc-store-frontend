import { useState, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Button,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';

import logoImage from '../../assets/new-logo-sm.png';

// Constants
const LOGO_HEIGHT = {
  mobile: '48px',
  desktop: '52px',
} as const;

const BREAKPOINT = 'md';

const PAGES = [
  { label: 'Buy PC', path: '/buy-pc' },
  { label: 'Customize your own', path: '/custom-order' },
  { label: 'About', path: '/about' },
] as const;

// Types
interface LogoProps {
  isMobile: boolean;
  onNavigate: (path: string) => void;
}

interface MobileNavProps {
  pages: typeof PAGES;
  anchorEl: HTMLElement | null;
  onOpenMenu: (event: React.MouseEvent<HTMLElement>) => void;
  onCloseMenu: () => void;
  onNavigate: (path: string) => void;
}

interface DesktopNavProps {
  pages: typeof PAGES;
}

// Custom hook
function useIsMobile(): boolean {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(BREAKPOINT));
}

// Sub-components
const Logo = ({ isMobile, onNavigate }: LogoProps) => {
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

const MobileNav = ({
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
        color="primary"
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

const DesktopNav = ({ pages }: DesktopNavProps) => (
  <Box sx={{ display: 'flex', gap: 1 }}>
    {pages.map((page) => (
      <Button
        key={page.path}
        component={Link}
        to={page.path}
        sx={{
          color: 'primary.main',
          textDecoration: 'none',
          textTransform: 'none',
          fontSize: '1rem',
          '&:hover': {
            color: 'primary.dark',
            backgroundColor: 'transparent',
          },
        }}
      >
        {page.label}
      </Button>
    ))}
  </Box>
);

// Main component
function ResponsiveNavBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const isMobile = useIsMobile();

  // Memoized handlers
  const handleOpenNavMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    },
    []
  );

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  const handleNavigation = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  // Memoized layout components
  const mobileLayout = useMemo(
    () => (
      <>
        <Logo isMobile={isMobile} onNavigate={handleNavigation} />
        <Box sx={{ flexGrow: 1 }} />
        <MobileNav
          pages={PAGES}
          anchorEl={anchorElNav}
          onOpenMenu={handleOpenNavMenu}
          onCloseMenu={handleCloseNavMenu}
          onNavigate={handleNavigation}
        />
      </>
    ),
    [
      anchorElNav,
      handleNavigation,
      handleOpenNavMenu,
      handleCloseNavMenu,
      isMobile,
    ]
  );

  const desktopLayout = useMemo(
    () => (
      <>
        <Logo isMobile={isMobile} onNavigate={handleNavigation} />
        <Box sx={{ flexGrow: 1 }} />
        <DesktopNav pages={PAGES} />
      </>
    ),
    [handleNavigation, isMobile]
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, sm: 64 } }}>
          {isMobile ? mobileLayout : desktopLayout}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNavBar;
