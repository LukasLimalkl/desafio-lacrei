'use client';

import Image from 'next/image';
import * as Styled from './styles';

import { usePathname } from 'next/navigation';
import Face from '../../assets/FacebookLogo.svg';
import Insta from '../../assets/InstagramLogo.svg';
import Linkedin from '../../assets/LinkedinLogo.svg';

export default function Footer() {
  const router = usePathname();

  return (
    <Styled.Container>
      <nav className="navLink">
        <Styled.FooterLink href="/" className={router === '/' ? 'active' : ''}>
          Home
        </Styled.FooterLink>
        <Styled.FooterLink
          href="/pessoa-usuaria"
          className={router === '/pessoa-usuaria' ? 'active' : ''}
        >
          Pessoa Usuária
        </Styled.FooterLink>
        <Styled.FooterLink
          href="/profissional"
          className={router === '/profissional' ? 'active' : ''}
        >
          Profissional
        </Styled.FooterLink>
      </nav>

      <div className="image">
        <Styled.FooterLink
          href="https://www.instagram.com/lacrei.saude/"
          target="_blank"
        >
          <Image src={Insta} alt="Instagram" className="iconSocialMedia" />
        </Styled.FooterLink>
        <Styled.FooterLink
          href="https://www.facebook.com/lacrei.saude"
          target="_blank"
        >
          <Image src={Face} alt="Face" className="iconSocialMedia" />
        </Styled.FooterLink>

        <Styled.FooterLink
          href="https://www.linkedin.com/company/lacrei"
          target="_blank"
        >
          <Image src={Linkedin} alt="Linkedin" className="iconSocialMedia" />
        </Styled.FooterLink>
      </div>

      <p>Desafio Front-End Lacrei</p>
    </Styled.Container>
  );
}
