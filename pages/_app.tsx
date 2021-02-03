import React, { useEffect } from 'react';
import GlobalStyleReset from 'styles/reset.css';
import 'styles/fonts/fonts.css';
import { S3ContextProvider } from 's3/context/S3Context';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';
import { StateLoader } from 'redux/store/stateLoader';
import { GlobalState } from 'redux/types/store';
import { Provider, useStore } from 'react-redux';
import { wrapper } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

declare global {
  interface Window {
    __SERVER_STATE__?: typeof Object;
  }
}

function MyApp({ Component, pageProps }) {
  const store = useStore<GlobalState>();

  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <ThemeProvider theme={theme}>
        <GlobalStyleReset />
        <S3ContextProvider>
          <Component {...pageProps} />
        </S3ContextProvider>
      </ThemeProvider>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
