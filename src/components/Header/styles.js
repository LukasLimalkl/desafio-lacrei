'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #eee;
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .active {
    color: #018762;
  }
`;

export const Logo = styled(Link)`
  color: #018762;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  padding-left: 4rem;
  &:hover {
    opacity: 0.6;
  }
`;

export const NavLista = styled.nav`
  display: flex;
  align-items: center;

  width: 21rem;
  height: 1.4rem;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
  margin-right: 4rem;

  @media (max-width: 48rem) {
    flex-direction: row;
    gap: 0.65rem;
    height: 3.2rem;
    width: 0.5rem;
  }
`;

export const StyledLink = styled(Link)`
  color: #1f1f1f;
  font-size: 1rem; /* 16px / 16px = 1rem */
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;

  @media (max-width: 48rem) {
    font-size: 0.8rem;
  }

  &:hover {
    opacity: 0.6;
  }
`;
