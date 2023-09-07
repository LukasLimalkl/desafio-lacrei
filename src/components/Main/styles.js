'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 31.25rem;
  display: flex;
  justify-content: space-between;
  padding: 4rem 4rem 1rem 4rem;

  .mainContainer {
    height: 26.25rem;
    width: 29rem;
    flex-direction: column;

    h1 {
      color: #1f1f1f;
      font-size: 3rem;
      font-style: normal;
      font-weight: 700;
    }

    p {
      margin-top: 3rem;
      color: #515151;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
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
  .btnContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;

    @media (max-width: 642px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: 2rem;
    }
  }

  .userBtn {
    width: 12rem;
    height: 3rem;
    border-radius: 8px;
    border: none;
    background-color: #018762;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }

    @media (max-width: 542px) {
      width: 9rem;
      height: 2rem;
      font-size: 0.8rem;
    }
  }
`;
