import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import mainTheme from './styles/mainTheme';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Header />
          <Routes />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
