'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 32rem;
  display: flex;
  justify-content: space-between;
  padding: 4rem 4rem 1rem 4rem;

  .mainContainer {
    height: 28rem;
    width: 32rem;
    flex-direction: column;

    h1 {
      color: #1f1f1f;
      font-size: 3rem;
      font-style: normal;
      font-weight: 700;
    }

    p {
      padding-left: 1.6rem;
      margin-top: 3rem;
      color: #515151;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      border-left: 5px solid #018762;
    }

    @media (max-width: 542px) {
      height: auto;
      width: 22rem;
      margin-bottom: 2rem;
      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }

    @media (max-width: 432px) {
      height: auto;
      width: 18rem;
      margin-bottom: 2rem;

      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }

  .image {
    width: 34rem;
    height: 28rem;
    display: flex;

    @media (max-width: 1124px) {
      width: 25rem;
      height: 19rem;
      margin-top: 2rem;
    }

    @media (max-width: 542px) {
      width: 21rem;
      height: 16rem;
      margin-right: 0;
      .foto {
        width: 20rem;
        height: 15rem;
      }
    }
  }
`;
