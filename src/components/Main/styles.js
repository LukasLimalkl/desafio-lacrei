'use client';

import styled from 'styled-components';

export const Container = styled.div`

	width: 100vw;
  height: 31.25rem;
  display: flex;
  justify-content: space-between;
  padding: 4rem 4rem 1rem 4rem;

	.mainContainer{
		height: 26.25rem;
		width:29rem;
		flex-direction: column;

  h1{
    color: #1F1F1F;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
  }

  p{
    margin-top:3rem;
    color: #515151;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
  }

  @media (max-width: 542px) {
    height:auto;
    width:22rem;
    margin-bottom:2rem;
    h1 {
      font-size:2rem;
    }
    p{
      font-size: 1rem;
    }
  }

  @media (max-width: 432px) {
    height:auto;
    width:18rem;
    margin-bottom:2rem;

    h1{
      font-size: 1.5rem;
    }

    p{
      font-size:0.8rem;
    }
  }
	}



`;
