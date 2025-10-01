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
import { Menu as MenuIcon, Language } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';

import logoImage from '../../assets/new-logo-sm.png';

// Constants
const LOGO_HEIGHT = {
  mobile: '72px',
  desktop: '80px',
} as const;

const BREAKPOINT = 'md';

const PAGES = [
  { label: 'Browse PCs', path: '/buy-pc' },
  { label: 'Build Your PC', path: '/custom-order' },
  { label: 'About', path: '/about' },
] as const;

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fi', label: 'Suomi' },
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

interface LanguagePickerProps {
  isMobile?: boolean;
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

const DesktopNav = ({ pages }: DesktopNavProps) => (
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

const LanguagePicker = ({ isMobile = false }: LanguagePickerProps) => {
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
        <Box sx={{ width: 48, display: 'flex', justifyContent: 'flex-start' }}>
          <MobileNav
            pages={PAGES}
            anchorEl={anchorElNav}
            onOpenMenu={handleOpenNavMenu}
            onCloseMenu={handleCloseNavMenu}
            onNavigate={handleNavigation}
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Logo isMobile={isMobile} onNavigate={handleNavigation} />
        </Box>
        <Box sx={{ width: 48, display: 'flex', justifyContent: 'flex-end' }}>
          <LanguagePicker isMobile={isMobile} />
        </Box>
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
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <DesktopNav pages={PAGES} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LanguagePicker />
        </Box>
      </>
    ),
    [handleNavigation, isMobile]
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, sm: 64 } }}>
          {isMobile ? mobileLayout : desktopLayout}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNavBar;
