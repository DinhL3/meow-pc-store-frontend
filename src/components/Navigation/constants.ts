export const LOGO_HEIGHT = {
  mobile: '72px',
  desktop: '80px',
} as const;

export const BREAKPOINT = 'md';

export const PAGES = [
  { label: 'Browse PCs', path: '/buy-pc' },
  { label: 'Build Your PC', path: '/custom-order' },
  { label: 'About', path: '/about' },
] as const;

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fi', label: 'Suomi' },
] as const;
