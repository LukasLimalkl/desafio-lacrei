import Image from 'next/image';
import People from '../../assets/user.svg';
import * as Styled from './styles';

export default function Pessoa() {
  return (
    <Styled.Container>
      <div className="mainContainer">
        <h1>Pessoa Usuária</h1>
        <p>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado
          por profissionais de qualidade e que atendam às suas necessidades de
          forma segura e acolhedora.
        </p>
      </div>
      <div className="image">
        <Image src={People} alt="pessoas" />
      </div>
    </Styled.Container>
  );
}
