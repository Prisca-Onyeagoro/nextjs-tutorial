import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/layout.css';
import '../styles/globals.css';
import Head from 'next/head';

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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
