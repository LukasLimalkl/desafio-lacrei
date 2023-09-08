import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ImageHome from '../../assets/home.svg';
import * as Styled from './styles';

export default function MainHome() {
  const router = useRouter();
  return (
    <Styled.Container>
      <div className="mainContainer">
        <h1>Boas vindas a Lacrei Saúde</h1>
        <p>Uma platarforma segura e acolhedora para comunidade LGBTQIAPN+</p>

        <div className="btnContainer">
          <button
            className="userBtn"
            onClick={() => router.push('/pessoa-usuaria')}
          >
            Pessoa Usuária
          </button>
          <button
            className="proBtn"
            onClick={() => router.push('/profissional')}
          >
            Profissional
          </button>
        </div>
      </div>

      <div className="image">
        <Image src={ImageHome} alt="" className="foto" />
      </div>
    </Styled.Container>
  );
}
