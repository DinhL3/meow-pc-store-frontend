import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Divider,
  Card,
  CardContent,
  Link,
} from '@mui/material';
import {
  Verified,
  Schedule,
  Build,
  LocationOn,
  Email,
  Pets,
  Security,
  Recycling,
  HandshakeOutlined,
} from '@mui/icons-material';

const AboutUsPage = () => {
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
            About Meow PC Store
          </Typography>
          <Typography variant="h5" color="oceanBlue">
            Stylish PCs crafted with care
          </Typography>
        </Box>

        {/* Who I Am Section */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            bgcolor: 'navy.main',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
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
            <Typography
              variant="h5"
              component="h2"
              fontWeight={500}
              color="cream"
              gutterBottom
            >
              Hi, I'm Dinh
            </Typography>

            <Typography variant="body1" color="cream">
              I'm a software engineer based in Tampere with a deep passion for
              building excellent PCs. It must look good on your desk, perform
              flawlessly, and stand the test of time - something that you are
              proud to own.
            </Typography>
          </Box>
        </Paper>

        {/* <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: 'navy.main',
              fontWeight: 600,
              mb: 4,
              textAlign: 'center',
            }}
          >
            Why choose Meow PC Store?
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
              mb: 4,
            }}
          >
            <Card
              sx={{
                flex: 1,
                bgcolor: 'powderBlue.main',
                boxShadow: 2,
              }}
            >
              <CardContent>
                <Schedule sx={{ fontSize: 40, color: 'navy.main' }} />
                <Typography
                  variant="h6"
                  gutterBottom
                  color="navy"
                  fontWeight={600}
                >
                  Save Massive Time & Hassle
                </Typography>
                <Typography variant="body2" color="navy">
                  Building a PC is an awesome hobby, but it demands hours of
                  research, assembly, software installation, and
                  troubleshooting. Let me handle all of that so you can skip
                  straight to enjoying your new machine.
                </Typography>
              </CardContent>
            </Card>

            <Card
              sx={{
                flex: 1,
                bgcolor: 'powderBlue.main',
                boxShadow: 2,
              }}
            >
              <CardContent>
                <Build sx={{ fontSize: 40, color: 'navy.main' }} />
                <Typography
                  variant="h6"
                  gutterBottom
                  color="navy"
                  fontWeight={600}
                >
                  Expert Craftsmanship
                </Typography>
                <Typography variant="body2" color="navy">
                  With my software engineering background and years of PC
                  building experience, I bring technical precision to every
                  build. Clean cable management, optimal airflow, thorough
                  testing—every detail matters.
                </Typography>
              </CardContent>
            </Card>

            <Card
              sx={{
                flex: 1,
                bgcolor: 'powderBlue.main',
                boxShadow: 2,
              }}
            >
              <CardContent>
                <Verified sx={{ fontSize: 40, color: 'navy.main' }} />
                <Typography
                  variant="h6"
                  gutterBottom
                  color="navy"
                  fontWeight={600}
                >
                  Quality Guaranteed
                </Typography>
                <Typography variant="body2" color="navy">
                  Only genuine, brand-new components from reputable suppliers.
                  No shortcuts, no compromises. Each PC is tested with various
                  benchmark softwares before it reaches you.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box> */}

        {/* My Approach */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            bgcolor: 'white',
            borderLeft: '4px solid',
            borderColor: 'oceanBlue.main',
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ color: 'navy.main', fontWeight: 600, mb: 3 }}
          >
            Why choose Meow PC Store?
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <HandshakeOutlined sx={{ color: 'coralRed.main', mt: 0.5 }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: 'navy.main', fontWeight: 600 }}
                >
                  Customer First
                </Typography>
                <Typography variant="body2">
                  I take time to understand your needs: gaming, content
                  creation, workstation, or all of the above. Your PC should
                  match your goals perfectly.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <HandshakeOutlined sx={{ color: 'coralRed.main', mt: 0.5 }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: 'navy.main', fontWeight: 600 }}
                >
                  Customer First
                </Typography>
                <Typography variant="body2">
                  I take time to understand your needs: gaming, content
                  creation, workstation, or all of the above. Your PC should
                  match your goals perfectly.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Build sx={{ color: 'coralRed.main', mt: 0.5 }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: 'navy.main', fontWeight: 600 }}
                >
                  Premium Components
                </Typography>
                <Typography variant="body2">
                  I source components from trusted suppliers, ensuring
                  authenticity and reliability. Every part is selected for
                  performance, compatibility, and longevity.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Security sx={{ color: 'coralRed.main', mt: 0.5 }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: 'navy.main', fontWeight: 600 }}
                >
                  Thorough Testing
                </Typography>
                <Typography variant="body2">
                  Before delivery, each system runs through stress tests,
                  temperature monitoring, and stability checks. You receive a PC
                  that's ready to perform from day one.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Recycling sx={{ color: 'coralRed.main', mt: 0.5 }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: 'navy.main', fontWeight: 600 }}
                >
                  Built to Last
                </Typography>
                <Typography variant="body2">
                  Sustainability matters. I design builds with upgrade paths in
                  mind, helping reduce e-waste and extending your PC's lifespan
                  for years to come.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Local Advantage */}
        <Paper
          elevation={0}
          sx={{
            bgcolor: 'navy.main',
            color: 'white',
            p: 4,
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
            <LocationOn sx={{ fontSize: 32 }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Proudly Based in Tampere, Finland
            </Typography>
          </Box>
          <Typography variant="body1">
            Serving the Pirkanmaa region with local pickup options available.
            Meet me face-to-face, see your build in person, and support a local
            business. No shipping damage, no waiting, just quality service close
            to home.
          </Typography>
        </Paper>

        {/* Warranty Section */}
        {/* <Paper
          elevation={1}
          sx={{
            p: 4,
            mb: 4,
            bgcolor: 'white',
            borderLeft: '2px solid',
            borderColor: 'coralRed.main',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, gap: 2 }}>
            <Security sx={{ fontSize: 40, color: 'coralRed.main' }} />
            <Typography
              variant="h4"
              component="h2"
              sx={{ color: 'navy.main', fontWeight: 600 }}
            >
              2-Year Warranty
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontSize: '1rem' }}>
            All PCs from Meow PC Store are covered by a comprehensive 2-year
            warranty in accordance with Finnish consumer law. Your investment is
            protected, and I stand behind every build I create.
          </Typography>
        </Paper> */}

        {/* The Story Behind the Name */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            mb: 6,
            p: 4,
            bgcolor: 'powderBlue.main',
            borderRadius: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
              <Pets sx={{ fontSize: 32, color: 'navy.main' }} />
              <Typography
                variant="h5"
                sx={{ color: 'navy.main', fontWeight: 600 }}
              >
                The Story Behind "Meow"
              </Typography>
            </Box>
            <Typography variant="body1" color="navy">
              A few years ago, I rescued a tiny, spicy basement kitten, who I
              named Meo. This little guy brought a lot luck and joy during a
              difficult period of my life. The name "Meow PC Store" is a way for
              me to remember him, reminding me to bring joy to my customers,
              just like he did to me.
            </Typography>
            <Typography variant="caption" color="oceanBlue">
              He is now a big, fat cat, living happily with his owner.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: { xs: 1, md: 0.4 },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              src="https://res.cloudinary.com/dlhzbr2to/image/upload/v1760983493/meo_wzapxi.jpg"
              alt="Meo the rescued kitten"
              sx={{
                width: 200,
                height: 200,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
