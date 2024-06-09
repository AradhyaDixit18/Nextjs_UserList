import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ py: 2, textAlign: 'center', mt: 'auto', backgroundColor: '#1976d2', color: '#fff' }}>
    <Typography variant="body2">
      &copy; 2024 Next.js App
    </Typography>
  </Box>
);

export default Footer;
