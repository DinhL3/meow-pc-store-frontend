import React from 'react';
import { Button, Container, Stack, Typography, Box } from '@mui/material';

const HeroSection: React.FC = () => {
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
        minHeight: '94vh',
        display: 'flex',
        alignItems: 'center',
        background: {
          xs: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://res.cloudinary.com/dlhzbr2to/image/upload/v1759146568/hero_drfjce.webp')`,
          sm: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.0) 65%), url('https://res.cloudinary.com/dlhzbr2to/image/upload/v1759147132/hero_right_vr4ep1.webp')`,
        },
        backgroundSize: { xs: 'cover', sm: 'cover' },
        backgroundPosition: { xs: 'center', sm: 'center' },
        backgroundRepeat: { xs: 'no-repeat', sm: 'no-repeat' },
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
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          sx={{
            textAlign: { xs: 'center', sm: 'left' },
            maxWidth: '600px',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
            }}
          >
            MEOW PC STORE
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              fontWeight: 500,
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },

              lineHeight: 1.4,
            }}
          >
            Beautiful, powerful and high-quality PCs at an affordable price
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={{
              mt: 4,
              alignItems: 'center',
              justifyContent: { xs: 'center', sm: 'flex-start' },
            }}
          >
            <Button variant="contained" size="large">
              Browse our PCs
            </Button>

            <Typography
              variant="body1"
              sx={{
                color: 'white',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              or
            </Typography>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.light',
                  borderColor: 'primary.light',
                },
              }}
            >
              Order a PC to your liking
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
