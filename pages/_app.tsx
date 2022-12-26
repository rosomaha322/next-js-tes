import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/src/common/theme';
import { wrapper } from '@/src/redux/store';

const inter = Inter({
  weight: ['700', '500', '400'],
  preload: true,
  adjustFontFallback: true,
  style: 'normal',
});

export const themeObject = {
  ...theme,
  fonts: { inter },
};

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Provider store={store as any}>
        <ThemeProvider theme={themeObject}>
          <GlobalStyle />
          <Component {...props.pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
