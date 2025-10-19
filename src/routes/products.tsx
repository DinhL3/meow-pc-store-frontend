import { SEOHead } from '../seo/SEOHead';
import { useTranslation } from 'react-i18next';
import ProductsPage from '../components/Products/ProductsPage';

const Products = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('seo.products.title')}
        description={t('seo.products.description')}
        keywords={t('seo.products.keywords')}
      />
      <ProductsPage />
    </>
  );
};

export default Products;
