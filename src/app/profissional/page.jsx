'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Prouser from '@/components/Pro';
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
      <Prouser />
      <Footer />
    </div>
  );
}
