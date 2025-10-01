import { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container } from '@mui/material';
import { Logo } from './Logo';
import { MobileNav, DesktopNav } from './Navigation';
import { LanguagePicker } from './LanguagePicker';
import { useIsMobile } from './hooks';
import { PAGES } from './constants';

function ResponsiveNavBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const isMobile = useIsMobile();

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
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, sm: 64 } }}>
          {isMobile ? mobileLayout : desktopLayout}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNavBar;
