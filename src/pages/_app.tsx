import React from 'react';
import type { AppProps } from 'next/app';
import CustomThemeProvider from '../styles/CustomThemeProvider';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
};

export default MyApp;
