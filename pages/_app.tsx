import '../styles/globals.css';
import { S3ContextProvider } from 's3/context/S3Context';

function MyApp({ Component, pageProps }) {
  return (
    <S3ContextProvider>
      <Component {...pageProps} />
    </S3ContextProvider>
  );
}

export default MyApp;
