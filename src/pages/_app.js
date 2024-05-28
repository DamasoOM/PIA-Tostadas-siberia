// pages/_app.js (en Next.js)
import { GlobalStateProvider } from '../context/GlobalStateContext';
import '../styles/app.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
};

export default MyApp;