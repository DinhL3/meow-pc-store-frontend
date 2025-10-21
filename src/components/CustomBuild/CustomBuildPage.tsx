import {
  Container,
  Typography,
  Box,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FaSignalMessenger } from 'react-icons/fa6';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function CustomBuildPage() {
  const { t } = useTranslation();

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
          {t('customBuild.title')}
        </Typography>

        <Stack spacing={3} sx={{ mt: 4 }}>
          <Typography variant="body1" color="navy.main">
            {t('customBuild.intro')}
          </Typography>

          <Typography variant="body1" color="navy.main">
            {t('customBuild.callToAction')}
          </Typography>

          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              color="navy.main"
              gutterBottom
            >
              {t('customBuild.whatYouGet')}
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleIcon sx={{ color: 'oceanBlue.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={t('customBuild.benefit1')}
                  sx={{ color: 'navy.main' }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleIcon sx={{ color: 'oceanBlue.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={t('customBuild.benefit2')}
                  sx={{ color: 'navy.main' }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleIcon sx={{ color: 'oceanBlue.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={t('customBuild.benefit3')}
                  sx={{ color: 'navy.main' }}
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleIcon sx={{ color: 'oceanBlue.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={t('customBuild.benefit4')}
                  sx={{ color: 'navy.main' }}
                />
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
              {t('customBuild.contactTitle')}
              <br />
              {t('customBuild.availableOn')}
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <WhatsAppIcon sx={{ color: '#25d366', fontSize: 28 }} />
                <Typography variant="body1" color="navy">
                  WhatsApp
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <TelegramIcon sx={{ color: '#0088cc', fontSize: 28 }} />
                <Typography variant="body1" color="navy">
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
                <Typography variant="body1" color="navy">
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
                  <strong>{t('customBuild.email')}</strong>{' '}
                  <Link
                    href="mailto:contact@meowpc.fi"
                    sx={{
                      color: 'oceanBlue.main',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    contact@meowpc.fi
                  </Link>
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Typography variant="body2" color="oceanBlue.main" sx={{ pt: 1 }}>
            {t('customBuild.availability')}
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
