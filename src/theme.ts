import { createTheme } from '@mui/material/styles';
import type { PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    coralRed: PaletteColorOptions;
    cream: PaletteColorOptions;
    powderBlue: PaletteColorOptions;
    oceanBlue: PaletteColorOptions;
    navy: PaletteColorOptions;
  }
  interface PaletteOptions {
    coralRed?: PaletteColorOptions;
    cream?: PaletteColorOptions;
    powderBlue?: PaletteColorOptions;
    oceanBlue?: PaletteColorOptions;
    navy?: PaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    coralRed: {
      main: '#E63946',
      contrastText: '#ffffff',
    },
    cream: {
      main: '#F1FAEE',
      contrastText: '#000000',
    },
    powderBlue: {
      main: '#A8DADC',
      contrastText: '#000000',
    },
    oceanBlue: {
      main: '#457B9D',
      contrastText: '#fff',
    },
    navy: {
      main: '#1D3557',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: '"Work Sans Variable", sans-serif',
    h1: {
      fontFamily: '"Work Sans Variable", sans-serif',
    },
    h2: {
      fontFamily: '"Work Sans Variable", sans-serif',
    },
    h3: {
      fontFamily: '"Work Sans Variable", sans-serif',
    },
    h4: {
      fontFamily: '"Work Sans Variable", sans-serif',
    },
    h5: {
      fontFamily: '"Work Sans Variable", sans-serif',
    },
    h6: {
      fontFamily: '"Work Sans Variable", sans-serif',
    },
    body1: {
      fontFamily: '"Work Sans Variable", sans-serif',
    },
    body2: {
      fontFamily: '"Work Sans Variable", sans-serif',
    },
  },
});

export default theme;
