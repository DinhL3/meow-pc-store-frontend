import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Stack, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

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
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
