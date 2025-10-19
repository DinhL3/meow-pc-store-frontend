import { SEOHead } from '../seo/SEOHead';
import { useTranslation } from 'react-i18next';
import CustomBuildPage from '../components/CustomBuild/CustomBuildPage';

export default function CustomBuild() {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('seo.customBuild.title')}
        description={t('seo.customBuild.description')}
        keywords={t('seo.customBuild.keywords')}
      />
      <CustomBuildPage />
    </>
  );
}
