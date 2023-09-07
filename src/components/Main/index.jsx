import Image from 'next/image';
import ImageHome from '../../assets/home.svg';
import * as Styled from './styles';

export default function MainHome() {
  return (
    <Styled.Container>
      <div className="mainContainer">
        <h1>Boas vindas a Lacrei Saúde</h1>
        <p>Uma platarforma segura e acolhedora para comunidade LGBTQIAPN+</p>
      </div>

      <div className="btnContainer">
        <button className="userBtn">Pessoa Usuária</button>
        <button className="proBtn">Profissional</button>
      </div>
      <div className="image">
        <Image src={ImageHome} alt="" />
      </div>
    </Styled.Container>
  );
}
