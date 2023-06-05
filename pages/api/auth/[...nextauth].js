import NextAuth from 'next-auth/next';
import GitHubProviders from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GitHubProviders({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  database: process.env.DB_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: 'vukgubyyud8tgocyhs',
  },
});
