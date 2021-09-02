import Header from '@/components/Header/Header';
import Nav from '@/components/Navigation/Nav';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0 Clone</title>
        <meta name="description" content="Hulu 2.0 clone by Georgey V B" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Navigation */}
      <Nav />

      {/* Movie Posts */}
    </div>
  );
}
