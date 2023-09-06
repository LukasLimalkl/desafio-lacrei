import * as Styled from './styles';

export default function Header() {
  return (
    <Styled.Container>
      <header>
        <Styled.Logo>
          <Styled.LinkStyle href="/">Lacrei</Styled.LinkStyle>
        </Styled.Logo>
        <nav>
          <Styled.LinkStyle href="/">Home</Styled.LinkStyle>
          <Styled.LinkStyle href="/user">User</Styled.LinkStyle>
          <Styled.LinkStyle href="/profissional">profissional</Styled.LinkStyle>
        </nav>
      </header>
    </Styled.Container>
  );
}
