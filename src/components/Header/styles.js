'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #eee;
  width: 100vw;
  height: 60px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .active {
    color: #018762;
  }
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
  &:hover {
    opacity: 0.6;
  }
`;

export const NavLista = styled.nav`
  display: flex;
  align-items: center;

  width: 327px;
  height: 22.373px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  gap: 2.5rem;
  margin-right: 64px;
`;

export const StyledLink = styled(Link)`
  color: #1f1f1f;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;

  &:hover {
    opacity: 0.6;
  }
`;
