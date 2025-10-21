import { SEOHead } from '../seo/SEOHead';
import { useTranslation } from 'react-i18next';
import AboutUsPage from '../components/AboutUs/AboutUsPage';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('seo.about.title')}
        description={t('seo.about.description')}
        keywords={t('seo.about.keywords')}
      />
      <AboutUsPage />
    </>
  );
}

export default About;
