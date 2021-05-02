import { useEffect } from 'react';
import { wrapper } from '../store/store';
import { ThemeProvider } from 'react-jss';
import { theme, globalStyles } from '../theme';
import Head from 'next/head';


function App({ Component, pageProps }) {

  // предотвращает дублирование стилей
  useEffect(() => {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode.removeChild(style)
    }
  }, []);

  // глобальные стили
  globalStyles();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      
    </>
  );
};

export default wrapper.withRedux(App);
