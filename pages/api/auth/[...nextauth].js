import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/signup',
  },
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
