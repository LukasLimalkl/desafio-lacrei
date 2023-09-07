import Image from 'next/image';
import * as Styled from './styles';

import Face from '../../assets/FacebookLogo.svg';
import Insta from '../../assets/InstagramLogo.svg';
import Linkedin from '../../assets/LinkedinLogo.svg';

export default function Footer() {
  return (
    <Styled.Container>
      <nav>
        <Styled.FooterLink href="/">Home</Styled.FooterLink>
        <Styled.FooterLink href="/user">Pessoa Usuária</Styled.FooterLink>
        <Styled.FooterLink href="/profissional">Profissional</Styled.FooterLink>
      </nav>

      <div className="image">
        <Styled.FooterLink
          href="https://www.instagram.com/lacrei.saude/"
          target="_blank"
        >
          <Image src={Insta} alt="Instagram" />
        </Styled.FooterLink>
        <Styled.FooterLink
          href="https://www.facebook.com/lacrei.saude"
          target="_blank"
        >
          <Image src={Face} alt="Face" />
        </Styled.FooterLink>

        <Styled.FooterLink
          href="https://www.linkedin.com/company/lacrei"
          target="_blank"
        >
          <Image src={Linkedin} alt="Linkedin" />
        </Styled.FooterLink>
      </div>

      <p>Desafio Front-End Lacrei</p>
    </Styled.Container>
  );
}
