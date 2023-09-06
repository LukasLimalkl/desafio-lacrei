// styles.js do componente Header
'use client';
import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #eee;
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  flex-shrink: 0;
  color: #018762;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  padding-left: 64px;
`;

export const NavLista = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: #1f1f1f;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  padding-right: 64px;
`;
