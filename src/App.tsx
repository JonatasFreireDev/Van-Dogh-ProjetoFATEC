import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import AppProvider from './hooks';

import mainTheme from './styles/mainTheme';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <AppProvider>
            <Header />
            <Routes />
            <Footer />
          </AppProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
