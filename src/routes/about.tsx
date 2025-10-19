import { Container, Typography } from '@mui/material';
import { SEOHead } from '../seo/SEOHead';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('seo.about.title')}
        description={t('seo.about.description')}
        keywords={t('seo.about.keywords')}
      />
      <Container maxWidth="sm">
        <Typography variant="h5">About Us</Typography>
      </Container>
    </>
  );
}

export default About;
