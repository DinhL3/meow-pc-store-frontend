import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { mockPCProducts } from '../../data/product.mock';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const { t } = useTranslation();

  // Filter out products that are not visible
  const visibleProducts = mockPCProducts.filter((product) => product.isVisible);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 3, mb: 1 }}>
        <Typography
          variant="h4"
          fontWeight="600"
          component="h1"
          textAlign="center"
          color="navy.main"
        >
          {t('products.title')}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  );
};

export default ProductsPage;
