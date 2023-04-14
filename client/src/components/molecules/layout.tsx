import Footer from '../atoms/marginals/Footer';
import Topbar from '../atoms/marginals/Topbar';
import { Container } from '../atoms/shared';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Topbar />
    <main style={{ flex: 1 }}>
      <Container>{children}</Container>
    </main>
    <Footer />
  </div>
);

export default Layout;
