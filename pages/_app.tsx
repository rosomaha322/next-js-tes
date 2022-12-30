import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/src/common/theme';
import { useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { config } from '@/src/lib/react-query-config';
import { Devtools } from '@/src/common/components';

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

function App({ Component, pageProps }: AppProps) {
  // This ensures that data is not shared
  // between different users and requests
  const [queryClient] = useState(() => new QueryClient(config));

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={themeObject}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
          <Devtools />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
