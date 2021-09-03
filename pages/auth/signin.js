import { getProviders, signIn, getSession } from 'next-auth/client';

import Head from 'next/head';
import Link from 'next/link';

function signup({ providers }) {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Hey there! I am Georgey, the developer of this project. I made
              this project to explore my React skills and drive away my fear for
              authentication, so.... yeah happy browsing
            </h1>
            <p className="leading-relaxed mt-4">
              Find me on <Link passHref>Twitter</Link>
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>

            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-gray-500 mt-3">Sign Up using Google</p>
          </div>
        </div>
      </section>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders(context.req);

  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  return {
    props: { providers },
  };
}

export default signup;
