'use client';
import Link from 'next/link';

import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100vw - 8rem);
  margin-left: 4rem;
  border-top: 1px solid #b0e0d3;

  .navLink {
    margin-top: 2rem;
    display: flex;
    gap: 2.5rem;
    list-style: none;
  }

  .active {
    font-weight: 800;
  }

  p {
    margin-top: 2rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: #515151;
  }

  .image {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    margin: 0;
    padding-left: 1rem;
    width: 100vw;
    height: auto;
    p {
      font-size: 0.6rem;
    }
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

export const LinkSocialMedia = styled(Link)`
  .iconSocialMedia {
    width: 2rem;
    height: 2rem;

    &:hover {
      opacity: 0.6rem;
    }
  }
`;
