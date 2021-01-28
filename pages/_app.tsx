import '../styles/globals.scss';
import 'react';
import Head from 'next/head';
import 'react-dom';
import { useRef } from 'react';
import { GetStaticProps} from 'next';
import GetGalleryImages from '../lib/GetGalleryImage';


function MyApp({ Component, pageProps }) {

  return (<> 
  <Head>
  <meta charSet="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  </Head>
  <Component {...pageProps} />
  </>)
}

export default MyApp
