'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MainHome from '@/components/Main';
import { useEffect } from 'react';
import * as Styled from './styles';

export default function Home() {
  const setPageTitle = () => {
    document.title = 'Home | Desafio Lacrei';
  };

  useEffect(() => {
    setPageTitle();
  });
  return (
    <Styled.Container>
      <Header />
      <MainHome />
      <Footer />
    </Styled.Container>
  );
}
