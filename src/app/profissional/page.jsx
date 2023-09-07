import Header from '@/components/Header';

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
    </div>
  );
}
