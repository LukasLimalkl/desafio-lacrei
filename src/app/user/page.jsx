import Header from '@/components/Header';

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
    </div>
  );
}
