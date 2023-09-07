'use client';
import Link from 'next/link';

import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100vw - 8rem);
  margin-left: 4rem;
  border-top: 1px solid #b0e0d3;

  > nav {
    margin-top: 2rem;
    display: flex;
    gap: 2.5rem;
    list-style: none;
  }

  .active {
    font-weight: 700;
  }
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: #1f1f1f;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &:hover {
    opacity: 0.6;
  }
`;

export const LinkSocialMedia = styled(Link)``;
