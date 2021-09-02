import Header from '@/components/Header/Header';
import Nav from '@/components/Navigation/Nav';
import Results from '@/components/QueryResults/Results';
import requests from '@/utils/requests';
import Head from 'next/head';

function Home(props) {
  // console.log(props.data);

  return (
    <div>
      <Head>
        <title>Hulu 2.0 Clone</title>
        <meta name="description" content="Hulu 2.0 clone by Georgey V B" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results data={props.data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  // console.log(context);

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      data: request.results,
    },
  };
}

export default Home;
