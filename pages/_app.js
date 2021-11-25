import React from "react";
import { Provider } from 'react-redux';
import Header from '../components/Header'
import Footer from '../components/Footer'
import store from '../redux/store';
import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';

const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <div className="wrapper">
          <Header {...pageProps} />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
    </StyledEngineProvider>
  )
}

export default MyApp;