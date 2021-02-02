import GlobalStyleReset from 'styles/reset.css';
import 'styles/fonts/fonts.css';
import { S3ContextProvider } from 's3/context/S3Context';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';
// import { Provider } from 'react-redux';
// import { initStore } from 'redux/store';
// import { StateLoader } from 'redux/store/stateLoader';

declare global {
  interface Window {
    __SERVER_STATE__?: typeof Object;
  }
}

// const stateLoader = new StateLoader();

// export const store = initStore(
//   window.__SERVER_STATE__ || stateLoader.loadState()
// );

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyleReset />
        <S3ContextProvider>
          <Component {...pageProps} />
        </S3ContextProvider>
      </ThemeProvider>
    // </Provider>
  );
}

export default MyApp;
