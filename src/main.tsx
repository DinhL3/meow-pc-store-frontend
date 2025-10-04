import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import './i18n/config.js';

import './index.css';

import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import '@fontsource/Inter/100.css';
import '@fontsource/Inter/200.css';
import '@fontsource/Inter/300.css';
import '@fontsource/Inter/400.css';
import '@fontsource/Inter/500.css';
import '@fontsource/Inter/600.css';
import '@fontsource/Inter/700.css';
import '@fontsource/Inter/800.css';
import '@fontsource/Inter/900.css';

import Layout from './Layout.tsx';
import About from './routes/about.tsx';
import Error from './routes/error.tsx';
import Root from './routes/root.tsx';
import Products from './routes/products.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'products',
        element: <Products />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
