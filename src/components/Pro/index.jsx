import Image from 'next/image';
import Pro from '../../assets/profissional.svg';
import * as Styled from './styles';

export default function ProUser() {
  return (
    <Styled.Container>
      <div className="mainContainer">
        <h1>Profissional</h1>
        <p>
          Buscamos recrutar pessoas profissionais da saúde que entendam as
          necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+
        </p>
      </div>
      <div className="image">
        <Image src={Pro} alt="Profissionais" />
      </div>
    </Styled.Container>
  );
}
