'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Pessoa from '@/components/Pessoa';
import { useEffect } from 'react';

export default function User() {
  const setPageTitle = () => {
    document.title = 'Pessoa Usuária | Desafio Lacrei';
  };

  useEffect(() => {
    setPageTitle();
  });
  return (
    <div>
      <Header />
      <Pessoa />
      <Footer />
    </div>
  );
}
