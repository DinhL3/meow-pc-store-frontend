import { useState, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container } from '@mui/material';
import { Logo } from './Logo';
import { MobileNav, DesktopNav } from './Navigation';
import { LanguagePicker } from './LanguagePicker';
import { useIsMobile } from './hooks';
import { PAGES } from './constants';

function ResponsiveNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const isMobile = useIsMobile();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  const handleOpenNavMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  const handleNavigation = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  const mobileLayout = useMemo(
    () => (
      <>
        <Box
          sx={{
            width: 48,
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <MobileNav
            pages={PAGES}
            anchorEl={anchorElNav}
            onOpenMenu={handleOpenNavMenu}
            onCloseMenu={handleCloseNavMenu}
            onNavigate={handleNavigation}
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* Compact on non-home, big on root */}
          <Logo isMobile={isMobile} onNavigate={handleNavigation} compact={!isHomePage} />
        </Box>
        <Box
          sx={{
            width: 48,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
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
      isHomePage, // <-- add this
    ]
  );

  const desktopLayout = useMemo(
    () => (
      <>
        {/* compact whenever we're not on home */}
        <Logo isMobile={isMobile} onNavigate={handleNavigation} compact={!isHomePage} />
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <DesktopNav pages={PAGES} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <LanguagePicker />
        </Box>
      </>
    ),
    [handleNavigation, isHomePage, isMobile]
  );

  return (
    <AppBar
      position={isHomePage ? 'fixed' : 'sticky'}
      sx={{
        backgroundColor: isHomePage ? 'transparent' : 'navy.main',
        boxShadow: isHomePage ? 'none' : 1,
        zIndex: theme => theme.zIndex.drawer + 1,
        transition: 'background-color 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, sm: 64 } }}>
          {isMobile ? mobileLayout : desktopLayout}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNavBar;
