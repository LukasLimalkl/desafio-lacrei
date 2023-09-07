import MainHome from '@/components/Main';
import { Nunito } from 'next/font/google';
import * as Styled from './styles';

const nunito = Nunito({
	weight:'400',
	subsets:['latin'],
	display: 'swap',
})


export default function Home() {
  return (
    <Styled.Container className={nunito.className}>
      <MainHome />
    </Styled.Container>
  );
}
