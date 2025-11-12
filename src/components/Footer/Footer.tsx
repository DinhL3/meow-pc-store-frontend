import { Box, Container, IconButton, Typography, Stack } from '@mui/material';
import { FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'navy.main',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            gap: 3,
          }}
        >
          {/* Company Information */}
          <Stack spacing={0.5} sx={{ color: 'white' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: '1.1rem',
              }}
            >
              Meow PC Store Oy
            </Typography>
            <Typography variant="body2">Tampere, Finland</Typography>
            <Typography variant="body2">Business ID: 3567455-8</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mt: 1,
              }}
            >
              <MdEmail />
              <Typography
                component="a"
                href="mailto:contact@meowpc.fi"
                variant="body2"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                contact@meowpc.fi
              </Typography>
            </Box>
          </Stack>

          {/* Social Media Icons */}
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

            <IconButton
              component="a"
              href="https://www.instagram.com/meowpc.fi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                width: 48,
                height: 48,
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <FaInstagram />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
