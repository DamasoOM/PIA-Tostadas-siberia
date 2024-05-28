// pages/_app.js (en Next.js)
import { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { GlobalStateProvider } from '../context/GlobalStateContext';
import '../styles/app.css'
import Index from '.';
import BootstrapStylesheet from '../components/BootstrapStylesheet';

const MyApp = ({ Component, pageProps }) => {

  return (
    <GlobalStateProvider>
      <BootstrapStylesheet/>
      <Component pageProps={pageProps} />
    </GlobalStateProvider>
  );
};

export default MyApp;