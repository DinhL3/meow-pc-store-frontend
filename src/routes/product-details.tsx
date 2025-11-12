import { SEOHead } from '../seo/SEOHead';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { mockPCProducts } from '../data/product.mock';
import ProductDetailsPage from '../components/ProductDetails/ProductDetailsPage';

const ProductDetails = () => {
  const { t, i18n } = useTranslation();
  const { productId } = useParams();
  const currentLang = i18n.language;

  // Find the product
  const product = mockPCProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <>
        <SEOHead title={t('productDetails.notFound')} />
        <ProductDetailsPage />
      </>
    );
  }

  // Dynamic SEO based on product
  const productTitle = `${product.name} - ${product.tags.join(', ')}`;
  const productDescription = currentLang === 'fi' ? product.description.fi : product.description.en;
  const productKeywords = `${product.name}, ${product.tags.join(', ')}, pelitietokone, gaming pc, ${product.price}€`;
  const productImage = product.images[0];

  return (
    <>
      <SEOHead title={productTitle} description={productDescription} keywords={productKeywords} image={productImage} />
      <ProductDetailsPage />
    </>
  );
};

export default ProductDetails;
