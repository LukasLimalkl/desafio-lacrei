import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Container>
      <Styled.Logo href="/">Lacrei</Styled.Logo>
      <Styled.NavLista>
        <Styled.StyledLink href="/">Home</Styled.StyledLink>
        <Styled.StyledLink href="/user">Pessoa Usuária</Styled.StyledLink>
        <Styled.StyledLink href="/profissional">Profissional</Styled.StyledLink>
      </Styled.NavLista>
    </Styled.Container>
  );
}
