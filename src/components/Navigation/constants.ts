export const LOGO_HEIGHT = {
  mobile: '72px',
  desktop: '80px',
} as const;

export const BREAKPOINT = 'md';

export const PAGES = [
  { key: 'browsePCs', path: '/products' },
  { key: 'buildYourPC', path: '/custom-build' },
  { key: 'about', path: '/about' },
] as const;

export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fi', label: 'Suomi' },
] as const;
