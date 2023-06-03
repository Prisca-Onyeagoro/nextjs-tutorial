import Head from 'next/head';
import '../components/Navbar.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>NEXTJS TUTORIAL</title>
        <meta name="description" content="Nextjs tutorial" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
