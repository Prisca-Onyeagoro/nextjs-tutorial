import Head from 'next/head';
import '../components/Navbar.css';
import Navbar from '../components/Navbar';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>NEXTJS TUTORIAL</title>
        <meta name="description" content="Nextjs tutorial" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
