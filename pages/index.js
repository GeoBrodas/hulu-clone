import Header from '@/components/Header/Header';
import Nav from '@/components/Navigation/Nav';
import Results from '@/components/QueryResults/Results';
import UserCard from '@/components/ui/UserCard';
import requests from '@/utils/requests';
import Head from 'next/head';

import { getSession } from 'next-auth/client';

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
      <UserCard userData={props.session} />
      <Nav />
      <Results data={props.data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      data: request.results,
      session,
    },
  };
}

export default Home;
