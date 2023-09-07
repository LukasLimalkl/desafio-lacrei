import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainHome from '@/components/Main';
import * as Styled from './styles';

export default function Home() {
  return (
    <Styled.Container>
      <Header />
      <MainHome />
      <Footer />
    </Styled.Container>
  );
}
