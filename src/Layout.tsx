import { Outlet } from 'react-router-dom';
import ResponsiveNavBar from './components/Navigation/ResponsiveNavBar';

function Layout() {
  return (
    <>
      <ResponsiveNavBar />
      <Outlet /> {/* This will render the current route's content */}
    </>
  );
}

export default Layout;
