import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { Product } from '../../data/product.types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 275,
        boxShadow: 'none',
        borderRadius: 2,
        // background: '#f1faee',
      }}
    >
      <CardActionArea onClick={handleCardClick}>
        <CardMedia
          component="img"
          height="250"
          image={product.images[0]}
          alt={product.name}
          sx={{
            objectFit: 'cover',
            transform: 'scale(1.1)',
          }}
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
            color="navy.main"
            sx={{ fontWeight: 500 }}
          >
            {product.name}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: 'wrap' }}>
            {product.tags.slice(0, 2).map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                size="small"
                variant="outlined"
                sx={{
                  color: 'navy.main',
                  borderColor: 'oceanBlue.main',
                  borderWidth: 1,
                  borderStyle: 'solid',
                }}
              />
            ))}
          </Stack>
          {product.isAvailable ? (
            <Typography variant="h6" color="oceanBlue" fontWeight="500">
              {new Intl.NumberFormat('fi-FI', {
                style: 'currency',
                currency: product.currency,
                maximumFractionDigits: 0,
              }).format(product.price)}
            </Typography>
          ) : (
            <Typography variant="h6" color="oceanBlue" fontWeight="500">
              {t('products.outOfStock')}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
