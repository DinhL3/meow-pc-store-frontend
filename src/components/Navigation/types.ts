export interface Page {
  label: string;
  path: string;
}

export interface Language {
  code: string;
  label: string;
}

export interface LogoProps {
  isMobile: boolean;
  onNavigate: (path: string) => void;
}

export interface MobileNavProps {
  pages: readonly Page[];
  anchorEl: HTMLElement | null;
  onOpenMenu: (event: React.MouseEvent<HTMLElement>) => void;
  onCloseMenu: () => void;
  onNavigate: (path: string) => void;
}

export interface DesktopNavProps {
  pages: readonly Page[];
}

export interface LanguagePickerProps {
  isMobile?: boolean;
}
