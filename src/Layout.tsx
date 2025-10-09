import { Outlet } from 'react-router-dom';
import ResponsiveNavBar from './components/Navigation/ResponsiveNavBar';
import UnderConstructionBanner from './components/Footer/UnderConstructionBanner';

function Layout() {
  return (
    <>
      <ResponsiveNavBar />
      <UnderConstructionBanner />
      <Outlet /> {/* This will render the current route's content */}
    </>
  );
}

export default Layout;
