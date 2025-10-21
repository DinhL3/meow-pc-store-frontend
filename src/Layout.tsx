import { Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import ResponsiveNavBar from './components/Navigation/ResponsiveNavBar';
import UnderConstructionBanner from './components/Footer/UnderConstructionBanner';
import Footer from './components/Footer/Footer';

function Layout() {
  const location = useLocation();
  const isRootRoute = location.pathname === '/';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures full viewport height
      }}
    >
      <ResponsiveNavBar />
      <UnderConstructionBanner />
      <Box
        component="main"
        sx={{
          flex: '1 0 auto', // This grows to fill available space and prevents shrinking
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Outlet />
      </Box>
      {!isRootRoute && <Footer />}
    </Box>
  );
}

export default Layout;
