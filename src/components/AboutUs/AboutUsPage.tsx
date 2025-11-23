import { Box, Container, Typography, Paper, Avatar } from '@mui/material';
import {
  Schedule,
  LocationOn,
  Pets,
  HandshakeOutlined,
  WavingHand,
  VerifiedUser,
  Recycling,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const AboutUsPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="md">
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              color: 'navy.main',
              fontWeight: 600,
              mb: 1,
            }}
          >
            {t('about.pageTitle')}
          </Typography>
          <Typography variant="h5" color="oceanBlue">
            {t('about.pageSubtitle')}
          </Typography>
        </Box>

        {/* Who I Am Section */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            bgcolor: 'powderBlue.main',
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
            borderRadius: 2,
          }}
        >
          <Avatar
            src="https://res.cloudinary.com/dlhzbr2to/image/upload/v1760983001/dinh-photo_qclgab.webp"
            alt="PC Builder at work"
            sx={{
              width: 180,
              height: 180,
              margin: '0 auto',
            }}
          />
          <Box>
            <Box
              sx={{
                display: 'flex',
                mb: 1,
                gap: 1,
              }}
            >
              <WavingHand
                sx={{
                  fontSize: 32,
                  color: 'navy.main',
                }}
              />
              <Typography variant="h5" component="h2" fontWeight={500} color="navy" gutterBottom>
                {t('about.whoIAm.greeting')}
              </Typography>
            </Box>

            <Typography variant="body1" color="navy">
              {t('about.whoIAm.description')}
            </Typography>
          </Box>
        </Paper>

        {/* Why choose Meow PC Store section */}

        <Paper
          elevation={1}
          sx={{
            p: 4,
            mb: 4,
            bgcolor: 'cream.main',
            borderColor: 'oceanBlue.main',
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: 'navy.main',
              fontWeight: 600,
              mb: 3,
            }}
          >
            {t('about.whyChoose.title')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
              }}
            >
              <Schedule
                sx={{
                  color: 'oceanBlue.main',
                  mt: 0.5,
                }}
              />
              <Box>
                <Typography variant="h6" color="navy" fontWeight={600}>
                  {t('about.whyChoose.saveTime.title')}
                </Typography>
                <Typography variant="body1" color="navy">
                  {t('about.whyChoose.saveTime.description')}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
              }}
            >
              <HandshakeOutlined
                sx={{
                  color: 'oceanBlue.main',
                  mt: 0.5,
                }}
              />
              <Box>
                <Typography variant="h6" color="navy" fontWeight={600}>
                  {t('about.whyChoose.customerFirst.title')}
                </Typography>
                <Typography variant="body1" color="navy">
                  {t('about.whyChoose.customerFirst.description')}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
              }}
            >
              <VerifiedUser
                sx={{
                  color: 'oceanBlue.main',
                  mt: 0.5,
                }}
              />
              <Box>
                <Typography variant="h6" color="navy" fontWeight={600}>
                  {t('about.whyChoose.builtToLast.title')}
                </Typography>
                <Typography variant="body1" color="navy">
                  {t('about.whyChoose.builtToLast.description')}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
              }}
            >
              <Recycling
                sx={{
                  color: 'oceanBlue.main',
                  mt: 0.5,
                }}
              />
              <Box>
                <Typography variant="h6" color="navy" fontWeight={600}>
                  {t('about.whyChoose.sustainability.title')}
                </Typography>
                <Typography variant="body1" color="navy">
                  {t('about.whyChoose.sustainability.description')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Local Advantage */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            bgcolor: 'navy.main',
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
            borderRadius: 2,
          }}
        >
          <Avatar
            src="https://res.cloudinary.com/dlhzbr2to/image/upload/v1763865785/alex-delivery_wyrbsz.webp"
            alt="Next-day premium delivery"
            sx={{
              width: 200,
              height: 200,
              margin: '0 auto',
            }}
          />
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                gap: 1,
              }}
            >
              <LocationOn sx={{ fontSize: 32, color: 'cream.main' }} />
              <Typography variant="h5" color="cream" sx={{ fontWeight: 600 }}>
                {t('about.localAdvantage.title')}
              </Typography>
            </Box>

            <Typography variant="body1" color="cream">
              {t('about.localAdvantage.description')}
            </Typography>
          </Box>
        </Paper>

        {/* The Story Behind the Name */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            gap: 4,
            mb: 6,
            p: 4,
            bgcolor: 'powderBlue.main',
            borderRadius: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
                gap: 1,
              }}
            >
              <Pets
                sx={{
                  fontSize: 32,
                  color: 'navy.main',
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: 'navy.main',
                  fontWeight: 600,
                }}
              >
                {t('about.meowStory.title')}
              </Typography>
            </Box>
            <Typography variant="body1" color="navy">
              {t('about.meowStory.description')}
            </Typography>
            <Typography variant="caption" color="oceanBlue">
              {t('about.meowStory.caption')}
            </Typography>
          </Box>

          <Avatar
            src="https://res.cloudinary.com/dlhzbr2to/image/upload/v1760983493/meo_wzapxi.jpg"
            alt="Meo the rescued kitten"
            sx={{
              width: 200,
              height: 200,
              margin: '0 auto',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
