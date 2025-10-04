// ProductsPage.tsx
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { mockPCProducts } from './product.mock';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 3, mb: 0 }}>
        <Typography
          variant="h4"
          fontWeight="700"
          component="h1"
          color="grey.800"
          textAlign="center"
        >
          Pre-built Gaming PCs
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 1,
        }}
      >
        {mockPCProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Container>
  );
};

export default ProductsPage;
