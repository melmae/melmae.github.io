import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import { AppContext } from './AppContext';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme.jsx';
import {Box, CssBaseline} from "@mui/material";

function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const [page, setPage] = useState('home');

  return (
    <ThemeProvider theme={theme(colorScheme)}>
        <CssBaseline />
        <AppContext.Provider value={{colorScheme, setColorScheme, page, setPage}}>
            <Box sx={{ height: '100vh' }}>
              <Header />
              <Content />
            </Box>
        </AppContext.Provider>
    </ThemeProvider>
  )
}

export default App