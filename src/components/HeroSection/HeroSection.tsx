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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: {
          xs: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dlhzbr2to/image/upload/v1759146568/hero_drfjce.webp')`,
          md: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.0) 70%), url('https://res.cloudinary.com/dlhzbr2to/image/upload/v1759147132/hero_right_vr4ep1.webp')`,
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
      <Container maxWidth="lg">
        <Stack
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: '600px',
            mx: { xs: 'auto', md: 0 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            }}
          >
            Beautiful PC at an affordable price.
          </Typography>

          <Typography
            variant="h5"
            component="p"
            sx={{
              fontWeight: 'normal',
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
            }}
          >
            Powerful performance, quality parts, built to last. <br />
            Save time, no stress, and get a PC that looks great on your desk.
          </Typography>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            sx={{
              mt: 4,
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'primary.light',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1.1rem',
              }}
            >
              Browse PCs
            </Button>

            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                display: { xs: 'none', md: 'block' },
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
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.light',
                  borderColor: 'primary.light',
                },
              }}
            >
              Build the exact PC you want
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
