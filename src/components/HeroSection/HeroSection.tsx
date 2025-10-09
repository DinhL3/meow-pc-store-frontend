import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Container,
  Stack,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';

// TikTok Icon Component (using SVG)
const TikTokIcon: React.FC<{ sx?: any }> = ({ sx }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: '100%', height: '100%' }}
    aria-label="TikTok"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: {
          xs: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dlhzbr2to/image/upload/v1759146568/hero_drfjce.webp')`,
          md: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.30) 40%, rgba(0, 0, 0, 0.0) 65%), url('https://res.cloudinary.com/dlhzbr2to/image/upload/v1759147132/hero_right_vr4ep1.webp')`,
        },
        backgroundSize: { xs: 'cover', md: 'cover' },
        backgroundPosition: { xs: 'center', md: 'center' },
        backgroundRepeat: { xs: 'no-repeat', md: 'no-repeat' },
        color: 'white',
        userSelect: 'none',
        pointerEvents: 'auto',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
        },
      }}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      draggable={false}
    >
      <Container maxWidth="xl">
        <Stack
          spacing={2}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: '800px',
            mx: { xs: 'auto', md: 0 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: '500',
              lineHeight: 1,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            }}
          >
            {t('hero.title')}
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              fontWeight: 'normal',
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            }}
          >
            {t('hero.subtitle')} <br />
            {t('hero.subtitleLine2')}
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            sx={{
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Button
              component={Link}
              to={'/products'}
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'oceanBlue.main',
                fontWeight: 400,
                textTransform: 'none',
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              {t('hero.browsePCsButton')}
            </Button>

            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 400,
                display: { xs: 'none', md: 'block' },
              }}
            >
              {t('hero.or')}
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'navy.main',
                textTransform: 'none',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              {t('hero.buildPCButton')}
            </Button>
          </Stack>

          {/* TikTok Button */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              gap: 1.5,
              mt: 2,
            }}
          >
            <IconButton
              component="a"
              href="https://www.tiktok.com/@meowpc.fi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on TikTok"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                width: 48,
                height: 48,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#000000',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <TikTokIcon sx={{ fontSize: 28 }} />
            </IconButton>

            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.95rem',
              }}
            >
              Follow us on TikTok
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
