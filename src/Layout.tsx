import { Outlet } from 'react-router-dom';
import ResponsiveNavBar from './components/Navigation/ResponsiveNavBar';
import Footer from './components/Footer/Footer';

function Layout() {
  return (
    <>
      <ResponsiveNavBar />
      <Outlet /> {/* This will render the current route's content */}
      <Footer />
    </>
  );
}

export default Layout;
