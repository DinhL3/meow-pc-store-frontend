import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Stack, Typography, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaTiktok, FaYoutube } from 'react-icons/fa';

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
        backgroundSize: {
          xs: 'cover',
          md: 'cover',
        },
        backgroundPosition: {
          xs: 'center',
          md: 'center',
        },
        backgroundRepeat: {
          xs: 'no-repeat',
          md: 'no-repeat',
        },
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
            textAlign: {
              xs: 'center',
              md: 'left',
            },
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
              fontSize: {
                xs: '2.5rem',
                sm: '3rem',
                md: '4rem',
              },
            }}
          >
            {t('hero.title')}
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              fontWeight: 'normal',
              fontSize: {
                xs: '1.1rem',
                sm: '1.3rem',
                md: '1.5rem',
              },
            }}
          >
            {t('hero.subtitle')} <br />
            {t('hero.subtitleLine2')}
          </Typography>

          <Stack
            direction={{
              xs: 'column',
              md: 'row',
            }}
            spacing={2}
            sx={{
              alignItems: 'center',
              justifyContent: {
                xs: 'center',
                md: 'flex-start',
              },
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
                fontSize: {
                  xs: '1rem',
                  md: '1.1rem',
                },
              }}
            >
              {t('hero.browsePCsButton')}
            </Button>

            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontSize: {
                  xs: '1rem',
                  md: '1.1rem',
                },
                fontWeight: 400,
                display: {
                  xs: 'none',
                  md: 'block',
                },
              }}
            >
              {t('hero.or')}
            </Typography>

            <Button
              component={Link}
              to={'/custom-build'}
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'navy.main',
                textTransform: 'none',
                fontWeight: 400,
                fontSize: {
                  xs: '1rem',
                  md: '1.1rem',
                },
              }}
            >
              {t('hero.buildPCButton')}
            </Button>
          </Stack>

          {/* Social Media Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: {
                xs: 'center',
                md: 'flex-start',
              },
              gap: 1.5,
              mt: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.95rem',
              }}
            >
              {t('hero.watchVideos')}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 1.5,
              }}
            >
              <IconButton
                component="a"
                href="https://www.tiktok.com/@meowpc.fi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
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
                <FaTiktok />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.youtube.com/@meowpcfi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  width: 48,
                  height: 48,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#FF0000',
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <FaYoutube />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
