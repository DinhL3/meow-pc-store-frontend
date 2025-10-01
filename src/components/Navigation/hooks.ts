import { useMediaQuery, useTheme } from '@mui/material';
import { BREAKPOINT } from './constants';

export function useIsMobile(): boolean {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(BREAKPOINT));
}
