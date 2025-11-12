import React from 'react';
import { SEOHead } from '../seo/SEOHead';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection/HeroSection';

const Root: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead title={t('seo.home.title')} description={t('seo.home.description')} keywords={t('seo.home.keywords')} />
      <HeroSection />
    </>
  );
};

export default Root;
