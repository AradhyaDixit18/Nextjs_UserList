import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => (
  <AppBar position="static" sx={{ mb: 4, backgroundColor: '#1976d2' }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Next.js User List
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
