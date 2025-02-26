import Header from './Header';
import Footer from './Footer';
import { Container } from '@mui/material';

const Layout = ({ children }) => (
  <>
    <Header />
    <Container>
      {children}
    </Container>
    <Footer />
  </>
);

export default Layout;
