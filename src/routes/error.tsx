import React, { useEffect } from 'react';
import {
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  CircularProgress,
  Alert,
  Link as MaterialLink,
} from '@mui/material';

function Error() {
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h5">Page not found</Typography>
      </Container>
    </>
  );
}

export default Error;
