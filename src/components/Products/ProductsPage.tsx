import { Container, Typography, Box } from '@mui/material';
import { mockPCProducts } from './product.mock';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  // Filter out products that are not visible
  const visibleProducts = mockPCProducts.filter((product) => product.isVisible);

  return (
    <Container maxWidth="lg" sx={{ pb: 10 }}>
      <Box sx={{ mt: 3, mb: 1 }}>
        <Typography
          variant="h4"
          fontWeight="600"
          component="h1"
          textAlign="center"
          color="navy.main"
        >
          Pre-built Gaming PCs
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
