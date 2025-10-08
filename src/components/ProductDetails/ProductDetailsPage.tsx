import { Container, Box, Stack, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { FaSignalMessenger } from 'react-icons/fa6';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import { mockPCProducts } from '../Products/product.mock';
import { Pagination, Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { CustomModal } from '../../components/shared/CustomModal';

const ProductDetailsPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const product = mockPCProducts.find((p) => p.id === productId);

  // If product is not visible, treat as not found
  if (!product || !product.isVisible) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h5">Product not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 10 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 6 },
        }}
      >
        {/* Left Half - Image Carousel */}
        <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '50%' } }}>
          {/* Main Swiper */}
          <Swiper
            style={
              {
                width: '100%',
                height: 'auto',
                marginBottom: '12px',
                borderRadius: '8px',
                '--swiper-navigation-color': '#457B9D',
                '--swiper-pagination-color': '#457B9D',
              } as React.CSSProperties
            }
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Navigation, Pagination, Thumbs]}
            pagination={{ clickable: true }}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box
                  component="img"
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: { xs: '300px', sm: '400px', md: '500px' },
                    objectFit: 'contain',
                    borderRadius: '8px',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Swiper */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            style={{ width: '100%' }}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index} style={{ cursor: 'pointer' }}>
                <Box
                  component="img"
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: { xs: '60px', sm: '80px' },
                    objectFit: 'cover',
                    borderRadius: '4px',
                    opacity: 0.6,
                    transition: 'opacity 0.3s',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Right Half - Product Info */}
        <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '50%' } }}>
          <Stack spacing={2.5}>
            {/* Product Name */}
            <Typography
              variant="h4"
              component="h1"
              fontWeight={500}
              color="navy.main"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.125rem' },
              }}
            >
              {product.name}
            </Typography>

            {product.isAvailable ? (
              <Typography
                variant="h3"
                component="p"
                color="oceanBlue"
                fontWeight={600}
                sx={{
                  fontSize: { xs: '2rem', sm: '2.5rem' },
                }}
              >
                {new Intl.NumberFormat('fi-FI', {
                  style: 'currency',
                  currency: product.currency,
                  maximumFractionDigits: 0,
                }).format(product.price)}
              </Typography>
            ) : (
              <Typography
                variant="h3"
                component="p"
                color="oceanBlue"
                fontWeight={500}
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem' },
                }}
              >
                Out of stock
              </Typography>
            )}

            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={() => setOrderModalOpen(true)}
              sx={{
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                backgroundColor: 'coralRed.main',
              }}
            >
              {product.isAvailable ? 'Order' : 'Order similar'}
            </Button>

            <Typography variant="h5" color="navy.main">
              Description
            </Typography>

            <Typography variant="body1" color="navy.main">
              {product.description.en}
            </Typography>

            <Typography variant="h5" color="navy.main">
              Warranty Information
            </Typography>

            <Typography variant="body1" color="navy.main">
              All our PCs are covered by a 2-year full warranty in accordance
              with Finnish consumer protection law.
            </Typography>
          </Stack>
        </Box>
      </Box>

      {/* Order Modal */}
      <CustomModal
        open={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        title="How to order 📦"
        maxWidth={600}
      >
        <Stack spacing={3}>
          <Typography variant="body1" color="navy.main">
            The fastest way to order this PC is to send me a message:
          </Typography>

          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <PhoneIcon sx={{ color: 'oceanBlue.main', fontSize: 28 }} />
              <Typography variant="body1" fontWeight={600} color="navy.main">
                <strong>Phone number:</strong> +358 40 858 9471
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <WhatsAppIcon sx={{ color: '#25d366', fontSize: 28 }} />
              <Typography variant="body1" color="navy.main">
                WhatsApp
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <TelegramIcon sx={{ color: '#0088cc', fontSize: 28 }} />
              <Typography variant="body1" color="navy.main">
                Telegram
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#3b45fd',
                }}
              >
                <FaSignalMessenger size={28} />
              </Box>
              <Typography variant="body1" color="navy.main">
                Signal
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                pt: 1,
                borderTop: '1px solid',
                borderColor: 'powderBlue.main',
              }}
            >
              <EmailIcon sx={{ color: 'oceanBlue.main', fontSize: 28 }} />
              <Typography variant="body1" color="navy.main">
                <strong>Email:</strong> contact@meowpc.fi
              </Typography>
            </Box>
          </Stack>

          <Typography variant="body2" color="oceanBlue.main" sx={{ pt: 1 }}>
            ⏰ I am available almost 24/7 and will try to reply as soon as
            possible!
          </Typography>
        </Stack>
      </CustomModal>
    </Container>
  );
};

export default ProductDetailsPage;
