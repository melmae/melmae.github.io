import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import { AppContext } from './AppContext';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Theme';

function App() {
  const [page, setPage] = useState('home');

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{page, setPage}}>
        <Header />
        <Content />
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export default App