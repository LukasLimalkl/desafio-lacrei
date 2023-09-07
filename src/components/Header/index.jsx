'use client';

import { usePathname } from 'next/navigation';
import * as Styled from './styles';

export default function Header() {
  const router = usePathname();

  console.log(router);

  return (
    <Styled.Container>
      <Styled.Logo href="/">Lacrei</Styled.Logo>
      <Styled.NavLista>
        <Styled.StyledLink href="/" className={router === '/' ? 'active' : ''}>
          Home
        </Styled.StyledLink>
        <Styled.StyledLink
          href="/user"
          className={router === '/user' ? 'active' : ''}
        >
          Pessoa Usuária
        </Styled.StyledLink>
        <Styled.StyledLink
          href="/profissional"
          className={router === '/profissional' ? 'active' : ''}
        >
          Profissional
        </Styled.StyledLink>
      </Styled.NavLista>
    </Styled.Container>
  );
}
