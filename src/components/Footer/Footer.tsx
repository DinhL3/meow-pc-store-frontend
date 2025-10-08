import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        py: 1,
        px: 1,
        backgroundColor: 'navy.main',
        color: 'white',
        zIndex: 1000,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="white" align="center">
          🚧 This website is currently under construction. We apologize for any
          missing features or functionality. Thank you for your patience!
        </Typography>
      </Container>
    </Box>
  );
}
