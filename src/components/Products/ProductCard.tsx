// ProductCard.tsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import type { Product } from './product.types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 'none',
        borderRadius: 2,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={product.images[0]}
          alt={product.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 600 }}
          >
            {product.name}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: 'wrap' }}>
            {product.tags.slice(0, 2).map((tag, index) => (
              <Chip key={index} label={tag} size="small" />
            ))}
          </Stack>
          <Typography variant="h6" color="primary" fontWeight="bold">
            {new Intl.NumberFormat('fi-FI', {
              style: 'currency',
              currency: product.currency,
              maximumFractionDigits: 0,
            }).format(product.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
