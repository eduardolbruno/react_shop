import { Provider } from 'react-redux';       // Importing Provider
import Header from '../components/Header'
import store from '../redux/store';           // Importing redux store
import '../styles/globals.css'
import axios from 'axios'
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
        </div>
      </Provider>
    </StyledEngineProvider>
  )
}

export default MyApp

