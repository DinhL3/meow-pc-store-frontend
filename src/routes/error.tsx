import { Container, Typography } from '@mui/material';
import { SEOHead } from '../seo/SEOHead';

function Error() {
  return (
    <>
      <SEOHead
        title="Page not found - 404"
        description="The page you're looking for doesn't exist."
      />
      <Container maxWidth="sm">
        <Typography variant="h5">Page not found</Typography>
      </Container>
    </>
  );
}

export default Error;
