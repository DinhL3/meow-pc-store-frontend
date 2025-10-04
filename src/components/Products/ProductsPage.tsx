// ProductsPage.tsx
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { mockPCProducts } from './product.mock';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="h3"
          fontWeight="500"
          component="h1"
          color="primary.dark"
          textAlign="center"
          gutterBottom
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
