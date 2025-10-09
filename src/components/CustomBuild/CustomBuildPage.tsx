import {
  Container,
  Typography,
  Box,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FaSignalMessenger } from 'react-icons/fa6';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function CustomBuildPage() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 3, mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          component="h1"
          textAlign="center"
          color="navy.main"
          gutterBottom
        >
          Get the exact PC you want
        </Typography>

        <Stack spacing={3} sx={{ mt: 4 }}>
          <Typography variant="body1" color="navy.main">
            Whether you have a clear vision or just a rough idea, I'm here to
            help. Tell me about your needs: are you looking for silky-smooth
            1440p gaming at Ultra settings, competitive esports performance, or
            a workstation for video editing? Want RGB lights that shine, or a
            clean stealth build? Prefer a compact PC to fit on your desk, or a
            full tower with many expansion slots?
          </Typography>

          <Typography variant="body1" color="navy.main">
            Send me a message and let's have a chat about what you're looking
            for.
          </Typography>

          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              color="navy.main"
              gutterBottom
            >
              What you get:
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleIcon sx={{ color: 'oceanBlue.main' }} />
                </ListItemIcon>
                <ListItemText primary="Your PC built and ready within a week" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleIcon sx={{ color: 'oceanBlue.main' }} />
                </ListItemIcon>
                <ListItemText primary="Windows 11 Pro installed and activated" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleIcon sx={{ color: 'oceanBlue.main' }} />
                </ListItemIcon>
                <ListItemText primary="Full benchmark testing to ensure peak performance" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleIcon sx={{ color: 'oceanBlue.main' }} />
                </ListItemIcon>
                <ListItemText primary="All you have to do is pick it up and start using it" />
              </ListItem>
            </List>
          </Box>

          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              color="navy.main"
              gutterBottom
            >
              Send a message to +358408589471
              <br />
              I'm available on:
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <WhatsAppIcon sx={{ color: '#25d366', fontSize: 28 }} />
                <Typography variant="body1" color="navy.main">
                  WhatsApp
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <TelegramIcon sx={{ color: '#0088cc', fontSize: 28 }} />
                <Typography variant="body1" color="navy.main">
                  Telegram
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3b45fd',
                  }}
                >
                  <FaSignalMessenger size={28} />
                </Box>
                <Typography variant="body1" color="navy.main">
                  Signal
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  pt: 1,
                  borderTop: '1px solid',
                  borderColor: 'powderBlue.main',
                }}
              >
                <EmailIcon sx={{ color: 'oceanBlue.main', fontSize: 28 }} />
                <Typography variant="body1" color="navy.main">
                  <strong>Email:</strong> contact@meowpc.fi
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Typography variant="body2" color="oceanBlue.main" sx={{ pt: 1 }}>
            ⏰ I am available almost 24/7 and will try to reply as soon as
            possible!
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
