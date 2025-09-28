import React, { useEffect } from 'react';
import {
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  CircularProgress,
  Alert,
  Box,
} from '@mui/material';

function Root() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '94vh',
          display: 'flex',
          alignItems: 'center',
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dlhzbr2to/image/upload/v1759077624/hero_drfjce.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Stack
            spacing={2}
            sx={{
              textAlign: 'center',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
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
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
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
                justifyContent: 'center',
                alignItems: 'center',
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
                    color: 'primary.main',
                    borderColor: 'primary.main',
                  },
                }}
              >
                Order a PC to your liking
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Root;
