import '../styles/globals.css';
import 'styles/fonts/fonts.css';
import { S3ContextProvider } from 's3/context/S3Context';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <S3ContextProvider>
        <Component {...pageProps} />
      </S3ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
