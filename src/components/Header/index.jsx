'use client';

import { useRouter } from 'next/navigation';
import * as Styled from './styles';

export default function Header() {
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.Logo href="/">Lacrei</Styled.Logo>
      <Styled.NavLista>
        <Styled.StyledLink
          href="/"
          className={router.pathname === '/' ? 'active' : ''}
        >
          Home
        </Styled.StyledLink>
        <Styled.StyledLink
          href="/user"
          className={router.pathname === '/user' ? 'active' : ''}
        >
          Pessoa Usuária
        </Styled.StyledLink>
        <Styled.StyledLink
          href="/profissional"
          className={router.pathname === '/profissional' ? 'active' : ''}
        >
          Profissional
        </Styled.StyledLink>
      </Styled.NavLista>
    </Styled.Container>
  );
}
