'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProUser from '@/components/Pro';
import { useEffect } from 'react';

export default function Profissional() {
  const setPageTitle = () => {
    document.title = 'Profissional | Desafio Lacrei';
  };

  useEffect(() => {
    setPageTitle();
  });

  return (
    <div>
      <Header />
      <ProUser />
      <Footer />
    </div>
  );
}
